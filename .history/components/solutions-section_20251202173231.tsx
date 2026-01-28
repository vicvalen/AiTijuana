"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Star, Target, BarChart3, Search, TrendingUp, Phone } from "lucide-react";

export function SolutionsSection() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const packages = [
    {
      id: "starter",
      name: "Starter",
      price: "$800",
      priceDetail: "USD/mes + 15% del ad spend",
      description: "Perfecto para pequeños negocios que inician",
      features: [
        "1 plataforma (Google Ads O Meta Ads)",
        "Hasta 3 campañas activas",
        "Configuración de tracking básico",
        "Reporte mensual de resultados",
        "Optimización semanal",
        "Soporte por email"
      ],
      ideal: [
        "Presupuesto publicitario: $500-$2,000/mes",
        "Negocios locales o servicios básicos",
        "Primeros pasos en marketing digital"
      ],
      popular: false,
      cta: "Empezar Ahora"
    },
    {
      id: "professional",
      name: "Professional",
      price: "$1,500",
      priceDetail: "USD/mes + 12% del ad spend",
      description: "Para empresas que buscan crecimiento acelerado",
      features: [
        "Google Ads + Meta Ads",
        "Hasta 8 campañas activas",
        "Configuración avanzada de tracking",
        "Auditoría de landing pages",
        "A/B testing de creatividades",
        "Reportes semanales detallados",
        "Llamada mensual de estrategia",
        "Soporte prioritario"
      ],
      ideal: [
        "Presupuesto publicitario: $2,000-$8,000/mes",
        "Clínicas y servicios médicos",
        "E-commerce y servicios B2C"
      ],
      popular: true,
      cta: "Elegir Professional"
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "$2,800",
      priceDetail: "USD/mes + 10% del ad spend",
      description: "Solución completa para grandes operaciones",
      features: [
        "Todas las plataformas disponibles",
        "Campañas ilimitadas",
        "Configuración completa de analytics",
        "Auditoría completa de funnel",
        "Estrategia SEO incluida",
        "Dashboard personalizado",
        "Llamadas semanales de estrategia",
        "Account manager dedicado"
      ],
      ideal: [
        "Presupuesto publicitario: $8,000+/mes",
        "Turismo médico y clínicas grandes",
        "Múltiples ubicaciones o servicios"
      ],
      popular: false,
      cta: "Contactar Ventas"
    }
  ];

  const individualServices = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Configuración Google Ads",
      price: "$800",
      description: "Setup completo de cuenta y primeras campañas.",
      features: [
        "Configuración de cuenta",
        "3 campañas iniciales",
        "Tracking básico",
        "Guía de optimización"
      ],
      cta: "Solicitar"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Configuración Meta Ads",
      price: "$600",
      description: "Setup de Facebook e Instagram con audiencias.",
      features: [
        "Configuración de Business Manager",
        "Pixel de Facebook",
        "Audiencias personalizadas",
        "2 campañas iniciales"
      ],
      cta: "Solicitar"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Auditoría de Landing",
      price: "$400",
      description: "Análisis completo de tu página de conversión.",
      features: [
        "Análisis de UX/UI",
        "Recomendaciones CRO",
        "Análisis de velocidad",
        "Plan de optimización"
      ],
      cta: "Solicitar"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Auditoría SEO",
      price: "$500",
      description: "Análisis técnico completo de tu sitio web.",
      features: [
        "Auditoría técnica completa",
        "Análisis de keywords",
        "Recomendaciones on-page",
        "Plan de contenido"
      ],
      cta: "Solicitar"
    }
  ];

  const consultingServices = [
    {
      title: "Sesión de Estrategia",
      price: "$200",
      duration: "Llamada de 90 minutos",
      description: "para analizar tu situación actual y definir estrategias.",
      features: [
        "Análisis de situación actual",
        "Recomendaciones estratégicas",
        "Plan de acción detallado"
      ],
      cta: "Agendar Sesión"
    },
    {
      title: "Auditoría de Campañas",
      price: "$350",
      duration: "Revisión completa",
      description: "de tus campañas actuales con recomendaciones específicas.",
      features: [
        "Análisis de estructura",
        "Optimizaciones específicas",
        "Reporte detallado"
      ],
      cta: "Solicitar Auditoría"
    },
    {
      title: "Consultoría Mensual",
      price: "$800",
      duration: "Acompañamiento continuo",
      description: "con llamadas mensuales y soporte por email.",
      features: [
        "2 llamadas mensuales",
        "Soporte por email",
        "Revisión de métricas"
      ],
      cta: "Empezar Consultoría"
    }
  ];

  const faqs = [
    {
      question: "¿Qué incluye el porcentaje del ad spend?",
      answer: "El porcentaje del ad spend cubre la gestión activa de tus campañas, optimizaciones diarias, A/B testing y monitoreo continuo. Es adicional a la tarifa mensual fija."
    },
    {
      question: "¿Hay contratos de permanencia?",
      answer: "Requerimos un mínimo de 3 meses para ver resultados óptimos. Después de este período, puedes cancelar con 30 días de aviso previo."
    },
    {
      question: "¿Qué presupuesto publicitario recomiendan?",
      answer: "Para Google Ads recomendamos mínimo $1,000/mes, para Meta Ads $500/mes. Presupuestos menores limitan significativamente las oportunidades de optimización."
    },
    {
      question: "¿Ofrecen garantías de resultados?",
      answer: "Garantizamos mejoras en métricas clave (CTR, CPC, conversiones) en los primeros 60 días. Si no vemos mejoras, trabajamos sin costo adicional hasta lograrlas."
    },
    {
      question: "¿Trabajan con todas las industrias?",
      answer: "Nos especializamos en salud, turismo médico, servicios B2C y productos digitales. Evaluamos cada caso para asegurar que podemos generar resultados óptimos."
    },
    {
      question: "¿Incluyen la creación de landing pages?",
      answer: "Los paquetes incluyen auditoría y recomendaciones. La creación de nuevas landing pages se cotiza por separado según complejidad y requerimientos."
    }
  ];

  return (
    <>
      {/* Main Solutions Section */}
      <section id="soluciones" className="relative z-10 pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-primary/20 backdrop-blur-md border border-accent-primary/30 text-text-primary text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2 text-accent-primary" />
                HighRank Funnel - Performance Marketing
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
                Servicios de{" "}
                <span className="text-gradient-highlight">
                  Performance Marketing
                </span>
              </h2>
              
              <p className="text-lg md:text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
                Paquetes diseñados para maximizar tu ROI. Soluciones especializadas en Google Ads, Meta Ads y funnels de conversión con precios transparentes y resultados garantizados.
              </p>
            </div>

            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                Paquetes Principales
              </h3>
              <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                Elige el paquete que mejor se adapte a tu presupuesto y objetivos de crecimiento.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg) => (
                <Card
                  key={pkg.id}
                  className={`relative bg-background-card/80 backdrop-blur-md border ${
                    pkg.popular
                      ? 'border-accent-primary shadow-2xl scale-105'
                      : 'border-border-primary'
                  } hover:shadow-xl transition-all duration-300`}
                  onMouseEnter={() => setSelectedPackage(pkg.id)}
                  onMouseLeave={() => setSelectedPackage(null)}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-highlight-gradient text-text-on-accent px-4 py-1 rounded-full text-sm font-medium">
                        Más Popular
                      </div>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl font-bold text-text-primary">
                      {pkg.name}
                    </CardTitle>
                    <CardDescription className="text-text-secondary">
                      {pkg.description}
                    </CardDescription>
                    <div className="mt-4">
                      <div className="text-3xl font-bold text-text-primary">{pkg.price}</div>
                      <div className="text-sm text-text-secondary">{pkg.priceDetail}</div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      {pkg.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-semantic-success flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-text-secondary">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-4 border-t border-border-primary">
                      <div className="text-sm font-medium text-text-primary mb-2">Ideal para:</div>
                      <div className="space-y-1">
                        {pkg.ideal.map((item, index) => (
                          <div key={index} className="text-xs text-text-secondary">• {item}</div>
                        ))}
                      </div>
                    </div>
                    
                    <Button
                      className={`w-full ${
                        pkg.popular
                          ? 'bg-highlight-gradient hover:opacity-90'
                          : 'bg-accent-primary hover:bg-accent-primary/90'
                      } text-text-on-accent rounded-full`}
                    >
                      {pkg.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

      {/* Individual Services Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Servicios Individuales
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              ¿Necesitas algo específico? También ofrecemos servicios por separado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {individualServices.map((service, index) => (
              <Card key={index} className="bg-background-card/80 backdrop-blur-md border border-border-primary hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-accent-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 text-accent-primary">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-text-primary">
                    {service.title}
                  </CardTitle>
                  <div className="text-2xl font-bold text-text-primary">{service.price}</div>
                  <CardDescription className="text-text-secondary">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-semantic-success flex-shrink-0" />
                        <span className="text-xs text-text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button
                    variant="outline"
                    className="w-full border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-text-on-accent rounded-full"
                  >
                    {service.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Services Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Consultoría Estratégica
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Sesiones personalizadas para resolver desafíos específicos de tu negocio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consultingServices.map((service, index) => (
              <Card key={index} className="bg-background-card/80 backdrop-blur-md border border-border-primary hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-bold text-text-primary">
                    {service.title}
                  </CardTitle>
                  <div className="text-2xl font-bold text-text-primary">{service.price}</div>
                  <CardDescription className="text-text-secondary">
                    {service.duration} {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-semantic-success flex-shrink-0" />
                        <span className="text-sm text-text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button
                    className="w-full bg-accent-primary hover:bg-accent-primary/90 text-text-on-accent rounded-full"
                  >
                    {service.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Respuestas a las dudas más comunes sobre nuestros servicios y precios.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="bg-background-card/80 backdrop-blur-md border border-border-primary overflow-hidden"
              >
                <CardHeader
                  className="cursor-pointer pb-4"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-medium text-text-primary">
                      {faq.question}
                    </CardTitle>
                    <div className={`transform transition-transform duration-200 ${expandedFaq === index ? 'rotate-180' : ''}`}>
                      <ArrowRight className="w-5 h-5 text-accent-primary" />
                    </div>
                  </div>
                </CardHeader>
                
                {expandedFaq === index && (
                  <CardContent className="pt-0">
                    <p className="text-text-secondary">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-8 px-4 sm:px-6 lg:px-8 mb-32">
        <div className="relative max-w-4xl mx-auto">
          <div className="text-center p-8 md:p-10 rounded-3xl border border-white/20 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/15%),theme(backgroundColor.white/5%))]">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-6 text-balance leading-tight">
              ¿Listo para elegir tu{" "}
              <span className="font-medium italic bg-linear-to-r from-white to-slate-200 bg-clip-text text-transparent">
                paquete ideal
              </span>
              ?
            </h3>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              Agenda una consulta gratuita de 30 minutos para analizar tu situación y recomendarte el paquete ideal para tus objetivos.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="group inline-flex items-center gap-3 px-8 py-4 md:px-12 md:py-6 bg-linear-to-r from-white to-slate-100 text-slate-900 rounded-full font-semibold text-base md:text-lg hover:from-slate-50 hover:to-slate-200 transition-all duration-300 hover:scale-105 shadow-2xl">
                Consulta Gratuita
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button className="group inline-flex items-center gap-3 px-8 py-4 md:px-12 md:py-6 border border-white/20 text-white rounded-full font-semibold text-base md:text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <Phone className="w-5 h-5 md:w-6 md:h-6" />
                Contactar Ahora
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}