#!/usr/bin/env python3
"""Validate skill metadata, contained resources, local Markdown links, and Python syntax.

Read-only and offline after development dependencies are installed. Exit 1 on any
problem. External URLs are deliberately not fetched.
"""

import re
import sys
from pathlib import Path
from urllib.parse import unquote, urlsplit

import yaml
from markdown_it import MarkdownIt
from skills_ref import validate as validate_skill

MARKDOWN = MarkdownIt("commonmark")


def anchors(path):
    """Approximate GitHub heading IDs, including duplicate suffixes and explicit IDs."""
    text = path.read_text(encoding="utf-8")
    found = set(re.findall(r'<a\s+id=[\'\"]([^\'\"]+)', text))
    counts = {}
    tokens = MARKDOWN.parse(text)
    for i, token in enumerate(tokens):
        if token.type == "heading_open":
            heading = tokens[i + 1]
            plain = "".join(t.content for t in heading.children or [] if t.type in {"text", "code_inline"})
            slug = re.sub(r"[^\w\- ]", "", plain.lower()).replace(" ", "-")
            count = counts.get(slug, 0)
            counts[slug] = count + 1
            found.add(f"{slug}-{count}" if count else slug)
    return found


def local_links(path, root):
    errors = []
    targets = set()
    for token in MARKDOWN.parse(path.read_text(encoding="utf-8")):
        for child in token.children or []:
            if child.type not in {"link_open", "image"}:
                continue
            href = child.attrGet("href" if child.type == "link_open" else "src") or ""
            url = urlsplit(href)
            if url.scheme or url.netloc:
                continue
            target = (path.parent / unquote(url.path)).resolve() if url.path else path.resolve()
            label = f"{path.relative_to(root)}: {href}"
            if not target.is_relative_to(root):
                errors.append(f"Link escapes repository: {label}")
            elif not target.exists():
                errors.append(f"Missing local target: {label}")
            else:
                targets.add(target)
                if url.fragment and target.suffix == ".md" and unquote(url.fragment) not in anchors(target):
                    errors.append(f"Missing anchor: {label}")
    return errors, targets


def validate_repo(root):
    root = root.resolve()
    errors = []
    skill_dirs = sorted(p for p in (root / "skills").glob("*") if p.is_dir())
    if not skill_dirs:
        errors.append("No skill directories found")
    for skill in skill_dirs:
        for error in validate_skill(skill):
            errors.append(f"{skill.name}: {error}")
        for path in skill.rglob("*"):
            if path.is_symlink():
                errors.append(f"Skill resources must be real files: {path.relative_to(root)}")
        metadata = skill / "agents/openai.yaml"
        if metadata.exists():
            try:
                config = yaml.safe_load(metadata.read_text(encoding="utf-8"))
                if not isinstance(config, dict) or not isinstance(config.get("interface"), dict):
                    raise ValueError("interface must be a mapping")
                interface = config["interface"]
                for key in ["display_name", "short_description", "default_prompt"]:
                    if not isinstance(interface.get(key), str) or not interface[key].strip():
                        raise ValueError(f"interface.{key} must be a nonempty string")
                if not 25 <= len(interface["short_description"]) <= 64:
                    raise ValueError("short_description must have 25-64 characters")
                if f"${skill.name}" not in interface["default_prompt"]:
                    raise ValueError("default_prompt must mention the skill")
                policy = config.get("policy", {})
                if not isinstance(policy, dict):
                    raise ValueError("policy must be a mapping")
                if "allow_implicit_invocation" in policy and not isinstance(policy["allow_implicit_invocation"], bool):
                    raise ValueError("allow_implicit_invocation must be a boolean")
            except (yaml.YAMLError, TypeError, KeyError, ValueError) as exc:
                errors.append(f"{metadata.relative_to(root)}: {exc}")

        # A copied skill must retain every linked resource it needs.
        reachable = set()
        pending = [skill / "SKILL.md"]
        while pending:
            path = pending.pop()
            if path in reachable or not path.is_file():
                continue
            reachable.add(path)
            if path.suffix == ".md":
                _, links = local_links(path, root)
                for link in links:
                    if not link.is_relative_to(skill):
                        errors.append(f"Skill link leaves its installable folder: {path.relative_to(root)}")
                    elif link not in reachable:
                        pending.append(link)
        for reference in (skill / "references").rglob("*.md"):
            if reference not in reachable:
                errors.append(f"Unreachable reference: {reference.relative_to(root)}")

    paths = [p for p in root.rglob("*") if p.is_file() and not any(part in {".git", ".venv", "__pycache__", ".eval-results"} for part in p.relative_to(root).parts)]
    for path in paths:
        if path.suffix == ".md":
            link_errors, _ = local_links(path, root)
            errors.extend(link_errors)
        if path.suffix == ".py":
            try:
                compile(path.read_text(encoding="utf-8"), str(path), "exec")
            except SyntaxError as exc:
                errors.append(f"{path.relative_to(root)}: {exc}")
    return sorted(set(errors))


def main():
    root = Path(__file__).resolve().parents[1]
    errors = validate_repo(root)
    if errors:
        print("\n".join(errors), file=sys.stderr)
        return 1
    print("Valid: upstream skill format, UI metadata, contained references, local links/anchors, Python syntax")
    return 0


if __name__ == "__main__":
    sys.exit(main())
