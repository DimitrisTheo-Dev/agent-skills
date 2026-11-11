# Sources and limits

Original interaction matrix and workflow, informed by prior inspection of [Emil Kowalski's skills](https://github.com/emilkowalski/skills/tree/715c1807e08c497cfd1dc4feb450a2a3300ef2a9) and [Jakub Krehel's detail guide](https://github.com/jakubkrehel/make-interfaces-feel-better/tree/35545ea1512ad59fa463e6b1f95ca9c052981fe6/skills/make-interfaces-feel-better). No source code, assets or substantial passages are bundled. Timing and easing suggestions remain hypotheses, not universal prescriptions.

Checked 2026-11-11:

- [Apple: Playing haptics](https://developer.apple.com/design/human-interface-guidelines/playing-haptics.md): use appropriate platform meaning, optional discrete feedback and device-aware verification.
- [MDN: Vibration API](https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API): web support is limited; verify the target environment.
- [W3C: Animation from interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html): the cited criterion is Level AAA; supporting reduced motion is a deliberate workflow requirement here, not a claim that this one check establishes AA or AAA conformance.

Native and web capabilities differ. Recheck current APIs before implementation. A source-derived practice is not evidence the target implementation performs well.
