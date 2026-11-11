# Skill index design contract

## Product reading

- Purpose: help an engineer choose an appropriate skill and take the correct invocation or installation text into their workflow. Commands belong beside scope.
- Audience: engineers, as specified. Exact names, explicit setup prerequisites, and pinned source provenance matter more than promotional proof.
- Content: four supplied skill records; only vibe-ui has examples, with two complete files. Long descriptions and instructions must reflow without invented summaries or example claims.
- Personality: a quiet, practical reference desk is a reversible design assumption, not a stated user preference. File-like names and numbered entries express this.
- Platform: dependency-free local web page, from 390 to 1440 CSS px. Repeated lookup is an assumption; mobile changes from two panes to browse/detail with a return link.

## Explored and selected

`exploration.html` retains two rendered directions on identical real descriptions. A used a reference index and a command surface; B used editorial cards with a separate guide step. The comparison is retained as `01-directions.png`. A was selected for scanability, predictable name positions, and proximity between scope and command. B had more visual invitation but uneven card density and an extra navigation step. These are builder judgments from rendered prototypes, not user preference results.

## System

The governing tokens are in `styles.css`. Warm paper occupies most of the light view, with near-white reading surfaces, dark green text, green selected states and command surfaces. Dark mode reverses these roles to forest surfaces, pale green text, and lighter accent links. Roughly 85–90% of the initial view is neutral surface; dark command blocks and the selected row concentrate emphasis. No imagery is needed: actual skill names, source text, and terminal strings are the material.

Arial/system sans handles reading and hierarchy; system monospace handles names, metadata and commands. Large restrained headline, numbered index rows, thin separators and small radii connect the reference-desk thesis. External arrows use inline SVG after missing glyphs were observed. Command blocks wrap without changing copied text. Borders that identify the search and theme controls were strengthened after render inspection.

## Interaction hypothesis

Trigger: search by task, then open a skill. Benefit: retain context while seeing the exact scope and usable command. Intended feeling: confidence and low effort. This is everyday utility, not a theatrical moment. Search updates locally, desktop selection reveals adjacent detail, narrow layouts use a dedicated detail view. Hash links preserve browser navigation. Copy reports success only after the clipboard promise resolves; failure opens a selected-text dialog.

The expected second, twentieth and five-hundredth uses have the same short flow. Those frequency claims remain hypotheses. Actual checks included one task-query flow on desktop and one at 390px, all category filters, and three consecutive invocation-copy activations. No input-blocking animation is present; feedback opacity is brief and disabled by the reduced-motion stylesheet. Keyboard controls and live status provide alternatives. Confirmation: observed exact clipboard readback, no overflow at measured widths, context-preserving narrow return. Refutation risk: lengthy descriptions push install commands below the first screen at shorter heights. No special animation earned additional implementation cost.

## Review boundary

Two bounded passes: first complete-flow inspection and corrections, then responsive/interaction confirmation. Self-review only; independent agents were prohibited. Source Markdown is deliberately shown verbatim, so long source files are less scannable than a parsed documentation view. Runtime reduced-motion preference, real devices, assistive technology, browser diversity and long-term satisfaction were not assessed.


Public evidence note: this record preserves the builder’s observations. A selected screenshot set is published in `../../evidence/`; other captures listed above remain in the local raw record. Workspace-specific paths were removed for publication.
