# Power-Fix-O — Home Page Plan

A single-page build for the Home route, structured for SEO (title, meta, semantic HTML, schema.org JSON-LD, Open Graph) and polished UX. About / Products / Contact pages will follow in later plans.

## Brand & Visual Direction

Based on the product bag artwork:
- **Primary brand color:** Power-Fix-O Blue (matches PF55 bag, hero brand)
- **Accent colors:** Yellow (PF44), Green (PF22), Purple (PF111) — used as product card accents
- **Look:** Clean, industrial-modern, white background, bold typography, generous spacing, subtle shadows, rounded corners
- **Logo treatment:** "POWER-FIX-O" wordmark in the bag style (split blue/white badge) until a logo file is provided
- All product bag images get copied into `src/assets/` and imported as ES modules

## SEO Foundation (applied site-wide, set up on Home)

- `index.html` updates:
  - `<title>`: Power-Fix-O Tile Adhesive | Mittal Brothers Petrochem | Tile Adhesive Manufacturer India
  - `<meta name="description">`: Premium tile adhesive manufacturer in Gujarat — Power-Fix-O by Mittal Brothers Petrochem. High-performance floor & wall tile adhesives (PF22, PF44, PF55, PF111) for strong bonding and lasting durability.
  - Canonical: `https://powerfixo.in/`
  - Open Graph + Twitter Card tags (title, description, image, url, type=website)
  - `<meta name="keywords">` with target keywords (tile adhesive manufacturer Gujarat, best tile adhesive India, vitrified tile adhesive, floor/wall tile adhesive supplier, construction chemical manufacturer)
  - `<meta name="robots" content="index, follow">`, theme-color, viewport, favicon
  - `lang="en-IN"` on `<html>`
- `public/robots.txt` allowing all + sitemap reference
- `public/sitemap.xml` listing /, /about, /products, /contact
- **JSON-LD structured data** injected on Home:
  - `Organization` (name: Mittal Brothers Petrochem, brand: Power-Fix-O, logo, url, address, phone, email, sameAs)
  - `LocalBusiness` (address with postalCode 388130, geo, areaServed: India)
  - `Product` summaries for PF22, PF44, PF55, PF111 (brand, category)
  - `WebSite` with SearchAction
  - `BreadcrumbList`
- Semantic HTML: single `<h1>`, ordered `<h2>`/`<h3>`, descriptive `alt` text on every image, `aria-label`s on icon-only buttons, internal links with descriptive anchor text.
- Performance: lazy-load below-the-fold images, `loading="eager"` + `fetchpriority="high"` on hero, preconnect for fonts, compressed image assets.

## Home Page Sections (top to bottom)

1. **Sticky Header / Navigation**
   - Power-Fix-O wordmark left; nav links: Home, About, Products, Contact; phone CTA `+91 82007 49227` right; mobile hamburger.

2. **Hero**
   - H1: *Strong Bond. Lasting Performance. Trusted Adhesive.*
   - Subheading: Polished version of the provided copy mentioning Power-Fix-O advanced polymer-based tile adhesives for floor & wall.
   - Two CTAs: **View Products** (scrolls / links to /products), **Contact Us**.
   - Visual: PF55 blue bag hero image with subtle gradient backdrop and trust chips ("ISO 9001:2008", "EN 12004", "Made in Gujarat, India").

3. **Trust strip**
   - Thin row of badges: ISO 9001:2008 · EN 12004 C1TE / C2T / C2TE / C2TES2 · Manufactured in India · 20 Kg & 50 Kg packs.

4. **About Mittal Brothers Petrochem (intro)**
   - Two-column: polished company intro paragraph + key stat tiles (Years of expertise, Product grades, States served, Bulk-order ready). Link "Learn more about us →" to /about.

5. **Brand Spotlight — POWER-FIX-O**
   - Headline + value props with check-icons: Strong Adhesion, Easy to Apply, Water Resistant, Cost Effective.
   - Suitable-for chips: Ceramic Tiles, Vitrified Tiles, Natural Stone, Floor & Wall.

6. **Product Range Preview (4 cards)**
   - PF22 (green) — Floor & Wall Tile Adhesive — C1TE
   - PF44 (yellow) — Vitrified Tile Adhesive — C2T
   - PF55 (blue) — Premium Marble Adhesive — C2TE
   - PF111 (purple) — Heavy Tiles & Granite Adhesive — C2TES2
   - Each card: bag image, name, one-line benefit, "View details →" linking to /products#pfXX.

7. **Why Choose Us**
   - 5-icon grid using the polished bullet copy (polymer formulations, affordable pricing, reliable performance, Gujarat manufacturing, customer-focused service).

8. **Industries We Serve**
   - Icon row: Construction Companies, Builders & Developers, Contractors, Interior Designers, Tile Installers.

9. **Leadership / Directors**
   - Three minimal cards: Shailesh R Mittal, Subham R Mittal, Aman R Mittal — short shared caption about industry experience.

10. **Final CTA Banner**
    - "Looking for Reliable Tile Adhesive?" — bulk order / dealership inquiry copy + Call button (`tel:+918200749227`) and Email button (`mailto:`).

11. **Footer**
    - 4 columns: Brand blurb, Quick links (Home/About/Products/Contact), Contact (address, phone, email), Hours / Service area.
    - Copyright © 2026 Mittal Brothers Petrochem. Schema-friendly address block.

## Content Polish (highlights of edits to your copy)

- Tighten hero subheading to one crisp sentence.
- Rewrite About paragraph for natural keyword inclusion ("tile adhesive manufacturer in Gujarat", "construction chemicals & polymer products").
- Convert bullet lists to scannable check-icon rows.
- Add concise alt text per image incorporating product grade + use case.
- Replace emoji-led headings with proper `<h2>`s; emojis kept only inside CTA buttons where they add scannability.

## Technical Notes

- Stack: existing React 18 + Vite + Tailwind + shadcn/ui. No new deps required (use lucide-react icons already available).
- Design tokens added to `src/index.css` (HSL): `--brand`, `--brand-foreground`, `--brand-yellow`, `--brand-green`, `--brand-purple`; mapped in `tailwind.config.ts`.
- New components: `Header`, `Hero`, `TrustStrip`, `AboutIntro`, `BrandSpotlight`, `ProductPreview`, `WhyChooseUs`, `Industries`, `Leadership`, `CTASection`, `Footer`, plus a small `SEO` helper for JSON-LD injection on Home.
- Update `src/pages/Index.tsx` to compose these sections (replaces placeholder).
- Copy the 4 product bag images + a hero image into `src/assets/` from the uploads.
- About / Products / Contact pages and routes are stubbed only after you approve a separate plan for them.

## Out of Scope (for this plan)

- Building About, Products, Contact pages (next plans).
- Contact form backend / email delivery.
- CMS or admin panel.
- Logo redesign (using wordmark treatment until a logo file is supplied).
