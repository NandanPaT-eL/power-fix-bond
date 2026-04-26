import { ArrowRight, ShieldCheck, Award, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import brandPoster from "@/assets/brand-poster.jpg";

export const Hero = () => (
  <section
    id="home"
    className="relative overflow-hidden"
    style={{ background: "var(--gradient-soft)" }}
  >
    <div className="container grid gap-12 lg:grid-cols-2 items-center py-16 lg:py-24">
      <div>
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider">
          <ShieldCheck className="h-3.5 w-3.5" /> Tile Adhesive Manufacturer · Gujarat, India
        </span>
        <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-brand-ink">
          Strong Bond. <br />
          Lasting Performance. <br />
          <span className="text-primary">Trusted Adhesive.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl">
          Introducing <strong className="text-foreground">Power-Fix-O</strong> tile adhesives by Mittal
          Brothers Petrochem — advanced polymer-based solutions for floor & wall applications across
          ceramic, vitrified, marble and stone.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link to="/products">
              View Products <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <Award className="h-4 w-4 text-primary" /> ISO 9001:2008
          </span>
          <span className="inline-flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-primary" /> EN 12004 Certified
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" /> Made in Gujarat, India
          </span>
        </div>
      </div>
      <div className="relative">
        <div
          className="absolute inset-0 -z-10 rounded-[2rem] blur-3xl opacity-30"
          style={{ background: "var(--gradient-hero)" }}
          aria-hidden="true"
        />
        <img
          src={brandPoster}
          alt="Power-Fix-O — Your World, Bonded Beautifully. Tile adhesive, grout, epoxy, waterproofing, wall putty and more by Mittal Brothers Petrochem."
          className="relative mx-auto max-h-[620px] w-auto object-contain rounded-3xl shadow-2xl"
          loading="eager"
          fetchPriority="high"
          width={900}
          height={1200}
        />
      </div>
    </div>
  </section>
);