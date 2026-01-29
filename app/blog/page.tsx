import { Layout } from "@/components/layout";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";

import { blogService } from "@/lib/blog-service";

export const revalidate = 3600; // ISR: Revalidate every hour

export default async function BlogPage() {
    const articles = await blogService.getPosts();

    return (
        <Layout>
            <section className="relative pt-32 pb-20 min-h-screen overflow-hidden">
                {/* <div className="absolute inset-0 bg-background-primary z-0" /> */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                    <div className="absolute top-[10%] right-[20%] w-[40%] h-[40%] rounded-full bg-accent-primary/20 blur-[120px] animate-pulse-glow" />
                    <div className="absolute bottom-[20%] left-[10%] w-[30%] h-[30%] rounded-full bg-accent-secondary/20 blur-[100px]" />
                </div>

                <div className="container-max relative z-10 px-4">
                    {/* Header with Futuristic Style */}
                    <div className="text-center mb-20 relative">
                        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-accent-secondary/30 bg-accent-secondary/10 backdrop-blur-md animate-fade-in-badge">
                            <span className="text-accent-secondary text-sm font-sans tracking-wider uppercase font-semibold">Ai-Studio Hub</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-white tracking-tight animate-fade-in-heading">
                            INSIGHTS <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-secondary to-accent-primary animate-pulse-glow">FUTURISTAS</span>
                        </h1>
                        <p className="font-sans text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-subheading">
                            Explorando la frontera de la Inteligencia Artificial y la automatización empresarial.
                        </p>
                    </div>

                    {/* Search Bar (Optional, can be added back if needed, but keeping clean for now) */}

                    {/* Bento Grid Layout - Glassmorphism & Neon */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[400px] animate-fade-in-trust">
                        {articles.map((article, index) => {
                            // First item spans 8 columns (Large feature)
                            // Second item spans 4 columns (Sidebar feature)
                            // Others follow grid logic
                            const colSpan = index === 0 ? "lg:col-span-8" : index === 1 ? "lg:col-span-4" : "lg:col-span-4";

                            return (
                                <Link href={`/blog/${article.slug}`} key={article.id} className={`${colSpan} group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:scale-[1.01] hover:shadow-glow-highlight hover:border-accent-primary/50`}>
                                    {/* Dark Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 z-10" />

                                    {/* Abstract/Neon Background */}
                                    <div className="absolute inset-0 bg-background-secondary transform group-hover:scale-105 transition-transform duration-700">
                                        {/* Dynamic gradient based on index/category could go here */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 via-transparent to-accent-secondary/20 opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
                                        {/* Grid pattern overlay */}
                                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

                                        {/* Optional: Add image if available in real data */}
                                        {/* <Image src={article.image} alt={article.title} fill className="object-cover opacity-50 group-hover:opacity-60 transition-opacity" /> */}
                                    </div>

                                    <div className="relative z-20 h-full flex flex-col justify-end p-8">
                                        <div className="mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            <Badge className="bg-accent-primary/20 hover:bg-accent-primary/40 text-accent-primary border-accent-primary/50 backdrop-blur-sm mb-3">
                                                {article.category}
                                            </Badge>
                                            <h3 className={`font-display font-bold text-white mb-2 leading-tight ${index === 0 ? 'text-3xl md:text-4xl' : 'text-xl'}`}>
                                                {article.title}
                                            </h3>
                                            <p className="text-gray-300 font-sans text-sm md:text-base line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                                {article.excerpt}
                                            </p>
                                        </div>

                                        <div className="flex items-center justify-between text-xs text-gray-400 border-t border-white/10 pt-4 mt-2">
                                            <div className="flex items-center gap-3">
                                                <span className="flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
                                                <span className="flex items-center gap-1"><Clock size={12} /> {article.readTime}</span>
                                            </div>
                                            <ArrowRight className="text-accent-primary -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>
        </Layout>
    );
}
