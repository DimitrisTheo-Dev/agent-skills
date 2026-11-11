# Skill library: component and density revision

A working UI example for browsing four frozen skill fixtures and copying their invocation. This is not the live skill catalog or proof of universal design quality.

## Current revision

- Uses React and authentic shadcn/ui components backed by Radix: Button, Input, Tabs, ToggleGroup, Tooltip, Collapsible and Dialog. Source hashes and dependency versions are included.
- The desktop frame measures 768 × 382px, down from 920 × 491px. The title lives in the detail pane; Copy sits alongside it. The search field is 34px high. No giant command input, invented identity icons or introductory hero.
- Thin outlines, short hover transitions, press displacement, visible keyboard focus, local copy confirmation, selection transitions and animated disclosure provide feedback. Reduced-motion CSS disables animation and transforms.
- Narrow screens use list/detail navigation and a 44px Copy target. Clipboard rejection opens a real manual-copy dialog with focus return.

## Run

The committed `app/` contains the built static example. Serve this directory with `python -m http.server 8000` and open `http://localhost:8000/app/`.

Editable source is in `shadcn/`. Run `npm ci` and `npm run build` there. The result is `shadcn/dist/`; copy its contents into `app/` when updating the committed static example. The classic `skills.js` file is intentionally copied unchanged from public assets; Vite's non-module-script warning is expected.

`app/qa.html` is an optional CSS-width and clipboard-denial harness. It is not part of the product interface.

## Evidence

[Panel](evidence/panel.png) · [Desktop viewport](evidence/desktop.png) · [Dark](evidence/dark.png) · [Mobile library](evidence/mobile-list.png) · [Mobile detail](evidence/mobile-detail.png) · [641px boundary](evidence/tablet.png)

[Executed checks and limits](evidence/inspection.md) · [Structured record](quality-record.json) · [Design decisions](design-decisions.md)

The mobile captures use a CSS-width iframe in desktop Chromium. Physical devices, Safari, screen readers and runtime reduced-motion settings were not tested. The verdict remains unverified for those limits and owner acceptance; the checker certifies evidence integrity only.

## Earlier instruction evaluation

[Source gap review](source-gap-review.md), [critique comparison](comparison.md), and [independent review](independent-review.md) concern the earlier instruction/candidate work. They do not evaluate this new React implementation. The previous candidate is archived in [review-02-desktop.png](evidence/review-02-desktop.png) and Git history. This revision demonstrates specific implementation corrections, not deterministic taste.
