export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Ai-Studio | Agencia de Inteligencia Artificial en Tijuana",
    "image": "https://aitijuana.studio/og-image.jpg",
    "description": "Agencia especializada en Inteligencia Artificial y Automatización en Tijuana. Desarrollamos agentes IA, chatbots y sistemas de optimización de ventas.",
    "url": "https://aitijuana.studio",
    "telephone": "+52-664-794-7666",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Revolución 1234",
      "addressLocality": "Tijuana",
      "addressRegion": "Baja California",
      "postalCode": "22000",
      "addressCountry": "MX"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.5149",
      "longitude": "-117.0382"
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "sameAs": [
      "https://www.facebook.com/aistudiomarketing",
      "https://www.twitter.com/ai_studio",
      "https://www.linkedin.com/company/ai-studio-marketing"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Inteligencia Artificial",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Desarrollo de Agentes IA",
            "description": "Creación de agentes inteligentes personalizados para atención al cliente y ventas."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Implementación de SmartEngine CRM",
            "description": "CRM potenciado con IA para orquestación de leads y automatización."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Consultoría en Automatización",
            "description": "Optimización de flujos de trabajo empresariales mediante n8n y Flowise."
          }
        }
      ]
    },
    "areaServed": {
      "@type": "Place",
      "name": "Tijuana, Baja California"
    },
    "knowsLanguage": ["es", "en"],
    "serviceType": "Artificial Intelligence Services"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}