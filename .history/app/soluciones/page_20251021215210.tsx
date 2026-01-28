n"use client";

import { GlassmorphismNav } from "@/components/glassmorphism-nav";
import Aurora from "@/components/Aurora";
import { SolutionsSection } from "@/components/solutions-section";
import { Footer } from "@/components/footer";

export default function SolucionesPage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <main className="min-h-screen relative overflow-hidden">
        <div className="fixed inset-0 w-full h-full">
          <Aurora
            colorStops={["#3E63DD", "#7F56D9"]}
            amplitude={1.2}
            blend={0.6}
            speed={0.8}
          />
        </div>
        <div className="relative z-10">
          <GlassmorphismNav />
          <SolutionsSection />
          <Footer />
        </div>
      </main>
    </div>
  );
}