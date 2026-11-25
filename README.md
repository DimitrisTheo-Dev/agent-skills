# Agent skills

Agent Skills for product engineering, UI design and agent readiness. They work in Claude Code, Codex
and other tools that support the [Agent Skills format](https://agentskills.io/specification). Each
skill holds focused instructions and references, and most have evaluation records in
[`evals/`](evals/README.md).

Start product work with **Product Engineering Studio**. It sends visual decisions to **Vibe UI**,
which uses five specialists for UX, typography, color, geometry and motion. **UI Quality Gate**
checks the finished screen, fixes what fails and checks again. See [how the workflow fits
together](docs/DESIGN_WORKFLOW.md).

## Install in Claude Code

```text
/plugin marketplace add DimitrisTheo-Dev/agent-skills
/plugin install dtheo@dtheo
```

This installs the 13 skills below as `/dtheo:<skill>` and connects the read-only [dtheo/ui MCP
server](https://ui.dtheo.dev/docs/agents). Try:

```text
/dtheo:product-engineering-studio Build a test-run results screen with a pass/fail summary,
a duration histogram and a limit line. Use dtheo/ui and verify the result.
```

Update with `/plugin marketplace update dtheo`. For Codex and other hosts, see [Install in
Codex](#install-in-codex).

## Three parts, one workflow

| Step | Project | What it gives you |
| --- | --- | --- |
| Plan and design | **agent-skills** (this repo) | Skills that frame the work, set the design direction and review the rendered result |
| Build | [dtheo/ui](https://github.com/DimitrisTheo-Dev/dtheo-ui) | React components and engineering charts, an MCP server for agents, and `dtheo check` for design mistakes |
| Ship | [product-engineering-quality-gate](https://github.com/DimitrisTheo-Dev/product-engineering-quality-gate) | A GitHub Actions gate that runs your checks, `dtheo check` included, and reports each one |

Each part works alone. Together, Vibe UI looks components up in dtheo/ui and runs `dtheo check`
before the rendered review, and the gate runs it on every pull request once it is listed in
`quality-gate.config.json`. [dtheo/ui](https://github.com/DimitrisTheo-Dev/dtheo-ui) is built with
all three.

## Catalog

| Skill | Use it for |
| --- | --- |
| [product-engineering-studio](skills/product-engineering-studio/SKILL.md) | The entry point: frame a brief, prove the risky part, then build and verify one working flow. |
| [product-readiness](skills/product-readiness/SKILL.md) | Decide which launch requirements a product needs beyond visual design, and verify them at kickoff and release. |
| [agent-readiness](skills/agent-readiness/SKILL.md) | Audit, plan or implement how agents discover, read and use a website, SaaS or API. Based on AgentReady v2.0. |
| [vibe-ui](skills/vibe-ui/SKILL.md) | Set the visual direction for an app interface and coordinate the five UI specialists below. |
| [ui-ux-patterns](skills/ui-ux-patterns/SKILL.md) | Structure a screen or flow from the user's task: list or cards, one page or steps, navigation, forms. |
| [ui-typography](skills/ui-typography/SKILL.md) | Choose or fix type: font, scale, headings, line length, wrapping and numerals. |
| [ui-color](skills/ui-color/SKILL.md) | Build a contextual palette, define semantic roles and check the pairs that appear. |
| [ui-geometry](skills/ui-geometry/SKILL.md) | Set spacing, sizes, borders, radii, elevation and optical alignment. |
| [ui-motion](skills/ui-motion/SKILL.md) | Specify feedback, transitions, honest loading and supported haptics. |
| [ui-quality-gate](skills/ui-quality-gate/SKILL.md) | Inspect a built interface across twelve areas, fix what fails and recheck before calling it ready. |
| [design-playbook](skills/design-playbook/SKILL.md) | Carry a chosen design across several surfaces or workers, or stop a defect that keeps returning. |
| [landing-page-design](skills/landing-page-design/SKILL.md) | Plan, write or redesign a marketing page around one visitor, the offer, proof and a call to action. |
| [product-ux-writing](skills/product-ux-writing/SKILL.md) | Write the words inside a product: labels, empty states, errors, onboarding and notifications. |

Credit to [AgentReady](https://www.agentready.org/) and its contributors for the specification and
research behind `agent-readiness`. This skill is an independent implementation of their guidance.

The examples below name the skill in plain text, which works in any host. In Claude Code you can
also type `/dtheo:<skill>`; in Codex, `$<skill>`.

## Install in Codex

You need Codex with local skills, Git and a POSIX shell. The skills have no runtime dependencies.
Agent-readiness HTTP checks need network access and a fetch tool. Vibe UI uses the target project's
build tools, and visual checks need a browser. Python 3.11+ is needed only to validate this library.

Clone the library and link every skill:

```sh
git clone https://github.com/DimitrisTheo-Dev/agent-skills.git
cd agent-skills
mkdir -p "$HOME/.agents/skills"
for dir in "$PWD"/skills/*/; do ln -sn "${dir%/}" "$HOME/.agents/skills/$(basename "$dir")"; done
```

`ln -s` refuses to replace an existing installation. Keep the checkout in place while the links
exist, or copy a skill folder instead and copy updates yourself. For a project-only installation,
use `<project>/.agents/skills/<skill>`. Other hosts have their own discovery locations; copy the
whole skill folder there.

The [Codex documentation](https://learn.chatgpt.com/docs/build-skills) confirms these locations and
symlink support (verified 2026-10-25). Open `/skills` or type `$` in Codex to confirm the names
appear. Codex picks a skill by its description; naming it is more predictable. `agents/openai.yaml`
is optional Codex UI metadata.

## Start product work

```text
Use product-engineering-studio to build this experience for <person> so they can <outcome>.
Use the existing stack and real content. Explore unsettled design choices,
carry the chosen character through the complete flow, and verify the result.
```

Studio scales the work: Fix repairs, Extend builds on an existing design, Shape sets a new
direction. It reuses settled decisions and explores only what could change the outcome. A capability
experiment can start with one prototype; a new visual identity compares realistic alternatives.

The first complete UI flow includes deliberate layout and type, the relevant states and clear
feedback. Durable decisions go where the project already records them, with values in tokens or
components.

Design Playbook applies when an agreed direction must survive several workstreams or a craft defect
keeps returning. It adds token and ownership contracts and concrete checks to the existing workflow.
[Lessons from the Faceful hackathon build](skills/design-playbook/references/faceful-history.md) ·
[Workflow comparison](evals/design-playbook/RESULTS.md)

## Use product-readiness

Studio uses product-readiness to set a delivery baseline, change supported capabilities or assess a
release. Its [coverage matrix](skills/product-readiness/references/coverage.md) covers core
outcomes, discovery, interface states, accessibility, data integrity and operations. [Offline
decisions](skills/product-readiness/references/offline.md) separate initial HTML, standalone
exports, network fallback, offline tasks and installability.

```text
Use product-readiness to plan the completeness baseline for this project.
Choose what applies, when it must ship and how we will verify it.
Use the existing stack and keep the first useful flow small.
```

Engineering coverage includes [React Doctor and Vercel
guidance](skills/product-readiness/references/react-engineering.md), [security
verification](skills/product-readiness/references/security.md), [N+1 and scaling
checks](skills/product-readiness/references/scaling.md) and [Lighthouse and accessibility
budgets](skills/product-readiness/references/quality-budgets.md). The default targets are 90+
Lighthouse Performance and 100 on the automated audits that apply, with field metrics and operated
accessibility checks recorded separately. [Evaluation record](evals/product-readiness/RESULTS.md) ·
[Engineering comparison](evals/product-readiness/ENGINEERING-RESULTS.md)

## Use agent-readiness

```text
Use agent-readiness to audit this website for AI agent readiness. Use code inspection
and bounded read-only checks of https://example.com. Do not change the project.

Use agent-readiness to plan agent integrations for this SaaS. Agents should create
reports on behalf of a consenting user. Prioritize practical blockers.

Use agent-readiness to implement the relevant AgentReady improvements in this Next.js
app, following its architecture. Add focused checks and report what you verified.
```

An unspecified readiness review is an audit and changes nothing. Planning also leaves the target
unchanged; implementation needs a request to make changes. Each finding records source and level,
observed evidence, pass, fail, unknown or not applicable, impact, action and verification. A static
website does not automatically need MCP or OAuth, and private content stays private in every mode.

Read the [requirement map](skills/agent-readiness/references/specification.md) for scope, the
[source record](skills/agent-readiness/references/sources.md) for provenance, and the [evaluation
guide](evals/agent-readiness/README.md) for tested scenarios.

## Use vibe-ui

```text
Use vibe-ui to art-direct this website using its audience, real content and brand.
Return a focused design brief without editing code.

Use vibe-ui to polish this screen's hierarchy and spacing.
Preserve its behavior and verify the rendered result.
```

Review leaves files unchanged. Art direction produces a brief or the requested design artifact.
Build and polish implement the requested changes. In a project that uses
[dtheo/ui](https://ui.dtheo.dev), Vibe UI looks components up through its MCP server and runs `dtheo
check` before the rendered review. See [usage examples](skills/vibe-ui/examples/invocations.md) and
[evaluation results](evals/vibe-ui/README.md).

## Validate and contribute

```sh
python3 -m venv .venv
.venv/bin/python -m pip install -r requirements-dev.txt
.venv/bin/python scripts/check.py
claude plugin validate --strict .
```

The same checks run in GitHub Actions. `scripts/check.py` validates metadata, local links and Python
syntax with the pinned upstream validator and repository checks, then runs the unit tests for the
validator, the UI Quality Gate report checker and the synthetic HTTP fixtures. `claude plugin
validate` checks the plugin and marketplace manifests. For behavior changes, compare the current and
proposed skill on the same cases: see the [evaluation workflow](evals/README.md), the [comparison
protocol](evals/product-design/README.md) and the [current verification
record](evals/product-design/quality-gate-v2.md).

See [CONTRIBUTING.md](CONTRIBUTING.md) before adding a skill.

Original material is [MIT licensed](LICENSE). [NOTICE.md](NOTICE.md) records external attribution
and source-license boundaries.
