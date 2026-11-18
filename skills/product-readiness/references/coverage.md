# Coverage and acceptance

Choose checks for the actual product and the commitments it is making. Reuse existing evidence. At release, revisit agreed checks and changed risks. For a narrow feature, inspect the affected categories.

| Category | Decisions to make early | Observable acceptance examples |
| --- | --- | --- |
| Useful outcome | Audience, painful task, distinctive result, first value, success measure; real versus simulated capabilities | A fresh user completes the core task and can explain its value. The produced artifact opens in its downstream consumer. Marketing and demo claims match shipped behavior. |
| Public discovery | Indexable routes, initial HTML, meaningful titles/descriptions, canonical origin, robots, sitemap, redirects, locales and factual schema | Fetch a public deep link without executing JS and find its answer and links. Canonical/sitemap URLs use the release origin. Private and preview routes are excluded as intended. Check a nonexistent route's HTTP status. |
| AEO and agent use | Clear first-party answers, source identity, useful docs; intended read-only or action clients | Answer representative product/setup questions using the current public pages. Inspect relevant agent requirements separately; a discovery file or score does not establish task success. |
| Share and identity | Page-specific Open Graph/card metadata, real preview image, fallback, favicon/app icons, brand and locale | Fetch the image URL without a session, inspect its MIME/status and crop, and view a share preview where supported. No localhost URLs, placeholder names or private data. |
| Navigation and routes | Direct entry, reload, back/forward, shareable filters, unknown/removed routes and auth return paths | Open nested routes directly and reload. Recover from a missing page with useful navigation and an honest status. Verify redirects do not loop or erase meaningful URL state. |
| Async states | Initial loading, refresh with existing data, first-use empty, no results, validation, pending, success, partial failure, timeout, cancellation and retry | Show a layout-matched skeleton only while waiting; it resolves on success and failure. Preserve input on retry, explain the next action and prevent duplicate submissions. A confirmed failure cannot retain success copy. |
| Account lifecycle | Sign-in/out, expiry, denied access, password/OTP recovery if offered, invitation expiry, role changes, deletion/export if promised | Deep-link through login; expire a session during an edit; deny another tenant's resource; verify sign-out clears sensitive state. Test promised lifecycle paths rather than adding unused authentication features. |
| Accessibility and input | Semantic controls, names, landmarks, labels, error association, focus order/return, keyboard, touch, contrast, zoom and reduced motion | Complete the journey by keyboard and on a narrow viewport. Inspect focus in menus/dialogs and scrolling containers; fixed border geometry and aligned chevrons survive long labels. Combine automated checks with manual interaction; record coverage limits. |
| Content and localization | Clear instructions, useful examples, units, timezones, date/number formats, long text, untrusted content, translations and asset rights | Try long and non-Latin labels, zero/large counts, DST boundaries where relevant, missing media and validation errors. Localized routes and language metadata agree. Use real approved content and a useful media poster/fallback. |
| Performance | Lighthouse route budgets, field Core Web Vitals, media/fonts, client JS, interaction and provider cost | Use repeatable production-build runs and operated interactions; retain individual results. Separate lab scores from p75 field data. Apply the quality-budget reference and keep missing evidence unknown. |
| React engineering | Relevant Vercel performance rules, React Doctor scope/version, state/effects, request races and server/client boundaries | Inspect waterfalls and bundles before render micro-optimizations. Review genuine diagnostics and measure the changed journey. Preserve the existing stack and request/tenant isolation. |
| Scaling and data access | Workload, N+1, projections, pagination, indexes/query plans, pool/fan-out limits and cache correctness | Check query/call growth on representative data, expected-load latency/errors and tenant-safe cache behavior. Parallel calls alone do not fix N+1. Keep capacity claims within measured scope. |
| Network and offline | Online-only recovery, fallback document, cached reading, draft persistence, offline writes, installability or standalone export | Run the promised scenario with the network unavailable. Show stale/pending status honestly. Reconnect without lost input, duplicate effects or cross-account cached content. Test worker upgrades only if a worker exists. |
| Data integrity | Ownership, validation, concurrency, idempotency, migrations, retry boundaries and retention | Repeat or interrupt a core write in a sandbox; verify one intended effect and visible recovery. Verify authorization on the server and valid old data after migration. Exercise backup/restore for durable data where loss matters. |
| Trust and privacy | Vibe Security/OWASP checks for actual boundaries, secrets, sessions, object permissions, input/output handling and abuse controls | Pair valid-operation checks with denied-user/tenant/role tests; inspect privileged-data exposure and costly-action limits. Keep privacy/legal requirements grounded in current guidance; a scanner or notice is not proof. |
| Operations and release | Required configuration, build/start commands, migrations, dependency health, logging, alerts, rollback, support owner and clean demo data | Build from documented inputs; validate required variable names without printing values. Smoke-test the deployed path, trace a failure with a request ID and confirm the recovery/rollback procedure. Reset synthetic demo state reproducibly. |
| Measurement and maintenance | Observable task outcome, useful interval for repeat use, error/latency/cost signals and revisit triggers | Observe task completion or recovery in the real journey. Verify applicable signals without secrets or unnecessary personal data. Confirm a useful failure signal reaches the responsible owner. |

## First value and return visits

When improving activation, find where people abandon, repeat input or fail to reach the first useful result. Use available analytics, support reports or a walkthrough. Choose one change that reduces that friction and check successful completion alongside a guardrail such as errors, bad submissions or recovery effort. Label expected gains as hypotheses until measured.

For repeat use, start from a recurring user need. Saved work, history or reusable settings can make the next visit more useful. A reminder earns its place when it helps with a real event or deadline and people can control it. Keep a clear stopping point. For a monthly reconciliation tool, check whether eligible teams finish their next close with fewer corrections. Daily visits and repeated reminder clicks offer little evidence of that outcome.

## Conditional capabilities

Select only capabilities the product offers. Keep their requirements alongside the core journey.

- **AI output:** representative inputs and explicit quality criteria, grounded claims/citations where promised, latency/cost budgets, partial streams, provider failures, cancellation and fallback. Evaluate actual output, not an HTTP 200. Keep tool permissions and untrusted-content boundaries intact.
- **Payments:** sandbox checkout, declined and interrupted payment, duplicate/out-of-order webhook delivery, entitlement changes, cancellation/refund behavior and receipts. Verify backend state before success UI.
- **Uploads/media:** size/type limits, progress/cancel/retry, malformed files, inaccessible media, playback poster, expiration and object permissions. Inspect a real generated/exported artifact.
- **Email/notifications:** actual sandbox delivery, sender/domain configuration, expired action links, delivery errors and preferences/unsubscribe where applicable. Request device notification permission at a useful moment.
- **APIs/agent actions:** maintained contracts, scoped auth, rate limits, pagination, retry semantics and supported-client task completion. Expose only useful authorized operations.
- **Collaborative edits:** conflict policy, reconnect, permissions changed mid-session, stale views and concurrent updates.

## Starter defaults versus project choices

Reuse a small set of tested primitives and recipes. Metadata defaults must allow route overrides; OG generation must have an available fallback; error pages must work when the failing feature cannot mount. Skeletons use the component's actual geometry. Keep one focus-indicator owner, stable border widths, fixed icon geometry and non-shifting hit targets in shared controls.

Keep offline storage, installability, payments and agent interfaces conditional on the task. Reuse accepted compositions from the project's design system and verify behavior and contrast when adapting them.
