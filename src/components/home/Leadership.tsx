const directors = [
  { name: "Shailesh R Mittal", role: "Director" },
  { name: "Subham R Mittal", role: "Director" },
  { name: "Aman R Mittal", role: "Director" },
];

export const Leadership = () => (
  <section className="py-20 lg:py-24 bg-secondary/40">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Leadership</p>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand-ink">
          Leadership behind the excellence.
        </h2>
        <p className="mt-4 text-muted-foreground">
          Backed by deep industry experience and technical expertise, our leadership ensures
          consistent quality and continued innovation.
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
        {directors.map((d) => (
          <div
            key={d.name}
            className="rounded-2xl bg-card border border-border p-8 text-center"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
              {d.name
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("")}
            </div>
            <h3 className="mt-4 text-lg font-bold text-brand-ink">{d.name}</h3>
            <p className="text-sm text-muted-foreground">{d.role}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);