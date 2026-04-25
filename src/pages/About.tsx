import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { AboutIntro } from "@/components/home/AboutIntro";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Leadership } from "@/components/home/Leadership";
import { CTASection } from "@/components/home/CTASection";
import { Certifications } from "@/components/home/Certifications";
import { SEO } from "@/components/home/SEO";

const About = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="About Mittal Brothers Petrochem | Power-Fix-O"
      description="Mittal Brothers Petrochem manufactures Power-Fix-O tile adhesives and construction chemicals from Anand, Gujarat. ISO 9001 certified, EN 12004 compliant."
      canonical="https://powerfixo.in/about"
    />
    <Header />
    <main>
      <section className="bg-muted/40 border-b border-border">
        <div className="container py-14 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">About Us</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-brand-ink max-w-3xl leading-tight">
            Building stronger bonds since day one.
          </h1>
        </div>
      </section>
      <AboutIntro />
      <WhyChooseUs />
      <Certifications />
      <Leadership />
      <CTASection />
    </main>
    <Footer />
  </div>
);

export default About;