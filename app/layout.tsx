import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import "./globals.css"
import { PageTransition } from "@/components/page-transition"
import { NavigationTransition } from "@/components/navigation-transition"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import { JsonLd } from "@/components/json-ld"

export const metadata: Metadata = {
  title: "Agencia de Inteligencia Artificial en Tijuana | Ai-Studio",
  description: "Somos la Agencia de Inteligencia Artificial líder en Tijuana. Desarrollamos Agentes IA, automatizamos procesos y potenciamos tu marketing digital.",
  keywords: [
    "agencia de inteligencia artificial en tijuana",
    "agencia de ia tijuana",
    "desarrollo de ia tijuana",
    "consultoría de ia tijuana",
    "marketing digital con ia",
    "automatización de procesos tijuana",
    "agentes inteligentes",
    "chatbot ia tijuana",
    "empresa de inteligencia artificial mexico",
    "transformación digital baja california"
  ],
  authors: [{ name: "Ai-Studio" }],
  creator: "Ai-Studio",
  publisher: "Ai-Studio",
  alternates: {
    canonical: "https://aitijuana.studio",
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
    url: "https://aitijuana.studio",
    title: "Agencia de Inteligencia Artificial en Tijuana | Ai-Studio",
    description: "Desarrollamos Agentes de Inteligencia Artificial y soluciones de automatización en Tijuana. Potencia tu negocio con tecnología de vanguardia.",
    siteName: "Ai-Studio - Inteligencia Artificial en Tijuana",
    images: [
      {
        url: "https://aitijuana.studio/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Agencia de Inteligencia Artificial en Tijuana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agencia de Inteligencia Artificial en Tijuana",
    description: "Desarrollo de Agentes IA y automatización de procesos para empresas en Tijuana y Baja California.",
    creator: "@ai_studio",
    images: ["https://aitijuana.studio/twitter-image.jpg"],
  },
  verification: {
    google: "google-site-verification-code",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  other: {
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#000000",
    "classification": "Marketing Digital, Inteligencia Artificial, Automatización",
    "rating": "general",
    "distribution": "global",
    "language": "es-MX",
    "geo.region": "MX-BCN",
    "geo.placename": "Tijuana",
    "ICBM": "32.5149,-117.0382",
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
        <Analytics />
      </body>
    </html>
  )
}
