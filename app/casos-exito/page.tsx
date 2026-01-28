"use client";

import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Clock } from "lucide-react";
import Link from "next/link";

export default function CasosExitoPage() {
    return (
        <Layout>
            <section className="relative pt-32 pb-20 min-h-screen">
                <div className="absolute inset-0 bg-[#020617] z-0" />
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
                    <div className="absolute top-[30%] right-[20%] w-[40%] h-[40%] rounded-full bg-accent-primary blur-[100px]" />
                </div>

                <div className="container-max relative z-10">
                    <div className="text-center mb-16">
                        <h1 className="h1-hero mb-6 animate-fade-in-heading">
                            Resultados <span className="text-gradient-highlight">Reales</span>
                        </h1>
                        <p className="body-primary text-xl max-w-2xl mx-auto animate-fade-in-subheading">
                            Descubre cómo nuestras soluciones de IA están transformando negocios en Tijuana y Baja California.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Case Study 1 */}
                        <Card className="bg-background-card/50 backdrop-blur-md border-border-primary overflow-hidden group hover:border-accent-primary transition-all duration-300">
                            <div className="h-48 bg-background-secondary/50 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 to-transparent" />
                                <div className="absolute bottom-4 left-4">
                                    <Badge className="bg-semantic-success text-white">Automotriz</Badge>
                                </div>
                            </div>
                            <CardHeader>
                                <CardTitle className="text-2xl text-text-primary">Concesionario Premium</CardTitle>
                                <CardDescription className="text-text-secondary">
                                    Implementación de Agente de Ventas 24/7
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="grid grid-cols-3 gap-2">
                                    <div className="text-center p-2 rounded bg-background-secondary">
                                        <div className="text-xl font-bold text-accent-primary">+45%</div>
                                        <div className="text-xs text-text-secondary">Citas</div>
                                    </div>
                                    <div className="text-center p-2 rounded bg-background-secondary">
                                        <div className="text-xl font-bold text-accent-primary">24/7</div>
                                        <div className="text-xs text-text-secondary">Respuesta</div>
                                    </div>
                                    <div className="text-center p-2 rounded bg-background-secondary">
                                        <div className="text-xl font-bold text-accent-primary">-30%</div>
                                        <div className="text-xs text-text-secondary">Costos</div>
                                    </div>
                                </div>
                                <p className="text-text-secondary">
                                    "Antes perdíamos clientes fines de semana. Ahora nuestro agente IA agenda pruebas de manejo automáticamente incluso domingos a media noche."
                                </p>
                                <Button className="w-full bg-background-secondary hover:bg-accent-primary/20 text-text-primary border border-border-primary">
                                    Ver Detalles <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Case Study 2 */}
                        <Card className="bg-background-card/50 backdrop-blur-md border-border-primary overflow-hidden group hover:border-accent-primary transition-all duration-300">
                            <div className="h-48 bg-background-secondary/50 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-accent-secondary/10 to-transparent" />
                                <div className="absolute bottom-4 left-4">
                                    <Badge className="bg-accent-secondary text-white">Clínica Dental</Badge>
                                </div>
                            </div>
                            <CardHeader>
                                <CardTitle className="text-2xl text-text-primary">Clínica Sonrisas</CardTitle>
                                <CardDescription className="text-text-secondary">
                                    Gestión de Citas y Recordatorios WhatsApp
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="grid grid-cols-3 gap-2">
                                    <div className="text-center p-2 rounded bg-background-secondary">
                                        <div className="text-xl font-bold text-accent-primary">98%</div>
                                        <div className="text-xs text-text-secondary">Asistencia</div>
                                    </div>
                                    <div className="text-center p-2 rounded bg-background-secondary">
                                        <div className="text-xl font-bold text-accent-primary">Auto</div>
                                        <div className="text-xs text-text-secondary">Agenda</div>
                                    </div>
                                    <div className="text-center p-2 rounded bg-background-secondary">
                                        <div className="text-xl font-bold text-accent-primary">$3k</div>
                                        <div className="text-xs text-text-secondary">Ahorros/mes</div>
                                    </div>
                                </div>
                                <p className="text-text-secondary">
                                    "El sistema redujo nuestro ausentismo casi a cero y la recepcionista ahora puede enfocarse en atender a los pacientes en persona."
                                </p>
                                <Button className="w-full bg-background-secondary hover:bg-accent-primary/20 text-text-primary border border-border-primary">
                                    Ver Detalles <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
