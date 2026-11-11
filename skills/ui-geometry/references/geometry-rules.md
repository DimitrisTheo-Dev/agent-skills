# Geometry rules

## Spacing and density

Use the existing scale if coherent. If absent, a starting vocabulary in CSS pixels is 2, 4, 8, 12, 16, 24, 32, 48, 64, 96. Keep small optical adjustments separate from structural spacing. Use fewer values where enough; expand for a concrete need. A 4px-only rule can harm optical alignment and useful macro spacing.

Assign roles, not random increments: icon-label gap, label-helper gap, field gap, group gap, surface inset, section gap and page gutter. For example, a compact field might use 4 between label and control, 8 for a related hint, 16 between fields and 32 between sections. These are hypotheses; content and interaction determine actual relationships.

Make within-group distance perceptibly smaller than between-group distance. Use dividers only where space or hierarchy cannot adequately communicate the relationship. Maintain an intentional rhythm across a full viewport, including top and bottom edges.

Choose compact, comfortable or spacious for the task, then specify actual values. An expert table can be compact while its touch toolbar remains comfortable. Do not make mobile a scaled-down desktop. Adjust gutters, group arrangements and optional metadata before reducing essential text.

## Controls and hit regions

A practical initial control height might be 32–36px for compact pointer use, 40–44px for comfortable mixed use and 44–48px for prominent touch controls. These are design defaults, not universal standards. Specify min-height with appropriate content padding where labels can wrap or text can enlarge.

WCAG 2.2 AA target sizing generally calls for 24 by 24 CSS pixels or a defined exception, including spacing. The enhanced criterion uses 44 by 44. Do not claim every 44px-looking button passes: measure the actual hit region and neighboring targets. A visually small icon can have a larger hit area when that area does not overlap other actions.

Keep a consistent optical relationship between icon size, stroke, text and control height. Use one compatible icon set where available. Check icons at the rendered size; equal viewboxes do not guarantee equal visual mass.

## Corners and nesting

Define a small family by function: small controls, larger surfaces and optional circular/pill objects. Exact radii follow the material direction; sharp corners, restrained rounding and soft surfaces can all be deliberate.

For concentric rounded rectangles with uniform inset d, start from inner radius = max(0, outer radius - d), measuring from the matching outer edges. Borders and unequal padding change which edges are concentric. Inspect the rendered result; do not force the formula onto unrelated neighboring shapes or turn every inner child into a pill.

A card and its inset image should have related geometry. A menu inside a dialog does not need mathematically concentric radii if their shapes are not nested at a uniform inset. Keep exceptions purposeful rather than deriving arbitrary values per component.

## Boundaries, outlines and elevation

A border can identify an input, separate content or carry selection. A focus outline identifies keyboard position. A shadow communicates overlap or elevation. Resolve each role independently instead of layering all three everywhere.

Start with a consistent ordinary border thickness, often 1 CSS pixel, and use stronger strokes where function or the chosen material needs them. Reserve space for selected/error borders or use a non-layout-changing treatment so switching state does not shift content. Give focus enough separation from the control and ensure overflow clipping cannot hide it.

Use a small elevation hierarchy tied to stacking behavior. Inspect shadow direction, spread and opacity against supported backgrounds. A dark surface can need a clearer edge rather than a heavier shadow. Shadows are not substitutes for sufficient required control contrast.

## Responsive constraints

Set content-driven widths and minimums. Inspect fit just before and after actual breakpoints, not only at three device presets. Preserve alignment rails while letting columns collapse or reorganize. Allow the primary work to use the viewport instead of inheriting marketing-page margins.

Account for fixed headers, sticky actions, safe areas, scroll containers and the on-screen keyboard where relevant. A sticky footer must not obscure focused fields or the last result. Inspect zoom and text enlargement; fixed heights that clip are geometry failures.

Record intentional deviations by role and reason, not a diary of every nudge. Keep implementation values in one token source.
