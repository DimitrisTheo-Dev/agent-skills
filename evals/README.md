# Compare skill revisions

Use this manual workflow when a proposed edit changes skill selection, agent decisions, or what
counts as verified. Start with one observed failure and one proposed instruction change. Recreate
session failures with synthetic inputs before adding them to this public repository.

## Run a comparison

1. Freeze the task prompt, starting fixture, acceptance checks, and number of attempts. Include a
   case that reproduces the failure and existing cases that could regress. Keep the scoring rubric
   separate from the inputs given to the agent.
2. Record the baseline and candidate skill revisions. For each attempt, start a fresh agent session
   in an isolated workspace with a fresh copy of the same fixture. Give the agent only the skill
   version being tested and the task inputs. Verify that it loaded that version's `SKILL.md`,
   especially when the same skill is installed globally. Match the host, model, reasoning effort,
   tools, and time budget across versions. Keep the other skill version, rubric, and prior results
   outside the agent's access.
3. Apply the same acceptance checks to each result. Run checks against the actual output and use the
   rubric for judgments such as scope or truthful reporting. Record a blocked run separately when
   the environment prevents an attempt. A single pair is exploratory, so repeat uncertain results
   before treating them as a regression or improvement.
4. Compare outcomes first. Review any regressions and use timing and corrections to judge the change
   when both versions meet acceptance. Propose the change for manual review with the cases,
   evidence, and limits.

Record the host and settings once per comparison. Save raw logs and diffs locally under the ignored
`.eval-results/` directory, outside the evaluated workspaces. Include only sanitized results in the
review.

| Case | Skill revision | Attempt | Outcome | Seconds to first verified result | Human corrections | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| Scenario ID | Commit or snapshot ID | Pair and attempt number | Pass, partial, fail, or blocked | From task submission to the first passing check that exercises the requested change, when observed | Number of messages that redirected or corrected the work | Command or observation, result, and output revision |

## Skill routing

`evals/routing` holds 14 requests, each with the skill that should answer it, plus one backend-only
request that must start no UI skill. Run it with the Claude Code eval runner, which loads only this
plugin:

```sh
claude plugin eval . --ablation none --no-publish --runs 3
```

Results on 2026-11-25 (3 runs per case, Claude Code 2.1.332):

| Plugin | Correct runs | Note |
| --- | --- | --- |
| 1.1.0, 13 skills | 42 of 42 | A request about one concern went to its own skill or to vibe-ui |
| 2.0.0 draft, 5 skills | 41 of 42 | One color request was answered without a skill |
| 2.0.0, 5 skills | 42 of 42 | vibe-ui's description names single-concern requests; color 6 of 6 alone |

Cases for skills folded into others in 2.0.0 (design specialists, design playbook, agent
readiness) describe those skills as they were evaluated then.

## Studio brief

`evals/studio/brief-first` asks for a plan and first work packet for an AI reply drafter grounded in
help-center articles. Five LLM graders check risk-first order, observable acceptance, one
end-to-end first slice, untrusted email input and mock-versus-live labelling.

```sh
claude plugin eval . --case "*brief-first*" --runs 3 --no-publish
```

Results on 2026-11-26 (3 runs per arm, Claude Code 2.1.332, the Skill grader left out of the score):

| Arm | Score | Grader passes | Turns per run |
| --- | --- | --- | --- |
| No plugin | 0.13 | 2 of 15 | 2 to 4 |
| Studio 2.1.0, 1,613 lines | 0.73 | 11 of 15 | 6 to 7 |
| Studio 2.2.0, 244 lines | 0.80 | 12 of 15 | 5 |

Both Studio versions sometimes open with repository inspection instead of the model spike, which
fails `risk-first` and `thin-slice`. Three runs per arm is exploratory.

## Start with an existing case

Replay the readiness implementation exercise with the same synthetic SPA in both variants. A past
run invented a search UI during a public content fix. Use the fixture and assessor rubric to check
public HTML, route status, private access, and scope. Use the other readiness cases or the UI suite
as relevant to the skill under test. [Implementation
exercise](agent-readiness/README.md#implementation-exercise) · [Recorded
failure](agent-readiness/RESULTS.md#failures-ambiguity-and-corrections) · [UI
suite](vibe-ui/README.md)

The comparison method draws on MIT-licensed teaching material from Learn Harness Engineering,
reviewed 2026-11-09. The workflow and fixtures here use original instructions and synthetic inputs.
[Baseline
experiment](https://github.com/walkinglabs/learn-harness-engineering/blob/a9342ff471f2c0e60be0c08b9f4a7c502df4e442/docs/en/projects/project-01-baseline-vs-minimal-harness/index.md)
·
[Capstone](https://github.com/walkinglabs/learn-harness-engineering/blob/a9342ff471f2c0e60be0c08b9f4a7c502df4e442/docs/en/projects/project-06-runtime-observability-and-debugging/index.md)
