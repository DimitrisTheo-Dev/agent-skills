# Agent Skills catalog

Local, dependency-free prototype for engineers finding a skill, checking its scope, and copying installation and invocation text.

- Start recorded: **2026-11-11T13:35:29Z**
- End recorded: **2026-11-11T13:46:13Z**
- Execution: one executor; one implementation attempt including self-review; only `pilot/one/` written. No server, browser, installation, deployment, account action, repository commit, or evaluation suite run.
- Entry point: `index.html`. It works without a build or data fetch. Detail example: `index.html#/skill/vibe-ui`.

## Decisions

Chose an editorial field guide over a terminal-console direction: a numbered, compact directory makes four real descriptions easy to compare, while monospace command blocks keep executable text distinct. Warm neutral surfaces and restrained green accents support light and dark themes. The signature interaction is the direct path from a browse row to source instructions and an exact install/invoke panel.

Source of truth is `../../pilot-inputs/skills.json`, copied losslessly into `data.js`. Names, descriptions, setup text, commands, invocations, source URLs, instructions, and examples are unchanged. Task categories are editorial groupings derived from those descriptions. Three skills have no supplied examples; their detail pages say so. No performance, adoption, compatibility, or evaluation claims were added.

Architecture: static HTML and CSS, local data, pure search/routing/copy helpers, and a small DOM controller. Search matches all entered terms across names, descriptions, and categories; category filtering combines with search. Hash routes work on local files and preserve catalog filters during navigation. Theme preference is local only. There is no backend or remote data boundary; source text is escaped before rendering. Markdown support is intentionally small, with original SKILL.md text also available.

## Acceptance and evidence

| ID | Intended behavior | Actual evidence |
|---|---|---|
| AC1 | Browse and search the four real skills; recover from no results | Search/category/no-result helpers pass; UI wiring reviewed in source |
| AC2 | Open each detail and read honest source/examples | All four routes and all instruction/example rendering checks pass; original fields compare exactly |
| AC3 | Copy the exact installation/invocation; recover from denial | Successful, rejected, and absent clipboard writers pass; manual-copy dialog implemented; browser interaction unverified |
| AC4 | Use light/dark and 390–1440 px layouts | Responsive CSS and theme toggle implemented; text/control contrast calculated; rendered layout unverified |
| AC5 | Keyboard and recoverable missing states | Focus styles, skip link, tab arrows/Home/End, route fallback, native dialog, live feedback reviewed in source; browser/assistive-tech checks pending |

## Checks actually run

- `node --check app.js`, `node --check core.js`, `node --check data.js`: passed.
- `node check.cjs`: **22 checks passed**. Covers input fidelity, local asset references, search/filter/no-results, all routes, example availability, escaped text, instruction rendering, unsafe-link rejection, exact command copying, and clipboard failure.
- Python HTMLParser read `index.html`; CSS block braces balanced. These are structural checks, not browser validation.
- Calculated primary/muted/accent text contrast against the canvas: light **14.26 / 4.95 / 7.34**, dark **15.24 / 7.65 / 12.42**. Control border contrast against surface: light **3.83**, dark **3.98**. These checks do not establish overall accessibility conformance.
- Self-review fixed a template syntax error, repeated-copy reset timing, skip-link routing, and mobile detail focus order. Relevant syntax and behavior checks were rerun afterward.

## Remaining limits and next checkpoint

No browser/computer tools were used, per the task boundary. Actual composition, overflow, text wrapping, keyboard focus traversal, native dialog behavior, clipboard permission behavior, persisted theme, reduced motion, and mobile interaction were **not observed**. The lead owns rendered review at 390, intermediate widths, and 1440 px in both themes, including no-results, missing-detail, no-examples, copied, and rejected-copy states. Source links were not fetched online. A complete Markdown implementation, remote updates, installation execution, and production deployment are outside scope.

Session state: implementation and source self-review complete; 22 local checks pass; browser verification pending with lead. No worker dependencies. Main procedure: the specified baseline Product Engineering Studio; supporting UI guidance: only its adjacent vibe-ui and relevant craft/QA references. No other skill version was read.
