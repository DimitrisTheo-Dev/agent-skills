# Offline is a product contract

Resolve what the user needs before choosing a service worker. If "offline HTML" is ambiguous, record the interpretation and ask only when it changes the deliverable; continue independent work. These capabilities are distinct and can be combined.

| Capability | What it promises | Acceptance |
| --- | --- | --- |
| Initial HTML / progressive enhancement | Public information and real links are available before client JS executes; network access may still be required | Fetch the page and disable JS. The intended public answer is readable. This alone does not establish offline support. |
| Standalone offline HTML/export | A saved document can be opened without its original server | Package/embed permitted assets; remove hidden CDN/API dependencies; open the exported file in the target browser with network disabled. Check file-origin restrictions and links. Label unavailable server actions. |
| Offline fallback document | After the app's supported installation/visit, a failed navigation shows useful recovery | Precache a small offline document and its assets if choosing a worker. Navigate offline, verify retry and recovery. A file named offline.html alone proves nothing. |
| Cached reading / drafts | Selected previously fetched content or local drafts survive lost connectivity | Show last-updated/stale/pending indicators; reload offline and preserve promised data. Test quota failure and storage eviction behavior. |
| Offline task completion | Users can create/edit offline and synchronize later | Specify durable queue, idempotency, ordering, conflict resolution, cancellation and user-visible failures. Reconnect under realistic duplicates/conflicts and verify one intended effect. |
| PWA installability | Supported browsers can install and launch the app in its configured presentation | Verify current target-browser criteria, manifest identity/scope/start URL, icons and launch behavior. Installability and offline capability require separate evidence. |

## Minimum network behavior

Even an online-only app should resolve loading into an actionable error, retain appropriate unsaved input and retry safely. Prefer a request's observed failure over treating navigator.onLine as proof that the backend is reachable. Distinguish disconnected, server-down and expired-session states where the recovery differs.

## If caching or a worker is chosen

Specify routes/assets eligible for caching, ownership, freshness and limits. Keep authenticated responses and tenant data out of shared caches. If private offline data is intentionally supported, isolate it per account, minimize it and define logout/account-switch cleanup. Cache headers alone are not a complete policy for custom service-worker caches.

Plan cache versioning, old-cache cleanup and schema migrations. Test update and rollback with an existing tab and unsaved work; do not force a refresh that loses edits. Bound storage and handle quota errors, eviction and unavailable persistent storage. Explain which data cannot be recovered after eviction.

Test cold first visit without a network separately from a warmed/controlled visit. A service worker cannot supply content it has never installed or cached. Test direct navigation, reload, reconnect, account switching and the actual promised task. Background sync support varies; keep a foreground retry path and verify supported browsers rather than assuming background execution.

Use a sandbox for queued writes. An offline toast is not evidence of durable persistence, and a local save is not confirmation of server acceptance. Show local, syncing, confirmed and conflict/failure states distinctly.
