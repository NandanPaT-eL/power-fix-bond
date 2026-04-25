import { Building2, HardHat, Hammer, Palette, Wrench } from "lucide-react";

const industries = [
  { icon: Building2, label: "Construction Companies" },
  { icon: HardHat, label: "Builders & Developers" },
  { icon: Hammer, label: "Contractors" },
  { icon: Palette, label: "Interior Designers" },
  { icon: Wrench, label: "Tile Installers" },
];

export const Industries = () => (
  <section className="py-20 lg:py-24">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Industries We Serve</p>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand-ink">
          Trusted across the construction value chain.
        </h2>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {industries.map((i) => (
          <div
            key={i.label}
            className="flex flex-col items-center text-center rounded-2xl border border-border bg-card p-6"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <i.icon className="h-6 w-6" />
            </div>
            <p className="mt-3 text-sm font-semibold text-brand-ink">{i.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);