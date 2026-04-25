import { Beaker, BadgeIndianRupee, ShieldCheck, Factory, Headphones } from "lucide-react";

const items = [
  { icon: Beaker, title: "Advanced Polymer Formulations", desc: "Engineered for high bond strength and durability." },
  { icon: BadgeIndianRupee, title: "Affordable for Trade", desc: "Competitive pricing for contractors, builders and dealers." },
  { icon: ShieldCheck, title: "Reliable Performance", desc: "Consistent results across applications and conditions." },
  { icon: Factory, title: "Manufactured in Gujarat", desc: "Quality-controlled production at our Anand facility." },
  { icon: Headphones, title: "Customer-Focused Service", desc: "Responsive support for bulk and dealership inquiries." },
];

export const WhyChooseUs = () => (
  <section className="py-20 lg:py-28 bg-secondary/40">
    <div className="container">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Why Choose Us</p>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand-ink">
          The qualities that make Power-Fix-O the contractor's choice.
        </h2>
      </div>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {items.map((it) => (
          <div
            key={it.title}
            className="rounded-2xl bg-card p-6 border border-border h-full"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <it.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-brand-ink">{it.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{it.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);