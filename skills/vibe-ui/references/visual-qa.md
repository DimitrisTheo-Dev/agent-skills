# Visual review and iteration protocol

A strong design prompt does not guarantee a strong rendered UI. Review what is actually produced, not only the code. Iterate until major issues are resolved or the available tooling/scope reaches a limit.

## Phase A: first glance at full viewport

Ask, without zooming into components:

1. Where does the eye land first? Is that the right place?
2. Does the layout have the intended personality or does it look like a default template?
3. Is there enough information to understand what to do next?
4. Does the imagery/product visualization add understanding or merely occupy space?
5. Is spacing deliberate across the *whole* screen rather than individually plausible?

## Phase B: craft inspection

- Headlines: spelling, contrast, exact wrapping, balanced length, appropriate weights/letter spacing.
- Content grouping: paragraph/headline distance, CTA context, proof placement.
- Grid: optical centering, alignment lines, visual balance, clipping and overflow.
- Colors: computed foreground legibility, accent roles/proportions, material relationships and relevant functional states.
- Components: border/radius consistency, icon optical size, visible focus, hover/pressed/disabled states, tappability.
- Images: resolution, aspect ratio, crop, realness, truthful captions.
- Motion: purpose, performance, latency, respect for reduced motion.

## Phase C: responsive, content, and accessibility

Choose viewports appropriate for the project; examples are ~320, 375/390, 430, 768, 1280/1440 CSS pixels. A screen may look great at one device width yet fail nearby widths.

- Text and layout reflow under larger text settings; no blocked action or accidental scroll trap.
- Form focus, keyboard, input zoom on mobile where applicable, safe areas, browser chrome, sticky/fixed elements.
- Long labels, localized text, real data, empty/loading/error/success states.
- Check WCAG AA text contrast: 4.5:1 for normal text and 3:1 for qualifying large text. Visual information needed to identify active controls, states, and meaningful graphics generally needs 3:1 against adjacent colors. Check the criterion's exceptions and use computed colors; screenshots alone do not establish conformance.
- Reasonable target sizes and spacing for the platform; do not let visual minimalism create tiny touch surfaces.
- Functional buttons/links, no unexpected auth/data/API changes.

## Phase D: judgment, iteration and evidence

Use ui-quality-gate when installed; its inspection matrix and readiness criteria govern the review. This reference is the portable fallback. Respect an explicit user budget. Otherwise continue correcting material in-scope weaknesses and rechecking them. Two rounds without improvement require a changed diagnosis or composition, not delivery of the same weakness. A real access or budget limit produces an explicit blocked/unverified result, never a quality pass.

1. Inspect the actual candidate, including new files and relevant states. Use an independent reviewer when available and permitted; otherwise label self-review. Give a reviewer the brief and artifacts rather than the builder's desired verdict.
2. Connect each observed weakness to its user or brand consequence. Prioritize the largest gap, whether composition, comprehension, interaction or reliability. Do not manufacture findings, a removal quota or aesthetic changes without evidence.
3. Apply supported corrections and inspect again. If the same weakness survives two rounds, revise the diagnosis or revisit the direction rather than polishing around it.
4. Respect scope and budget. Leave unresolved weaknesses explicit; stop out-of-scope churn. The absence of blockers does not establish distinctive craft.
5. Report actual commands, inspected captures and interactions. Separate measured facts, reviewer judgments, assumptions and untested device claims.

Assess substantial flows four ways:

| Assessment | Evidence and questions |
| --- | --- |
| Correctness | Which requested behaviors, states and failure paths were exercised? |
| Usability | Can the cold-start task be understood and completed by the relevant inputs? Label reviewer walkthroughs; they are not observed-user tests. |
| Craft | Are composition, rhythm, type, color, optical detail, states and interaction deliberate at the tested widths/themes? Measure when possible. |
| Character | What is specific to this product? Does one point of view survive without its special moment? Does it hold up beside references and after repeated use? |

For each, give verified evidence and scope, unresolved weaknesses and consequences, and anything not assessed with its reason. Use recordings, frame strips, timing measurements or live interaction for temporal claims. A screenshot cannot prove motion quality; model judgments of feel remain provisional. Record actual repeat counts and keep imagined long-term behavior separate.

When the owner expresses a preference, retain the choice and reason with product scope. Predicting preference helps calibration but does not replace comprehension or task completion. A passing checklist does not show that a product is more than ordinary.

## Useful acceptance criteria

- An intended first-time user can say what the product does and identify the primary action within seconds, where relevant.
- Visual identity feels specific and credible for this product without copying the source reference literally.
- Text is readable and no important content clips or overlaps at tested widths.
- Primary controls have clear, accessible states and work.
- No unrequested behavior changed; no fictional proof introduced.
- Observed evidence supports claims of polish and responsiveness.

Contrast references, checked 2026-10-25: W3C's explanations of [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) and [SC 1.4.11](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html). These are specific checks, not a complete accessibility audit.
