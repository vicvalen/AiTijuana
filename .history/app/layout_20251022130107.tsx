import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import "./globals.css"
import { PageTransition } from "@/components/page-transition"
import { NavigationTransition } from "@/components/navigation-transition"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { JsonLd } from "@/components/json-ld"

export const metadata: Metadata = {
  title: "Agencia de Marketing Digital con Inteligencia Artificial en Tijuana | Ai-Studio",
  description: "Agencia líder en Marketing Digital e Inteligencia Artificial en Tijuana. Transformamos tu negocio con soluciones de IA automatizadas, chatbots inteligentes y estrategias digitales innovadoras.",
  keywords: [
    "agencia de marketing digital",
    "inteligencia artificial en tijuana",
    "marketing digital tijuana",
    "agencia de ia",
    "automatización con ia",
    "chatbots inteligentes",
    "soluciones de marketing digital",
    "ia para empresas",
    "marketing automatizado",
    "transformación digital tijuana"
  ],
  authors: [{ name: "Ai-Studio" }],
  creator: "Ai-Studio",
  publisher: "Ai-Studio",
  alternates: {
    canonical: "https://ai-studio.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://ai-studio.com",
    title: "Agencia de Marketing Digital con Inteligencia Artificial en Tijuana | Ai-Studio",
    description: "Agencia líder en Marketing Digital e Inteligencia Artificial en Tijuana. Transformamos tu negocio con soluciones de IA automatizadas.",
    siteName: "Ai-Studio - Marketing Digital con IA en Tijuana",
    images: [
      {
        url: "https://ai-studio.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Agencia de Marketing Digital con Inteligencia Artificial en Tijuana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agencia de Marketing Digital con Inteligencia Artificial en Tijuana",
    description: "Transformamos tu negocio con soluciones de IA automatizadas, chatbots inteligentes y estrategias digitales innovadoras.",
    creator: "@ai_studio",
    images: ["https://ai-studio.com/twitter-image.jpg"],
  },
  verification: {
    google: "google-site-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-MX" className="dark">
      <body className="font-sans antialiased">
        <JsonLd />
        <Suspense fallback={null}>
          <NavigationTransition />
          <PageTransition>{children}</PageTransition>
        </Suspense>
        <SpeedInsights />
      </body>
    </html>
  )
}
