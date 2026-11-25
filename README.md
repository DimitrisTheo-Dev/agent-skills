# Agent skills

Skills for product engineering and UI design. They work in Claude Code, Codex and other tools that
read the [Agent Skills format](https://agentskills.io/specification).

## Install

In Claude Code:

```text
/plugin marketplace add DimitrisTheo-Dev/agent-skills
/plugin install dtheo@dtheo
```

The skills install as `/dtheo:<skill>`, with the read-only
[dtheo/ui MCP server](https://ui.dtheo.dev/docs/agents). Update with
`/plugin marketplace update dtheo`.

In Codex:

```sh
git clone https://github.com/DimitrisTheo-Dev/agent-skills.git && cd agent-skills
mkdir -p "$HOME/.agents/skills"
for dir in "$PWD"/skills/*/; do ln -sn "${dir%/}" "$HOME/.agents/skills/$(basename "$dir")"; done
```

## Start with three

| Skill                                                                    | Use it to                                                      |
| ------------------------------------------------------------------------ | -------------------------------------------------------------- |
| [product-engineering-studio](skills/product-engineering-studio/SKILL.md) | Turn a brief into one working, verified flow. The entry point. |
| [vibe-ui](skills/vibe-ui/SKILL.md)                                       | Set the visual direction for an app or website and build it.   |
| [ui-quality-gate](skills/ui-quality-gate/SKILL.md)                       | Inspect the rendered result, fix what fails and check again.   |

Studio brings in the others when the work needs them: five UI specialists (`ui-ux-patterns`,
`ui-typography`, `ui-color`, `ui-geometry`, `ui-motion`), `design-playbook`, `landing-page-design`,
`product-ux-writing`, `product-readiness` and `agent-readiness`.
[How they fit together](docs/DESIGN_WORKFLOW.md).

In a project that uses [dtheo/ui](https://github.com/DimitrisTheo-Dev/dtheo-ui), Vibe UI looks
components up through its MCP server and runs `dtheo check` before the rendered review:

```text
/dtheo:product-engineering-studio Build a test-run results screen with a pass/fail summary,
a duration histogram and a limit line. Use dtheo/ui and verify the result.
```

## Validate

```sh
python3 -m venv .venv && .venv/bin/python -m pip install -r requirements-dev.txt
.venv/bin/python scripts/check.py
claude plugin validate --strict .
```

A change to a skill is compared with the previous version on the same cases; see the
[evaluation workflow](evals/README.md) and [CONTRIBUTING.md](CONTRIBUTING.md).

Credit to [AgentReady](https://www.agentready.org/) for the specification behind `agent-readiness`.
Original material is [MIT licensed](LICENSE); [NOTICE.md](NOTICE.md) records attribution.
