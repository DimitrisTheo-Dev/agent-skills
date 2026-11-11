# Interaction recipes

For each affected family, specify applicable states. An empty state belongs to a collection; a button does not need a fabricated empty state. Prefer shared primitives over per-element animation code.

| Interaction | Immediate feedback | Continuity and outcome | Failure or repetition |
| --- | --- | --- | --- |
| Button or icon action | Visible pointer press and keyboard focus/activation treatment | Clear result or local pending state; stable label/control dimensions | Restore usable action with useful error; prevent accidental duplicate submission |
| Toggle, checkbox or selection | Selected indicator and relevant text/appearance update | Animate state change only if it helps perception | Keep state truthful if remote persistence fails; avoid routine success toasts |
| Menu, popover or tooltip | Prompt appearance with clear trigger relationship | Origin-aware reveal, focus and dismissal suited to component semantics | Rapid open/close should reverse cleanly; keyboard access must not wait |
| Tabs or navigation | Current destination becomes clear immediately | Spatial or opacity transition only when useful; preserve route/scroll meaning | Frequent switching stays fast; reduced motion retains orientation |
| Card to details | A clear actionable region and visible activation | Preserve object identity through heading, image or spatial continuity | Separate secondary actions; return to prior context without ambiguous nested controls |
| Form step | Validation and progress update without losing input | Transition supports direction and keeps the next heading/focus legible | Back/edit works; errors remain next to their fields |
| Search/filter | Input remains responsive; query/filter state is visible | Results/count update with stable structure; announce material changes appropriately | Distinguish no results from error; stale responses cannot overwrite newer queries |
| Reorder/drag | Immediate pickup and destination feedback | Item settles into the actual final position | Provide an alternative input path; cancellation restores state |
| Copy/download/export | Acknowledgment after the relevant operation succeeds | Brief local confirmation with stable dimensions | Clipboard/download failure is not reported as success |
| Save/create/update | Local acknowledgment, then honest pending status if necessary | Result updates at the correct scope; preserve entered work | Retry/rollback/conflict handling must not erase newer edits |
| Delete/archive | Clear consequence and pending/undo path when supported | Remove or mark the object consistently with real result | Restore recoverable state on failure; never fake a reversible action |
| Slow result/generation | Immediate accepted-input feedback | Real progress if measurable; honest phase/status otherwise; useful cancel/continue path | Preserve prior content and inputs; explain recovery without invented percentage |
| Empty to populated | Clear next action, then stable insertion/result | A first useful outcome can earn a brief reveal | Subsequent results stay efficient; no forced replay |
| Completion milestone | Confirmation tied to actual completed work | Optional restrained product-specific celebration | Shorten or omit on repetition; make the result clear without effects |

## Timing as a starting point

Distinguish onset from settling time. Immediate feedback should occur promptly, aiming around 100ms or less where measurable; a 200ms transition can still start immediately. Network completion is a different measurement.

If no system exists, test roughly 80–150ms for small state feedback, 120–220ms for menus/small surfaces and 180–320ms for larger spatial changes. These ranges are hypotheses. Choose based on distance, frequency and continuity; do not apply one duration to every interaction. Record exact chosen tokens and inspect them.

Use easing that communicates the intended change. Entering surfaces often settle; direct manipulation should follow input. If using springs, specify parameters supported by the actual library and inspect overshoot and interruption. Do not prescribe magic values without the library and object behavior.

## Character and repetition

A memorable moment needs a trigger, a user benefit, a relationship to product content and a clear end. Consider how it feels on the second and twentieth encounter. A result arriving with less expected work may be more valuable than a celebration. Keep everyday controls fast even when the product has expressive moments.

An atmospheric animation may serve identity if it preserves reading and attention. Avoid perpetual movement competing with the main task. Record why a proposed effect was kept, shortened or removed; do not fill an animation quota.
