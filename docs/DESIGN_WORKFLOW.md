# Design workflow

Start with **Product Engineering Studio** for a product task, or **Vibe UI** for a focused interface
task. You do not need to pick the references yourself.

| Skill | Responsibility | Concrete output |
| --- | --- | --- |
| Product Engineering Studio | Product scope, engineering and delivery: prove the riskiest dependency, ship one slice end to end, split work across agents only when it pays | One useful, verified flow |
| Vibe UI | Coherent direction, with references for UX patterns, typography, color, geometry, motion and interface writing | One shared design contract |
| UI Quality Gate | Inspect the real result and drive corrections | Evidence, findings, repairs and a supported readiness verdict |
| Landing Page Design | Persuade one visitor on a marketing page | Page structure, hero message, proof and call to action |
| Product Readiness | Decide what must be true before release, beyond the visuals. Its agent readiness reference lets agents discover, read and use the product | A readiness record with checks, owners and deferrals |

In a project that uses [dtheo/ui](https://ui.dtheo.dev), Vibe UI looks components up through its MCP
server and runs `dtheo check` before the rendered review.
[product-engineering-quality-gate](https://github.com/DimitrisTheo-Dev/product-engineering-quality-gate)
runs it in CI once it is listed in `quality-gate.config.json`, and Product Readiness reads its
report.

## What changes in practice

Resolve open design concerns together in the first working flow. The color and typography references
offer adaptable starting points. Check choices against actual content and established components.

A course library can use meaningful thumbnails for recognition. An operational collection can use
aligned rows for comparison. Let the task and content determine the structure.

Feedback is part of the first complete flow. Polish covers immediate response, truthful pending
state, interruption, failure, keyboard/touch behavior and reduced motion. Haptics are optional and
platform-dependent. Static content can remain still.

## Keep it fast

Product Readiness chooses the applicable completeness baseline at kickoff and reconciles evidence
before release. It covers discovery, sharing, states, offline behavior and operational requirements
in the existing project record. It consumes the UI gate's findings rather than adding a second
visual gate. Its agent readiness reference owns the detailed agent requirements; public scanner
scores remain supporting evidence. Isolated fixes revisit only affected requirements.

- A small fix uses the affected reference and existing decisions.
- An extension explores only unresolved choices.
- A consequential open direction may benefit from comparing realistic alternatives. A capability
  experiment can start with a single prototype and a comparison with the current workflow.
- Retain durable choices in the existing design record when useful. Tokens and components remain the
  source of implementation values.
- One quality gate checks the completed result. It reopens affected decisions rather than restarting
  the whole process.

When several agents build one accepted design, Studio's parallel-work reference keeps one contract
and one integration owner. Small ordinary edits keep the shorter path.

For provider-dependent builds and timed demos, trace backward from the user's result and prove the
risky boundary early with the actual output its consumer needs. Confirm relevant
migrations/configuration, then rehearse the integrated path before optional feature expansion. Keep
implemented, locally verified and verified-live states separate. A healthy endpoint, attractive UI
or passing worker branch does not establish a complete product outcome.

Retain an owner correction as their words, a scoped rule and a reproducing check. Inspect the
running candidate after integration, keep evidence outputs private until sanitized, and reconcile
design notes with token/component sources. See the [Faceful history](faceful-history.md) for the
observed changes and limits behind these additions.

The gate checks every affected component family, materially different state and exceptional
instance. Identical repeated components can reuse evidence. It inspects whole-page composition
before pixel details and checks the whole screen again after corrections.

## Use it

```text
Use product-engineering-studio to build this experience for [person] to [outcome].
Use our existing stack and real content. Make the design decisions, include
feedback in the first complete flow, and verify the result before handoff.
```

Existing brands and accepted user preferences remain in the project contract. You should not need to
restate typography, spacing, interaction and responsive fundamentals each time.

## What the checks mean

The workflow makes decisions and mechanical checks more repeatable. It does not make aesthetic
judgment mathematically deterministic. Rendered inspection and actual interaction evidence are
required for claims about the finished interface. Brief-only tests establish decision behavior, not
visual superiority. See the [evaluation record](../evals/design-specialists/RESULTS.md).
