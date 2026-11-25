# Recipes for recurring defects

Use these diagnostic paths when the symptom is present. Preserve existing coherent tokens and
component semantics.

## One visible focus treatment

Inspect computed outline, border and box-shadow together. A component override in a cascade layer
can lose to an unlayered global declaration. Fix the governing rule and recheck its consumers
instead of stacking another local override.

For a composite input, let the wrapper own one visible indicator while maintaining usable keyboard
focus. For a hidden native control, expose focus on its visible face. A clipped control may need an
inset indicator or room around its outer ring. Preserve sufficient focus contrast, forced-colors
behavior and visible keyboard access. Removing the ring is not a clipping fix.

## Focus inside scrolling surfaces

Inspect all clipping ancestors and both overflow axes, including masks, edge fades, sticky headers
and breakpoint overrides. `overflow-x` and `overflow-y` interact; checking only the declared axis
misses real clipping.

An outer ring needs space for width plus positive offset. Padding can reserve that space; use a
compensating margin only when it preserves the layout and hit regions. Scroll padding/margin can
keep the focused target clear of sticky or faded edges, but neither alone enlarges a clipping box.
Inset focus is another option. Operate the first and last controls at both scroll extremes and after
resizing.

## Stable targets and pointer behavior

Keep the interactive hit region stable while an inner visual face changes. Check center and edge
clicks, pointer movement across adjacent targets, pointer-down then cancellation, and keyboard
activation. Avoid target movement that causes hover entry/exit loops.

A transformed ancestor can change the containing block for an absolutely positioned stretched
target. A whole-row pseudo-element that previously reached the row may shrink to its label when the
label transforms. Inspect the actual hit region during press; move the visual effect inward or
remove that transform. Preserve links, selection and nested-action semantics.

## Stable layout and loading

Reserve media dimensions and space for changing labels/content where the design permits. Use
metric-compatible font fallbacks and inspect font loading. Keep badges out of text flow only when
they will not cover content at longer text or zoom. A rotating headline can use a reserved slot and
reveal effect; dynamic content must still reflow when necessary for access.

Render one authoritative loading state with shell metrics that match the resolved view. Preserve
useful content during refresh, avoid a skeleton-to-spinner-to-skeleton sequence, and replace pending
state with the actual failure plus recovery. Immediate work should not wait for decorative
animation. Do not hardcode a hydration delay or force fixed height on arbitrary text to manufacture
zero movement.

## Geometry, elevation and contrast

Use radius families by component role. Outer radius minus inset is a starting relationship for
concentric corners, adjusted for visible geometry. Choose borders or elevation according to
hierarchy; neither is universally correct. Hover elevation need not translate the target.

Measure text and non-text indicators on every surface they actually occupy, including selected state
and imagery. Account for compositing/opacity. Adjust semantic color pairs rather than dimming an
entire container until its text fails. Use a stable backing over art when needed; communicate status
with more than hue.

## Motion and touch

Choose motion by meaning and repetition frequency. Keep frequent keyboard actions immediate when
animation would add friction. Use explicit transition properties and honor reduced motion; test the
result rather than relying on the presence of a media query. Scope hover behavior to appropriate
input capabilities while retaining keyboard feedback.

Choose generous touch regions; 44px is a useful coarse-pointer project target, not a universal WCAG
AA minimum. Retain readable inputs and test mobile focus/zoom behavior; 16px input text is a
practical iOS starting point, not proof of accessibility. Preserve native zoom. Check safe areas and
software-keyboard behavior in the target runtime. A swipe-to-dismiss sheet should avoid capturing
ordinary content scrolling.

## Restraint and identity

Remove repeated facts and competing primary actions before shrinking useful controls. Keep required
labels, errors and consequential approvals. Put expressive art where it supports recognition or
explanation; functional chrome follows its semantic role. Define tokens for intentionally dark
sections. When changing a palette, revisit alpha-based shadows, glows and overlays instead of
mechanically replacing hex values.
