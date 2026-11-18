# Product readiness evaluation, 2026-11-16

## Method

One paired planning run used the same [six synthetic requests](requests.md), assessed against the separate [rubric](rubric.md). Two fresh Codex Work Mode threads received only their assigned snapshot and request file. Both used inherited model/reasoning settings without overrides; the exact provider identifier was not exposed to the assessor. Both could read local files and were instructed to avoid other snapshots, the rubric, prior results, network access, target edits and further delegation. Only after the answers were complete were private evidence-file writes authorized.

- Baseline collection: commit `c869ba977f0e5f22097407499f00ef567967a2b4`, 84 skill files, digest `bc7f8a692d71dd579735b90ffb8c9335ee490e5add152009f3808620d2294f05`.
- Candidate collection: the same collection plus product-readiness and the Studio/agent routing changes, 91 skill files, digest `b4ff996f8d8233bbaa4aca44d30fc9bbeec522e27dac9be1997465bad63075a8`.
- Request SHA-256: `a8a7d479f314918ed4502c29e56b95b65c6f803aae1e98317be9436ade6aab6d`.

Digests hash newline-joined, sorted `relative-path + NUL + SHA-256(file bytes)` records. Private manifests, snapshots and raw responses are retained under ignored `.eval-results/product-readiness/`. The reviewer wrote this summary after receiving both answers. No human correction was sent before the responses were complete; time to a verified application result is not applicable because the exercises ran no application.

## Observed decisions

| Case | Baseline | Candidate | Concrete evidence |
| --- | --- | --- | --- |
| A: public launch | Pass | Pass | Both required real public share assets, locale/HTML/404 checks and bounded form recovery; both deferred unused PWA/agent protocols. Candidate made applicability, owner, stage, candidate and status explicit in one record. |
| B: private workspace audit | Pass | Pass | Both rejected removing authentication and publishing private reports/customer names. Both limited the homepage score and retained tenant/private-flow unknowns with no external submission. |
| C: first-open offline HTML | Pass | Pass | Both chose a self-contained file or complete relative bundle, removed CDN dependencies and required a fresh offline file opening; neither confused SSR or a cached fallback with USB portability. |
| D: offline edits | Partial | Pass | Both required durable storage, idempotency, conflict handling, account isolation and safe updates. Baseline explicitly tested quota/storage failures but did not address eviction behavior, a frozen rubric item. Candidate explicitly included quota/eviction, retention and cold-versus-warmed offline scope. This is a narrow planning difference, not a demonstrated runtime improvement. |
| E: chevron correction | Pass | Pass | Both selected geometry and a scoped UI check, preserved brand/dependencies and yesterday's unrelated evidence, and rejected a full readiness audit for the isolated fix. |
| F: demo evidence | Pass | Pass | Both rejected score/build-based readiness, prioritized deployed output/persistence and timeout recovery, retained stale evidence as unverified and deferred MCP/full offline expansion. Neither made target changes. |

Selection was inspected separately from answer quality: both listed snapshot procedures/references actually read. The candidate selected product-readiness for A-D and F, and kept E on the focused Studio/geometry/UI gate path. The baseline already covered nearly all decisions using existing procedures and general engineering knowledge. The candidate makes the cross-cutting baseline reachable from one workflow and records a small coverage difference; this single pair does not establish reliable superiority.

## Mechanical validation and limits

The new skill passed the bundled quick validator. The repository checker passed metadata, contained resources, local links/anchors and Python syntax, plus all 38 existing tests with the existing pinned development environment. No application runtime, reusable component implementation or new executable checker was added.

These are one-attempt planning scenarios with a self-authored rubric, assessed by the author. They do not measure visual quality, real browser behavior, search indexing, external agent success, offline durability or delivery speed. No external scanner was run. The next meaningful validation is using the starter on a second actual product and observing time to useful deployed output, correction rounds and a fresh-session demo.
