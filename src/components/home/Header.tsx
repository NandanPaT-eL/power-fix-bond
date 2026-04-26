import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container flex h-20 md:h-24 items-center justify-between">
        <Link to="/" aria-label="Power-Fix-O home">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? "text-primary" : "text-foreground/80 hover:text-primary"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild variant="default" size="sm">
            <a href="tel:+918200749227" aria-label="Call Power-Fix-O">
              <Phone className="mr-2 h-4 w-4" /> +91 82007 49227
            </a>
          </Button>
        </div>
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container flex flex-col py-4 gap-3" aria-label="Mobile">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className="text-sm font-medium py-2 text-foreground/80"
              >
                {l.label}
              </NavLink>
            ))}
            <Button asChild>
              <a href="tel:+918200749227">
                <Phone className="mr-2 h-4 w-4" /> +91 82007 49227
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};