"use client";

import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Layout as LayoutIcon, Database, BarChart3, TrendingUp, Cpu, ArrowRight, ShieldCheck, Zap, Rocket, Star, Headphones, Phone, Settings, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SmartEnginePage() {
    // 4 Capability Cards
    const capabilities = [
        {
            title: "Orquestación de Agentes",
            description: "Conecta y coordina múltiples agentes de IA (OpenAI, Flowise, n8n) desde un solo panel de control unificado.",
            icon: <Cpu className="w-8 h-8" />,
            color: "text-blue-400",
            details: ["Integración nativa con n8n", "Soporte para Flowise Chatflows", "Gestión de asistentes OpenAI"]
        },
        {
            title: "Pipeline de Ventas Inteligente",
            description: "Visualiza tu proceso de ventas con un pipeline kanban potenciado por IA que prioriza leads automáticamente.",
            icon: <LayoutIcon className="w-8 h-8" />,
            color: "text-purple-400",
            details: ["Lead Scoring predictivo", "Historial de interacciones 360°", "Automatización de seguimiento"]
        },
        {
            title: "Marketing ROI Tracking",
            description: "Mide el retorno exacto de cada campaña y automatización con atribución avanzada basada en datos reales.",
            icon: <TrendingUp className="w-8 h-8" />,
            color: "text-emerald-400",
            details: ["Atribución multi-toque", "Dashboard de ingresos", "Cálculo de LTV automático"]
        },
        {
            title: "Analítica Predictiva",
            description: "Anticípate a las tendencias con dashboards que no solo muestran el pasado, sino que proyectan el futuro.",
            icon: <BarChart3 className="w-8 h-8" />,
            color: "text-orange-400",
            details: ["Reportes personalizables", "Métricas de rendimiento de agentes", "Proyecciones de ventas"]
        },
    ];

    // Service Integration Table
    const integrations = [
        { service: "Consultoría Estratégica", description: "Usamos el CRM como la infraestructura base para que tu equipo aprenda a gestionar flujos reales.", icon: <Star className="w-5 h-5 text-amber-400" /> },
        { service: "Agentes de Atención 24/7", description: "El CRM recibe todos los contactos generados por los agentes y los organiza en tu embudo de ventas.", icon: <Headphones className="w-5 h-5 text-blue-400" /> },
        { service: "Agentes de Voz", description: "Sincronización automática: cada llamada gestionada se registra como una actividad dentro del contacto en el CRM.", icon: <Phone className="w-5 h-5 text-purple-400" /> },
        { service: "Automatización de Procesos", description: "El CRM actúa como el 'disparador' (trigger) y receptor de tus flujos de n8n y ERP.", icon: <Settings className="w-5 h-5 text-emerald-400" /> },
        { service: "Agentes RAG", description: "Gestiona toda la documentación de tu empresa desde el módulo de 'Knowledge Base' del CRM.", icon: <FileText className="w-5 h-5 text-orange-400" /> },
    ];

    // Benefits
    const benefits = [
        { title: "Privacidad y Control", description: "Tus datos y modelos se mantienen bajo tu control, integrados con Supabase para máxima seguridad.", icon: <ShieldCheck className="w-8 h-8 text-emerald-400" /> },
        { title: "Escalabilidad Sin Límites", description: "Diseñado para crecer desde una pequeña startup hasta una infraestructura empresarial compleja.", icon: <Rocket className="w-8 h-8 text-blue-400" /> },
        { title: "Diseño Premium", description: "Una interfaz moderna, rápida y optimizada para la experiencia de usuario (UX).", icon: <Zap className="w-8 h-8 text-amber-400" /> },
    ];

    return (
        <Layout>
            {/* ===== HERO SECTION ===== */}
            <section className="relative min-h-screen flex items-center px-4 py-20">
                <div className="max-w-7xl mx-auto w-full relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left: Text Content */}
                        <div className="text-center lg:text-left order-2 lg:order-1">
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] text-sm font-medium mb-8 animate-fade-in-badge">
                                <Database className="w-4 h-4 mr-2" />
                                Infraestructura Core de IA
                            </div>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-heading leading-tight">
                                <span className="text-[#F8FAFC]">SmartEngine</span>
                                <br />
                                <span className="text-gradient-highlight">CRM</span>
                            </h1>

                            <p className="text-lg sm:text-xl text-[#94A3B8] max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed animate-fade-in-subheading">
                                El sistema operativo diseñado para la era de la IA. Centraliza tus datos, orquesta tus agentes y escala tu negocio.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10 animate-fade-in-buttons">
                                <Button asChild size="lg" className="bg-[#22C55E] hover:bg-[#16A34A] text-[#020617] rounded-full px-10 py-6 text-lg font-semibold transition-all duration-200 hover:scale-105 cursor-pointer group">
                                    <Link href="/contacto">
                                        Contact Sales
                                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" size="lg" className="border-[#1E293B] hover:bg-[#1E293B] text-[#F8FAFC] rounded-full px-10 py-6 text-lg font-medium transition-all duration-200 cursor-pointer">
                                    <Link href="#features">Explorar</Link>
                                </Button>
                            </div>

                            <div className="flex items-center justify-center lg:justify-start gap-8 text-sm text-[#64748B] animate-fade-in-trust">
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
                                    <span>Datos Encriptados</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Zap className="w-4 h-4 text-[#22C55E]" />
                                    <span>Despliegue Instantáneo</span>
                                </div>
                            </div>
                        </div>

                        {/* Right: Dashboard Image - FULL WIDTH on its column */}
                        <div className="order-1 lg:order-2 animate-fade-in-right">
                            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-[#1E293B] shadow-2xl shadow-[#22C55E]/5 group cursor-pointer">
                                <Image
                                    src="/images/smartengine-dashboard.png"
                                    alt="SmartEngine CRM Dashboard - Panel de Control Inteligente"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CAPABILITIES SECTION ===== */}
            <section id="features" className="relative z-10 py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] text-sm font-medium mb-6">
                            <Star className="w-4 h-4 mr-2" />
                            Capacidades del Ecosistema
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-[#F8FAFC] mb-6">
                            Todo lo que necesitas para <span className="text-gradient-highlight">escalar</span>
                        </h2>
                        <p className="text-lg text-[#94A3B8] max-w-3xl mx-auto">
                            SmartEngine no es solo un CRM, es un ecosistema completo de herramientas interconectadas.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {capabilities.map((cap, index) => (
                            <Card key={index} className="bg-[#1E293B]/50 border-[#334155] hover:border-[#22C55E]/50 transition-all duration-200 cursor-pointer group" style={{ animationDelay: `${index * 100}ms` }}>
                                <CardHeader>
                                    <div className={`w-14 h-14 bg-[#020617] border border-[#334155] rounded-xl flex items-center justify-center mb-4 ${cap.color} group-hover:scale-110 transition-transform duration-200`}>
                                        {cap.icon}
                                    </div>
                                    <CardTitle className="text-xl font-bold text-[#F8FAFC] mb-3">{cap.title}</CardTitle>
                                    <p className="text-[#94A3B8] leading-relaxed">{cap.description}</p>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2">
                                        {cap.details.map((detail, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                <CheckCircle2 className="w-4 h-4 text-[#22C55E] flex-shrink-0" />
                                                <span className="text-sm text-[#94A3B8]">{detail}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== INTEGRATION TABLE ===== */}
            <section id="integrations" className="relative z-10 py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#F8FAFC] mb-6">
                            Cómo SmartEngine Potencia <span className="text-gradient-highlight">nuestros Servicios de IA</span>
                        </h2>
                        <p className="text-lg text-[#94A3B8] max-w-3xl mx-auto">
                            Este CRM es el complemento perfecto para los servicios que ya ofreces en tu agencia.
                        </p>
                    </div>

                    <div className="bg-[#1E293B]/50 border border-[#334155] rounded-2xl overflow-hidden">
                        <div className="hidden md:grid md:grid-cols-2 bg-[#0F172A] p-6 border-b border-[#334155]">
                            <div className="text-[#F8FAFC] font-semibold">Tu Servicio</div>
                            <div className="text-[#F8FAFC] font-semibold">Integración con SmartEngine CRM</div>
                        </div>
                        {integrations.map((item, index) => (
                            <div key={index} className="grid grid-cols-1 md:grid-cols-2 p-6 border-b border-[#334155] last:border-b-0 hover:bg-[#1E293B]/80 transition-colors duration-200 cursor-pointer">
                                <div className="flex items-center gap-4 mb-3 md:mb-0">
                                    <div className="w-10 h-10 rounded-xl bg-[#020617] border border-[#334155] flex items-center justify-center">{item.icon}</div>
                                    <span className="text-[#F8FAFC] font-medium">{item.service}</span>
                                </div>
                                <div className="text-[#94A3B8] md:flex md:items-center">{item.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== BENEFITS ===== */}
            <section className="relative z-10 py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#F8FAFC] mb-6">
                            ¿Por qué elegir <span className="text-gradient-highlight">SmartEngine</span>?
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {benefits.map((b, index) => (
                            <div key={index} className="bg-[#1E293B]/50 border border-[#334155] rounded-2xl p-8 hover:border-[#22C55E]/50 transition-all duration-200 cursor-pointer group">
                                <div className="w-14 h-14 bg-[#020617] border border-[#334155] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                                    {b.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#F8FAFC] mb-3">{b.title}</h3>
                                <p className="text-[#94A3B8] leading-relaxed">{b.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FINAL CTA ===== */}
            <section className="relative z-10 py-24 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#F8FAFC] mb-8 leading-tight">
                        No compres solo un CRM, adquiere la <span className="text-gradient-highlight">infraestructura</span> que hará que tu IA trabaje para ti.
                    </h2>
                    <Button asChild size="lg" className="bg-[#22C55E] hover:bg-[#16A34A] text-[#020617] rounded-full px-12 py-6 text-xl font-semibold transition-all duration-200 hover:scale-105 cursor-pointer group">
                        <Link href="/contacto">
                            Solicita una demo de SmartEngine hoy mismo
                            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-200" />
                        </Link>
                    </Button>
                </div>
            </section>
        </Layout>
    );
}
