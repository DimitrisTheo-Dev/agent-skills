import importlib.util
import tempfile
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location("validator", ROOT / "scripts/validate.py")
validator = importlib.util.module_from_spec(spec)
spec.loader.exec_module(validator)


class ValidationTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name).resolve()
        self.skill = self.root / "skills/example"
        self.skill.mkdir(parents=True)
        (self.skill / "SKILL.md").write_text("---\nname: example\ndescription: Inspect example contracts when requested.\n---\n# Example\n", encoding="utf-8")

    def test_valid_minimal_portable_skill(self):
        self.assertEqual(validator.validate_repo(self.root), [])

    def test_metadata_name_must_match_installable_folder(self):
        file = self.skill / "SKILL.md"
        file.write_text(file.read_text().replace("name: example", "name: different"))
        self.assertTrue(validator.validate_repo(self.root))

    def test_missing_reference_and_anchor_are_rejected(self):
        (self.root / "README.md").write_text("# Intro\n[missing](missing.md)\n[anchor](#absent)\n")
        errors = validator.validate_repo(self.root)
        self.assertTrue(any("Missing local target" in e for e in errors))
        self.assertTrue(any("Missing anchor" in e for e in errors))

    def test_reference_style_links_are_checked_but_code_examples_are_not(self):
        file = self.root / "README.md"
        file.write_text("[broken][ref]\n\n[ref]: missing.md\n\n```md\n[example](example.md)\n```\n")
        errors, _ = validator.local_links(file, self.root)
        self.assertEqual(len(errors), 1)
        self.assertIn("missing.md", errors[0])

    def test_skill_cannot_depend_on_root_only_reference(self):
        (self.root / "guide.md").write_text("# Guide\n")
        file = self.skill / "SKILL.md"
        file.write_text(file.read_text() + "[guide](../../guide.md)\n")
        self.assertTrue(any("installable folder" in e for e in validator.validate_repo(self.root)))

    def test_orphan_reference_is_rejected(self):
        refs = self.skill / "references"
        refs.mkdir()
        (refs / "orphan.md").write_text("# Unrouted guidance\n")
        self.assertTrue(any("Unreachable reference" in e for e in validator.validate_repo(self.root)))

    def test_python_syntax_failure_is_reported(self):
        (self.root / "broken.py").write_text("def broken(:\n")
        self.assertTrue(any("broken.py" in e for e in validator.validate_repo(self.root)))

    def test_malformed_ui_metadata_is_reported_without_crashing(self):
        agents = self.skill / "agents"
        agents.mkdir()
        (agents / "openai.yaml").write_text("interface: []\n")
        self.assertTrue(any("interface must be a mapping" in e for e in validator.validate_repo(self.root)))

    def test_external_skill_resource_symlink_is_rejected(self):
        (self.root / "outside.md").write_text("# Outside\n")
        (self.skill / "outside.md").symlink_to(self.root / "outside.md")
        self.assertTrue(any("real files" in e for e in validator.validate_repo(self.root)))

    def test_install_one_skill_with_documented_symlink(self):
        # Use a disposable discovery root, never the maintainer's actual config.
        destination = self.root / "home/.agents/skills"
        destination.mkdir(parents=True)
        link = destination / "example"
        link.symlink_to(self.skill, target_is_directory=True)
        self.assertEqual(validator.validate_skill(link), [])
        self.assertTrue((link / "SKILL.md").is_file())
        with self.assertRaises(FileExistsError):
            link.symlink_to(self.skill, target_is_directory=True)


if __name__ == "__main__":
    unittest.main()
