# Runtime and verification

## Action semantics

Use semantic controls and appropriate platform events. Press feedback can begin on pointer-down; ordinary click actions should retain release/cancel behavior and keyboard activation. Do not fire an irreversible action just to make it feel faster. Respect native text selection, scrolling and gestures.

Operate focus management, Escape/dismissal, focus return and screen-reader status messages where affected. Animation is not a substitute for semantics. Avoid stealing focus for a routine asynchronous update.

## Async and optimistic behavior

Use an optimistic update only when the expected result is sufficiently predictable and recoverable in the actual system. Capture enough state to reconcile the response; preserve concurrent/newer edits and make retries safe. Use the existing data layer rather than inventing parallel state.

A reversible preference or favorite can be a candidate. Payment, availability, permissions and irreversible commitments need honest pending/confirmed distinctions; do not present success before the authoritative result. UI polish scope does not authorize backend changes. If required recovery semantics are absent, keep pending feedback and report the limitation.

Handle success, failure, timeout, retry and a later result arriving after a newer request where relevant. A skeleton should match the expected structure and reserve useful space. Preserve existing content during refresh when appropriate. Avoid forced skeleton delays and fabricated stages or percentages.

## Interruption and performance

Retarget from the current visual state; rapid reversal must not restart from a stale origin or accumulate event handlers. Check interactions while a prior transition is settling. Keep animation work out of the critical input path.

Prefer properties and techniques suited to the actual browser/framework. Transform and opacity are often good candidates, not a ban on all layout transitions or a performance guarantee. Profile suspected expensive paints/layouts and large layers. Reserve image/content dimensions to avoid unintended shifts. Avoid applying will-change everywhere.

## Reduced motion and optional feedback

Honor the platform's reduced-motion preference. Remove nonessential spatial travel, scale and parallax; use immediate state changes or restrained non-spatial feedback as appropriate. Preserve information, orientation and completion feedback. Test the alternative, not merely the existence of a media query. Pause/stop controls may also be needed for automatic ongoing movement.

Haptics belong to supported devices and meaningful discrete events. Prefer documented platform patterns and existing native control behavior; do not duplicate a system haptic. Keep them optional, consistent and supplementary to visible/accessible feedback. Repeated vibrations on every tap can be tiring.

For web/PWA, the Vibration API has limited browser support. Feature detection is only a prerequisite; verify actual behavior on the target device and inspect current compatibility. A browser emulator cannot prove haptic output. Do not promise iPhone web haptics or add unrelated native dependencies. A native or hybrid app may use its existing supported platform API, with device testing and preferences respected.

## Verification record

For each materially different interaction family retain an observation for ordinary use, repeated/rapid input, cancellation or reversal, failure and reduced motion as applicable. Check touch/keyboard paths rather than assuming hover covers them. Measure feedback onset separately from animation duration or server latency.

When timing matters, record the transition and inspect at normal speed, then slower for discontinuities. A screenshot cannot establish smoothness, responsiveness or haptic behavior. If runtime access is absent, return a proposed specification and name the unverified behavior. Reuse the parent's evidence record instead of creating an independent gate.
