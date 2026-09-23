from __future__ import annotations

import html
import re
from pathlib import Path

from weasyprint import HTML

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "client" / "public"
ASSETS = PUBLIC / "assets"
OUT = PUBLIC

PURPLE = "#6f3cc1"
ORANGE = "#f29b2f"
INK = "#24202a"
LILAC = "#f1edf8"


def inline(text: str) -> str:
    text = html.escape(text, quote=False)
    text = re.sub(r"!\[([^\]]*)\]\(([^)]+)\)", r'<img class="certificate" src="\2" alt="\1">', text)
    text = re.sub(r"\[([^\]]+)\]\(([^)]+)\)", r'<a href="\2">\1</a>', text)
    text = re.sub(r"\*\*([^*]+)\*\*", r"<strong>\1</strong>", text)
    text = re.sub(r"`([^`]+)`", r"<code>\1</code>", text)
    return text


def parse_markdown(path: Path, language: str) -> str:
    lines = path.read_text(encoding="utf-8").splitlines()
    out: list[str] = []
    paragraph: list[str] = []
    in_list = False

    def flush_paragraph() -> None:
        nonlocal paragraph
        if paragraph:
            out.append(f'<p>{inline(" ".join(line.strip() for line in paragraph))}</p>')
            paragraph = []

    def close_list() -> None:
        nonlocal in_list
        if in_list:
            out.append("</ul>")
            in_list = False

    for raw in lines:
        line = raw.strip()
        if not line:
            flush_paragraph()
            close_list()
            continue
        if line == "---":
            flush_paragraph()
            close_list()
            out.append('<hr class="footer-rule">')
            continue
        match = re.match(r"^(#{1,3})\s+(.+)$", line)
        if match:
            flush_paragraph()
            close_list()
            level = len(match.group(1))
            title = match.group(2)
            slug = re.sub(r"[^a-z0-9]+", "-", title.lower()).strip("-")
            page_break_titles = {
                "ar": {"الخبرة المهنية", "قواعد البيانات", "الروابط المهنية"},
                "en": {"Technical Skills", "Certifications & Training"},
                "fr": {"Compétences techniques", "Certifications et formations"},
            }[language]
            page_break = " page-break" if title in page_break_titles else ""
            if level == 1:
                out.append(f'<h1 class="name">{inline(title)}</h1>')
            elif level == 2:
                out.append(f'<h2 id="{slug}" class="section-title{page_break}">{inline(title)}</h2>')
            else:
                out.append(f'<h3 class="sub-title">{inline(title)}</h3>')
            continue
        if re.match(r"^[-*]\s+", line):
            flush_paragraph()
            if not in_list:
                out.append('<ul class="content-list">')
                in_list = True
            item = re.sub(r"^[-*]\s+", "", line)
            out.append(f"<li>{inline(item)}</li>")
            continue
        flush_paragraph()
        paragraph.append(line)
    flush_paragraph()
    close_list()

    direction = "rtl" if language == "ar" else "ltr"
    title = {
        "ar": "السيرة الذاتية — بسمة قدور",
        "en": "CV — Besma Kaddour",
        "fr": "CV — Besma Kaddour",
    }[language]
    return f'''<!doctype html>
<html lang="{language}" dir="{direction}">
<head><meta charset="utf-8"><title>{title}</title>
<style>
@page {{ size: A4; margin: 0; @bottom-right {{ content: counter(page); color: #554c65; font-size: 8pt; margin-right: 18mm; margin-bottom: 7mm; }} }}
* {{ box-sizing: border-box; }}
html, body {{ margin: 0; padding: 0; background: #f2f0f5; color: {INK}; font-family: "Noto Sans Arabic", "DejaVu Sans", sans-serif; font-size: 9.2pt; line-height: 1.48; }}
body {{ padding: 0 14mm 14mm 18mm; border-left: 10mm solid {PURPLE}; }}
body:before {{ content: ""; display: block; height: 17mm; background: {PURPLE}; margin: 0 -14mm 0 -18mm; border-bottom: 1.5mm solid {ORANGE}; }}
main {{ background: #fff; padding: 9mm 10mm 11mm; min-height: 260mm; }}
.name {{ margin: 0 0 2mm; padding: 0 0 2mm; color: #fff; background: {PURPLE}; font-family: "DejaVu Sans", sans-serif; font-size: 25pt; letter-spacing: 1.4pt; line-height: 1.1; text-align: left; direction: ltr; }}
.name:after {{ content: ""; display: block; height: 0.8mm; background: {ORANGE}; margin-top: 2mm; }}
[dir="rtl"] .name {{ text-align: right; font-family: "Noto Sans Arabic", sans-serif; letter-spacing: 0; }}
main:before {{ content: ""; display: block; height: 2.5mm; background: #fff; border-bottom: 0.5mm solid {ORANGE}; margin-top: -1mm; }}
.section-title {{ clear: both; color: #fff; background: {PURPLE}; border-left: 1.2mm solid {ORANGE}; padding: 1.5mm 3mm 1.4mm; margin: 5mm 0 3mm; font-size: 14pt; line-height: 1.25; page-break-after: avoid; }}
[dir="rtl"] .section-title {{ border-left: 0; border-right: 1.2mm solid {ORANGE}; }}
.section-title.page-break {{ page-break-before: always; }}
.sub-title {{ color: {PURPLE}; border-left: 1mm solid {ORANGE}; padding-left: 2.2mm; margin: 3mm 0 1mm; font-size: 11pt; line-height: 1.35; page-break-after: avoid; }}
[dir="rtl"] .sub-title {{ border-left: 0; border-right: 1mm solid {ORANGE}; padding-left: 0; padding-right: 2.2mm; }}
p {{ margin: 1.5mm 0 2.5mm; text-align: justify; }}
strong {{ color: #4e2b8d; }}
a {{ color: #4e2b8d; text-decoration: none; }}
ul.content-list {{ list-style: none; background: {LILAC}; border-left: 1mm solid {ORANGE}; padding: 3mm 5mm; margin: 2mm 0 4mm; }}
[dir="rtl"] ul.content-list {{ border-left: 0; border-right: 1mm solid {ORANGE}; }}
li {{ margin: 1mm 0; }}
li:before {{ content: "•"; color: {PURPLE}; font-weight: bold; margin-right: 2mm; }}
[dir="rtl"] li:before {{ margin-right: 0; margin-left: 2mm; }}
.certificate {{ display: block; width: 78%; margin: 3mm auto; padding: 3mm; background: {PURPLE}; border: 1mm solid {ORANGE}; }}
.footer-rule {{ border: 0; border-top: 0.6mm solid {ORANGE}; margin: 5mm 0 2mm; }}
code {{ font-family: "DejaVu Sans Mono", monospace; font-size: .9em; }}
</style></head><body><main>{''.join(out)}</main></body></html>'''


def main() -> None:
    for language in ("ar", "en", "fr"):
        source = ROOT / f"cv-besma-{'ar' if language == 'ar' else language}.md"
        target = OUT / f"cv-besma-{language}.pdf"
        HTML(string=parse_markdown(source, language), base_url=str(ROOT)).write_pdf(target)
        print(f"rendered {target} ({target.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
