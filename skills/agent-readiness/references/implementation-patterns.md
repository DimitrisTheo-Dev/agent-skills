# Implementation patterns

Read only the sections relevant to the target. These are engineering recommendations, not additional AgentReady MUSTs. Verify framework APIs against the installed version's official docs before editing.

## Public HTML and routes

**Next.js and React.** In App Router inspect page/layout and client boundaries, dynamic data, route handlers, metadata routes, locale routing, and the deployment adapter. A `use client` declaration does not prove missing SSR: client components can still appear in initial server output. Verify a production response. Keep public explanatory content server-rendered or statically generated while retaining client interaction. In Pages Router use the project's existing static/server rendering strategy. A client effect that fetches the entire public answer is a likely READ-01 failure. Verify deep links and nonexistent paths at the actual host; a not-found UI alone does not prove a 404, especially with streaming or an SPA fallback.

**Vue.** Distinguish plain Vue/Vite SPA output from Nuxt server rendering, route rules, or static generation. Prefer the existing Nuxt rendering/generation path when available. A client-only section should not contain the only public answer. Inspect exported route coverage and host rewrites. Do not migrate a whole application to a new framework solely for a few public docs pages; static companion content can solve a scoped problem.

**Static sites.** Existing Astro, HTML, or static generation often already solves initial rendering. Verify the output and hosting status behavior. Add normal links, sitemap entries, and concise canonical content as needed. Avoid adding an action server to an informational site.

**Node, serverless, and edge.** Match the runtime's supported APIs and deployment path. Metadata endpoints can usually be static files or small existing handlers. Inspect route precedence, middleware redirects, content types, preview protection, caching, and origin configuration. Avoid deriving public canonical URLs from arbitrary Host headers. Public metadata may be cached; personalized responses and tokens must not enter shared caches. A response generated correctly locally can still be rewritten or blocked at the CDN.

For all frameworks test a production build with JavaScript disabled or a plain HTTP request. Assert specific answer text and links rather than snapshots of all markup. Check one locale/base-path deep link and a nonexistent route. Keep authenticated dashboards out of public prerenders, sitemaps, llms.txt, and JSON-LD.

## Documentation and discovery

Keep product setup, limitations, authentication, errors, and pricing in current first-party pages. Link from the homepage to these pages and from them to machine-readable artifacts. Use semantic pre/code blocks for HTML examples and language-tagged fences for Markdown. Examples should execute against a sandbox or use clearly synthetic identifiers.

Generate sitemaps from existing public routing/content data, including correct canonical hosts and locale alternates where relevant. Preserve training-crawler choices when editing robots groups. Do not list secret paths to protect them.

Make llms.txt a short annotated index of authoritative pages, not a second product manual or a dump of internal routes. Add a visible resource/footer link. READ-06 concerns discoverability of artifacts that exist, not creating arbitrary `/.well-known` paths. Follow registered protocol discovery rules when implementing OAuth metadata. AI Catalog and server cards require current target-host support and a verified format before implementation.

Use JSON-LD types that describe real public facts. Keep pricing/limits visible in HTML too. Escape serialized data using the framework's safe embedding pattern; never inject untrusted markup into a script tag. Markdown mirrors are optional and should share content with HTML, advertise alternate links, and preserve authorization and freshness.

## REST and OpenAPI

Improve the API's existing contract generation path before writing a second schema by hand. Retain its compatible OpenAPI version; the latest official document verified for this skill was 3.2.1, but generator/client support may require 3.1 or 3.0. A wholesale version or route migration is not a prerequisite for useful integration.

Describe representative operations with stable unique operation IDs, meaningful descriptions, required parameters and bodies, typed successes and errors, authentication/security schemes, pagination, examples, and rate-limit behavior. OpenAPI does not require every API to use `/v1`; preserve an existing version strategy. A security scheme describes auth, it does not enforce it. Do not publish privileged internal operations with a generated public schema.

Verify schema parsing and agreement with runtime responses, including unauthorized, invalid input, not found, conflict, and throttled outcomes where applicable. Define timeout/retry guidance, idempotency for retryable writes, and machine-readable error identifiers. Preserve the API's established error format; RFC 9457 is an option, not a mandatory rewrite. Bound retries and document side effects. Test contracts against a local/sandbox service, including denial across tenant boundaries.

## Authentication and MCP

Choose auth for the client and task. Scoped revocable keys may work for an account's automation. User-delegated operations need a supported delegated flow with consent and a least-privilege grant; an agent may ask a human to complete consent. Do not automate password entry or export a browser session as a substitute.

For OAuth, distinguish authorization-server metadata, RFC 8414, from protected-resource metadata, RFC 9728. Use the correct resource/issuer and their path-aware well-known rules; never assume the authorization server lives on the product origin. Use authorization code with PKCE as required by the relevant client/protocol, exact redirect validation, appropriate resource/audience binding, expiry, revocation, and issuer/token validation. Apply RFC 9700 security guidance. The OAuth 2.1 reference used by MCP was still a draft when verified; do not call it a final RFC.

For remote HTTP MCP follow the selected MCP version's authorization and transport specification. The verified latest authorization page resolved to **2026-07-28**; older SDKs may implement a different version. Check the negotiated version and actual client/SDK support rather than copying a remembered handshake. Authorization is optional in the base MCP protocol; protected product operations still require appropriate access control. Stdio credentials are a separate deployment model. Never forward arbitrary client bearer tokens to downstream APIs.

AgentReady recommends `/mcp`, Streamable HTTP, public documentation tools, and Registry discovery. MCP itself does not mandate that endpoint name or public access to every documentation resource. Keep tool descriptions precise, validate inputs server-side, authorize every operation, bound result sizes, and expose only intended capabilities. An empty tools list cannot satisfy an intended action. Registry server.json, a runtime server card, and A2A metadata are distinct artifacts.

Test real discovery/authentication and one authorized operation plus denial, invalid input, expiry, and retry behavior in a sandbox when implementation scope includes them. Audit mode only inspects existing evidence. Do not add MCP just to mirror an already adequate CLI without a client need; report ACT-03 as a justified SHOULD deferral where appropriate.

## Browser tools and optional mechanisms

WebMCP uses `document.modelContext` in the verified October 2026 draft, not a remembered older API. Feature-detect the current API and preserve ordinary UI affordances. Use the signed-in user's existing authorization and server-side checks; browser tool registration is not a permission grant. Define tool cancellation, validation, and confirmation for consequential operations. Test supported and unsupported browser paths and unmount/navigation cleanup using the target's supported API version.

MCP Apps, NLWeb, AI Catalog, server cards, and agent payments should solve an identified integration need. Read their current primary specification and confirm client support before adding code. For payments use sandbox mode, explicit amount/currency/merchant context, user authorization, and replay/idempotency protection. This skill does not supply a universal payment-protocol adapter. Keep these integrations out of a simple content site's critical path.
