"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const AlertTriangle = () => (
  <svg
    className="h-6 w-6 text-semantic-warning"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-2.186-.833-2.956 0L3.858 16.5c-.77.833.192 2.5 1.732 2.5z"
    />
  </svg>
);

const CheckCircle = () => (
  <svg
    className="h-5 w-5 text-semantic-success"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

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

export function ProblemSolutionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-12 sm:mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-primary/20 backdrop-blur-md border border-accent-primary/30 text-text-primary text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-semantic-warning rounded-full mr-2 animate-pulse"></span>
            El Problema que Toda Empresa Enfrenta
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary text-balance mb-4 sm:mb-6">
            <span className="text-semantic-warning">60-70%</span> de tus Leads
            se Están Escapando
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-3xl mx-auto font-light leading-relaxed">
            Mientras estás ocupado atendiendo clientes, tus consultas en línea
            se quedan sin respuesta. Así es como lo solucionamos.
          </p>
        </div>

        {/* Main Problem/Solution Cards */}
        <div
          className={`grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-20 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
        >
          {/* Problem Card */}
          <div className="group">
            <div className="bg-background-card backdrop-blur-md border border-border-primary rounded-2xl p-6 sm:p-8 h-full hover:bg-background-secondary transition-all duration-500 hover:border-semantic-warning/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-semantic-warning/20">
                  <AlertTriangle />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-semantic-warning">
                  La Realidad
                </h3>
              </div>

              {/* Key Stat */}
              <div className="bg-semantic-warning/10 backdrop-blur-sm border border-semantic-warning/20 rounded-xl p-4 sm:p-6 mb-6">
                <div className="text-3xl sm:text-4xl font-bold text-semantic-warning mb-2">
                  4+ Hours
                </div>
                <p className="text-text-secondary text-sm sm:text-base">
                  Tiempo promedio de respuesta, pero 78% de clientes eligen el
                  primer negocio que responde
                </p>
              </div>

              {/* Problem Points */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-semantic-warning rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-text-secondary text-sm sm:text-base">
                    El personal pierde consultas durante horarios no laborales y
                    fines de semana
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-semantic-warning rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-text-secondary text-sm sm:text-base">
                    Ocupado atendiendo clientes mientras los leads en línea se
                    enfrían
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-semantic-warning rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-text-secondary text-sm sm:text-base">
                    Gasto en marketing desperdiciado en consultas sin respuesta
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Card */}
          <div className="group">
            <div className="bg-background-card backdrop-blur-md border border-border-primary rounded-2xl p-6 sm:p-8 h-full hover:bg-background-secondary transition-all duration-500 hover:border-semantic-success/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-semantic-success/20">
                  <CheckCircle />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-semantic-success">
                  Nuestra Solución
                </h3>
              </div>

              {/* Key Stat */}
              <div className="bg-semantic-success/10 backdrop-blur-sm border border-semantic-success/20 rounded-xl p-4 sm:p-6 mb-6">
                <div className="text-3xl sm:text-4xl font-bold text-semantic-success mb-2">
                  24/7
                </div>
                <p className="text-text-secondary text-sm sm:text-base">
                  El asistente de IA responde en segundos, agenda citas mientras
                  duermes
                </p>
              </div>

              {/* Solution Points */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle />
                  <p className="text-text-secondary text-sm sm:text-base">
                    Califica leads instantáneamente y agenda citas
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle />
                  <p className="text-text-secondary text-sm sm:text-base">
                    Se integra con tu CRM y sistema de calendario
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle />
                  <p className="text-text-secondary text-sm sm:text-base">
                    Funciona en sitio web, WhatsApp, email y teléfono
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div className="text-center bg-background-card backdrop-blur-md border border-border-primary rounded-xl p-4 sm:p-6 hover:bg-background-secondary transition-all duration-300">
            <div className="text-2xl sm:text-3xl font-bold text-text-primary mb-2">
              $500+
            </div>
            <p className="text-text-secondary text-xs sm:text-sm">
              Valor promedio por lead perdido
            </p>
          </div>
          <div className="text-center bg-background-card backdrop-blur-md border border-border-primary rounded-xl p-4 sm:p-6 hover:bg-background-secondary transition-all duration-300">
            <div className="text-2xl sm:text-3xl font-bold text-text-primary mb-2">
              78%
            </div>
            <p className="text-text-secondary text-xs sm:text-sm">
              Eligen al primero que responde
            </p>
          </div>
          <div className="text-center bg-background-card backdrop-blur-md border border-border-primary rounded-xl p-4 sm:p-6 hover:bg-background-secondary transition-all duration-300">
            <div className="text-2xl sm:text-3xl font-bold text-text-primary mb-2">
              24/7
            </div>
            <p className="text-text-secondary text-xs sm:text-sm">
              Nuestra IA nunca duerme
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={`text-center bg-background-card backdrop-blur-md border border-border-primary rounded-2xl p-6 sm:p-8 transition-all duration-1000 delay-900 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-text-primary mb-3 sm:mb-4 text-balance">
            Deja de Perder Clientes Hoy
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-text-secondary mb-6 sm:mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            Obtén una auditoría gratuita de tiempo de respuesta y descubre
            exactamente cuántos leads estás perdiendo en este momento.
          </p>
          <Button
            size="lg"
            className="bg-highlight-gradient text-text-on-accent rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium transition-all duration-300 hover:opacity-90 hover:scale-105 hover:shadow-glow-highlight group cursor-pointer"
          >
            Obtener Auditoría Gratuita
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
