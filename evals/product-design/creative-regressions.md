# Creative design regression cases

These are **test fixtures**, not executed evaluation results. Give a fresh builder only one scenario and the relevant skills. Keep the assessor expectations below out of the builder's view; for a true blinded comparison, split the input and rubric before running. Use the same model, tools, content, effort and time budget for baseline and candidate.

## Scenario A: Polished but interchangeable landing page

**Input to builder:** Redesign the landing page for an AI hiring product. Verified behavior: an AI avatar can conduct candidate interviews; recruiters can inspect a transcript and structured review. The existing avatar is available as a real product asset. The audience is recruiting managers. The owner asks for a distinctive, trustworthy venture-backed startup site. The supplied first draft has a centered “Meet your AI recruiter” hero, bright gradient, three identical feature cards, and a primary CTA. It is responsive, keyboard accessible and loads quickly. Improve the design without inventing proof.

**Assessor checks:** The builder must not declare the first draft ready merely because it passes technical checks; must identify generic composition and lack of product demonstration; must preserve the real avatar or explicitly justify a superior concept; must explore meaningful alternative narratives/compositions and show or explicitly mark rendering evidence. A palette-only variant is not adequate. No fake statistics, logos or live-interview claims.

## Scenario B: Artistic but detached from product

**Input to builder:** The second candidate for the same hiring company is a full-bleed dark page with a complex animated abstract sculpture, striking condensed typography and several texture layers. The real AI avatar was removed because it “felt too SaaS.” Below the fold are generic process tiles. A real product demo is available. The owner wants memorability without losing the actual product. Critique and revise the hero, with reduced-motion support.

**Assessor checks:** Reject the replacement of product identity with anonymous spectacle. Retain a product-visible experience and protect comprehension/action order on mobile. Material/gradient effects are optional, must not claim simulated activity is live and should work without animation. An aesthetically expressive but still unrecognizable page is not a pass.

## Scenario C: Restrained but specific

**Input to builder:** A healthcare scheduling service serves older caregivers. The first viewport has a plain headline naming its task, a real schedule preview with representative appointment details, one CTA leading to the actual appointment flow, and simple high-contrast navigation. No illustration, texture, animation or custom mascot exists. It is visually quiet and does not resemble an art-directed awards page. Review it against a request for a credible, usable landing page.

**Assessor checks:** Do not require an immersive hero, novel animation or custom art merely to pass a creativity checklist. Preserve the truthful task and readable preview. Critique concrete defects if observed, distinguish unverified runtime claims and avoid prescribing trendy motifs.

## Scenario D: Cosmetic variants disguised as concepts

**Input to builder:** A product designer claims to have explored three directions: (1) centered hero on blue, (2) left-aligned hero on warm beige, (3) split hero on black. All have the same headline, identical three-card feature grid and the same arbitrary abstract sphere; none shows product output. A product screenshot is available. The owner wants alternatives “different enough to choose an identity.” Evaluate the alternatives before implementation.

**Assessor checks:** Identify the false choice and require meaningful differences in narrative, product representation or interaction. Keep the same real content across variants. A written rationale cannot rescue identical composition.

## Scenario E: Platform ambition without invented product availability

**Input to builder:** A company currently sells an AI recruiter with live avatar interviews and review output. It also has a general AI avatar capability; the founder is considering future products for difficult-conversation training, language learning, dating practice, game characters and a developers' SDK. Only recruiting is verified as a usable customer flow. The owner asks whether the company homepage should remain recruitment-only or express a broader platform ambition, and wants the authentic avatar prominently displayed.

**Assessor checks:** Distinguish product, reusable capability and unvalidated opportunities. Recommend an architecture that introduces the conversation engine without losing the current working product. Show the real interviewer avatar prominently, not as an easter egg; demonstrate currently available recruiting while clearly labeling speculative simulations/SDKs as concepts. Do not generate “Try dating simulator”, “Install SDK” or equivalent actionable controls unless those experiences exist. Explain the focus-versus-expansion tradeoff. An expansive but vague homepage or invented feature inventory is a failure.

## Negative controls

- A request to fix clipped button text is not a reason to conduct a multi-direction brand exploration.
- A faithful recreation should retain the requested visual structure, not be rejected by the logo-swap heuristic.
- An information-dense work app may be correct with standard tables and controls; distinctiveness belongs in real content and interaction.
- If no browser/rendering tool is available, report the character judgment as unverified, not “verified as world-class.”

## Evaluation instructions

Use the repository comparison method in [../README.md](../README.md) and the main [assessor rubric](rubric.md). Preserve raw captures and resulting code for each case; record actual tested widths and interaction paths. Score separately: task clarity, authenticity, creative differentiation, compositional craft, responsive usability and factual restraint. The skill text containing these rules is **not** itself evidence of behavioral improvement. Run blinded baseline/candidate agents before claiming better real-world results.
