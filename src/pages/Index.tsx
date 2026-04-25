import { Header } from "@/components/home/Header";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { AboutIntro } from "@/components/home/AboutIntro";
import { BrandSpotlight } from "@/components/home/BrandSpotlight";
import { ProductPreview } from "@/components/home/ProductPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Industries } from "@/components/home/Industries";
import { Leadership } from "@/components/home/Leadership";
import { CTASection } from "@/components/home/CTASection";
import { Footer } from "@/components/home/Footer";
import { SEO } from "@/components/home/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO />
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <AboutIntro />
        <BrandSpotlight />
        <ProductPreview />
        <WhyChooseUs />
        <Industries />
        <Leadership />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
