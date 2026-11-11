"""Synthetic evidence-metadata tests; not evidence of actual UI quality."""
import hashlib
import importlib.util
import json
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path

PATH = Path(__file__).resolve().parents[1] / 'skills/ui-quality-gate/scripts/check_report.py'
spec = importlib.util.spec_from_file_location('quality_record', PATH)
gate = importlib.util.module_from_spec(spec)
spec.loader.exec_module(gate)


class QualityRecordTests(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.addCleanup(self.tmp.cleanup)
        self.root = Path(self.tmp.name)
        self.files = {'view.html': '<button>Save</button>', 'inspection.txt': 'Synthetic fixture, not a real inspection.'}
        for name, content in self.files.items():
            (self.root / name).write_text(content)
        self.report = {
            'scope': 'flow',
            'candidate': {'view.html': self.digest('view.html')},
            'evidence': [
                {'id': 'geometry', 'path': 'inspection.txt', 'sha256': self.digest('inspection.txt'), 'kind': 'measurement'},
                {'id': 'journey', 'path': 'inspection.txt', 'sha256': self.digest('inspection.txt'), 'kind': 'interaction'}
            ],
            'areas': [{'id': area, 'status': 'pass', 'observation': 'Synthetic structural test only.', 'evidence': ['geometry', 'journey']} for area in sorted(gate.AREAS)],
            'findings': [], 'verdict': 'ready'
        }

    def digest(self, name):
        return hashlib.sha256((self.root / name).read_bytes()).hexdigest()

    def errors(self):
        return gate.validate(self.report, self.root)

    def test_complete_record_structure(self):
        self.assertEqual(self.errors(), [])

    def test_cli_checks_actual_files_and_exit_status(self):
        path = self.root / 'report.json'
        path.write_text(json.dumps(self.report))
        command = [sys.executable, str(PATH), str(path), '--root', str(self.root)]
        result = subprocess.run(command, capture_output=True, text=True)
        self.assertEqual(result.returncode, 0, result.stdout)
        self.assertIn('does not certify visual quality', result.stdout)
        (self.root / 'view.html').write_text('changed after review')
        result = subprocess.run(command, capture_output=True, text=True)
        self.assertEqual(result.returncode, 1)
        self.assertIn('stale', result.stdout)

    def test_changed_implementation_invalidates_record(self):
        (self.root / 'view.html').write_text('<button disabled>Save</button>')
        self.assertTrue(any('stale' in e for e in self.errors()))

    def test_missing_artifact_rejected(self):
        (self.root / 'inspection.txt').unlink()
        self.assertTrue(any('missing file' in e for e in self.errors()))

    def test_outside_project_artifact_rejected(self):
        self.report['evidence'][0]['path'] = '../outside.txt'
        self.assertTrue(any('outside project' in e for e in self.errors()))

    def test_omitted_area_cannot_claim_flow_readiness(self):
        self.report['areas'].pop()
        self.assertTrue(any('twelve' in e for e in self.errors()))

    def test_unverified_is_not_ready(self):
        self.report['areas'][0]['status'] = 'unverified'
        self.assertTrue(any('verdict must be unverified' in e for e in self.errors()))
        self.report['verdict'] = 'unverified'
        self.assertEqual(self.errors(), [])

    def test_open_major_requires_blocked(self):
        self.report['findings'] = [{'id': 'F1', 'location': 'primary action', 'observation': 'Not reachable', 'severity': 'major', 'status': 'open'}]
        self.assertTrue(any('verdict must be blocked' in e for e in self.errors()))
        self.report['verdict'] = 'blocked'
        self.assertEqual(self.errors(), [])

    def test_major_cannot_be_accepted_away(self):
        self.report['findings'] = [{'id': 'F1', 'location': 'primary action', 'observation': 'Not reachable', 'severity': 'major', 'status': 'accepted', 'resolution': 'Time expired'}]
        self.assertTrue(any('cannot be accepted' in e for e in self.errors()))

    def test_deferred_minor_requires_a_reason(self):
        self.report['findings'] = [{'id': 'F1', 'location': 'icon', 'observation': 'Optical mismatch', 'severity': 'minor', 'status': 'open'}]
        self.assertTrue(any('deferred minor needs a reason' in e for e in self.errors()))
        self.report['findings'][0]['resolution'] = 'Outside the changed component; recorded for later.'
        self.assertEqual(self.errors(), [])

    def test_resolved_requires_recheck(self):
        self.report['findings'] = [{'id': 'F1', 'location': 'primary action', 'observation': 'Not reachable', 'severity': 'major', 'status': 'resolved', 'resolution': 'Edited code'}]
        self.assertTrue(any('recheck evidence' in e for e in self.errors()))

    def resolved_finding(self, areas, evidence):
        self.report['findings'] = [{'id': 'F1', 'location': 'toolbar',
            'observation': 'Reported defect', 'severity': 'major',
            'status': 'resolved', 'resolution': 'Rechecked corrected result',
            'areas': areas, 'evidence': evidence}]

    def test_rendered_finding_cannot_close_with_source_only(self):
        self.report['evidence'].append({'id': 'edit', 'path': 'view.html',
            'sha256': self.digest('view.html'), 'kind': 'source'})
        self.resolved_finding(['spacing'], ['edit'])
        self.assertTrue(any('rendered recheck' in e for e in self.errors()))

    def test_behavior_finding_cannot_close_with_measurement_only(self):
        self.resolved_finding(['accessibility'], ['geometry'])
        self.assertTrue(any('operated recheck' in e for e in self.errors()))
        self.report['findings'][0]['evidence'].append('journey')
        self.assertEqual(self.errors(), [])

    def test_resolved_finding_requires_real_affected_areas(self):
        self.resolved_finding([], ['geometry', 'journey'])
        self.assertTrue(any('affected areas' in e for e in self.errors()))
        self.report['findings'][0]['areas'] = ['invented']
        self.assertTrue(any('must be inspected' in e for e in self.errors()))

    def test_mixed_finding_requires_both_recheck_modalities(self):
        self.resolved_finding(['spacing', 'interaction'], ['journey'])
        self.assertTrue(any('rendered recheck' in e for e in self.errors()))
        self.report['findings'][0]['evidence'].append('geometry')
        self.assertEqual(self.errors(), [])

    def test_accessibility_pass_requires_operated_evidence(self):
        self.report['scope'] = 'fix'
        self.report['areas'] = [{'id': 'accessibility', 'status': 'pass', 'observation': 'Source inspected, keyboard not operated.', 'evidence': ['geometry']}]
        self.report['evidence'][0]['kind'] = 'source'
        self.assertTrue(any('operated behavior required' in e for e in self.errors()))

    def test_source_alone_cannot_prove_render_or_interaction(self):
        for evidence in self.report['evidence']:
            evidence['kind'] = 'source'
        errors = self.errors()
        self.assertTrue(any('rendered evidence' in e for e in errors))
        self.assertTrue(any('operated behavior' in e for e in errors))

    def test_all_not_applicable_is_not_an_inspection(self):
        for area in self.report['areas']:
            area['status'] = 'na'
        self.assertTrue(any('applicable' in e for e in self.errors()))

    def test_unknown_evidence_rejected(self):
        self.report['areas'][0]['evidence'] = ['invented']
        self.assertTrue(any('unknown evidence' in e for e in self.errors()))

    def test_narrow_fix_does_not_require_full_product_review(self):
        self.report['scope'] = 'fix'
        self.report['areas'] = [a for a in self.report['areas'] if a['id'] == 'spacing']
        self.assertEqual(self.errors(), [])


if __name__ == '__main__':
    unittest.main()
