---
name: ui-quality-gate
description: Inspect rendered interface quality and drive corrections before delivery. Use for UI quality gates, final design review, visual polish verification, responsive and interaction audits, or when Studio or Vibe UI needs a release decision. Supports read-only critique and authorized implementation; not backend-only code review.
---

# UI Quality Gate

Make inspection repeatable. Measurements establish specific facts; visual judgment still needs concrete evidence and the user's preferences. A working build starts this review, not its verdict. Do not promise deterministic beauty.

## 1. Scope and evidence

Review-only means inspect and report without changing files. Build/polish means repair observed defects in the authorized area and continue. A localized fix reviews its changed component, surrounding layout and affected states; a new product flow reviews all twelve areas below. Backend-only work does not trigger this gate.

Read the brief, design contract, implementation and supplied references. Identify the exact candidate and main journey. Capture the existing view and outcome before editing. Record supported themes, languages, viewports and input methods from the project rather than promising every device.

For a substantial flow, keep a short quality record beside existing verification artifacts using [the report contract](references/report-contract.md). For a small fix or any review-only request, equivalent evidence in the response is enough; do not create a project record unless the user requested that artifact. Keep the working record internal; give the user outcomes and material limits, not twelve reports.

## 2. Inspect from whole flow to details

Read [the inspection matrix](references/inspection-matrix.md). Examine applicable areas in order: task, structure, terminology, typography, spacing, color, components, states, interaction, responsive behavior, accessibility, character. Consult [source mapping](references/source-map.md) when provenance or conflicting guidance matters.

Before the detailed matrix, inspect the first viewport without the builder's explanation. Identify the task, current object and next action. Flag competing text clusters, redundant introductions and controls whose visual prominence exceeds their task importance. Keep necessary labels, consequences and recovery visible. If an unclear hierarchy needs explanatory prose to become usable, reopen structure; record the visible consequence as a major finding. Passing technical checks cannot close it. Later owner rejection reopens the relevant visual finding even after reviewer agreement. Preserve the exact rejected relationship and reason; report a revised candidate without implying owner acceptance.

Operate the main journey without the builder explaining it. Inspect full viewports at normal scale, then component crops, then the whole screen again. Measure suspicious geometry and computed styles instead of guessing pixels from images. Test realistic long content, loading and failure, not only ideal fixtures. Keep first use and repeated use distinct.

For each area record pass, fail, unverified or not applicable, with an observation and evidence. Aesthetic judgments must name a visible relationship and its effect. “Premium”, “looks good” and a self-awarded score do not close a finding. Missing rendering leaves visual and temporal claims unverified; complete useful source checks and state the limit.

### Creative rejection check for major redesigns

For a landing page, rebrand or ambitious visual redesign, inspect the rendered first viewport **without the designer's explanation**. Use the [creative rejection rubric](references/creative-rejection.md) after the standard character questions. Evaluate three distinct risks:

1. **Interchangeability:** Hide the logo. Could another comparable startup reuse the same composition, hero art and feature layout with only a copy/color swap?
2. **Product displacement:** Did decorative art replace an authentic avatar, application screen, customer artifact or other meaningful proof? Can a visitor point to the actual product moment?
3. **Concept collapse:** Were the supposedly different directions only visual restylings of one structure? Is the accepted design merely the most polished variant of a generic template?

When the brief requires a recognizable, distinctive brand, a clearly observed failure is a **major character finding** even if accessibility, component consistency and responsive checks pass. State the visible evidence and consequence; reject readiness and route the fix back to concept/composition, not more gradients, shadows or cards. Do not automatically penalize conventional, evidence-rich pages when the audience or brief calls for restraint. Missing renders mean **unverified**, not a creative pass. A logo-swap thought experiment is a reviewer heuristic, not measured visitor recall or a claim about uniqueness.

## 3. Convert findings into fixes

Compare rendered decisions to the shared design contract and actual token/component sources. Route structure/task problems to ui-ux-patterns, type problems to ui-typography, palette/contrast to ui-color, spacing/boundaries to ui-geometry and feedback/transitions to ui-motion when available. Vibe UI reconciles coupled decisions. Challenge a contract that harms the task rather than passing a consistently flawed design. This gate owns the loop; specialists return fixes and evidence without starting another gate.

Cover each affected component family, materially different state and exceptional instance. Reuse evidence for identical implementations instead of producing a report per repeated button.

Each finding names location/state, observation, consequence, severity, correction and recheck:

- Blocker: prevents the core task, misleads about a consequential outcome, loses data or blocks essential access.
- Major: materially harms comprehension, hierarchy, interaction, readability, identity or consistency in scope. A visual defect can be major even if every button works.
- Minor: a localized imperfection with limited impact; retain an explicit accepted/deferred reason if not fixed.

Fix the highest-impact cause first. Correct information order before shadows; correct copy before forced line breaks. Reuse governing tokens/components and inspect their affected consumers. Preserve approved areas and a known-good checkpoint before changing composition.

## 4. Re-render and repeat

After each batch rerun affected behavior and inspect the same views/states. Close findings only when the corrected result is observed; a code edit alone does not close a rendered finding. Changed code invalidates affected earlier evidence.

Continue while major or blocking findings remain and authorized work can address them. Two rounds with the same weakness trigger a new diagnosis or composition, not permission to deliver weak work. Do not add reviewers until they agree. Respect an explicit deadline or real access limit; if it stops correction, return blocked or unverified with the exact remaining issue. A time limit is not a quality pass.

For substantial new UI use a fresh reviewer when tools and delegation rules permit. Give the brief, references and candidate, withholding the builder's desired verdict. Judge findings yourself. If independent review is unavailable, label self-review and continue. Opinion does not replace operating the product.

## 5. Decide and deliver

Ready requires the main task and relevant recovery paths to work, all applicable inspection areas to have current evidence, and no open blocker or major finding. Assess character separately: a functional anonymous template can fail the brief. Keep accepted minor tradeoffs visible. Not applicable needs a reason; unverified is not pass.

Report the implemented outcome, strongest visible improvement, executed checks and remaining limits. Include before/after captures for substantial visual work when available. Distinguish CSS-width emulation from native-device testing. Never infer browser, screen-reader, motion or performance coverage from screenshots.

When a file-based substantial-flow record is within scope, run `python <this-skill>/scripts/check_report.py <report.json> --root <project-root>`. It rejects missing areas, missing files, changed recorded hashes, unsupported evidence modalities and inconsistent readiness. It cannot establish which source revision produced a capture or detect fabricated observations. Verify capture provenance and inspect the artifacts yourself; record integrity is not aesthetic truth.
