#!/usr/bin/env python3
"""Serve this static website on loopback for local preview; Python standard library only."""
from __future__ import annotations
import argparse
import functools
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from threading import Timer
import webbrowser

def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--port', type=int, default=8000)
    parser.add_argument('--open', action='store_true', help='Open the homepage in your default browser')
    args = parser.parse_args()
    if not 1024 <= args.port <= 65535:
        parser.error('Use a port from 1024 through 65535.')
    root = Path(__file__).resolve().parent
    handler = functools.partial(SimpleHTTPRequestHandler, directory=str(root))
    try:
        server = ThreadingHTTPServer(('127.0.0.1', args.port), handler)
    except OSError as exc:
        print(f'Could not start the local preview: {exc}\nTry: python server.py --port 8001 --open')
        return 1
    url = f'http://127.0.0.1:{args.port}/'
    print(f'GNEX Tech local preview: {url}\nPress Ctrl+C to stop. Not a production server.')
    if args.open:
        timer = Timer(0.7, lambda: webbrowser.open(url)); timer.daemon = True; timer.start()
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print('\nPreview stopped.')
    finally:
        server.server_close()
    return 0

if __name__ == '__main__':
    raise SystemExit(main())
