# Audit and planning playbook

## Establish evidence boundaries

Record the date, target commit, inspected origins/routes, mode, intended tasks, and available tools. Choose representative public pages: homepage, one answer-bearing deep link, pricing if offered, docs quickstart/auth page if relevant, and a unique nonexistent read-only route. Include locale/base-path variants when routing depends on them. A bounded sample cannot prove every route works.

Inspect manifests, route handlers, rendering boundaries, static exports, reverse-proxy rewrites, robots/sitemap generators, docs sources, API schemas, auth middleware, tests, and hosting configuration. Do not read secret files for an audit. An environment variable's name is enough to identify a dependency.

For an authorized public URL, a bounded fetch can look like:

```sh
curl --proto '=https' --connect-timeout 5 --max-time 15 \
  --max-filesize 1048576 --max-redirs 0 \
  -H 'Accept: text/html' -A 'AgentReadinessAudit/1.0' \
  -D /tmp/readiness-headers.txt -o /tmp/readiness-page.html \
  'https://example.com/docs/quickstart'
```

Use unique temporary paths outside the target for response captures. Do not save captures if the user prohibited all filesystem writes. Inspect Location before following a redirect; stay within authorized origins and public resources. Do not use credentials, `--insecure`, or bypass flags. For a local fixture use its explicit loopback URL and HTTP rather than this HTTPS example. A normal first pass should fit about ten requests, with no parallel load or recursive crawl. Stop on 429 or challenges. Explicit broader scope can justify more checks.

Read the body, status, content type, and redirect chain together. Check the actual answer, not a word-count threshold. Exclude scripts, styles, templates, metadata, and hidden payloads when assessing visible initial content. Compare browser output only if available. A difference between raw HTML and a rendered DOM is useful evidence; absence of a browser is an explicit limit.

## Target the failure, not a file count

| Observation | Decision and verification |
| --- | --- |
| 200 with an empty SPA shell | READ-01 fails on that public page. Check a production request after SSR/prerendering; the expected answer and real links should be in initial HTML. Retain interactive islands. |
| A random absent path returns 200 | READ-02 fails even if the body says "not found". Check host fallback rules and deployed deep-link statuses. A homepage redirect is not a valid replacement for every missing page. |
| Robots permits access, WAF returns 403/challenge | FIND-01 fails for the observed client. Inspect operator policy/logs; do not claim global blocking from one vantage point. Verify genuine provider traffic after a targeted change. |
| llms.txt exists but canonical docs omit setup/error details | Report READ-07 separately from FIND-02/READ-04. Prioritize the incomplete docs. Check a realistic integration question against current docs. |
| OpenAPI exists with empty operations or missing errors/security | ACT-02 is incomplete for the intended integration. Validate representative success and error responses against the contract. A schema parser passing does not prove the API matches it. |
| Product has only a cookie login and agents need delegated external access | Assess ACT-01 for that client. Propose supported scoped delegation, consent, revocation, and expiry. Never reuse a person's session cookie or grant blanket admin keys. |
| Static site without transactions | Act is not applicable. Pricing, code examples, and technical quickstarts may also be inapplicable. Canonical informational pages still matter. |
| "Fix" would publish internal endpoints or remove auth | Reject that change. Describe a safe public documentation boundary or a scoped authenticated interface. Keep the original controls and add denial tests in implementation mode. |

For rate limits, inspect configuration/tests or existing 429 captures. A single 200 does not verify throttling. If no evidence exists, mark that subcheck unknown. Split a requirement into subchecks when evidence differs; an observed failure takes precedence, and unverified parts remain visible. Blocked prerequisites make downstream checks unknown, not not applicable.

Keep the status itself one of the four values; put qualifications in evidence/scope. Code can support a pass for an inspected design subcheck while deployed behavior remains a separate unknown. An applicable but absent SHOULD remains fail even when reasonably deferred; record the deferral in the action, not as a fifth status or not applicable. If no code snippets exist, READ-05 formatting is not applicable to the current pages; missing examples needed to complete a task belong under READ-04.

For APIs, trace one intended operation through discovery, authentication, parameters, response/error semantics, pagination, and retry behavior. For MCP, inspect the transport, supported protocol version, tool schemas, per-operation permissions, and client compatibility. Do not call tools in audit mode. Protocol metadata requests requiring POST need explicit authorization or a sandbox evaluation.

## Report contract

Start with the most consequential blocked tasks and the scope limitations. For each evaluated requirement or subcheck use these fields, in a table or short findings:

| Field | Required content |
| --- | --- |
| Requirement/source | Stable ID, normative level, source URL and snapshot; label additional recommendations as this skill's guidance. |
| Evidence | File and line, or request URL/status/date/vantage point; distinguish inspected code from executed checks. Redact private identifiers. |
| Status | pass, fail, unknown, or not applicable. Give the reason for unknown/inapplicable. |
| Severity/impact | Blocker, high, medium, low, or none, tied to a specific agent task. Unknown does not imply low risk. |
| Action | A concrete fix, a justified deferral, or the evidence needed to resolve uncertainty. |
| Verification | A reproducible acceptance check and its expected result. Mark it as planned unless executed. |

Use blocker for an impossible core task, high for a broken important journey or security exposure, medium for a reliability/discovery gap, and low for an optional improvement. Keep a compact coverage list for remaining IDs, grouped only when level, applicability, evidence, and disposition are identical. Every ID in the map must be accounted for in a full audit. A requested narrow audit can cover fewer IDs if the report states that scope.

Do not assign vendor grades or a percentage of "readiness". Overall AgentReady conformance requires evidence for every applicable MUST; even then qualify the claim by audited scope and date. Successful metadata checks do not establish task completion.

## Turn findings into a plan

1. **Essential:** restore the expected public answer and honest routing; resolve security blockers and an intended task's missing action/auth path. Separate practical blockers from formal v2.0 conformance gaps.
2. **Useful:** improve canonical task docs, operation/error contracts, discovery links, sitemap, llms.txt, and factual structured data according to observed demand.
3. **Speculative:** AI Catalog, server cards, Markdown mirrors, MCP Apps, NLWeb, payment protocols, or draft browser mechanisms without a demonstrated supported client. WebMCP retains SHOULD even when its implementation is deferred here.

For each item state the task benefit, affected component, prerequisite, effort, risk/tradeoff, and acceptance check. Prefer the interface already useful to the user's clients. Avoid a new service, dependency, SDK language, or auth provider when the existing architecture can support the task.
