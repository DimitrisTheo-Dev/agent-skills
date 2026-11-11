---
name: ui-motion
description: Design and verify interface feedback, transitions and motion. Use for microinteractions, perceived latency, loading, optimistic UI, interruption, reduced motion and supported mobile haptics. Preserve action semantics and existing platform behavior.
---

# UI Motion

Make actions feel responsive, legible and continuous. Own feedback timing and transitions, including truthful async states. Every meaningful action needs feedback; static content does not need to animate. Plan this with the first complete flow, then refine it. Review leaves files unchanged.

## Procedure

1. **Inventory interactions.** Inspect the actual controls, transitions, async operations, platform and available motion primitives. Read the chosen direction and geometry. Group shared behavior by component family, then identify exceptional transitions. Finish with the affected interaction/state inventory.
2. **Specify feedback.** Read [interaction recipes](references/interaction-recipes.md). For each family identify trigger, immediate response, pending/success/failure, cancellation/reversal and repetition behavior. Include keyboard and touch where relevant. Distinguish feedback from action commitment.
3. **Select purposeful motion.** Choose transitions that clarify cause, position, change or a product-specific emotional moment. Define actual properties, duration/easing or spring parameters, origin and reduced-motion behavior. Reuse tokens/primitives. A small fix does not need a new motion system or a signature animation.
4. **Implement safely.** Use [runtime and verification](references/runtime-and-verification.md). Keep input available; retarget interrupted transitions; preserve focus and scroll. Optimistic updates need truthful pending state and recovery. Haptics are optional, supported enhancements, never a universal web promise.
5. **Operate and report.** Exercise normal and rapid/reversed interaction, failure and reduced motion. Inspect recordings when timing matters and profile suspected performance problems. Update the shared interaction section with observed evidence and limits when artifacts are in scope. The parent workflow owns the final quality gate.

## Completion

Users can perceive that an action registered, distinguish pending from completed work, recover from failure and continue without waiting for decorative transitions. Motion does not displace the task; repeated use stays comfortable. Haptics, animation and feedback claims match the actual tested platform.

Consult [sources](references/sources.md) for primary platform guidance and the limits of numeric recipes.
