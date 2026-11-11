# Catalog comparison results

Historical record of the first candidate, before the operational quality-gate revision. Its adoption decision below describes that point in time. See [the current revision and verification](quality-gate-v2.md) for the subsequent authorized updates; these earlier results have not been rewritten into a positive outcome.

**Status: diagnostic comparisons, not proof of reliable design quality.** Two paired builds exercised the same real catalog content. The first pair restricted browser access during building; a second pair corrected that limitation. Results below distinguish actual interaction evidence, builder judgments and independent model review. Owner preference, next-day recall and transfer to an unlike product remain unassessed.

## First pair: setup

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

## First-pair consequences

Keep the revised instructions explicitly provisional. They improve the stated process and evidence discipline; this run does not show that they reliably produce superior design. The second pair below gives each builder equal access to rendering during exploration and refinement. An unlike product and owner preference are still needed. Do not replace that evidence with additional adjectives or a larger checklist.

The source review also found a concrete routing conflict: Studio sent direction and implementation craft to Vibe UI while saying to use review mode. The final router now selects brief/build/review according to the task, reserving independent review for assessment.

## Second pair: browser access during the build

Two new agents used the same input content and inherited model/effort configuration, with one attempt and a 16-minute ceiling each. They had equal access to the existing preview, separate browser tabs and output directories, no other outputs or rubric, and no owner design corrections. Shared storage is not OS-enforced isolation. The exact backend model identifier was not exposed. The candidate used the final routed workflow at `a8687c05b39f5b735fa4b5adfd20b0109120c87f`; [hashes](snapshots.json) preserve the actual inputs and outputs.

| Run | Actual interval, UTC | Runtime | Preserved output |
| --- | --- | --- | --- |
| One: baseline | 14:03:26–14:17:59 | 14m 33s | [Catalog](round2/artifacts/one/index.html), [builder record](round2/artifacts/one/BUILD.md) |
| Two: candidate | 14:03:43–14:18:32 | 14m 49s | [Catalog](round2/artifacts/two/index.html), [builder record](round2/artifacts/two/BUILD.md), [directions](round2/artifacts/two/exploration.html), [design contract](round2/artifacts/two/DESIGN.md) |

Both builders observed search/filtering, source/examples, exact clipboard values, theme changes, narrow browse/detail navigation and keyboard controls. Both exercised clipboard-failure recovery through an explicit rejection fixture, not real permission denial. Baseline measured CSS widths 390/768/1440; candidate measured 390/760/1024/1440. Their document client and scroll widths matched in the measured states. These are CSS iframe checks in Chrome, not physical mobile-device tests. The candidate additionally retained computed color-pair measurements and three repeated copy activations. Neither measured interaction latency or long-term appeal.

The lead independently reran JavaScript syntax checks and compared every bundled input field with the frozen dataset: both matched exactly. Browser observations in this round come from the builders, with screenshots retained for independent visual assessment; the lead did not repeat every interaction. Both builders replaced unsupported arrow glyphs after viewing the page, showing a concrete benefit of rendering during implementation.

[Baseline desktop](round2/evidence/one-desktop.jpg) · [Candidate desktop](round2/evidence/two-desktop.png) · [Baseline narrow](round2/evidence/one-390.jpg) · [Candidate narrow](round2/evidence/two-390.png) · [Rendered alternatives](round2/evidence/two-directions.png)

The candidate compared two compositions on the same content, selected the reference index and recorded its reasons. Its choice of cream/forest/monospace remains similar to earlier outputs. That is an observation, not proof of a fixed house style. The comparison does not establish that the selected direction is the best possible design or that a utility catalog needs spectacle.

### Independent assessment of the second pair

A new reviewer inspected the candidate first, then the baseline, using anonymized screenshots and only each implementation's index and application script. It did not receive skill versions, builder narratives, prior results or a desired verdict. It did not operate either interface. This counterbalances the first review's order; it is still one model judgment, not owner preference or user research.

The reviewer preferred **the baseline for the overall task by a modest margin, and for visual craft more clearly**. Its compact mobile summaries expose more of the collection, and its installation-then-invocation sequence fits both commands in the supplied detail capture. The serif headings, orange accents and index structure were judged more individually authored. Candidate strengths include source provenance with commit information, example-file copying and addressable sections. Its long introduction and verbose mobile rows make discovery slower in the reviewer's walkthrough; its search also excludes full instruction content, which the baseline searches.

The baseline's largest identified weakness is provenance and section navigation: it does not expose the source commit identifier in its source view, and selected tabs are not directly addressable. Neither output demonstrates a credible wow moment in the supplied evidence. The baseline shows coherent product character; the candidate's technical-reference styling was judged less distinctive. Exact source fidelity and actual copy outcomes come from the separate executed checks, not this screenshot review.

### Adoption decision

**Do not promote this candidate as the default or claim a quality improvement.** The approved plan requires better output before adoption. The first reviewer preferred candidate presentation but baseline task fit; the second preferred baseline on both. Owner preference, memorable value and an unlike-product comparison are still missing. The candidate remains in a draft pull request; installed Studio and Vibe UI instructions were restored to their original versions. The service rejected disabling the newly installed Vibe UI, so restoring its original instructions was the fallback.

The next revision should investigate why extra exploration and documentation did not improve the selected output. The observed gaps are excessive mobile introduction/row density and weak differentiation between directions. Compare the real task at the same viewport before spending effort on the contract. Preserve useful provenance and recovery work. Do not turn one catalog's result into a universal ban on headings, prose, cards or colors, and do not keep adding criteria until a model agrees.

## Scope regression

A fresh agent received the final workflow and only a localized button-clipping fixture with approved appearance and behavior. It changed the fixed width and nowrap/clipping rules, preserved the palette, type and click handler, and did not start a redesign or variant exercise. The lead inspected the exact diff. Browser evidence confirmed the full label and original click response at the default desktop viewport. The agent calculated that it fits 390px but did not render that viewport, so that part remains unverified. [Record and limitation](regression-fix/RESULT.md).

The other five scope cases are prepared, not executed. No full regression pass is claimed.
