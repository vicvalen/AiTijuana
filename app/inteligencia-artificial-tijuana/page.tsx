import { Layout } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, MapPin, TrendingUp, Zap, Mic, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

// Reuse components for high conversion
import { ROICalculatorSection } from "@/components/roi-calculator-section";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
    title: "El Futuro de la IA en Tijuana: Entrevista con Ai-Studio",
    description: "Una conversación franca sobre el ecosistema de startups, el auge del HealthTech y por qué solo el 7.6% de las empresas están listas para la revolución de IA en Baja California.",
    keywords: ["inteligencia artificial en tijuana", "agencia ai tijuana", "startups tijuana", "healthtech baja california", "innovacion en frontera"],
    openGraph: {
        title: "Entrevista: El Futuro de la IA en Tijuana",
        description: "¿Está Tijuana lista para dejar de ser solo manufactura? Conversamos sobre el nuevo Hub Tecnológico.",
        images: ["https://aitijuana.studio/og-image-tijuana.jpg"],
        type: "article",
        locale: "es_MX"
    }
};

export default function PillarPage() {
    return (
        <Layout>
            {/* HERRO SECTION - Editorial/Interview Style */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-black text-white">
                <div className="absolute inset-0 bg-background-primary z-0" />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-primary/5 to-transparent z-0 pointer-events-none" />

                <div className="container-max relative z-10 px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-accent-secondary/30 bg-accent-secondary/10 backdrop-blur-md">
                            <Mic className="w-4 h-4 text-accent-secondary" />
                            <span className="text-accent-secondary text-sm font-sans tracking-wide uppercase font-semibold">Entrevista Especial</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8 leading-tight tracking-tight text-white">
                            El Despertar de la <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-secondary to-accent-primary">Inteligencia Artificial en Tijuana</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-text-secondary font-light leading-relaxed mb-8">
                            Mientras los titulares se enfocan en Silicon Valley, una revolución silenciosa ocurre en la frontera. Nos sentamos con el equipo de estrategia de <strong>Ai-Studio</strong> para entender el verdadero impacto en la región.
                        </p>

                        <div className="flex items-center gap-4 text-sm text-text-secondary border-t border-white/10 pt-6">
                            <span>Por <strong>Redacción Tech Baja</strong></span>
                            <span className="w-1 h-1 rounded-full bg-white/20"></span>
                            <span>Lectura de 8 min</span>
                            <span className="w-1 h-1 rounded-full bg-white/20"></span>
                            <span>Actualizado: Enero 2026</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT BODY - Interview Format */}
            <section className="py-16 px-4 bg-background-primary">
                <div className="container-max grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Left Column: Interview Content */}
                    <div className="lg:col-span-8 prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:text-white prose-p:text-text-secondary prose-strong:text-white prose-li:text-text-secondary">

                        <p className="lead text-xl text-white font-medium border-b border-white/10 pb-8 mb-8">
                            Tijuana se posiciona como un hub tecnológico mediante eventos como el <em>Baja Innovation Day</em> y el <em>AI Summit</em>. Pero, ¿qué hay detrás del hype? Platicamos sobre HealthTech, startups y la realidad operativa de las empresas locales.
                        </p>

                        <h3>Q: Se habla mucho de Tijuana como el próximo Hub Tecnológico. ¿Es realidad o puro marketing?</h3>
                        <p>
                            <strong>Ai-Studio:</strong> Es una realidad, pero diferente a lo que muchos imaginan. No somos Silicon Valley; somos algo único. La región está impulsando la inteligencia artificial en sectores muy específicos como <strong>HealthTech</strong> y manufactura avanzada.
                        </p>
                        <p>
                            Lo vemos con empresas como ITJ y el crecimiento de dispositivos médicos. Ya no es solo "ensamblar"; ahora hay ingeniería y algoritmos desarrollados aquí mismo para detectar cáncer o monitorear diabetes. El talento de UABC y CETYS está empezando a quedarse aquí en lugar de fugarse al norte.
                        </p>

                        <h3>Q: Mencionas el talento. ¿Qué papel juegan las universidades?</h3>
                        <p>
                            <strong>Ai-Studio:</strong> Crucial. La UABC, por ejemplo, ha lanzado nuevas carreras enfocadas en Ingeniería de Datos e IA. Esto está creando una generación de ingenieros que entienden el contexto local. Además, iniciativas como el <em>AI Lab School</em> y grupos de trabajo dentro de IT@BAJA están acelerando esa curva de aprendizaje.
                        </p>

                        <div className="my-10 p-8 bg-white/5 border-l-4 border-accent-secondary rounded-r-xl not-prose">
                            <Quote className="w-8 h-8 text-accent-secondary mb-4 opacity-50" />
                            <p className="text-xl font-display font-medium text-white italic mb-4">
                                "El verdadero reto no es la tecnología, es la adopción. Solo el 7.6% de las empresas en Tijuana tienen una estrategia clara de IA."
                            </p>
                            <p className="text-sm text-text-secondary font-bold uppercase tracking-wider">— Reporte CCE Tijuana</p>
                        </div>

                        <h3>Q: Ese 7.6% suena alarmante. ¿Por qué es tan bajo?</h3>
                        <p>
                            <strong>Ai-Studio:</strong> Es el clásico dilema de la innovación. El 80% de las empresas está en etapa de "exploración", sabiendo que necesitan hacerlo pero sin saber cómo. Un 30% nos dice que carecen de personal especializado.
                        </p>
                        <p>
                            Ahí es donde entramos nosotros. No vendemos "software"; vendemos la estrategia para que ese 92% restante no se quede atrás. La adopción estratégica es lo que separará a las empresas líderes de las que desaparecerán en 2030.
                        </p>

                        <h3>Q: Hablemos del ecosistema Startup. ¿Qué está pasando ahí?</h3>
                        <p>
                            <strong>Ai-Studio:</strong> Está en ebullición. Vemos un tránsito del e-commerce tradicional hacia soluciones <em>Deep Tech</em>. Tijuana, al ser vecina de San Diego, permite un ecosistema binacional único.
                        </p>
                        <p>
                            Startups locales están colaborando en foros como el <em>San Diego Startup Week</em> (que ya tiene sede aquí). La visión es clara: convertir a la región Cali-Baja en un corredor de innovación donde la IA optimiza desde la logística transfronteriza hasta la atención al cliente bilingüe.
                        </p>

                        <h3>Q: Para el empresario local que nos lee, ¿por dónde debería empezar?</h3>
                        <p>
                            <strong>Ai-Studio:</strong> No intentes construir el próximo Google. Empieza automatizando tus dolores de cabeza diarios.
                        </p>
                        <ul>
                            <li>¿Tu equipo de ventas pierde tiempo calificando leads en WhatsApp? <strong>Pon un Agente IA.</strong></li>
                            <li>¿Tus procesos logísticos son manuales? <strong>Digitalízalos.</strong></li>
                            <li>¿Tu servicio al cliente no cubre el 24/7? <strong>Automatízalo.</strong></li>
                        </ul>
                        <p>
                            La tecnología ya está aquí. La pregunta es: ¿vas a usarla tú o tu competencia?
                        </p>

                    </div>

                    {/* Right Column: Sticky CTA Sidebar */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="sticky top-24">
                            {/* CTA Box */}
                            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-glow-highlight/10 mb-8">
                                <h3 className="text-xl font-bold text-white mb-2 font-display">¿Tu empresa es parte del 7.6%?</h3>
                                <p className="text-sm text-text-secondary mb-6">
                                    Adelántate a la curva de adopción tecnológica en Tijuana.
                                </p>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center gap-3 text-sm text-text-secondary">
                                        <TrendingUp className="w-4 h-4 text-accent-success" />
                                        <span>Diagnóstico de IA Gratuito</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-text-secondary">
                                        <Zap className="w-4 h-4 text-accent-warning" />
                                        <span>Automatización Binacional</span>
                                    </div>
                                </div>

                                <Link href="/contacto" className="block">
                                    <Button className="w-full bg-accent-primary hover:bg-accent-primary/90 text-white font-bold py-6 shadow-glow-highlight">
                                        Hablar con un Experto
                                    </Button>
                                </Link>
                            </div>

                            {/* Context Box */}
                            <div className="p-6 rounded-2xl border border-white/5 bg-black/20">
                                <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Ecosistema Local</h4>
                                <ul className="space-y-4 text-sm text-text-secondary">
                                    <li className="flex items-start gap-3">
                                        <MapPin className="w-4 h-4 text-accent-secondary mt-0.5" />
                                        <div>
                                            <span className="block text-white font-medium">Baja Innovation Day</span>
                                            <span className="text-xs">El evento clave para conectar con el ecosistema inversión.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <MapPin className="w-4 h-4 text-accent-secondary mt-0.5" />
                                        <div>
                                            <span className="block text-white font-medium">AI Summit Tijuana</span>
                                            <span className="text-xs">Donde se define la agenda productiva de la región.</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* HYBRID COMPONENTS SECTION - Keeping the "Launch/Future" vibe */}

            <div className="border-t border-white/10 bg-background-primary">
                <div className="container-max py-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">
                        El Futuro es Ahora
                    </h2>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-12">
                        Calcula el impacto que la Inteligencia Artificial puede tener en tu negocio hoy mismo.
                    </p>
                    <ROICalculatorSection />
                </div>
            </div>

            {/* Final CTA */}
            <CTASection />

            {/* JSON-LD for Article/Interview */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "NewsArticle",
                        "headline": "Entrevista: El Futuro de la Inteligencia Artificial en Tijuana",
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
                        "description": "Análisis del ecosistema HealthTech, startups y adopción de IA en Tijuana. Entrevista exclusiva con expertos locales.",
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
