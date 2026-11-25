# Security verification

Use Vibe Security's applicable references when installed and current; use OWASP ASVS as a source of
verification requirements proportionate to the product. Preserve the user's review/implementation
scope. This reference is an original bounded workflow, not a complete ASVS assessment or a
certification.

## Model the boundary before testing

For each changed sensitive path, identify actor, resource, operation, entry point, trusted identity
and server enforcement. Include background jobs, webhooks, server actions, signed URLs, exports and
cached responses where they can reach the same data. Distinguish intentionally public actions from
authenticated ones; adding login everywhere is not the goal.

| Boundary | Review and evidence |
| --- | --- |
| Authorization | Enforce object, action and tenant permissions at the server/data boundary. Test a valid owner operation plus anonymous, other-user/tenant and insufficient-role denial. Hidden buttons, middleware alone, unguessable IDs and TypeScript types do not enforce ownership. |
| Sessions | Use the framework's supported token/session verification, expiry and revocation model; validate relevant signature/issuer/audience claims. Choose cookie/CSRF/CORS controls for the actual auth model. Recheck permission changes and direct endpoint calls. |
| Data and rendering | Validate external input, allowlist writable fields, parameterize queries and constrain returned fields. Verify hostile text/Markdown cannot execute and errors reveal no sensitive internals. |
| Secrets and configuration | Keep privileged credentials out of browser bundles, repository history and captures/logs. Check public env prefixes and deployment separation. Distinguish intentionally public configuration from privileged secrets before calling a finding a leak. |
| Expensive or external work | Enforce server-side rate/concurrency/size/time/spend limits, including AI calls and uploads. Validate outbound destinations and redirects where URL fetches can reach internal resources. Log useful denials without exposing payloads. |
| Payments and callbacks | Resolve prices/entitlements from trusted server data. Verify webhook authenticity and idempotency, including duplicate/out-of-order events in a sandbox. A browser success redirect is not payment proof. |
| AI actions and retrieval | Keep retrieval permission-scoped and tool permissions outside model control. Treat retrieved content as untrusted; validate tool arguments/output and bound loops, tokens and cost. |
| Dependencies and delivery | Review vulnerable runtime dependencies, lockfiles, relevant advisories and reachable impact. Use least-privilege CI/deployment credentials. Test applicable headers and upload/storage policies without breaking the intended flow. |

Keep read-only inspection separate from active exploitation, load tests, secret rotation or external
scans. Use synthetic accounts and authorized isolated environments for denial/abuse tests; do not
copy live tokens into reports. If execution is unavailable, retain the result as unknown and give
the smallest reproducible acceptance check.

## Close a finding

Report location, reachable entry point, concrete attacker impact, severity, affected scope and
evidence confidence. Separate confirmed vulnerabilities from unverified risks and hardening advice.
In implementation mode, fix the owning boundary, add a meaningful negative regression case and
verify that the legitimate operation still works. A lint/security score or a generic dependency
warning is not a substitute for this evidence. Keep unresolved critical/high findings on the release
decision; do not defer them merely to meet a cosmetic score or deadline.
