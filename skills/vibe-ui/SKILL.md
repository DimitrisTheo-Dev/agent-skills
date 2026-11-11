---
name: vibe-ui
description: Design, build, and polish distinctive interfaces suited to their product and audience. Use for UI art direction, visual redesigns, screenshot-inspired interfaces, typography, layout, or visual polish. Not for backend-only work or unrelated rebrands.
license: MIT
---

# Vibe UI

Choose a visual direction from the user's task, real content, and brand. Use accessible references to study specific relationships; supplied palettes are examples, not a selection menu. When references are unavailable, ground the direction in the product and label that limit. Honor explicit requests for faithful recreation.

## Choose the mode

| Request | Action |
| --- | --- |
| Analyze, critique, or review | Explain observed issues and concrete fixes. Do not change files. |
| Art direction or design brief | Make actionable layout, typography, palette, imagery, interaction, and responsive decisions. Produce the requested brief or artifact; implementation requires a request to build. |
| Build, redesign, or polish | Inspect the project and implement the requested changes. Keep the scope proportional to the request. |
| Faithful recreation | Prioritize the requested visual fidelity. Identify unavailable assets and uncertain properties rather than silently substituting a different aesthetic. |

Choose proportional depth: Fix for a focused correction, Extend for an established product, Shape for a new direction or core journey. Reuse the design contract at Fix/Extend and explore only unsettled decisions. At Shape, render alternatives before committing. A review-only request stays read-only: missing renders become a finding or recommendation, not permission to build prototypes.

### Creative direction for substantial new designs

Before designing, establish a specific creative thesis that defines the intended personality and its visual tension, such as expressive branding paired with restrained functional UI. Avoid vague directions like "modern and clean."

For a new direction or core journey, derive two or three alternatives from purpose, audience, actual content, personality and platform. Render them on the same realistic content; vary structure and interaction meaningfully, not only styling. Compare fit, clarity, character and feasibility, then recommend one. Follow the requested artifact and scope in brief/review modes; label unrendered proposals.

Treat a signature experience as a hypothesis. State confirming and refuting evidence, prototype the strongest candidate within implementation scope, and inspect first impression and repeated use. It amplifies character already present in composition, typography, writing, materials and everyday interaction. If no candidate earns its cost, say so and refine everyday feel. Read the craft reference for the moment specification.

Concentrate creative effort where it has the greatest impact. Keep supporting interfaces familiar, cohesive, and easy to use.

Do not force multiple concepts, animations, mascots, or interactive demos into small UI improvements or products where they add no value.

## Select from evidence, not a persuasive rationale

For Shape work, read [direction selection](references/direction-selection.md) before choosing. Compare the same real task at narrow and wide widths, including an important state transition. Inspect the actual hierarchy and effort, then choose. A longer design explanation does not compensate for a weaker render. Keep the decision record compact and spend the work on the interface.

## Design and execute

1. **Establish context.** Trace the requested view through current design guidance, theme/tokens, shared components, and their actual consumers. Prefer the governing source over isolated styling; inspect content, assets/fonts, framework conventions, and preview/test tools. Identify the actual audience, main task, success moment, trust requirements, and fixed constraints. Classify the view by its job: persuade, operate, read, or showcase. Different views of one product may need different visual registers. Use stated assumptions where details are missing; ask only when a missing detail would invalidate the result. Do not infer taste from age or industry alone.
2. **Choose the direction.** State briefly how the design should feel, what it must communicate, and which action matters. Select type roles, color roles, density, spacing relationships, imagery, and motion as a coherent system. Explain color roles, proportions and relationship to imagery on actual screens using the craft reference. Record decisions in the existing design contract or DESIGN.md; keep tokens/components as the source of implementation values. Where identity matters, derive a recognizable detail from the product or real content. Dense utility software can express its identity through information design. Keep functional controls familiar.
3. **Implement the requested scope.** Before changing existing UI, establish an observable problem, its user or brand impact, and the smallest supported fix. Without evidence, leave cosmetic styling unchanged. Reuse suitable components, tokens, fonts, and assets. Design from actual messages, product examples, and actions. Preserve business logic, backend contracts, authentication, navigation semantics, and unrelated views. Do not invent testimonials, customer logos, metrics, credentials, features, or product screenshots. Add dependencies only for a concrete need the existing stack cannot meet. Include coherent type, spacing, responsive composition, relevant states, immediate feedback and purposeful motion in the first complete flow.
4. **Inspect the result.** When rendering tools are available, review the actual composition and behavior at representative widths. Substantial responsive work should include mobile and desktop views. Recompose for mobile reading and input rather than merely shrinking the desktop layout. Use the visual QA refinement budget and separate correctness, usability, craft and character. Prioritize the largest observed gap, apply supported corrections and inspect again; change the diagnosis when two rounds leave the same weakness. A clean checklist does not establish a compelling result. When tools are unavailable, review the source, artifact, or description actually supplied. Distinguish user-reported facts from inspected evidence and name the unverified visual behavior.

A screenshot supports observations about visible hierarchy, grouping, and styling. It does not establish an exact font, CSS measurements, interaction behavior, accessibility conformance, or conversion performance. Label estimates and distinguish them from inspected source or measured behavior.

## Keep the design specific

Use real content, deliberate typography, authentic imagery, and selective emphasis to distinguish the product. Brand expression can be concentrated in a few places while controls stay predictable. Whitespace and density should serve the task; neither minimalism nor decoration is an objective by itself.

Judge gradients, cards, illustration, glass, and motion by their product purpose rather than a universal blacklist. A reference's mascot, palette, or demographic is not automatically appropriate for the target. Ask what each choice contributes to understanding, confidence, pleasure or identity and what effort it costs. Honest progress, clear consequences, recovery and respect for attention are part of craft. Use product context rather than inventing an inspiration source.

## Read details when needed

- For screenshots, visual references, or reference-free discovery, read [reference intelligence](references/reference-intelligence.md).
- When choosing or refining type, spacing, color, imagery, or motion, read [art direction and craft](references/art-direction-and-craft.md).
- When adapting a visual direction to a different task or audience, read [audience translations](references/audience-translations.md).
- Before reviewing a rendered implementation or substantial polish, read [visual QA](references/visual-qa.md).
- Before applying external detail or motion recipes, read [source notes](references/source-notes.md) for reviewed revisions and limits.
- For invocation examples, see [usage prompts](examples/invocations.md). For a reference-free service website, see [the business example](examples/context-to-business.md).

## Quality gate

Before handing over implemented UI, invoke the installed ui-quality-gate. It owns the ordered inspection and repair loop; Vibe UI owns the design decisions and corrections. Keep review-only requests read-only. If that skill is unavailable, use the local visual QA reference and record the missing coverage. Inspect rendered results, correct material usability/craft/character weaknesses and recheck affected states. Do not stop because the code builds or one screenshot is attractive.

## Finish with evidence

Resolve unclear primary actions, broken interactions, misleading proof, unreadable or overflowing text, inaccessible primary controls, and responsive regressions before minor decoration. Honor the requested scope and refinement budget; report unresolved craft and character weaknesses explicitly instead of treating the absence of blockers as aesthetic success.

Report the design intent, concrete changes or recommendations, checks actually run, and remaining limits. For implementation, run relevant existing checks and inspect focus, input, loading/error states, and reduced motion where affected. For a review, prioritize findings and give specific fixes. For a brief, deliver implementable decisions rather than a list of adjectives. Keep the response proportional to the task.
