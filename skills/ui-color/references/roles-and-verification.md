# Roles and verification

## Token contract

Reuse the project's naming. Map only roles the product needs.

| Role | Resolve |
| --- | --- |
| Canvas, surface, raised surface | Actual values and why surfaces differ |
| Primary, secondary and muted text | Foreground paired with every relevant surface |
| Brand expression | Placement and approximate prominence |
| Primary action and action text | Rest, hover, pressed, loading and disabled treatment |
| Selection and selected text/icon | Persistent selection distinguished from temporary hover |
| Focus | Visible against surroundings, distinct from selection |
| Border and divider | Boundaries identifying controls versus content grouping |
| Success, warning, error, information | Text, background, icon and truthful meaning |
| Data/category colors | Stable mapping, labels and non-color distinctions |

Roles can share values. A single accent token cannot safely represent every semantic use. Keep values in the token source; link to it from the design record rather than maintaining duplicate values.

## Build ramps

Use existing color tooling. Where perceptual color spaces are supported, adjust lightness, chroma and hue deliberately, then inspect target browsers and gamut. An even ramp does not prove equal perceived steps or contrast. Supply fallbacks where target support requires them. Avoid a new dependency solely to invent a ramp.

Dark themes need deliberate surface, border and emphasis decisions. Mechanical inversion can make accents too bright and raised surfaces indistinct. Build only supported themes; inspect imagery and translucent layers in each.

## Measure pairs

Record foreground, effective background, state/theme, criterion, ratio and result using an existing contrast tool or the defined WCAG luminance calculation. Use computed colors, including compositing. For text over imagery or gradients, inspect relevant worst-case regions and changing frames, or provide a stable readable backing. Sampling the easiest area is insufficient.

WCAG 2.2 AA text contrast is at least 4.5:1 for ordinary text and 3:1 for qualifying large text, with defined exceptions. Necessary control/state information has a separate 3:1 adjacent-color requirement. Decorative dividers and inactive controls are not automatically subject to it. Consult the exact criterion; do not round a failing ratio into a pass.

Inspect selected, focused, error, placeholder and hover text where present. Disabled controls still need understandable context. Use grayscale and vision simulations as supplementary inspections, not proof of conformance.

## Inspect the composition

At normal scale, find the next action without reading the rationale. Check that saturated fields do not overpower primary controls, muted text remains readable and surfaces separate where needed. Observe with and without the hero asset. Record the strongest observed improvement and unresolved weakness.
