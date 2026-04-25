import { Mail, MapPin, Phone, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export const Footer = () => (
  <footer className="bg-brand-ink text-white">
    <div className="container py-14 grid gap-10 md:grid-cols-4">
      <div className="md:col-span-2">
        <Logo />
        <p className="mt-4 text-sm text-white/70 max-w-sm leading-relaxed">
          Power-Fix-O by Mittal Brothers Petrochem — premium polymer-based tile adhesives
          manufactured in Gujarat for floor and wall applications across India.
        </p>
      </div>
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">Quick Links</h3>
        <ul className="mt-4 space-y-2 text-sm text-white/70">
          <li><Link to="/" className="hover:text-white">Home</Link></li>
          <li><Link to="/about" className="hover:text-white">About Us</Link></li>
          <li><Link to="/products" className="hover:text-white">Products</Link></li>
          <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">Contact</h3>
        <address className="mt-4 not-italic text-sm text-white/70 space-y-3">
          <p className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> Plot No. S-740, Sinhol Sandesar Road, At Sihol, Ta. Petlad, Dist. Anand — 388130, Gujarat, India</p>
          <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> <a href="tel:+918200749227" className="hover:text-white">+91 82007 49227</a></p>
          <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> <a href="mailto:mittalbrotherspetrochem97@gmail.com" className="hover:text-white">mittalbrotherspetrochem97@gmail.com</a></p>
          <p className="flex items-center gap-2"><Globe className="h-4 w-4" /> www.powerfixo.in</p>
        </address>
      </div>
    </div>
    <div className="border-t border-white/10">
      <div className="container py-5 text-xs text-white/50 flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Mittal Brothers Petrochem. All rights reserved.</p>
        <p>Brand: POWER-FIX-O · Manufactured in Gujarat, India</p>
      </div>
    </div>
  </footer>
);