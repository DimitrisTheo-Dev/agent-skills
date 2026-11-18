# React engineering

Use this branch for React projects; other stacks keep their native practices. Inspect React/framework/compiler versions, package-manager scripts, data ownership and server/client boundaries before selecting rules. Use installed Vercel React Best Practices for relevant rules when accessible. Otherwise apply the priorities below and consult current primary documentation for version-dependent APIs.

## Prioritize useful work

1. Trace the actual slow journey. Remove accidental sequential waits between independent operations before tuning render details. Respect dependencies and bound concurrency where work scales with input.
2. Inspect route bundles and client boundaries. Keep server-only secrets/data access on the server; send only fields the client needs. Load expensive optional features on demand and reserve media dimensions. Avoid unnecessary hydration and blocking third-party work.
3. Review state/effects and request races: derive values rather than synchronize copies, keep user-event logic in handlers, clean up subscriptions, and prevent stale responses overwriting newer results. Use stable keys and truthful pending/error states.
4. Profile meaningful interactions before adding memoization or virtualization. Preserve keyboard, focus and scroll behavior when optimizing long collections. Account for compiler support and actual dependency stability.
5. Preserve the existing supported data/cache library. A recommendation mentioning SWR, a particular package or a styling system does not mandate replacing working equivalents.

Shared server module state is process-wide. Keep mutable user/request data scoped to the request; deliberately shared caches need complete tenant/user/permission keys, freshness and eviction policies. A fast cache that leaks another user's data is a blocker.

## React Doctor as a diagnostic

Prefer a repository-pinned script/version. Check its version and help before running; CLI flags and scan behavior change. Record config, scope, explicit comparison base, revision, rule IDs and affected files. Distinguish introduced findings from existing debt and from a full-project result. Include new files when they belong to the change. A partial or timed-out scan remains partial.

Use the installed version's local diagnostic options where available. The reviewed CLI documents `--no-score` (also accepts `--no-telemetry`) and `--no-supply-chain`; verify these before use when external reporting/dependency services are not authorized. Network-dependent scoring, share links, remote scans, autofix agents and CI/skill installation are separate capabilities, not implicit steps in a read-only review. Missing tooling means record the gap and continue code/runtime review; do not fetch an unpinned executable just to mark a box complete.

For an authorized tooling setup, pin the reviewed dependency and CI action, use the repository's package manager and lockfile, document the check, and start with a measured baseline. Gate genuine new high-impact findings and agreed budgets. Review false positives with an explanation and narrowly scoped configuration. Preserve useful diagnostics; hiding warnings or disabling rules to raise the score does not fix behavior.

React Doctor checks support review; a clean scan does not establish runtime performance, permission correctness or accessibility. Fix one coherent issue, run affected behavior checks, and inspect the relevant production-build interaction. Keep tool findings and measured user outcomes separate in the readiness record.
