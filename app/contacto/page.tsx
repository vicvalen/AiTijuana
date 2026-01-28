"use client";

import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";
import { SmartContactForm } from "@/components/smart-contact-form";

export default function ContactPage() {
    return (
        <Layout>
            <section className="relative pt-32 pb-20 min-h-screen">

                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
                    <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-accent-secondary blur-[100px]" />
                </div>

                <div className="container-max relative z-10">
                    <div className="text-center mb-16">
                        <h1 className="h1-hero mb-6 animate-fade-in-heading">
                            Hablemos de tu <span className="text-gradient-highlight">Próximo Proyecto</span>
                        </h1>
                        <p className="body-primary text-xl max-w-2xl mx-auto animate-fade-in-subheading">
                            Cuéntanos sobre tu industria y necesidades para diseñar la solución de IA perfecta para ti.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Contact Info - Takes 4 columns */}
                        <div className="lg:col-span-4 space-y-8 animate-slide-in-from-left-2">
                            <Card className="bg-background-card/50 backdrop-blur-md border-border-primary">
                                <CardHeader>
                                    <CardTitle className="text-text-primary">Información de Contacto</CardTitle>
                                    <CardDescription className="text-text-secondary">
                                        Encuéntranos en nuestros canales oficiales.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="p-3 bg-background-secondary rounded-lg text-accent-primary">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-text-primary">Ubicación</h4>
                                            <p className="text-text-secondary">
                                                Tijuana, Baja California, México
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="p-3 bg-background-secondary rounded-lg text-accent-primary">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-text-primary">Email</h4>
                                            <p className="text-text-secondary">
                                                contacto@ai-studiomarketing.com
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="p-3 bg-background-secondary rounded-lg text-accent-primary">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-text-primary">Teléfono</h4>
                                            <p className="text-text-secondary">
                                                +52 (664) 794-7666
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <div className="p-6 rounded-2xl bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border border-border-highlight">
                                <div className="flex items-center gap-3 mb-4">
                                    <MessageSquare className="w-6 h-6 text-accent-primary" />
                                    <h3 className="text-xl font-bold text-text-primary">¿Dudas rápidas?</h3>
                                </div>
                                <p className="text-text-secondary mb-4">
                                    Agenda una consulta gratuita de 15 minutos para evaluar tus necesidades.
                                </p>
                                <Button className="w-full bg-highlight-gradient hover:opacity-90 text-white border-0 transition-transform hover:scale-105">
                                    Agendar Llamada
                                </Button>
                            </div>
                        </div>

                        {/* Smart Form - Takes 8 columns */}
                        <div className="lg:col-span-8 animate-slide-in-from-right-2">
                            <SmartContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
