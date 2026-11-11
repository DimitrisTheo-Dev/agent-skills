# Product design comparison

Exercise the workflow on actual output. Metadata validation and instruction compliance are not evidence of compelling design.

## Catalog pilot

Give two fresh agents the same task and content, with one skill revision per agent. Fix model, effort, tools, attempts and budget. Keep outputs and the assessment rubric separate from the builders. Record any shared-host or evidence restrictions. Use local artifacts; no deployment or live account changes are part of this evaluation.

Read [the task](task.md) and [the assessor rubric](rubric.md). The rubric belongs only to the assessor. The first pilot uses the four real skills at repository revision `bd1aa8023c73064a330ceede91530ee289d3e259`; this avoids changing content between attempts as Studio is added to the catalog.

Record the exact skill/content snapshots, attempt start/end, tool constraints, corrections, artifacts and executed checks. Judge anonymized outputs in counterbalanced order where possible. Model preference and walkthroughs must be labelled as such. Owner preference and next-day recall remain unassessed until supplied; never invent them.

A useful result improves character and product fit while preserving comprehension, task completion and appropriate performance. One pair is diagnostic. Before claiming the workflow reliably improves design, repeat on an unlike product and check that it produces different, justified design choices rather than a house style.

## Regression cases

Use the current skill on [the bounded requests](regressions.md) in fresh contexts. These cover small fixes, existing product extensions, review-only mode, absent references/tools, failed moment hypotheses and backend-only work. Keep [rubric.md](rubric.md) outside the agent inputs. Observe behavior rather than checking whether certain words occur in its answer.

## Evidence

[Results](RESULTS.md) records actual runs and limits. Raw local traces and snapshots are kept under the ignored `.eval-results/` directory. Sanitized browser artifacts and source outputs are included only when they contain no private data. Do not claim external participant tests, device coverage or skill causality from this small comparison.
