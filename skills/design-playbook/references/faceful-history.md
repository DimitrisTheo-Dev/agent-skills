# Faceful lessons and evidence boundaries

Reviewed 2026-11-16. This is an original synthesis of the supplied playbook and public
Hackathon-gen-ai repository history. Commits establish changes; repository reports establish what
their authors recorded. A follow-up inspected the current interface and historical captures; the
reusable composition map is in [the Faceful example](look-faceful.md). Performance and accessibility
scans were not rerun. This public reference does not include private session evidence. The submitted
hackathon recording was unavailable. Neither current production nor the last main-branch commit
establishes what judges saw or why the project did or did not place.

## What to retain

| Evidence | Transferable rule | Next-build check |
| --- | --- | --- |
| [Shared domain engine, MCP and billing](https://github.com/DimitrisTheo-Dev/Hackathon-gen-ai/commit/417d6a2625bec88d14bcfd3b7038b96af9a74f07) and [terminal/interface walkthrough](https://github.com/DimitrisTheo-Dev/Hackathon-gen-ai/blob/b0bfb45e9ee61be9d4305d028781cd006886db91/docs/demo/evidence/production/terminal-and-interface-e2e.md) recorded the same drafts and blockers in both surfaces. | Keep UI and agent operations on one domain/state contract. | Create through one client, inspect through the other, then exercise a denied or stale operation. |
| [Focus consolidation and design refresh](https://github.com/DimitrisTheo-Dev/Hackathon-gen-ai/commit/cdbfa9f46887ce838ad5ea584405cf4f880aebb7) corrected cascade precedence, scroll room and whole-row behavior. | Define shared interaction rules once and reconcile docs with actual CSS. | Inspect computed style and operate the full hit region, not only the label. |
| [Failure-state and focus fixes](https://github.com/DimitrisTheo-Dev/Hackathon-gen-ai/commit/172f9ed904106ac6b55d97b9cfa84aa95104e6d3) removed duplicate errors and a loading label that survived failure. | Keep one authoritative state with useful recovery. | Slow success and failure should each produce one understandable view. |
| [Approval preservation](https://github.com/DimitrisTheo-Dev/Hackathon-gen-ai/commit/91048a5228b8256cdd28907b36761e5157cedcbf) made an unchanged schedule reuse its approval. | Retain approval for the same reviewed payload; invalidate it when consequential content changes. | Repeat preparation, then edit content and compare approval behavior. |

## Where effort repeated or integration arrived late

| Evidence | Interpretation and workflow change |
| --- | --- |
| Focus fixes appear in [cdbfa9f](https://github.com/DimitrisTheo-Dev/Hackathon-gen-ai/commit/cdbfa9f46887ce838ad5ea584405cf4f880aebb7), [172f9ed](https://github.com/DimitrisTheo-Dev/Hackathon-gen-ai/commit/172f9ed904106ac6b55d97b9cfa84aa95104e6d3) and [3c1e85f](https://github.com/DimitrisTheo-Dev/Hackathon-gen-ai/commit/3c1e85f49f469b3e3a3a2db7fcd81a944efa5307). | Several instances needed repair. Use a family-wide focus/clipping regression check after a shared change. Commit counts do not measure time wasted. |
| [Documentation fact-check](https://github.com/DimitrisTheo-Dev/Hackathon-gen-ai/commit/ca466bc4ce35bdce45bbedc629b8b27381d606db) and the [readiness report](https://github.com/DimitrisTheo-Dev/Hackathon-gen-ai/blob/b0bfb45e9ee61be9d4305d028781cd006886db91/DEMO_READINESS.md) distinguish implemented work, missing hosted migrations and unconfigured providers. | Check deployment configuration and actual output before expanding dependent surfaces. Attach environment and observation time to readiness; older paragraphs can conflict with newer updates. |
| The terminal/interface report recorded an unavailable renderer and channel, although real draft creation worked. It also describes an API/database region mismatch and a client timeout after a successful write. | Prove the real critical path and inspect authoritative state after an ambiguous timeout. A shared UI/MCP draft path is valuable evidence, but is narrower than a complete rendered-and-published video flow. |
| [Rendered-output attachment](https://github.com/DimitrisTheo-Dev/Hackathon-gen-ai/commit/5c37418eeefd296f50eb79329d9f7087bf89f943) connected the finished reel to the draft's publishable video. | Test each boundary with the actual artifact the next stage consumes; isolated green components do not establish the final outcome. |
| [Late flow clarification](https://github.com/DimitrisTheo-Dev/Hackathon-gen-ai/commit/aeacd9f55b39db968faec14ceffad7f82ee80a26) and [rendering visibility](https://github.com/DimitrisTheo-Dev/Hackathon-gen-ai/commit/fa70c63a7176781f493ebd8ff1255bb64bece0f2) made required steps more discoverable. | Rehearse the intended task before polishing secondary surfaces. Treat first-value comprehension as a checkpoint. |

The readiness document set a 14:00 feature freeze and an 18:00 submission target on 15 November,
Athens time. Commit timestamps place rendered-output attachment at 17:33 and approval preservation
at 17:56. A further [creation/rendering flow
revision](https://github.com/DimitrisTheo-Dev/Hackathon-gen-ai/commit/b6c98e1b07ee25817d292d6ce3f1e53bb19b0879)
arrived at 20:31. These timestamps show integration changing near and after the documented target;
they do not establish deployment times, the actual submission revision, or hours spent on any
feature.

The public landing page inspected on 16 November also said “21 tools” inside its studio illustration
and “13 tools” in its agent section. This is observable copy drift, independent of backend
correctness. Readiness and capability copy need the same current source as the demonstrated flow.
Broad surface coverage and green checks did not establish a complete rendered-and-published outcome
in the late-morning report.

## Claims corrected during this import

- The upload had escaped Markdown, cut-off instructions and missing references/scripts. This package
  supplies complete references and an explicit audit procedure; it does not pretend to recover the
  missing original script.
- The statement that detectors missed every important defect was not independently established.
  Automated checks supplement visual/interaction evidence.
- [Recorded axe
  results](https://github.com/DimitrisTheo-Dev/Hackathon-gen-ai/blob/b0bfb45e9ee61be9d4305d028781cd006886db91/docs/demo/evidence/quality/axe-summary.json)
  report 45 serious/critical nodes before and zero after **with a stated rule/node exclusion**. This
  is scoped automated evidence, not full accessibility conformance.
- [Recorded Lighthouse
  results](https://github.com/DimitrisTheo-Dev/Hackathon-gen-ai/blob/b0bfb45e9ee61be9d4305d028781cd006886db91/docs/demo/evidence/quality/lighthouse-summary.json)
  distinguish local and production-like servers and include nonzero CLS. “Zero layout shift” remains
  a scoped target, not a proven property of the whole product.
- Exact palettes, radii, motion timings, file paths and environment flags belong to their project.
  The reusable rules preserve ownership, truthful state and observed proof without forcing Faceful's
  style on unrelated work.

Public source links are evidence pointers. Faceful's repository states that it grants no general
code license; no source code or media is copied into this package. The new instructions and
synthetic evaluation inputs are original material under this repository's license.
