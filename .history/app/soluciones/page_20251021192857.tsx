import Image from "next/image"
import { Card } from "@/components/ui/card"

export const metadata = {
  title: "Soluciones - Cliste",
  description: "Paquetes y servicios para maximizar tu ROI en Google Ads y Meta Ads.",
}

export default function SolucionesPage() {
  return (
    <main className="min-h-screen bg-background-primary text-primary">
      {/* Hero */}
      <section className="pt-24 pb-12 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="inline-block px-3 py-1 rounded-full bg-card text-secondary text-sm mb-4">Servicios de Performance Marketing</p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Paquetes diseñados para <span className="text-gradient-highlight">maximizar tu ROI</span>
          </h1>
          <p className="text-secondary max-w-3xl mx-auto">Soluciones especializadas en Google Ads, Meta Ads y funnels de conversión con precios transparentes y resultados garantizados.</p>
        </div>
      </section>

      {/* Paquetes Principales */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Paquetes Principales</h2>
          <p className="text-secondary text-center mb-8">Elige el paquete que mejor se adapte a tu presupuesto y objetivos de crecimiento.</p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex flex-col items-start gap-4">
                <div className="rounded-full bg-accent-primary/10 p-4">{/* icon placeholder */}</div>
                <h3 className="text-xl font-semibold">Starter</h3>
                <p className="text-secondary">Perfecto para pequeños negocios que inician</p>
                <div className="text-3xl font-bold text-accent-primary mt-4">$800</div>
                <ul className="mt-4 text-secondary space-y-2">
                  <li>1 plataforma (Google Ads O Meta Ads)</li>
                  <li>Hasta 3 campañas activas</li>
                  <li>Configuración de tracking básico</li>
                </ul>
                <button className="btn-primary mt-6">Empezar Ahora</button>
              </div>
            </Card>

            <Card className="p-6 border-2 border-border-highlight">
              <div className="flex flex-col items-start gap-4">
                <div className="rounded-full bg-accent-secondary/10 p-4">{/* icon placeholder */}</div>
                <h3 className="text-xl font-semibold">Professional</h3>
                <p className="text-secondary">Para empresas que buscan crecimiento acelerado</p>
                <div className="text-3xl font-bold text-accent-secondary mt-4">$1,500</div>
                <ul className="mt-4 text-secondary space-y-2">
                  <li>Google Ads + Meta Ads</li>
                  <li>Hasta 8 campañas activas</li>
                  <li>Configuración avanzada de tracking</li>
                </ul>
                <button className="btn-secondary mt-6">Elige Professional</button>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex flex-col items-start gap-4">
                <div className="rounded-full bg-gradient-to-r from-pink-500 to-violet-500 p-4">{/* icon placeholder */}</div>
                <h3 className="text-xl font-semibold">Enterprise</h3>
                <p className="text-secondary">Solución completa para grandes operaciones</p>
                <div className="text-3xl font-bold text-cta mt-4">$2,800</div>
                <ul className="mt-4 text-secondary space-y-2">
                  <li>Todas las plataformas disponibles</li>
                  <li>Campañas ilimitadas</li>
                  <li>Configuración completa de analytics</li>
                </ul>
                <button className="btn-primary mt-6">Contactar Ventas</button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Servicios Individuales */}
      <section className="py-16 bg-background-secondary">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6 text-primary">Servicios Individuales</h2>
          <p className="text-secondary text-center mb-8">¿Necesitas algo específico? También ofrecemos servicios por separado.</p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Configuración Google Ads", price: "$800", desc: "Setup completo de cuenta y primeras campañas." },
              { title: "Configuración Meta Ads", price: "$600", desc: "Setup de Facebook e Instagram con audiencias." },
              { title: "Auditoría de Landing", price: "$400", desc: "Análisis completo de tu página de conversión." },
              { title: "Auditoría SEO", price: "$500", desc: "Análisis técnico completo de tu sitio web." },
            ].map((s) => (
              <Card key={s.title} className="p-6">
                <h4 className="font-semibold text-lg mb-2">{s.title}</h4>
                <p className="text-secondary mb-4">{s.desc}</p>
                <div className="text-2xl font-bold text-accent-primary mb-4">{s.price}</div>
                <button className="btn-outline">Solicitar</button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consultoría Estratégica */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Consultoría Estratégica</h2>
          <p className="text-secondary text-center mb-8">Sesiones personalizadas para resolver desafíos específicos de tu negocio.</p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <h4 className="font-semibold mb-2">Sesión de Estrategia</h4>
              <p className="text-secondary mb-4">Llamada de 90 minutos para analizar tu situación actual y definir estrategias.</p>
              <div className="text-2xl font-bold text-accent-secondary">$200</div>
              <button className="btn-primary mt-6">Agendar Sesión</button>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold mb-2">Auditoría de Campañas</h4>
              <p className="text-secondary mb-4">Revisión completa de tus campañas actuales con recomendaciones específicas.</p>
              <div className="text-2xl font-bold text-accent-primary">$350</div>
              <button className="btn-outline mt-6">Solicitar Auditoría</button>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold mb-2">Consultoría Mensual</h4>
              <p className="text-secondary mb-4">Acompañamiento continuo con llamadas mensuales y soporte por email.</p>
              <div className="text-2xl font-bold text-cta">$800</div>
              <button className="btn-primary mt-6">Empezar Consultoría</button>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background-secondary">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Preguntas Frecuentes</h2>
          <p className="text-secondary text-center mb-8">Respuestas a las dudas más comunes sobre nuestros servicios y precios.</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-2">¿Qué incluye el porcentaje del ad spend?</h4>
              <p className="text-secondary">El porcentaje del ad spend cubre la gestión activa de tus campañas, optimizaciones diarias, A/B testing y monitoreo continuo. Es adicional a la tarifa mensual fija.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">¿Hay contratos de permanencia?</h4>
              <p className="text-secondary">Requerimos un mínimo de 3 meses para ver resultados óptimos. Después de este período, puedes cancelar con 30 días de aviso previo.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">¿Qué presupuesto publicitario recomiendan?</h4>
              <p className="text-secondary">Para Google Ads recomendamos mínimo $1,000/mes, para Meta Ads $500/mes. Presupuestos menores limitan las oportunidades de optimización.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">¿Ofrecen garantías de resultados?</h4>
              <p className="text-secondary">Garantizamos mejoras en métricas clave (CTR, CPC, conversiones) en los primeros 60 días. Si no vemos mejoras, trabajamos sin costo adicional hasta lograrlas.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
