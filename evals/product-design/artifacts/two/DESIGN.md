# Skill Index design contract

## Product reading
- Purpose: help an engineer choose a skill and copy correct setup/invocation text. Commands must stay attached to prerequisites and source.
- Audience: engineers using a coding agent. Use readable task descriptions, exact skill names, and familiar terminal/prompt labels; assume no knowledge of this collection.
- Actual content: four skills with names, descriptions, pinned GitHub URLs, commands, instructions, and two example files only for vibe-ui. Do not add popularity, quality, compatibility, or evaluation claims.
- Personality (proposal): practical, attentive, slightly editorial. Serif emphasis adds a human note beside literal monospace names and commands.
- Platform: responsive web, pointer and keyboard, likely occasional discovery then frequent copy. No accounts, remote data, installs, or state beyond local theme preference.

## Direction
Shape depth. Two structural proposals are retained in `exploration.html` on identical real descriptions. Selected A: editorial index with dedicated details. Provisional rejection of B: a task-card shelf makes the four long descriptions dense and overstates taxonomy. These are unrendered proposals: browser/computer use was forbidden for this worker, so the requirement to compare rendered alternatives could not be completed. The final selection is reversible and is not a visual-quality verdict.

The thesis is an engineer's compact field index: expressive headline; precise, numbered rows; source before claims; commands in a companion panel. Category labels are editorial grouping derived from descriptions. No external visual references were requested or fetched.

## System
Tokens live only in `styles.css`. Light uses warm paper and green actions; dark uses deep green-neutral surfaces and pale green actions. Rough target proportions: 85% quiet surface, 10% text/dividers, 5% accent. On detail, a dark code surface makes executable text distinct from explanation. Error red always accompanies explicit failure copy. No imagery, texture, or fabricated UI evidence.

Arial/Helvetica utility text, Georgia headline emphasis, system monospace for names/source/commands. Straight horizontal rules make row comparison legible. Small corner radii distinguish controls from unboxed editorial content. At <=760px, rows recompose and the command panel moves ahead of source/explanations. No fixed bottom controls or viewport-height traps. Dark and light are manual toggles, with initial system preference and best-effort local persistence.

## Value moment hypothesis
Trigger: open a skill. Benefit: the exact installation and invocation appear with setup and source conditions. Intended feeling: confidence without extra assembly. Visible behavior: dedicated detail page, paired command blocks, confirmed success only after clipboard resolves; permission/unavailable failures offer selectable text. This is everyday utility, not spectacle. Second/20th/500th use should remain immediate; this is a hypothesis, not measured retention or speed. Cost: a static route and two clipboard actions. Keyboard access, live status, visible source text and reduced-motion styles supply alternatives. Confirmation would be successful cold-start selection and copying without losing prerequisites; refutation would be confusion between source revision and local checkout or inability to recover from clipboard denial. Rejected animated terminal typing: it would manufacture execution and delay copying.

Actual browser repeat count: 0. Non-browser behavior checks are documented in BUILD.md. No claim of native feel or long-term appeal.

## Review boundary
One source-review/correction round plus deterministic behavior checks within a 12-minute cap. Correctness can be partially checked without a browser. Usability, rendered craft, character, focus behavior, 390–1440px layout, computed contrast and motion remain unverified until the lead renders the result. No independent design reviewer was authorized for this worker.
