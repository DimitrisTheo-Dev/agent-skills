# Faceful example, not a universal theme

Use only when the brief requests Faceful's warm editorial direction. Otherwise derive tokens from the current product. These values were inspected on 2026-11-16 in the [design contract](https://github.com/DimitrisTheo-Dev/Hackathon-gen-ai/blob/b0bfb45e9ee61be9d4305d028781cd006886db91/DESIGN.md) and its governing `apps/web/public/design.css`. Treat them as a historical example; recheck source when exact fidelity matters.

| Role | Observed example |
| --- | --- |
| Primary ink/action | `#2A2A27` |
| Secondary / muted text | `#6E6C66` / `#75736C`, with background-specific contrast checks |
| Page / surface / sidebar | `#FAFAF7` / `#FFFFFF` / `#F1F0EB` |
| Structural border | `#E4E2DA` |
| Typography | Self-hosted Inter Variable, restrained weights and tighter tracking at display sizes |
| Art | Gold, amber, cream and sky accents in media/identity areas, with neutral operational chrome |
| Controls | Pills for marketing/onboarding; 10px app buttons; 8px icon/navigation controls |
| Focus | 2px outer control ring with 2px offset; fields use an inset line; composite wrappers own the indicator |
| Motion | Press around 120ms, state changes 160–220ms, surfaces 320–440ms; keyboard and reduced-motion exceptions |

The principles are calm hierarchy, actual product media, minimal repeated text, stable targets and truthful status. The source has explicit exceptions, including preference-pill focus and clipped-row treatment. Preserve accessible behavior when translating; values alone do not reproduce the composition. The earlier attached draft's blanket “under 300ms” instruction conflicts with this shipped motion range.

## Reuse map

The 2026-11-16 visual review inspected the live landing page and studio, plus the repository's historical desktop proposal and mobile canvas captures. This identified useful compositions, not a measured speed improvement or a verified reusable component library. Source paths below are relative to [the inspected revision](https://github.com/DimitrisTheo-Dev/Hackathon-gen-ai/tree/b0bfb45e9ee61be9d4305d028781cd006886db91).

| Composition worth retaining | Source to inspect | Boundary when adapting |
| --- | --- | --- |
| Warm neutral chrome with color concentrated in the work | `apps/web/public/design.css`, `DESIGN.md` | Keep semantic roles; choose the new product's identity separately. |
| Rotating headline with reserved geometry | `apps/web/src/landing/AgentRotator.tsx`, `landing.css` in the same directory | Keep a stable accessible sentence, measured text space, pause and reduced-motion behavior; replace product-specific labels. |
| Wide demo frame with layered glow | `apps/web/src/landing/LandingPage.tsx`, `StudioDemo.tsx`, `landing.css` in the same directory | Preserve framing and responsive proportions; keep the glow behind text, controls and focus indicators. |
| Scripted product demonstration | `apps/web/src/landing/StudioDemo.tsx` | Adapt scenes and content while retaining coordinated timing and pause behavior; identify illustrative behavior accurately. |
| Centered composer that becomes a docked conversation beside the artifact | `apps/web/src/director/DirectorPanel.tsx`, `HomeComposer.tsx`, `director.css` in the same directory | Reuse the relationship and control geometry; keep project state and service calls in adapters. |
| Preview-led template selection with a short name and duration | `apps/web/src/views/TemplateLibrary.tsx`, `apps/web/src/templates.css` | Use authorized media and require the selected path's real output to match the preview's promise. |
| Proposed change, visible diff, apply result and undo | `apps/web/src/director/DirectorPanel.tsx`, `PostingDiff.tsx` in the same directory | Preserve revision and failure semantics when reducing visual detail. |
| A stable shell while content loads | `apps/web/src/components/ShellSkeleton.tsx`, `apps/web/public/design.css` | Reuse geometry; replace the app-specific session detection and route assumptions. |
| Desktop inspector and phone navigation/sheets | `apps/web/src/editor.css`, `apps/web/src/mobile.css` | Check the primary action and keyboard access in both layouts; a screenshot alone does not verify interaction. |

`Studio.tsx` and `Editor.tsx` are application coordinators, not drop-in starter components. A future extraction can start with the landing compositions, composer, media card and detail row in one synthetic gallery. Include populated, empty, pending and failed states where applicable. Keep the extraction bounded to the next flow and record actual setup time before claiming it saves time. Retain the current project references until that gallery exists and passes its checks.

Use original assets or assets licensed for the target. This package does not include Faceful source code, fonts, artwork or customer media, and does not grant rights to external assets.
