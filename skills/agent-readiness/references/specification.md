# AgentReady requirement map

Verified **2026-10-25** against [the canonical v2.0 guide](https://www.agentready.org/) and [the versioned source](https://github.com/agentready-org/standard/blob/273d2d7c991f30cd0785415023801b03766abc67/spec/spec.md). This is an original condensed interpretation, not a new specification. The source declares MIT. Protocol requirements come from their own specifications; AgentReady's adoption recommendations do not change those protocols.

The level column preserves the source's normative strength. Scope and assessment guidance are this skill's interpretation. SHOULD permits a reasoned exception; MAY is optional. Severity depends on the blocked user task, not just the level. Treat inaccessible downstream checks as **unknown**, with the blocking prerequisite, rather than pretending they pass or are inapplicable.

## Find

| ID | Level | Requirement summary | Scope and assessment |
| --- | --- | --- | --- |
| AR-FIND-01 | MUST | Public content must be reachable through crawl and network policy. | Check robots groups and WAF separately. Training opt-outs are allowed by the source's notes. Keep private content private. |
| AR-FIND-02 | SHOULD | Publish current answers in canonical first-party documentation. | A content site's own explanatory pages can be its documentation. A separate developer portal is unnecessary. |
| AR-FIND-03 | SHOULD | List public pages in a sitemap referenced by robots.txt. | Inspect actual URLs, host, canonical paths, and access. Omit private records. |
| AR-FIND-04 | MAY | Publish an AI Catalog at `/.well-known/ai-catalog.json`, advertised in the homepage head and HTTP Link header. | Emerging discovery convention for resources actually shipped. Not an established universal manifest schema. |

The crawl notes recommend a wildcard baseline instead of enumerating every agent. Specific groups override wildcard behavior; preserve deliberate training-crawler exclusions. Robots is a crawl policy, never authorization. A challenge page can return 200 while still blocking reading. User-agent simulation is only a local observation; provider-verified requests and operator logs are stronger evidence.

## Read

| ID | Level | Requirement summary | Scope and assessment |
| --- | --- | --- | --- |
| AR-READ-01 | MUST | Put the answer in initial HTML. | Check representative public answer pages. Rendered DOM, JSON-LD, and embedded application state alone do not establish this. |
| AR-READ-02 | MUST | Return truthful statuses for missing routes and throttling. | Source calls for 404 or a valid replacement redirect, and 429 with Retry-After. Do not induce throttling in production to test it. |
| AR-READ-03 | SHOULD | Serve a readable homepage with real navigation links. | Link relevant docs, product, and pricing when those exist. |
| AR-READ-04 | SHOULD | Documentation should resolve real user tasks. | Evaluate an answer journey, prerequisites, errors, and current examples, not file presence. |
| AR-READ-05 | SHOULD | Fence code snippets and identify the language. | Not applicable if no code examples are needed. On HTML pages use semantic pre/code and a language marker. |
| AR-READ-06 | SHOULD | Link discovery artifacts from pages agents already visit. | This is **linkage**, not a requirement to invent every well-known endpoint. Evaluate the resources the product ships or needs. |
| AR-READ-07 | SHOULD | Provide a concise, described llms.txt index. | A proposal, not an IETF/W3C standard. Keep canonical docs authoritative and links current. |
| AR-READ-08 | SHOULD | Include useful JSON-LD and repeat critical facts visibly. | Use valid, factual schema.org types. Do not fabricate prices, ratings, or actions. |
| AR-READ-09 | MAY | Advertise Markdown alternatives through alternate links or HTTP Link. | An optimization after HTML works. No evidence here that adding a mirror alone fixes task failure. |
| AR-READ-11 | SHOULD | Publish pricing, plans, free tier, and limits as first-party HTML text. | Applies when pricing exists. For bespoke pricing describe the actual model and known limits; never invent a price. |

`AR-READ-10` is retired. Do not reintroduce a requirement for website `AGENTS.md` or `SKILLS.md`. The earlier `AR-DISC`, `AR-CONT`, `AR-CAPA`, `AR-IDEN`, `AR-COMM` identifiers and `/spec.json` artifact are superseded. Include READ-09 even though some abbreviated checklists omit it.

## Act

These checks concern products intended for agent-executed tasks. Where a row has an additional condition, evaluate that condition explicitly.

| ID | Level | Requirement summary | Scope and assessment |
| --- | --- | --- | --- |
| AR-ACT-01 | SHOULD | Offer usable authentication with documented scopes; discoverable OAuth metadata for delegation. | Authenticated operations. Scoped self-serve keys may suit account automation; browser sessions alone may not suit external clients. User consent may remain interactive. |
| AR-ACT-02 | SHOULD | Describe the public API in OpenAPI. | Public HTTP API integrations. Check operation definitions, inputs, outputs, security, and error contracts. Operation IDs, versioned routes, and rate-limit docs are source best practices, not universal OpenAPI MUSTs. |
| AR-ACT-03 | SHOULD | Offer MCP over Streamable HTTP at `/mcp`. | Source recommends public docs MCP and OAuth for protected product MCP, plus Registry publication using server.json. These are adoption recommendations, not universal MCP endpoint-path or public-access requirements. A CLI can satisfy ACT-10 while MCP is deferred. |
| AR-ACT-04 | MAY | Publish a server card before connection. | Existing/intended MCP server and supporting hosts. SEP-2127 is a moving draft; do not invent a fixed well-known path. Registry server.json is a different artifact. |
| AR-ACT-05 | MAY | Offer an MCP Apps view through a ui:// resource. | UI integration into a supporting MCP host. Optional even if the product has a UI. |
| AR-ACT-06 | SHOULD | Publish SDKs and a CLI with install/first-call docs. | Choose useful languages and distribution for the actual audience. The source recommends npm and PyPI; avoid adding two SDKs solely for a checklist. |
| AR-ACT-07 | SHOULD | Register WebMCP tools on document.modelContext for a UI agents should operate. | Browser interaction only. Community Group draft, not a W3C Standard. Feature-detect and retain ordinary UI behavior. Record a reasoned deferral for unsupported target browsers/hosts. |
| AR-ACT-08 | MAY | Support agent payment mechanisms. | Only products that charge and whose intended agent task includes payment. Source lists x402/MPP for calls, UCP/ACP for checkout, and Stripe Link/SPT. Select a verified integration only when needed; no purchases in audit. |
| AR-ACT-09 | MAY | Provide NLWeb /ask and an MCP ask tool for content queries. | Optional for content-heavy products; does not make Act mandatory for an informational site. |
| AR-ACT-10 | MUST | Supply at least one useful MCP server or CLI for agent task completion. | Conditional on intended action. REST alone is not the source's stated alternative. Assess actual task coverage and supported clients, not the existence of an empty endpoint or binary. |

Do not relabel a SHOULD as MAY because a protocol is immature. Preserve the level and explain maturity, target support, applicability, and the implementation decision independently.
