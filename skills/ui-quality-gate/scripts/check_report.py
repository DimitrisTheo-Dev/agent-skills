"""Validate review evidence integrity, not visual quality. Standard library only."""
import argparse
import hashlib
import json
from pathlib import Path

AREAS = {'task', 'structure', 'terminology', 'typography', 'spacing', 'color',
         'components', 'states', 'interaction', 'responsive', 'accessibility', 'character'}
KINDS = {'image', 'recording', 'interaction', 'measurement', 'source'}
VISUAL = {'structure', 'typography', 'spacing', 'color', 'components', 'responsive', 'character'}
BEHAVIOR = {'task', 'states', 'interaction', 'accessibility'}


def validate(report, root):
    errors = []
    root = Path(root).resolve()

    def require(condition, message):
        if not condition:
            errors.append(message)

    def words(value):
        return isinstance(value, str) and bool(value.strip())

    def check_file(path, digest, label):
        if not words(path) or Path(path).is_absolute():
            errors.append(f'{label}: expected a project-relative file')
            return
        p = (root / path).resolve()
        if not p.is_relative_to(root) or not p.is_file():
            errors.append(f'{label}: missing file or path outside project')
            return
        actual = hashlib.sha256(p.read_bytes()).hexdigest()
        require(actual == digest, f'{label}: stale or incorrect SHA-256')

    if not isinstance(report, dict):
        return ['Report must be an object']
    require(report.get('scope') in {'flow', 'fix'}, 'scope must be flow or fix')
    candidate = report.get('candidate')
    if not isinstance(candidate, dict) or not candidate:
        errors.append('candidate must fingerprint the inspected implementation')
    else:
        for path, digest in candidate.items():
            check_file(path, digest, 'candidate ' + path)

    evidence = report.get('evidence', [])
    if not isinstance(evidence, list):
        return errors + ['evidence must be an array']
    by_id = {}
    for item in evidence:
        if not isinstance(item, dict) or not words(item.get('id')):
            errors.append('Each evidence item needs an id')
            continue
        key = item['id']
        require(key not in by_id, f'Duplicate evidence id: {key}')
        require(item.get('kind') in KINDS, f'{key}: invalid evidence kind')
        check_file(item.get('path'), item.get('sha256'), key)
        by_id[key] = item

    def refs(item, label):
        values = item.get('evidence', [])
        if not isinstance(values, list) or any(not isinstance(v, str) for v in values):
            errors.append(f'{label}: evidence must be an array of IDs')
            return set()
        for value in values:
            require(value in by_id, f'{label}: unknown evidence {value}')
        return {by_id[v].get('kind') for v in values if v in by_id}

    areas = report.get('areas')
    if not isinstance(areas, list) or not areas:
        return errors + ['areas must contain the applicable inspections']
    seen, blocked, unverified = set(), False, False
    for area in areas:
        if not isinstance(area, dict):
            errors.append('Area must be an object')
            continue
        key, status = area.get('id'), area.get('status')
        require(isinstance(key, str) and key in AREAS, 'Unknown area id')
        if not isinstance(key, str):
            continue
        require(key not in seen, f'Duplicate area: {key}')
        seen.add(key)
        require(status in {'pass', 'fail', 'unverified', 'na'}, f'{key}: invalid status')
        require(words(area.get('observation')), f'{key}: observation/reason required')
        kinds = refs(area, key)
        if status == 'pass':
            require(bool(kinds), f'{key}: pass requires evidence')
            if key in VISUAL:
                require(bool(kinds & {'image', 'recording', 'measurement'}), f'{key}: rendered evidence required')
            if key in BEHAVIOR:
                require(bool(kinds & {'interaction', 'recording'}), f'{key}: operated behavior required')
        blocked |= status == 'fail'
        unverified |= status == 'unverified'
    if report.get('scope') == 'flow':
        require(seen == AREAS, 'flow must account for all twelve inspection areas')
        required = {'task', 'structure', 'typography', 'spacing', 'color', 'responsive', 'accessibility', 'character'}
        for area in areas:
            if isinstance(area, dict) and area.get('id') in required:
                require(area.get('status') != 'na', f"{area['id']}: applicable to a complete UI flow")

    require(any(isinstance(a, dict) and a.get('status') != 'na' for a in areas), 'At least one area must be applicable')
    findings = report.get('findings')
    if not isinstance(findings, list):
        return errors + ['findings must be an array, including when empty']
    finding_ids = set()
    for finding in findings:
        if not isinstance(finding, dict):
            errors.append('Finding must be an object')
            continue
        for key in ('id', 'location', 'observation'):
            require(words(finding.get(key)), f'Finding requires {key}')
        fid = finding.get('id')
        if isinstance(fid, str):
            require(fid not in finding_ids, f'Duplicate finding: {fid}')
            finding_ids.add(fid)
        severity, status = finding.get('severity'), finding.get('status')
        require(severity in {'blocker', 'major', 'minor'}, 'Invalid severity')
        require(status in {'open', 'resolved', 'accepted'}, 'Invalid finding status')
        kinds = refs(finding, str(fid))
        if status in {'resolved', 'accepted'}:
            require(words(finding.get('resolution')), f'{fid}: resolution/tradeoff required')
        if status == 'resolved':
            require(bool(kinds), f'{fid}: recheck evidence required')
            affected = finding.get('areas')
            if not isinstance(affected, list) or not affected:
                errors.append(f'{fid}: resolved finding requires affected areas')
            else:
                for area_id in affected:
                    require(isinstance(area_id, str) and area_id in seen,
                            f'{fid}: affected area must be inspected')
                    if not isinstance(area_id, str):
                        continue
                    if area_id in VISUAL:
                        require(bool(kinds & {'image', 'recording', 'measurement'}),
                                f'{fid}: rendered recheck evidence required')
                    if area_id in BEHAVIOR:
                        require(bool(kinds & {'interaction', 'recording'}),
                                f'{fid}: operated recheck evidence required')
        if status == 'accepted':
            require(severity == 'minor', f'{fid}: major/blocker cannot be accepted as ready')
        if status == 'open' and severity == 'minor':
            require(words(finding.get('resolution')), f'{fid}: deferred minor needs a reason')
        if status == 'open' and severity in {'blocker', 'major'}:
            blocked = True
    expected = 'blocked' if blocked else 'unverified' if unverified else 'ready'
    require(report.get('verdict') == expected, f'verdict must be {expected}')
    return errors


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('report', type=Path)
    parser.add_argument('--root', required=True, type=Path)
    args = parser.parse_args()
    try:
        errors = validate(json.loads(args.report.read_text()), args.root)
    except (OSError, ValueError, TypeError) as exc:
        errors = [str(exc)]
    if errors:
        for error in errors:
            print('FAIL:', error)
        return 1
    print('Record integrity passed. This does not certify visual quality.')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
