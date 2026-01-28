"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Send, Building2, Stethoscope, Home, ShoppingBag, Briefcase, Zap } from "lucide-react";

export function SmartContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [industry, setIndustry] = useState("");
    const [step, setStep] = useState(1);

    const industries = [
        { id: "clinica", label: "Clínica / Salud", icon: <Stethoscope className="w-5 h-5" />, needs: ["Agenda de Pacientes", "Recordatorios WhatsApp", "Historial Clínico IA"] },
        { id: "bienes-raices", label: "Bienes Raíces", icon: <Home className="w-5 h-5" />, needs: ["Calificación de Leads", "Agendamiento de Visitas", "Seguimiento Automático"] },
        { id: "retail", label: "E-commerce / Retail", icon: <ShoppingBag className="w-5 h-5" />, needs: ["Atención al Cliente 24/7", "Recuperación de Carrito", "Recomendación de Productos"] },
        { id: "servicios", label: "Servicios Profesionales", icon: <Briefcase className="w-5 h-5" />, needs: ["Onboarding de Clientes", "Gestión de Documentos", "Soporte Técnico"] },
        { id: "otro", label: "Otro / Startup", icon: <Zap className="w-5 h-5" />, needs: ["Consultoría General", "Desarrollo a Medida", "MVP"] }
    ];

    const currentIndustry = industries.find(i => i.id === industry);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        alert("Mensaje enviado con éxito. Un especialista de tu industria te contactará pronto.");
    };

    return (
        <Card className="bg-background-card/50 backdrop-blur-md border-border-primary overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-highlight-gradient" />

            <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Industry Selection */}
                    <div className="space-y-4">
                        <Label className="text-lg font-semibold text-text-primary">¿A qué industria pertenece tu empresa?</Label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {industries.map((item) => (
                                <div
                                    key={item.id}
                                    onClick={() => setIndustry(item.id)}
                                    className={`cursor-pointer p-4 rounded-xl border transition-all duration-200 flex items-center gap-3 ${industry === item.id
                                            ? "bg-accent-primary/20 border-accent-primary shadow-glow-accent"
                                            : "bg-background-input border-border-primary hover:border-text-secondary hover:bg-background-secondary"
                                        }`}
                                >
                                    <div className={`${industry === item.id ? "text-accent-primary" : "text-text-secondary"}`}>
                                        {item.icon}
                                    </div>
                                    <span className={`font-medium ${industry === item.id ? "text-text-primary" : "text-text-secondary"}`}>
                                        {item.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dynamic Needs Section */}
                    <div className={`space-y-4 transition-all duration-500 ${industry ? "opacity-100 max-h-[500px]" : "opacity-50 blur-sm pointer-events-none max-h-[200px]"}`}>
                        <div className="space-y-4">
                            <Label className="text-text-primary">¿Qué desafíos te gustaría resolver con IA? <span className="text-text-secondary text-sm font-normal">(Selecciona varios)</span></Label>

                            {currentIndustry ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {currentIndustry.needs.map((need, idx) => (
                                        <div key={idx} className="flex items-center space-x-3 p-3 rounded-lg bg-background-input border border-border-primary">
                                            <Checkbox id={`need-${idx}`} className="border-text-secondary data-[state=checked]:bg-accent-primary data-[state=checked]:border-accent-primary" />
                                            <Label htmlFor={`need-${idx}`} className="text-text-primary cursor-pointer w-full font-normal">
                                                {need}
                                            </Label>
                                        </div>
                                    ))}
                                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-background-input border border-border-primary">
                                        <Checkbox id="need-other" className="border-text-secondary data-[state=checked]:bg-accent-primary data-[state=checked]:border-accent-primary" />
                                        <Label htmlFor="need-other" className="text-text-primary cursor-pointer w-full font-normal">
                                            Otro / No estoy seguro
                                        </Label>
                                    </div>
                                </div>
                            ) : (
                                <div className="p-8 text-center text-text-secondary bg-background-input/50 rounded-xl border border-dashed border-border-primary">
                                    Selecciona una industria arriba para ver opciones personalizadas
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="h-px bg-border-primary" />

                    {/* Contact Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="sc-name" className="text-text-primary">Nombre Completo</Label>
                            <Input id="sc-name" placeholder="Tu nombre" className="bg-background-input border-border-primary text-text-primary h-12" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="sc-company" className="text-text-primary">Empresa</Label>
                            <Input id="sc-company" placeholder="Nombre de tu empresa" className="bg-background-input border-border-primary text-text-primary h-12" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="sc-email" className="text-text-primary">Email Corporativo</Label>
                            <Input id="sc-email" type="email" placeholder="nombre@empresa.com" className="bg-background-input border-border-primary text-text-primary h-12" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="sc-phone" className="text-text-primary">Teléfono / WhatsApp</Label>
                            <Input id="sc-phone" type="tel" placeholder="+52 ..." className="bg-background-input border-border-primary text-text-primary h-12" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="sc-budget" className="text-text-primary">Presupuesto Estimado (USD)</Label>
                        <Select>
                            <SelectTrigger id="sc-budget" className="bg-background-input border-border-primary text-text-primary h-12">
                                <SelectValue placeholder="Selecciona un rango" />
                            </SelectTrigger>
                            <SelectContent className="bg-background-card border-border-primary text-text-primary">
                                <SelectItem value="low">&lt; $1,000 / mes</SelectItem>
                                <SelectItem value="medium">$1,000 - $5,000 / mes</SelectItem>
                                <SelectItem value="high">$5,000 - $10,000 / mes</SelectItem>
                                <SelectItem value="enterprise">$10,000+ / mes (Enterprise)</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="sc-message" className="text-text-primary">Detalles Adicionales</Label>
                        <Textarea id="sc-message" placeholder="Cuéntanos más sobre tus objetivos..." className="min-h-[100px] bg-background-input border-border-primary text-text-primary" />
                    </div>

                    <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-highlight-gradient hover:opacity-90 text-white border-0 py-6 text-lg font-semibold shadow-glow-highlight"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            "Analizando requerimientos..."
                        ) : (
                            <>
                                Solicitar Propuesta Inteligente <Send className="ml-2 h-5 w-5" />
                            </>
                        )}
                    </Button>

                    <p className="text-center text-xs text-text-secondary">
                        Al enviar este formulario aceptas nuestra política de privacidad. Tus datos están seguros.
                    </p>
                </form>
            </CardContent>
        </Card>
    );
}
