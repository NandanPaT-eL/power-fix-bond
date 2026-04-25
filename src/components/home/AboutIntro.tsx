import { ArrowRight } from "lucide-react";

const stats = [
  { value: "4", label: "Premium Adhesive Grades" },
  { value: "20+", label: "Years Industry Expertise" },
  { value: "PAN", label: "India Distribution" },
  { value: "Bulk", label: "Order Ready" },
];

export const AboutIntro = () => (
  <section id="about" className="py-20 lg:py-28">
    <div className="container grid gap-12 lg:grid-cols-2 items-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          About Mittal Brothers Petrochem
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand-ink">
          A trusted name in construction chemicals and polymer products.
        </h2>
        <p className="mt-5 text-muted-foreground leading-relaxed">
          Mittal Brothers Petrochem is a Gujarat-based manufacturer of construction chemicals and
          polymer-related products. With a focus on quality, durability and cost-effectiveness, we
          deliver innovative bonding solutions under our flagship brand{" "}
          <strong className="text-foreground">Power-Fix-O</strong> — engineered for modern Indian
          construction.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Our adhesives are developed using advanced polymer technology to ensure high-strength
          bonding, easy application and long-lasting performance across residential, commercial and
          industrial projects.
        </p>
        <a
          href="#products"
          className="mt-6 inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all"
        >
          Explore the Power-Fix-O range <ArrowRight className="h-4 w-4" />
        </a>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-border bg-card p-6"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="text-3xl md:text-4xl font-extrabold text-primary">{s.value}</div>
            <div className="mt-2 text-sm text-muted-foreground font-medium">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);