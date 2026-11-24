---
name: product-readiness
description: Choose and verify what a product needs beyond its visual design before it ships. Use for launch and release checklists, delivery baselines, core-journey acceptance, public discovery, recovery, accessibility, security, performance, offline behavior and operational readiness. Rendered UI review belongs to ui-quality-gate.
license: MIT
---

# Product readiness

Identify what users need to get a useful, dependable result. Verify the commitments the product makes and make remaining gaps visible before release.

## 1. Set the boundary

Read the brief, repository instructions, existing release checklist and actual stack. Reuse existing decisions and evidence. Select the authorized mode:

- **Plan:** for kickoff planning or a requested roadmap, return applicability decisions and acceptance checks. Change no product files unless the user requests a saved plan.
- **Audit:** for a completeness review, inspect code and authorized read-only surfaces. Report findings without modifying the target or submitting it to external scanners.
- **Implement:** for an authorized build or fixes, make the applicable changes and verify them. This mode does not itself authorize deployment, publication, account changes or third-party scan submissions.

Name one observable core journey, the audience and the constraints that affect it. For a feature, scope the review to changed commitments and their consumers. For a learning prototype, check the capability, trust boundaries and experiment's result. Apply the delivery baseline when moving toward a product people will depend on.

## 2. Choose the applicable baseline

Use [the coverage matrix](references/coverage.md) to catch meaningful omissions in the delivery baseline. At release, revisit the agreed checks and changed risks. Use the product outcome guidance there when improving first value or repeat use.

For a delivery or release baseline, record applicable scope, acceptance checks and which gaps need an owner or deadline. Use the stages **first usable slice**, **before public release**, or **deferred with a reason and revisit trigger** when they help the team deliver. Mark checked but inapplicable requirements with a reason. Missing tools, time or credentials leave a check **unknown/blocked**. A core data-loss, access-control or false-success defect remains a blocker even under a deadline.

Reuse the project's tracker or checklist. If it has none, use [the compact record](references/readiness-record.md); one table is sufficient. Keep applicability separate from verification status: `pass`, `fail`, `unknown`, `not applicable`. A deferred applicable gap remains fail or unknown until resolved. Avoid manufactured percentages and promises of 100% readiness.

Load only relevant detail:

- Public pages, SEO, AEO, link previews or machine consumers: [discovery and sharing](references/discovery.md).
- Any request mentioning offline HTML, offline support, installability or PWA: [offline decisions](references/offline.md). Separate initial HTML, a standalone export, a network fallback and offline task completion.
- React/Next.js implementation or React Doctor findings: [React engineering](references/react-engineering.md), using relevant Vercel rules and the project's existing tooling.
- Authentication, data boundaries, externally reachable actions, uploads or AI tools: [security verification](references/security.md), using applicable Vibe Security and OWASP guidance.
- Collections, database access, expensive work or traffic growth: [scaling and data access](references/scaling.md), with query-count and workload evidence.
- Lighthouse targets, interaction performance or accessibility acceptance: [quality budgets](references/quality-budgets.md), separating automated scores, operated journeys and field evidence.
- Version-sensitive requirements or external claims: [primary sources and limits](references/sources.md). Verify the target's installed versions and deployed behavior.

Finish this step with bounded commitments, not a list of every feature the product could acquire. A public landing page normally needs discovery, sharing and resilient forms; a private dashboard needs access boundaries and recovery; an offline field app needs explicit storage and synchronization behavior. PWA, MCP, billing, push notifications and extra locales require a real use case.

## 3. Integrate with delivery

Keep Product Engineering Studio as the product/integration owner when installed. It proves the riskiest dependency and the smallest complete journey. Use Vibe UI and UI Quality Gate for design and rendered behavior; carry their evidence into this record instead of running another visual review. Without those skills, inspect the chosen journey's layout, keyboard/touch behavior and material states directly, and label missing evidence.

Use agent-readiness for detailed public agent discovery or intended agent actions when installed. Without it, verify initial public HTML, usable links, honest HTTP responses, canonical task documentation and the existing authorized action interface. Record any unassessed protocol conformance as unknown. Keep public indexing separate from private authorization.

Put stable behavior in reusable starter code: metadata defaults, OG image template, error/not-found boundaries, common loading/empty/error components, environment validation and a smoke path. Keep product-specific audience, routes, policy, offline depth, permissions and integrations in the project record. Configure existing components before building duplicates. Preserve accepted signature compositions while checking performance, semantics and reduced motion.

Deliver the applicable baseline with each vertical slice. Resolve architecture-sensitive choices such as rendering, persistence and offline writes before building dependent screens. Reserve launch checks for deployment-specific evidence, not discovering missing product states at the end.

Keep engineering review inside this delivery loop: run focused checks during changes and the agreed broader checks on the integrated candidate. Resolve genuine high-impact security/correctness defects before score improvements. Use installed specialist instructions where available and these references as a portable fallback. Preserve the existing framework, component system and data-fetching library unless the task justifies a change; a vendor recommendation alone does not justify a migration.

## 4. Verify the candidate

Inspect the production build, not just the development server. Record commit/build, environment, route/state, browser/device where relevant, check, result and evidence. Reuse still-valid evidence for unchanged boundaries; recheck affected behavior after integration, configuration or routing changes.

Exercise a fresh-session core journey, a representative failure and a recovery. Verify public deep links and actual missing-route status; inspect raw HTML and the served share image when applicable. Exercise keyboard/mobile behavior and chosen offline guarantees. Check representative content extremes and incomplete permissions, not only seeded happy paths. A skeleton disappearing into an error is different from a skeleton that never ends.

When the project runs [product-engineering-quality-gate](https://github.com/DimitrisTheo-Dev/product-engineering-quality-gate), its report (`.quality-gate/report.json`, or the job summary) is the evidence for the checks it ran. Read its rows instead of repeating them. A `SKIPPED` row stays unknown unless its reason makes the check not applicable.

Use synthetic users, local fixtures or authorized sandbox services for mutations. External scores are supporting diagnostics for their observed public scope; they cannot establish private flow correctness, accessibility, security, indexing or commercial value. Use existing authorized reports or an explicitly requested scan. Redact private captures before sharing.

## 5. Report the decision

Give the useful outcome reached, highest-impact gaps, evidence boundaries and next action. Separate implemented, locally verified and verified-live behavior. Claim readiness only for the named scope with its required checks passing; list applicable unknowns and deferrals. If a release prerequisite is unverified, say **not verified for release** and continue independent authorized work.

Use available feedback or actual task outcomes to revisit the decision after release. Keep recurring failures as reproducible cases in the shared component or integration that owns them.
