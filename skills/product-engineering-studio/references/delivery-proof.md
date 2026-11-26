# Delivery proof

Use when the work depends on an external provider, several services or a timed demo. A local UI fix
needs none of this.

## Work backward from the result

Name the first useful outcome and list only the steps it needs. For each boundary, write the input,
the output its consumer needs, the owner and the failure. "Create a draft, queue a render, get a
playable video, attach it to an approvable post" is four outcomes. Finish that path before
secondary screens, settings or animation.

## Prove the real output

- Read the provider's documentation or the existing adapter, and call real endpoints.
- Check access, migrations and configuration before building on them. When the UI shows an error,
  inspect migration state and provider configuration before debugging the frontend.
- Each check proves only what it touched. A health 200, a queued job, a unit mock or an uploaded
  text file proves that narrower step. For media, play the file, confirm it persisted and confirm
  the next stage accepts it. For a claim about an agent client, use that client, not only direct
  HTTP.
- After an ambiguous timeout, read the authoritative state before retrying anything that could
  repeat a side effect.
- Work in the authorized test environment. For a real post or payment, prepare it and stop for the
  user's go-ahead.

## Keep one readiness table

| Capability | Environment | Revision | State | Evidence and time | Next action |
| --- | --- | --- | --- | --- | --- |
| Render a playable reel | Staging | `a1b2c3d` | Verified locally | MP4 plays, 14 s, 10:40 | Attach to post on staging |

States: implemented, verified locally, verified live, blocked, deferred. Update the row when a
blocker changes instead of adding a new paragraph, and keep fixture and replay evidence labelled.

## Timed demos

Set a feature freeze from the real deadline. Keep the last quarter for integration, a cold-start
rehearsal on a configured account with known seed data, and a look at the actual output. When the
critical path is behind, cut optional surfaces and workers first. A labelled replay can stand in for
a flaky live step; consent, permissions and data integrity stay real.

## Deliver the true scope

State what the user can do now, what was exercised and what is blocked, with the revision and
environment. Visual quality, implementation and live-service success are three separate claims.
