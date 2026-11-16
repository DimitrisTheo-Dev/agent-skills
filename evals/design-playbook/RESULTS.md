# Workflow comparison, 2026-11-16

## Method

One paired planning run used the same [five synthetic requests](requests.md), assessed against the separate [rubric](rubric.md). Two fresh Codex Work Mode agent threads read only their assigned skill snapshot and the request file. Both inherited the session model and reasoning settings without overrides; the exact provider model identifier was not exposed to the assessor. Both could read local files, but were instructed to avoid other snapshots, external accounts, implementation and further delegation. The rubric and prior outputs were withheld. Evidence-file writes were authorized only after drafting.

- Baseline: relevant skills from commit `0208b56d0711f6f6fd26eaa8335903cdccd77270`, 44 files; snapshot digest `a5c602c474b2b2a8410e91e1d70d33f8fb4467fdcffb656d8e9d853925714ae2`.
- Candidate: the same relevant collection plus Design Playbook and maintenance edits, 54 files; snapshot digest `41186857163ecc1c0a47c97cdaf2c6eca46125889f70b1fb45cad26c779e5c7d`.
- Request SHA-256: `ca5a5c3cac0813775573004d58f2975fdbd4df292ff55eb52f6197ebdcf9a131`.

Snapshot digests hash the newline-joined, sorted records `relative-path + NUL + SHA-256(file bytes)`. Raw responses, manifests and checks remain in the ignored local `.eval-results/` directory. After the candidate snapshot, abbreviated source commit links were expanded to full SHAs; behavioral instructions were unchanged.

## Observed decisions

| Case | Baseline | Candidate | Output evidence |
| --- | --- | --- | --- |
| A: dependency before demo expansion | Pass | Pass | Both deferred optional features and required playable output plus publisher consumption. Candidate explicitly selected Delivery Proof and mapped `outputKey` to `mediaId`; neither authorized publishing. |
| B: returning focus/target defect | Pass | Pass | Both diagnosed cascade, overflow/fade and transformed containing blocks. Candidate selected Design Playbook and the new recurring-defect reference, separated displacement from CLS, and kept WebKit unverified. |
| C: preserve accepted brand | Pass | Pass | Both retained the green compact identity, authoritative theme values, the other session's port and rendered-readiness wait. Candidate selected the new bounded workflow without requesting routine values. |
| D: incomplete review evidence | Pass | Pass | Both stayed read-only, rejected stale-capture relabeling and limited axe/Lighthouse claims. Candidate explicitly distinguished proposed publication from an already exposed credential. |
| E: backend-only scope | Pass | Pass | Both skipped the design workflow and UI gate, selected a bounded backend behavior slice and identified the absent TDD procedure instead of claiming it was loaded. |

Selection was inspected separately: both agents named the actual snapshot files they loaded; the candidate used the new skill for applicable handoff/repair cases and skipped it for backend-only work. The baseline already reasoned correctly on all five cases. This pair shows no observed decision regression and explicit routing to the new material, not a demonstrated gain in visual quality, reliability or speed. No intervention corrected either answer; time to a verified application result is not applicable because no application was run.

## Mechanical validation and limits

The new skill passed the bundled quick validator. Repository format, metadata, contained resources, local links/anchors and Python syntax passed `scripts/check.py`, along with all 38 existing tests on Python 3.12 after installing the pinned development dependencies. No runtime script was added. The missing uploaded `ring-audit.mjs` was replaced by documented scoped checks, not a fabricated implementation.

The retrospective inspected public source history and reports, not current production behavior. These planning exercises contain useful trigger inputs and are only one attempt per revision. They do not test implementation under deadline pressure, actual agent concurrency, visual craft, accessibility conformance or live service success. A future build should exercise a real representative flow before claiming those improvements.
