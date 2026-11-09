---
name: product-ux-writing
description: Design, write, review, or implement interface copy and the interactions it describes. Use for in-product navigation, onboarding, forms, dashboards, settings, billing, notifications, and feedback for errors or other product states.
license: MIT
---

# Product UX Writing

Use words and interface structure together to help someone complete a task. Prioritize accurate consequences, a clear next step, and consistent terminology.

## Choose the deliverable

- **For a review**, keep the work read-only. Cite the observed text or interaction, explain the effect on the task, and suggest a replacement or a change to the interaction. Put misleading outcomes, costly mistakes, and blocked recovery first.
- **For design or writing**, draft the requested text in context. For flows with several states, list the screen or state, the condition that triggers it, the exact copy, and the next available action.
- **For implementation**, use the project's components, string catalog, and locale conventions. Limit edits to the requested surface. Separate proposed interaction changes when the request is for copy alone.

## Work from the product behavior

1. **Trace the task.** Identify the user, what they need to do, what success means, and the next decision. Check the current interface, product rules, and available implementation evidence. Establish which outcomes are confirmed, pending, failed, or unknown.
2. **Set the vocabulary.** Use one familiar term per entity or action. Reuse the product's established terms across screens, emails, notifications, and help unless a rename is in scope. Use action labels that name the effect, such as “Send invitation” or “Remove access.”
3. **Find the friction.** When text explains how to find a control, choose a clearer affordance or location. When users can make a predictable mistake, put the constraint at the point of input or prevent the mistake in the interaction. Make the first useful action easy to find in onboarding and empty states.
4. **Write each relevant state.** Lead with the outcome or the information needed to decide. Give known consequences, costs, or prerequisites before commitment. For a failure, say what happened, what happened to the user's input if known, and what they can do safely. When an action's outcome is uncertain, state the uncertainty and offer an available status check or recovery path. Confirm material unknowns before presenting them as policy or behavior. Read [interface patterns](references/interface-patterns.md) for specific surfaces.
5. **Review in context.** Cut repeated text after the task, state, and consequences are clear. Check that the important fact and next action survive a quick scan. Exercise relevant states with fixtures in an authorized preview or local environment when available. Inspect the rendered copy with narrow screens, supported locales, and assistive technology as appropriate. Report what was observed and which checks still need a working interface.
