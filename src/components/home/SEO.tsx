import { useEffect } from "react";

type SEOProps = {
  title?: string;
  description?: string;
  canonical?: string;
};

const json = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://powerfixo.in/#org",
      name: "Mittal Brothers Petrochem",
      url: "https://powerfixo.in/",
      email: "mittalbrotherspetrochem97@gmail.com",
      telephone: "+91-8200749227",
      brand: { "@type": "Brand", name: "Power-Fix-O" },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Plot No. S-740, Sinhol Sandesar Road, At Sihol, Ta. Petlad",
        addressLocality: "Anand",
        postalCode: "388130",
        addressRegion: "Gujarat",
        addressCountry: "IN",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://powerfixo.in/#business",
      name: "Mittal Brothers Petrochem",
      image: "https://powerfixo.in/og-image.jpg",
      url: "https://powerfixo.in/",
      telephone: "+91-8200749227",
      priceRange: "₹₹",
      areaServed: "IN",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Plot No. S-740, Sinhol Sandesar Road, At Sihol, Ta. Petlad",
        addressLocality: "Anand",
        postalCode: "388130",
        addressRegion: "Gujarat",
        addressCountry: "IN",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://powerfixo.in/#website",
      url: "https://powerfixo.in/",
      name: "Power-Fix-O",
      publisher: { "@id": "https://powerfixo.in/#org" },
    },
    ...["PF22", "PF44", "PF55", "PF111"].map((p) => ({
      "@type": "Product",
      name: `Power-Fix-O ${p} Tile Adhesive`,
      brand: { "@type": "Brand", name: "Power-Fix-O" },
      manufacturer: { "@id": "https://powerfixo.in/#org" },
      category: "Tile Adhesive",
    })),
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://powerfixo.in/" },
      ],
    },
  ],
};

const setMeta = (selector: string, attr: string, value: string) => {
  let el = document.head.querySelector<HTMLMetaElement | HTMLLinkElement>(selector);
  if (!el) {
    if (selector.startsWith("link")) {
      el = document.createElement("link");
      (el as HTMLLinkElement).rel = "canonical";
    } else {
      el = document.createElement("meta");
      const name = selector.match(/\[(name|property)="([^"]+)"\]/);
      if (name) (el as HTMLMetaElement).setAttribute(name[1], name[2]);
    }
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
};

export const SEO = ({ title, description, canonical }: SEOProps = {}) => {
  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      setMeta('meta[name="description"]', "content", description);
      setMeta('meta[property="og:description"]', "content", description);
    }
    if (title) setMeta('meta[property="og:title"]', "content", title);
    if (canonical) setMeta('link[rel="canonical"]', "href", canonical);

    const id = "ld-home";
    let el = document.getElementById(id) as HTMLScriptElement | null;
    if (!el) {
      el = document.createElement("script");
      el.id = id;
      el.type = "application/ld+json";
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(json);
  }, [title, description, canonical]);
  return null;
};