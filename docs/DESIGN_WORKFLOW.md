# Design workflow

Start with **Product Engineering Studio** for a product task, or **Vibe UI** for a focused interface task. You do not need to select the helpers yourself.

| Part | Responsibility | Concrete output |
| --- | --- | --- |
| Product Engineering Studio | Product scope, engineering and delivery | One useful, verified flow |
| Vibe UI | Coherent direction and specialist coordination | One shared design contract |
| Design Playbook | Carry an agreed direction across workstreams or repair returning craft defects | Bounded ownership, contract-to-build handoffs and scoped proof |
| UI UX Patterns | Choose how people understand and complete the task | Structure, navigation, representation and recovery |
| UI Typography | Choose voice and readable hierarchy | Families, type roles, measures and wrapping rules |
| UI Color | Build contextual combinations and semantic roles | Palette, state pairings and contrast evidence |
| UI Geometry | Make mechanics consistent | Spacing, control dimensions, borders, radii and alignment |
| UI Motion | Make meaningful actions responsive | Feedback, transitions, pending/results, recovery and reduced motion |
| UI Quality Gate | Inspect the real result and drive corrections | Evidence, findings, repairs and a supported readiness verdict |

## What changes in practice

A new product resolves all five design concerns as one composition. Color includes eight construction methods; typography includes ten directions. These are adaptable starting points with tradeoffs, not fixed themes. The agent chooses concrete values for the product and checks them against actual content.

Layout includes sixteen conditional decisions. A visually distinctive course library can benefit from meaningful thumbnails; an operational collection can benefit from aligned rows. A dependent creation process can benefit from stages and a preview; a few independent fields can stay on one screen. The pattern must reduce effort or improve understanding.

Feedback is part of the first complete flow. Polish covers immediate response, truthful pending state, interruption, failure, keyboard/touch behavior and reduced motion. Haptics are optional and platform-dependent. Static content can remain still.

## Keep it fast

Product Readiness chooses the applicable completeness baseline at kickoff and reconciles evidence before release. It covers discovery, sharing, states, offline behavior and operational requirements in the existing project record. It consumes the UI gate's findings rather than adding a second visual gate. Agent Readiness retains ownership of detailed agent requirements; public scanner scores remain supporting evidence. Isolated fixes revisit only affected requirements.

- A small fix uses the affected helper and existing decisions.
- An extension explores only unresolved choices.
- A new direction compares two or three coherent alternatives total, sharing real content and captures.
- Helpers write to one design record. Tokens and components remain the source of implementation values.
- One quality gate checks the completed result. It reopens affected decisions rather than restarting the whole process.

Design Playbook is conditional: use it for several owned surfaces or a recurring interaction defect. Small ordinary edits keep the shorter path. It preserves the accepted brand and connects the existing owners rather than adding another art director or review pipeline.

For provider-dependent builds and timed demos, trace backward from the user's result and prove the risky boundary early with the actual output its consumer needs. Confirm relevant migrations/configuration, then rehearse the integrated path before optional feature expansion. Keep implemented, locally verified and verified-live states separate. A healthy endpoint, attractive UI or passing worker branch does not establish a complete product outcome.

Retain an owner correction as their words, a scoped rule and a reproducing check. Inspect the running candidate after integration, keep evidence outputs private until sanitized, and reconcile design notes with token/component sources. See the [Faceful history](../skills/design-playbook/references/faceful-history.md) for the observed changes and limits behind these additions.

The gate checks every affected component family, materially different state and exceptional instance. Identical repeated components can reuse evidence. It inspects whole-page composition before pixel details and checks the whole screen again after corrections.

## Use it

```text
$product-engineering-studio Build this experience for [person] to [outcome].
Use our existing stack and real content. Make the design decisions, include
feedback in the first complete flow, and verify the result before handoff.
```

Existing brands and accepted user preferences remain in the project contract. You should not need to restate typography, spacing, interaction and responsive fundamentals each time.

## What the checks mean

The workflow makes decisions and mechanical checks more repeatable. It does not make aesthetic judgment mathematically deterministic. Rendered inspection and actual interaction evidence are required for claims about the finished interface. Brief-only tests establish decision behavior, not visual superiority. See the [evaluation record](../evals/design-specialists/RESULTS.md).
