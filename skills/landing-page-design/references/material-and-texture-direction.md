# Material and light

Read this when the hero's art, background or surface treatment is still open. A page can ship with
none of it: a sharp product shot on a plain canvas beats a texture with no reason to be there.

## Start from what the product owns

List the real screens, avatars, mascots, photos, sounds and signature interactions first. Keep the
one that identifies the product with the logo hidden, and build the atmosphere around it: an AI
interviewer keeps its real avatar in an interview moment, and the gradient becomes the room it sits
in. Label a mockup as a mockup.

The strongest entries in the [21st.dev hero listing](https://21st.dev/community/components/s/hero)
are made of the product's own world:

- Cold Email Crowd Hero: a crowd walks past, a buying signal pops over one person, an opening line
  types itself, the email flies along an arc and a reply comes back. The animation is the pitch.
- Hardware Hero: a workbench photo of laid-out tools under window light; the tools lift off when the
  visitor picks a project.
- Nexa Canvas Hero: a designer's portfolio whose hero is a working canvas with a tool rail and an
  editable headline.

The same listing holds dozens of four-colour blurred "bloom" gradients. They are pleasant and fit
any product, which is the problem.

## Write the scene

Before picking an effect, write the direction as one sentence: a place, a time of day and a single
light source. [Refero Styles](https://styles.refero.design) names every site it documents this way,
and the sentence does most of the art direction. Scenes for invented products:

- Log search: a night-shift control room where only the matching lines are lit.
- AI code review: a darkroom where each fix develops out of the black under one red safelight.
- Tax app for freelancers: an accountant's desk at 7 a.m., cold daylight on carbon paper.
- Voice notes: a recording booth after hours, one warm lamp over the microphone.

The scene answers the build questions: canvas colour, where the light comes from and what it lands
on, the surface (paper, glass, phosphor, film grain, felt), the type voice, and the one element
allowed to glow. Rewrite any scene that would fit five unrelated products.

Write two scenes that differ in light and canvas. One can be light: Cursor reads as a parchment
studio with one ember accent, Vercel as a typeset terminal on white paper. One can have no material
at all.

## Light on a dark canvas

The cinematic dark direction (AgentQL, Superwhisper, Huly, Valo, Unicorn Studio) is chiaroscuro:
darkness is the negative space and light is placed, as on a film set.

- One source per viewport. Light has a direction and lands on a subject: the product shot, the
  headline or one object.
- Ration colour to one job. Resend keeps its violet for code samples, email addresses and status
  icons, and leaves buttons white. Modal's lime marks actions, the logo and its 3D icons. Active
  Theory keeps the interface grey and white so the rendered 3D world carries all the colour. AgentQL
  spends colour on one pair of aurora glows, a few product cards and one CTA.
- Canvas from #000 to #121212, neutral or slightly warm. Agents tend to make dark pages too blue and
  too dim; take saturation from the canvas and give it to the light.
- Authority from scale and tracking. Display type at weight 400 to 500 with tight negative tracking
  (Vivid+Co sets 136 px at 400). Resend's hero is a 96 px serif headline beside a dark 3D cube, with
  no gradient wash.
- Depth from layers: hairline borders, a darker plate behind the product, one shadow level. Floating
  cards earn the float by showing real product states.

A loud dark page is a choice too: beehiiv runs deep violet, oversized bold type and pink accents.

## Materials and how to build them

| Material | Build | Keep it honest |
| --- | --- | --- |
| Aurora bleed | Two offset `radial-gradient`s in `oklch` behind the hero, masked to fade out before the next section. Grain on top stops banding. | One pair per page. Text sits on the dark side. |
| Film grain | SVG `feTurbulence` (baseFrequency near 0.7, 3 to 4 octaves) or a 256 px noise PNG, tiled on a fixed pseudo-element at 4 to 10 % opacity with `soft-light`. | Static. Clean panels under small text. Check on a cheap display. |
| Dither | Ordered (Bayer) dither in a shader or a pre-rendered image. Reads as print, early computing, signal. | One scale. Body text sits on clean ground. |
| Beams | Blurred `conic-gradient` wedges masked to a cone, or a god-ray image aimed at the product. | Beams point at the subject and stay off the headline. |
| Chromatic split | Offset red, green and blue copies of one object with `mix-blend-mode: screen`, or a refraction shader (Vivid+Co, Unicorn Studio). | One object; the rest of the page stays monochrome. |
| Glass | `backdrop-filter: blur()` on a small surface over a varied backdrop; fluted glass adds a `repeating-linear-gradient` highlight. Folded or refracting glass needs WebGL (21st.dev Glass Fold). | Copy and controls sit on solid ground. Measure on a mid-range phone. |
| Phosphor | Monochrome canvas, one hue as a tight `text-shadow` or LED dot, mono type for data. | The glow marks status and action. |
| Live field | Canvas dot grid or contour lines that answer pointer and tap (21st.dev Sonar Grid: rings where you tap, one already in flight at first paint). | Still frame under reduced motion; pause off-screen. |
| Lit object | A real photo or 3D render of the product or its world, lit by the scene's source. | The actual product, or labelled concept art. |
| Paper and ink | Warm off-white, hairline rules, flat surfaces, one ink accent, serif or mono for voice. | The light direction for reading-heavy and trust-heavy pages. |

Use one primary material in the hero and at most one quiet support. Navigation, forms, pricing and
proof stay calm.

## Motion: one named moment

[60fps.design](https://60fps.design) catalogues app motion as named moments, each written as app,
feature and effect: tickets print, cards shuffle, a readiness meter fills. Name the hero's moment
the same way before building it ("invoice stamps paid", "query lights matching rows"). Play it once
to show the mechanism, then rest on a designed final frame. Numbers earn motion of their own:
counters, meters, wheels. Ambient loops run slow (8 s or longer), pause off-screen and hold the
final frame under `prefers-reduced-motion`.

## Procedure

1. Inventory the product's world and pick the asset that identifies it.
2. Write two scenes.
3. Build both heroes on the same real content at 390 px and 1440 px. Compare them with the logo
   hidden and with the material switched off.
4. Keep the winner's material in the hero.
5. Check text and CTA contrast at the brightest point behind them, LCP (a static poster paints
   first; the canvas or shader loads after), reduced motion, focus rings over the art and the
   mobile crop.

Done when the scene belongs to this product alone, the hero reads as this product with the logo
hidden, and every claim and action survives with the material off.

## Reject when

- The hero is an aurora behind centred gradient text and floating cards, and only the logo says
  which product it is.
- Abstract art replaced the real avatar, screenshot or output.
- Two glows compete in one viewport, or one texture fills hero, features and footer.
- Motion loops without meaning or suggests live activity that isn't happening.
- Text sits on uncontrolled contrast, or the mobile crop loses the subject.

## Assets and sources

[Grainient](https://grainient.supply/freebies) offers free and paid grainy, dithered, god-ray and
mesh gradients (4K to 12K images, animated gradient videos, a shader tool). Its [license
agreement](https://grainient.supply/license-agreement) allows commercial use and modification and
forbids redistributing the assets on their own, reselling them without significant change, or
competing with Grainient. Ask Grainient before committing an asset to a public repo or template,
and keep assets out of this skill. Study grain scale, contrast and where the light sits. The
product's own version should hold up without the borrowed image.

Checked 2026-11-26: Refero Styles pages for Resend, Modal, Active Theory, AgentQL, Vivid+Co, Cursor
and Vercel; the 21st.dev hero listing and the component pages named above; the 60fps.design home
page; Grainient's freebies, collections and license (last updated 20 August 2024). Superwhisper,
Huly, Valo, Unicorn Studio and beehiiv come from a Refero search the maintainer reviewed. Site
descriptions are paraphrased. The scenes and build notes are original guidance, not measured
conversion results.
