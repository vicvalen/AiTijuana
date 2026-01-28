"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ContactSection() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState<any>({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    industry: "",
    businessType: "",
    market: "",
    channels: [] as string[],
    budget: "",
    challenge: "",
    objective: "",
    timeframe: "",
    contactMethod: "",
    urgency: "",
    notes: "",
  })

  const next = () => setStep((s) => Math.min(4, s + 1))
  const prev = () => setStep((s) => Math.max(1, s - 1))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder: enviar a API o mostrar confirmación
    console.log("Enviar formulario de contacto:", form)
    setStep(4)
    alert("Gracias — recibimos tu solicitud. Te contactaremos en menos de 24 horas.")
  }

  return (
    <section id="contacto" className="relative z-10 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Contacto Directo
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            Hablemos de tu proyecto
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Cuéntanos sobre tu negocio y objetivos. Te responderemos en menos de 24 horas con una propuesta personalizada.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form column */}
          <div className="lg:col-span-2">
            <Card className="p-6 md:p-8">
              <form onSubmit={handleSubmit}>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-slate-600">Paso {step} de 4</div>
                </div>

                {step === 1 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Información básica de contacto</h3>
                    <div>
                      <label className="block text-sm text-slate-700 mb-2">Nombre Completo *</label>
                      <Input
                        placeholder="Tu nombre completo"
                        value={form.name}
                        onChange={(e: any) => setForm({ ...form, name: e.target.value })}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-slate-700 mb-2">Email Corporativo *</label>
                      <Input
                        placeholder="tu@empresa.com"
                        value={form.email}
                        onChange={(e: any) => setForm({ ...form, email: e.target.value })}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-slate-700 mb-2">Teléfono</label>
                      <Input
                        placeholder="+1 (555) 123-4567"
                        value={form.phone}
                        onChange={(e: any) => setForm({ ...form, phone: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-slate-700 mb-2">Nombre de la Empresa *</label>
                      <Input
                        placeholder="Nombre de tu empresa"
                        value={form.company}
                        onChange={(e: any) => setForm({ ...form, company: e.target.value })}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-slate-700 mb-2">Sitio Web</label>
                      <Input
                        placeholder="https://tuempresa.com"
                        value={form.website}
                        onChange={(e: any) => setForm({ ...form, website: e.target.value })}
                      />
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Detalles de tu negocio</h3>

                    <div>
                      <label className="block text-sm text-slate-700 mb-2">Industria *</label>
                      <Select value={form.industry} onValueChange={(v: string) => setForm({ ...form, industry: v })}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Selecciona tu industria" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="automotriz">Automotriz</SelectItem>
                          <SelectItem value="retail">Retail</SelectItem>
                          <SelectItem value="ecommerce">E-commerce</SelectItem>
                          <SelectItem value="hospitalidad">Hospitalidad</SelectItem>
                          <SelectItem value="salud">Salud</SelectItem>
                          <SelectItem value="servicios">Servicios</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm text-slate-700 mb-2">Tipo de Negocio *</label>
                      <Select value={form.businessType} onValueChange={(v: string) => setForm({ ...form, businessType: v })}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Selecciona el tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="b2b">B2B</SelectItem>
                          <SelectItem value="b2c">B2C</SelectItem>
                          <SelectItem value="marketplace">Marketplace</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm text-slate-700 mb-2">Mercado Objetivo</label>
                      <Input
                        placeholder="¿A quién te diriges?"
                        value={form.market}
                        onChange={(e: any) => setForm({ ...form, market: e.target.value })}
                      />
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Situación actual y objetivos</h3>

                    <div>
                      <label className="block text-sm text-slate-700 mb-2">¿Qué estrategias de marketing usas actualmente?</label>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          "Google Ads",
                          "Facebook/Instagram Ads",
                          "SEO",
                          "Email Marketing",
                          "Marketing de Contenidos",
                          "Referidos",
                          "Marketing Tradicional",
                          "Ninguna",
                        ].map((c) => (
                          <button
                            type="button"
                            key={c}
                            className={`px-3 py-2 text-sm rounded border ${form.channels.includes(c) ? "bg-slate-900 text-white" : "bg-white"}`}
                            onClick={() => {
                              const has = form.channels.includes(c)
                              setForm({ ...form, channels: has ? form.channels.filter((x: string) => x !== c) : [...form.channels, c] })
                            }}
                          >
                            {c}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-slate-700 mb-2">Presupuesto Mensual para Marketing *</label>
                      <Select value={form.budget} onValueChange={(v: string) => setForm({ ...form, budget: v })}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Selecciona tu rango de presupuesto" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="<1000">&lt; $1,000</SelectItem>
                          <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                          <SelectItem value="5000-20000">$5,000 - $20,000</SelectItem>
                          <SelectItem value=">20000">&gt; $20,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm text-slate-700 mb-2">Principal Desafío Actual</label>
                      <Input placeholder="¿Cuál es tu mayor desafío?" value={form.challenge} onChange={(e: any) => setForm({ ...form, challenge: e.target.value })} />
                    </div>

                    <div>
                      <label className="block text-sm text-slate-700 mb-2">Objetivo Principal</label>
                      <Input placeholder="¿Qué quieres lograr?" value={form.objective} onChange={(e: any) => setForm({ ...form, objective: e.target.value })} />
                    </div>

                    <div>
                      <label className="block text-sm text-slate-700 mb-2">¿Cuándo quieres ver resultados?</label>
                      <Input placeholder="Timeframe esperado" value={form.timeframe} onChange={(e: any) => setForm({ ...form, timeframe: e.target.value })} />
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Preferencias de contacto</h3>

                    <div>
                      <label className="block text-sm text-slate-700 mb-2">Método de Contacto Preferido</label>
                      <Select value={form.contactMethod} onValueChange={(v: string) => setForm({ ...form, contactMethod: v })}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="¿Cómo prefieres que te contactemos?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="whatsapp">WhatsApp</SelectItem>
                          <SelectItem value="phone">Llamada</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm text-slate-700 mb-2">Urgencia del Proyecto</label>
                      <Select value={form.urgency} onValueChange={(v: string) => setForm({ ...form, urgency: v })}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="¿Qué tan urgente es?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="baja">Baja</SelectItem>
                          <SelectItem value="media">Media</SelectItem>
                          <SelectItem value="alta">Alta</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm text-slate-700 mb-2">Información Adicional</label>
                      <Textarea placeholder="Cuéntanos cualquier detalle adicional que consideres importante..." value={form.notes} onChange={(e: any) => setForm({ ...form, notes: e.target.value })} />
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between mt-6">
                  <div>
                    <Button type="button" variant="ghost" onClick={prev} disabled={step === 1}>
                      Anterior
                    </Button>
                  </div>

                  {step < 4 ? (
                    <Button type="button" onClick={next}>
                      Siguiente
                    </Button>
                  ) : (
                    <Button type="submit">Solicita tu Consulta Gratuita</Button>
                  )}
                </div>
              </form>
            </Card>
          </div>

          {/* Sidebar / Contact options */}
          <div className="space-y-4">
            <Card className="p-6">
              <h4 className="text-lg font-semibold mb-2">Formas de Contacto</h4>
              <p className="text-sm text-slate-600 mb-4">Elige la opción que prefieras</p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-medium">AD</div>
                  <div>
                    <div className="font-medium">Agenda Directa</div>
                    <div className="text-sm text-slate-600">Llamada de 30 min gratuita</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center font-medium">WA</div>
                  <div>
                    <div className="font-medium">WhatsApp</div>
                    <div className="text-sm text-slate-600">Respuesta inmediata</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-medium">E</div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-sm text-slate-600">hola@highrankfunnel.com</div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h4 className="text-lg font-semibold mb-2">Tiempo de Respuesta</h4>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>Formulario: Menos de 24 horas</li>
                <li>WhatsApp: Inmediato (horario laboral)</li>
                <li>Llamada: Mismo día si es urgente</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h4 className="text-lg font-semibold mb-2">Qué Esperar</h4>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>Análisis gratuito de tu situación actual</li>
                <li>Propuesta personalizada con precios</li>
                <li>Recomendaciones específicas para tu industria</li>
                <li>Timeline estimado de implementación</li>
              </ul>
            </Card>

            <Card className="p-4 text-sm text-slate-700">
              <div className="font-medium mb-2">Recomendación basada en tu presupuesto:</div>
              <div>
                Este presupuesto es ideal para nuestro paquete <strong>Starter</strong>, enfocándonos en una plataforma principal (Google Ads o Meta Ads).
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
