---
name: product-engineering-studio
description: Frame a product problem, explain its UI and system design, choose sequential or parallel delivery, and deliver small verified slices or concise Codex handoffs. Use for product development briefs, scoped builds, design-to-build planning and adaptive multi-agent execution.
---

# Product Engineering Studio

Turn a raw brief into a small useful outcome with explicit decisions and observable evidence. Discuss in the user's language; write concise engineering handoffs in English unless requested otherwise.

Target 300-600 words for the initial response, including its first handoff. Use a compact acceptance table and short architecture explanation. Expand when the user requests depth or an essential contract needs it. Keep design exploration and later-stage details behind the references. Explore before committing at Shape depth.

## 1. Establish the task

Read the supplied brief and accessible repository instructions. Separate confirmed requirements, observations and reversible assumptions. Ask up to three consequential questions initially; continue independent inspection while a necessary answer is missing. Respect design-only or no-code scope.

Capture user, outcome, constraints, real versus mocked behavior, 3-5 acceptance criteria, verification methods and deferred work. For user-facing work, choose Fix (a focused correction), Extend (an established product) or Shape (a new direction or core journey). State a refinement budget; at Shape depth include criteria for correctness, usability, craft and character. For Extend or Shape, read [Creative Quality](references/08_CREATIVE_QUALITY.txt). For ambiguous inputs consult [Workflow](references/02_WORKFLOW.txt), section A.

## 2. Explain the smallest useful design

At Shape depth, read the product, render competing directions and prototype the strongest moment hypothesis before locking the design. Follow Creative Quality; proceed on a reasoned recommendation and combine consequential open choices into one checkpoint when user input is necessary.

Describe the main UI flow, required states, data entities, interfaces, trust boundaries and important failure behavior. Use a compact Mermaid diagram when relationships help. Reuse the actual repository stack. State a scaling trigger before adding infrastructure.

For UI, security, data, scaling or AI behavior, read only the relevant section of [Quality and Design](references/04_QUALITY_AND_DESIGN.txt). Use local vibe-ui only when its actual content is accessible. Use Mobbin only for a concrete screen/flow question with an available connection.

## 3. Select a procedure

Use [Skill Router](references/03_SKILL_ROUTER.txt) for this phase and [Tool Selection](references/TOOLS_SELECTION.txt) for the requested external tools. Pick one main procedure and a conditional specialist, preserving required helpers.

In a short sprint, constrain planning to questions that affect the chosen outcome. The user's scope and timing override broader default exploration. Use tdd for meaningful behavior; use a reproduction-driven approach for defects. Select sol-loop only when its required model route is available and its budget is explicit.

## 4. Choose execution mode

After inspection, assess workload, dependencies, shared files, interface stability, remaining budget and actual agent support. Default to one executor for small or tightly coupled work. For multi-part builds or a request to parallelize, read [Execution Modes](references/10_EXECUTION_MODES.txt) before assigning work. Delegate bounded independent tasks when its gates pass; follow the environment's delegation rules.

State the selected mode, a short reason, owners and next integration checkpoint. Reassess after each slice. Keep observable checkpoints even when implementation within a slice is parallel.

## 5. Deliver one observable slice

If implementation is authorized and a real repository is accessible, implement the slice using the selected execution mode. Otherwise prepare a bounded packet from [Codex Handoffs](references/05_CODEX_HANDOFFS.txt).

Include goal, acceptance IDs, relevant context, observed scope, essential contracts, checks and checkpoint. Typical target: 10-20 minutes of work and 150-350 words per packet; preserve essential requirements over arbitrary brevity.

For a comprehensive starting prompt, provide the brief, execution rules and bounded first assignment. Keep later assignments adaptive; use the orchestration template in Codex Handoffs rather than specifying the entire implementation upfront.

Include typography, composition, relevant states, immediate feedback and purposeful motion in the first complete UI slice. Inspect the running behavior and actual check output. For UI, retain captures of the rendered flow and a recording or frame strip when timing matters; label missing evidence. At delivery, reuse the repository's documented verification command when it covers the change. For a failure, record the failing case and a command or input that reproduces it. After two unsuccessful fixes with the same symptom, change the diagnostic approach. Keep unrelated cleanup out of scope. Publish or deploy only under the user's authorization.

## 6. Review and continue

Review the actual candidate, including new files. Confirm the review method can see the chosen base/range before relying on it. Recheck material fixes. For Extend or Shape, assess correctness, usability, craft and character separately using Creative Quality. Use a reviewer who did not build the flow when permitted and available; otherwise label the self-review limitation. Carry unresolved findings into session state.

Report changed behavior, actual evidence, limitations and next action. Update [Session State](references/06_SESSION_STATE.txt); do not replay complete logs or claim automatic ChatGPT/Codex synchronization. If file tools are unavailable, return the compact state for copying.

For a synthetic example consult [Worked Example](references/09_WORKED_EXAMPLE.txt). For source provenance and unavailable capabilities consult [Sources](references/07_SOURCES.txt). Consult references on demand rather than loading every file.
