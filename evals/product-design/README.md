# Product design comparison

Exercise the workflow on actual output. Metadata validation and instruction compliance are not
evidence of compelling design.

## Catalog pilot

Give two fresh agents the same task and content, with one skill revision per agent. Fix model,
effort, tools, attempts and budget. Keep outputs and the assessment rubric separate from the
builders. Record any shared-host or evidence restrictions. Use local artifacts; no deployment or
live account changes are part of this evaluation.

Read [the task](task.md) and [the assessor rubric](rubric.md). The rubric belongs only to the
assessor. The first pilot uses the four real skills at repository revision
`bd1aa8023c73064a330ceede91530ee289d3e259`; this avoids changing content between attempts as Studio
is added to the catalog.

The first pair withheld browser access from builders and therefore did not test the full workflow.
The [second task](round2/task.md) corrects that limitation: both builders can render and refine
within an equal 16-minute ceiling. Keep the two rounds separate when interpreting the results.

Record the exact skill/content snapshots, attempt start/end, tool constraints, corrections,
artifacts and executed checks. Judge anonymized outputs in counterbalanced order where possible.
Model preference and walkthroughs must be labelled as such. Owner preference and next-day recall
remain unassessed until supplied; never invent them.

A useful result improves character and product fit while preserving comprehension, task completion
and appropriate performance. One pair is diagnostic. Before claiming the workflow reliably improves
design, repeat on an unlike product and check that it produces different, justified design choices
rather than a house style.

## Regression cases

Use the current skill on [the bounded requests](regressions.md) in fresh contexts. These cover small
fixes, existing product extensions, review-only mode, absent references/tools, failed moment
hypotheses and backend-only work. Keep [rubric.md](rubric.md) outside the agent inputs. Observe
behavior rather than checking whether certain words occur in its answer.

The [localized-button case](regression-fix/RESULT.md) was executed. Its source change stayed within
scope; actual 390px rendering remains unverified. The other five cases are prepared, not claimed as
behavioral passes.

## Creative regression suite (prepared, not yet executed)

[Creative regression scenarios](creative-regressions.md) add four cases covering a polished generic
SaaS page, decorative art displacing an authentic avatar, cosmetic variants disguised as concepts,
and a restrained product-specific design that must not be over-styled. Run these in isolated blinded
baseline/candidate sessions before attributing any improvement to the new instructions. Existing
validation and repository checks alone cannot establish superior taste or visual outcomes.

## Product judgment comparison, 2026-11-18

Two fresh Codex sessions each answered the same four read-only requests using one skill snapshot in
a separate temporary directory. The sessions shared a host and had no model overrides, rubric or
prior answers. The lead assessed the responses against a separate rubric. Both met the material
criteria on all four cases.

| Request | Observed decisions |
| --- | --- |
| Test voicemail extraction before committing to a feature | Both chose a small editable-draft trial and timed review and corrections against manual entry. The revised response deliberately seeded a wrong date if the tool produced none and left demand and live scheduling untested. |
| Improve first and repeat value for quarterly grant reports | Both proposed editable reuse of confirmed details and measured real submissions and corrections. The revised response consulted Product Readiness, made reminders optional and stopped them on submission. |
| Critique an operating screen from a screenshot | Both identified the buried command and misleading input-like surface in the [catalog capture](../interface-restraint/evidence/review-01-desktop.png). Both proposed moving the command and copy action together within the existing layout and kept runtime behavior unverified. |
| Scope a select chevron repair | Both proposed a bounded geometry fix with long-label and keyboard checks. The revised response used a focused UI gate and omitted the launch-baseline reference. |

Baseline was `60b1e1ee0b27d9b5b0b32320d52a24f121b20c34`. Both bundles contained 95 skill files.
Their manifest SHA-256 digests were
`917a8ad392eadb540a7695a454a87262c68592dca4e39cff411cb723d0b66b99` and
`b1fe67cb0712247b964d57e5a46994e031848bb02a0d389e5c6baeeee8dbe017` in baseline/candidate order.
Manifests are sorted relative paths with NUL-separated file hashes and newline-separated records.
Requests, snapshots, responses and scoring criteria are retained locally under
`.eval-results/product-judgment`.

This single pair samples decisions and screenshot critique. It leaves implementation quality, real
task completion and repeat usage unmeasured.

## Evidence

[Results](RESULTS.md) records actual runs and limits. Raw local traces and snapshots are kept under
the ignored `.eval-results/` directory. Sanitized browser artifacts and source outputs are included
only when they contain no private data. Do not claim external participant tests, device coverage or
skill causality from this small comparison.
