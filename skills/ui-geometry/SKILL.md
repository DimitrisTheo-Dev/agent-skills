---
name: ui-geometry
description: Establish consistent spacing and component geometry. Use for padding, gaps, alignment, density, borders, outlines, corner radii, elevation, control sizing and nested-surface polish. Preserve the existing system during localized repairs.
---

# UI Geometry

Own the repeatable physical rules of the interface. Make related components obey the same decisions while allowing purposeful optical exceptions. Layout owns information order; typography owns text metrics; color owns border/focus colors. Review mode leaves files unchanged.

## Procedure

1. **Inspect the governing system.** Read tokens, shared components and affected consumers. Measure computed boxes, padding, gaps, baselines and hit areas for representative controls. Identify inconsistencies rather than inferring exact values from screenshots. Preserve existing coherent rules.
2. **Choose density and relationships.** Read [geometry rules](references/geometry-rules.md). Establish the spacing vocabulary, grouping relationships, control sizes, radius families, boundary roles and elevation model. Resolve concrete values in existing tokens. Distinguish requirements, conventions and chosen defaults. Compare each control’s area with its task importance and nearby content. Compact visual chrome may retain a larger hit region. An oversized secondary input is a hierarchy defect even when its padding is internally consistent; a primary search surface can legitimately be prominent.
3. **Apply by component family.** Use [component inspection](references/component-inspection.md) for affected families. Fix a shared cause once and inspect its consumers. Preserve target size when making visual chrome compact. Keep optical adjustments explicit and local.
4. **Check real constraints.** Inspect normal/long text, supported themes, narrow and wide widths, focus, selected/error states and relevant touch layouts. Check nested corners and the whole page rhythm, not isolated pixels. Where geometry breaks because content is in the wrong structure, return that finding to the layout owner.
5. **Return the system.** Record token paths, density choice, component dimensions, responsive changes and consequential exceptions in the shared design contract when artifacts are authorized. Report measured checks and unresolved gaps. Reuse the parent's quality gate; do not open a separate review cycle.

## Completion

Equivalent elements align and size consistently; within-group spacing differs meaningfully from between-group spacing; states do not cause avoidable jumps; hit areas remain usable; text enlargement does not clip; focus remains visible. Consistency is deterministic within the chosen system, not one radius and one density across every product.

See [sources](references/sources.md) for the boundary between accessibility requirements and design starting points.
