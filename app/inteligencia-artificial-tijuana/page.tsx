import { Layout } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, MapPin, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

// Reuse components for high conversion
import { ROICalculatorSection } from "@/components/roi-calculator-section";
import { CTASection } from "@/components/cta-section";
import { ProblemSolutionSection } from "@/components/problem-solution-section";

export const metadata: Metadata = {
    title: "Inteligencia Artificial en Tijuana: Transformación Digital | Ai-Studio",
    description: "Ai-Studio es la primera agencia especializada en Inteligencia Artificial en Tijuana. Automatización, Chatbots y Marketing Digital para empresas fronterizas. Descubre el futuro hoy.",
    keywords: ["inteligencia artificial en tijuana", "agencia ai tijuana", "desarrollo de software tijuana", "automatizacion de procesos tijuana", "consultoria ia baja california"],
    openGraph: {
        title: "Inteligencia Artificial en Tijuana | El Futuro es Ahora",
        description: "¿Tu negocio está listo para la era de la IA? Conoce a la agencia liderando la transformación digital en Tijuana.",
        images: ["https://aitijuana.studio/og-image-tijuana.jpg"], // Placeholder, fits pattern
        type: "article",
        locale: "es_MX"
    }
};

export default function PillarPage() {
    return (
        <Layout>
            {/* HERRO SECTION - Editorial Style */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-black text-white">
                <div className="absolute inset-0 bg-background-primary z-0" />
                {/* Subtle Tijuana Map/Tech Texture optional */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-primary/10 to-transparent z-0 pointer-events-none" />

                <div className="container-max relative z-10 px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-accent-secondary/30 bg-accent-secondary/10 backdrop-blur-md">
                            <MapPin className="w-4 h-4 text-accent-secondary" />
                            <span className="text-accent-secondary text-sm font-sans tracking-wide uppercase font-semibold">Reporte Especial: Tijuana Tech</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8 leading-tight tracking-tight text-white">
                            El Despertar de la <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-secondary to-accent-primary">Inteligencia Artificial en Tijuana</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-text-secondary font-light leading-relaxed mb-8">
                            Mientras Silicon Valley acapara los titulares, una revolución silenciosa está ocurriendo en la frontera. Así es como las empresas de Tijuana están usando IA para competir a nivel global.
                        </p>

                        <div className="flex items-center gap-4 text-sm text-text-secondary border-t border-white/10 pt-6">
                            <span>Por <strong>Equipo Ai-Studio</strong></span>
                            <span className="w-1 h-1 rounded-full bg-white/20"></span>
                            <span>Lectura de 5 min</span>
                            <span className="w-1 h-1 rounded-full bg-white/20"></span>
                            <span>Actualizado: Octubre 2023</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT BODY - Hybrid Layout */}
            <section className="py-16 px-4 bg-background-primary">
                <div className="container-max grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Left Column: Article Content */}
                    <div className="lg:col-span-8 prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:text-white prose-p:text-text-secondary">
                        <h2>La Frontera de la Innovación</h2>
                        <p>
                            Tijuana siempre ha sido conocida por su manufactura y su turismo médico. Pero en los últimos 24 meses, un nuevo jugador ha entrado al tablero: la <strong>Inteligencia Artificial Generativa</strong>.
                        </p>
                        <p>
                            No estamos hablando de robots físicos en las líneas de ensamblaje (que también existen), sino de algoritmos inteligentes capaces de automatizar ventas, atención al cliente y operaciones logísticas complejas.
                        </p>

                        <div className="my-10 p-6 bg-white/5 border-l-4 border-accent-secondary rounded-r-xl not-prose">
                            <p className="text-lg font-medium text-white italic">
                                "La empresa tijuanense que no adopte IA en los próximos 2 años, no estará compitiendo por clientes, estará luchando por sobrevivir."
                            </p>
                        </div>

                        <h3>El Problema del Crecimiento Local</h3>
                        <p>
                            El empresario de Baja California enfrenta un reto único: costos operativos al alza y una competencia feroz del mercado californiano. Contratar personal bilingüe calificado es cada vez más costoso y difícil.
                        </p>
                        <p>
                            Aquí es donde entra <strong className="text-white">Ai-Studio</strong>. Nuestra tesis es simple: **No necesitas más empleados, necesitas mejores sistemas.**
                        </p>

                        <h3>Casos de Uso Reales en la Región</h3>
                        <ul className="list-none pl-0 space-y-4 not-prose mb-8">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-accent-primary shrink-0 mt-1" />
                                <span className="text-text-secondary"><strong>Inmobiliarias:</strong> Agentes de IA que califican leads de WhatsApp 24/7 y agendan citas automáticamente en Zona Río y Playas.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-accent-primary shrink-0 mt-1" />
                                <span className="text-text-secondary"><strong>Dental & Médico:</strong> Seguimiento automático de pacientes post-consulta y reactivación de base de datos.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-accent-primary shrink-0 mt-1" />
                                <span className="text-text-secondary"><strong>Logística:</strong> Optimización de rutas y respuestas automatizadas a proveedores binacionales.</span>
                            </li>
                        </ul>

                        <h2>¿Por qué una Agencia Local?</h2>
                        <p>
                            Podrías contratar un software genérico de Estados Unidos. Pero la IA necesita contexto. Entender el "Spanglish", la dinámica de la frontera, y los hábitos de consumo locales es algo que ChatGPT por sí solo no resuelve.
                        </p>
                        <p>
                            Nosotros entrenamos modelos específicamente para el mercado de Tijuana-San Diego.
                        </p>

                    </div>

                    {/* Right Column: Sticky CTA Sidebar */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="sticky top-24 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                            <h3 className="text-xl font-bold text-white mb-2 font-display">¿Tu negocio está listo?</h3>
                            <p className="text-sm text-text-secondary mb-6">
                                Descubre cuánto podrías ahorrar automatizando tus procesos hoy mismo.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-sm text-text-secondary">
                                    <TrendingUp className="w-4 h-4 text-accent-success" />
                                    <span>Aumenta ventas en un 35%</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-text-secondary">
                                    <Zap className="w-4 h-4 text-accent-warning" />
                                    <span>Respuesta inmediata 24/7</span>
                                </div>
                            </div>

                            <Link href="/contacto" className="block mt-8">
                                <Button className="w-full bg-accent-primary hover:bg-accent-primary/90 text-white font-bold py-6">
                                    Agendar Consultoría Gratis
                                </Button>
                            </Link>
                        </div>

                        {/* Mini Bio */}
                        <div className="p-6 rounded-2xl border border-white/5 bg-black/20">
                            <h4 className="font-bold text-white mb-2 text-sm uppercase tracking-wider">Sobre el Autor</h4>
                            <p className="text-sm text-text-secondary mb-4">
                                <strong>Ai-Studio Team</strong> es el colectivo de ingenieros y estrategas digitales liderando la implementación de IA en Baja California.
                            </p>
                            <Link href="/nosotros" className="text-accent-secondary text-sm hover:underline">
                                Conoce al equipo &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* HYBRID COMPONENTS SECTION */}

            {/* 1. Reuse ROI Calculator because it fits the 'Business Value' narrative */}
            <div className="border-t border-white/10">
                <ROICalculatorSection />
            </div>

            {/* 2. Problem/Solution Reuse */}
            {/* <ProblemSolutionSection /> */}

            {/* 3. Final CTA */}
            <CTASection />

            {/* JSON-LD for LocalBusiness / Article */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Inteligencia Artificial en Tijuana: El Futuro de los Negocios",
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
                        "datePublished": "2023-10-25",
                        "description": "Análisis profundo sobre el impacto de la Inteligencia Artificial en el ecosistema empresarial de Tijuana y Baja California.",
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
