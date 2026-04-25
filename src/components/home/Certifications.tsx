import { Award, Download, ShieldCheck } from "lucide-react";

export const Certifications = () => (
  <section id="certifications" className="py-16 lg:py-24 bg-muted/30 border-y border-border">
    <div className="container">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Certifications & Registrations
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-brand-ink leading-tight">
          Officially registered. Independently trusted.
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Mittal Brothers Petrochem is a Government of India recognised manufacturing
          enterprise, registered under the MSME Udyam framework.
        </p>
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        <article className="rounded-2xl border border-border bg-background p-6 lg:p-8 shadow-sm flex flex-col">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary grid place-items-center shrink-0">
              <ShieldCheck className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-ink">Udyam (MSME) Registration</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Ministry of Micro, Small &amp; Medium Enterprises, Government of India
              </p>
            </div>
          </div>

          <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
            <div>
              <dt className="text-muted-foreground">Udyam Reg. No.</dt>
              <dd className="font-semibold text-brand-ink">UDYAM-GJ-03-0076120</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Enterprise Type</dt>
              <dd className="font-semibold text-brand-ink">Micro · Manufacturing</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Organisation</dt>
              <dd className="font-semibold text-brand-ink">Partnership Firm</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">State</dt>
              <dd className="font-semibold text-brand-ink">Gujarat, India</dd>
            </div>
          </dl>

          <a
            href="/documents/udyam-certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground px-5 py-3 font-semibold hover:bg-primary/90 transition-colors w-full sm:w-auto"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            View Udyam Certificate (PDF)
          </a>
        </article>

        <article className="rounded-2xl border border-dashed border-border bg-background/60 p-6 lg:p-8 flex flex-col">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-xl bg-accent/10 text-accent grid place-items-center shrink-0">
              <Award className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-ink">Quality &amp; Standards</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Manufactured to industry benchmarks for tile adhesives and construction chemicals.
              </p>
            </div>
          </div>
          <ul className="mt-6 space-y-2 text-sm text-brand-ink">
            <li>• Formulated per EN 12004 / IS 15477 guidelines</li>
            <li>• Batch-tested for bond strength &amp; open time</li>
            <li>• Made in Gujarat, India — Anand district</li>
          </ul>
          <p className="mt-auto pt-6 text-xs text-muted-foreground">
            Additional certifications and lab reports available on request for bulk and project enquiries.
          </p>
        </article>
      </div>
    </div>
  </section>
);

export default Certifications;