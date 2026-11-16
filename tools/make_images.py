#!/usr/bin/env python3
"""assets/bg.jpg kaynağından sayfanın kullandığı tüm görsel sürümlerini üretir.

Kullanım (repo kökünden):  python3 tools/make_images.py
Gereksinim: Pillow (pip install pillow), WebP desteğiyle.
"""
from pathlib import Path
from PIL import Image

ASSETS = Path(__file__).resolve().parent.parent / "assets"
im = Image.open(ASSETS / "bg.jpg").convert("RGB")
W, H = im.size


def resized(src, w):
    return src if w == src.width else src.resize((w, round(w * src.height / src.width)), Image.LANCZOS)


# Yatay sürümler
for w in (3840, 2560, 1920, 1280):
    resized(im, w).save(ASSETS / f"bg-{w}.webp", quality=80, method=6)
resized(im, 1920).save(ASSETS / "bg-1920.jpg", quality=80, progressive=True, optimize=True)

# Dikey kırpım: karakterlerin olduğu bölge (genişliğin %40–%92'si)
crop = im.crop((round(W * 0.40), 0, round(W * 0.92), H))
for w in (crop.width, 1400, 900):
    resized(crop, w).save(ASSETS / f"bg-portrait-{w}.webp", quality=80, method=6)

# Paylaşım önizlemesi (1200x630)
og = im.resize((1200, 675), Image.LANCZOS).crop((0, 22, 1200, 652))
og.save(ASSETS / "og.jpg", quality=82, progressive=True, optimize=True)

print("Tamam. Dikey kırpım genişliği:", crop.width,
      "(1997 değilse index.html'deki srcset'i güncelleyin)")
