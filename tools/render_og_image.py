"""Render tools/og-image.html to public/og-image.png (1200 x 630), the link preview picture.

Uses the Microsoft Edge already installed on Windows, so no browser download is needed:
    pip install playwright
    python tools/render_og_image.py
"""
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
SRC = (ROOT / "tools" / "og-image.html").as_uri()
OUT = ROOT / "public" / "og-image.png"

with sync_playwright() as p:
    browser = p.chromium.launch(channel="msedge")
    page = browser.new_page(viewport={"width": 1200, "height": 630}, device_scale_factor=1)
    page.goto(SRC, wait_until="networkidle")
    page.evaluate("document.fonts.ready")
    page.wait_for_timeout(600)
    fonts = sorted({f for f in page.evaluate("[...document.fonts].filter(f => f.status === 'loaded').map(f => f.family)")})
    page.screenshot(path=str(OUT))
    browser.close()

print(f"wrote {OUT} ({OUT.stat().st_size // 1024} KB), fonts: {fonts}")
