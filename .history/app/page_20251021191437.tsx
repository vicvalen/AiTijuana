// Navigation provided globally in layout
import { HeroSection } from "@/components/hero-section";
import { ProblemSolutionSection } from "@/components/problem-solution-section";
import Aurora from "@/components/Aurora";
import { FeaturesSection } from "@/components/features-section";
import { AITeamSection } from "@/components/ai-team-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ROICalculatorSection } from "@/components/roi-calculator-section";
import { CTASection } from "@/components/cta-section";
// Footer provided globally in layout

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <main className="min-h-screen relative overflow-hidden">
        {/* Aurora: now provided globally by layout */}
        <div className="relative z-10">
          <HeroSection />
          <ProblemSolutionSection />
          <FeaturesSection />
          <AITeamSection />
          <TestimonialsSection />
          <ROICalculatorSection />
          <CTASection />
        </div>
      </main>
    </div>
  );
}
