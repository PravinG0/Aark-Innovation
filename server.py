"""
AARK Innovations - React Enterprise Platform Preview Server
Supports full HTTP 206 byte-range streaming for smooth dual-video scroll scrubbing and SPA routing.
"""

import http.server
import socketserver
import os
import sys
import re
import io

PORT = 3000
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DIST_DIR = os.path.join(BASE_DIR, "dist")
SERVE_DIR = DIST_DIR if os.path.exists(DIST_DIR) else BASE_DIR

class RangeRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=SERVE_DIR, **kwargs)

    def do_GET(self):
        f = self.send_head()
        if f:
            try:
                self.copyfile(f, self.wfile)
            finally:
                f.close()

    def send_head(self):
        path = self.translate_path(self.path)
        # SPA routing: if path doesn't exist and has no dot extension, serve index.html
        if not os.path.exists(path) and "." not in os.path.basename(self.path.split("?")[0].split("#")[0]):
            self.path = "/index.html"
            path = self.translate_path(self.path)

        if os.path.isdir(path):
            return super().send_head()

        try:
            f = open(path, 'rb')
        except OSError:
            self.send_error(404, "File not found")
            return None

        fs = os.fstat(f.fileno())
        total_len = fs.st_size

        range_header = self.headers.get('Range')
        if range_header:
            match = re.match(r'bytes=(\d+)-(\d*)', range_header)
            if match:
                start = int(match.group(1))
                end = int(match.group(2)) if match.group(2) else total_len - 1
                if start < total_len:
                    end = min(end, total_len - 1)
                    length = end - start + 1
                    self.send_response(206)
                    self.send_header("Content-Type", self.guess_type(path))
                    self.send_header("Content-Range", f"bytes {start}-{end}/{total_len}")
                    self.send_header("Content-Length", str(length))
                    self.send_header("Accept-Ranges", "bytes")
                    self.send_header("Cache-Control", "public, max-age=3600")
                    self.end_headers()
                    f.seek(start)
                    return _RangeFile(f, length)

        self.send_response(200)
        self.send_header("Content-Type", self.guess_type(path))
        self.send_header("Content-Length", str(total_len))
        self.send_header("Accept-Ranges", "bytes")
        self.send_header("Cache-Control", "public, max-age=3600")
        self.end_headers()
        return f

    def log_message(self, format, *args):
        # Only log requests to keep terminal clean
        sys.stdout.write(f"[{self.log_date_time_string()}] {args[0]} {args[1]} -> {args[2]}\n")

class _RangeFile:
    def __init__(self, fp, length):
        self.fp = fp
        self.remaining = length

    def read(self, size=-1):
        if self.remaining <= 0:
            return b""
        if size < 0 or size > self.remaining:
            size = self.remaining
        data = self.fp.read(size)
        self.remaining -= len(data)
        return data

    def close(self):
        self.fp.close()

def run():
    os.chdir(SERVE_DIR)
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), RangeRequestHandler) as httpd:
        url = f"http://localhost:{PORT}"
        print("=" * 70)
        print("  AARK INNOVATIONS - React Web Platform with Range Streaming & Audio")
        print(f"  Live URL: {url}")
        print(f"  Serving Directory: {SERVE_DIR}")
        print("  Press Ctrl+C to terminate.")
        print("=" * 70)
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer terminated successfully.")

if __name__ == "__main__":
    run()
