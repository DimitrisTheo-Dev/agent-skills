# Future skill backlog

Assessed **2026-10-25**. These are opportunities, not additional implemented skills. Scores judge the workflow opportunity, not the quality or security of the inspected projects. Proposed scripts and checks are hypotheses until evaluated.

## Coverage and publication boundary

The authorized workspace started in a home directory, not a library checkout. The new library was created separately. Local repository origins were inventoried; 141 personal GitHub repositories were enumerated through the authenticated account. Source-level inspection prioritized the personal projects below rather than treating repository names as evidence. No other project was edited or executed.

Private personal projects are named only as evidence of recurring categories of work. The observations below are original high-level summaries. No source snippets, private records, deployment addresses, credentials, or internal documentation are copied here. Local paths identify evidence for the owner; readers without those checkouts cannot independently verify private evidence. Public candidates include revision-pinned source links.

| Project | Inspection and snapshot |
| --- | --- |
| JobNRoll | Expo manifest; session storage, pending app-link and push-registration tests; payment handler/tests; disposable database moderation tests; recent Git history. Local HEAD `68eb0f9`. Some inspected tests are untracked working-tree additions, so the HEAD does not attest to their contents. |
| Cordia | Expo manifest; OAuth launch/callback modules, secure storage, shared auth helper, encryption tests, auth history. Local HEAD `dea5249`. |
| RemoteJobs | Next.js manifest/README; Stripe webhook handler, migration files, public-view access changes, migration workflow and history. Local HEAD `b2b335b`; the inspected privacy-lockdown migration is an untracked working-tree addition. Operational details are omitted. |
| RSVP Events | Manifest, timezone helpers/tests, schema constraints and migrations, authenticated RSVP route, history. Local HEAD `e8d9745`; timezone-fix commit `8803bf3`. |
| Booking Radevou | Manifest, booking/availability schema and RLS policies, component test inventory, setup docs and history. Local HEAD `2ccfe06`. |
| Portfolio | Manifest, agent instructions, service worker and PWA verification script, routing/cache history. Local HEAD `8515c71`; service-worker changes in `2e19cc5` and `48b2257`. |
| CP Prints | Manifest, agent instructions, README, content/route/browser tests, content/slugs files, provenance record, history. Local HEAD `a5cfc2c`. |
| Greece Wedding Planner | Manifest, README, storage adapter, static editorial/interactive split, history. Local HEAD `d5c73a7`. |
| Karadakis website | Astro manifest, README, layout/gallery structure, asset provenance and history. Local HEAD `95ced40`. |
| Ship | Manifest, README, process-orphan and repository-admission tests, controller/worktree test inventory and history. Local HEAD `5de08bd`. Local-only repository, not a verified public release. |
| Climate Explorer | README, backend API tests, chart-preparation tests, frontend/backend manifests and history. Local HEAD `47f6c77`. |
| GEMI Intelligence | README, asynchronous pipeline, manifest and entity-selection/failure history. Local HEAD `16263a3`; selection fix `65ea332`. |
| Qasper Booking, public | Main plugin, smoke tests, settings/injection structure, PHP compatibility CI, releases/history. [Snapshot c1c462f](https://github.com/DimitrisTheo-Dev/qasper-booking/tree/c1c462f6cd2798c76db6a24f870562e88ef6ab54). |
| Qasper WooCommerce, public, remote-only | Tree, cart REST controller, browser message bridge, compatibility workflow, current commit. [Snapshot a14fe41](https://github.com/DimitrisTheo-Dev/qasper-woocommerce/tree/a14fe41cf368c4148250283e1705a7e362cb4860). |
| ClawShield Lite, public, remote-only | Architecture, policy loader, rule engine, existing OpenClaw skill, manifest/tree and history. [Snapshot 19522cb](https://github.com/DimitrisTheo-Dev/clawshield_lite/tree/19522cbf19bf4f6f8a3005c380166516af74ad08). |
| SuiShield, public, remote-only | README, receipt schema/canonicalization code and determinism test, CI/tree, storage/retry history. [Snapshot f671ba3](https://github.com/DimitrisTheo-Dev/SuiShield/tree/f671ba37f7c56a36dff3cfc396a437a6178cbe93). |

HouseDating and the marketing-site checkout received a lighter manifest/routing inventory and do not carry candidate scores by themselves. Employer/third-party origins, client notes, credentials, interview material, generated build output, and unrelated user files were excluded from reusable source evidence. Most older GitHub repositories were inventoried but not inspected at source level; claims of repeated expertise do not extend to them. This is a prioritized sample, not an exhaustive audit of 141 codebases or proof that every implementation is production-correct. Existing projects' tests were inspected, not run.

## Ranking

Each dimension scores 1 to 5: **R** reuse across projects, **E** observed engineering evidence, **A** improvement to agent accuracy, **K** specialized knowledge, **T** testability/maintenance, **D** distinctness from existing skills. Higher D means less overlap. Totals are a comparison aid, not a validated product metric. Complexity includes original synthetic fixtures, sources, and behavioral evaluations: small roughly 1-2 engineering days, medium 3-5 days, large 1-2 weeks.

| Priority | Candidate | R | E | A | K | T | D | Total | Complexity |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| P1 | supabase-access-regression | 5 | 5 | 5 | 5 | 4 | 4 | 28 | Medium |
| P1 | expo-auth-lifecycle | 5 | 5 | 5 | 5 | 3 | 4 | 27 | Large |
| P1 | webhook-state-integrity | 5 | 5 | 5 | 4 | 4 | 3 | 26 | Medium |
| P2 | embedded-widget-delivery | 4 | 5 | 4 | 4 | 4 | 4 | 25 | Medium |
| P2 | reproducible-evidence-pipelines | 4 | 5 | 4 | 5 | 4 | 3 | 25 | Medium |
| P2 | timezone-safe-booking | 4 | 4 | 5 | 4 | 4 | 4 | 25 | Medium |
| P3 | next-offline-boundaries | 3 | 4 | 4 | 5 | 4 | 4 | 24 | Small |
| P3 | multilingual-content-release | 4 | 4 | 4 | 3 | 4 | 3 | 22 | Medium |

### 1. supabase-access-regression

**Problem and triggers.** Prevent a schema, policy, view, or privileged function change from exposing another user's data or breaking legitimate access. Invoke for multi-tenant RLS changes, public-view refactors, auth role changes, or database migrations that alter permissions.

**Observed evidence.** JobNRoll has synthetic moderation/role tests in `supabase/tests/profile_moderation.sql` and separate SQL, API, and edge-runtime test commands. RemoteJobs has staged public-view and raw-table access changes under `supabase/migrations/`. Booking Radevou's initial schema and Cordia's auth helpers show the same need to distinguish identity parsing, verified identity, and operation authorization. The observations establish repeated authorization complexity; they do not claim these projects have undisclosed vulnerabilities.

**Distinct content.** A role/tenant/operation matrix covering anonymous, owner, unrelated authenticated user, suspended user, and service role; view grants and function execution/search-path checks; synthetic JWT/role fixtures; a disposable local database test runner; explicit separation of direct SQL and application-request evidence. Keep migration rollout and existing data compatibility in the same workflow.

**Validation.** Seed two tenants and prove allowed operations succeed while cross-tenant reads/writes, public-table bypasses, and unauthorized function execution fail. Include a deliberately permissive policy that the test detects. Run on disposable databases only.

**Overlap.** Installed Supabase and Postgres best-practice skills cover the platform and query guidance; security-review skills cover broad auditing. This skill earns its place through executable access-regression matrices and end-to-end role evidence, not a generic Supabase tutorial. Confirm this gap again before authoring.

### 2. expo-auth-lifecycle

**Problem and triggers.** Make login, callbacks, secure persistence, cold starts, pending destinations, logout, and account switching behave as one lifecycle. Invoke for Expo OAuth/deep-link bugs, disappearing sessions, or notification links routed before auth hydration.

**Observed evidence.** JobNRoll's `src/lib/sessionStorage.ts`, `scripts/test-session-storage.ts`, `scripts/test-pending-app-links.ts`, and push-registration tests cover persistence and asynchronous state. Cordia's `src/auth/oauth.ts`, `src/auth/redirect.ts`, and secure storage cover development/build redirect differences and callback handling; Git history includes auth-specific fixes. This is repeated mobile work, not evidence that either app's current flow is fully verified on every device.

**Distinct content.** A state-transition map for boot, callback, refresh, sign-out, account switch, and link routing; platform/version-specific redirect references; secure-storage byte limits and concurrent-operation invariants; stale callback/push-registration cancellation; a fixture harness for delayed asynchronous operations.

**Validation.** Test cold/warm callbacks, cancelled login, duplicate links, slow old hydration versus a newer intent, expired sessions, storage failures, and sign-out during token registration. Add real iOS/Android device coverage before claiming native reliability.

**Overlap.** Generic auth and hooks skills do not encode this lifecycle. Existing iOS QA tools help inspect devices but do not replace cross-platform Expo auth guidance. Keep deep links and push identity cleanup here instead of splitting them into micro-skills.

### 3. webhook-state-integrity

**Problem and triggers.** Prevent duplicate, delayed, or retried external events from corrupting entitlements or purchase state. Invoke for billing callbacks, subscription state changes, signed integrations, or migrations of webhook handlers.

**Observed evidence.** JobNRoll has a normalized RevenueCat handler and deterministic replay/failure tests. RemoteJobs verifies Stripe signatures over the raw body before processing checkout events. These are two independent billing integrations with the same authenticity, durable state, and retry concerns.

**Distinct content.** Separate transport acknowledgment from durable business acceptance; event identity versus transaction identity; atomic idempotency records and domain updates; out-of-order events; replay windows; reconciliation and safe failure logging. References should cover each provider actually used, without bundling private provider-specific business rules.

**Validation.** Replay the same event, send concurrent duplicates and reversed event order, fail storage after validation, reject invalid signatures, and recover a pending event. Prove the business effect happens once with durable evidence.

**Overlap.** Backend/security skills cover validation and auth in general. Focus here on durable event semantics. Do not expand into a generic payments or commerce skill, and do not create a separate skill per provider.

### 4. embedded-widget-delivery

**Problem and triggers.** Deliver an embedded assistant/widget across CMS pages without duplicate boot, broken settings, unsafe cross-origin messages, or release-package drift. Invoke for WordPress/WooCommerce embedding, iframe bridges, cache-related activation failures, or plugin releases.

**Observed evidence.** Public Qasper Booking has script injection/settings, PHP-version CI, smoke tests, and a release procedure involving synchronized metadata. Public Qasper WooCommerce adds an iframe-message bridge that checks origin/source and a REST controller with nonce/intent validation. Both are inspectable source evidence; no code from these differently licensed projects will be copied into the skill.

**Distinct content.** An embed lifecycle and trust-boundary checklist; shortcode/sitewide deduplication; settings validation and cache propagation; source/origin/payload validation; release archive contents and version consistency; dependency-free test doubles for CMS integration boundaries.

**Validation.** Test double embedding, inactive/incomplete settings, cache activation, spoofed messages, wrong frame source, invalid/expired intent, and installed ZIP contents across supported PHP versions. Use synthetic storefronts and no live purchases.

**Overlap.** General frontend/security and platform plugins cover pieces. This combines host-page lifecycle with distribution correctness, which a generic widget prompt misses. Keep Shopify as a possible later adapter only after independent, publishable evidence and current official specifications are available.

### 5. reproducible-evidence-pipelines

**Problem and triggers.** Make scanner/research output traceable to a specific input, policy, version, and execution without overstating what a verdict proves. Invoke for deterministic scanners, evidence reports, signed receipts, external-data enrichment, or audit artifacts.

**Observed evidence.** SuiShield's public receipt module and test verify stable hashes despite reordered findings. ClawShield Lite separates normalization, policy loading, scoring, receipt creation, and optional publication. Its existing `clawshield-preflight` skill already routes scanner use. GEMI Intelligence's pipeline and selection-fix history add a different risk: reporting on the wrong entity or confusing missing evidence with fallback analysis.

**Distinct content.** Input/policy/version provenance; canonicalization and volatile-field boundaries; stable evidence identifiers; untrusted-source isolation; explicit unavailable/fallback results; separation of local report generation from external publication. Hash consistency proves integrity of particular bytes, not completeness or security of the analysis.

**Validation.** Reorder findings, normalize encodings, modify one input byte, change the policy, simulate upstream timeouts, and use ambiguous/not-found entities. Assert stable receipts only when inputs are equivalent and truthful evidence gaps when they are not. Add false-negative/false-positive cases for deterministic rules.

**Overlap.** Do not duplicate the existing ClawShield invocation skill or broad research/security skills. The opportunity is reliable construction and testing of evidence pipelines across scanners and research products, not another prompt-injection filter wrapper or blockchain protocol skill.

### 6. timezone-safe-booking

**Problem and triggers.** Preserve scheduling meaning across input zones, UTC persistence, viewer display, calendar export, and booking constraints. Invoke for event-time migrations, DST errors, RSVP cutoffs, or availability calculations.

**Observed evidence.** RSVP Events has explicit timezone parsing/display tests and migrations that normalize event-time constraints, including a dedicated timezone-fix commit. Booking Radevou has availability and booking schema concepts. Only RSVP currently supplies the deeper observed timezone implementation; broader recurrence/DST expertise remains a hypothesis to validate.

**Distinct content.** Separate wall time, IANA zone, UTC instant, duration, and recurrence; policies for nonexistent/ambiguous DST times; consistency between UI parsing, database constraints, and calendar output; a controlled-TZ fixture matrix.

**Validation.** Test Athens and Los Angeles DST transitions, invalid zones, ambiguous/nonexistent local times, viewer-zone changes, overnight intervals, and export round trips. Fix product semantics before choosing library behavior.

**Overlap.** General database/UI skills rarely specify scheduling semantics. Keep related event and availability workflows together; do not create a date-formatting micro-skill.

### 7. next-offline-boundaries

**Problem and triggers.** Add limited offline support without caching personalized data, RSC responses, or stale application HTML. Invoke for Next.js service workers, offline fallback regressions, or locale-route changes affecting installed web apps.

**Observed evidence.** Portfolio's `public/sw.js` deliberately caches one offline document and its `scripts/check-pwa.mjs` checks navigation/locale behavior. Git history ties cache changes to language-route simplification. Greece Wedding Planner's browser persistence adapter is related evidence of local state, but is not a second service-worker implementation.

**Distinct content.** A navigation-only caching boundary, RSC/API exclusions, versioned cache cleanup, reconnect behavior, canonical launch paths, and production verification using a real browser. Prefer a limited fallback when broad offline app support is unnecessary.

**Validation.** Request document, RSC, API, and asset resources separately; test offline navigation, reconnect, cache upgrade, prior locale cookies, and logout/account isolation. A service-worker unit simulation alone cannot establish browser installation behavior.

**Overlap.** Existing rendering/performance skills cover adjacent architecture. This is a narrow operational cache-boundary skill. Lower reuse and one deep project example keep it below the P1 candidates.

### 8. multilingual-content-release

**Problem and triggers.** Publish a content site with stable locale routes, correct canonical URLs, accessible navigation, and approved asset provenance. Invoke for bilingual launch, route/slug changes, or production content verification.

**Observed evidence.** CP Prints combines bilingual slug data with content, route, and browser tests plus an asset provenance record. Karadakis website documents local assets and usable gallery links without JavaScript. Greece Wedding Planner and Portfolio separate static editorial content from client interaction, with deployment-origin and route considerations.

**Distinct content.** A source-of-truth map for content, locale slug pairs, redirects, canonical/sitemap coherence, approval states, and asset permissions. An optional deterministic route/content inventory can catch mismatched alternates and missing approved assets.

**Validation.** Build each locale, visit equivalent deep links, check legacy redirects/canonicals and sitemap hosts, disable JavaScript for navigation, and verify keyboard/focus behavior and content approval failures.

**Overlap.** `agent-readiness`, accessibility, layout, and design-review skills already cover parts. Keep this focused on content-release consistency and provenance, or extend an existing release workflow if the distinct value is too small.

## Strongest next skill

Build **supabase-access-regression** next. It has repeated, inspectable role/permission work across several personal projects and a clear deterministic oracle: an unauthorized operation must fail while the owner's equivalent succeeds. A small synthetic two-tenant database can demonstrate both correct behavior and seeded regressions without native devices, live billing, or proprietary business rules. Its scope must stay on executable authorization evidence so it adds to the existing Supabase guidance.

`expo-auth-lifecycle` and `webhook-state-integrity` follow. Both have strong practical evidence, but native-device coverage and provider event semantics make reliable evaluation more expensive.

Ship's local agent-run orchestration is technically substantial, including worktree admission and orphaned-process tests. It is deferred rather than added as a ninth skill because existing gstack shipping, orchestration, and worktree skills overlap heavily, and the strongest evidence is one local-only system. Generic frontend architecture, generic performance advice, protocol-only wrappers, and separate SDK-per-language skills were also rejected for insufficient distinct value.
