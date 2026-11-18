# Inspection matrix

Coverage: task, structure, terminology, typography, spacing, color, components, states, interaction, responsive, accessibility, character. Inspect repeated instances and affected states. These are contextual questions, not a fixed visual style. Exact pixel claims require measurement.

## Task
State the user, job and successful outcome. Complete the main journey from a cold start with relevant inputs. Identify avoidable steps, repeated entry, unexplained waits and recovery work. Onboarding reaches actual value rather than finishing a tour. Utilities expose useful content promptly; marketing explains the offering, evidence and next action. Preserve necessary consent and consequential confirmation.

Close when the next action is discoverable and the actual success/failure behavior matches its wording. Label reviewer walkthroughs separately from user research.

## Structure
Identify the intended focal point, secondary information and reading order. Compare the actual first viewport with those priorities. Inspect introductory space that displaces the task, competing headings, repeated containers, disconnected actions and uneven visual mass. Use lists for scanning items, tables for comparing attributes and cards for discrete objects. A marketing hero and a daily operating screen have different jobs. Recompose mobile rather than squeezing desktop.

Close when the most prominent region deserves that attention and useful material is accessible without unnecessary ceremony. Correct hierarchy rather than shrinking all text. Whitespace should group, separate or direct attention; it need not be filled or animated.

## Terminology
Map user concepts to consistent nouns and actions to clear verbs across navigation, headings, controls and confirmations. “Save” starts an action; “Saved” describes a confirmed result. Put restrictions and recovery near the affected control. Inspect copy in real components. Use locale-aware dates, currency, decimals, units and time zones. Preserve accessible meaning when visually truncating. Stress supported scripts, including Greek where relevant, and long translations.

Close when labels predict behavior, states are truthful and equivalent concepts use the same terminology. If wording cannot resolve confusion, change the interaction rather than adding paragraphs.

## Typography
Inventory computed family, loaded font, size, weight, line-height, tracking and color for each role. Verify glyph coverage, fallbacks and layout after loading. Display, body, label, metadata and numeric text need deliberate roles; equivalent roles should not acquire arbitrary variants. Tune line-height to line length and size. Inspect wrapped headlines, clipped glyphs, cramped controls, faint metadata, orphaned words and tiring paragraph widths. Keep semantic heading order independent of visual size. Align text baselines in mixed-size rows. Use tabular figures for changing/comparable numbers where supported.

Close when hierarchy is clear at normal scale, important labels remain readable, headings wrap intentionally at adjacent widths and enlarged text preserves the task. A 16px body or 1.5 line-height is a starting hypothesis, not a universal law.

## Spacing
Measure container insets, row gaps, label-to-field gaps, section gaps, line boxes and alignment anchors. Reuse the project's spacing vocabulary; use finer steps for small relationships and larger steps for large regions. Related content should appear closer than unrelated groups. Align icon, label, value and action columns across repeated rows. Distinguish glyph alignment from element-box alignment. Inspect shared edges, concentric corners, border thickness and shadows both close up and at normal scale. Outer radius minus inset can guide a truly concentric inner corner; inspect optically rather than forcing that formula everywhere.

Close when repeated roles share deliberate geometry and gaps communicate grouping. Fix shared causes, not isolated symptoms. An optical exception needs a reason, not necessarily a new global token.

## Color
Name surface, text, border, action, selection, focus, status and chart roles. Inspect their proportions on actual screens in supported themes. Equal swatches do not establish a usable palette. Measure rendered pairings, including opacity, gradients and overlays. Distinguish error, selection and branding beyond hue. Inspect secondary text, input boundaries, selected rows, disabled states and focus separately. Depth should explain layering; material and imagery may also express identity if readability and performance hold.

For web AA text contrast use 4.5:1 for normal text and 3:1 for qualifying large text with applicable exceptions. Required non-text control/state information generally needs 3:1 under its own criterion. Disabled text is not automatically subject to normal-text contrast requirements, but its state must remain understandable.

Close when color communicates its roles and applicable measured contrast passes. No universal accent count, hue ban or obligatory cream/green palette.

## Components
Inspect every family present, including shared hit regions, icon stroke/optical weight, label alignment, corners, outlines and depth. Icons need known meaning or visible text; meaningful icon-only controls need accessible names. Check provenance and role: distinguish an authentic identity asset from a functional glyph or invented decoration. Remove redundant glyphs rather than giving every item a colored tile. Compare perceived affordance with behavior: static copyable text should not accidentally resemble a placeholder input, and capability descriptions should not look like completed tasks. Verify real assets resolve, crops preserve the subject and dimensions reserve space. Distinguish actual product evidence from illustration. Show product screenshots large enough to read when comprehension depends on them.

| Family | Required inspection when present |
| --- | --- |
| Buttons/links | Literal action/destination, hierarchy, actual hit region, press/focus/disabled/loading, stable labels, duplicate activation and real outcome; preserve link modifier-click behavior. |
| Forms | Persistent labels, help/error associations, appropriate type/inputmode/autocomplete, required/optional distinction, paste/autofill, sensible validation timing, input preservation and software-keyboard visibility. Numeric identifiers may need text with numeric inputmode to retain leading zeros. Autofocus is contextual. |
| Choice controls | Correct group semantics, full-label hit region, non-color selected cues and keyboard operation; switches usually represent immediate settings. |
| Menus/popovers | Anchor, collision, opening/closing, outside click, escape, focus movement/return and scroll containment; required actions cannot depend solely on hover. |
| Dialogs/sheets | Accessible title, initial focus, modal containment and return, cancellation, background inertness as appropriate, long-content scrolling and reachable actions with keyboard open. |
| Navigation/tabs | Current location, matching heading/content, correct keyboard model, browser back/deep links where required and preserved search/filter/scroll context. |
| Collections | Stable scanning anchors, meaningful sort/filter, aligned metadata/numbers, long names, narrow comparison and distinct empty/filter-empty/failure states. Avoid nested conflicting click targets. |
| Search/palettes | Discoverable entry point, matching relevant user terms, clear/reset/no-results, selection, keyboard/escape and query persistence. Respect typing and IME composition. |
| Notifications | Truthful status, appropriate announcement, meaningful duration, working undo/retry; preserve important failures long enough to act. |
| Charts | Units, time window, scale, legend, honest missing/stale data, readable axes and alternatives for essential information; animation preserves numerical meaning. |
| Chat/streaming | Visible composer with keyboard, respect user scroll position, distinguish partial/complete/error, cancel/retry, preserved drafts and restrained announcements. |
| Onboarding | Useful next step, contextual value, truthful progress, back/skip when appropriate, optional setup deferred and actual first value. |

Close when components are consistent for their role and reduce effort. A border, pill, card or shadow needs a structural or expressive job.

## States
Map relevant default, hover, focus-visible, pressed, selected, expanded, disabled, loading, empty, partial, success and error states to their owner. A list may be empty; its button need not have an “empty state”. Specify feedback, focus behavior and recovery. Preserve input on failure, prevent duplicate submissions where necessary and distinguish optimistic from confirmed results. Exercise missing content and request failures. Explain unavailable actions and offer retry, undo, cancellation or an alternative when appropriate.

Close when users can tell what happened and what to do next without losing work. A spinner or toast alone does not prove completion. Implement this state inventory in the first complete slice.

## Interaction
Specify trigger, immediate feedback, transition, settled state and reversal. Include pointer, touch and keyboard where relevant. Press feedback can start immediately; commit ordinary actions on click/release with cancellation preserved. Menus originate coherently, focus follows navigation and repeated input remains responsive. Interrupt/reverse transitions, reactivate before settling and revisit after navigation. Repeat the main frequent interaction ten times as a practical review default and record the actual count; do not infer long-term satisfaction.

Inspect at normal speed and use slowed playback/recordings to diagnose discontinuity. Prefer explicit animated properties and suitable transform/opacity transitions, but measure expensive effects in context; a property or library does not guarantee smoothness. Test reduced motion with understandable feedback retained. Distinguish input feedback from network completion and record latency only when measured.

Close when actions receive clear feedback, motion preserves continuity without delaying input, and reduced-motion behavior works. Alive means responsive and considered, not constant movement.

## Responsive
Inspect narrow, intermediate and wide layouts plus widths across changed breakpoints. Stress long content, sticky regions, modals and orientation where relevant. For input-heavy mobile work, test keyboard open/dismiss, focused-field visibility, safe areas, browser chrome and scroll restoration in an available target runtime. Include PWA/embedded-browser checks when in scope and accessible. Preserve native zoom, selection, scrolling, browser back and platform shortcuts.

Close when the supported journey has no accidental overflow, obscured controls, focus jumps or broken navigation. CSS iframe inspection is CSS-width evidence, not a physical-device test. Unavailable device/browser coverage stays unverified.

## Accessibility
Inspect semantics, names, heading/reading order, keyboard order, visible and unobscured focus, modal containment/return, announcements and non-color cues. Operate the essential keyboard path; use assistive technology for claims about its behavior. Test text enlargement and reflow. Web AA targets are at least 24 by 24 CSS px or a qualifying exception, including sufficient spacing; choose larger touch regions where appropriate. Do not confuse this minimum with a universal 44px rule. Inspect vertical content at an equivalent 320 CSS px for reflow, applying exceptions such as genuinely two-dimensional tables and checking cell content too.

Close specific performed checks, not “WCAG compliant” from a scan. Preserve user zoom and control.

## Character
For ambitious brand/landing-page work, use the [creative rejection protocol](creative-rejection.md) to distinguish a product-specific concept from polished generic styling. Explicitly check logo interchangeability, authentic asset preservation, product proof, meaningful concept exploration and character after subtracting decorative effects. Record a major finding when the distinctiveness brief is visibly unmet, even if ordinary UI checks pass. Do not impose an originality quota on conventional utility or faithful-recreation work.

Compare the current render with the brief and actual references at comparable sizes. Explain what content, type, composition, materials and interaction express together. Mentally remove the logo/showcase animation: the rest should still feel considered. Changing a template's colors is not sufficient evidence of identity. References supply relationships, not a default palette. Expressive visuals can earn space through atmosphere, recognition or real value while maintaining task clarity.

Close with a concrete judgment: strongest distinctive decision, largest remaining weakness and why the composition fits this product. If the brief asks for a memorable moment, prototype a real candidate; don't rename a copy toast “wow”. User preference calibrates judgment, but missing preference does not block routine authorized progress.
