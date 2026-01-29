import dynamic from 'next/dynamic';
import { Layout } from "@/components/layout";
import { HeroSection } from "@/components/hero-section";

// Lazy load below-the-fold components
const ProblemSolutionSection = dynamic(() => import("@/components/problem-solution-section").then(mod => mod.ProblemSolutionSection), {
  loading: () => <div className="h-screen bg-black" />, // Placeholder
});
const FeaturesSection = dynamic(() => import("@/components/features-section").then(mod => mod.FeaturesSection));
const AITeamSection = dynamic(() => import("@/components/ai-team-section").then(mod => mod.AITeamSection));
const TestimonialsSection = dynamic(() => import("@/components/testimonials-section").then(mod => mod.TestimonialsSection));
const ROICalculatorSection = dynamic(() => import("@/components/roi-calculator-section").then(mod => mod.ROICalculatorSection));
const CTASection = dynamic(() => import("@/components/cta-section").then(mod => mod.CTASection));

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
