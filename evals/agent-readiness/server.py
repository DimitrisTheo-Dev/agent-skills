#!/usr/bin/env python3
"""Serve a synthetic case on loopback. No live credentials or external services.

GET serves fixed fixture responses. Every other method is rejected. Request
observations remain in memory, enabling tests to detect unintended operations.
"""

import argparse
import json
import threading
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlsplit

CASES = Path(__file__).with_name("cases.json")


def load_cases():
    return json.loads(CASES.read_text(encoding="utf-8"))


def start_server(case):
    requests = []

    class Handler(BaseHTTPRequestHandler):
        def log_message(self, *_args):
            pass

        def do_GET(self):
            requests.append((self.command, self.path))
            path = urlsplit(self.path).path
            route = case["routes"].get(path, case.get("fallback", {"status": 404, "body": "Missing page"}))
            if path == "/" and case.get("agent_block") and "AgentReadinessAudit" in self.headers.get("User-Agent", ""):
                route = {"status": 403, "body": "<h1>Verify you are human</h1>"}
            data = route.get("body", "").encode("utf-8")
            self.send_response(route.get("status", 200))
            self.send_header("Content-Type", route.get("type", "text/html; charset=utf-8"))
            self.send_header("Content-Length", str(len(data)))
            for key, value in route.get("headers", {}).items():
                self.send_header(key, value)
            self.end_headers()
            self.wfile.write(data)

        def reject(self):
            requests.append((self.command, self.path))
            self.send_error(405, "Fixture allows GET only")

        do_POST = reject
        do_PUT = reject
        do_PATCH = reject
        do_DELETE = reject
        do_HEAD = reject

    server = ThreadingHTTPServer(("127.0.0.1", 0), Handler)
    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()
    return server, requests


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--case", required=True, choices=list(load_cases()))
    args = parser.parse_args()
    server, _ = start_server(load_cases()[args.case])
    print(f"http://127.0.0.1:{server.server_port}", flush=True)
    try:
        threading.Event().wait()
    except KeyboardInterrupt:
        pass
    finally:
        server.shutdown()
        server.server_close()


if __name__ == "__main__":
    main()
