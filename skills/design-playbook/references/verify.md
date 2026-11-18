# Scoped proof

## Select the check depth

For a focused repair, reproduce the affected state and inspect its shared consumers at the relevant widths. For a new flow, cover the primary journey, loading/failure/recovery, narrow/wide layouts and materially different inputs. For release, run the product's supported browser matrix and its real integration path. Add a browser when the changed behavior or support policy warrants it; report unavailable coverage explicitly.

Common responsive samples are 1440, 390 and 320 CSS px, with 768 and changed breakpoints where relevant. These are starting samples, not proof of every device. Physical keyboard, mobile browser chrome, screen-reader and native-device claims require those checks.

## Reproduce and measure

| Concern | Method | Report and limitation |
| --- | --- | --- |
| Focus clipping | Keyboard through relevant controls, first/last items, both scroll extremes and breakpoints. Inspect indicator, computed styles and clipping ancestors. | Named controls, state, runtime and images. Bounding boxes alone miss shadows/masks. |
| Target stability | Sweep the pointer across adjacent controls and operate center/edge clicks during hover/press. Inspect stretched pseudo-elements and containing blocks. | Actual activated action, cursor/hit-region changes and recording where needed. |
| Component movement | Sample relevant bounding boxes before/during/after the named transition; include font/media loading if implicated. | Maximum observed x/y/width/height delta in CSS px, sample conditions and resolution. “0px observed here” is scoped. |
| Page layout shift | Observe layout-shift entries during the specified reload/flow with the intended cache/font conditions. | CLS and window/method separately from component displacement. A good CLS does not prove every target is stable. |
| Loading/error | Exercise slow success, immediate success and failure from the real state owner. | State sequence, geometry and reachable recovery; distinguish fixture from live server. |
| Contrast | Measure actual text/indicator pairings against each rendered background. | Colors, ratio, role and applicable target; include overlay/compositing conditions. |
| Accessibility | Run available automated checks and operate keyboard/focus/semantics; use assistive technology for its behavior. | Tool/version, scope, severity filter, exclusions and manual observations. Zero scanned violations is not full conformance. |
| Motion | Operate repeated/reversed input and reduced-motion mode; review time-based evidence. | Observed response and remaining limits. A still image cannot prove smoothness. |
| Product result | Exercise the requested outcome using the target environment and required real dependency. | Actual artifact/state, downstream acceptance and remaining provider/configuration blockers. |

This package provides an audit procedure, not a bundled `ring-audit.mjs`. Use the project's existing browser harness or a bounded task-local check. Inspect the rendered result even when a heuristic detector returns clean. Never invent a missing script, metric or passing run.

## Evidence provenance

Bind each result to source revision or file fingerprint, running build, route/state, browser/version, viewport/input, method and observed output. State fixture versus live services. Wait for meaningful UI readiness before interaction. After a merge or shared-token edit, rebuild and recheck affected states on the integrated candidate. Evidence from an earlier build can remain historical; relabeling its revision does not refresh it.

Keep intended thresholds separate from results. A local compressed-server Lighthouse score is not a production score. Carry scan exclusions beside a zero-violation total. Label source-only review and self-review accurately. A worker's assertion is a pointer to inspect, not independent proof.

## Safe evidence handling

Use synthetic accounts and private, task-owned output directories by default. Before publishing evidence, inspect screenshots, URLs, HAR/traces, console logs and JSON for access tokens, cookies, authorization headers, signed URLs, emails and other private content. Prefer an allowlist of fields for retained logs. Publish only sanitized evidence needed to support the claim; fingerprint the sanitized artifact and record the redaction boundary. Secret scanners assist review but do not establish that a capture is safe. An observed exposed credential needs its own authorized remediation, not just a cleaner screenshot.

## Decide once

Close a defect only after its reproducing check passes on the candidate. Report ready only for the verified scope with no open major/blocking findings. Missing tools or real dependencies mean partial, blocked or unverified as applicable. Keep a separately labeled replay available for a timed demo when authorized; a replay is not a live integration result. The lead reports one result and the highest-priority next action.
