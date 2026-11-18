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

## Timing in context

Distinguish feedback onset, visual settling and network completion. A control can acknowledge an input immediately and let a slower operation continue with honest pending feedback.

When choosing timing directly, start with the project's tokens or the platform primitive. Tune against distance, repetition and interruptibility. Entering surfaces can settle while remaining ready for input. Direct manipulation should track the input. Check the chosen values in the actual implementation.

## Character and repetition

A memorable moment needs a trigger, a user benefit, a relationship to product content and a clear end. Consider how it feels on the second and twentieth encounter. A result arriving with less expected work may be more valuable than a celebration. Keep everyday controls fast even when the product has expressive moments.

An atmospheric animation may serve identity if it preserves reading and attention. Avoid perpetual movement competing with the main task. Record why a proposed effect was kept, shortened or removed; do not fill an animation quota.

## Replacing a control glyph

For a discrete change such as copy to copied, reserve one icon slot and update the accessible action or status immediately. Try a short crossfade first. A small blur on the outgoing glyph can soften the swap when it remains legible at its rendered size. Keep the label and container sharp. Rapidly trigger the action twice, keyboard-activate it and reverse it mid-transition. The newest state should win without delaying input. Show the final glyph immediately for reduced motion. Continuous chart inspection and run selection benefit from immediate updates.
