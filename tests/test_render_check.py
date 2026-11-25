"""Render check on synthetic pages. Browser tests run only when PLAYWRIGHT_PROJECT names a directory
with Playwright and Chromium installed; the setup failures run wherever Node is available."""
import json
import os
import shutil
import subprocess
import tempfile
import unittest
from pathlib import Path

SCRIPT = Path(__file__).resolve().parents[1] / 'skills/ui-quality-gate/scripts/render_check.mjs'
NODE = shutil.which('node')
PROJECT = os.environ.get('PLAYWRIGHT_PROJECT')

HEAD = '<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Synthetic</title>' \
    '<meta name="viewport" content="width=device-width">'
BROKEN = HEAD + '''<style>body { margin: 0; font: 16px sans-serif; }
button:focus-visible { outline: 3px solid blue; } .bare:focus-visible { outline: none; }</style>
</head><body><main><h1>Synthetic fixture</h1>
<div style="width: 600px">A row wider than a phone</div>
<div style="width: 80px; white-space: nowrap">A label that does not fit its box</div>
<div style="overflow-x: auto; width: 200px"><div style="width: 500px">A wide table</div></div>
<div style="overflow: hidden; width: 120px; height: 40px">
<button style="margin: 0">Cut</button></div>
<button class="bare">No ring</button>
<script>console.error('Synthetic failure');</script></main></body></html>'''
CLEAN = HEAD + '''<style>body { margin: 0; padding: 16px; font: 16px sans-serif; color: #111;
background: #fff; }
@media (prefers-color-scheme: dark) { body { color: #eee; background: #111; } }
button:focus-visible { outline: 2px solid #0b57d0; outline-offset: 2px; }
a { color: inherit; } .hit { position: relative; display: inline-flex; }
.hit::after { content: ''; position: absolute; inset: -4px; }</style></head>
<body><main><h1>Synthetic fixture</h1><p>Nothing here overflows.</p><button>Save</button>
<a class="hit" href="#top">A link with a larger hit area</a></main></body></html>'''


@unittest.skipUnless(NODE, 'needs Node')
class RenderCheckTests(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.addCleanup(self.tmp.cleanup)
        self.root = Path(self.tmp.name)

    def run_check(self, *args, cwd=None):
        return subprocess.run([NODE, str(SCRIPT), *args], cwd=cwd or self.root,
                              capture_output=True, text=True, timeout=180)

    def page(self, name, html):
        path = self.root / f'{name}.html'
        path.write_text(html)
        return path.as_uri()

    def test_usage_error_without_url(self):
        result = self.run_check()
        self.assertEqual(result.returncode, 2)
        self.assertIn('usage', result.stderr)

    def test_setup_error_without_playwright(self):
        result = self.run_check('http://127.0.0.1:9/')
        self.assertEqual(result.returncode, 2)
        self.assertIn('no Playwright', result.stderr)
        self.assertFalse((self.root / 'render-check').exists())

    @unittest.skipUnless(PROJECT, 'set PLAYWRIGHT_PROJECT to run the browser tests')
    def test_reports_each_planted_defect(self):
        out = self.root / 'out'
        result = self.run_check(self.page('broken', BROKEN), '--out', str(out), '--widths', '390',
                                '--no-dark', cwd=PROJECT)
        self.assertEqual(result.returncode, 1, result.stdout + result.stderr)
        report = json.loads((out / 'report.json').read_text())
        found = {(f['status'], f['check']) for f in report['findings']}
        for expected in [('fail', 'wider-than-screen'), ('fail', 'text-spill'),
                         ('check', 'scroll-region'), ('fail', 'console-error'),
                         ('check', 'focus'), ('fail', 'focus')]:
            self.assertIn(expected, found)
        cut = next(f for f in report['findings'] if f['status'] == 'fail' and f['check'] == 'focus')
        self.assertIn('"Cut"', cut['items'][0])
        self.assertTrue((out / '390-light.png').is_file())

    @unittest.skipUnless(PROJECT, 'set PLAYWRIGHT_PROJECT to run the browser tests')
    def test_clean_page_passes(self):
        out = self.root / 'out'
        result = self.run_check(self.page('clean', CLEAN), '--out', str(out), cwd=PROJECT)
        self.assertEqual(result.returncode, 0, result.stdout + result.stderr)
        report = json.loads((out / 'report.json').read_text())
        self.assertEqual([f for f in report['findings'] if f['status'] == 'fail'], [])
        self.assertEqual(len(report['views']), 4)

    @unittest.skipUnless(PROJECT, 'set PLAYWRIGHT_PROJECT to run the browser tests')
    def test_page_that_does_not_load_is_a_setup_error(self):
        out = self.root / 'out'
        missing = (self.root / 'missing.html').as_uri()
        result = self.run_check(missing, '--out', str(out), cwd=PROJECT)
        self.assertEqual(result.returncode, 2)
        self.assertIn('did not load', result.stderr)
        self.assertFalse(out.exists())


if __name__ == '__main__':
    unittest.main()
