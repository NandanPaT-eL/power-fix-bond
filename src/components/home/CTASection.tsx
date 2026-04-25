import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTASection = () => (
  <section id="contact" className="py-20 lg:py-24">
    <div className="container">
      <div
        className="relative overflow-hidden rounded-3xl p-10 lg:p-16 text-white"
        style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-elegant)" }}
      >
        <div className="relative z-10 grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Looking for reliable tile adhesive?
            </h2>
            <p className="mt-4 text-white/85 text-lg max-w-xl">
              Get in touch today for bulk orders, dealership inquiries and product guidance from
              our team.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button asChild size="lg" variant="secondary">
              <a href="tel:+918200749227">
                <Phone className="mr-2 h-4 w-4" /> +91 82007 49227
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-white/40 text-white hover:bg-white hover:text-primary"
            >
              <a href="mailto:mittalbrotherspetrochem97@gmail.com">
                <Mail className="mr-2 h-4 w-4" /> Email Us
              </a>
            </Button>
          </div>
        </div>
        <div
          className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
          aria-hidden="true"
        />
      </div>
    </div>
  </section>
);