import { Button } from "@/components/ui/button";
import { Button } from "@/components/ui/button";

const ArrowRight = () => (
  <svg
    className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

const Play = () => (
  <svg
    className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6-8h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z"
    />
  </svg>
);

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in-hero">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-primary/20 backdrop-blur-md border border-accent-primary/30 text-text-primary text-sm font-medium mb-8 mt-12 animate-fade-in-badge">
          <span className="w-2 h-2 bg-accent-primary rounded-full mr-2 animate-pulse"></span>
          🚀 Agencia de Inteligencia Artificial en Tijuana
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6 animate-fade-in-heading">
          <span className="text-text-primary">Transforma tu negocio con</span>
          <br />
          <span className="text-gradient-highlight">Inteligencia Artificial</span>
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-xl md:text-2xl text-text-secondary text-balance max-w-sm sm:max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4 sm:px-0 animate-fade-in-subheading font-light">
          Implementamos Automatizaciones y Agentes de Inteligencia Artificial que optimizan tus procesos, reducen costos operativos y trabajan por ti.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 sm:mb-16 animate-fade-in-buttons">
          <Button
            size="lg"
            className="bg-highlight-gradient text-text-on-accent rounded-full px-10 py-5 text-lg font-medium transition-all duration-300 hover:opacity-90 hover:scale-105 hover:shadow-glow-highlight group cursor-pointer relative overflow-hidden"
          >
            Comenzar ahora
            <ArrowRight />
          </Button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-8 max-w-lg mx-auto mb-16 animate-fade-in-trust">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-text-primary mb-1">80%</div>
            <p className="text-xs sm:text-sm text-text-secondary uppercase tracking-wider">Reducción de tareas manuales</p>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-text-primary mb-1">24/7</div>
            <p className="text-xs sm:text-sm text-text-secondary uppercase tracking-wider">Operación automatizada</p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center px-4 hidden sm:block overflow-hidden animate-fade-in-trust">
          <p className="text-sm text-text-secondary mb-6">
            Confiado por empresas innovadoras en todo el mundo
          </p>
          <div className="relative overflow-hidden w-full max-w-4xl mx-auto">
            <div className="flex items-center gap-8 opacity-60 hover:opacity-80 transition-all duration-500 animate-slide-left">
              <div className="flex items-center gap-8 whitespace-nowrap">
                <div className="text-base sm:text-lg font-semibold text-text-secondary">
                  TechCorp
                </div>
                <div className="text-base sm:text-lg font-semibold text-text-secondary">
                  InnovateLab
                </div>
                <div className="text-base sm:text-lg font-semibold text-text-secondary">
                  FutureScale
                </div>
                <div className="text-base sm:text-lg font-semibold text-text-secondary">
                  AutoFlow
                </div>
                <div className="text-base sm:text-lg font-semibold text-text-secondary">
                  eScale
                </div>
                <div className="text-base sm:text-lg font-semibold text-text-secondary">
                  DataFlow
                </div>
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex items-center gap-8 whitespace-nowrap">
                <div className="text-base sm:text-lg font-semibold text-text-secondary">
                  TechCorp
                </div>
                <div className="text-base sm:text-lg font-semibold text-text-secondary">
                  InnovateLab
                </div>
                <div className="text-base sm:text-lg font-semibold text-text-secondary">
                  FutureScale
                </div>
                <div className="text-base sm:text-lg font-semibold text-text-secondary">
                  AutoFlow
                </div>
                <div className="text-base sm:text-lg font-semibold text-text-secondary">
                  eScale
                </div>
                <div className="text-base sm:text-lg font-semibold text-text-secondary">
                  DataFlow
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Trust Indicators */}
        <div className="text-center px-4 mb-8 sm:hidden overflow-hidden animate-fade-in-trust">
          <p className="text-sm text-text-secondary mb-6">
            Confiado por empresas innovadoras en todo el mundo
          </p>
          <div className="relative overflow-hidden w-full max-w-sm mx-auto">
            {/* Left blur fade */}
            <div className="absolute left-0 top-0 w-8 h-full bg-linear-to-r from-background-primary to-transparent z-10 pointer-events-none"></div>
            {/* Right blur fade */}
            <div className="absolute right-0 top-0 w-8 h-full bg-linear-to-l from-background-primary to-transparent z-10 pointer-events-none"></div>
            <div className="flex items-center gap-6 opacity-60 animate-slide-left-mobile">
              <div className="flex items-center gap-6 whitespace-nowrap">
                <div className="text-sm font-semibold text-text-secondary">
                  TechCorp
                </div>
                <div className="text-sm font-semibold text-text-secondary">
                  InnovateLab
                </div>
                <div className="text-sm font-semibold text-text-secondary">
                  FutureScale
                </div>
                <div className="text-sm font-semibold text-text-secondary">
                  AutoFlow
                </div>
                <div className="text-sm font-semibold text-text-secondary">
                  eScale
                </div>
                <div className="text-sm font-semibold text-text-secondary">
                  DataFlow
                </div>
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex items-center gap-6 whitespace-nowrap">
                <div className="text-sm font-semibold text-text-secondary">
                  TechCorp
                </div>
                <div className="text-sm font-semibold text-text-secondary">
                  InnovateLab
                </div>
                <div className="text-sm font-semibold text-text-secondary">
                  FutureScale
                </div>
                <div className="text-sm font-semibold text-text-secondary">
                  AutoFlow
                </div>
                <div className="text-sm font-semibold text-text-secondary">
                  eScale
                </div>
                <div className="text-sm font-semibold text-text-secondary">
                  DataFlow
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
