# Type mechanics

## Roles before sizes

For each actual text role record family/fallback, weight, size, line-height, tracking, width/measure and responsive behavior. Use semantic headings for the content outline; a large statistic is not automatically a heading. Repeated card titles should occupy a consistent semantic level.

Establish hierarchy with meaningful contrast in size, weight and spacing. Keep related labels and values close. Avoid making every label bold or every supporting line faint. Let the authoring system carry hierarchy instead of adding boxes around sentences.

## Rhythm and measure

Match line-height to size, length and script. Short large headlines usually need tighter leading than paragraphs. For ordinary Latin paragraphs, approximately 45–75 characters per line is a useful starting range, not a conformance rule; verify the actual reading context. Reading surfaces and compact controls need different measures.

Check the line box, glyph baseline and surrounding padding separately. A mathematically centered label may look low because of its font metrics. Align neighboring text baselines before nudging icons. Record optical adjustments locally; do not corrupt a shared spacing token to fix one glyph.

Tune heading width and copy before inserting hard line breaks. A desktop break often fails on mobile or after translation. Inspect at nearby widths, not just exact target captures. Balance line lengths when it improves reading, without hiding content or reordering words.

## Numbers, language and emphasis

Use tabular figures for changing/aligned numeric columns when supported; proportional figures can be appropriate in prose. Align comparable numeric magnitudes consistently. Format dates, decimals, currency, units and plurals for the actual locale; preserve precision and meaning. Separate code identifiers from ordinary copy.

Use emphasis with a consistent purpose. Uppercase can serve short labels but needs script-aware handling and sufficient readability. Avoid broad letter spacing on long body text. Check ambiguous glyphs such as 0/O and 1/l/I for technical content.

## Wrapping, truncation and fallback

Define which content wraps and which can truncate, along with how the complete value is recovered. Critical amounts, errors and primary actions need usable full meaning. A tooltip alone is insufficient for a touch user. Test long names, translated labels, unbroken URLs and empty/missing values.

Reserve suitable space and load only necessary font resources. Check fallback and final font states for disruptive shifts. Font technology and caching choices depend on the actual stack; inspect existing delivery before adding requests. A local font file still needs appropriate usage rights.

Test text enlargement to 200% without loss of content/function under the applicable requirement. Inspect narrow reflow independently. Fixed heights and viewport-only text sizing can frustrate scaling. Keep browser zoom available. Observe actual mobile input behavior rather than declaring a font-size number a universal solution.

## Return evidence

Inspect the full screen at normal scale, then tight crops of the heading, data and controls, then the whole screen again. Record computed values when diagnosing metrics. A screenshot alone cannot identify the exact font or CSS line-height. Describe unrendered metrics as proposals.
