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
            <section className="relative pt-32 pb-20 min-h-screen">
                <div className="absolute inset-0 bg-background-primary z-0" />
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
                    <div className="absolute bottom-[20%] left-[10%] w-[30%] h-[30%] rounded-full bg-accent-primary blur-[100px]" />
                </div>

                <div className="container-max relative z-10">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="h1-hero mb-6 animate-fade-in-heading">
                            Insights y <span className="text-gradient-highlight">Tendencias</span>
                        </h1>
                        <p className="body-primary text-xl max-w-2xl mx-auto animate-fade-in-subheading mb-8">
                            Explora nuestros artículos sobre inteligencia artificial, marketing digital y el futuro de los negocios.
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-md mx-auto relative animate-fade-in-buttons">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-placeholder w-5 h-5" />
                            <Input
                                type="text"
                                placeholder="Buscar artículos..."
                                className="pl-10 bg-background-input border-border-primary text-text-primary rounded-full py-6"
                            />
                        </div>
                    </div>

                    {/* Featured Categories (Optional) */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-trust">
                        {["Todos", "Tendencias", "Automatización", "SEO", "Estrategia", "Herramientas"].map((cat) => (
                            <Badge
                                key={cat}
                                variant="outline"
                                className="cursor-pointer hover:bg-accent-primary hover:text-white hover:border-accent-primary transition-all px-4 py-2 text-sm"
                            >
                                {cat}
                            </Badge>
                        ))}
                    </div>

                    {/* Articles Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article, index) => (
                            <Link href={`/blog/${article.slug}`} key={article.id} className="block h-full">
                                <Card className="bg-background-card border-border-primary overflow-hidden hover:border-border-highlight transition-all duration-300 group flex flex-col h-full animate-slide-in-from-bottom-2" style={{ animationDelay: `${index * 100}ms` }}>
                                    <div className="relative h-48 w-full bg-background-secondary overflow-hidden">
                                        {/* Placeholder Image Logic */}
                                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-background-secondary to-background-card text-text-secondary">
                                            <span className="text-4xl font-bold opacity-10">Ai</span>
                                        </div>
                                        {/* <Image src={article.image} alt={article.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" /> */}
                                        <div className="absolute top-4 left-4">
                                            <Badge className="bg-accent-secondary text-white hover:bg-accent-secondary/90">
                                                {article.category}
                                            </Badge>
                                        </div>
                                    </div>

                                    <CardHeader className="pb-2">
                                        <div className="flex items-center gap-4 text-xs text-text-secondary mb-2">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                {article.date}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {article.readTime}
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-primary transition-colors line-clamp-2">
                                            {article.title}
                                        </h3>
                                    </CardHeader>

                                    <CardContent className="flex-grow">
                                        <p className="text-text-secondary text-sm line-clamp-3">
                                            {article.excerpt}
                                        </p>
                                    </CardContent>

                                    <CardFooter className="pt-0">
                                        <Button variant="link" className="p-0 h-auto text-accent-primary hover:text-accent-secondary group-hover:translate-x-1 transition-transform">
                                            Leer más <ArrowRight className="ml-1 w-4 h-4" />
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </Link>
                        ))}
                    </div>

                    {/* Pagination Placeholder */}
                    <div className="mt-16 flex justify-center">
                        <Button variant="outline" className="border-border-primary text-text-primary hover:bg-background-secondary">
                            Cargar más artículos
                        </Button>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
