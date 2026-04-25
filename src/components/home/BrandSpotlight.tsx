import { Check, Droplets, Sparkles, IndianRupee, Layers } from "lucide-react";

const features = [
  { icon: Layers, title: "Strong Adhesion", desc: "High-bond polymer formulation for lasting grip." },
  { icon: Sparkles, title: "Easy to Apply", desc: "Smooth, creamy mix — just add water." },
  { icon: Droplets, title: "Water Resistant", desc: "Performs in wet & humid conditions." },
  { icon: IndianRupee, title: "Cost Effective", desc: "Engineered for Indian project budgets." },
];

const chips = ["Ceramic Tiles", "Vitrified Tiles", "Natural Stone", "Marble & Granite", "Floor & Wall"];

export const BrandSpotlight = () => (
  <section className="py-20 lg:py-28 bg-secondary/40">
    <div className="container">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Our Brand</p>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand-ink">
          POWER-FIX-O — Tile adhesives engineered for performance.
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          A premium range of polymer-modified tile adhesives designed for ceramic, vitrified, marble
          and natural stone — for both floor and wall applications.
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-2xl bg-card p-6 border border-border"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-brand-ink">{f.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-2">
        {chips.map((c) => (
          <span
            key={c}
            className="inline-flex items-center gap-1.5 rounded-full bg-card border border-border px-4 py-2 text-sm font-medium text-foreground"
          >
            <Check className="h-4 w-4 text-primary" /> {c}
          </span>
        ))}
      </div>
    </div>
  </section>
);