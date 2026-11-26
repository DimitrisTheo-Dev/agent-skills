# Close returning defects with observed checks

Use only the rows relevant to this change. Geometry and motion specialists own fixes, with the
diagnostic paths in [craft recipes](craft-recipes.md); this gate owns the recheck on the integrated
candidate.

| Symptom | Reproducing check | Evidence needed to close |
| --- | --- | --- |
| Focus line clips or doubles | Keyboard through first/last controls at both scroll extremes and changed breakpoints; inspect all clipping ancestors and computed outline/border/shadow. | Focused captures plus operated path. Include cascade layer, fade/mask and forced-colors checks when implicated. |
| Whole-row click shrinks during press | Activate label and row edges during pointer-down/release; cancel a press; use keyboard. Inspect transformed containing blocks and stretched pseudo-elements. | Actual action at each target, stable hit-region observation and recording if temporal. |
| Hover flicker or moving target | Sweep across adjacent controls repeatedly while feedback runs. | Observed cursor/hover sequence and hit regions; a still image is insufficient. |
| “No wobble” | Name the element and transition, sample its geometry across state/font/media changes. Separately observe page CLS under named conditions. | Actual deltas, method, runtime and sample window. Do not replace measured values with desired zeros. |
| Skeleton/error churn | Exercise immediate success, slow success and failure from the real state owner. | One coherent loading-to-result/recovery sequence; compare shell/content metrics and labels. |
| Old evidence after merge | Match running build and source boundary to capture metadata; rerun affected checks. | Fresh observations for affected states, retaining older reports only as history. |

Automated scans do not establish all visual, keyboard or assistive-technology behavior. State
rule/node exclusions and severity filters next to scan totals. Browser support claims require the
corresponding executed runtime; CSS viewport emulation does not prove native mobile behavior.
Compare first-value comprehension before minor decoration, and keep visual readiness separate from
the real service's ability to complete the task.
