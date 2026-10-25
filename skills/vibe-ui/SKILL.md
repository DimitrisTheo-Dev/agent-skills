---
name: vibe-ui
description: Design, build, and polish distinctive interfaces suited to their product and audience. Use for UI art direction, visual redesigns, screenshot-inspired interfaces, typography, layout, or visual polish. Not for backend-only work or unrelated rebrands.
license: MIT
---

# Vibe UI

Choose a visual direction from the user's task, real content, and brand. References are optional. Transfer their design reasoning by default; honor an explicit request for faithful recreation.

## Choose the mode

| Request | Action |
| --- | --- |
| Analyze, critique, or review | Explain observed issues and concrete fixes. Do not change files. |
| Art direction or design brief | Make actionable layout, typography, palette, imagery, interaction, and responsive decisions. Produce the requested brief or artifact; implementation requires a request to build. |
| Build, redesign, or polish | Inspect the project and implement the requested changes. Keep the scope proportional to the request. |
| Faithful recreation | Prioritize the requested visual fidelity. Identify unavailable assets and uncertain properties rather than silently substituting a different aesthetic. |

A small tweak needs a focused correction, not a design workshop. For broader work, establish one coherent direction before implementing it.

## Design and execute

1. **Establish context.** Inspect relevant screens, content, assets, tokens, components, and framework conventions. Identify the actual audience, main task, success moment, trust requirements, and fixed constraints. Use stated assumptions where details are missing; ask only when a missing detail would invalidate the result. Do not infer taste from age or industry alone.
2. **Choose the direction.** State briefly how the design should feel, what it must communicate, and which action matters. Select type roles, color roles, density, spacing relationships, imagery, and motion as a coherent system. Where identity matters, derive a recognizable detail from the product or real content. Dense utility software can express its identity through information design. Keep functional controls familiar.
3. **Implement the requested scope.** Reuse suitable components, tokens, fonts, and assets. Design from actual messages, product examples, and actions. Preserve business logic, backend contracts, authentication, navigation semantics, and unrelated views. Do not invent testimonials, customer logos, metrics, credentials, features, or product screenshots. Add dependencies only for a concrete need the existing stack cannot meet.
4. **Inspect the result.** When rendering tools are available, review the actual composition and behavior at representative widths. Substantial responsive work should include mobile and desktop views. Recompose for mobile reading and input rather than merely shrinking the desktop layout. Fix the most consequential defects and inspect again. When tools are unavailable, review the source, artifact, or description actually supplied. Distinguish user-reported facts from inspected evidence and name the unverified visual behavior.

A screenshot supports observations about visible hierarchy, grouping, and styling. It does not establish an exact font, CSS measurements, interaction behavior, accessibility conformance, or conversion performance. Label estimates and distinguish them from inspected source or measured behavior.

## Keep the design specific

Use real content, deliberate typography, authentic imagery, and selective emphasis to distinguish the product. Brand expression can be concentrated in a few places while controls stay predictable. Whitespace and density should serve the task; neither minimalism nor decoration is an objective by itself.

Judge gradients, cards, illustration, glass, and motion by their product purpose rather than a universal blacklist. A reference's mascot, palette, or demographic is not automatically appropriate for the target. Without references, use the product's own context instead of inventing an inspiration source.

## Read details when needed

- For screenshots, visual references, or reference-free discovery, read [reference intelligence](references/reference-intelligence.md).
- When choosing or refining type, spacing, color, imagery, or motion, read [art direction and craft](references/art-direction-and-craft.md).
- When adapting a visual direction to a different task or audience, read [audience translations](references/audience-translations.md).
- Before reviewing a rendered implementation or substantial polish, read [visual QA](references/visual-qa.md).
- For invocation examples, see [usage prompts](examples/invocations.md). For a reference-free service website, see [the business example](examples/context-to-business.md).

## Finish with evidence

Resolve unclear primary actions, broken interactions, misleading proof, unreadable or overflowing text, inaccessible primary controls, and responsive regressions before minor decoration. Stop when remaining issues are minor, outside scope, or unsupported by evidence.

Report the design intent, concrete changes or recommendations, checks actually run, and remaining limits. For implementation, run relevant existing checks and inspect focus, input, loading/error states, and reduced motion where affected. For a review, prioritize findings and give specific fixes. For a brief, deliver implementable decisions rather than a list of adjectives. Keep the response proportional to the task.
