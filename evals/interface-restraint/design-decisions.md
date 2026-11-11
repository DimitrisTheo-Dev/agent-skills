# Design decisions for this example

This is a small skill library for browsing, inspecting and copying commands. It is an interaction example with frozen source data, not the current installable skill catalog.

Owner-reported rejections:

- Introductory and corner text that explains the design rather than helping the task. Keep useful labels and consequential setup help.
- Oversized search and command surfaces that consume attention without matching the amount of work.
- Invented colorful icon tiles that make ordinary skill entries look like separately branded apps.
- Treating an agent's favorable review as evidence that the owner accepted the result.

Current decisions: text-first navigation, a selected detail pane on wide screens, separate list/detail navigation on narrow screens, static code with a nearby Copy action, subdued secondary links, and functional glyphs from one attributed family. Motion remains brief feedback and a short content transition, with a reduced-motion stylesheet. Browser checks verify specific behavior, not a native-app claim.

These preferences are scoped to this operating screen. They do not prohibit expressive artwork, authentic identity icons, color, larger controls or informative copy in other products where those choices serve the task. The current revision is a candidate addressing the rejection; owner acceptance has not been asserted.


Latest owner feedback: excess interior space and amateur buttons. The correction uses official shadcn/ui sources, removes the full-width header, reduces the frame to its content, and makes Copy a compact title-row action. The outer gray canvas remains presentation space around the utility window; it is not a content section. Remaining mobile space is not filled with decorative copy. No new universal palette, motion quota or component blacklist is introduced.
