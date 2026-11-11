# Current implementation inspection

Date: 2026-11-11. React + shadcn/ui candidate; this replaces earlier current-candidate checks. Inspected in desktop Chromium through the managed preview. Width harness is CSS layout emulation, not a mobile device.

## Operated

- Clicked Copy, then pasted into search with Control+V: the field contained `$vibe-ui` and the matching skill remained.
- ArrowRight from Overview selected Instructions, with the tab's selected state and corresponding text observed. Returned to Overview.
- Opened and closed Install locally; setup text, wrapped command and Copy command appeared.
- Filtered Writing: UX writing became the selected detail. Cleared a no-result query to restore the list.
- At 320px, denied clipboard access through iframe permissions. Copy opened the manual-copy dialog, selected the invocation, and Escape closed it. Focus returned to Copy after the close animation.
- At 375px, opened Vibe UI and returned via Skills. Focus returned to its library link.
- Switched light/dark and inspected both rendered themes.
- Checked 320px and 641px body scroll width equals viewport width; checked 640px library width likewise. Inspected the 641px composition, 375px list/detail and desktop.
- Measured desktop frame 768 × 382px; Copy 83 × 32px. Computed Copy transitions: 130ms for color/border/shadow, 80ms for transform. Mobile CSS sets a 44px Copy target.

## Evidence scope

The final named TabsList build was reloaded and captured for desktop, panel, mobile list and mobile detail. Dark and 641px captures precede the accessible tab-list name and removal of unused count styles; those changes do not alter their rendered appearance. Frozen skills.js remains byte-identical.

The panel image is a browser screenshot crop with 24px surrounding canvas. The full viewport capture is retained. Gray space outside the compact utility window has not been disguised as occupied content.

## Limits

Runtime reduced-motion settings, physical-device/PWA keyboard behavior, Safari, assistive technology, enlarged text and temporal performance measurements were not tested. Reduced-motion handling was inspected in source. No claim of universal accessibility, native performance, owner acceptance or deterministic design quality follows from these checks. Previous independent-review approval does not apply to this rebuilt candidate.
