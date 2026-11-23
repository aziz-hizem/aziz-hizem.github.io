"""Render an HTML page to an image with the Microsoft Edge already installed on Windows.

    python tools/render_html.py tools/shakedown-card.html public/projects/shakedown.webp 1280 720

The output format follows the extension (.png, or .webp converted with Pillow).
"""
import sys
from pathlib import Path

from playwright.sync_api import sync_playwright

src, out, width, height = Path(sys.argv[1]).resolve(), Path(sys.argv[2]).resolve(), int(sys.argv[3]), int(sys.argv[4])
png = out if out.suffix == ".png" else out.with_suffix(".tmp.png")

with sync_playwright() as p:
    browser = p.chromium.launch(channel="msedge")
    page = browser.new_page(viewport={"width": width, "height": height}, device_scale_factor=1)
    page.goto(src.as_uri(), wait_until="networkidle")
    page.evaluate("document.fonts.ready")
    page.wait_for_timeout(600)
    page.screenshot(path=str(png))
    browser.close()

if png != out:
    from PIL import Image

    Image.open(png).convert("RGB").save(out, "WEBP", quality=88, method=6)
    png.unlink()
print(f"wrote {out} ({out.stat().st_size // 1024} KB)")
