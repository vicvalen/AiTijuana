"use client"

import { useState, useEffect, useRef } from "react"
import { MessageCircle, Clock, Zap } from "lucide-react"

const conversations = [
  {
    title: "Consulta sobre sedán de lujo y reserva de prueba de manejo",
    messages: [
      { text: "¡Hola! Estoy interesado en el nuevo sedán Premium. ¿Tienen stock?", sender: "customer", delay: 0 },
      {
        text: "Tenemos varios sedanes Premium 2024 disponibles. ¿Buscas una versión o color específico?",
        sender: "ai",
        delay: 1000,
      },
      {
        text: "Preferiría la versión Premium Plus en negro o blanco. ¿Cuál es el rango de precios?",
        sender: "customer",
        delay: 2500,
      },
      {
        text: "¡Buena elección! El Premium Plus parte de €42.500. Tenemos negro y blanco disponibles. ¿Te gustaría agendar una prueba de manejo?",
        sender: "ai",
        delay: 3500,
      },
      { text: "Sí, perfecto. ¿Cuándo están disponibles?", sender: "customer", delay: 5000 },
      {
        text: "Puedo reservarte para mañana a las 14:00, jueves a las 11:00 o viernes a las 16:00. Todas las pruebas son gratuitas e incluyen una revisión del vehículo.",
        sender: "ai",
        delay: 6000,
      },
      { text: "El jueves a las 11:00 está perfecto", sender: "customer", delay: 7500 },
      {
        text: "Perfecto. He reservado tu prueba de manejo gratuita para el jueves a las 11:00. Recibirás un SMS de confirmación. Trae tu DNI y tendremos el sedán listo para ti.",
        sender: "ai",
        delay: 8500,
      },
    ],
  },
  {
    title: "Características del vehículo y financiación",
    messages: [
      { text: "¿Cuál es el consumo del SUV de lujo?", sender: "customer", delay: 0 },
      {
        text: "El SUV de lujo 2024 tiene un estimado de 23 ciudad/28 carretera MPG. ¡Además viene con tracción total de serie!",
        sender: "ai",
        delay: 1000,
      },
      {
        text: "¡Perfecto! ¿Y las opciones de financiación?",
        sender: "customer",
        delay: 2500,
      },
      {
        text: "Ofrecemos financiación excelente. Las tasas actuales comienzan en 2.9% APR para compradores calificados, y también ofrecemos leasing desde €379/mes.",
        sender: "ai",
        delay: 4000,
      },
      { text: "¿Puedo obtener preaprobación online?", sender: "customer", delay: 5500 },
      {
        text: "Puedo iniciar tu preaprobación ahora mismo. Toma solo 2 minutos y no afecta tu historial de crédito. ¿Quieres que te envíe el enlace seguro?",
        sender: "ai",
        delay: 6500,
      },
    ],
  },
  {
    title: "Consulta de servicio fuera de horario",
    messages: [
      {
        text: "Hola, son las 23:00. Se encendió la luz de motor. ¿Qué hago?",
        sender: "customer",
        delay: 0,
      },
      {
        text: "Estoy aquí para ayudar. Primero, ¿la luz es fija o intermitente? ¿El coche funciona con normalidad?",
        sender: "ai",
        delay: 1000,
      },
      { text: "Es fija y el coche parece funcionar bien", sender: "customer", delay: 2500 },
      {
        text: "¡Buena noticia! Una luz fija normalmente no es urgente. Puedes seguir conduciendo con normalidad, pero te recomiendo traerlo en los próximos días. Puedo agendar tu cita de servicio ahora si quieres.",
        sender: "ai",
        delay: 3500,
      },
      {
        text: "Sí, por favor. ¿Ofrecen coches de cortesía?",
        sender: "customer",
        delay: 5000,
      },
      {
        text: "Te he agendado para el martes a las 9:00 y he reservado un coche de cortesía. Recibirás un email de confirmación con los detalles. ¡Conduce seguro!",
        sender: "ai",
        delay: 6000,
      },
    ],
  },
]

export function AITeamSection() {
  const sectionRef = useRef<HTMLElement>(null) // Added section ref for intersection observer
  const [isVisible, setIsVisible] = useState(false)
  const [currentConversation, setCurrentConversation] = useState(0)
  const [displayedMessages, setDisplayedMessages] = useState<any[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("[v0] AI Team Section is now visible")
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [displayedMessages, isTyping])

  useEffect(() => {
    const conversation = conversations[currentConversation]
    setDisplayedMessages([])
    setIsTyping(false)

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    let messageIndex = 0

    const showNextMessage = () => {
      if (messageIndex >= conversation.messages.length) {
        // Wait 3 seconds then move to next conversation
        timeoutRef.current = setTimeout(() => {
          setCurrentConversation((prev) => (prev + 1) % conversations.length)
        }, 3000)
        return
      }

      const message = conversation.messages[messageIndex]

      timeoutRef.current = setTimeout(() => {
        if (message.sender === "ai") {
          setIsTyping(true)
          timeoutRef.current = setTimeout(() => {
            setDisplayedMessages((prev) => [...prev, message])
            setIsTyping(false)
            messageIndex++
            showNextMessage()
          }, 800) // Reduced typing delay from 1500ms to 800ms for faster replies
        } else {
          setDisplayedMessages((prev) => [...prev, message])
          messageIndex++
          showNextMessage()
        }
      }, message.delay)
    }

    showNextMessage()

    // Cleanup timeout on unmount or conversation change
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [currentConversation])

  return (
    <section id="ai-team" ref={sectionRef} className="relative z-10">
      <div className="bg-white rounded-b-[3rem] pt-16 sm:pt-24 pb-16 sm:pb-24 px-4 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div
              className={`inline-flex items-center gap-2 bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-6 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <MessageCircle className="w-4 h-4" />
              Demostración del asistente de ventas IA
            </div>

            <h2
              className={`text-4xl md:text-5xl font-bold text-slate-900 mb-4 transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Observa cómo la IA maneja las{" "}
              <span className="bg-linear-to-r from-slate-600 to-slate-400 bg-clip-text text-transparent">
                ventas reales de autos
              </span>
            </h2>

            <p
              className={`text-xl text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Observa cómo nuestra IA gestiona consultas de autos, reserva pruebas de manejo y ofrece soporte automotriz 24/7.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-7xl mx-auto">
            {/* Left side - Text content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center lg:h-[600px] space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div
                className={`transition-all duration-1000 delay-600 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
              >
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 lg:mb-6">
                  Esto es lo que ven tus compradores
                </h3>

                <div className="space-y-3 lg:space-y-4 text-base lg:text-lg text-slate-700 leading-relaxed">
                  <p>
                    Mientras estás cerrado, tu asistente IA responde preguntas sobre autos, reserva pruebas de manejo y ayuda
                    a los clientes 24/7.
                  </p>

                  <p>
                    Cada conversación que ves podría estar ocurriendo a medianoche, un domingo o cuando tu equipo de ventas
                    está atendiendo a otros clientes.
                  </p>

                  <p className="text-lg lg:text-xl font-semibold text-slate-900">
                    Tus competidores están perdiendo estas ventas de autos.
                  </p>
                </div>
              </div>

              <div
                className={`transition-all duration-1000 delay-800 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
              >
                <div className="p-4 lg:p-6 bg-slate-50 rounded-xl border-l-4 border-slate-900">
                  <p className="text-slate-800 font-medium text-sm lg:text-base">
                    "Pasamos de perder el 70% de las consultas fuera de horario a capturar cada cliente potencial. Las reservas de pruebas de manejo aumentaron un 50% en el primer mes."
                  </p>
                  <p className="text-xs lg:text-sm text-slate-600 mt-2">— Mike Rodriguez, propietario del concesionario</p>
                </div>
              </div>
            </div>

            {/* Right side - Phone mockup */}
            <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
              <div className="max-w-md w-full">
                <div
                  className={`relative transition-all duration-1000 delay-600 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <div className="bg-slate-900 rounded-[2.5rem] p-2 shadow-2xl">
                    <div className="bg-black rounded-4xl p-1">
                      <div className="bg-white rounded-3xl overflow-hidden">
                        {/* Status bar */}
                        <div className="bg-slate-50 px-6 py-3 flex justify-between items-center text-sm">
                            <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                            <span className="font-medium text-slate-700">IA para concesionarios</span>
                          </div>
                          <div className="flex items-center gap-1 text-slate-500">
                            <Clock className="w-3 h-3" />
                            <span className="text-xs">24/7</span>
                          </div>
                        </div>

                        <div className="bg-slate-900 px-6 py-4 text-white">
                          <div className="flex items-center gap-3">
                            <img
                              src="/images/michael-ai-agent.jpg"
                              alt="Michael - AI Agent"
                              className="w-8 h-8 rounded-full object-cover mr-2 mt-1 shrink-0"
                            />
                            <div className="flex-1">
                              <h3 className="font-semibold text-sm">Michael - AI Sales Agent</h3>
                              <p className="text-xs text-slate-300">Chatea al 087 234 5678</p>
                            </div>
                            <div className="text-xs text-green-400 flex items-center gap-1">
                              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                              En línea
                            </div>
                          </div>
                        </div>

                        {/* Chat messages */}
                        <div
                          ref={chatContainerRef}
                          className="h-96 overflow-y-scroll scrollbar-hide p-4 space-y-3 bg-slate-50"
                          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                        >
                          {displayedMessages.map((message, index) => (
                            <div
                              key={index}
                              className={`flex ${message.sender === "customer" ? "justify-end" : "justify-start"}`}
                            >
                              {message.sender === "ai" && (
                                <img
                                  src="/images/michael-ai-agent.jpg"
                                  alt="Michael"
                                  className="w-6 h-6 rounded-full object-cover mr-2 mt-1 shrink-0"
                                />
                              )}
                              <div
                                className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                                  message.sender === "customer"
                                    ? "bg-slate-900 text-white rounded-br-md"
                                    : "bg-white text-slate-800 shadow-sm border border-slate-200 rounded-bl-md"
                                }`}
                              >
                                {message.text.split("\n").map((line, i) => (
                                  <div key={i}>{line}</div>
                                ))}
                              </div>
                              {message.sender === "customer" && (
                                <div className="w-6 h-6 rounded-full bg-slate-400 ml-2 mt-1 shrink-0 flex items-center justify-center text-xs text-white font-medium">
                                  C
                                </div>
                              )}
                            </div>
                          ))}

                          {/* Typing indicator */}
                          {isTyping && (
                            <div className="flex justify-start items-start">
                              <img
                                src="/images/michael-ai-agent.jpg"
                                alt="Michael"
                                className="w-6 h-6 rounded-full object-cover mr-2 mt-1 shrink-0"
                              />
                              <div className="bg-white p-3 rounded-2xl rounded-bl-md shadow-sm border border-slate-200">
                                <div className="flex space-x-1">
                                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                                  <div
                                    className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                                    style={{ animationDelay: "0.1s" }}
                                  ></div>
                                  <div
                                    className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                                    style={{ animationDelay: "0.2s" }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="p-4 bg-white border-t border-slate-200">
                          <div className="flex items-center gap-3 bg-slate-100 rounded-full px-4 py-2">
                            <span className="text-slate-500 text-sm lg:text-base flex-1">Michael está respondiendo...</span>
                            <div className="w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center">
                              <Zap className="w-3 h-3 text-white" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
