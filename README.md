# Agent skills

Reusable engineering workflows for OpenAI Codex and other tools that support the [Agent Skills format](https://agentskills.io/specification). Each skill contains focused instructions, supporting references, and evaluations. Skills guide an agent's decisions; they do not certify a product or grant access to it.

Start product work with **Product Engineering Studio**. It routes visual decisions to **Vibe UI**, which coordinates five focused helpers for UX, typography, color, geometry and motion. **UI Quality Gate** inspects, repairs and rechecks the completed result. See [how the workflow fits together](docs/DESIGN_WORKFLOW.md). The [current verification record](evals/product-design/quality-gate-v2.md) separates tested behavior from unproven design-quality claims. Earlier catalog comparisons remain historical evidence, not a claim that instructions guarantee great design.

## Catalog

| Skill | Use it for |
| --- | --- |
| [agent-readiness](skills/agent-readiness/SKILL.md) | Audit, plan, or implement improvements to how agents discover, read, and use a website, SaaS, or API. Based on AgentReady v2.0 with conditional applicability and explicit evidence. |
| [product-engineering-studio](skills/product-engineering-studio/SKILL.md) | Start here for product work: choose proportional design depth, explore real alternatives, deliver complete flows and assess correctness, usability, craft and character. |
| [vibe-ui](skills/vibe-ui/SKILL.md) | Art-direct, build, review, or polish interfaces with product-specific character, deliberate detail and rendered evidence. |
| [ui-ux-patterns](skills/ui-ux-patterns/SKILL.md) | Choose task-appropriate layouts and flows using sixteen conditional pattern decisions. |
| [ui-typography](skills/ui-typography/SKILL.md) | Choose from ten adaptable type directions and resolve readable roles, rhythm and wrapping. |
| [ui-color](skills/ui-color/SKILL.md) | Construct contextual palettes from eight approaches, define semantic roles and verify actual pairings. |
| [ui-geometry](skills/ui-geometry/SKILL.md) | Establish consistent spacing, dimensions, borders, outlines, radii and optical alignment. |
| [ui-motion](skills/ui-motion/SKILL.md) | Specify immediate feedback, purposeful transitions, honest async behavior and supported haptics. |
| [ui-quality-gate](skills/ui-quality-gate/SKILL.md) | Inspect twelve areas of interface quality, drive authorized corrections and verify evidence before calling the work ready. |
| [landing-page-design](skills/landing-page-design/SKILL.md) | Structure a persuasive page around its audience, offer, proof and next action. |
| [product-ux-writing](skills/product-ux-writing/SKILL.md) | Write clear interface copy, labels, onboarding, errors and feedback in the product's voice. |

Credit to [AgentReady](https://www.agentready.org/) and its contributors for the specification and supporting research behind `agent-readiness`. This skill is an independent implementation of their guidance.

## Install in Codex

Prerequisites: Codex with local skills support, Git, and a POSIX shell for these examples. These instruction skills have no runtime package dependencies. Agent-readiness HTTP checks need network access and a fetch tool. Vibe UI uses the target project's build tools; visual verification needs a renderer or browser. Python 3.11+ is needed only for library validation and synthetic evaluations.

Clone the library, then link the skills you want. For the product/design workflow, install the coordinated set; Studio remains the entry point:

```sh
git clone https://github.com/DimitrisTheo-Dev/agent-skills.git
cd agent-skills
mkdir -p "$HOME/.agents/skills"
for skill in product-engineering-studio vibe-ui ui-ux-patterns ui-typography ui-color ui-geometry ui-motion ui-quality-gate; do
  ln -s "$PWD/skills/$skill" "$HOME/.agents/skills/$skill"
done
```

For an existing checkout, start with `cd /absolute/path/to/agent-skills`. `ln -s` deliberately refuses to replace an existing installation. Keep the checkout in place while the link exists. Alternatively, copy just that skill folder into the same destination, and copy future updates explicitly. For a project-only installation use `<project>/.agents/skills/agent-readiness` instead. Other hosts use their own discovery locations; copy the whole skill folder to the location their documentation specifies.

[Current Codex documentation](https://learn.chatgpt.com/docs/build-skills) confirms these discovery locations and symlink support, verified 2026-10-25. An arbitrary `skills/` checkout alone is not a global installation. Open `/skills` or type `$` in Codex CLI/IDE and confirm the installed names appear. Refresh the skill picker if discovery has not refreshed. Automatic selection is enabled by default and matches the description; explicitly naming the skill is more predictable. Avoid duplicate installations with the same name.

The same skill directory is portable across compatible hosts; `agents/openai.yaml` is optional Codex UI metadata. Public plugin packaging is a separate distribution option, not required for this local installation. No GitHub release or marketplace package is published by this checkout.

## Start product work

```text
$product-engineering-studio Build this experience for <person> so they can <outcome>.
Use the existing stack and real content. Explore unsettled design choices,
carry the chosen character through the complete flow, and verify the result.
```

Studio chooses Fix, Extend or Shape from the task. Small fixes reuse the product's decisions. New directions compare realistic alternatives before committing. Vibe UI coordinates only the relevant design specialists when installed; Studio includes a fallback when an optional specialist is absent. No fixed palette, typography preset or animation quota applies across products.

The first complete UI flow includes deliberate layout/type, relevant states, feedback and purposeful motion. Report correctness, usability, craft and character separately. Keep decisions in the product's existing design contract or `DESIGN.md`; tests and reviewer judgments remain distinct evidence. User input is needed only for consequential missing priorities, not routine implementation choices.

See the [comparison protocol](evals/product-design/README.md) for the local catalog pilot, raw artifacts and evidence limits. A single pilot cannot establish reliable taste.

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

## Use vibe-ui

```text
$vibe-ui Art-direct this website using its audience, real content, and brand.
Return a focused design brief without editing code.

$vibe-ui Polish this screen's typography, hierarchy, and spacing.
Preserve its behavior and verify the rendered result where tools permit.
```

Analysis/review leaves files unchanged. Art direction produces a brief or requested design artifact. Build/polish implements the requested changes. See [usage examples](skills/vibe-ui/examples/invocations.md) and [evaluation results](evals/vibe-ui/README.md).

## Validate and contribute

```sh
python3 -m venv .venv
.venv/bin/python -m pip install -r requirements-dev.txt
.venv/bin/python scripts/check.py
```

The same check runs in GitHub Actions. It validates metadata, local links, and Python syntax with the pinned upstream validator and repository checks, then runs the unit tests for the validator and synthetic HTTP fixtures. For behavior changes, compare the current and proposed skill on the same cases. [Evaluation workflow](evals/README.md)

See [CONTRIBUTING.md](CONTRIBUTING.md) before adding a skill and [the prioritized backlog](docs/SKILL_BACKLOG.md) for future work.

Original material is [MIT licensed](LICENSE). [NOTICE.md](NOTICE.md) records external attribution and source-license boundaries. No private project source is bundled.
