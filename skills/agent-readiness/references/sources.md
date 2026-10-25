# Sources and verification record

Last verified **2026-10-25**. Refresh the normative map when AgentReady changes; recheck protocol maturity and framework APIs before implementing version-sensitive code. The requirement map is a maintained snapshot, not a live certification service.

## Baseline and evidence

- [Canonical AgentReady guide](https://www.agentready.org/), v2.0, October 2026. Opened the guide, normative tables, evidence blocks, and changelog.
- [Normative source at commit 273d2d7](https://github.com/agentready-org/standard/blob/273d2d7c991f30cd0785415023801b03766abc67/spec/spec.md). Verified all 24 active IDs and levels, conditional Act scope, retired READ-10, optional READ-09, and recommendations distinct from protocol mandates. The source declares MIT; these references use original summaries rather than reproducing its article or tables.
- [Dataset documentation](https://github.com/agentready-org/standard/blob/273d2d7c991f30cd0785415023801b03766abc67/data/README.md) and [data](https://github.com/agentready-org/standard/tree/273d2d7c991f30cd0785415023801b03766abc67/data). Inspected metadata and CSVs. The published subset has 1,033 traced runs across 25 sites and 190 controlled fetch probes. This is not the entire claimed research corpus. Data has a separate CC BY 4.0 license and is not redistributed here.
- [AX is the new AEO](https://ora.ai/blog/ax-is-the-new-aeo), opened 2026-10-25; page dated October 8, 2026. Observational comparisons support investigating first-party answer access; they do not establish that installing a particular protocol causes recommendation gains. The guide labels this September research, while the report page has an October publication date.
- [Ora research](https://ora.ai/research), opened 2026-10-25. Live scanner metrics are vendor measurements with changing denominators/weights, not normative conformance or results for the audited product. Payment-study observations use test environments and do not establish universal production reliability.
- [What agents actually reach](https://ora.ai/blog/what-agents-actually-reach) and [state of agent readiness](https://ora.ai/blog/state-of-agent-readiness-2026) were linked by the primary guide but could not be independently retrieved during verification. Use the accessible source/data for their quoted claims; do not claim these reports were independently reproduced.

The controlled probes demonstrate behavior for one documentation site and two fetch clients, not every model, browser, or product. Trace associations do not isolate the effect of each recommendation. This skill uses the evidence to prioritize public content and real task journeys; it does not repeat headline statistics as guarantees.

## Protocol sources

| Source | Verified use and status |
| --- | --- |
| [RFC 9309](https://www.rfc-editor.org/rfc/rfc9309) | Robots Exclusion Protocol. Crawl rules do not grant access. |
| [RFC 6585](https://www.rfc-editor.org/rfc/rfc6585) and [RFC 9110](https://www.rfc-editor.org/rfc/rfc9110) | 429 and HTTP semantics. AgentReady specifically calls for Retry-After, which is not a universal MUST of RFC 6585. |
| [RFC 8288](https://www.rfc-editor.org/rfc/rfc8288) and [RFC 8615](https://www.rfc-editor.org/rfc/rfc8615) | Web links and well-known URI framework. Neither creates a universal agent manifest. |
| [Sitemaps protocol](https://www.sitemaps.org/protocol.html) | Public URL discovery. |
| [llms.txt proposal](https://llmstxt.org/) | v2 proposal, modified August 10, 2026. Useful convention, not a formal standards-body standard. |
| [OpenAPI 3.2.1](https://spec.openapis.org/oas/v3.2.1.html) | Latest published version resolved during verification, dated September 10, 2026. Preserve tool-compatible API versions. |
| [MCP authorization 2026-07-28](https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization) | Latest URL resolved here. HTTP authorization scope, optional base-protocol auth, protected-resource discovery, client/issuer validation. |
| [MCP transports 2026-07-28](https://modelcontextprotocol.io/specification/2026-07-28/basic/transports) | Distinguishes stdio and Streamable HTTP. Verify version/SDK compatibility before implementing. |
| [RFC 8414](https://www.rfc-editor.org/rfc/rfc8414), [RFC 9728](https://www.rfc-editor.org/rfc/rfc9728) | Authorization-server versus protected-resource metadata. |
| [RFC 7636](https://www.rfc-editor.org/rfc/rfc7636), [RFC 8707](https://www.rfc-editor.org/rfc/rfc8707), [RFC 9700](https://www.rfc-editor.org/rfc/rfc9700.html) | PKCE, resource indicators, OAuth security BCP. OAuth 2.1 referenced by MCP remains a draft. |
| [WebMCP draft](https://webmachinelearning.github.io/webmcp/) | Draft Community Group Report, October 20, 2026. Uses document.modelContext; explicitly not a W3C Standard or Standards Track specification. |
| [SEP-2127](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2127) | Server-card proposal. Treat the draft/path as moving and verify host support. |

JSON-LD, MCP Apps, NLWeb, AI Catalog schemas, and payment integrations are not implemented by this library. Before implementing one, consult its current primary specification through the AgentReady links. This avoids caching unverified adapters or unstable schemas here.

Framework behavior was cross-checked against [Next.js server/client components](https://nextjs.org/docs/app/getting-started/server-and-client-components) and [Nuxt rendering modes](https://nuxt.com/docs/4.x/guide/concepts/rendering). These are routing references; the target's installed version and deployed output remain the implementation authority.

## Skill format and Codex

- [Agent Skills specification](https://agentskills.io/specification): required name/description, directory naming, optional resources, progressive disclosure.
- [Official reference validator](https://github.com/agentskills/agentskills/tree/69ef37e9424c0a7ea9dd2293b559e43ec8176379/skills-ref): pinned in development requirements. Upstream calls it a demonstration library, so local checks complement it; neither proves model behavior.
- [Build skills](https://learn.chatgpt.com/docs/build-skills): verified user discovery at `~/.agents/skills`, repository `.agents/skills`, symlink support, `$` invocation and description-based selection. Local installed Codex was 0.163.0.
- [openai/skills](https://github.com/openai/skills): inspected; currently marked deprecated in favor of plugins. Existing examples remain useful but are not the installation authority.
- [openai/codex skills pointer](https://github.com/openai/codex/blob/main/docs/skills.md): inspected and followed to current official docs.

The built-in skill-creator initializer and quick validator were used during authoring. They are not copied or required at runtime. Codex UI metadata is optional for other compatible hosts. This library does not require a particular browser tool, plugin, or model.
