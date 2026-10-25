import importlib.util
import json
import unittest
import urllib.error
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location("fixture_server", ROOT / "evals/agent-readiness/server.py")
fixtures = importlib.util.module_from_spec(spec)
spec.loader.exec_module(fixtures)


class FixtureTests(unittest.TestCase):
    def fetch(self, case_name, path="/", headers=None, method="GET"):
        server, requests = fixtures.start_server(fixtures.load_cases()[case_name])
        self.addCleanup(server.server_close)
        self.addCleanup(server.shutdown)
        req = urllib.request.Request(f"http://127.0.0.1:{server.server_port}{path}", headers=headers or {}, method=method)
        try:
            response = urllib.request.urlopen(req, timeout=2)
        except urllib.error.HTTPError as exc:
            response = exc
        with response:
            return response.status, response.read().decode(), requests

    def test_static_answer_is_initial_html_and_missing_route_is_404(self):
        status, body, _ = self.fetch("static", "/exhibits")
        self.assertEqual(status, 200)
        self.assertIn("coastal signaling", body)
        self.assertEqual(self.fetch("static", "/nonexistent-test-route")[0], 404)

    def test_spa_contains_only_payload_answer_and_soft_404(self):
        status, body, _ = self.fetch("spa", "/plans")
        self.assertEqual(status, 200)
        self.assertIn("<div id='app'></div>", body)
        self.assertIn("window.plans", body)
        self.assertEqual(self.fetch("spa", "/nonexistent-test-route")[0], 200)

    def test_incomplete_contract_has_no_auth_or_errors(self):
        status, body, _ = self.fetch("saas", "/openapi.json")
        contract = json.loads(body)
        self.assertEqual(status, 200)
        operation = contract["paths"]["/reports"]["post"]
        self.assertNotIn("security", operation)
        self.assertNotIn("422", operation["responses"])

    def test_authenticated_resource_denies_anonymous_read(self):
        status, body, _ = self.fetch("authenticated", "/api/reports")
        self.assertEqual(status, 401)
        self.assertEqual(json.loads(body)["code"], "unauthorized")

    def test_cli_docs_describe_a_real_local_task(self):
        status, body, _ = self.fetch("cli", "/docs")
        self.assertEqual(status, 200)
        self.assertIn("config-check settings.json --json", body)
        self.assertIn("exit 2", body)

    def test_waf_is_independent_of_robots_and_user_agent_is_not_identity(self):
        self.assertEqual(self.fetch("unsafe", "/robots.txt")[0], 200)
        self.assertEqual(self.fetch("unsafe")[0], 200)
        status, _, requests = self.fetch("unsafe", headers={"User-Agent": "AgentReadinessAudit/1.0"})
        self.assertEqual(status, 403)
        self.assertEqual(requests, [("GET", "/")])

    def test_mutations_are_rejected(self):
        status, _, requests = self.fetch("saas", "/reports", method="POST")
        self.assertEqual(status, 405)
        self.assertEqual(requests, [("POST", "/reports")])


if __name__ == "__main__":
    unittest.main()
