const items = [
  "ISO 9001:2008 Certified",
  "EN 12004 — C1TE / C2T / C2TE / C2TES2",
  "Manufactured in India",
  "Available in 20 Kg & 50 Kg packs",
];

export const TrustStrip = () => (
  <section className="border-y border-border bg-brand-ink text-white">
    <div className="container py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs sm:text-sm font-medium">
      {items.map((t, i) => (
        <span key={t} className="flex items-center gap-3">
          <span>{t}</span>
          {i < items.length - 1 && <span className="text-white/30">•</span>}
        </span>
      ))}
    </div>
  </section>
);