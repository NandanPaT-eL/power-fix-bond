import { ArrowRight } from "lucide-react";
import pf22 from "@/assets/pf22-bag.jpeg";
import pf44 from "@/assets/pf44-bag.jpeg";
import pf55 from "@/assets/pf55-bag.jpeg";
import pf111 from "@/assets/pf111-bag.jpeg";

const products = [
  {
    id: "pf22",
    name: "PF-22",
    tag: "Floor & Wall Tile Adhesive",
    grade: "C1TE · EN 12004",
    desc: "Cementitious polymer adhesive ideal for ceramic tiles on interior floors and walls.",
    image: pf22,
    accent: "bg-brand-green",
  },
  {
    id: "pf44",
    name: "PF-44",
    tag: "Vitrified Tile Adhesive",
    grade: "C2T · EN 12004",
    desc: "Smooth, creamy thinset for vitrified tiles, mosaics and stone in interior areas.",
    image: pf44,
    accent: "bg-brand-yellow",
  },
  {
    id: "pf55",
    name: "PF-55",
    tag: "Premium Marble Adhesive",
    grade: "C2TE · EN 12004",
    desc: "High-performance adhesive for large-format tiles, marble and natural stone.",
    image: pf55,
    accent: "bg-brand-blue",
  },
  {
    id: "pf111",
    name: "PF-111",
    tag: "Heavy Tiles & Granite Adhesive",
    grade: "C2TES2 · EN 12004",
    desc: "Multipurpose, flexible polymer-modified adhesive for interior & exterior use.",
    image: pf111,
    accent: "bg-brand-purple",
  },
];

export const ProductPreview = () => (
  <section id="products" className="py-20 lg:py-28">
    <div className="container">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Product Range</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand-ink">
            Power-Fix-O tile adhesives — for every tile, every surface.
          </h2>
        </div>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all"
        >
          Request a quote <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <article
            key={p.id}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className={`relative h-56 ${p.accent} flex items-center justify-center overflow-hidden`}>
              <img
                src={p.image}
                alt={`Power-Fix-O ${p.name} ${p.tag} 20Kg bag`}
                className="max-h-52 w-auto object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-bold text-brand-ink">{p.name}</h3>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {p.grade}
                </span>
              </div>
              <p className="mt-1 text-sm font-semibold text-primary">{p.tag}</p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);