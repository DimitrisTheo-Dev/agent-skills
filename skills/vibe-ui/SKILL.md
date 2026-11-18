---
name: vibe-ui
description: Design, build, and polish distinctive interfaces suited to their product and audience. Use for UI art direction, visual redesigns, screenshot-inspired interfaces, typography, layout, or visual polish. Not for backend-only work or unrelated rebrands.
---

# Vibe UI

Choose a visual direction from the user's task, real content, and brand. Use accessible references to study specific relationships; supplied palettes are examples, not a selection menu. When references are unavailable, ground the direction in the product and label that limit. Honor explicit requests for faithful recreation.

## Coordinate the design

Own one coherent direction. Use [specialist orchestration](references/specialist-orchestration.md) for open UX, typography, color, geometry and motion choices. Carry the relevant decisions into one design contract and let UI Quality Gate inspect the integrated result.

## Choose the mode

| Request | Action |
| --- | --- |
| Analyze, critique, or review | Explain observed issues and concrete fixes. Do not change files. |
| Art direction or design brief | Make actionable layout, typography, palette, imagery, interaction, and responsive decisions. Produce the requested brief or artifact; implementation requires a request to build. |
| Build, redesign, or polish | Inspect the project and implement the requested changes. Keep the scope proportional to the request. |
| Faithful recreation | Prioritize the requested visual fidelity. Identify unavailable assets and uncertain properties rather than silently substituting a different aesthetic. |

Use Fix for a focused correction, Extend to build on an established product, and Shape for a new direction or core journey. Preserve settled design decisions at any depth. Compare alternatives when a consequential choice is open and the requested artifact permits it. In review, report missing render evidence as a limit.

### Resolve the open design question

For a substantial new direction, state what should feel distinctive and which user need constrains that choice. Expressive product content can sit inside quiet functional controls. Ground the direction in the product's actual mechanisms, output, language and recognizable assets.

When exploring alternatives, read [direction selection](references/direction-selection.md). Compare task access, hierarchy and character using the same realistic content and difficult state. Vary composition, narrative or interaction in ways that could change the decision. Label unrendered proposals.

For an ambitious identity or redesign, use the [creative rejection protocol](references/creative-rejection.md) to keep alternatives meaningfully distinct, preserve real product evidence and detect interchangeable compositions in the render. If the direction fails the brief, revisit the hierarchy or product representation before polishing individual elements.

A signature interaction earns exploration when it could make the product's value clearer, easier to reach or more memorable. Use the craft reference to check first use and repeated use. Concentrate effort on everyday interaction when that matters more to the task.

## Design and execute

1. **Establish context.** Trace the requested view through current design guidance, theme/tokens, shared components, and their actual consumers. Prefer the governing source over isolated styling; inspect content, assets/fonts, framework conventions, and preview/test tools. Identify the actual audience, main task, success moment, trust requirements, and fixed constraints. Classify the view by its job: persuade, operate, read, or showcase. Different views of one product may need different visual registers. Use stated assumptions where details are missing; ask only when a missing detail would invalidate the result. Do not infer taste from age or industry alone.
2. **Choose the direction.** State how the design should feel, what it must communicate and which action matters. Resolve type, color, density, spacing, imagery and feedback as a coherent system on actual screens. Retain durable decisions in the existing design contract and keep implementation values in tokens or components. Dense utility software can express its identity through information design. Keep functional controls recognizable.
3. **Implement the requested scope.** Tie edits to an observed problem, product goal or stated preference. Reuse suitable components, tokens, fonts and assets. Use actual messages, product examples and actions. Preserve business logic, backend contracts, authentication and navigation semantics. Keep product claims and proof factual. Add dependencies only for a concrete need the stack cannot meet. Include typography, responsive composition, relevant states and feedback in the first complete flow.
4. **Inspect the result.** When rendering tools are available, review the actual composition and behavior at representative widths. Substantial responsive work should include mobile and desktop views. Recompose for mobile reading and input rather than merely shrinking the desktop layout. Use the visual QA refinement budget and separate correctness, usability, craft and character. Prioritize the largest observed gap, apply supported corrections and inspect again; change the diagnosis when two rounds leave the same weakness. A clean checklist does not establish a compelling result. When tools are unavailable, review the source, artifact, or description actually supplied. Distinguish user-reported facts from inspected evidence and name the unverified visual behavior.

A screenshot supports observations about visible hierarchy, grouping, and styling. It does not establish an exact font, CSS measurements, interaction behavior, accessibility conformance, or conversion performance. Label estimates and distinguish them from inspected source or measured behavior.

## Check comprehension before polishing

On the first rendered viewport, identify the product/task, current object and next action without the builder's explanation. This is a reviewer heuristic, not measured user comprehension. When these are unclear, change grouping, order or prominence before adding help text or animation.

Audit visible copy by its job: identify, help choose, name an action, report state, explain a consequential requirement, or recover. Keep necessary labels and help beside the decision they support. Remove repeated introductions, ornamental counters, corner slogans and internal design rationale when they serve none of those jobs. Expressive editorial copy can earn space on a persuasive page; an operating screen needs immediate access to its objects and actions.

Scale search and other controls to their role in the task. A catalog's search may be compact and secondary; a search-first product may make it the primary region. Preserve usable hit areas and readable input text. Judge the hierarchy again after subtraction, so removing text does not remove meaning.

## Keep the design specific

Use real content, deliberate typography, authentic imagery, and selective emphasis to distinguish the product. Brand expression can be concentrated in a few places while controls stay predictable. Whitespace and density should serve the task; neither minimalism nor decoration is an objective by itself.

Judge gradients, cards, illustration, glass, and motion by their product purpose rather than a universal blacklist. A reference's mascot, palette, or demographic is not automatically appropriate for the target. Ask what each choice contributes to understanding, confidence, pleasure or identity and what effort it costs. Honest progress, clear consequences, recovery and respect for attention are part of craft. Use product context rather than inventing an inspiration source.

## Read details when needed

- For screenshots, visual references, or reference-free discovery, read [reference intelligence](references/reference-intelligence.md).
- For coherent art direction, imagery and signature moments, read [art direction and craft](references/art-direction-and-craft.md).
- When adapting a visual direction to a different task or audience, read [audience translations](references/audience-translations.md).
- Before reviewing a rendered implementation or substantial polish, read [visual QA](references/visual-qa.md).
- Before applying external detail or motion recipes, read [source notes](references/source-notes.md) for reviewed revisions and limits.
- For invocation examples, see [usage prompts](examples/invocations.md). For a reference-free service website, see [the business example](examples/context-to-business.md).

## Quality gate

Before handing over implemented UI, invoke the installed ui-quality-gate. It owns the ordered inspection and repair loop; Vibe UI owns the design decisions and corrections. Keep review-only requests read-only. If that skill is unavailable, use the local visual QA reference and record the missing coverage. Inspect rendered results, correct material usability/craft/character weaknesses and recheck affected states. Do not stop because the code builds or one screenshot is attractive.

## Finish with evidence

Resolve unclear primary actions, broken interactions, misleading proof, unreadable or overflowing text, inaccessible primary controls, and responsive regressions before minor decoration. Honor the requested scope and refinement budget; report unresolved craft and character weaknesses explicitly instead of treating the absence of blockers as aesthetic success.

Report the design intent, concrete changes or recommendations, checks actually run, and remaining limits. For implementation, run relevant existing checks and inspect focus, input, loading/error states, and reduced motion where affected. For a review, prioritize findings and give specific fixes. For a brief, deliver implementable decisions rather than a list of adjectives. Keep the response proportional to the task.
