No screens, runtime, or font assets were supplied. These are unrendered proposals; no files were changed. Contrast figures are calculations for opaque color pairs, not verification of rendered states.

**A. Cooking-course library**

Choose an **authored cookbook with a practical learning shelf**: genuine dish photography supplies warmth and identity; familiar controls make returning effortless.

Two candidate structures are a photograph-led library with a concise resume area, and image-led rows with aligned metadata. Recommend the former for 18 visually distinct outcomes. Rows become preferable if testing shows people primarily compare duration and difficulty. Compare both using the same courses, longest English/Greek titles, missing photograph, and resume-to-course transition at narrow and wide widths before treating the choice as validated.

- **First viewport:** compact “Your courses” heading, one prominent “Continue” item when reliable saved progress exists, then the collection. With no progress, show courses immediately; no introductory carousel or compulsory setup. Do not infer the most recent course from percentage alone.
- **Collection:** three columns above approximately 1100px, two at intermediate widths, one on phones. These are initial breakpoints to test. Use reserved 4:3 photographs with focal crops, full wrapping titles, difficulty and duration together, and a labeled progress bar. Keep metadata outside photographs. Missing imagery gets a quiet placeholder, not invented food.
- **Course entry:** “Start course” or “Continue course” opens actual learning content. Restore saved position only if the product supports it. Preserve search, filters, and scroll on return.
- **Creation:** one compact dialog containing title, visibility, and optional reminder time. Use persistent labels, explain visibility beside its control, and expose timezone when a reminder is enabled. No wizard: the inputs are independent. Desktop maximum width 480px; phone uses a full-height dialog with reachable actions and keyboard-safe scrolling.

Proposed visual contract:

| Role | Decision |
|---|---|
| Type | Proposed Georgia/Times New Roman/serif headings; system sans controls and body. No asset, licensing, or Greek coverage has been verified. |
| Metrics | Page heading 32/38px; course titles 20/28; body 16/24; metadata 14/20. Use relative units, natural wrapping, and no forced uppercase Greek. |
| Color | Canvas `#F5F0E8`, surface white, ink `#2D2924`, secondary `#625B52`, action `#8F3828` with white text, focus `#245D78`. |
| Geometry | 16px phone gutters; 32px desktop; 8px related gaps, 24px group gaps; 44px minimum-height controls; 8px control and 16px surface radii. |

Calculated contrast: ink/canvas 12.73:1, secondary/canvas 5.90:1, action text/fill 7.60:1. Selection, hover, error, and disabled treatments still require complete role mapping and rendered checks.

The first-use moment hypothesis is immediate access to a chosen dish’s course, with photograph and title maintaining continuity. Use a proposed 160ms opacity transition, never delaying input; omit it under reduced motion. Confirmation would be learners reaching useful content without explaining the interface; refutation would be the resume area obscuring discovery or transitions slowing return visits.

Create/save uses immediate press feedback, honest pending text, confirmed success, and retained input on failure. Verify all 18 courses, accented Greek, fallback fonts, 200% text, missing images, failed loading, dialog keyboard operation, and repeated resume use.

**B. Incident operations console**

Choose an **operating ledger**: strong alignment, quiet surfaces, and precise time information give the console character. Established severity meanings remain authoritative.

Compare an aligned incident table with a selection-preserving detail workspace against status lanes. Recommend the table: 680 homogeneous records, cross-record comparison, and bulk assignment reward shared column positions. Lanes would be appropriate if movement through statuses were the primary task; here they fragment comparison. This choice remains unrendered.

- **Main layout:** a compact header, search/filter row, result count, then a full-width semantic table. Columns: selection, severity, service, status, owner, start time, duration. Keep established incident identifiers where available. Use sortable headings, explicit timezone, stable column rails, and right-aligned durations.
- **Volume:** start with 50-row pagination and a visible total. Preserve filters, sorting, selection, and scroll during inspection and return. Avoid live reordering while staff are reading or selecting; surface refreshed data without moving their target unexpectedly.
- **Bulk assignment:** row checkboxes reveal an anchored action bar with selected count and “Assign owner.” Make “this page” versus “all matching results” explicit; offer the latter only when supported. Show the selected scope before commitment. During submission retain selection and indicate pending status. Report per-record failures, preserve unsuccessful selections for retry, and never imply complete success after partial failure.
- **Detail editing:** use a full-width, independently addressable workspace, retaining a clear return to the filtered table. All 12 fields remain on one page in stable, meaningful groups with two columns on wide screens. Keep sections expanded; do not introduce tabs, accordions, or a wizard that hides comparison values. Provide anchored section links only if useful. A sticky “Save changes”/“Discard” bar shows unsaved state. Errors stay beside fields, with a linked summary; failures retain drafts.
- **Phone:** a searchable, severity-labeled record list shows service, status, owner, and elapsed time. Open full details on a separate route; retain all other values there and restore lookup context on return. Prioritize urgent lookup over reproducing desktop bulk operations.

Proposed contract:

| Role | Decision |
|---|---|
| Typography | System sans; page title 24/30px, sections 18/24, table and controls 14/20. Tabular figures for time columns where supported; font metrics and glyph distinction unverified. |
| Surfaces | Canvas `#F3F5F6`, white working surfaces, ink `#18222D`, secondary `#53616D`. |
| Action/selection | Action `#25465A` with white text; selection `#E5EDF2` plus checkbox and edge indicator. Keep severity tokens separate and unchanged. |
| Geometry | 24px desktop gutters; 8px cell insets; 40px minimum row height; 36px desktop controls, 44px phone controls; restrained 4px control/8px overlay radii; 1px dividers. |

Calculated contrast: ink/canvas 14.71:1, secondary/canvas 5.82:1, action text/fill 9.99:1. Severity, borders, focus, and other states remain unverified.

No celebration earns its cost here. Immediate selection feedback and preserved context are the signature hypothesis. Use 100ms color feedback; no row-travel animation. Validate realistic 680-record data, long values, multi-page selection, partial failures, concurrent-edit conflicts, keyboard operation, zoom, and repeated comparison/assignment. Faster use is a hypothesis until observed.

**C. Focus correction and feedback review**

The reported clipped keyboard outline is a **major access defect**. Its cause is the clipping boundary, so retain the approved palette, typography, 1px border, 8px control radius, and 16px surface radius.

Move `overflow: hidden` to the inner visual layer that actually requires clipping, leaving the focusable control and its focus indicator in an unclipped layer. Keep the indicator attached to the control, not the whole toolbar. Reuse the approved focus token; if dimensions are unspecified, propose a 2px outline with 2px offset and verify it in context. Preserve the existing border instead of thickening it on focus and shifting layout.

If clipping cannot move, use a deliberately inset indicator with enough internal clearance from the icon. This is a fallback requiring inspection, not an automatic equivalent. Do not change radii through an assumed concentric formula: the actual inset and matching edges have not been measured.

Verify:

- Tab and reverse-Tab through every toolbar position, especially edge icons.
- Full indicator visibility against each adjacent surface, including selected and pressed states.
- Actual hit regions, accessible names, icon clearance, and no neighboring overlap.
- Zoom, enlarged text, narrow layout, and relevant high-contrast/forced-colors behavior.
- Surrounding content clipping still behaves correctly and focus changes do not shift layout.

No screenshot, source, or runtime was provided, so the diagnosis is based on the reported behavior; the correction remains unverified.

Reject vibration on every web/PWA button. Repeated tactile feedback adds cost without distinguishing meaningful events. If haptics are retained, scope them to a meaningful discrete event, make them optional and supplementary, inspect current target-platform support, and test on physical devices. Feature detection or browser emulation cannot establish that a user feels the intended feedback.

Reject immediate “Payment complete” while a request is pending. If shipped, that would be a blocker because it misrepresents a consequential outcome. Provide immediate press feedback, then “Processing payment…” with duplicate submission protection. Show completion only after authoritative confirmation. For failure or an uncertain timeout, preserve context and reconcile payment status before encouraging another attempt. Test delayed responses, duplicate activation, failure, timeout, and late confirmation; reduced motion must retain the same truthful states.
