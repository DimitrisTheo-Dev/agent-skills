# Affordance guidance comparison

2026-11-11. Two fresh agents reviewed the same previous desktop screenshot, the same task and separate instruction snapshots. Each was given only its directory, the task and the applicable skill sources. Neither received the user's specific criticism, the expected findings or the other response. No model overrides were used. Their outputs are retained verbatim. Shared filesystems are not cryptographic isolation.

Baseline: branch revision `3e8b5f52f91d88e26bc8936c4aff75ea31534a40`. Candidate: the four skill updates in this commit, with file hashes in `affordance-snapshots.json`. A later source-note table correction only removed blank lines; the snapshot preserves exactly what the reviewer received. Artifact: `evidence/review-01-desktop.png`. The task asked for at most three prioritized visual findings about browsing, inspecting and copying from a small skill library. This is a critique comparison, not two independent builds.

| Observed finding | Baseline | Candidate |
| --- | --- | --- |
| Static invocation resembles an editable input | Not flagged | Flagged; proposed selectable code and adjacent Copy |
| Capability checkmarks imply completed state | Not flagged | Flagged; proposed neutral bullets |
| Colored tiles may invent product identities | Not flagged | Flagged conditionally; preserve if canonical assets |
| Claims interaction from a still | No | No |

The baseline reported one minor issue about an emphasized unlabeled header icon; the screenshot includes a pointer highlight, so that emphasis is not reliable evidence of product styling. The candidate rated all three findings minor. These responses support a narrow change in what the guidance makes reviewers notice. They do not establish severity calibration, deterministic taste, a success rate or the quality of future builds. The implementation was revised by the lead with direct owner feedback, so its outcome cannot be attributed to the skill additions alone.

[Baseline response](affordance-baseline-critique.md) · [Candidate response](affordance-candidate-critique.md)
