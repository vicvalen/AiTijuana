"use client";

import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ThankYouPage() {
    return (
        <Layout>
            <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-[#020617] z-0" />
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
                    <div className="absolute top-[30%] left-[20%] w-[50%] h-[50%] rounded-full bg-accent-primary blur-[120px]" />
                </div>

                <div className="container-max relative z-10 text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center justify-center p-6 bg-accent-primary/10 rounded-full mb-8 text-accent-primary"
                    >
                        <CheckCircle size={64} className="stroke-[1.5]" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="h1-hero mb-6"
                    >
                        ¡Mensaje <span className="text-gradient-highlight">Recibido!</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="body-primary text-xl max-w-2xl mx-auto mb-10 text-text-secondary"
                    >
                        Gracias por contactar a Ai-Studio. Hemos recibido tu solicitud correctamente.
                        Un especialista en tu industria revisará tus requerimientos y te contactará en breve.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link href="/">
                            <Button size="lg" className="bg-background-secondary hover:bg-background-card border border-border-primary text-text-primary">
                                Volver al Inicio
                            </Button>
                        </Link>
                        <Link href="/blog">
                            <Button size="lg" className="bg-highlight-gradient text-white hover:opacity-90">
                                Leer nuestro Blog <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
}
