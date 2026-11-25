# Fresh review brief

Use it when a new screen or flow is about to be called ready. The reviewer must not have built the
candidate and must not see the builder's conversation.

## Send

- The request in the user's words, and who uses the screen for what.
- How to open the candidate: URL or route, and how to reach each state (query string, fixture,
  role). Synthetic data only.
- The render check summary and screenshot paths, when it ran.
- The design contract or design-system rules, by path or link.
- What changed, and what is out of scope.

## Withhold

- The builder's reasoning, the alternatives considered and the known compromises.
- The expected verdict, or any score.
- Earlier findings, unless the review is a recheck of them.

## Ask

```text
Review this interface as someone who did not build it. Operate it; do not only read the code.

Request: <the user's words, and who the screen is for>
Open: <URL, and how to reach each state>
Scope: <what changed>
Rules: <path or link to the design contract or system>
Evidence so far: <render check summary and screenshot paths, or "none">

1. Before reading anything else, look at the first viewport at phone and desktop width. Say what
   the screen is for, what it shows and what to do next. Anything unclear is a finding.
2. Operate the main journey with keyboard and pointer at both widths, including loading, empty
   and error states when they can be reached.
3. Report each finding as location and state, observation, consequence, severity (blocker, major
   or minor) and evidence (screenshot, measurement or steps). Do not propose a redesign.
4. List what you could not check, and why.
```

## Merge

- Reproduce a finding before fixing it. Record a rejected finding with the reason.
- A disputed finding stays open until the rendered result settles it, not the builder's
  explanation.
- After fixes, rerun the affected checks yourself. Ask for another review only when the fix changed
  the structure of the screen.
- Name the reviewer in the report: fresh reviewer or self-review.
