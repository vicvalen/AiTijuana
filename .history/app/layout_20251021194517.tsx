import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import "./globals.css"
import { PageTransition } from "@/components/page-transition"
import { NavigationTransition } from "@/components/navigation-transition"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Aurora from "@/components/Aurora"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "Cliste - AI Automation for Enterprise",
  description:
    "Transform your business with intelligent AI automation solutions. Empower your organization to operate at the speed of thought.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased">
        <Suspense fallback={null}>
          {/* Global aurora background behind content - restored neon palette */}
          <Aurora colorStops={["#5227FF", "#7CFF67", "#5227FF"]} amplitude={1.0} blend={0.5} speed={1.0} />

          <NavigationTransition />
          <GlassmorphismNav />

          {/* add top padding so fixed nav does not overlap page content; ensure content stacks above background */}
          <div className="pt-20 md:pt-24 relative z-10">
            <PageTransition>{children}</PageTransition>
            <Footer />
          </div>
        </Suspense>
        <SpeedInsights />
      </body>
    </html>
  )
}
