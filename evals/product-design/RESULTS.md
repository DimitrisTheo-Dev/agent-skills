# Catalog pilot results

**Status: diagnostic comparison, not a demonstrated quality win.** The revised workflow produced a design contract and two structural proposals, and an independent reviewer preferred its visual presentation. The same reviewer narrowly preferred the baseline for the complete task. Neither output establishes a compelling signature moment. Owner preference, next-day recall and a second unlike product remain unassessed.

## Setup

Run date: 2026-11-11. Two fresh agents received the same task, four-skill content snapshot, dependency-free implementation constraint and 12-minute ceiling. Both inherited the same parent model/effort configuration; the exact backend model identifier was not exposed. Each had one build attempt and zero owner design corrections. A status-only reminder was sent to the candidate after its recorded end. The builders could not see the scoring rubric or were instructed not to inspect each other's artifacts. They had separate output directories on a shared filesystem, not OS-enforced isolation.

Browser control was reserved to the lead because the environment supplies one managed preview. Consequently neither builder could inspect rendered variants before choosing. Central browser review happened after both builds. This materially limits the comparison: it does not exercise the revised workflow's complete rendered exploration and correction loop.

The baseline is the existing Studio imported at `17c23b61b20c352fbd852fafa5edddf23f1be453`, with Vibe UI from `bd1aa8023c73064a330ceede91530ee289d3e259`. [Snapshot hashes](snapshots.json) identify the exact files used. The candidate pilot preceded the final routing correction and optional-tool cleanup. These post-pilot edits were independently reviewed in source and are not themselves part of the output comparison.

| Run | Actual interval, UTC | Runtime | Artifact | Local checks |
| --- | --- | --- | --- | --- |
| One: baseline | 13:35:29–13:46:13 | 10m 44s | [Catalog](artifacts/one/index.html), [builder record](artifacts/one/BUILD.md) | 22 deterministic checks passed |
| Two: candidate | 13:40:14–13:50:04 | 9m 50s | [Catalog](artifacts/two/index.html), [builder record](artifacts/two/BUILD.md), [structural proposals](artifacts/two/exploration.html) | 29 deterministic checks passed |

The local check suites differ and their counts are not a comparative quality score. Both were rerun by the lead. Input descriptions, instructions and command strings were preserved. No installation command was executed against a user's machine, and no product was deployed.

## Common browser evidence

The lead used Chrome through the supported managed preview. Both catalogs were rendered at CSS iframe widths 390, 768, 1280 and 1440 in light and dark. Observed body scroll widths were 375, 753, 1265 and 1425 respectively: no horizontal page overflow in the tested catalog states. This is viewport reflow evidence, not physical-device or mobile-browser coverage. Wide screenshots can extend beyond the outer browser viewport; source measurements are recorded separately.

Both completed browse/search to a Vibe UI detail, copied `$vibe-ui` and the exact installation line to the real browser clipboard, switched theme, and supported the tested slash-search and Enter-detail path. Twenty alternating matching/no-result search changes per catalog returned the expected state. This checks repeated response correctness, not perceived latency, motion quality or long-term satisfaction. The candidate's Escape recovery was also observed.

Clipboard denial/retry was covered by deterministic stubs, not real browser permission denial. Physical devices, Safari/Firefox, assistive technology, text scaling, complete focus traversal, reduced-motion behavior and frame-time performance were not assessed. Some iframe click automation failed; successful theme and copy actions were verified on the direct pages. Early captures taken during theme transitions were not used to infer settled color quality.

[Browser observations](evidence/browser-checks.json) · [Baseline desktop](evidence/one-1280-light.png) · [Candidate desktop](evidence/two-1280-light.png) · [Baseline narrow](evidence/one-390-light.png) · [Candidate narrow](evidence/two-390-light.png)

## Four assessments

| Assessment | Verified or observed | Unresolved | Not assessed |
| --- | --- | --- | --- |
| Correctness | Local tests and common browser paths above succeeded; real copied strings matched the source. | Full browser failure-state coverage remains incomplete. | Installation on a real agent host, denied clipboard permission and external links. |
| Usability | Reviewer walkthrough found both understandable. Baseline has separate Writing/Design filters and visible formatted instructions. Candidate labels terminal versus agent prompt and clarifies local checkout versus pinned display source. | Candidate combines Design & content and hides full instructions in a disclosure with raw monospace text. Baseline's pinned-source wording could be clearer. | Observed users, task timing and production comprehension. |
| Craft | Independent screenshot reviewer preferred the candidate's title hierarchy, skill-name size and narrow headline wrapping. Reflow checks above passed. | Baseline has small mobile supporting text and a three-line italic headline. Candidate's inactive filters are less obviously controls. Both show weak box-like row action glyphs in captures. | Full computed-color audit, animation timing, physical input and comprehensive accessibility. |
| Character | Both have coherent cream/green editorial treatment. Candidate records its thesis, semantic color reasoning and a falsifiable value hypothesis. | Their selected compositions remain similar; no convincing wow moment was established. The candidate alternatives are static layout proposals, not two independently exercised interaction flows. | Owner preference, next-day memorability, long-term appeal and transfer to an unlike product. |

The independent reviewer received anonymized screenshot labels and only the permitted implementation files. It did not receive builder narratives, skill versions or the desired verdict, and did not operate the interfaces. Its preference is a model judgment, not the owner's. Screenshot scroll positions differ, so above-the-fold counts were not treated as comparable measurements.

## Consequences for the workflow

Keep the revised instructions explicitly provisional. They improve the stated process and evidence discipline; this run does not show that they reliably produce superior design. The next valid comparison must give each builder equal access to rendering during exploration and refinement, then include an unlike product and owner preference. Do not replace that evidence with additional adjectives or a larger checklist.

The source review also found a concrete routing conflict: Studio sent direction and implementation craft to Vibe UI while saying to use review mode. The final router now selects brief/build/review according to the task, reserving independent review for assessment. The six documented scope regression requests are prepared but were not all executed; no behavioral pass is claimed for them.
