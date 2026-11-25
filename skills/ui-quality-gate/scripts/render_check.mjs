#!/usr/bin/env node
/**
 * Render check: load a running page at phone and desktop widths, in light and dark, and measure
 * what a reviewer would otherwise check by hand. It reports facts, not a design verdict.
 *
 *   node render_check.mjs <url> [--out render-check] [--widths 390,1280] [--no-dark] [--tabs 40]
 *
 * Run it from the project directory: Playwright (`playwright` or `@playwright/test`) and, for the
 * accessibility scan, `axe-core` are loaded from there. Without axe-core the scan is skipped and
 * reported as unverified.
 *
 * Checks, per width and color scheme:
 *   wider-than-screen  elements that reach past the right edge, so the page scrolls or is cut off
 *   text-spill         text wider than its own box, drawn over its neighbours
 *   scroll-region      areas that scroll sideways, and whether a keyboard reaches them (to check)
 *   console-error      console errors and uncaught exceptions
 *   axe                axe-core violations (serious and critical fail; others are to check)
 * Once, at the first width in light: Tab through up to --tabs stops for focus with no outline or
 * ring (to check), and focus rings cut off by an ancestor that clips (fail).
 *
 * Pages load with reduced motion, so scrolling and transitions have settled when measured.
 * Side effects: starts headless Chromium, loads only the given URL and what it requests, and writes
 * screenshots and report.json into --out. It never changes the page's files or data.
 * Exit status: 0 nothing failed, 1 at least one failure, 2 setup error (no Playwright, or the page
 * did not load).
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { join, relative, resolve } from 'node:path';

const argv = process.argv.slice(2);
const opt = (name, fallback) => {
  const i = argv.indexOf(`--${name}`);
  return i >= 0 && argv[i + 1] ? argv[i + 1] : fallback;
};
const url = argv.find(
  (a, i) => !a.startsWith('--') && !argv[i - 1]?.match(/^--(out|widths|tabs)$/),
);
const out = resolve(opt('out', 'render-check'));
const widths = opt('widths', '390,1280')
  .split(',')
  .map(Number)
  .filter((w) => w > 0);
const schemes = argv.includes('--no-dark') ? ['light'] : ['light', 'dark'];
const maxTabs = Math.min(Number(opt('tabs', 40)) || 40, 200);

const setupError = (message) => {
  console.error(`render check: ${message}`);
  process.exit(2);
};
if (!url || !widths.length)
  setupError('usage: node render_check.mjs <url> [--out dir] [--widths 390,1280] [--no-dark]');

const fromProject = createRequire(join(process.cwd(), 'package.json'));
const load = (names) => {
  for (const name of names) {
    try {
      return fromProject(name);
    } catch {}
  }
  return null;
};
const playwright = load(['playwright', '@playwright/test']);
if (!playwright)
  setupError(
    `no Playwright in ${process.cwd()}. Run this from the project directory, or install it: ` +
      'npm install -D playwright && npx playwright install chromium',
  );
const axePath = (() => {
  for (const base of [fromProject, ...['@axe-core/playwright'].map(nested)].filter(Boolean)) {
    try {
      return base.resolve('axe-core/axe.min.js');
    } catch {}
  }
  return null;
})();
function nested(name) {
  try {
    return createRequire(fromProject.resolve(name));
  } catch {
    return null;
  }
}

// Runs in the page, installed before the page's own scripts. Playwright sends its source, so it
// must not use anything from this module.
function installRenderCheck() {
  window.__renderCheck = (() => {
    const css = new Map();
    const style = (el) => css.get(el) ?? (css.set(el, getComputedStyle(el)), css.get(el));
    const describe = (el) => {
      const cls =
        typeof el.className === 'string'
          ? el.className.split(/\s+/).filter(Boolean).slice(0, 3)
          : [];
      const text = (el.getAttribute('aria-label') || el.innerText || '')
        .trim()
        .replace(/\s+/g, ' ');
      return (
        el.tagName.toLowerCase() +
        (el.id ? '#' + el.id : '') +
        cls.map((c) => '.' + c).join('') +
        (text ? ' "' + text.slice(0, 48) + (text.length > 48 ? '…' : '') + '"' : '')
      );
    };
    const clips = (el) => style(el).overflowX !== 'visible' || style(el).overflowY !== 'visible';
    const clippedAncestor = (el) => {
      for (let p = el.parentElement; p && p !== document.body; p = p.parentElement)
        if (clips(p)) return p;
      return null;
    };
    const innermost = (list) => list.filter((el) => !list.some((o) => o !== el && el.contains(o)));
    const focusable = 'a[href],button,input,select,textarea,[tabindex]:not([tabindex="-1"])';
    function measure() {
      css.clear();
      const W = window.innerWidth;
      const all = [...document.body.querySelectorAll('*')];
      const wider = innermost(
        all
          .filter((el) => {
            const r = el.getBoundingClientRect();
            return (
              r.width > 0 &&
              r.right > W + 1 &&
              style(el).position !== 'fixed' &&
              !clippedAncestor(el)
            );
          })
          .slice(0, 300),
      ).map((el) => ({
        element: describe(el),
        right: Math.round(el.getBoundingClientRect().right),
      }));
      const spill = all
        .filter(
          (el) =>
            [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim()) &&
            style(el).display !== 'inline' &&
            style(el).overflowX === 'visible' &&
            el.clientWidth > 0 &&
            el.scrollWidth > el.clientWidth + 1,
        )
        .map((el) => ({ element: describe(el), width: el.clientWidth, content: el.scrollWidth }));
      const scroll = all
        .filter(
          (el) => /auto|scroll/.test(style(el).overflowX) && el.scrollWidth > el.clientWidth + 1,
        )
        .map((el) => ({
          element: describe(el),
          width: el.clientWidth,
          content: el.scrollWidth,
          keyboard: el.tabIndex >= 0 || !!el.querySelector(focusable),
          name: el.getAttribute('aria-label') || el.getAttribute('aria-labelledby') || null,
        }));
      const bg =
        [document.body, document.documentElement]
          .map((el) => style(el).backgroundColor)
          .find((c) => c !== 'rgba(0, 0, 0, 0)' && c !== 'transparent') ?? 'none';
      return {
        screen: W,
        page: document.documentElement.scrollWidth,
        background: bg,
        wider,
        spill,
        scroll,
      };
    }
    function focus() {
      const el = document.activeElement;
      if (!el || el === document.body || el === document.documentElement) return null;
      if (el.__renderCheckSeen) return { repeat: true };
      el.__renderCheckSeen = true;
      css.clear();
      const s = style(el);
      const r = el.getBoundingClientRect();
      const outline = s.outlineStyle !== 'none' && parseFloat(s.outlineWidth) > 0;
      // How far the ring reaches past the element: the outline and its offset when there is one,
      // otherwise the widest outer box-shadow (spread plus half the blur), as ring utilities draw.
      const shadows = [
        ...s.boxShadow.matchAll(/(-?[\d.]+)px (-?[\d.]+)px (-?[\d.]+)px (-?[\d.]+)px/g),
      ]
        .filter(() => !s.boxShadow.includes('inset'))
        .map((m) => Number(m[4]) + Number(m[3]) / 2);
      const pad = outline
        ? parseFloat(s.outlineWidth) + Math.max(0, parseFloat(s.outlineOffset) || 0)
        : Math.max(0, ...shadows);
      let clippedBy = null;
      for (
        let p = el.parentElement;
        pad > 0 && p && p !== document.documentElement;
        p = p.parentElement
      ) {
        if (!clips(p)) continue;
        const b = p.getBoundingClientRect();
        // An element larger than the area that clips it, such as a table row in a scroll area, is
        // cut by design along that axis; only a ring that could fit and does not is a defect.
        const x =
          r.width + 2 * pad <= b.width &&
          (r.left - pad < b.left - 0.5 || r.right + pad > b.right + 0.5);
        const y =
          r.height + 2 * pad <= b.height &&
          (r.top - pad < b.top - 0.5 || r.bottom + pad > b.bottom + 0.5);
        if (x || y) {
          clippedBy = describe(p);
          break;
        }
      }
      return {
        element: describe(el),
        ring: outline || s.boxShadow !== 'none',
        clippedBy,
        empty: r.width < 1 || r.height < 1,
      };
    }
    return { measure, focus };
  })();
}

const findings = [];
const plural = (n, word) => `${n} ${word}${n === 1 ? '' : 's'}`;
const shown = (path) =>
  relative(process.cwd(), path).startsWith('..') ? path : relative(process.cwd(), path);
// The same finding at several widths or schemes is listed once, with every place it appeared.
const add = (status, check, where, message, items = []) => {
  items = items.slice(0, 10);
  const same = findings.find(
    (f) =>
      f.status === status &&
      f.check === check &&
      f.message === message &&
      f.items.join('\n') === items.join('\n'),
  );
  if (same) same.where.push(where);
  else findings.push({ status, check, where: [where], message, items });
};

let browser;
try {
  browser = await playwright.chromium.launch();
} catch (error) {
  const reason = error.message.split('\n')[0];
  setupError(`Chromium did not start (${reason}). Run: npx playwright install chromium`);
}
const views = [];
const backgrounds = {};
try {
  for (const width of widths) {
    for (const scheme of schemes) {
      const where = `${width} ${scheme}`;
      const page = await browser.newPage({
        viewport: { width, height: 900 },
        colorScheme: scheme,
        // Reduced motion, so smooth scrolling and transitions have settled when a value is read.
        reducedMotion: 'reduce',
      });
      const errors = [];
      page.on('console', (m) => m.type() === 'error' && errors.push(m.text().slice(0, 200)));
      page.on('pageerror', (e) => errors.push(e.message.slice(0, 200)));
      await page.addInitScript(installRenderCheck);
      if (axePath) await page.addInitScript({ path: axePath });
      const response = await page
        .goto(url, { waitUntil: 'networkidle', timeout: 30_000 })
        .catch((e) => e);
      if (response instanceof Error)
        setupError(`${url} did not load: ${response.message.split('\n')[0]}`);
      if (response && response.status() >= 400) setupError(`${url} answered ${response.status()}`);
      await page.evaluate(() => document.fonts.ready);
      await page.waitForTimeout(300);
      const m = await page.evaluate(() => window.__renderCheck.measure());
      backgrounds[width] = { ...backgrounds[width], [scheme]: m.background };
      mkdirSync(out, { recursive: true });
      const shot = join(out, `${width}-${scheme}.png`);
      await page.screenshot({ path: shot, fullPage: true });
      views.push({ width, scheme, screen: m.screen, page: m.page, screenshot: shown(shot) });

      if (m.wider.length || m.page > m.screen + 1)
        add(
          'fail',
          'wider-than-screen',
          where,
          `content is ${m.page} px wide on a ${m.screen} px screen`,
          m.wider.map((w) => `${w.element} reaches ${w.right} px`),
        );
      if (m.spill.length)
        add(
          'fail',
          'text-spill',
          where,
          'text is wider than its box',
          m.spill.map((s) => `${s.element}: ${s.content} px in ${s.width} px`),
        );
      for (const s of m.scroll)
        add(
          'check',
          'scroll-region',
          where,
          `${s.element} scrolls sideways (${s.content} px in ${s.width} px); ` +
            `${s.keyboard ? 'keyboard can reach it' : 'no keyboard stop inside it'}, ` +
            `${s.name ? `named "${s.name}"` : 'no accessible name'}`,
        );
      if (errors.length)
        add('fail', 'console-error', where, plural(errors.length, 'console error'), errors);

      if (axePath) {
        const violations = await page.evaluate(async () => {
          const result = await window.axe.run(document, { resultTypes: ['violations'] });
          return result.violations.map((v) => ({
            id: v.id,
            impact: v.impact,
            help: v.help,
            nodes: v.nodes.length,
            target: v.nodes[0]?.target?.join(' '),
          }));
        });
        for (const v of violations)
          add(
            ['serious', 'critical'].includes(v.impact) ? 'fail' : 'check',
            'axe',
            where,
            `${v.id} (${v.impact}): ${v.help}, ${plural(v.nodes, 'element')}, first ${v.target}`,
          );
      }

      if (width === widths[0] && scheme === 'light') {
        const stops = [];
        for (let i = 0; i < maxTabs; i++) {
          await page.keyboard.press('Tab');
          const f = await page.evaluate(() => window.__renderCheck.focus());
          if (!f || f.repeat) break;
          stops.push(f);
        }
        views.at(-1).tabStops = stops.length;
        if (!stops.length) add('check', 'focus', where, 'Tab reached nothing on the page');
        const bare = stops.filter((s) => !s.ring);
        if (bare.length)
          add(
            'check',
            'focus',
            where,
            'focus shows no outline or ring; check what else shows it',
            bare.map((s) => s.element),
          );
        const clipped = stops.filter((s) => s.clippedBy || s.empty);
        if (clipped.length)
          add(
            'fail',
            'focus',
            where,
            'focus ring cut off, or focus on an element with no size',
            clipped.map((s) =>
              s.empty ? `${s.element} has no size` : `${s.element} inside ${s.clippedBy}`,
            ),
          );
      }
      await page.close();
    }
  }
} finally {
  await browser.close();
}

for (const [width, bg] of Object.entries(backgrounds))
  if (bg.dark && bg.dark === bg.light)
    add(
      'check',
      'dark',
      `${width}`,
      'dark scheme looks the same as light; if the theme switches by ' +
        'class or setting, check dark by hand',
    );
if (!axePath)
  add('unverified', 'axe', 'all', 'axe-core is not installed in this project; no scan ran');

const report = { url, checkedAt: new Date().toISOString(), views, findings };
writeFileSync(join(out, 'report.json'), `${JSON.stringify(report, null, 2)}\n`);

const count = (s) => findings.filter((f) => f.status === s).length;
console.log(`render check: ${url}`);
for (const v of views) {
  const tabs = v.tabStops === undefined ? '' : ` · ${plural(v.tabStops, 'tab stop')}`;
  const view = `${v.width} ${v.scheme}`.padEnd(11);
  console.log(`  ${view} page ${v.page}/${v.screen} px${tabs} · ${v.screenshot}`);
}
for (const f of findings) {
  console.log(
    `${f.status.toUpperCase().padEnd(10)} ${f.check} [${f.where.join(', ')}] ${f.message}`,
  );
  for (const item of f.items) console.log(`           ${item}`);
}
console.log(
  `\n${count('fail')} failed, ${count('check')} to check, ${count('unverified')} unverified. ` +
    `Report: ${shown(join(out, 'report.json'))}`,
);
console.log('Measurements only: look at the screenshots; this does not judge the design.');
process.exitCode = count('fail') ? 1 : 0;
