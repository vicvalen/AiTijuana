"use client";

import { CheckCircle2, Layout, Database, BarChart3, TrendingUp, Cpu, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CRMFeatureSection() {
    const capabilities = [
        {
            title: "Orquestación de Agentes Multi-Plataforma",
            description: "Hub centralizado para n8n, Flowise y OpenAI Assistants. Gestión avanzada de Knowledge Management (RAG) y despliegue instantáneo de widgets de chat.",
            icon: <Cpu className="w-6 h-6 text-blue-400" />,
        },
        {
            title: "Gestión Inteligente de Ventas y Pipeline",
            description: "Visual Pipeline Pro con seguimiento automatizado, historial de contacto 360° y Lead Scoring potenciado por IA para priorizar tus cierres.",
            icon: <Layout className="w-6 h-6 text-purple-400" />,
        },
        {
            title: "Marketing Basado en ROI Real",
            description: "Campañas con seguimiento de ingresos directo, atribución por IA y automatización de outreach para maximizar cada centavo invertido.",
            icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
        },
        {
            title: "Panel de Control y Analítica Avanzada",
            description: "Dashboard de rendimiento en tiempo real, monitoreo de agentes y analíticas predictivas para tomar decisiones basadas en datos, no en supuestos.",
            icon: <BarChart3 className="w-6 h-6 text-orange-400" />,
        },
    ];

    return (
        <section className="relative py-24 overflow-hidden bg-background-primary">
            {/* Background Glows */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Text Content */}
                    <div className="w-full lg:w-1/2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6">
                            <Database className="w-3 h-3" />
                            <span>Infraestructura Core de IA</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
                            SmartEngine CRM: El <span className="text-gradient-highlight">Sistema Operativo</span> de tu Estrategia de IA
                        </h2>

                        <p className="text-lg text-text-secondary mb-10 leading-relaxed">
                            No es solo un CRM, es la infraestructura centralizada donde converge toda tu automatización. Diseñado para la era de la IA, SmartEngine orquestas tus agentes y gestiona tus datos con total privacidad y control.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            {capabilities.map((cap, index) => (
                                <div key={index} className="flex flex-col gap-3">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                                        {cap.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold text-text-primary">{cap.title}</h3>
                                    <p className="text-sm text-text-secondary leading-relaxed">{cap.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-500 text-white px-8">
                                <Link href="/contacto">Solicita una demo de SmartEngine</Link>
                            </Button>
                            <div className="flex items-center gap-2 text-text-secondary text-sm px-4">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                <span>Hosting en Supabase (100% Privado)</span>
                            </div>
                        </div>
                    </div>

                    {/* Visual Side */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative aspect-[4/3] w-full max-w-[600px] mx-auto group">
                            {/* Decorative Frame */}
                            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-[2.5rem] blur-2xl group-hover:opacity-75 transition-opacity" />

                            <div className="relative h-full w-full rounded-2xl overflow-hidden border border-white/10 bg-[#0A0A0B] shadow-2xl">
                                <Image
                                    src="/images/smartengine-dashboard.png"
                                    alt="SmartEngine CRM Dashboard Mockup"
                                    fill
                                    className="object-cover"
                                    priority
                                />

                                {/* Overlay Highlights */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                                {/* Interactive Elements floating */}
                                <div className="absolute top-6 right-6 p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 animate-float">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                        <span className="text-xs font-medium text-white">Agentes Activos: 12</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Integration Note */}
                        <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
                                <ArrowRight className="w-4 h-4 text-blue-400" />
                                Integración Nativa con tus Servicios
                            </h4>
                            <p className="text-xs text-text-secondary">
                                SmartEngine es el hub central que conecta tu Consultoría, Agentes de Voz, Automatización de Facturas y Agentes RAG en un solo ecosistema escalable.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
