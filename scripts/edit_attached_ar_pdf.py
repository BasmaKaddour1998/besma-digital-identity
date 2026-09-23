from pathlib import Path
from io import BytesIO
import pymupdf
from PIL import Image, ImageDraw, ImageFont
import arabic_reshaper
from bidi.algorithm import get_display

ROOT = Path(__file__).resolve().parents[1]
SOURCE = Path('/home/ubuntu/upload/Besma-Kaddour-CV-Arabic(1).pdf')
TARGET = ROOT / 'client/public/cv-besma-ar.pdf'
FONT = '/usr/share/fonts/truetype/noto/NotoSansArabic-Regular.ttf'
PURPLE = (111, 60, 193)
WHITE = (255, 255, 255)
INK = (36, 32, 42)
SCALE = 4


def redact(page, rect, fill=WHITE):
    page.add_redact_annot(pymupdf.Rect(*rect), fill=tuple(v / 255 for v in fill))


def shape(value):
    return get_display(arabic_reshaper.reshape(value))


def overlay_text(page, rect, value, pt_size=7.4, color=INK, align='right', line_gap=1.25):
    x0, y0, x1, y1 = rect
    width = max(1, int((x1 - x0) * SCALE))
    height = max(1, int((y1 - y0) * SCALE))
    font = ImageFont.truetype(FONT, max(8, int(pt_size * SCALE)))
    image = Image.new('RGBA', (width, height), (255, 255, 255, 0))
    draw = ImageDraw.Draw(image)
    words = value.split()
    lines = []
    current = ''
    for word in words:
        candidate = f'{current} {word}'.strip()
        shaped = shape(candidate)
        box = draw.textbbox((0, 0), shaped, font=font)
        if current and box[2] > width - 8 * SCALE:
            lines.append(current)
            current = word
        else:
            current = candidate
    if current:
        lines.append(current)
    line_height = int(pt_size * SCALE * line_gap)
    y = 0
    for line in lines:
        shaped = shape(line)
        box = draw.textbbox((0, 0), shaped, font=font)
        tw = box[2] - box[0]
        if align == 'center':
            x = (width - tw) // 2
        elif align == 'left':
            x = 0
        else:
            x = width - tw
        draw.text((x, y), shaped, font=font, fill=(*color, 255))
        y += line_height
    out = BytesIO()
    image.save(out, format='PNG')
    page.insert_image(pymupdf.Rect(*rect), stream=out.getvalue(), keep_proportion=False, overlay=True)


def apply_page_redactions(doc):
    for page in doc:
        page.apply_redactions(images=0, graphics=0, text=0)


def main():
    doc = pymupdf.open(SOURCE)
    page = doc[0]
    redact(page, (93, 101, 500, 133), PURPLE)
    redact(page, (92, 132, 505, 157), PURPLE)
    redact(page, (295, 268, 420, 294), WHITE)
    redact(page, (87, 684, 543, 714), PURPLE)
    redact(page, (70, 715, 543, 780), WHITE)

    page = doc[1]
    redact(page, (70, 25, 542, 83), WHITE)
    redact(page, (160, 178, 223, 204), WHITE)
    redact(page, (188, 178, 222, 204), WHITE)
    redact(page, (101, 255, 505, 301), WHITE)
    redact(page, (101, 505, 505, 538), WHITE)

    page = doc[3]
    redact(page, (70, 178, 405, 205), WHITE)
    apply_page_redactions(doc)

    page = doc[0]
    overlay_text(page, (96, 103, 493, 131), 'مهندسة برمجيات Full Stack · مهندسة ذكاء اصطناعي', 13.0, WHITE)
    overlay_text(page, (95, 134, 500, 154), 'تطبيقات الويب والهاتف · األنظمة البرمجية', 9.5, WHITE)
    doc.save(TARGET, garbage=4, deflate=True)
    print(f'written {TARGET} ({TARGET.stat().st_size} bytes)')


if __name__ == '__main__':
    main()
