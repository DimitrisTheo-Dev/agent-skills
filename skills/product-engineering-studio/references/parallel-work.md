# Parallel work

Read before splitting a build across subagents or worktrees.

## The gate

Delegate implementation only when all five hold:

1. Each task has a bounded outcome and its own check, and can progress while its sibling runs.
2. Shared interfaces and invariants are settled for this checkpoint. The lead owns contract changes.
3. Files are disjoint, or each worker has its own worktree and there is a merge plan.
4. The time saved beats dispatch, waiting, review and merge, with budget left to integrate and
   verify.
5. The host supports subagents and the concurrency you need.

When it fails, work sequentially or settle the blocking contract first. Read-only research or an
independent review can still run alongside.

| Work | Mode |
| --- | --- |
| One fix, a short slice, or heavily shared files | One agent |
| One risky dependency plus open questions | Lead takes the dependency; workers do read-only research or review |
| Two independent tasks with stable contracts | Lead plus one or two workers |
| Two or three open design directions | Workers build disjoint variants on the same content; the lead compares renders and picks one |
| Several independent features over days | Phased: start small, add workers after a clean integration |

## Before dispatch

The lead settles scaffolding, dependencies, shared types, tokens, manifests and lockfiles first,
then records the slice outcome and AC IDs, the baseline revision and real commands, the shared
request and response shapes with their errors, and each owner's allowed paths.

- In one checkout, serialize installs and builds that share output directories. Branches alone do
  not isolate working files.
- A worktree needs its own dependency install. Keep `node_modules` and build directories unshared.
- Give each server an owned port and each capture a private output path. Stop only processes this
  task started.
- Wait for a meaningful rendered element before driving a page; a polling app never reaches network
  idle.
- Before renaming a visible label, check accessible-name selectors and sibling tests.

## Worker packet

```text
Outcome / AC IDs: one observable part of the current slice
Baseline: revision, project commands, accepted design contract
You own: exact paths
Lead owns: tokens, shared state and contracts, manifests, lockfiles
Contract: inputs, outputs, error cases, mock boundaries
Prove it: input, expected result, check to run, capture to return
Stop: at this checkpoint; report blockers and needed contract changes early
Return: changed paths, actual check output, limits
```

Keep packets to 150 to 350 words. Send the brief once; later packets carry only the change.

## Integrate at every checkpoint

1. Read the actual diff, new files included. In a shared checkout, worker edits are already there.
2. Run the slice's real user flow on the integrated candidate. Green worker checks are a pointer,
   not proof of integration.
3. Exercise failure and stale-state cases, and note which dependencies were real.
4. Report behavior, evidence, gaps and the next step, then reassess owners.

Reduce concurrency when workers overlap, wait on contracts or outrun review. Stop adding features
when integration or verification falls behind.

## One design across workers

When several workers build one accepted design, write the contract once in the project's design
record (`DESIGN.md` or its equivalent), pointing at token and component sources: identity zones,
main action, states and owner corrections. Turn each owner correction into their words, a scoped
rule and a check that reproduces it; "too much" names the repeated fact or competing action. Send
returning focus, hit-target and layout-shift defects through ui-quality-gate's recurring-defect
checks.
