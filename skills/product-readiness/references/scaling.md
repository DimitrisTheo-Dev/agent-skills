# Scaling and data access

Define an observed or assumed workload before optimizing: record counts, payload sizes, concurrency, traffic burst, external quotas, latency/error objectives and cost limits. Label assumptions. Use the simplest architecture that meets this envelope and name the measured trigger for a larger change.

## Trace the full request

Measure representative route/API latency, query count, database time, response bytes, memory and external calls. Inspect a normal and a larger dataset; distinguish cold/warm caches. Capture p95/p99 where the sample supports them, with workload, duration and error/timeout counts. A few successful requests do not establish production capacity.

| Risk | Preferred response | Verification |
| --- | --- | --- |
| N+1 queries or per-item API calls | Use joins, batch loading or request-scoped loaders as appropriate; preserve authorization filters and bounded payloads | Compare query/call counts as collection size grows. For a bounded page, avoid one extra round trip per row; record justified exceptions. |
| Unbounded list or nested expansion | Bound page size, filters and nested fan-out; use a stable ordering and suitable pagination | Test maximum accepted size, empty/end pages and concurrent inserts; inspect result bytes and memory. |
| Expensive database plan | Inspect selectivity, joins, sorting and indexes against actual predicates and representative cardinality | Use EXPLAIN; use ANALYZE only on safe authorized workloads because it executes the statement. Inspect rows/loops/buffers, not only a tiny-fixture duration. |
| Unbounded parallelism or exhausted pool | Bound workers/fan-out, tune connection budgets for deployment concurrency, apply timeouts and cancellation | Exercise the expected burst in an authorized test environment and inspect pool wait, errors, memory and downstream throttling. |
| Cache leakage or staleness | Specify key scope, authorization, TTL/invalidation, eviction and stampede behavior | Test two tenants/users, a permission change, a write followed by a read, and a cache miss burst. |
| Long work and retries | Use a durable job only when request budgets require it; define state, deduplication, retry/backoff, failure ownership and recovery | Interrupt and repeat work; verify one intended effect and an actionable failure state. |
| Large renders/transfers | Bound projections, media size and client work; stream or virtualize when measured need warrants it | Measure real content, selection/focus behavior, transfer cost and interaction latency after the change. |

`Promise.all` can remove waiting between independent calls but does not remove N+1 database work. For input-sized work it can also exhaust connections or provider quotas. Count and batch calls first, then choose bounded concurrency. Keep request deduplication distinct from cross-request caching.

Test invariants under contention where correctness depends on them: transactions, uniqueness, idempotency and version conflicts. A fast happy path that oversells inventory or duplicates an effect fails. Retain schema compatibility and a tested recovery path for relevant migrations.

Use existing observability for request IDs, query counts, slow queries, provider latency, queue lag and spend. Make the next capacity action conditional on a measurable threshold. Avoid adding microservices, queues, caches or load-test infrastructure to a small static feature without a demonstrated need. Production load testing requires authorization; unavailable capacity evidence stays unknown.
