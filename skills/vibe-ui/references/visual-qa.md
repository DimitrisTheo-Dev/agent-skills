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
- Colors: foreground legibility, accent scarcity, warm/cool consistency, functional states.
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

## Phase D: iteration and evidence

1. Rank the most consequential observed issues as blocker, high impact, or polish. Explain how each affects the experience; do not invent findings to reach a fixed count.
2. Fix blockers and high-impact issues first; keep improvements surgical.
3. Re-render after meaningful visual changes when tools permit.
4. Stop when the remaining issues are minor, outside scope, or evidence does not justify further changes. Do not endlessly churn UI for aesthetics alone.
5. Report actual commands/tests/screenshots reviewed. Separate verified behavior from assumptions or untested device claims.

## Useful acceptance criteria

- An intended first-time user can say what the product does and identify the primary action within seconds, where relevant.
- Visual identity feels specific and credible for this product without copying the source reference literally.
- Text is readable and no important content clips or overlaps at tested widths.
- Primary controls have clear, accessible states and work.
- No unrequested behavior changed; no fictional proof introduced.
- Observed evidence supports claims of polish and responsiveness.

Contrast references, checked 2026-10-25: W3C's explanations of [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) and [SC 1.4.11](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html). These are specific checks, not a complete accessibility audit.
