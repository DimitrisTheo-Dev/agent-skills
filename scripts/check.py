#!/usr/bin/env python3
"""Run the repository checks with the current Python interpreter."""

import subprocess
import sys
from pathlib import Path


def main():
    root = Path(__file__).resolve().parents[1]
    checks = (
        ("scripts/validate.py",),
        ("-m", "unittest", "discover", "-s", "tests", "-v"),
    )
    for args in checks:
        print("+ python", *args, flush=True)
        result = subprocess.run([sys.executable, *args], cwd=root, check=False)
        if result.returncode:
            return result.returncode
    return 0


if __name__ == "__main__":
    sys.exit(main())
