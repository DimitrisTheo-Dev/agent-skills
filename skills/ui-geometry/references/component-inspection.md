# Inspect component families

Inventory affected families and their variants. Check every materially different state, and representative instances of genuinely shared implementations. A repeated component does not require hundreds of duplicate screenshots; an exceptional layout does need its own check.

| Family | Inspect | Evidence to retain |
| --- | --- | --- |
| Buttons and icon buttons | Common heights, optical centering, icon-label gap, real hit region, focus visibility, loading width and selected borders | Normal/long label and loading/focus views; box measurements |
| Text fields | Visible label, text baseline, inset, prefix/suffix alignment, helper/error space, multiline behavior | Typed, error and enlarged-text state |
| Checkboxes, switches, radios | Indicator-to-label relationship, whole label hit area, wrapped text alignment and selection geometry | Pointer and keyboard operation with a wrapped label |
| Cards and image objects | Inset rhythm, corner relationship, crop/aspect ratio, reserved media space, reading order and separate action hit regions | Long title, missing media and narrow layout |
| Rows, tables and lists | Shared column rails, numeric alignment, consistent density, wrapping and clear selection | Ordinary and extreme data; no horizontal clipping of essential action |
| Tabs and navigation | Baselines, selected indicator placement, long labels, overflow strategy and focus clipping | Narrow and expanded labels with keyboard focus |
| Menus and popovers | Anchor alignment, edge collision, grouping, target size and independent scrolling | Open near viewport edges |
| Dialogs and sheets | Inset rhythm, heading/action placement, scroll boundaries, close target and keyboard-safe content | Short/tall content and focused last field |
| Notices and toasts | Icon/text alignment, wrap, action spacing, stacking and content occlusion | Long message plus any action |
| Charts and numeric panels | Label alignment, units, legend spacing, hit regions and actual data bounds | Long/localized labels and empty/sparse data |
| Empty/loading/error views | Stable reserved space, appropriate visual weight, readable recovery and no arbitrary giant illustration | Transition to populated content |

If only a subset is changed, inspect that subset and its affected neighbors. Mark nonapplicable states with a reason. An empty state belongs to a collection; it is not a required state of every individual button.

Inspect full viewport, component crops and full viewport again. Pixel-level adjustments that weaken overall hierarchy are regressions. Measure before changing a shared token; local fixes should not alter unrelated consumers.
