export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Ai-Studio - Agencia de Marketing Digital con Inteligencia Artificial",
    "description": "Agencia líder en Marketing Digital e Inteligencia Artificial en Tijuana. Transformamos tu negocio con soluciones de IA automatizadas, chatbots inteligentes y estrategias digitales innovadoras.",
    "url": "https://ai-studiomarketing.com",
    "telephone": "+52-664-123-4567",
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
      "name": "Servicios de Marketing Digital con IA",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Marketing Digital con Inteligencia Artificial",
            "description": "Estrategias de marketing digital potenciadas con IA para maximizar el ROI"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Chatbots Inteligentes",
            "description": "Desarrollo de chatbots con IA para atención al cliente automatizada"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Automatización de Procesos",
            "description": "Automatización de flujos de trabajo con inteligencia artificial"
          }
        }
      ]
    },
    "areaServed": {
      "@type": "Place",
      "name": "Tijuana, Baja California"
    },
    "knowsLanguage": ["es", "en"],
    "serviceType": "Marketing Digital Services"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}