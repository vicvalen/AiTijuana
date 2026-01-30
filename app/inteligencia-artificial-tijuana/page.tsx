import { Layout } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, MapPin, TrendingUp, Zap, BarChart3, Globe2, AlertTriangle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

// Reuse components for high conversion
import { ROICalculatorSection } from "@/components/roi-calculator-section";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
    title: "Inteligencia Artificial en Tijuana: Reporte 2026 | Ai-Studio",
    description: "Análisis del ecosistema de IA en Tijuana 2026: Reforma Aduanera, Manufactura 4.0 y el auge del HealthTech. Descubre cómo Ai-Studio ayuda a las empresas modernas.",
    keywords: ["inteligencia artificial en tijuana", "agencia ai tijuana", "reforma aduanera 2026", "manufactura 4.0 tijuana", "automatizacion logistica baja california"],
    openGraph: {
        title: "Tijuana 2026: El Hub de Inteligencia Artificial Binacional",
        description: "Solo el 7.6% de las empresas en Tijuana tienen una estrategia de IA. ¿De qué lado de la estadística estás?",
        images: ["https://aitijuana.studio/og-image-tijuana.jpg"],
        type: "article",
        locale: "es_MX"
    }
};

export default function PillarPage() {
    return (
        <Layout>
            {/* HERO SECTION - Editorial Style */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-black text-white">
                <div className="absolute inset-0 bg-background-primary z-0" />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-primary/10 to-transparent z-0 pointer-events-none" />

                <div className="container-max relative z-10 px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-accent-secondary/30 bg-accent-secondary/10 backdrop-blur-md">
                            <MapPin className="w-4 h-4 text-accent-secondary" />
                            <span className="text-accent-secondary text-sm font-sans tracking-wide uppercase font-semibold">Reporte Estratégico: Tijuana 2026</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8 leading-tight tracking-tight text-white">
                            Inteligencia Artificial en Tijuana: <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-secondary to-accent-primary">El Momento es Ahora</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-text-secondary font-light leading-relaxed mb-8">
                            Con la Reforma Aduanera 2026 y el auge del Nearshoring, Tijuana se posiciona como el Hub Tecnológico Binacional más importante. La adopción de IA ya no es opcional.
                        </p>

                        <div className="flex items-center gap-4 text-sm text-text-secondary border-t border-white/10 pt-6">
                            <span>Por <strong>Equipo Ai-Studio</strong></span>
                            <span className="w-1 h-1 rounded-full bg-white/20"></span>
                            <span>Lectura de 7 min</span>
                            <span className="w-1 h-1 rounded-full bg-white/20"></span>
                            <span>Actualizado: Enero 2026</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT BODY - Hybrid Layout */}
            <section className="py-16 px-4 bg-background-primary">
                <div className="container-max grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Left Column: Article Content */}
                    <div className="lg:col-span-8 prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:text-white prose-p:text-text-secondary prose-strong:text-white prose-li:text-text-secondary">

                        {/* THE STATS HOOK */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-12 not-prose">
                            <h3 className="text-2xl font-bold text-white mb-6 font-display flex items-center gap-2">
                                <BarChart3 className="text-accent-primary" /> La Realidad en Datos (2025-2026)
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div>
                                    <p className="text-4xl font-bold text-accent-secondary mb-2">7.6%</p>
                                    <p className="text-sm text-text-secondary">De las empresas locales tienen una estrategia de IA definida.</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-bold text-white mb-2">30%</p>
                                    <p className="text-sm text-text-secondary">Carece de personal especializado, frenando su crecimiento.</p>
                                </div>
                                <div className="col-span-1 sm:col-span-2 pt-4 border-t border-white/10">
                                    <p className="text-sm text-gray-400 italic">Fuente: Consejo Coordinador Empresarial (CCE) Tijuana</p>
                                </div>
                            </div>
                        </div>

                        <h2>Transformación Industrial y Manufactura 4.0</h2>
                        <p>
                            La industria maquiladora, el motor de nuestra ciudad, está viviendo una transición crítica. Ya no basta con "manufacturar"; ahora se trata de la <strong>Manufactura Inteligente</strong>. Organismos como <strong>DEITAC</strong> están impulsando agresivamente la adopción de IA para:
                        </p>
                        <ul>
                            <li><strong>Optimización de Inventarios:</strong> Predicción de demanda para evitar cuellos de botella.</li>
                            <li><strong>Control de Calidad:</strong> Visión computacional que detecta defectos en milisegundos.</li>
                            <li><strong>Toma de Decisiones:</strong> Lo que antes tomaba días de reporteo en Excel, hoy se genera en tiempo real.</li>
                        </ul>

                        <h2>El Reto de la Reforma Aduanera 2026</h2>
                        <div className="p-6 bg-accent-warning/10 border-l-4 border-accent-warning rounded-r-lg not-prose mb-8">
                            <h4 className="text-accent-warning font-bold flex items-center gap-2 mb-2">
                                <AlertTriangle className="w-5 h-5" /> Atención Logística
                            </h4>
                            <p className="text-text-secondary text-sm">
                                Desde el 1 de enero de 2026, la nueva Reforma obliga a la digitalización total y trazabilidad avanzada. Las empresas que no automaticen su cumplimiento normativo enfrentarán serios retrasos en el cruce fronterizo.
                            </p>
                        </div>
                        <p>
                            La IA es la única herramienta capaz de manejar la complejidad de estos nuevos requisitos aduanales a la velocidad que exige la frontera Tijuana-San Diego.
                        </p>

                        <h2>Salud: El Nuevo "Silicon Valley" Médico</h2>
                        <p>
                            Tijuana se consolida como líder en <strong>HealthTech</strong>. Gracias al turismo médico y la colaboración binacional, estamos viendo aplicaciones fascinantes: desde detección temprana de diabetes hasta la automatización de flujos clínicos en hospitales que atienden pacientes de ambos lados de la frontera.
                        </p>

                        <h2>Talento y Educación: El Futuro es Binacional</h2>
                        <p>
                            Instituciones como la <strong>UABC</strong> (con su nueva Licenciatura en Ingeniería de Datos e IA) y eventos como el <strong>AI Summit Tijuana</strong> están cerrando la brecha de talento. Sin embargo, la demanda supera la oferta.
                        </p>
                        <p>
                            Aquí es donde <strong>Ai-Studio</strong> entra en juego. No solo implementamos tecnología; capacitamos a tus equipos para que la transición sea orgánica y efectiva.
                        </p>

                        <div className="my-12">
                            <h3>¿Por qué elegir una Agencia Local?</h3>
                            <p>
                                Podrías contratar software genérico, pero la IA necesita contexto. Entender la dinámica fronteriza, el comercio binacional y los retos específicos de Baja California es nuestra ventaja competitiva.
                            </p>
                        </div>

                    </div>

                    {/* Right Column: Sticky CTA Sidebar */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="sticky top-24 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-glow-highlight/10">
                            <h3 className="text-xl font-bold text-white mb-2 font-display">No seas parte del 92% rezagado</h3>
                            <p className="text-sm text-text-secondary mb-6">
                                La competencia ya está automatizando. Descubre tu potencial de ahorro hoy.
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3 text-sm text-text-secondary">
                                    <Globe2 className="w-4 h-4 text-accent-primary" />
                                    <span>Estrategias Binacionales</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-text-secondary">
                                    <Zap className="w-4 h-4 text-accent-warning" />
                                    <span>Automatización Aduanera</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-text-secondary">
                                    <TrendingUp className="w-4 h-4 text-accent-success" />
                                    <span>Ventas 24/7 con Agentes IA</span>
                                </div>
                            </div>

                            <Link href="/contacto" className="block">
                                <Button className="w-full bg-accent-primary hover:bg-accent-primary/90 text-white font-bold py-6 shadow-glow-highlight">
                                    Solicitar Auditoría de IA
                                </Button>
                            </Link>
                        </div>

                        {/* Context Badge */}
                        <div className="p-6 rounded-2xl border border-white/5 bg-black/20">
                            <h4 className="font-bold text-white mb-2 text-sm uppercase tracking-wider">Próximos Eventos</h4>
                            <ul className="space-y-3 text-sm text-text-secondary">
                                <li className="flex justify-between border-b border-white/5 pb-2">
                                    <span>2do Foro de IA</span>
                                    <span className="text-accent-secondary">2026</span>
                                </li>
                                <li className="flex justify-between border-b border-white/5 pb-2">
                                    <span>Seminarios Index</span>
                                    <span className="text-accent-secondary">Ene-Feb</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Baja Innovation Day</span>
                                    <span className="text-accent-secondary">TBA</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* HYBRID COMPONENTS SECTION */}

            {/* 1. Reuse ROI Calculator because it fits the 'Business Value' narrative */}
            <div className="border-t border-white/10">
                <ROICalculatorSection />
            </div>

            {/* 2. Final CTA */}
            <CTASection />

            {/* JSON-LD for LocalBusiness / Article */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Inteligencia Artificial en Tijuana 2026: El Futuro de la Industria",
                        "image": "https://aitijuana.studio/og-image-tijuana.jpg",
                        "author": {
                            "@type": "Organization",
                            "name": "Ai-Studio"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Ai-Studio",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://aitijuana.studio/logo.png"
                            }
                        },
                        "datePublished": "2026-01-29",
                        "description": "Reporte sobre la adopción de Inteligencia Artificial en Tijuana, manufactura 4.0 y reforma aduanera 2026.",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "https://aitijuana.studio/inteligencia-artificial-tijuana"
                        }
                    })
                }}
            />
        </Layout>
    );
}
