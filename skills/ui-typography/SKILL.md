---
name: ui-typography
description: Choose and implement typography for interface hierarchy, reading, display and data. Use for font direction, type scales, heading structure, line length, wrapping, labels, numeric alignment or multilingual typography. Keep established type systems during narrow fixes.
---

# UI Typography

Own type roles, font selection, hierarchy and text rhythm. Let layout determine available regions; return constraints when the text does not fit. Solve a content or layout problem at its source rather than shrinking text. Review leaves files unchanged.

## Procedure

1. **Read real content.** Inspect existing font files, tokens, licenses, supported languages, target platforms and representative strings. Identify reading, scanning, input and display roles. Separate semantic heading levels from visual size. Finish with a role inventory and the unresolved decision.
2. **Choose the voice.** For new direction, read [ten typography directions](references/directions.md). Shortlist no more than two on the same real content; a family switch alone is not a product redesign. Existing products normally need a role/rhythm correction. Preserve approved identity unless change is authorized.
3. **Specify the roles.** Apply [type mechanics](references/type-mechanics.md). Name actual available families/fallbacks, weights, size, line-height, measure and tracking by role. Check glyph coverage before relying on a font. Use the existing token source; document exceptions and reference its paths.
4. **Test a specimen in context.** Render the page heading, a long item title, body paragraph, button, field label/error and representative numbers in the actual layout at narrow and wide widths. Include relevant non-Latin text, loading/fallback fonts and text enlargement. Reuse the workflow's representative screen rather than build a separate specimen app. Check first look and sustained reading.
5. **Return the decision.** Update the typography section of the shared design contract within artifact scope. Record chosen direction, role map, verified font assets, wrapping rules, localization/fallback constraints, and observed or unverified checks. A brief can contain proposed metrics; do not describe unrendered text as optically verified. Return corrections to the parent workflow; do not start another full review loop.

## Completion

Hierarchy remains legible without extra boxes or color; useful content is not hidden to force a tidy screenshot; headings remain semantic; numerals and multilingual glyphs are deliberate; enlarged and fallback text preserve the task.

Consult [sources](references/sources.md) for evidence boundaries. Ten directions are starting hypotheses, not ten universal font prescriptions.
