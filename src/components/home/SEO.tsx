import { useEffect } from "react";

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

export const SEO = () => {
  useEffect(() => {
    const id = "ld-home";
    let el = document.getElementById(id) as HTMLScriptElement | null;
    if (!el) {
      el = document.createElement("script");
      el.id = id;
      el.type = "application/ld+json";
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(json);
    return () => {
      el?.remove();
    };
  }, []);
  return null;
};