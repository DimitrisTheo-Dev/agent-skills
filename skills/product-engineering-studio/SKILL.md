---
name: product-engineering-studio
description: Frame, prototype, build, and verify product changes. Use for product development briefs, feasibility experiments, scoped builds, design-to-build planning, and adaptive multi-agent delivery.
---

# Product Engineering Studio

Turn a raw brief into a small useful outcome with explicit decisions and observable evidence. Discuss in the user's language; write concise engineering handoffs in English unless requested otherwise.

Start with the intended outcome and consequential assumptions, then do the authorized work. Use a compact acceptance table or architecture explanation when it clarifies the task.

## 1. Establish the task

Read the brief and applicable repository instructions. Separate requirements, observations and reversible assumptions. Ask when a missing decision would materially change the work. Continue independent inspection while an answer is pending. Respect design-only or no-code scope.

Identify who will use the result, the useful outcome, what constrains it and how to observe success. For UI work, use Fix, Extend or Shape as shorthand for the depth of change. Read [Creative Quality](references/08_CREATIVE_QUALITY.txt) when choosing a direction or reviewing substantial UI. For ambiguous inputs, see section A of [Workflow](references/02_WORKFLOW.txt).

When setting a delivery baseline, assessing release readiness or changing a product's supported capabilities, use product-readiness if installed. Carry applicable checks and evidence into the existing acceptance record. If unavailable, record relevant checks and deferrals here. Scope fixes and learning prototypes to their affected requirements and actual risks.

## 2. Explain the smallest useful design

Choose the activity that resolves the consequential uncertainty. Use existing user evidence when the problem is unclear. If an unfamiliar capability or interaction is the question, a small prototype with realistic inputs can be the first useful result. Section B of [Workflow](references/02_WORKFLOW.txt) covers this choice. For an unsettled visual or interaction direction, compare alternatives when seeing or operating them could change the decision. Reuse a settled direction and proceed with a reasoned choice when the work is reversible.

Work through the UI flow, data and interface contracts, trust boundaries and important failure behavior. Explain the parts that affect delivery. Use a compact Mermaid diagram when relationships help. Reuse the actual repository stack. State a scaling trigger before adding infrastructure.

Start from the result the user must reach and work backward to the smallest complete flow. For provider-dependent work or a timed demo, read [Delivery Proof](references/11_DELIVERY_PROOF.txt) before expanding dependent screens. Confirm what the deployed path can produce and consume, including required configuration and migrations. A working shell or healthy endpoint does not establish the promised artifact.

For UI, security, data, scaling or AI behavior, read only the relevant section of [Quality and Design](references/04_QUALITY_AND_DESIGN.txt). Use local vibe-ui only when its actual content is accessible. Use Mobbin only for a concrete screen/flow question with an available connection.

## 3. Select a procedure

Use [Skill Router](references/03_SKILL_ROUTER.txt) for specialist decisions and [Tool Selection](references/TOOLS_SELECTION.txt) for external tools. Vibe UI owns the shared design direction and brings in relevant helpers. UI Quality Gate owns the final rendered review.

In a short sprint, constrain planning to questions that affect the chosen outcome. The user's scope and timing override broader default exploration. Use tdd for meaningful behavior; use a reproduction-driven approach for defects. Select sol-loop only when its required model route is available and its budget is explicit.

## 4. Choose execution mode

After inspection, assess workload, dependencies, shared files, interface stability, remaining budget and actual agent support. Default to one executor for small or tightly coupled work. For multi-part builds or a request to parallelize, read [Execution Modes](references/10_EXECUTION_MODES.txt) before assigning work. Delegate bounded independent tasks when its gates pass; follow the environment's delegation rules.

State the selected mode, a short reason, owners and next integration checkpoint. Reassess after each slice. Keep observable checkpoints even when implementation within a slice is parallel.

## 5. Deliver one observable slice

If implementation is authorized and a real repository is accessible, implement the slice using the selected execution mode. Otherwise prepare a bounded packet from [Codex Handoffs](references/05_CODEX_HANDOFFS.txt).

Include goal, acceptance IDs, relevant context, observed scope, essential contracts, checks and checkpoint. Use checkpoints sized to the actual work; do not impose a short demo deadline on a production-quality request. Preserve essential requirements over arbitrary brevity.

When an accepted design spans owned workstreams or recurring craft defects, use the installed design-playbook for contract-to-build handoffs and scoped measurements. Keep this Studio as product/integration owner, Vibe UI as design owner and UI Quality Gate as the single final gate. If unavailable, use the existing contract, bounded handoff and verification references here.

For a comprehensive starting prompt, provide the brief, execution rules and bounded first assignment. Keep later assignments adaptive; use the orchestration template in Codex Handoffs rather than specifying the entire implementation upfront.

Include composition, readable type, relevant states and clear feedback in the first complete UI slice. At first render, check whether the task, current object and next action are apparent before expanding. Carry owner corrections forward as scoped acceptance checks. Inspect the running behavior and relevant check output. Reuse the repository's documented verification command when it covers the change. For a failure, record the input or command that reproduces it. If repeated fixes leave the same symptom, change the diagnosis. Publish or deploy only under the user's authorization.

## 6. Apply the UI quality gate

For implemented user-facing work, invoke ui-quality-gate before delivery. It owns the twelve-area inspection, evidence record and repair/recheck loop. Vibe UI owns design decisions; Studio keeps the user task, scope and engineering requirements intact. A focused fix gets a focused gate; backend-only work skips it. If the gate is unavailable, apply Quality and Design plus Creative Quality and explicitly retain unverified areas.

## 7. Review and continue

Review the actual candidate, including new files. Confirm the review method sees the chosen base and range. Recheck material fixes and use Creative Quality for the limits of substantial UI evidence.

Report changed behavior, actual evidence and material limits. Retain consequential decisions in the project's existing notes when useful. Use [Session State](references/06_SESSION_STATE.txt) when interrupted work or a handoff needs context.

For a launch or changed readiness boundary, reconcile the product-readiness record with this candidate. Reuse the UI gate's evidence; do not create a competing visual gate. Separate locally verified and verified-live behavior, and carry required unknowns as release blockers rather than claiming overall readiness from a successful build or scanner score.

For a synthetic example consult [Worked Example](references/09_WORKED_EXAMPLE.txt). For source provenance and unavailable capabilities consult [Sources](references/07_SOURCES.txt). Consult references on demand rather than loading every file.
