# Design specialists: verification record

Date: 2026-11-11. This update splits design decisions into five independently reachable specialists and coordinates them through Vibe UI and Studio. It preserves one quality gate and contextual art direction.

## Change under evaluation

Baseline: repository commit c395ecf56bdc1d8fc7ef9fa54137c667b2f668c4, Vibe UI with UI Quality Gate.

Candidate: five new specialists plus updated Studio, Vibe UI and gate. The pre-evaluation content snapshot is in [candidate-snapshot.json](candidate-snapshot.json). Integration corrections made after that snapshot are described below; the paired brief run was not repeated.

The distinct invocation boundaries are color construction/contrast, typography, physical geometry, task representation and feedback/motion. Each can answer a focused request and is reachable from the coordinator. The coordinator keeps shared decisions and alternative renders together. This is not a requirement to run every helper on a small fix.

## Independent brief comparison

Two fresh agents received the same [three requests](REQUESTS.md), without the other agent's output or an intended answer. They inherited the same host/model settings; no override was used. Baseline could use only its Vibe/gate packages. Candidate could use its Vibe/gate packages and five specialists. Each read its actual supplied packages. No runtime or font assets were supplied and no product files were changed.

This is one exploratory pair, evaluated after reading the outputs. It is not a preregistered or statistically meaningful experiment. Wall-clock latency and human preference were not measured.

| Request | Baseline outcome | Candidate outcome |
| --- | --- | --- |
| Visual course collection | Photo-led collection, compact resume area, one dialog for independent inputs | Photo-led collection, resume only with reliable progress, one dialog for independent inputs |
| Expert operations | Aligned table and one-page detail form; explicit bulk scope and partial failure | Aligned table and one-page detail form; explicit bulk scope and partial failure |
| Local focus repair | Preserved approved system, corrected clipping locally, requested real recheck | Preserved approved system, corrected clipping locally, requested real recheck |
| Web haptics/payment proposal | Rejected universal vibration and premature payment success | Rejected universal vibration and premature payment success |
| Evidence honesty | Stated unrendered/runtime/font limitations | Stated limitations; separately calculated selected opaque color pair ratios |

Both versions made sensible core decisions. The candidate returned implementable role metrics and conditional reasoning, but the baseline did too. This exercise establishes useful behavior and no observed scope regression in these cases. It does not establish superior aesthetics, faster delivery or reliable “wow” moments.

See the raw [baseline response](baseline-response.md) and [candidate response](candidate-response.md). Candidate contrast calculations were independently recomputed; they are arithmetic for specified opaque values, not rendered theme/state verification.

## Independent integration review

A separate reviewer inspected all eight packages without the paired outputs. It found four material integration concerns:

1. An older Studio handoff required a second interface-review route. Replaced with one scoped UI Quality Gate and reuse of current evidence.
2. Hash checks could not bind a capture to its claimed source revision. Narrowed the claim explicitly, required source/runtime capture context and defined a relevant dependency boundary. The checker still cannot attest capture provenance or detect invented observations.
3. A resolved rendered finding could cite source-only evidence. Added affected-area fields and modality checks for resolved findings, with four regression tests.
4. Default round budgets conflicted with continuation guidance. Clarified default rounds as diagnostic checkpoints, while explicit user budgets remain hard limits with blocked/unverified outcomes when incomplete.

Removed a stale fixed 10–15-minute first-slice placeholder as part of the handoff correction. The reviewer rechecked the corrections.

## Mechanical verification and limits

All eight canonical personal packages passed the skill quick validator. The repository check passed with 37 tests, including 20 quality-record tests. It validates metadata, contained/reachable links, Python syntax and regression behavior. It does not evaluate visual quality.

No new app was built or rendered for this structural update. No native device, haptic, cross-browser, performance or accessibility conformance claim is made. The historical rendered catalog comparison remains in [product-design](../product-design/RESULTS.md); its negative/limited evidence has not been rewritten.

Adopt the specialist organization for clearer ownership, focused retrieval and reusable decision guidance. Assess visual results on real subsequent product work. Preserve observed failures and refine the relevant rule rather than promising deterministic beauty.
