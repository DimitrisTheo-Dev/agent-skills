# Operational quality workflow, revision 2

## Delivered change

The maintainer explicitly requested active improvements after the first candidate was rolled back. This revision updates Studio and Vibe UI and adds UI Quality Gate. The earlier catalog comparison remains a historical negative result; it is not retroactively claimed as a win. The new workflow is adopted as an actionable inspection process, not a proven guarantee of aesthetic superiority.

| Responsibility | Owner | Concrete behavior |
| --- | --- | --- |
| Product scope and delivery | Product Engineering Studio | Keep the main user task and engineering requirements intact; route UI work through the gate; small fixes stay small and backend work skips visual review. |
| Design selection and implementation | Vibe UI | Compare actual task access, hierarchy, composition and interaction on comparable narrow/wide variants; make decisions from the render rather than the persuasive rationale. |
| Inspection and correction | UI Quality Gate | Inspect twelve areas, record evidence, fix material findings and recheck affected views/states. Two stagnant rounds trigger a new diagnosis, not automatic delivery. |

The twelve areas are task, structure, terminology, typography, spacing, color, components, states, interaction, responsive behavior, accessibility and character. The matrix covers concrete component contracts, outlines and geometry, numeric formats, motion reversal, keyboard focus, real content, recovery and viewport limits. It distinguishes requirements, platform conventions and contextual design choices. It does not impose a fixed palette or claim every pixel should move.

The evidence checker verifies source/artifact hashes, area coverage, evidence references and readiness consistency. It rejects source-only proof of rendered/operated behavior, unknown evidence, missing artifacts, omitted areas and accepted-away major defects. It cannot judge aesthetics or detect dishonest observations; actual inspection remains required.

## Executed verification

- Personal-skill format validation passes for all three skills.
- Repository validation checks metadata, links, contained resources and Python syntax.
- Sixteen new synthetic checker tests cover valid structure and CLI exit behavior, changed implementation, missing/escaped artifacts, omitted areas, unverified readiness, open/accepted major findings, unresolved minor tradeoffs, missing rechecks, source-only evidence, source-only accessibility claims, all-not-applicable coverage, unknown evidence and focused-fix scope. These test the gate's record integrity, not design quality.
- A fresh reviewer received the gate and only the existing catalog's desktop/narrow screenshots. It made no edits, identified mobile hierarchy and navigation-affordance weaknesses, and refused functional/accessibility sign-off without interaction evidence. It did not receive the earlier findings or desired verdict.
- A separate fresh builder received Vibe UI, the gate and a local copy of the catalog. It preserved all supplied skill data and made bounded changes to action labels, internal/external arrows, selection and focus/navigation behavior. Syntax and Node VM checks passed for four routes, eight exact copy payloads, matching/empty states and recovery logic. Those use DOM stubs, not a browser.

The builder's first preview attempt failed because the preview was stopped. A subsequent attempt to observe the error tab was rejected by browser URL policy; it did not bypass that rejection. The lead subsequently started the documented preview, but that bounded builder run completed source-only. Its final verdict remained **unverified**. No before/after screenshot, device, runtime focus or visual-improvement claim is made for that run. Longer labels and actual narrow layout still need rendered verification.

## What this establishes

The routing and inspection instructions are now concrete, scope-aware and operational. The checker detects the tested integrity failures. Forward checks show that review-only scope and missing evidence are handled honestly. They do not establish deterministic taste, universal native behavior, or that every output will exceed an expert designer's work.

Continue to use real product work to improve the workflow. Preserve the user's accepted choices and reasons in that product's design contract. Correct observed weaknesses without making the user repeat typography, spacing and interaction fundamentals. Keep quality records internal and communicate outcomes plainly.

An independent source review found two contradictions before completion: substantial read-only reviews needed an explicit prose-record path, and accessibility passes needed operated evidence. Both were corrected; a dedicated regression test covers the latter.
