import { Mail, MapPin, Phone } from "lucide-react";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { SEO } from "@/components/home/SEO";

const Contact = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Contact Power-Fix-O | Mittal Brothers Petrochem, Gujarat"
      description="Contact Mittal Brothers Petrochem for Power-Fix-O tile adhesives, grouts and construction chemicals. Call +91 82007 49227 or email mittalbrotherspetrochem97@gmail.com."
      canonical="https://powerfixo.in/contact"
    />
    <Header />
    <main>
      <section className="bg-muted/40 border-b border-border">
        <div className="container py-14 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Contact</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-brand-ink max-w-3xl leading-tight">
            Get in touch with the Power-Fix-O team.
          </h1>
        </div>
      </section>
      <section className="py-16 lg:py-20">
        <div className="container grid gap-10 lg:grid-cols-3">
          <div className="rounded-2xl border border-border p-6" style={{ boxShadow: "var(--shadow-card)" }}>
            <Phone className="h-6 w-6 text-primary" />
            <h2 className="mt-4 text-lg font-bold text-brand-ink">Call us</h2>
            <a href="tel:+918200749227" className="mt-2 block text-muted-foreground hover:text-primary">+91 82007 49227</a>
          </div>
          <div className="rounded-2xl border border-border p-6" style={{ boxShadow: "var(--shadow-card)" }}>
            <Mail className="h-6 w-6 text-primary" />
            <h2 className="mt-4 text-lg font-bold text-brand-ink">Email</h2>
            <a href="mailto:mittalbrotherspetrochem97@gmail.com" className="mt-2 block text-muted-foreground hover:text-primary break-all">mittalbrotherspetrochem97@gmail.com</a>
          </div>
          <div className="rounded-2xl border border-border p-6" style={{ boxShadow: "var(--shadow-card)" }}>
            <MapPin className="h-6 w-6 text-primary" />
            <h2 className="mt-4 text-lg font-bold text-brand-ink">Factory</h2>
            <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
              Plot No. S-740, Sinhol Sandesar Road,<br />At Sihol, Ta. Petlad,<br />Dist. Anand — 388130, Gujarat, India
            </p>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Contact;