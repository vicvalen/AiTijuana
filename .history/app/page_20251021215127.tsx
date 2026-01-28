import { Layout } from "@/components/layout";
import { HeroSection } from "@/components/hero-section";
import { ProblemSolutionSection } from "@/components/problem-solution-section";
import { FeaturesSection } from "@/components/features-section";
import { AITeamSection } from "@/components/ai-team-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ROICalculatorSection } from "@/components/roi-calculator-section";
import { CTASection } from "@/components/cta-section";

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <ProblemSolutionSection />
      <FeaturesSection />
      <AITeamSection />
      <TestimonialsSection />
      <ROICalculatorSection />
      <CTASection />
    </Layout>
  );
}
