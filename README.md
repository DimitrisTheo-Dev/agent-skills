# Agent skills

Reusable engineering workflows for OpenAI Codex and other tools that support the [Agent Skills format](https://agentskills.io/specification). Each skill contains focused instructions, supporting references, and evaluations. Skills guide an agent's decisions; they do not certify a product or grant access to it.

## Catalog

| Skill | Use it for |
| --- | --- |
| [agent-readiness](skills/agent-readiness/SKILL.md) | Audit, plan, or implement improvements to how agents discover, read, and use a website, SaaS, or API. Based on AgentReady v2.0 with conditional applicability and explicit evidence. |

## Install one skill in Codex

Prerequisites: Codex with local skills support, Git, and a POSIX shell for these examples. The skill itself has no package dependencies. HTTP checks require network access and a fetch tool such as curl; code-only audits work without network access. Python 3.11+ is needed only for library validation and synthetic evaluations.

Clone the library, then link just the skill you want:

```sh
git clone https://github.com/DimitrisTheo-Dev/agent-skills.git
cd agent-skills
mkdir -p "$HOME/.agents/skills"
ln -s "$PWD/skills/agent-readiness" "$HOME/.agents/skills/agent-readiness"
```

For an existing checkout, start with `cd /absolute/path/to/agent-skills`. `ln -s` deliberately refuses to replace an existing installation. Keep the checkout in place while the link exists. Alternatively, copy just that skill folder into the same destination, and copy future updates explicitly. For a project-only installation use `<project>/.agents/skills/agent-readiness` instead. Other hosts use their own discovery locations; copy the whole skill folder to the location their documentation specifies.

[Current Codex documentation](https://learn.chatgpt.com/docs/build-skills) confirms these discovery locations and symlink support, verified 2026-10-25. An arbitrary `skills/` checkout alone is not a global installation. Open `/skills` or type `$` in Codex CLI/IDE and confirm `agent-readiness` appears. Restart Codex if discovery has not refreshed. Automatic selection is enabled by default and matches the description; explicitly naming the skill is more predictable. Avoid duplicate installations with the same name.

The same skill directory is portable across compatible hosts; `agents/openai.yaml` is optional Codex UI metadata. Public plugin packaging is a separate distribution option, not required for this local installation. No GitHub release or marketplace package is published by this checkout.

## Use agent-readiness

```text
$agent-readiness Audit this website for AI agent readiness. Use code inspection
and bounded read-only checks of https://example.com. Do not change the project.

$agent-readiness Plan agent integrations for this SaaS. Agents should create
reports on behalf of a consenting user. Prioritize practical blockers.

$agent-readiness Implement the relevant AgentReady improvements in this Next.js
app, following its architecture. Add focused checks and report what you verified.
```

Audit is the default for an unspecified readiness review and makes no target changes. Planning also leaves the target unchanged. Implementation requires a request to make changes. Findings include source/level, observed evidence, pass/fail/unknown/not applicable, impact, action, and verification. A static website does not automatically need MCP or OAuth. Private content remains private in every mode.

Read the [requirement map](skills/agent-readiness/references/specification.md) for scope, the [source record](skills/agent-readiness/references/sources.md) for provenance and limits, and the [evaluation guide](evals/agent-readiness/README.md) for tested scenarios and reproduction.

## Validate and contribute

```sh
python3 -m venv .venv
.venv/bin/python -m pip install -r requirements-dev.txt
.venv/bin/python scripts/validate.py
.venv/bin/python -m unittest discover -s tests -v
```

Validation runs the pinned upstream reference validator, checks metadata and local documentation paths/anchors, and compiles Python scripts. Unit tests verify validator failure cases and the synthetic HTTP fixtures. Behavioral agent evaluations are separate and documented with their actual results. See [CONTRIBUTING.md](CONTRIBUTING.md) before adding a skill and [the prioritized backlog](docs/SKILL_BACKLOG.md) for future work.

Original material is [MIT licensed](LICENSE). [NOTICE.md](NOTICE.md) records external attribution and source-license boundaries. No private project source is bundled.
