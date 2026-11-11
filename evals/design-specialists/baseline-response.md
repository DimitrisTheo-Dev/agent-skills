**A. Cooking-course library**

**Direction.** Make this feel like an authored cookbook that remembers your place: generous finished-dish photography, expressive headings and quiet, practical controls. The useful first result is opening a suitable course or continuing existing work.

Two unrendered alternatives: a photo-led library gives each dish recognition and appeal; a compact editorial list makes duration and difficulty easier to compare but reduces the photographs’ contribution. Recommend the photo-led library with a compact “Continue learning” section. This selection is provisional until both compositions are rendered with identical course content at mobile and desktop widths.

**Layout and flow.**

- Start with the library heading and “Continue learning” when progress exists. Show genuine progress and an explicit “Continue” action for each course; do not invent recency or recommendations from unavailable data.
- Place “All courses” immediately afterward, with difficulty and duration filters and a visible result count. Eighteen courses do not need elaborate navigation.
- Use three columns on wide desktop, two at intermediate widths and one on narrow phones. Each course has a consistent 4:3 photograph, full title, labeled difficulty and duration, then progress or “Start course.” Keep text outside photographs.
- Continuing should restore the saved course position if the product stores it; otherwise open its overview with recorded progress. This capability remains an implementation dependency.
- Preserve filters and scroll position when returning from a course. Distinguish loading, unavailable imagery, request failure and no matching courses.

**Visual system.** Proposed starting values: warm paper `#F7F2E8`, near-black brown text `#29241F`, white control surfaces and dark terracotta `#843D2D` for primary actions. Keep status colors separate and always labeled. Aim for roughly 55% quiet surfaces, 35% authentic photography and 10% text/controls, with action accent occupying only a small fraction. Avoid ornamental food illustrations competing with the dishes.

Propose Noto Serif for headings and Noto Sans for controls and reading text; fonts are not supplied, so licensing, loading, Greek glyphs and fallback metrics require verification. Start at 32/36px page headings, 20/26px course titles and 16/24px body text. Use 8px spacing increments, 12px card corners, 8px controls and 16px mobile gutters. These values require rendered adjustment.

**Creation dialog.** Use one dialog containing persistent labels for title, visibility and optional reminder time. Default visibility to private if that option exists; expose the consequence beside the selector. Make the reminder optional without expanding the initial form, and display its timezone. Keep validation beside fields, preserve input after errors and show success only after creation succeeds. On phones use a full-height sheet with reachable actions above the keyboard. Manage initial focus, Escape, containment and return focus.

**Signature hypothesis and verification.** A quiet “Your next step” treatment beside genuine progress may make returning feel welcoming; it must remain helpful on repeated visits without celebration or delayed input. Confirm through successful resumption and clear course choice; reject if the section pushes discovery too far down. Test English and Greek, long titles, text enlargement, keyboard navigation, dialog recovery and both widths. No render, font, contrast or interaction checks have yet run.

**B. Incident operations console**

**Direction.** Use an operational ledger: disciplined columns, strong numeric alignment and restrained typography. Character should come from making incident relationships exceptionally legible. Severity terminology and meaning remain authoritative.

Two unrendered alternatives: a comparison table supports scanning and bulk work; a queue with persistent detail pane accelerates sequential inspection but sacrifices column space and cross-record comparison. Recommend the table with a dedicated detail page. Validate this choice using the same incidents, selected-record state and edit/save transition at wide and narrow widths.

**Collection and bulk assignment.**

- Put search, severity/status/owner/service filters and the result count directly above a semantic table. Avoid a dashboard of summary cards ahead of the work.
- Columns: selection, severity, service/incident link, status, owner, start time and duration. Show absolute start times with an explicit timezone; align durations using tabular numerals. Preserve meaningful labels alongside severity colors.
- Use a sticky header and a stable sort. An initial severity-then-start-time order is a proposed default, not an existing operational rule. Keep refreshed data from unexpectedly moving a row under an active interaction.
- Show 50 rows per page initially, with total count and persistent filter, sort and selection context. Validate this density with actual content.
- Selecting records reveals a bulk action bar: “12 selected” and “Assign owner.” The header checkbox selects the current page; selecting all matching results requires a separate explicit action stating its count.
- Before assignment, show the selected owner and affected count. While pending, prevent duplicate submission. Report confirmed successes and individual failures, retaining failed selections for recovery.

**Detail editing.** Keep all 12 independent fields in a single form. Use two aligned columns on desktop, with semantic group headings determined by the actual fields; avoid a wizard or collapsed sections that hide values staff need to compare. Provide persistent labels, sufficient field width and a stable Save/Cancel action area. Show unsaved changes and inline errors without clearing edits. On failure retain the draft; handle concurrent changes explicitly if the backend supports conflict detection. Returning to the table restores position and filters.

**Visual system.** Begin with cool-white `#F6F8FA` surroundings, white rows and near-black `#18222D` text. Reserve a muted blue action accent, pale blue selection and a distinct visible focus outline. Preserve established severity colors; do not reuse them for branding. Target approximately 85% neutral surfaces, 10% text/rules and 5% action/status emphasis. Measure all rendered pairings.

Use an available utility sans, provisionally `system-ui`, with verified tabular numerals. Start at 14/20px table text, 16/24px form text and 24/30px headings. Propose 40px table rows, 8px control corners and thin horizontal separators. The recognizable detail is a consistent severity label and aligned time columns, without decorative motion.

**Phone and verification.** Recompose as a searchable incident list showing severity, service, status and elapsed time, with owner/start accessible in detail. Stack all edit fields; keep urgent lookup immediately available. Desktop comparison and bulk assignment remain primary. Exercise keyboard selection, pagination, partial failure, long values, saved context and repeated edits. No runtime, renders, font measurements or performance evidence is supplied; readiness remains unverified.

**C. Focus clipping, vibration and pending payment**

**Focus correction.** The reported clipped focus indicator is an accessibility defect; its exact extent and severity need inspection. Keep the approved palette, typography, 1px border, 8px control radius and 16px surface radius.

The preferred correction is to separate clipping from the interactive element: keep the button and its focus indicator in an unclipped wrapper, and apply `overflow: hidden` only to the inner content that actually needs cropping. If the parent must remain clipped, place a clearly visible inset focus indicator within the control and provide sufficient space so it does not obscure the icon. Do not remove necessary clipping globally or change all borders and radii.

Reuse the established focus color. A local 2px outline is a candidate treatment, distinct from the existing 1px structural border; its width, offset and contrast require rendered verification. The two radius tokens do not justify a global geometry change. Inspect concentric corners only where the elements are actually nested with a measurable inset.

**Verification.** Tab and Shift-Tab through the toolbar, including its first and last icons and any scroll boundaries. Confirm the entire indicator remains visible, the icon retains an accessible name, and focus survives activation and return from menus. Inspect keyboard focus, pressed, disabled and hover states at normal size, enlarged text and narrow widths. Check computed contrast and target size/spacing, including forced-color behavior in a supported runtime. Reinspect neighboring controls after the wrapper change. No screenshot or implementation is supplied, so this is a recommended fix, not a verified closure.

**Vibration proposal.** Do not attach vibration to every web/PWA button. That adds repeated sensory feedback without a defined benefit. Prefer immediate visible pressed feedback. Any haptic treatment should be limited to a justified event, optional, capability-checked and accompanied by a complete visual alternative. Runtime and device support are unverified; reduced-motion settings are not evidence of a user’s haptic preference.

**Payment proposal.** Showing “Payment complete” while the request is pending is a blocker because it falsely confirms a consequential outcome. Immediately show “Processing payment…” and prevent duplicate activation. Show completion only after authoritative confirmation. For failure preserve relevant input and provide recovery; for a timeout with an unknown outcome show “Checking payment status” and reconcile the existing attempt before offering another charge. Verify pending, confirmed success, failure, timeout and duplicate-click paths, including truthful accessible announcements.
