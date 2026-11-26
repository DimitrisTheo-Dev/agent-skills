# Changelog

## 2.2.0 (2026-11-26)

- `product-engineering-studio` is cut from about 1,600 lines in 19 files to about 220 in 3. The
  skill keeps its three habits: prove the riskiest dependency first, ship one end-to-end slice, and
  label each behavior verified live, verified locally, mocked or blocked. Two references remain:
  delivery proof and parallel work.
- Removed: the skill router (it named about 19 skills outside this pack), tool selection, sources,
  session state, creative quality, the worked example and the design playbook, whose rules now live
  in parallel work, Vibe UI and UI Quality Gate.
- The craft recipes for focus, hit targets and layout shift move to `ui-quality-gate`. The Faceful
  history and look move to `docs/`.
- Add `evals/studio/brief-first`, which runs one brief with and without the plugin.

## 2.1.0 (2026-11-26)

- `landing-page-design`: the material reference is rewritten as "Material and light". It starts
  from the product's own world, writes the direction as a scene (a place, an hour, one light
  source), sets rules for lighting a dark canvas and rationing colour, gives a build note for each
  material, and names one hero motion moment. Sources: Refero Styles, 21st.dev heroes,
  60fps.design and Grainient.

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
