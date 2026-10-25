# Vibe UI checks

Executed 2026-10-25 after importing the maintainer-supplied skill. The entrypoint was shortened from 1,828 to about 740 words; detailed craft guidance remains in references. The Downloads original was left unchanged.

An independent agent received the skill and the requests below, without expected answers. All requests were read-only. No project, browser, screenshot, source code, or external service was available. To repeat the exercise, give the evaluator only the request column and the skill; assess its response afterward.

| Request and supplied facts | Observed result |
| --- | --- |
| Art-direct a commercial HVAC site for facilities managers. Ventilation/cooling services in Athens, contact by phone. No references, photos, certifications, metrics, customer logos, or testimonials supplied. Brief only. | Produced a concrete service-first direction without requiring references. Palette/type values were proposals; the phone number remained missing. No invented proof, implementation, or visual-verification claim. |
| Review a dense incident dashboard from a description: 24 rows, filters, equally emphasized row actions, red/green status dots without labels. No changes. | Prioritized status labels, scanning, and filter feedback. Preserved useful density and noted that equivalent actions having equal emphasis is not inherently wrong. Kept contrast, behavior, and responsive claims unverified. |
| Faithful-recreation brief from a description: cream background, teal masthead, rounded white cards, large left heading, quiet rectangular primary control. No exact font, measurements, assets, or interaction evidence. | Preserved those choices and separated unknown measurements/assets from proposed responsive adaptations. No unrelated aesthetic translation or claimed screenshots. |

The assessor accepted the mode, scope, fidelity, and evidence decisions in all three cases. The evaluator noted ambiguity about description-only input; the entrypoint now explicitly distinguishes user-reported facts from inspected evidence. The three deliverables were not rerun after that clarification. These checks assess design decisions and reporting boundaries, not rendered visual quality or implementation behavior.

Additional executed checks:

- Both skills passed the official `skills-ref` and built-in skill-creator validators, plus repository metadata/link/syntax validation.
- All 17 existing infrastructure tests passed locally. They do not establish design quality.
- Both personal installations are symlinks under `~/.agents/skills` to this checkout. No existing skill was overwritten.
- A fresh Codex CLI 0.163.0 session in an unrelated temporary repository discovered both installed names and their personal SKILL.md paths from initial host metadata. It returned `$agent-readiness` and `$vibe-ui` as the explicit invocations. No skill workflow was executed in that discovery check.

The CLI check exited 0 despite an unrelated connector-authentication startup warning. No connector tools were used. There was no browser/device rendering, accessibility conformance audit, or frontend build in these checks. The [visual QA reference](../../skills/vibe-ui/references/visual-qa.md) defines what must be checked on a real implementation.
