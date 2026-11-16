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
