# Interface writing patterns

## Write for the surface

| Surface | Decisions to make |
| --- | --- |
| Navigation and labels | Use the nouns people recognize from the task. Align menus, headings, breadcrumbs, and related messages. Add a possessive only when ownership changes the meaning. |
| Forms | Show consequential constraints by the input. Mark optional fields clearly. Explain validation where it occurs and keep entered values available when supported. |
| Onboarding and empty states | Show the next achievable task. Distinguish a new account, a filtered view with zero results, and data that failed to load. |
| Progress, errors, and recovery | Separate in-progress, confirmed success, known failure, and unknown outcome. Name a safe next action. Check that retrying a request with an unknown outcome cannot duplicate a payment, invitation, or other side effect before offering retry. |
| Dashboards and notifications | Name the metric, time window, unit, or affected item. Pair color and icons with meaningful text. Put the action or operational update before secondary detail. |
| Billing and trials | Present the price, currency, billing interval, start or renewal timing, and material terms before commitment. Explain the supported way to cancel and what happens after cancellation. Use confirmed values and make unresolved policy a release question. |
| Permissions and deletion | Name the object and the scope of access or removal. Explain the impact on others and reversibility when relevant. Ask for confirmation where it can prevent a costly mistake. |

## Match the copy to the state

| Confirmed condition | Example copy |
| --- | --- |
| A save failed and the form still holds the edits | “We couldn’t save your changes. Your edits are still here.” Offer “Try again” when retrying is safe. |
| An export request timed out and its result is unknown | “We couldn’t confirm whether the export started.” Offer “View exports” when that view exists and can help resolve the outcome. |
| The account has zero reports and the user can create one | “No reports yet.” Pair it with “Create report.” For a filtered view, show “No reports match these filters” and offer to clear them when supported. |

## Verify language in use

- Put important conditions where the user makes the decision. Check focus, reading order, and whether status updates are announced when they matter.
- Review text wrapping with longer strings, supported right-to-left layouts, and locale formats for dates, times, currencies, and units. Use the actual component and translated strings where available.
- Record reusable terminology and copy patterns where the team already works. Evaluate high-frequency problems through observed task completion, errors, or support feedback when data is available.

## Source and scope

Nick DiLallo's August 3, 2026 essay in UX Collective draws on experience writing for products across languages and markets. Use its lessons as practitioner guidance. The component patterns and sample strings here are original applications. Source text and assets remain with their respective rightsholders. Source verified November 9, 2026. [UX Collective article](https://uxdesign.cc/what-ive-learned-writing-for-billions-of-users-f4db0c1aa9cb)
