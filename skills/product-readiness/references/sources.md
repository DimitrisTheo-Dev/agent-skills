# Sources and limits

Reviewed **2026-11-16**. The workflow and coverage matrix are original engineering guidance responding to repeated delivery omissions, not a claim that each item is required by every source. Check current framework/platform behavior before implementation. Linked material retains its own license; no source code, articles, images or datasets are bundled.

| Primary source | Use and limits |
| --- | --- |
| [AgentReady](https://www.agentready.org/) | Public discovery/readability and conditional agent action guidance. Use agent-readiness's maintained map for exact IDs and levels. This review did not recertify all upstream protocol versions. |
| [Is Agentic](https://is-agentic.com/) | Public-surface scanner with essential, applicable recommended and emerging checks; its homepage explains scope and score limitations. A vendor report is neither universal conformance nor private-flow verification. |
| [Google AI features](https://developers.google.com/search/docs/appearance/ai-features) | Established SEO fundamentals, visible useful content and truthful structured data; no special AI file/schema requirement for these Google features. Eligibility is not guaranteed inclusion. |
| [Open Graph protocol](https://ogp.me/) | Core share metadata and optional descriptive/image properties. Destination-specific image crops still require testing. |
| [WCAG 2.2 quick reference](https://www.w3.org/WAI/WCAG22/quickref/) | Accessibility criteria and techniques. Sampled manual and automated checks do not establish whole-product conformance. |
| [web.dev offline fallback](https://web.dev/articles/offline-fallback-page) | An offline fallback needs installation, cached assets and navigation handling; a standalone HTML export is a separate deliverable. |
| [web.dev offline data](https://web.dev/learn/pwa/offline-data) | Browser storage options, quota and persistence considerations. Data ownership/synchronization policies remain product decisions. |
| [web.dev PWA updates](https://web.dev/learn/pwa/update) | Asset/data/worker updates and platform-dependent background behavior. Recheck target support instead of assuming a universal lifecycle. |
| [MDN offline/background operation](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation) | Service-worker operation and lifecycle guidance. Verify supported browsers and actual offline guarantees independently of installability. |

The starter architecture, delivery stages, state coverage and reuse measurements are recommendations. No scanner was run and no product was certified while authoring this skill. The separate evaluation record states which workflow decisions were exercised.

## Engineering sources

Also checked **2026-11-16**. These references inform conditional engineering review. They do not require Vercel hosting, a database migration, a particular state library or running every scanner on every change. Numeric project targets and the repeated-run protocol are this workflow's recommendations; upstream metric definitions are identified separately.

| Primary source | Reviewed scope and limits |
| --- | --- |
| [React Doctor README](https://github.com/millionco/react-doctor/blob/main/README.md) and [CLI reference](https://www.react.doctor/docs/reference/cli-reference) | README blob `2445e5a46c05f675b7856036b1cf5ef3a56a9d48`; diagnostics, version/scope/base, partial scans and external-service controls. CLI documents no-score/no-telemetry and no-supply-chain. Verify the installed release; no executable, rules or upstream license text is bundled. |
| [Vercel React Best Practices](https://github.com/vercel/vercel-plugin/blob/main/skills/react-best-practices/SKILL.md) | Blob `fb40495ac6a54401070c7f6791873981e28aae32`; priorities from waterfalls/bundles through server/client/render work. Its current description explicitly separates performance from accessibility/TypeScript style. The locally available plugin description was broader; use actual rules and separate accessibility evidence. |
| [Vercel request-state rule](https://github.com/vercel/vercel-plugin/blob/main/skills/react-best-practices/rules/server-no-shared-module-state.md) | Blob `ff7d9f29c6e0e42ec1471acec8a3c7f394c8358d`; request-local state versus intentionally shared caches. APIs and caching semantics remain framework-version dependent. |
| [Vibe Security](https://github.com/raroque/vibe-security-skill/blob/main/vibe-security/SKILL.md) | Blob `4baed3514d42afb147967a003e2f544c8917f2f6`, plus authentication/data-access references. Conditional checks for exposed secrets, server trust, permissions and input handling. Keep intentionally public operations public and use the target framework's supported auth controls rather than imposing example code universally. |
| [OWASP ASVS](https://asvs.owasp.org/) | Stable 5.0.0 identified on the official overview; a source for verification scope, not a conformance claim from this checklist. |
| [OWASP object authorization](https://owasp.org/API-Security/editions/2023/en/0xa1-broken-object-level-authorization/) and [resource consumption](https://owasp.org/API-Security/editions/2023/en/0xa4-unrestricted-resource-consumption/) | Server-side object permission and bounded resource use. Apply to the actual attack surface; no exploitation or load test was performed during authoring. |
| [Lighthouse performance scoring](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring) and [accessibility scoring](https://developer.chrome.com/docs/lighthouse/accessibility/scoring) | Performance 90-100 is the good range; 100 is not expected universally. Automated accessibility excludes manual checks. Preserve tool/version scope and individual results. |
| [Core Web Vitals thresholds](https://web.dev/articles/defining-core-web-vitals-thresholds) and [Web Vitals](https://web.dev/articles/vitals) | LCP <=2.5s, INP <=200ms, CLS <=0.1, assessed at p75 with mobile/desktop separation. Field thresholds are not a Lighthouse score or evidence that a new app has field data. |
| [PostgreSQL EXPLAIN](https://www.postgresql.org/docs/current/using-explain.html) | Plan/cardinality analysis; ANALYZE executes the statement and can have side effects. The reviewed current page resolved to PostgreSQL 18; use the target database version's semantics. |

The React Doctor, Vercel and Vibe Security references retain their respective licenses. This repository adds original coordination and acceptance guidance only; it neither vendors nor claims to install their code/skills. Security, load, React, Lighthouse and assistive-technology checks were not run against an application by this documentation change.
