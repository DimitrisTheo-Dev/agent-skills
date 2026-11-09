# Contributing

Add knowledge that changes an agent's decisions or makes a difficult workflow repeatable. Explain the evidence, intended triggers, and overlap with existing skills before adding a new skill. Prefer one coherent workflow over a collection of protocol wrappers.

## Layout and authoring

- Use `skills/<lowercase-hyphenated-name>/SKILL.md`; the frontmatter name must match its folder. Follow the [Agent Skills specification](https://agentskills.io/specification).
- Put precise discovery triggers in the description. Keep shared scope, mode selection, and execution decisions in SKILL.md. Move conditional detail into linked references with clear loading conditions.
- Keep each skill self-contained. References cannot rely on another skill or a maintainer's absolute filesystem paths. Optional `agents/openai.yaml` metadata must agree with the name and invocation behavior.
- Add scripts only when deterministic execution earns their maintenance cost. State dependencies, inputs, outputs, side effects, bounds, and failure behavior. Test observable behavior, including failure paths. Never conceal network activity or mutate targets during a read-only mode.
- Use original prose and synthetic fixtures. Attribute primary sources with URLs, verification dates, maturity/version, and license boundaries. Separate normative requirements, implementation advice, and empirical evidence. Do not include secrets, private captures, employer code, internal endpoints, or proprietary documentation.

Use the built-in `$skill-creator` when available. Its quick validator is useful author feedback, not a substitute for behavioral evaluation. Avoid maintaining a second skill README that repeats the root catalog and the entrypoint.

## Verification

Run `python scripts/check.py` with the development dependencies installed. CI uses the same entrypoint, which runs `scripts/validate.py` and the unit tests. The validator uses the pinned official `skills-ref` demonstration package plus repository checks. Update the source dependency revision in a separate reviewed change and rerun validation. Check changed external sources manually and record the date.

For a substantial workflow, add realistic scenarios under `evals/<skill>/` with raw artifacts, requests, and a separate scoring rubric. Include cases that should not activate the skill, inapplicable branches, incomplete evidence, and unsafe proposed fixes. Test trigger selection and behavior separately. An independent agent should see only the skill, request, and raw artifacts, without the expected answer. Use isolated temporary workspaces and authorized local services. Do not use live accounts or billable services without the user's authorization.

Compare revisions for behavioral changes and record evidence and limits using the [evaluation workflow](evals/README.md). Treat fixture and validator results as infrastructure evidence. Share only sanitized evidence that can be traced to the evaluated revision.

## Submit a change

Include the problem and resulting behavior, source updates, meaningful validation results, and known limitations. Update the catalog only when its public behavior changes. Inspect the complete diff for unrelated changes, stale placeholders, broken links, and confidential material. CI must pass before merging. No automatic publishing, installation into a user's environment, or external messaging belongs in validation.
