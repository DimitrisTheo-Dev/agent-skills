# Art direction and visual craft

Great interfaces feel deliberately authored, not necessarily complex. Product and audience determine the visual register; the same rigor can produce a playful indie app or a serious commercial services site.

## A quick creative brief

Decide five things before expanding UI:

1. **Emotional register:** choose 2–3 adjectives, e.g. "assured, human, precise" or "curious, playful, warm". Avoid vague "clean and modern".
2. **Functional promise:** the one user outcome the design makes easiest.
3. **Visual signature:** one credible, ownable motif anchored in the real business or product.
4. **Main tension:** the contrast that gives the composition life, e.g. expressive typography against quiet controls, or quiet editorial type against rich original photography.
5. **Restraint rule:** what won't be used, because it would dilute the signature or add cognitive burden.

For Shape work, derive two or three directions from the product reading and compare renders with identical content. Give each a thesis, a reason and a tradeoff; vary hierarchy, composition or interaction. For an extension, explore only an unsettled decision. Make a recommendation and proceed on reversible choices; ask only for consequential missing priorities. Keep comparison evidence before retiring disposable code.

## Typography is identity and information architecture

- Choose display and utility roles based on the task. They can use one family with deliberate weights or a complementary pair; do not pair fonts by novelty alone.
- Visual personality can come from form (soft/hard, humanist/geometric, serif/sans), weight, tracking, caps, and line breaks even with an otherwise neutral font.
- Aim for a compact readable hierarchy. Very heavy text can communicate warmth/playfulness or assured authority depending on letterform; thin ultra-wide text can feel editorial but may harm contrast.
- Tune line breaks and headline width intentionally. Avoid widows, orphan words, random one-word wraps, overlong copy, or squeezed headlines.
- Use optical alignment as well as geometric alignment. Logo, glyph side bearings, icons, and type have different visual mass.
- Body text must be comfortably readable on target platforms and support accessibility scaling. Don't shrink useful information merely to fit an imagined layout.
- Do not identify an exact font based only on a screenshot. Check available font files, licenses, and the project's actual type system.

## Spacing is relational

- Treat proximity as semantics: headline and explanation should feel connected; a CTA may form a distinct action cluster.
- Establish a restrained spacing vocabulary (for example 4/8-derived increments) but vary density by content role and viewport. Not every gap is 24px.
- Allow occasional large pauses for emphasis, not enormous dead zones that displace necessary information.
- Balance the *visual weight* of occupied versus empty zones. Eyeball the whole viewport, not just individual component margins.
- Don't assume vertical centering is optically balanced. Let the subject, text block, device chrome, and primary action determine composition.

## Color and material

- Explain six parts: dominant surfaces; text; accent meanings; supporting status/data colors; approximate area proportions; relationship to imagery, texture or materials. Judge them on realistic screens in the supported themes, not equal-sized swatches.
- Choose semantic roles and relevant state pairings after the direction is selected. Check computed contrast, including selected, focus, error and disabled distinctions under the applicable criterion. Keep a palette within its product, never as a universal default.
- Warm/cool neutrals and near-black hues carry personality. Pure white/black can be perfectly appropriate; do not force tasteful off-white.
- Give accents defined roles and deliberate proportions. Multiple accents can be appropriate for data, status, content or identity; preserve action hierarchy. The branding accent need not be the CTA color.
- Choose border radii, stroke widths, shadow/texture, and icon weight as one coherent material language.
- Judge material choices by their contribution to understanding, confidence, pleasure or identity. A material may carry atmosphere without explaining a feature; assess it in the whole composition, including its readability and performance cost.

## Signature and imagery

- The signature should emerge from something the target can own: real product UI, distinctive diagrams, construction materials, editorial crops, tailored illustration, meaningful data, a genuinely unusual typographic voice, or authentic customer/work photography.
- Avoid fake proof and stock-photo clichés. If real assets aren't available, don't pretend generated imagery shows actual customers or sites.
- Do not add a random animated blob to a website that needs to convey serious operational competence. Equally, don't make a creative brand indistinguishable from a generic enterprise dashboard.
- If visual output can be inspected, remove the logo mentally. If everything else is generic, improve type, composition, imagery, and product specificity instead of increasing decoration.

## Moment hypothesis

Distinguish an occasional beat (first result, onboarding, completion) from everyday feel (direct manipulation, spatial continuity, less expected work). An attractive transition is not automatically memorable. Describe the leading candidate with trigger, benefit, intended feeling, visible behavior, expected 2nd/20th/500th-use behavior, cost, accessible alternatives, confirming/refuting evidence and rejected candidates. Prototype within build scope and report what was actually exercised, including rapid interruption. Future frequency claims stay hypotheses.

Character must remain in composition, typography, writing, materials and everyday interaction when the special moment is removed. When none improves the experience, retain that finding instead of manufacturing spectacle.

## Motion and native feel

- Motion should show state, spatial continuity, progress, transformation, or a purposeful moment of delight.
- Give immediate feedback. Commit ordinary actions on click/release, preserving cancellation and keyboard activation; pointer-down feedback is not authorization to perform the action.
- Match motion to frequency, task and personality. Frequent interactions must retarget from their current state, remain interruptible and never make input wait. Respect reduced-motion preferences with legible feedback and less spatial movement. Numeric durations, press scales and easing curves are hypotheses, not cross-project requirements.
- Avoid permanent motion behind text, multiple simultaneously competing animations, scroll hijacking, keyboard-induced layout shifts, and fake loading experiences.
- A native-feeling interaction is predictable and stable. The user should not perceive zoom jumps, focus flicker, content displacement, or phantom taps.

## Detail inspection

Inspect optical alignment and text wrapping; stable numeric columns where values change; related corner geometry where surfaces are concentric; icon weight and meaning; image crop and reserved space; and the difference between structural borders and elevation. Apply corrections in the existing styling system. None implies a universal font, stroke, radius or press scale.

For motion, compare normal speed and slowed playback when available, interrupt and reverse mid-transition, and inspect the next action while the first is settling. Prefer explicit animated properties. Profile expensive paints or compositing before adding performance hints; CSS, transforms or a motion library alone do not guarantee smoothness. Check touch/hover differences and alternative input paths.

## Anti-patterns, without banning whole styles

- Random purple/cyan gradients; gratuitous glows and blurry blobs
- Dozens of generic line icons, repetitive bordered cards and three-column feature rows
- Massive heading with no concrete value; empty CTA like "Explore possibilities"
- "AI magic" graphics that never explain what the product produces
- Made-up data, unverified reviews and logos
- Overly polished but anonymous visual system with zero identifiable brand character
- Full-screen whitespace that fails the purpose or hides key details

Any technique may be right when it has an explicit product, brand, or functional reason. Judge the work in context, not by a universal blacklist.
