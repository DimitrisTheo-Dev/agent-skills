# Engineering workflow comparison, 2026-11-16

## Method

One paired planning run used the frozen [five requests](engineering-requests.md) and separate
[rubric](engineering-rubric.md). Two fresh Codex Work Mode threads received only their assigned
skill snapshot and requests. Both inherited the same model/reasoning settings without overrides; the
exact provider model identifier was not exposed to the assessor. They could read local files and
write only their final private evidence response after drafting; no external calls, application
edits, installations, scans or delegation were permitted. Other snapshots, rubrics and prior results
were withheld from the supplied inputs.

- Baseline: published commit `e9b3348618157f1e28353f3d9fbbf850cc805ffd`, tree
  `622d79be5ec76593b05025c9080856b65a9c8d6b`; the matching local checkout has a different commit
  author but the identical tree. Skill collection: 91 files, digest
  `b4ff996f8d8233bbaa4aca44d30fc9bbeec522e27dac9be1997465bad63075a8`.
- Candidate: that collection plus four engineering references and routing/coverage/source updates;
  95 files, digest `917a8ad392eadb540a7695a454a87262c68592dca4e39cff411cb723d0b66b99`.
- Requests SHA-256: `05517aab2955dbd364b1c82b58ec60d044502ee30f15125dc443b8c1dd338316`.

Snapshot digests hash newline-joined, sorted `relative-path + NUL + SHA-256(file bytes)` records,
excluding generated Python caches. Private inputs, manifests and raw responses are retained under
ignored `.eval-results/engineering-readiness/`. The author assessed the completed responses without
intervening in either answer. Application-result timing is not applicable: no application was run.

## Observations

| Case | Baseline | Candidate | Evidence and limits |
| --- | --- | --- | --- |
| A: N+1 and pool growth | Partial | Pass | Both identified N+1 despite Promise.all, preserved authorization/TanStack, rejected 200,000 potential connections and deferred Redis. Baseline specified indexes, query counts and representative load but omitted explicit query-plan verification from the frozen rubric. Candidate required EXPLAIN/selectivity and noted that ANALYZE executes work. |
| B: score and accessibility claims | Partial | Pass | Both blocked the unreachable dialog action, disclosed exclusions, preserved the accepted hero and rejected field/WCAG claims from lab scores. Baseline asked for eligible real-user metrics but omitted the explicit p75/device interpretation. Candidate gave p75 targets, mobile/desktop separation, repeated production runs and manual AT evidence. These are planning-coverage differences, not measured performance gains. |
| C: private reports and AI limits | Pass | Pass | Both identified server object authorization, unsafe shared permissions/cache, server resource limits and the missing capacity evidence. Both stayed read-only and proposed denial/concurrency tests only for an authorized environment. |
| D: tool adoption | Pass | Pass | Both rejected unpinned broad execution, silent integrations/autofixes and warning suppression; both preserved stack and separated baseline debt. Candidate identified current local-diagnostic flags while still requiring installed-version verification and no unsupported network guarantees. |
| E: narrow visual fix | Pass | Pass | Both selected focused geometry/UI checks, retained unaffected release evidence and rejected a full engineering pipeline for one icon. Both left rendered correctness unverified without a runtime. |

Selection was checked separately: both reported the snapshot files read. Candidate A-D reached the
relevant new engineering branches; E stayed on geometry/UI review. The baseline already rejected the
central unsafe shortcuts. This single pair makes gaps in explicit acceptance detail visible; it does
not establish general model improvement, faster execution or fewer production defects.

## Validation and next evidence

The revised entrypoint passed the bundled quick validator. Repository metadata, contained resources,
links/anchors and Python syntax passed; all 38 existing tests passed in the pinned development
environment. No application runtime or new executable checker was added. React Doctor, Lighthouse,
load testing and assistive-technology checks were not run against a product.

Use these instructions on a real build next: verify a representative database-backed list, a denied
tenant operation, a production UI interaction and the chosen route budgets. Compare actual query
counts, output quality, latency, correction rounds and task completion before claiming a practical
gain. The rubric and results are author-assessed exploratory evidence, not independent
certification.
