# Shri Adishakti Prakashan — Website Completion: Progress Log

ॐ नमो श्री भगवती जगदम्बिके दुर्गायै नमः

Running log of every file created/changed and work done during the website completion pass. Updated as work continues, and copied into the `Shri Adishakti Prakashan Website Supporting` folder after each update.

Working copy: `sap-site-progress2.zip` → unzipped and being edited page-by-page. Deployment (git/GitHub Pages push) remains the user's own step — no repo/hosting credentials are held here.

---

## Phase 1 — Quick wins (assets + trust signals) — ✅ COMPLETE

- **Book cover images**: real covers added at `assets/img/covers/{sitayan,radhavtaram,mahasati-gauri}.jpg` (reprocessed from mislabeled PNG-as-.jpg source screenshots). Wired into `granth-sangrah.html` and all 3 book detail pages (replacing the placeholder text-only book-cover divs). CSS updated in `assets/css/style.css` (`.book-cover img` rule) so covers display properly cropped.
- **About page**: confirmed already correct — Suraj Kumar Lohani's name + photo (`assets/img/suraj.jpg`) shown as "आदिशक्ति भगवती माँ अम्बे का निमित्त — सूरज कुमार लोहानी". No edit needed.
- **Real social links**: replaced all `href="#"` placeholders across all 12 HTML pages with real URLs:
  - YouTube: `https://www.youtube.com/channel/UCyw5Me50FzpeCBk05F2s9fg`
  - Facebook: `https://www.facebook.com/profile.php?id=61592190111177`
  - Instagram: `https://www.instagram.com/shri.adishaktiprakashan/`
  - X: `https://x.com/shriadishaktipr`
  - LinkedIn: `https://www.linkedin.com/company/shri-adishakti-prakashan/`
- **Red/orange re-theme**: added a new `--flame-900/800/700/400/300` scale to `assets/css/style.css`. Hero, mantra-strip, CTA band, footer, nav-active, filter-tab-active, primary buttons (`.btn-gold`, `.float-inquiry`), tag chips, feature icons, and blog covers all switched to flame (red-orange) as primary; maroon/gold demoted to secondary/accent (headings, text, footer link color) — exactly per "zyada red/orange-forward karo".

## Phase 2 — Book content depth — ✅ COMPLETE

- Extracted full chapter-wise TOC (kaand/khand + all adhyay titles) from the 3 source PDFs (`Sitayan.pdf`, `Radhavtaram.pdf`, `Mahasati_Gauri.pdf`) via `pdftotext`, cross-checked chapter counts against the published totals — all match exactly (Sitayan 86, Radhavtaram 93, Mahasati Gauri 85).
- Replaced the old one-paragraph "संरचना" summary on all 3 book detail pages with the **full chapter-by-chapter TOC** (all kaand/khand headers + every adhyay title), laid out in a new two-column `.toc-full` block (CSS added).
- Added a new **समर्पण (dedication)** + **आभार-वचन (acknowledgement)** section to all 3 book pages, cleaned up from the PDFs' own dedication/acknowledgement pages (each book dedicated to आदिशक्ति भगवती माँ अम्बे, भगवान शिव as witness, शिखा and एशांश named, plus each book's dedication shloka).
- Generated real sample-chapter PDFs for all 3 books — first adhyay extracted directly (via `qpdf` page-range) from each source PDF, saved at `assets/samples/{sitayan,radhavtaram,mahasati-gauri}-sample.pdf`. Verified content matches (Adhyay 1 heading + mangalacharan + opening prose) for each book. These replace the previously-missing linked files behind the "निःशुल्क नमूना अध्याय पढ़ें" buttons.

## Phase 3 — Bilingual (Hindi/English toggle) — 🔄 INFRASTRUCTURE DONE, CONTENT PARTIAL

- Built the full toggle mechanism: `EN`/`हिं` button added to the header on all 12 pages (next to the mobile menu button), wired in `assets/js/main.js` — click toggles `body.lang-en` class and persists choice via `localStorage` (so it stays set across page navigation).
- CSS (`assets/css/style.css`): `[data-i18n-hi]` / `[data-i18n-en]` attribute-based show/hide — works for any element (inline or block), driven by the `body.lang-en` class.
- **Translated so far** (English text added alongside Hindi): header tagline, brand tagline, footer brand line, and on Home + all 3 book detail pages — the hero pill-badge, H1, lead line, and main description paragraph.
- **Not yet translated** (still Hindi-only; English toggle will simply show no change there for now): full 86/93/85-chapter TOC lists, samarpan/aabhar-vachan text, About/Blog/Gallery/Contact page body copy, and all 3 legal pages. These are pure content-writing work, not a technical blocker — every remaining string can be wrapped in the same `<span data-i18n-hi>…</span><span data-i18n-en>…</span>` pattern already proven working. Flagging this honestly rather than machine-translating everything at once, since spiritual/legal text deserves careful, deliberate translation rather than a bulk pass.

## Phase 4 — Razorpay Payment Links + Apps Script deployment — ✅ COMPLETE

- **Google Sheet "SAP Orders"** created (tabs: `Orders`, `Newsletter` with header rows) — https://docs.google.com/spreadsheets/d/1FdNHolqy979bQX9EfyJlRp2_5rMdkYbSFNMYdc4AYNQ/edit
- **Google Apps Script Web App** ("SAP Orders Automation") deployed — `doPost`/`doGet` logging orders + newsletter signups to the Sheet. Execute as Me, access Anyone. Live endpoint verified by direct browser request — responds `"SAP order automation is live."`
  - Web App URL wired into `index.html`'s newsletter-signup script (replacing the `PASTE_YOUR_APPS_SCRIPT_URL_HERE` placeholder).
- **Razorpay Payment Links** — all 6 created (Standard type, amount + description only, no bank/card fields ever touched):
  - Sitayan Paperback ₹799 → `https://rzp.io/rzp/8TDgom3`
  - Sitayan Ebook ₹249 → `https://rzp.io/rzp/pSRFaza5`
  - Radhavtaram Paperback ₹799 → `https://rzp.io/rzp/Q2lGWk1`
  - Radhavtaram Ebook ₹249 → `https://rzp.io/rzp/McR1ylNG`
  - Mahasati Gauri Paperback ₹799 → `https://rzp.io/rzp/sjrVBBC9`
  - Mahasati Gauri Ebook ₹249 → `https://rzp.io/rzp/0HieA2tS`
  - All 6 wired into `sitayan.html`, `radhavtaram.html`, `mahasati-gauri.html` (real URLs replacing `#razorpay-link-paperback-pending` / `#razorpay-link-ebook-pending`, opening in a new tab via `target="_blank" rel="noopener"`). Checked `assets/js/books-data.js` — no matching placeholder references there, nothing else to update.
  - Razorpay account password step was completed by Suraj himself (I do not create passwords/accounts on a user's behalf) — confirmed before proceeding.

## Phase 5 — Client-side search — ✅ COMPLETE

- New `assets/data/search-index.json` — hand-maintained index of all 3 books + all 15 blog teasers (title-hi/en, excerpt-hi/en, tags, url). Regenerate by hand whenever a book/post is added.
- New `search.html` — dedicated search page: live-filters the index as you type (title/excerpt/tag substring match, same lightweight pattern as blog's existing `#blog-search`), also accepts a `?q=` URL parameter for deep-linking. Follows the site's existing card/grid visual style.
- Added a "खोजें" (Search) link to the main nav and footer Quick Links on **all 12 existing pages**, positioned between Blog and Gallery.
- Verified: `search-index.json` parses as valid JSON (18 entries), `search.html` served and title-tag confirmed via local static server.

## Phase 6 — Real blog articles + gallery images — ✅ COMPLETE

- **18 full blog articles written** (all 15 existing teasers expanded + 3 new): new `blog/` folder with one HTML page per article (~1100-1400 Devanagari characters / 4 paragraphs each), using the site's standard header/nav/footer chrome. Each links back to its related book (or the books listing, for general "उपासना" topics) and back to the blog listing.
  - New topics added: "नौ दुर्गा के नौ स्वरूप — जीवन के लिए नौ सूत्र", "गृहस्थ वैराग्य — संसार में रहकर समर्पण", "कृतज्ञता — साधना की नींव".
  - `blog.html` — every one of the 18 teaser cards now links to its full article via a "पूरा पढ़ें →" link; added 3 new teaser cards for the new topics.
  - `assets/data/search-index.json` — updated all 15 existing blog URLs to point to the real article pages (previously pointed at `blog.html`); added 3 new entries for the new articles. Index now has 21 entries (3 books + 18 blog posts).
- **Gallery rebuilt** (`gallery.html`): replaced the 3 emoji placeholders with a real 15-image grid — **10 real photos** from the Dus Mahavidya (दस महाविद्या) corridor at the Mohan Nagar temple (staged from the user's own folder, resized/optimized for web into `assets/img/gallery/`), the **3 real book cover images**, and 2 branded mantra/tagline cards. Each photo has a caption identifying the deity form where the inscription was legible (काली, भुवनेश्वरी, षोडशी/त्रिपुरसुन्दरी, धूमावती, बगलामुखी, मातंगी, कमला, चामुण्डा — read directly off the temple plaques; 2 forms left generically captioned where the inscription wasn't fully legible in the photo, rather than guessing). Added a lightbox (click-to-enlarge) — new CSS in `style.css` (`.gallery-item`, `.gallery-lightbox`, etc).
- **Testimonials added to `index.html`**: 3 illustrative reader-reflection cards, one per book, explicitly labeled as "प्रातिनिधिक भाव" (representative sentiment) rather than fabricated named verified reviews — per the plan's own instruction and the Golden Rule of not overstating authenticity.

## Phase 7 — SEO technical + GA/Search Console — ✅ COMPLETE (verification pending your deployment)

- **`sitemap.xml`** (new, at site root) — 31 URLs (all 12 main pages + all 18 blog articles), with priorities.
- **`robots.txt`** (new) — allows all crawlers, points to the sitemap.
- **Meta description + Open Graph + Twitter Card tags** added to all 31 pages (canonical URL, og:title/description/image/url/site_name, twitter:card/title/description/image) — pulled from each page's own `<title>`/description so nothing was invented.
- **JSON-LD structured data**: `Organization` schema (name, logo, address, social links) added to all 31 pages; `Book` schema (with `Offer` for Paperback ₹799 / Ebook ₹249) added specifically to `sitayan.html`, `radhavtaram.html`, `mahasati-gauri.html`. All JSON-LD validated to parse correctly.
- **Legal pages** — light review only, per plan (no rewrite needed): confirmed `refund-policy.html` correctly states no returns after shipment, cancellation only before shipment.
- **Google Analytics 4**: created a brand-new GA account **"Shri Adishakti Prakashan"** (kept fully separate from your existing "FinanceCoderAIRakshak" / "7AM & Realtime CFO" GA account — never touched that one), property **"Shri Adishakti Prakashan Website"**, web data stream for `shriadishaktiprakashan.com`. Measurement ID **`G-6HGVERH7T1`** — the gtag.js snippet is now embedded in the `<head>` of all 31 pages.
  - Paused before accepting the GA Terms of Service to confirm with you first (per the standing rule on accepting agreements on your behalf) — you approved, so I proceeded.
- **Google Search Console**: registered property `https://shriadishaktiprakashan.com/` (URL-prefix type). Added the verification meta tag to `index.html`'s `<head>`: `<meta name="google-site-verification" content="Bnfvxbq87PI8WV8Ymd3l2h7Q9354T8reXImCiDrKY5g" />`. **Verification itself could not be completed yet** because the site isn't live on GitHub Pages yet — Google needs to actually fetch the deployed homepage. Once you've pushed this content to GitHub Pages: go to Search Console → this property → "Verify" (either the HTML-tag method, already embedded, or the Google Analytics method, since the GA snippet is on every page) — one click and it will verify.

---

## Files touched so far (this session)

- `assets/css/style.css` — re-theme tokens, book-cover image rule, new `.toc-full`/`.samarpan-block`/`.aabhar-block` styles, bilingual toggle CSS
- `assets/js/main.js` — bilingual toggle logic (`applyLang`, localStorage persistence)
- `granth-sangrah.html` — real cover images
- `sitayan.html`, `radhavtaram.html`, `mahasati-gauri.html` — real cover images, full TOC, samarpan/aabhar-vachan sections, bilingual hero spans, **real Razorpay Payment Link URLs (Phase 4)**
- `about.html`, `blog.html`, `gallery.html`, `contact.html`, `privacy-policy.html`, `terms.html`, `refund-policy.html`, `index.html` — real social links in footer, lang-toggle button, bilingual header/footer spans
- `index.html` — newsletter form wired to the live Apps Script Web App endpoint (Phase 4)
- New: `assets/img/covers/sitayan.jpg`, `assets/img/covers/radhavtaram.jpg`, `assets/img/covers/mahasati-gauri.jpg`
- New: `assets/samples/sitayan-sample.pdf`, `assets/samples/radhavtaram-sample.pdf`, `assets/samples/mahasati-gauri-sample.pdf` (real Adhyay-1 sample chapters)
- New (off-site, Google account): Google Sheet "SAP Orders", Apps Script project "SAP Orders Automation" (deployed Web App)
- New (off-site, Razorpay account): 6 Payment Links (see Phase 4 above)
- New: `search.html`, `assets/data/search-index.json` (Phase 5)
- All 12 HTML pages — added "खोजें" nav link (main-nav + footer) for Phase 5
- New: `blog/` folder — 18 full article HTML pages (Phase 6)
- `blog.html` — 18 teaser cards now link to full articles; 3 new teaser cards
- `gallery.html` — full rebuild with 15-image real grid + lightbox (Phase 6)
- `assets/css/style.css` — new `.gallery-item`/`.gallery-lightbox` styles (Phase 6)
- New: `assets/img/gallery/mohan-nagar-01.jpg` … `mohan-nagar-10.jpg` (Phase 6)
- `index.html` — new testimonials section (Phase 6); Search Console verification meta tag; GA snippet (Phase 7)
- New: `sitemap.xml`, `robots.txt` (Phase 7)
- All 31 pages (12 main + 18 blog + gallery/search) — OG/Twitter meta tags, canonical links, Organization JSON-LD, GA gtag snippet (Phase 7)
- `sitayan.html`, `radhavtaram.html`, `mahasati-gauri.html` — added Book/Offer JSON-LD (Phase 7)
- New (off-site, Google account): GA4 property "Shri Adishakti Prakashan Website" (separate from your other GA account), Search Console property for shriadishaktiprakashan.com (pending verification until deployed)

## ALL 7 PHASES COMPLETE

## Phase 8 — Deployment (✅ COMPLETE — site is LIVE)

- Created GitHub repository **`SurajLohani/shriadishaktiprakashan`** (public) and uploaded all 62 site files via GitHub's web upload interface (folder structure preserved: root pages, `blog/`, `assets/css`, `assets/js`, `assets/data`, `assets/img` incl. `covers/` and `gallery/`, `assets/samples`, `assets/docs`) across 9 commits.
- Enabled **GitHub Pages** (Settings → Pages → Source: Deploy from branch `main` / root). Custom domain `shriadishaktiprakashan.com` recognized automatically via the repo's `CNAME` file — DNS check successful.
- **Root cause found and fixed for why the domain wasn't showing the new site**: `shriadishaktiprakashan.com` DNS is managed on **Cloudflare** (nameservers, not just registrar), and an old pre-existing **Cloudflare Worker** ("shriadishaktiprakashan", a static-assets Worker from an earlier, unrelated deployment) was bound to the apex domain as a Custom Domain — it was silently serving old cached content and GitHub Pages traffic never reached it. Fixed by:
  1. Removing the Worker's Custom Domain binding (Workers & Pages → shriadishaktiprakashan → Domains → Remove).
  2. Adding 4 new **A records** for the apex (`@`) pointing to GitHub Pages: `185.199.108.153`, `.109.153`, `.110.153`, `.111.153` (Proxied through Cloudflare).
  - Existing email (Google Workspace MX records), SPF TXT, and the `www` CNAME (Namecheap parking) were left untouched.
- Verified live: homepage, gallery (all 10 real temple photos), `sitayan.html` (book page with cover/TOC), a blog article, and `search.html` all serve correctly over `https://shriadishaktiprakashan.com/`.
- **Google Search Console**: clicked "Verify" — auto-verified successfully via both the HTML meta tag and the GA snippet (dual verification, more resilient).
- **Sitemap submitted** to Search Console (`/sitemap.xml`) — Google immediately discovered all 31 pages, status: Success.

## Delivery plan

Every changed/new file has been re-zipped and delivered via chat, **and** copied into `Shri Adishakti Prakashan Website Supporting` folder on this computer. Deployment is now done — the site is live at https://shriadishaktiprakashan.com/.

## Phase 9 — Premium Build चरण 1 (✅ DEPLOYED — 17 Jul 2026)

Premium_Upgrade_Master_List.md के आधार पर पहला बड़ा build — design foundation + नए pages + book-page upgrades, सब live:

**Design foundation (A-series):**
- Rozha One display font सभी मुख्य headings/brand पर (A5) · dark premium footer gold border के साथ (A6) · section-dark alternating bands (A2) · scroll-reveal animations + prefers-reduced-motion सम्मान (A3) · button/card microinteractions (A4)।

**Site-wide:**
- Mantra-strip में पहचान-पंक्ति "सेवा · सत्य · समर्पण — स्थापना २०२६" (H1) · हर page के header में 🔍 search icon (H2) · सभी 31 पुराने pages के footer में Catalogue/FAQ/संपादन-प्रक्रिया links।

**Homepage:**
- 🪔 श्रावण festival strip (D5/H6) · hero stat-chips: ३ ग्रंथ · २६४ अध्याय · १,३२७ पृष्ठ · ९ आगामी · १८ कथा-लेख (A1/H5) · सीतायण spotlight section 3D cover के साथ (B3) · trust-chip row (B2) · author-strip: निमित्त-परिचय photo सहित (B1) · पाठ-सूचियाँ section · newsletter में निःशुल्क नमूना links (B4-lite)।

**Book pages ×3 (sitayan/radhavtaram/mahasati-gauri):**
- Breadcrumbs + BreadcrumbList schema (F3) · per-book og:image (F2) · "अंदर झाँकें" buttons (C1/I2) · format accordion Paperback/Ebook, प्रति-format WhatsApp deep-links प्रीफ़िल्ड Hindi message के साथ (C4/C5/I3) · औपचारिक spec-table with SAP codes (H3/H4) · कथा-सत्संग मार्गदर्शिका — पाठ-विधि, चर्चा-प्रश्न, अवसर-अनुसार अंश (I6) · sticky order bar scroll पर (C3) · 3D cover hover (C2)।

**Granth-sangrah:**
- स्वीकृत cards पर SAP-001/2/3 codes · हर आगामी ग्रंथ (SAP-004…012) पर "🔔 प्रकाशित हो तो सूचित करें" WhatsApp notify button (D6/I8)।

**नए pages (6):**
- `faq.html` — 12 प्रश्न, FAQPage schema (D1) · `404.html` — भक्ति-भाव 404, absolute paths (D4) · `sampadan-prakriya.html` — 5-चरण प्रक्रिया + सेवा-संकल्प dark section (I7/H14) · `catalogue.html` — सभी 12 ग्रंथों की सारणी, Print/PDF + bulk-order WhatsApp (H8) · `shravan-path-suchi.html` + `navratri-path-suchi.html` — पर्व-अनुसार curation pages (I1)।

**Blog experience (सभी 18 articles, JS-injected):**
- Reading progress bar (E1) · WhatsApp/FB/X share + copy-link row · "आगे पढ़ें" related articles search-index से (E2)।

**अन्य:** gallery कथा-रूप intro (H12-lite) · search में highlight + ग्रंथ/ब्लॉग tabs (F5) · sitemap.xml में 5 नए URLs।

**Deploy:** 4 commits via GitHub web upload (root 20 files / assets/css / assets/js / blog 18 files)। Live verification: सभी नए PAGES 200, DOM checks (chips/spotlight/author-strip/festival/est/search-icon/Rozha font = सब true), sticky bar + accordion + blog enhancements functional। Note: पहले attempt में commit clicks register नहीं हुए थे (page navigate जल्दी कर दिया था) — दोबारा JS-click + redirect-wait विधि से सब सफल।

**अगले चरण (baaki items):** G3 full bilingual coverage (सबसे बड़ा), B4 full lead-magnet automation, D3 profile PDF, H7 online reader, H9 रचयिता pages, D2 testimonial design, F1 WebP, H13+ future items।

---

## Phase 10 — Bilingual audit (EN toggle spot-check) — 🔍 AUDIT DONE, 1 FIX READY (not yet deployed)

Went through the live site with the `EN` toggle on, page by page, checking header/nav/footer chrome against the Phase 3 note above, plus what Phase 9 added afterward (breadcrumbs, new footer links) since those postdate the bilingual wiring and were never checked against it.

**Finding — nav/footer label inconsistency (real bug, not a content gap):**
Every page's main-nav and footer "Quick Links" mix hardcoded-English labels (Home, About Us, Books, Blog, Gallery, Contact Us — these were never wired to the toggle, they're just plain English text shown regardless of language) with **two Hindi-only stragglers that were added later and never wrapped**: "खोजें" (Search, added Phase 5) and "संपादन-प्रक्रिया" (Editorial Process, added Phase 9). Result: in EN mode, everything in the nav reads in English except those two — visibly inconsistent. Confirmed present identically on **all 37 files** (12 main pages + 18 blog articles + faq/catalogue/sampadan-prakriya/shravan & navratri path-suchi/404).

**Finding — book-page breadcrumbs never wired for bilingual (Phase 9 regression against Phase 3):**
The breadcrumb trail added in Phase 9 (`sitayan.html`, `radhavtaram.html`, `mahasati-gauri.html`) — "मुखपृष्ठ › ग्रंथ संग्रह › [book name]" — was built after the bilingual toggle existed but was never wrapped in `data-i18n-hi/en` spans. In EN mode the whole breadcrumb still shows in Hindi while the H1/lead directly below it is in English. Book name itself (सीतायण / राधावतारम् / महासती गौरी) is correctly left in Devanagari either way, matching the H1 pattern — only "मुखपृष्ठ" → Home and "ग्रंथ संग्रह" → Books needed wrapping.

**Fix applied to a working copy** (`sap-premium-build1-langfix.zip`, delivered via chat — **not yet pushed to GitHub, live site unchanged**):
- All 37 files: `खोजें` → `<span data-i18n-hi>खोजें</span><span data-i18n-en>Search</span>` in both the main-nav `<li>` and the footer Quick Links `<li>` (and the search-icon fallback CTA on `404.html`).
- All 37 files: `संपादन-प्रक्रिया` → `<span data-i18n-hi>संपादन-प्रक्रिया</span><span data-i18n-en>Editorial Process</span>` in the footer Quick Links.
- `search.html` itself: its own nav `<li>` (which carries `class="active"`) needed a separate one-line fix since it didn't match the other 36 files' exact markup.
- 3 book pages: breadcrumb "मुखपृष्ठ"/"ग्रंथ संग्रह" wrapped the same way; book-name segment left untouched.
- Verified with a headless-browser screenshot (local copy, EN mode) — nav now reads "Home · About Us · Books · Blog · Search · Gallery · Contact Us" throughout, and the Sitayan breadcrumb reads "Home › Books › सीतायण".

**Not changed / still open (same as the Phase 3 "not yet translated" list — no new scope added here):** full chapter TOCs, samarpan/aabhar-vachan blocks, About/Blog/Gallery/Contact/legal page body copy, book-page format-accordion and WhatsApp CTA button text (e.g. "WhatsApp से order (2% छूट)"), `search.html`'s own hero/lead/JS status strings, and everything else already flagged under G3 in the Phase 9 "अगले चरण" list. This pass only fixed the **inconsistent nav/breadcrumb chrome**, not the larger content-translation backlog.

**Deployment status:** this fix has **not been pushed live** — per the standing rule on not publishing/modifying public content without asking first. `sap-premium-build1-langfix.zip` is ready to upload via the same GitHub web-upload method used in Phases 8–9 (root pages + `search.html` + `blog/` folder, i.e. all 37 touched files) whenever you say go.

---

## Feature request — noted only, NOT built yet

- **"Look Inside" page-flip preview (replace sample-chapter download link)** — Suraj shared a reference screenshot (Amazon-style book preview: left thumbnail strip of page images + a large centre page image + left/right arrow buttons to flip through pages, "LOOK INSIDE" label top-left). Request: replace the current "निःशुल्क नमूना अध्याय पढ़ें" behaviour (which just downloads/opens the sample PDF) on **all books** (currently the 3 live books, and to extend to future ones as they publish) with this kind of in-page, left/right-arrow, flip-through preview widget instead of a plain download.
- Related to the already-flagged **H7 "online reader"** item in the Phase 9 "अगले चरण" list — this request is more specific (page-flip/"Look Inside" style UI, arrows + thumbnails, using the existing sample PDFs already at `assets/samples/*-sample.pdf`) and should be treated as the concrete spec for H7 when it's picked up.
- **Explicitly not implemented yet** — user said to only note it in this file for now. No code/design work done.

---

## Reference review — gitapress.org (17 Jul 2026) — research only, NOT built

Suraj asked me to check gitapress.org and note what's worth adapting. Browsed the homepage, a product page, the E-Books library, and Leela Chitra Mandir. Nothing built — recommendations only, prioritized for a small 3-book (growing to 12) devotional publisher rather than Gita Press's much larger multi-book operation.

**Worth adapting (fits our scale):**
- **In-browser "Read Book" flip preview** on the ebook/product page (separate "Read Book" button next to Add to Cart/Buy Now) — confirms the "Look Inside" flip-preview request above (Section: Feature request) is exactly the industry-standard pattern for religious-text publishers; treat that noted spec as the right direction for H7.
- **Recently Viewed + Related Books** on book detail pages — low-effort once the catalogue grows past 3 books (all 12 SAP codes eventually); currently not needed with only 3 live books but worth planning for as SAP-004 onward publish.
- **Category/Language/Author filters on a library-style listing page** — their `/ebook` page filters 310 titles by Category, Author, Language (14 languages!), and file type (PDF/epub), plus sort. Our `granth-sangrah.html` doesn't need this yet at 3 books, but is the right model to grow into once the 9 upcoming ग्रंथ start publishing — filters by खण्ड-भेद/भाषा rather than a flat grid.
- **Trust line in the header** ("Serving humanity for truth and peace since 1923") — we already have the equivalent ("सेवा · सत्य · समर्पण — स्थापना २०२६" in the mantra-strip), so no action needed, just confirms our instinct was right.

**Bigger scope — flag for later, not now:**
- **Full cart/wishlist/account e-commerce system** (Add to Cart, wishlist heart, quantity stepper, Sign In/Sign Up, My Account, My Orders) — this is a different architecture than our current direct-to-Razorpay-Payment-Link buttons per format. Only worth building if/when we're selling many SKUs at once (bundles, multiple formats, combos) rather than 3 books × 2 formats each. Noting as a possible v2 direction, not a current gap.
- **Native mobile app (Android/iOS)** — mentioned on their site footer. Not relevant at our current scale; parking this, not recommending it now.
- **Dedicated periodical/magazine section (their "Kalyan" monthly)** — we don't publish a periodical, so not directly applicable; could inspire a future recurring content series (e.g. a monthly सत्संग-पत्रिका) but that's a content-strategy decision, not a website feature, and out of scope for this note.

**Not relevant / skip:**
- **Leela Chitra Mandir heritage-museum page** — tells the story of Gita Press's own physical building/pilgrimage landmark in Gorakhpur. We don't have an equivalent physical space tied to the publication itself (our gallery is temple photos, a separate context) — skip.
- **Full site-wide language switch (English/हिंदी dropdown in header)** — cosmetically similar to our own EN/हिं toggle, but theirs swaps the *entire site* including product catalogue; ours is a lighter same-page content toggle, which is the right fit for our single-language-first (Hindi) content strategy. No change needed.

**Status:** research/comparison only, nothing changed on the live or working-copy site. Revisit the "Worth adapting" list once the catalogue grows past the current 3 books, or sooner if Suraj wants the Read Book flip-preview (H7) prioritized now.

---

## My own suggestions (independent of gitapress.org) — 17 Jul 2026 — research only, NOT built

Suraj asked what I'd suggest myself, beyond the competitor review. These are my own ideas, prioritized for our actual scale and voice (spiritual publisher, single niyat-author, 3 books today). Nothing built — noted only.

**Highest value, low effort:**
- **Real testimonial collection, replacing the placeholder over time** — homepage currently runs 3 honestly-labeled "प्रातिनिधिक भाव" (representative sentiment) cards, which was the right honest call at launch. Now that the site is live and books are selling via Razorpay, add a simple "अपना अनुभव साझा करें" form (Google Form, same pattern as the diagnostic-form workflow already used elsewhere) linked from the order-confirmation WhatsApp message, so real reader reflections start replacing the illustrative ones — genuine authority, not fabricated.
- **"आज का श्लोक" (verse of the day) widget on the homepage** — a small rotating block pulling one shloka/couplet from the 3 books' samarpan or TOC content, changing daily. Cheap to build (a JS array + date-based index, no backend), gives people a reason to return daily, and reinforces "स्थापना २०२६... हर दिन एक दिन" as a living site, not just a static catalogue.
- **Bundle pricing — "तीनों ग्रंथ एक साथ"** — a combo Razorpay Payment Link for all 3 books together at a small discount (e.g. ₹2,297 → ₹1,999), surfaced on `granth-sangrah.html` and the newsletter. Directly increases average order value with near-zero engineering (one more Razorpay link + one more card).

**Worth doing this year:**
- **PWA / "Add to Home Screen"** — a lightweight manifest.json + service worker (offline shell, install icon) gives an app-like presence without the cost/overhead of a real Android/iOS app (which I flagged as overkill in the gitapress note above). Good middle ground given the audience skews toward mobile devotional reading.
- **Short audio clips of the samarpan shlokas / a stotra sample** — many devotees prefer listening to reading; even a 30–60 second recorded audio (Suraj's own voice, in keeping with the personal/niyat framing) embedded on each book page alongside the sample PDF would deepen the devotional feel more than any technical feature could.
- **Deepen the About page with the personal journey** — About currently states the niyat framing (name + photo) but doesn't yet carry any of the struggle-to-service personal narrative already written and battle-tested for LinkedIn (the 1983–2021 journey: Gaya train, father's chai stall, 47 rejections, Eshansh's birth). A short, spiritually-framed (not corporate/resume-toned) version of this — "क्यों यह प्रकाशन बना" — would make the About page far more emotionally resonant than the current one-line bio. IVF/egg-donation detail stays excluded, per the existing standing privacy rule.

**Worth considering, not urgent:**
- **Core Web Vitals / PageSpeed check** — the site now carries scroll-reveal animations, GA4, multiple JSON-LD blocks, and 15+ gallery images; worth a one-time PageSpeed Insights pass to confirm none of that is dragging mobile load time, especially since GSC is already tracking indexing.
- **Google Business Profile listing** for the Siddharth Vihar/Ghaziabad address already on file (Udyam registration) — helps local + branded search ("Shri Adishakti Prakashan") show a verified map/trust panel, low effort since the address and phone are already public on the Contact page.
- **WhatsApp community/broadcast list** for daily mantra or new-release announcements — lighter than a full community platform, uses the WhatsApp number already wired into the order flow.

**Status:** ideas only, nothing changed on the live or working-copy site. Suraj to pick which (if any) to prioritize next.

---

## Approved build list — 17 Jul 2026 — NOTED ONLY, build not started yet (Suraj said: "abhi build nahi karna hai sirf .md file update karni hai")

Suraj reviewed the suggestions above and said "sab add kar de" (add everything) plus two more items of his own. Capturing the full approved scope here first, before any code work begins, per his explicit instruction to only update this file for now.

**New items from Suraj (not from either list above):**
1. **Floating WhatsApp contact button** ("jaise 'ask 7AM' aur whatsapp app for contact ka button") — a dedicated floating WhatsApp icon/button for direct contact, in the spirit of the simple punchy "DM 'MORNING'" CTA pattern used on the 7AM & Realtime CFO™ side. Note: the site already has a floating `<a href="contact.html" class="float-inquiry">🙏 पूछताछ करें</a>` button (bottom-right, all pages) — but it links to the Contact page, not a direct WhatsApp chat. This request is for a real `wa.me/917011283542` deep-link floating button (possibly alongside, possibly replacing/upgrading the existing one) — needs a decision on whether to keep both or merge into one when build starts.
2. **Combo bundle — pricing specified:** Ebook combo (all 3 books) = **₹699** (vs ₹747 buying separately at ₹249×3), Paperback combo (all 3 books) = **₹1999** (vs ₹2,397 separately at ₹799×3). Two new Razorpay Payment Links to be created (Standard type, same no-bank/card-touch method as the existing 6 links), then a combo option/card added to `granth-sangrah.html` and the newsletter section of `index.html`.

**Confirmed from my own suggestion list (Section above) — all approved, "sab add kar de":**
- Real testimonial collection form ("अपना अनुभव साझा करें"), linked from the WhatsApp order-confirmation message, to gradually replace the honestly-labeled placeholder reflections on the homepage.
- "आज का श्लोक" (verse of the day) rotating widget on the homepage.
- PWA / Add to Home Screen (manifest + service worker + icons).
- Short audio clips of the samarpan shlokas / a stotra sample — **flag:** this needs Suraj's own recorded voice; I cannot generate or fabricate his voice, so this step is blocked on him supplying audio files whenever build starts.
- About page deepened with the personal 1983–2021 journey, written in spiritual (not corporate/resume) tone — IVF/egg-donation detail stays excluded per the standing privacy rule.
- One-time PageSpeed Insights / Core Web Vitals check (research, no account/permission needed).
- Google Business Profile listing for the Siddharth Vihar/Ghaziabad address — **flag:** creating an account/listing isn't something I do on a user's behalf; when build starts I can draft all the listing content (name, category, description, hours) for Suraj to paste in himself during signup/verification (postcard or phone OTP only he can complete).

**Not started — this section is a scope record only.** When Suraj gives the go-ahead to build, work through in roughly this order: (1) combo Razorpay links + combo card — quick win, (2) WhatsApp floating button, (3) testimonial form + आज का श्लोक widget, (4) About page story, (5) PWA, (6) PageSpeed check, (7) audio clips once Suraj supplies recordings, (8) Google Business Profile content draft for Suraj to submit himself.

**UI spec refinement — language switcher (added same day, still noted only, not built):** Suraj shared a screenshot of a `<select>`-style dropdown (English highlighted, Hindi below it) and said explicitly this dropdown pattern is NOT what he wants. Instead: **two separate, always-visible buttons side by side** — "English" and "Hindi" (हिंदी) as two distinct clickable buttons next to each other, not a dropdown. This replaces the current single toggle button in the header (`<button class="lang-toggle">EN</button>`, which flips between showing "EN" and "हिं" as one button). New spec: both language names visible at all times as two separate buttons, with the currently-active language visually highlighted/pressed-state, and clicking the other one switches immediately (same underlying `applyLang('en'|'hi')` mechanism already in `assets/js/main.js`, just a UI/markup change from one toggle button to two buttons in a button-group). Applies wherever the current lang-toggle button appears (header, all pages).

---

## Reference review #2 — "what would a world-best, ultra-premium book publisher site have" — 17 Jul 2026 — research only, NOT built

Suraj asked, in general terms, what an ultra-premium ("premium se bhi premium") book publisher website should have. Browsed two real luxury/collector publisher sites for grounding — **taschen.com** (art-book publisher, books photographed and sold as luxury objects, price range £15 to £4,500, SUMO/XL/XXL size tiers, numbered Art Editions with certificates, an accessibility-adjustment widget bottom-left, minimal 5-item nav, full-bleed lifestyle photography, one-line poetic headlines like "Your Library of Japan Awaits" instead of generic hero copy) and **foliosociety.com** (illustrated collector hardcovers, nav includes New Arrivals / Collections / Limited Editions / Discover / News & Blog — curation and editorial content treated as first-class nav items, not afterthoughts). Recommendations below translate their luxury-secular-publishing patterns into our devotional-publishing context — nothing built, ideas only.

**Visual/brand — the biggest lever, costs nothing but craft:**
- Photograph the physical books as objects, not flat cover scans — angled on a wooden/stone surface with soft directional light, maybe with a diya or tulsi leaf styled next to it, the way Taschen shoots books propped open on an easel. This single change (professional object photography vs. flat cover images) is most of what makes a site feel "premium" — more than any code feature.
- Poetic one-line section headlines instead of generic labels — e.g. instead of "स्वीकृत ग्रंथ" as a section header, something like "माँ सीता की आँखों से — एक नई दृष्टि" as the actual hero headline (we already do a version of this on book pages; extend the same voice to section headers site-wide).
- Generous negative space, one hero image at a time, restrained nav (Taschen's top nav is 5 words) — our current nav (7 items) is already close to this; resist adding more top-level items as the catalogue grows, push new pages into "अन्य"/footer instead.

**Product presentation:**
- Numbered/limited spiritual editions — e.g. first 108 (a sacred number) hardcover copies of a new ग्रंथ individually numbered, "आपकी प्रति क्रमांक 37/108" printed on an insert — mirrors Taschen's numbered Art Editions but reframed around sacred numerology (108, 51, 9) instead of scarcity-for-luxury's-sake.
- Size/edition tiers already partly exist (Paperback/Ebook); a future hardbound "संग्रहणीय संस्करण" (collector's hardbound, slipcase) tier for SAP-001/002/003 once volume justifies it — same idea as Taschen's Regular/XL/SUMO tiers, applied honestly at our scale (not fabricating scarcity we don't have).
- The already-noted "Look Inside" flip-preview (Section: Feature request, above) is exactly this category of feature — both premium sites let you page through before buying.

**Editorial/content as identity, not decoration:**
- Folio Society treats "Discover" and "News & Blog" as top-level nav, same weight as "Books" — validates our own blog + पाठ-सूची pages; consider surfacing 2-3 rotating blog articles directly on the homepage (not just a link) so editorial content reads as core identity, not an add-on.
- A short "क्यों यह ग्रंथ" (why this scripture, in the founder's own voice) note per book — ties to the About-page-deepening idea already logged above; premium publishers always surface the human/editorial hand behind the object, not just the product spec table.

**Trust & craft signals:**
- Taschen's accessibility widget (bottom-left icon, font-size/contrast controls) — reinforces the font-size/reading-accessibility idea already logged in "My own suggestions" above; premium sites treat accessibility as a visible trust signal, not just a legal checkbox.
- Explicit paper/printing/binding notes on the spec table (we already show SAP codes, page count, size) — could add one line on paper quality or printing process once that information is confirmed, the way luxury publishers always name-check their paper stock and binding method as part of the object's story.

**Not relevant at our scale — skip:**
- Full luxury pricing tiers (£1,500–£4,500 art editions), physical retail "Stores" nav, subscription book clubs — these depend on a much larger back-catalogue and production budget than a 3-book (growing to 12) single-author devotional press; noting only so the gap is a conscious choice, not an oversight.

**Status:** research/comparison only, nothing changed on the live or working-copy site.

---

## Decisions confirmed by Suraj — 18 Jul 2026 (answered in Suraj_Queries_Requirements_17Jul2026.docx, on his OneDrive)

Suraj filled in answers directly inside the queries doc (`D:\OneDrive\00 Maa\03. Maa Sampurn Sangrah\Shri Adishakti Prakashan Website Supporting\Suraj_Queries_Requirements_17Jul2026.docx`). Captured here before any build starts.

**1. Phase 10 bilingual nav fix:** GitHub push method confirmed (direct GitHub push is fine going forward, not just web-upload — "jaise 7AM site kiya tha"). **BUT Suraj flagged "tabs thik nahi hai, confusion hai"** — some tab-related confusion with the langfix — he'll send a screenshot before this is pushed. **Do not push langfix.zip until that screenshot arrives and confusion is resolved.**

**2. WhatsApp button:** Convert the existing "🙏 पूछताछ करें" floating button directly into a WhatsApp deep-link (1 button, not 2). Number stays +91-7011283542. **Email to update everywhere on site: surajkumarlohani@gmail.com.**
Prefilled message — Hindi (Devanagari): "Jai Maa Ambe, मुझे एक रचना के बारे में पूछना है।" — English: "Jai Maa Ambe, I'd like to ask about a rachna." (keep "Jai Maa Ambe" untranslated in both).
**Site-wide terminology rule (important, not yet swept): the word "ग्रंथ/granth" must NOT appear anywhere on the site — replace with "रचना/rachna" everywhere (nav, meta descriptions, book pages, JSON-LD, alt text, etc.). "मैं ग्रंथ नहीं बेच रहा" — this needs a dedicated full-site find-and-replace pass, not just the WhatsApp message.**
**"Ask Nimitt" — a separate new feature (not the WhatsApp button) — is being built alongside this: a 2000+ question FAQ/knowledge base.** (This matches the `faq_master.json` — currently 2,155 unique Q&A across 32 categories — built earlier this session. Confirmed this is the intended use.)

**3. Combo bundle:** Name — "त्रिरचना संग्रह" (Teerachna Sangrah) instead of "त्रिग्रंथ संग्रह". Show discount (MRP struck through, offer price shown). **Pricing correction: Ebook combo = ₹649 (not ₹699 as earlier drafted), Paperback combo = ₹1,999 (confirmed).**

**4. Language switcher:** Two separate buttons, labelled "English" / "हिंदी" — confirmed, matches earlier UI spec note.

**5. About page — personal journey:** Approved, spiritual tone, IVF/egg-donation excluded (as always). Draft to be shown to Suraj for approval before going into the working copy (sensitive section). **Checked `Suraj_LinkedIn_Content_Bible.pdf` and `Resume/LinkedIn Profile.docx` on his OneDrive for IVF/egg-donation text to redact — neither file contains it; Story 16 (Eshansh) in the Content Bible is already written clean (platelets emergency / faith angle only). The detail exists only as a private note in assistant memory, not in any file — nothing to redact on disk.**

**6. Razorpay:** Suraj will log in himself when needed (Chrome/Gmail session already fine); assistant only fills the payment-link creation form.

**7. Google Forms (testimonial form):** Use the same Google account as the SAP Orders sheet/Apps Script. **Important: the testimonial form (and whatever else uses a Google Form) must NOT open in a separate window/tab — both need to be embedded within the website itself (iframe or equivalent), not link out.**

**8. GitHub:** Direct GitHub push confirmed as the deployment method going forward (faster than web-upload interface), same as how the 7AM site was deployed.

**9. Samarpan shloka audio:** Suraj asked what exactly he needs to provide. Answer given: a 30–60 second recording, own voice, reciting the samarpan shlokas already on the book pages; phone voice-recorder is fine (mp3/m4a); can send via chat upload or WhatsApp/email whenever convenient — no rush, this step stays blocked until then.

**10. PWA app-icon:** Current 'अ' gol brand-mark rejected — needs a new design. Assistant to suggest options when this item comes up in the build order (item 5).

**11. Google Business Profile:** Suraj will create/verify the account himself, starting now. Assistant to prepare the full listing content draft (name, category, description, hours, address) for him to paste in.

**Build order:** confirmed as-is, no reordering — (1) combo Razorpay links + combo card, (2) WhatsApp floating button, (3) testimonial form + आज का श्लोक widget, (4) About page personal journey, (5) PWA, (6) PageSpeed check, (7) audio clips, (8) Google Business Profile content draft.

**Status: decisions logged only, build not yet started — awaiting Suraj's go-ahead to begin with item 1.**

---

## Build started — 18 Jul 2026 — items 1 & 2 drafted (local working copy only, nothing pushed)

Suraj said "1. bana do / 2. bana do" + separately asked for Ask Nimitt (the FAQ knowledge base) to be fully bilingual. All three done as local drafts in `/tmp/sap_audit/build1/`; nothing pushed to GitHub/live site (per standing rule on public-content changes).

**Item 1 — त्रिरचना संग्रह combo:**
- New combo card added to `granth-sangrah.html` (`id="combo"`), plus a promo line in `index.html`'s newsletter section linking to it.
- Paperback: ₹2,397 struck through → ₹1,999 (₹398 की बचत). Ebook: ₹747 struck through → ₹649 (₹98 की बचत). Matches confirmed pricing exactly.
- CTA currently goes to WhatsApp order (pre-filled message) as a placeholder — **2 Razorpay Payment Links still need to be created** (assistant fills the form once Suraj is logged in, per decision #6).
- New CSS added to `assets/css/style.css`: `.combo-card`, `.tag-chip.combo`, `.price-mrp`, `.price-offer`, `.save-chip`.
- Screenshots shown to Suraj for review (hi + en render identical since combo copy is Hindi-only, matching the site's existing single-language-first book-card convention).

**Item 2 — WhatsApp floating button:**
- The old `<a href="contact.html" class="float-inquiry">🙏 पूछताछ करें</a>` (present on all 36 pages except contact.html) converted to a `wa.me/917011283542` deep-link across all 36 files (root pages + `blog/*` + `404.html`, all three href variants: `contact.html`, `../contact.html`, `/contact.html`).
- Label now bilingual via `data-i18n-hi/en` spans: "🙏 पूछताछ करें" / "🙏 Ask Us".
- Prefilled WhatsApp message is language-aware — Hindi: "Jai Maa Ambe, मुझे एक रचना के बारे में पूछना है।"; English: "Jai Maa Ambe, I'd like to ask about a rachna." ("Jai Maa Ambe" kept untranslated in both, per decision).
- Implementation: each anchor now carries `data-wa-hi`/`data-wa-en` full wa.me URLs; `assets/js/main.js`'s `applyLang()` function updated to set `href` from the correct attribute on load and on every toggle click — verified working via headless-browser check (href swaps correctly, visible label swaps correctly) in both directions.
- Screenshots of both language states shown to Suraj for review.

**Ask Nimitt — bilingual FAQ dataset (Suraj's separate request: "sari ask nimitt hindi aur english dono mein chahiye, jab visitor english select kare to accordingly hona chahiye"):**
- All 2,404 Hindi Q&A pairs from `faq_master.json` (built earlier this session, 33 categories) translated into English via 18 parallel translation passes (one per category-group, ~120-160 items each), using a shared terminology glossary derived from the site's own existing bilingual copy (Maa Ambe, Adishakti Bhagwati Maa Ambe, Bhagwan Shiva, Sitayan/Radhavtaram/Mahasati Gauri, Kaand/Khand kept transliterated, निमित्त → "instrument", etc.) so all 18 batches stay terminologically consistent.
- Consolidated into `/home/claude/output/faq_master_bilingual.json` — schema per item: `{category, question_hi, answer_hi, question_en, answer_en}`.
- Verified programmatically: 2,404/2,404 items, every `question_hi`/`answer_hi` matches the original `faq_master.json` byte-for-byte (zero drift), every category count matches, zero empty/malformed English fields.
- **Not yet wired into any page** — this is the data layer only. The actual "Ask Nimitt" UI (how it's displayed/searched on the site, and how it reads the current `body.lang-en` state to show hi vs en fields) still needs to be built once Suraj confirms where/how it should appear (standalone page? modal? integrated into `search.html`?).

**Deployment status:** none of this (combo card, WhatsApp button, bilingual FAQ data) has been pushed to GitHub or the live site. All local, in `/tmp/sap_audit/build1/` and `/home/claude/output/`. Files delivered to Suraj via chat for review (screenshots + `faq_master_bilingual.json`).

**Open questions for Suraj:** (a) combo card/WhatsApp button — approved as shown, or changes needed? (b) Ask Nimitt UI — where/how should it live on the site (new page vs. integrated into existing `search.html`)? (c) langfix.zip (खोजें toggle) + full nav/footer translation + two-separate-button language switcher — still on hold, no go-ahead given yet to push anything live.

---

## "sab kar de, sabki permission hai" — 18 Jul 2026 — nav/footer translation + language switcher + Ask Nimitt page built (local, NOT pushed — credential blocker below)

Suraj gave blanket permission to proceed with everything previously listed as pending. Built all three, verified with headless-browser screenshots in both languages:

**1. Full nav + footer Hindi translation (all 38 files):** Home→मुखपृष्ठ, About Us→हमारे बारे में, Books→रचनाएँ (used रचना per the confirmed ग्रंथ→रचना direction, not a full sitewide sweep — that remains separately flagged/undone), Blog→ब्लॉग, Gallery→गैलरी, Contact Us→संपर्क करें, plus footer: Quick Links→त्वरित लिंक, Catalogue→सूची, FAQ→सामान्य प्रश्न, Privacy Policy→गोपनीयता नीति, Terms & Conditions→नियम एवं शर्तें, Refund Policy→धनवापसी नीति. All via `data-i18n-hi/en` spans, terminology cross-checked against strings already used elsewhere on the site (e.g. "धनवापसी नीति" was already used inline in faq.html — confirms consistency). खोजें/Search (Phase 10) unaffected/still correct.

**2. Two-button language switcher:** Replaced the single `<button class="lang-toggle">EN</button>` with a `.lang-switch` group of two always-visible buttons ("हिंदी" / "English"), active one highlighted, per Suraj's earlier UI-spec correction (no dropdown, two distinct buttons). `main.js` `applyLang()` rewritten to toggle `.active` on both buttons instead of swapping button text; clicking either button sets that language directly (no more toggle-only behavior).

**3. Ask Nimitt — new bilingual knowledge-base page (`ask-nimitt.html`):**
- New dedicated page (not merged into `search.html`, which serves a different purpose — site-content search via `assets/data/search-index.json`, a different schema). Reachable from footer Quick Links (all 38 files) + a new homepage promo card (`index.html`, after the "तीन स्तम्भ" section).
- Loads `assets/data/ask-nimitt.json` (the 2,404-item bilingual dataset built earlier this session) client-side via `fetch`.
- Features: live search box (filters across hi+en question/answer text, 180ms debounce), 33 category filter chips (Hindi/English labels, ordered by frequency, all built from a `CAT_LABELS` map), accordion-style results (reusing the site's existing `.faq-list/.faq-item/.faq-q/.faq-a` classes from `faq.html` for visual consistency), pagination via "Load More" (20 at a time, avoids rendering all 2,404 DOM nodes at once), bilingual result count.
- Bug caught and fixed during testing: the result-count text was originally computed via a JS `isEn()` branch at filter-time only, so it didn't update if you switched language *without* re-searching. Fixed by making the count itself a `data-i18n-hi/en` span pair like everything else on the site, so it's purely CSS-driven and always correct regardless of when the toggle was clicked.
- New CSS added: `.nimitt-search-wrap/.nimitt-search-box/.nimitt-cats/.nimitt-cat-chip/.nimitt-count/.nimitt-cat-tag`, plus `.lang-switch/.lang-btn` for item 2.
- Verified via headless-browser: default load (2404, 34 chips incl. "All"), search "नवरात्रि" → 116, search "hanuman chalisa" in EN mode → 10, category filter "Hanuman Ji" in EN mode → 5, accordion expand/collapse, full EN/HI round-trip all correct.

**Combo card (Item 1, built earlier this session) — re-verified:** unaffected by this pass, still working correctly on `granth-sangrah.html`.

**Deployment status — BLOCKED, nothing pushed:**
- `gh auth status` shows the session's `GH_TOKEN` is invalid — direct `git push` is not currently possible from this environment despite decision #8 confirming it as the go-forward method.
- No browser (`claude-in-chrome`) tab group is currently connected either, so the GitHub web-upload method (used for Phases 8–9 and the original repo creation) isn't available right now.
- Packaged everything as `sap-premium-build1-full-update.zip` (47 files: all 38 HTML pages + `assets/css/style.css` + `assets/js/main.js` + new `assets/data/ask-nimitt.json`) — ready to upload the same way `sap-premium-build1-langfix.zip` was prepared. Delivered to Suraj via chat along with review screenshots.
- **Next step needs one of:** (a) Suraj uploads the zip himself via GitHub's web interface, or (b) Suraj opens/connects Chrome so the assistant can drive the same web-upload flow used in Phases 8–9, or (c) Suraj provides a fresh working `GH_TOKEN` for direct `git push`.

**Still open / unchanged:** Razorpay combo Payment Links (needs Suraj logged in — assistant fills the form only), and the full sitewide ग्रंथ→रचना terminology sweep (separately flagged, not part of this pass).

---

## LIVE DEPLOYMENT — 18 Jul 2026 — pushed successfully

Suraj said "chalo github token generate karte hai google chrome se" — walked through it live in his connected Chrome (already signed in as @SurajLohani):
1. GitHub required sudo-mode re-verification (email link) — Suraj completed this himself (identity verification is not something the assistant does on a user's behalf).
2. Assistant created a new **fine-grained Personal Access Token** (`sap-site-deploy`, expires 17 Aug 2026), scoped to **only** `SurajLohani/shriadishaktiprakashan`, permission `Contents: Read and write` (+ required `Metadata: Read-only`) — minimal scope, not a broad/classic token.
3. Cloned the live repo fresh with the token, copied over all 42 changed files (40 modified + `ask-nimitt.html` + `assets/data/ask-nimitt.json` new) from `/tmp/sap_audit/build1/`, committed, and ran `git push origin main`. **Push succeeded** (`c80823b..47e81f9 main -> main`) — this resolves the credential blocker noted in the previous entry; direct `git push` now confirmed working end-to-end for this repo.
4. Verified live: homepage nav/footer + two-button language switcher rendering correctly in both Hindi and English (`shriadishaktiprakashan.com`), `ask-nimitt.html` live and loading its 2,404-question dataset with working search/category filters. **Note:** `assets/css/style.css` served briefly stale from GitHub Pages' CDN cache for a few minutes after push (confirmed via cache-busted request that the new CSS — `.nimitt-cat-chip` etc. — was correctly deployed at origin); this is normal CDN propagation, not a deploy failure, and clears on its own.
5. `PROGRESS_LOG.md` in the repo itself was also updated with this entry as part of the same push, so the deployed copy stays in sync with the working copy.

**Security note — token left active:** the `sap-site-deploy` token is scoped to this one repo, Contents R/W only, expires in 30 days — low risk, but it's a live credential. Suraj to decide: keep it for future direct pushes (matches decision #8's "direct push going forward" preference), or have the assistant delete it now from Settings → Developer settings → Fine-grained tokens. Not deleted yet — awaiting his call.

**Now actually resolved / no longer open:** langfix (खोजें), full nav/footer translation, two-button language switcher, Ask Nimitt page, combo card, WhatsApp button — all LIVE.

**Still open:** Razorpay combo Payment Links (needs Suraj logged in), full sitewide ग्रंथ→रचना terminology sweep (separately flagged), build-order items 3–8 (testimonial form + आज का श्लोक widget, About page personal journey, PWA, PageSpeed check, audio clips, Google Business Profile draft).

---

## CACHE-BUST FIX + 4-ITEM FOLLOW-UP — 18 Jul 2026

**Cache-bust fix (pushed as `acf98e0`):** Suraj reported "english mein to aa hi nahi kuch" — root cause was GitHub Pages' Fastly CDN serving stale `style.css`/`main.js` after the previous push (origin was correct, confirmed via cache-busted requests). Fixed by adding `?v=20260718b` to every CSS/JS `<link>`/`<script>` reference across all 38 HTML files. Verified live via claude-in-chrome: English toggle now correctly switches nav, tagline, testimonials, CTA, WhatsApp button.

**Suraj's 4-item follow-up request**, all completed in this pass:

1. **Sitewide ग्रंथ→रचना terminology sweep (the long-flagged item, finally done).** Base find/replace (ग्रंथों→रचनाओं, ग्रंथ→रचना) across all 38 HTML files (308 base occurrences), followed by a manually-authored grammar correction pass (~40 targeted phrase fixes) to handle Hindi gender/plural agreement that a blind replace would have broken — e.g. bare masculine-plural ग्रंथ needed रचनाएँ (feminine plural marker), adjectives/verbs agreeing with ग्रंथ needed to flip to feminine (नया→नई, जुड़े→जुड़ी, करता है→करती है, होता है→होती है, चुका है→चुकी है, etc.). Verified zero `ग्रंथ` occurrences remain and no leftover masculine-verb/feminine-noun mismatches via grep sweep. File names/URLs (e.g. `granth-sangrah.html`) were deliberately left unchanged — only Devanagari display text was touched — to avoid breaking existing links; flagged to Suraj that a URL rename would need 301 redirects if he wants that later.

2. **All book descriptions (and related content) made bilingual.** Previously only nav/footer/hero were bilingual; large chunks of body content were Hindi-only. Fanned out 9 parallel subagents, one per page: `sitayan.html` (148 new hi/en pairs, including the full 86-chapter TOC), `radhavtaram.html` (161 pairs, 93 chapters), `mahasati-gauri.html` (183 pairs, 85 chapters), `granth-sangrah.html` (35 pairs — combo bundle, accepted/upcoming book cards), `catalogue.html` (38 pairs — table headers/cells), `index.html` (84 pairs — book-card descriptions, feature cards, testimonials), `about.html` (24 pairs — founder story, Nimit philosophy; confirmed no IVF/private content present), `sampadan-prakriya.html` (22 pairs — 5-step editorial process), `faq.html` (24 pairs — all 12 accordion Q&As; fixed 2 pre-existing nested-span bugs). Verified sitewide: every file's `data-i18n-hi` and `data-i18n-en` counts match exactly (no orphaned spans), and all 39 changed files parse cleanly.

3. **"Ask Nimitt" nav link — root cause of "kyu nahi aa raha".** It only ever existed in the footer Quick Links (buried, easy to miss) — never in the main nav bar. Added `निमित्त से पूछें` / `Ask Nimitt` to the main `<nav>` on all 38 pages (between Gallery and Contact Us), handled 3 different relative-path prefixes (`""`, `../`, `/`) and the `contact.html`/`ask-nimitt.html` "active"-class edge cases (`contact.html`'s own nav item and `ask-nimitt.html`'s own nav item needed manual fixing since their `class="active"` attribute didn't match the base insertion regex). Caught and fixed a duplicate-link bug where the insertion script also matched the footer's Contact-Us `<li>`, doubling the footer's existing Ask Nimitt entry — de-duped back to one per footer. Verified: every page now has exactly one Ask Nimitt link in nav + exactly one in footer.

4. **Email swept sitewide.** `shikha@shriadishaktiprakashan.com` → `surajkumarlohani@gmail.com` — 113 occurrences across all HTML files plus the contact-form `mailto:` handler in `assets/js/main.js`. Verified zero old-email occurrences remain and 113 new-email occurrences present.

**Verification before deploy:** local Playwright screenshots (Hindi + English) of homepage and `sitayan.html` confirmed nav Ask Nimitt link, रचना terminology, and full English book descriptions all rendering correctly.

**Deployed live** via the existing `sap-site-deploy` token (still active from the previous session — not yet deleted, per Suraj's pending decision) — 39 files changed (38 HTML + `main.js`).

**Still open:** Razorpay combo Payment Links (needs Suraj logged in), decision on whether to keep/delete the `sap-site-deploy` token, build-order items 3–8 (testimonial form + आज का श्लोक widget, About page personal-journey draft approval, PWA, PageSpeed check, audio clips, Google Business Profile draft). Optional follow-up not yet done: bilingual TOC/description treatment for the remaining path-suchi pages (`navratri-path-suchi.html`, `shravan-path-suchi.html`) and blog articles, which were not in this pass's explicit scope.

---

## FLOATING BUTTON REDESIGN — 18 Jul 2026 (same day, follow-up)

Suraj shared a reference screenshot (from an unrelated project) showing two stacked pill-shaped floating buttons — a dark pill with a clock icon labeled "Ask7AM" and a green pill with a WhatsApp icon labeled "WhatsApp Us" — and asked for the site's floating button to follow that same two-button style.

Previously the site had a single combined floating button (🙏 पूछताछ करें / Ask Us) that just opened WhatsApp. Split it into two separate stacked pill buttons matching the reference layout, using the site's own maroon/gold brand palette instead of the reference's colors:
- **Ask Nimitt** (top): dark maroon-900 pill, gold-400 text, circular icon badge with gold border, 🙏 icon — links to `ask-nimitt.html`.
- **WhatsApp Us** (bottom): WhatsApp-green (#25D366) pill, white text, circular icon badge, 💬 icon — same wa.me link/pre-filled message as before, still language-aware via `data-wa-hi`/`data-wa-en` (existing JS logic untouched).

New CSS: `.float-stack` (flex column container, replaces old `.float-inquiry` fixed positioning), `.float-ask`, `.float-icon`, responsive sizing at 640px. Updated the two places that referenced the old `.float-inquiry` selector for fixed positioning/print rules (`body.has-sticky-order`, `@media print`) to target `.float-stack` instead.

Applied across all 38 pages via a regex-based script that preserved each page's exact WhatsApp href/data-wa-hi/data-wa-en values (book pages have book-specific pre-filled WhatsApp messages). `contact.html` didn't have the floating button at all before (0 occurrences) — added it there too for consistency, matching Suraj's "sab jagah" instruction from the earlier request.

Caught during local Playwright verification: the 🕉️ (Om) emoji rendered as a fallback "35"-looking glyph in the headless test browser (missing color-emoji font in that sandbox) — swapped to 🙏 (folded hands), which is the icon already proven to render correctly everywhere on this site, removing the risk entirely rather than trusting an unverified glyph.

Verified: all 38 files have exactly one `.float-stack` block, `data-i18n-hi`/`data-i18n-en` counts still balanced sitewide, HTML parses cleanly, and local Hindi/English screenshots confirm the two-button stack renders correctly in both languages before deploying.
