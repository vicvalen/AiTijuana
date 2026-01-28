"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check, ArrowRight, Star, Target, BarChart3, Search, TrendingUp, Phone, Database, Sparkles, Zap } from "lucide-react";
import {
  SiN8N, SiOpenai, SiZapier, SiWhatsapp, SiSlack, SiSalesforce, SiHubspot,
  SiSupabase, SiPostgresql, SiTwilio, SiStripe, SiGoogle, SiGmail,
  SiNotion, SiAirtable, SiShopify, SiMailchimp, SiTelegram, SiDiscord
} from "react-icons/si";
import { ReactNode } from "react";

export function SolutionsSection() {
  const services = [
    {
      icon: <Database className="w-7 h-7" />,
      title: "SmartEngine CRM: Ecosistema de IA",
      description: "La infraestructura central que orquesta tus agentes, gestiona tus ventas y centraliza tus datos con privacidad total.",
      features: ["Orquestación n8n/Flowise", "Pipeline de Ventas IA", "Marketing ROI Tracking"],
      color: "text-emerald-400",
      bgColor: "bg-emerald-400/10",
      borderColor: "group-hover:border-emerald-400/50",
      featured: true,
      href: "/smartengine"
    },
    {
      icon: <Target className="w-7 h-7" />,
      title: "Consultoría Estratégica en Automatización con IA",
      description: "Formamos y acompañamos a tu equipo para que domine la creación de agentes inteligentes y flujos automatizados.",
      features: ["Capacitación de equipos", "Diseño de arquitectura IA", "Acompañamiento estratégico"],
      color: "text-amber-400",
      bgColor: "bg-amber-400/10",
      borderColor: "group-hover:border-amber-400/50"
    },
    {
      icon: <Star className="w-7 h-7" />,
      title: "Agentes IA Atención al Cliente y Ventas",
      description: "Atiende a tus clientes 24/7 con agentes virtuales que responden al instante y convierten conversaciones en ventas.",
      features: ["Disponibilidad 24/7", "Conversión de leads", "Atención personalizada"],
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      borderColor: "group-hover:border-blue-400/50",
      popular: true
    },
    {
      icon: <Phone className="w-7 h-7" />,
      title: "Agentes de Voz Telefónicos",
      description: "Sistemas de voz inteligentes que atienden llamadas y realizan gestiones como un operador humano.",
      features: ["Atención telefónica natural", "Gestión de citas", "Escalabilidad ilimitada"],
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      borderColor: "group-hover:border-purple-400/50"
    },
    {
      icon: <TrendingUp className="w-7 h-7" />,
      title: "Automatización de Procesos Empresariales",
      description: "Automatizaciones que eliminan tareas repetitivas, reducen costes y aumentan la eficiencia.",
      features: ["Eliminación de tareas repetitivas", "Reducción de costos", "Escalabilidad ágil"],
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
      borderColor: "group-hover:border-orange-400/50"
    },
    {
      icon: <BarChart3 className="w-7 h-7" />,
      title: "Automatización de Facturas",
      description: "Digitalizamos y automatizamos la gestión de facturas, reduciendo errores y ahorrando tiempo.",
      features: ["Extracción de datos IA", "Reducción de errores", "Integración con ERP"],
      color: "text-cyan-400",
      bgColor: "bg-cyan-400/10",
      borderColor: "group-hover:border-cyan-400/50"
    },
    {
      icon: <Search className="w-7 h-7" />,
      title: "Agentes RAG con Bases de Conocimiento",
      description: "Transforma tu documentación en una base de conocimiento inteligente accesible al instante.",
      features: ["Acceso instantáneo a info", "Búsqueda semántica", "Base de datos inteligente"],
      color: "text-pink-400",
      bgColor: "bg-pink-400/10",
      borderColor: "group-hover:border-pink-400/50"
    }
  ];

  return (
    <section id="soluciones" className="relative z-10 pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#F97316]/10 border border-[#F97316]/30 text-[#F97316] text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            Empoderando tu Empresa con IA
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8FAFC] mb-8">
            Servicios que{" "}
            <span className="text-gradient-highlight">Transforman tu Negocio</span>
          </h1>

          <p className="text-lg md:text-xl text-[#94A3B8] max-w-3xl mx-auto leading-relaxed">
            Soluciones completas de inteligencia artificial y automatización, diseñadas específicamente para las necesidades de tu industria.
          </p>
        </div>

        {/* Featured Card - SmartEngine CRM */}
        <div className="mb-16">
          <div className="relative bg-gradient-to-br from-[#0F172A] to-[#1E293B] border border-[#334155] hover:border-[#22C55E]/50 transition-all duration-200 cursor-pointer group overflow-hidden rounded-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#22C55E]/5 rounded-full blur-3xl pointer-events-none" />

            {/* Badge - INSIDE the card with proper spacing */}
            <div className="absolute top-6 left-6 z-10">
              <div className="bg-[#22C55E] text-[#020617] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                <Zap className="w-3 h-3" />
                Producto Destacado
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 pt-20">
              <div>
                <div className={`w-14 h-14 ${services[0].bgColor} rounded-xl flex items-center justify-center mb-6 ${services[0].color} group-hover:scale-110 transition-transform duration-200`}>
                  {services[0].icon}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#F8FAFC] mb-4">{services[0].title}</h2>
                <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">{services[0].description}</p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {services[0].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-[#1E293B] border border-[#334155] rounded-full px-4 py-2">
                      <Check className="w-4 h-4 text-[#22C55E]" />
                      <span className="text-sm text-[#94A3B8]">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button asChild size="lg" className="bg-[#22C55E] hover:bg-[#16A34A] text-[#020617] rounded-full px-8 py-6 text-lg font-semibold transition-all duration-200 hover:scale-105 cursor-pointer group/btn">
                  <Link href="/smartengine">
                    Ver SmartEngine CRM
                    <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </Link>
                </Button>
              </div>

              <div className="hidden lg:flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#22C55E]/20 to-[#3B82F6]/20 rounded-2xl blur-xl pointer-events-none" />
                  <div className="relative bg-[#0F172A] border border-[#334155] rounded-2xl p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[#64748B] text-sm">Agentes Activos</span>
                        <span className="text-[#22C55E] font-bold">12</span>
                      </div>
                      <div className="h-2 bg-[#1E293B] rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-gradient-to-r from-[#22C55E] to-[#3B82F6] rounded-full" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#64748B] text-sm">Leads este mes</span>
                        <span className="text-[#F8FAFC] font-bold">1,247</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#64748B] text-sm">ROI Campañas</span>
                        <span className="text-[#22C55E] font-bold">+340%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(1).map((service, index) => (
            <div
              key={index}
              className={`relative bg-[#0F172A] border border-[#334155] ${service.borderColor} hover:shadow-lg transition-all duration-200 cursor-pointer group flex flex-col h-full rounded-2xl overflow-hidden`}
            >
              {service.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-[#F97316] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Popular
                  </div>
                </div>
              )}

              <div className="p-6 flex-grow">
                <div className={`w-12 h-12 ${service.bgColor} rounded-xl flex items-center justify-center mb-5 ${service.color} group-hover:scale-110 transition-transform duration-200`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#F8FAFC] mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#22C55E] flex-shrink-0" />
                      <span className="text-sm text-[#64748B]">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 pt-0">
                <Button
                  variant="outline"
                  className="w-full border-[#334155] hover:bg-[#1E293B] hover:border-[#475569] text-[#F8FAFC] rounded-full py-5 transition-all duration-200 cursor-pointer group/btn"
                >
                  Saber más
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* ===== INTEGRATIONS LOGO CAROUSEL ===== */}
        <div className="mt-24 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[#F8FAFC] mb-4">
              Conectamos con <span className="text-gradient-highlight">+50 plataformas</span>
            </h3>
            <p className="text-[#94A3B8] max-w-2xl mx-auto">
              Automatiza procesos integrando las herramientas que ya usas en tu negocio
            </p>
          </div>

          {/* Infinite Scroll Carousel */}
          <div className="relative overflow-hidden">
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black/80 to-transparent z-10 pointer-events-none" />

            {/* Scrolling Container */}
            <div className="flex animate-scroll-left">
              {/* First Set */}
              <div className="flex items-center gap-12 px-6 shrink-0">
                {([
                  { name: "n8n", color: "#EA4B71", icon: <SiN8N className="w-8 h-8" /> },
                  { name: "OpenAI", color: "#10A37F", icon: <SiOpenai className="w-8 h-8" /> },
                  { name: "Zapier", color: "#FF4A00", icon: <SiZapier className="w-8 h-8" /> },
                  { name: "WhatsApp", color: "#25D366", icon: <SiWhatsapp className="w-8 h-8" /> },
                  { name: "Slack", color: "#4A154B", icon: <SiSlack className="w-8 h-8" /> },
                  { name: "Salesforce", color: "#00A1E0", icon: <SiSalesforce className="w-8 h-8" /> },
                  { name: "HubSpot", color: "#FF7A59", icon: <SiHubspot className="w-8 h-8" /> },
                  { name: "Supabase", color: "#3ECF8E", icon: <SiSupabase className="w-8 h-8" /> },
                  { name: "PostgreSQL", color: "#336791", icon: <SiPostgresql className="w-8 h-8" /> },
                  { name: "Twilio", color: "#F22F46", icon: <SiTwilio className="w-8 h-8" /> },
                  { name: "Stripe", color: "#635BFF", icon: <SiStripe className="w-8 h-8" /> },
                  { name: "Google", color: "#4285F4", icon: <SiGoogle className="w-8 h-8" /> },
                  { name: "Gmail", color: "#EA4335", icon: <SiGmail className="w-8 h-8" /> },
                  { name: "Notion", color: "#FFFFFF", icon: <SiNotion className="w-8 h-8" /> },
                  { name: "Airtable", color: "#18BFFF", icon: <SiAirtable className="w-8 h-8" /> },
                  { name: "Shopify", color: "#7AB55C", icon: <SiShopify className="w-8 h-8" /> },
                  { name: "Mailchimp", color: "#FFE01B", icon: <SiMailchimp className="w-8 h-8" /> },
                  { name: "Telegram", color: "#26A5E4", icon: <SiTelegram className="w-8 h-8" /> },
                  { name: "Discord", color: "#5865F2", icon: <SiDiscord className="w-8 h-8" /> },
                ] as { name: string; color: string; icon: ReactNode }[]).map((integration, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center gap-3 opacity-70 hover:opacity-100 transition-opacity duration-200 cursor-pointer group"
                  >
                    <div
                      className="w-16 h-16 rounded-2xl bg-[#1E293B] border border-[#334155] flex items-center justify-center group-hover:border-[#475569] transition-colors duration-200"
                      style={{ boxShadow: `0 0 20px ${integration.color}20`, color: integration.color }}
                    >
                      {integration.icon}
                    </div>
                    <span className="text-xs text-[#64748B] font-medium whitespace-nowrap">{integration.name}</span>
                  </div>
                ))}
              </div>

              {/* Duplicate for seamless loop */}
              <div className="flex items-center gap-12 px-6 shrink-0">
                {([
                  { name: "n8n", color: "#EA4B71", icon: <SiN8N className="w-8 h-8" /> },
                  { name: "OpenAI", color: "#10A37F", icon: <SiOpenai className="w-8 h-8" /> },
                  { name: "Zapier", color: "#FF4A00", icon: <SiZapier className="w-8 h-8" /> },
                  { name: "WhatsApp", color: "#25D366", icon: <SiWhatsapp className="w-8 h-8" /> },
                  { name: "Slack", color: "#4A154B", icon: <SiSlack className="w-8 h-8" /> },
                  { name: "Salesforce", color: "#00A1E0", icon: <SiSalesforce className="w-8 h-8" /> },
                  { name: "HubSpot", color: "#FF7A59", icon: <SiHubspot className="w-8 h-8" /> },
                  { name: "Supabase", color: "#3ECF8E", icon: <SiSupabase className="w-8 h-8" /> },
                  { name: "PostgreSQL", color: "#336791", icon: <SiPostgresql className="w-8 h-8" /> },
                  { name: "Twilio", color: "#F22F46", icon: <SiTwilio className="w-8 h-8" /> },
                  { name: "Stripe", color: "#635BFF", icon: <SiStripe className="w-8 h-8" /> },
                  { name: "Google", color: "#4285F4", icon: <SiGoogle className="w-8 h-8" /> },
                  { name: "Gmail", color: "#EA4335", icon: <SiGmail className="w-8 h-8" /> },
                  { name: "Notion", color: "#FFFFFF", icon: <SiNotion className="w-8 h-8" /> },
                  { name: "Airtable", color: "#18BFFF", icon: <SiAirtable className="w-8 h-8" /> },
                  { name: "Shopify", color: "#7AB55C", icon: <SiShopify className="w-8 h-8" /> },
                  { name: "Mailchimp", color: "#FFE01B", icon: <SiMailchimp className="w-8 h-8" /> },
                  { name: "Telegram", color: "#26A5E4", icon: <SiTelegram className="w-8 h-8" /> },
                  { name: "Discord", color: "#5865F2", icon: <SiDiscord className="w-8 h-8" /> },
                ] as { name: string; color: string; icon: ReactNode }[]).map((integration, idx) => (
                  <div
                    key={`dup-${idx}`}
                    className="flex flex-col items-center gap-3 opacity-70 hover:opacity-100 transition-opacity duration-200 cursor-pointer group"
                  >
                    <div
                      className="w-16 h-16 rounded-2xl bg-[#1E293B] border border-[#334155] flex items-center justify-center group-hover:border-[#475569] transition-colors duration-200"
                      style={{ boxShadow: `0 0 20px ${integration.color}20`, color: integration.color }}
                    >
                      {integration.icon}
                    </div>
                    <span className="text-xs text-[#64748B] font-medium whitespace-nowrap">{integration.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-[#64748B] mb-6 text-lg">¿No estás seguro de qué servicio necesitas?</p>
          <Button asChild variant="outline" size="lg" className="border-[#334155] hover:bg-[#1E293B] text-[#F8FAFC] rounded-full px-8 py-6 transition-all duration-200 cursor-pointer">
            <Link href="/contacto">
              Agenda una consulta gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}