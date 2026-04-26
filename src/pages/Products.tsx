import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { CTASection } from "@/components/home/CTASection";
import { SEO } from "@/components/home/SEO";
import pf22 from "@/assets/pf22.png";
import pf44 from "@/assets/pf44.png";
import pf55 from "@/assets/pf55.png";
import pf111 from "@/assets/pf111.png";
import tileGrout from "@/assets/tile-grout-bucket.jpeg";
import epoxyGrout from "@/assets/epoxy-grout-label.jpeg";
import whiteGrout from "@/assets/white-grout-1kg.jpeg";

type Product = {
  id: string;
  name: string;
  tag: string;
  grade?: string;
  desc: string;
  packs?: string;
  image?: string;
  accent: string;
};

const tileAdhesives: Product[] = [
  {
    id: "pf22",
    name: "PF-22",
    tag: "Floor & Wall Tile Adhesive",
    grade: "C1T · EN 12004 · ANSI A118.1",
    desc: "Cementitious polymer-based adhesive for fixing small to medium ceramic tiles on interior floors and walls. Economical, single-component — just add water.",
    packs: "20 Kg bag",
    image: pf22,
    accent: "bg-brand-green",
  },
  {
    id: "pf44",
    name: "PF-44",
    tag: "Vitrified Tile Adhesive",
    grade: "C2T · EN 12004 · ANSI A118.1",
    desc: "Smooth, creamy thinset polymer adhesive for vitrified tiles, mosaics and small natural stone in interior areas. Excellent workability and bond.",
    packs: "20 Kg & 50 Kg bags",
    image: pf44,
    accent: "bg-brand-yellow",
  },
  {
    id: "pf55",
    name: "PF-55",
    tag: "Premium Floor & Wall Tile Adhesive",
    grade: "C2TE · EN 12004 · ANSI A118.1 TE",
    desc: "High-performance polymer adhesive for medium & large-format ceramic, vitrified tiles, marble and natural stone on interior floors and walls.",
    packs: "20 Kg & 50 Kg bags",
    image: pf55,
    accent: "bg-brand-blue",
  },
  {
    id: "pf111",
    name: "PF-111",
    tag: "Super Flex Multipurpose Adhesive",
    grade: "C2TES2 · EN 12004 · ANSI A118.4 ET",
    desc: "Polymer-modified, super-flexible thinset for interior & exterior installation of vitrified tiles, granite, glass mosaics, pavers and bricks. Suitable for underwater and demanding environments.",
    packs: "20 Kg & 50 Kg bags",
    image: pf111,
    accent: "bg-brand-purple",
  },
];

const grouts: Product[] = [
  {
    id: "tile-grout",
    name: "Tile Grout",
    tag: "Mineral Joint Filler (up to 3 mm)",
    desc: "An extra-fine mineral grout perfect for joints up to 3 mm wide — designed for ceramic, porcelain, terracotta, marble, natural stone and mosaics. Ideal for residential, commercial, industrial spaces and swimming pools.",
    packs: "Available in multiple shades",
    image: tileGrout,
    accent: "bg-brand-blue",
  },
  {
    id: "white-grout",
    name: "White Cementitious Grout",
    tag: "High-Bond Joint Sealing Compound",
    desc: "Ready-mix white cementitious grout — non-shrink, self-curing with high bond strength and high water retention. Excellent for sealing joints of ceramic, mosaic, marble, granite, vitrified and glazed tiles. Waterproof packing.",
    packs: "1 Kg, 5 Kg & 50 Kg packs",
    image: whiteGrout,
    accent: "bg-brand-blue",
  },
  {
    id: "epoxy-grout",
    name: "Hi-Performance Epoxy Grout",
    tag: "Stain-Free Grout · Interior & Exterior",
    desc: "Hi-performance epoxy grout in Golden, Silver and Special variants. Available in 80+ colors — water resistant, easy to clean, chemical & bacterial resistant. ISO 9001:2015 certified.",
    packs: "1 Kg net",
    image: epoxyGrout,
    accent: "bg-brand-purple",
  },
];

const otherRange: Product[] = [
  { id: "latex-sbr", name: "Latex S.B.R", tag: "Polymer Bonding Agent", desc: "Styrene-butadiene rubber latex admixture to boost bond strength and flexibility of mortars and adhesives.", accent: "bg-brand-blue" },
  { id: "pu-adhesive", name: "P.U. Adhesive", tag: "Polyurethane Adhesive", desc: "High-performance polyurethane adhesive for demanding bonding applications.", accent: "bg-brand-purple" },
  { id: "waterproof", name: "Waterproofing", tag: "Surface Waterproofing", desc: "Reliable waterproofing solution for terraces, bathrooms, basements and wet areas.", accent: "bg-brand-blue" },
  { id: "wall-putty", name: "Wall Putty", tag: "Smooth-Finish Wall Putty", desc: "White cement-based wall putty for a smooth, durable finish under paint.", accent: "bg-brand-yellow" },
  { id: "block-mortar", name: "Block Mortar", tag: "AAC / Concrete Block Mortar", desc: "Ready-mix mortar for laying AAC blocks, concrete blocks and bricks with high bond strength.", accent: "bg-brand-green" },
  { id: "cleaners", name: "Tile Cleaners", tag: "Surface Cleaning Range", desc: "Specialized cleaners for tiles, grout and post-construction cleaning.", accent: "bg-brand-blue" },
  { id: "spacer", name: "Tile Spacers", tag: "Installation Accessories", desc: "Precision plastic spacers for consistent tile joints during installation.", accent: "bg-brand-yellow" },
  { id: "glitter", name: "Glitter", tag: "Decorative Additive", desc: "Decorative glitter additive for grouts and finishes.", accent: "bg-brand-purple" },
];

const ProductCard = ({ p }: { p: Product }) => (
  <article
    className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1"
    style={{ boxShadow: "var(--shadow-card)" }}
  >
    {p.image && (
      <div className="relative h-64 overflow-hidden bg-white">
        <img
          src={p.image}
          alt={`Power-Fix-O ${p.name} — ${p.tag}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
    )}
    <div className="p-6">
      <div className="flex items-baseline justify-between gap-2">
        <h3 className="text-xl font-bold text-brand-ink">{p.name}</h3>
        {p.grade && (
          <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground text-right">
            {p.grade}
          </span>
        )}
      </div>
      <p className="mt-1 text-sm font-semibold text-primary">{p.tag}</p>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
      {p.packs && (
        <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-foreground/70">
          Packing: <span className="text-foreground">{p.packs}</span>
        </p>
      )}
    </div>
  </article>
);

const Section = ({ id, eyebrow, title, intro, items }: { id: string; eyebrow: string; title: string; intro: string; items: Product[] }) => (
  <section id={id} className="py-16 lg:py-20">
    <div className="container">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand-ink">{title}</h2>
        <p className="mt-4 text-muted-foreground">{intro}</p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((p) => <ProductCard key={p.id} p={p} />)}
      </div>
    </div>
  </section>
);

const Products = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Products | Tile Adhesive, Grout & Epoxy by Power-Fix-O"
      description="Explore Power-Fix-O's complete range — PF-22, PF-44, PF-55, PF-111 tile adhesives, white cementitious grout, epoxy grout and construction chemicals by Mittal Brothers Petrochem, Gujarat."
      canonical="https://powerfixo.in/products"
    />
    <Header />
    <main>
      <section className="bg-muted/40 border-b border-border">
        <div className="container py-14 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Our Products</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-brand-ink leading-tight">
            Tile adhesives, grouts & construction chemicals — engineered to bond.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Power-Fix-O by Mittal Brothers Petrochem offers a complete portfolio for tilers,
            contractors and builders — from cementitious tile adhesives to epoxy grouts and
            waterproofing solutions. All products comply with EN 12004, ANSI A118 and IS 15477 standards.
          </p>
        </div>
      </section>

      <Section
        id="tile-adhesives"
        eyebrow="Tile Adhesives"
        title="Power-Fix-O Tile Adhesive Range"
        intro="Polymer-modified cementitious tile adhesives for ceramic, vitrified, marble and natural stone — interior and exterior."
        items={tileAdhesives}
      />

      <div className="container"><div className="border-t border-border" /></div>

      <Section
        id="grouts"
        eyebrow="Grouts"
        title="Tile Grout, White Grout & Epoxy Grout"
        intro="High-performance joint sealing compounds with excellent bond strength, water retention and chemical resistance."
        items={grouts}
      />

      <div className="container"><div className="border-t border-border" /></div>

      <Section
        id="construction-chemicals"
        eyebrow="Construction Chemicals"
        title="Complete Construction Chemicals Range"
        intro="Beyond adhesives — Power-Fix-O supplies a full portfolio of allied construction chemicals."
        items={otherRange}
      />

      <CTASection />
    </main>
    <Footer />
  </div>
);

export default Products;