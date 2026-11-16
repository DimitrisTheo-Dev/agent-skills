# Performance and accessibility budgets

Choose budgets at kickoff for representative routes and journeys. The defaults below are project quality goals, not universal certification criteria. Keep existing stricter requirements; adapt only with a recorded reason, owner and revisit trigger. Fix user-visible bottlenecks before polishing aggregate scores.

## Lighthouse and real experience

For representative public routes, propose **90+ Lighthouse Performance** on a documented mobile profile and desktop where supported, and aim for **100 on applicable automated Accessibility, Best Practices and SEO audits**. Private routes do not need public indexing to earn a score. A score below the agreed budget is a finding, with its actual failing audits and impact; improvement targets do not waive release blockers elsewhere.

Run the production build with real content and the normal consent-dependent third parties under repeatable conditions. Record URL/route state, candidate, Lighthouse/browser version, device/throttling profile, cache state and environment. Use at least three comparable runs for a release comparison and retain individual results plus the median. Do not report only the best run. Treat a noise-sized difference as uncertain. Compare the same route/profile rather than development versus production or desktop versus mobile.

Prioritize the largest measured cause: rendering/network waterfalls, oversized JS, blocking third parties/fonts, missing image dimensions, heavy hero media, long main-thread tasks or excessive rendering. Preserve the useful signature demo/headline and optimize its cost in context. Never hide real content, remove accessibility, bypass authentication or disable audit rules just to turn a report green. A synthetic fixture result stays a fixture result.

For field data, target all three Core Web Vitals at the **75th percentile**, separately for mobile and desktop: **LCP <= 2.5 s, INP <= 200 ms, CLS <= 0.1**. Record source, time window and sufficient sample context; a new product without traffic has unknown field performance. Lighthouse lab scores and TBT do not establish field INP. Add a representative operated interaction trace when input responsiveness matters.

Define product-specific bundle, API latency and cost budgets from the target device/workload instead of inventing a universal kilobyte or p95 limit. Preserve functional and visual regression evidence beside performance measurements. Missing tooling or inaccessible authenticated routes are unverified coverage, not automatic passes.

## Accessibility acceptance

Use WCAG 2.2 AA as the default web target unless the product has another explicit requirement. Map the affected criteria to actual components/states and retain the tested scope. An automated 100 or zero axe violations covers only the checks that ran.

Reuse UI Quality Gate evidence when available. Operate the core journey by keyboard; check visible/unobscured focus, dialog/menu focus handling, names, errors, status announcements, contrast, zoom/reflow, target sizing and non-color meaning. Include a screen-reader pass for the important journey when claiming assistive-technology behavior, with the actual browser/AT pair. Check reduced-motion behavior and essential media alternatives where applicable. Do not claim whole-product conformance from sampled routes or unavailable AT tooling.

Fix serious/critical automated violations and material manual blockers in the affected scope. Lower-severity findings still need criteria/impact review. If a rule is excluded as a false positive or inapplicable, record its ID, affected nodes, rationale and manual evidence; excluded nodes remain outside an unqualified automated pass. Recheck on the current candidate after component, content or styling changes.

## Keep verification proportional

Use the repository's build/type/lint checks and focused behavior tests during implementation. Add regression cases for meaningful failures such as data leakage, duplicate effects, query growth or keyboard traps, not tests that restate CSS values. Run full route budgets when the release or changed rendering warrants them. Keep a small geometry correction within its affected controls; do not require a whole-app load test for it.
