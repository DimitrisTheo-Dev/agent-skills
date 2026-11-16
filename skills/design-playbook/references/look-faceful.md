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

Use original assets or assets licensed for the target. This package does not include Faceful source code, fonts, artwork or customer media, and does not grant rights to external assets.
