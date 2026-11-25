# Changelog

## 2.0.0 (2026-11-25)

- Thirteen skills become five, one per step: `product-engineering-studio` (plan),
  `vibe-ui` (design and build), `ui-quality-gate` (review), plus `landing-page-design` and
  `product-readiness`.
- `ui-color`, `ui-typography`, `ui-geometry`, `ui-motion`, `ui-ux-patterns` and
  `product-ux-writing` are references inside `vibe-ui`. `design-playbook` is a reference inside
  `product-engineering-studio`, and `agent-readiness` one inside `product-readiness`. Their content
  is unchanged.
- **Breaking:** `/dtheo:ui-color` and the other merged commands are gone. Ask `vibe-ui` (or Studio,
  or Product Readiness) instead; a request about one concern alone still reaches its reference.
- Add a skill-routing eval (`evals/routing`): 14 requests, each with the skill that should answer
  it. Both 1.1.0 and 2.0.0 route 42 of 42 runs correctly.
- The render check flags a badge, control or icon cut off by a box that truncates with an ellipsis
  (`cut-off`), and measures text spill from the text itself, so a larger hit area is not flagged.

## 1.1.0 (2026-11-25)

- `ui-quality-gate` ships `scripts/render_check.mjs` (layout, focus, axe and console checks at phone
  and desktop widths, light and dark) and a brief for a fresh reviewer.
