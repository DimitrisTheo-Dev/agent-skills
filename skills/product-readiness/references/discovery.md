# Discovery and sharing

Keep three outcomes distinct: search eligibility, accurate answers from public content, and
authorized agent actions. Improving one does not prove the others. Use current primary sources from
the source record for implementation details.

## Public route contract

Inventory canonical public routes and private routes separately. For indexable pages, choose useful
unique titles/descriptions, descriptive links and headings, declared language, the intended
canonical URL and truthful content. Serve the essential answer in initial HTML for fetch-only
clients. Keep client interactions where they help; an authenticated workspace need not become a
public static site.

Make robots, indexing directives, canonicals, redirects and sitemap output agree. Exclude private,
preview and accidental duplicate URLs. Robots and noindex are not access control; protect private
resources with authorization. A robots block can prevent a crawler from seeing noindex, so use an
intentional policy rather than stacking contradictory directives. Confirm production does not
inherit a preview's noindex policy.

Return honest HTTP statuses. A pretty not-found screen with status 200 remains a missing-route
defect. Do not mask API failures with a successful app-shell response. Check the hosting layer and
actual deep links, not just framework route files. For locales, verify equivalent routes, language
annotations and canonicals together.

## Search and answer quality

Publish clear answers to the audience's real questions: what the product does, who it serves,
limitations, pricing if public, setup and support. Keep essential facts visible as text. Add
authorship, sources and update dates where useful. Structured data must describe visible, current
content using an appropriate supported type; do not invent reviews, prices or FAQ content for
markup.

Google's AI search guidance applies established SEO fundamentals and does not require a special AI
schema or AI text file for eligibility. Treat other engines according to their own current guidance.
No implementation can promise ranking, indexing, citations or recommendation frequency. Separate
technical verification from later measurement in search/analytics tools.

Use agent-readiness for AgentReady requirement IDs, maturity and conditional Act applicability when
available. Link useful machine resources from normal documentation. Add llms.txt, a Markdown mirror
or a machine contract only when it serves a real consumer; keep it synchronized with canonical docs.
A landing page does not acquire MCP or a CLI solely to improve a score.

## Share package

Set Open Graph title, type, canonical URL and image; add description and image alternative text
where appropriate. Configure relevant social card metadata and icons for the intended sharing
destinations. Choose a sensible branded default plus route-specific overrides, including localized
content where offered.

Use absolute public HTTPS asset URLs. Inspect image dimensions, aspect ratio, safe crop, legibility
and content type on the intended destinations; avoid treating one image size as a universal protocol
rule. Test the actual served image and a long title. A generator's source file is not proof that the
image endpoint works in production. Keep a static fallback for generation failures and avoid
exposing private user content in public metadata or image routes.

## External assessments

AgentReady provides a requirement framework. Is Agentic provides a changing vendor assessment of
observed public surfaces. Keep the requirement's normative level, product applicability, practical
severity and scanner score in separate fields.

For a requested scan or a supplied report, retain URL, capture time, scope, failed-check evidence
and methodology version when available. Prioritize practical essential failures, then applicable
capabilities. Unknown private flows stay unknown. A high score cannot replace a fresh user journey
or independent security/accessibility checks. A score of 100 is not a project acceptance criterion.

## Acceptance sample

Use a homepage, an answer-bearing deep link, a nonexistent path and any materially different
locale/auth boundary. Confirm raw HTML, status, canonical metadata, link destinations and the actual
share image. Record what was sampled. Full route inventories can be checked from build output when
available; a sample does not establish every page's correctness.
