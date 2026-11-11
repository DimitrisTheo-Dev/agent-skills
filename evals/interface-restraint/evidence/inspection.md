# Inspection of the affordance revision

2026-11-11. Actual local application in desktop Chromium through the browser tool. Source manifest identifies the current files. Desktop screenshots are 1363 × 936. The responsive harness uses CSS-width iframes; it is not physical-device emulation. Earlier review evidence is available at branch commit `3e8b5f5`; the rejected desktop is retained as `review-01-desktop.png`.

## Operated in this revision

- Inspected light and dark desktop composition. Removed fabricated app icons and the duplicate title icon; verified the remaining functional SVGs render. The first Unicode external-link glyph rendered incorrectly and was replaced with an attributed Lucide path before final capture.
- Inspected 375px list and detail, 320px detail and expanded installation, and the 701px split view. Measured no horizontal overflow at 320, 700, 701 and 1363 CSS px. At 700 the detail becomes a separate mobile view. No native device claim.
- The desktop invocation group measures 146.625 × 34px; Copy is 70 × 34px. At 320px, the same group is 146.625 × 44px. The value is selectable code, not an editable field. Search remains 36px high on desktop. The long installation command wraps and stays reachable by scrolling at 320px.
- Clicked Copy and observed Copied feedback. Used an actual Control+V keypress into search, which produced `$vibe-ui`, confirming a clipboard round trip. Initially this query returned no results; after including invocation text in search, repeated the round trip and observed the correct single result.
- In the harness's denied-clipboard mode, Copy opened the native manual-copy dialog with `$vibe-ui` selected. Escape closed it and returned focus to Copy.
- Used ArrowRight and ArrowLeft to move between Overview and Instructions with matching panel/focus state.
- Exercised an unmatched search and Clear filters, then cleared a successful query with Escape.
- Selected skills ten times in two repeated sequences, finishing on Vibe UI with its correct heading. No measured latency or long-term satisfaction claim.
- At 700px, Back returned to the library and focused the selected Vibe UI link.

## Scope and limits

The final main screenshot was captured after the final search change. Dark/mobile captures show the same visual revision; subsequent changes only stabilized the expanded installation button width and added invocation matching, neither of which changes those captured default views. Current source was syntax-checked and frozen data remained byte-identical. The broader repository validator and 37 tests passed; those tests assess infrastructure, not aesthetics.

The previous independent review is historical and was superseded by owner rejection of the icons and command region. The new matched critique pair examines that previous screenshot; it is not an independent approval of the current implementation. The current visual review is the lead's inspection against the owner's corrections.

Physical devices, Safari/PWA, software keyboards, screen readers, enlarged text and runtime reduced-motion preferences remain unverified. The CSS reduced-motion branch exists but was not exercised. The revised screen has not been described as owner-approved or as proof of deterministic taste.
