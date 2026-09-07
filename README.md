# yomasui.github.io

Research website of Yoshihiro Masui / 増井良啓.

Static bilingual website published with GitHub Pages at https://yomasui.jp/.

Routes: `/`, `/research/`, `/publications/`, `/teaching/`, `/resources/`, `/bio/`.
Each route has an `index.html`. Shared styles and language switching are in `assets/`.
Original University of Tokyo links are retained. No build step is required.

Stage 2 (2026-09-05): migrated English publications, the 1993–2025 teaching archive, detailed biography, and resource indexes. Resource subpages: `links/`, `quick-links/`, `gateway/`, and `readings/`. Individual legacy course pages and PDFs remain linked at their original URLs.

## Stage 3: separate language editions (2026-09-07)

The six main pages now have independent Japanese and English HTML files:

| Japanese | English |
| --- | --- |
| `/` | `/en/` |
| `/research/` | `/en/research/` |
| `/publications/` | `/en/publications/` |
| `/teaching/` | `/en/teaching/` |
| `/resources/` | `/en/resources/` |
| `/bio/` | `/en/bio/` |

JA/EN are ordinary links to the corresponding page. The URL determines the language; no browser storage, automatic language redirects, build step, or JavaScript is needed for switching. Main navigation stays in the selected language. Each page declares its language, canonical URL, and reciprocal `hreflang` alternatives.

Edit the two corresponding `index.html` files when updating content. Preserve course, lecture, publication and personal names in their original notation. Keep external links intact. Japanese biography explanations and English teaching-archive explanations are translated; archived factual dates retain the source's wording and are not an independently updated CV.

`assets/pages.js` provides the year and existing homepage-fragment/archive-opening behavior for these 12 pages. `assets/site.js` remains for the four resource subpages, which retain their existing content and language behavior in this phase. Do not replace those subpage links with `/en/resources/...` links unless English subpages are actually added. Both editions use the existing shared stylesheet.

Validation: all 12 main pages checked at desktop (1366 × 900) and mobile (390 × 844) widths for navigation, language switching and horizontal overflow. All main-page internal URLs/fragments resolve. All 33 teaching archive years and their entries are retained; legacy external destinations are preserved. Biography links to previously missing `#books` and `#english` sections now lead to the publications page.
