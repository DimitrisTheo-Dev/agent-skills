# Quality record

Use this for substantial flows. Keep it with the project's existing verification evidence. Small fixes and review-only requests can report the same facts in prose without creating files. The gate is a record of an actual review, not a questionnaire to fill optimistically.

Required JSON shape (values below are descriptions, not a passing example):

```json
{
  "scope": "flow",
  "candidate": {"src/view.tsx": "actual SHA-256 of inspected file"},
  "evidence": [
    {"id": "mobile", "path": "evidence/mobile.png", "sha256": "actual SHA-256", "kind": "image"},
    {"id": "journey", "path": "evidence/journey.txt", "sha256": "actual SHA-256", "kind": "interaction"}
  ],
  "areas": [
    {"id": "task", "status": "pass", "observation": "Actual action and observed outcome, including limits", "evidence": ["journey"]}
  ],
  "findings": [
    {"id": "F1", "areas": ["responsive", "interaction"], "severity": "major", "status": "resolved", "location": "390px search results", "observation": "Observed problem and consequence", "resolution": "Change made and observed correction", "evidence": ["mobile", "journey"]}
  ],
  "verdict": "unverified"
}
```

For `flow`, include all twelve area IDs: task, structure, terminology, typography, spacing, color, components, states, interaction, responsive, accessibility, character. For `fix`, include affected areas and name the narrow boundary in each observation. Each status is pass, fail, unverified or na; na requires an explicit applicability reason in observation. Pass requires evidence. Findings use blocker/major/minor and open/resolved/accepted. Only minor findings may be accepted, with a resolution/tradeoff explanation. Resolved findings must list affected inspected area IDs in `areas`; their recheck evidence must meet the same visual/operated modality requirements as those areas. A source edit alone cannot close a rendered or behavioral finding. Existing records with resolved findings need this field before revalidation.

Evidence kinds: image, recording, interaction, measurement, source. Logs must record executed input, observed outcome, viewport/theme/runtime and relevant limitation. An image cannot establish timing or keyboard behavior. Measurements must include the method and values. Source inspection alone cannot pass rendered areas or accessibility, whose essential keyboard path must be operated. Fingerprint the implementation boundary in `candidate`, including relevant source, shared styles/components, configuration and assets even when those dependencies were unchanged by the fix. Use project-relative paths and record the boundary in the inspection log. Alternatively include a reproducible build/source manifest covering that boundary, then inspect that manifest's actual coverage. Store actual evidence as project-relative regular files with hashes; update the review after affected changes.

Verdict is blocked for failed areas or open blocker/major findings; otherwise unverified for unverified areas; otherwise ready. Ready still means a scoped reviewer assessment, not objective beauty or universal device coverage. Record unavailable checks honestly instead of marking them na.

For captures and interaction logs, record the source fingerprint, route, runtime and capture conditions at the time of inspection. Verify that the running preview serves that candidate after rebuilding/reloading as appropriate. Updating candidate hashes while retaining affected older captures does not refresh the evidence.

The checker verifies record completeness, evidence references, file existence/content hashes and verdict consistency. It cannot establish that an image was generated from the stated source revision, detect fabricated observations or judge the images. Hashes show file integrity, not capture provenance. The reviewer must inspect the files. Do not fabricate recordings, measured timings or user tests to satisfy it.
