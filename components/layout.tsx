"use client";

import { ReactNode } from "react";
import { GlassmorphismNav } from "@/components/glassmorphism-nav";
import Aurora from "@/components/Aurora";
import { Footer } from "@/components/footer";

interface LayoutProps {
  children: ReactNode;
  showAurora?: boolean;
}

export function Layout({ children, showAurora = true }: LayoutProps) {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <main className="min-h-screen relative overflow-hidden">
        {showAurora && (
          <div className="fixed inset-0 w-full h-full">
            <Aurora
              colorStops={["#3E63DD", "#7F56D9"]}
              amplitude={1.2}
              blend={0.6}
              speed={0.8}
            />
          </div>
        )}
        <div className="relative z-10">
          <GlassmorphismNav />
          {children}
          <Footer />
        </div>
      </main>
    </div>
  );
}