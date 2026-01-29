import { Layout } from "@/components/layout";
import { blogService } from "@/lib/blog-service";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface Props {
    params: {
        slug: string;
    };
}

// Generate Metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = await blogService.getPostBySlug(params.slug);

    if (!post) {
        return {
            title: "Artículo no encontrado | Ai-Studio",
        };
    }

    return {
        title: `${post.title} | Ai-Studio Blog`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: [post.image],
            type: 'article',
        },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const post = await blogService.getPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <Layout>
            <article className="min-h-screen pt-32 pb-20 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-background-primary z-0" />
                {/* Cyberpunk Grid Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none z-0 mix-blend-overlay"></div>

                {/* Floating Orbs */}
                <div className="absolute top-0 left-0 w-full h-[50vh] overflow-hidden z-0 opacity-30 pointer-events-none">
                    <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent-primary blur-[150px] animate-pulse-glow" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent-secondary blur-[150px] animate-float" />
                </div>

                <div className="container-max relative z-10 px-4 sm:px-6">
                    {/* Navigation */}
                    <div className="flex items-center justify-between mb-12">
                        <Link href="/blog">
                            <Button variant="ghost" className="text-text-secondary hover:text-white hover:bg-white/5 pl-0 group font-sans">
                                <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Volver al Hub
                            </Button>
                        </Link>
                    </div>

                    {/* Article Header */}
                    <header className="mb-16 max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-accent-secondary/30 bg-accent-secondary/10 backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-accent-secondary animate-pulse"></span>
                            <span className="text-accent-secondary text-xs font-display tracking-widest uppercase">{post.category}</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 leading-tight tracking-tight text-balance">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-text-secondary font-sans border-t border-b border-white/10 py-4 max-w-2xl mx-auto">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-accent-primary" />
                                {post.date}
                            </div>
                            <div className="w-px h-4 bg-white/10"></div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-accent-primary" />
                                {post.readTime} Lectura
                            </div>
                            <div className="w-px h-4 bg-white/10"></div>
                            <div className="flex items-center gap-2">
                                <span className="text-accent-primary">Autor:</span> Michael AI
                            </div>
                        </div>
                    </header>

                    {/* Featured Image - Glass Frame */}
                    <div className="mb-20 max-w-5xl mx-auto rounded-3xl p-1 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm">
                        <div className="rounded-[20px] overflow-hidden aspect-video relative bg-background-secondary shadow-2xl">
                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-background-secondary to-background-card">
                                <span className="font-display text-8xl font-bold opacity-5 text-white tracking-tighter">Ai-STUDIO</span>
                            </div>
                            {/* <Image src={post.image} alt={post.title} fill className="object-cover" priority /> */}
                        </div>
                    </div>

                    {/* Content - Immersive Reader */}
                    <div className="max-w-3xl mx-auto relative">
                        {/* Sidebar Progress (Decoration) */}
                        <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent-primary/50 to-transparent hidden xl:block"></div>

                        <div
                            className="prose prose-invert prose-lg max-w-none 
                            prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-white
                            prose-p:font-sans prose-p:text-text-secondary prose-p:leading-8 prose-p:font-light
                            prose-strong:text-white prose-strong:font-semibold
                            prose-a:text-accent-primary prose-a:no-underline hover:prose-a:underline hover:prose-a:decoration-2 hover:prose-a:decoration-accent-secondary
                            prose-blockquote:border-l-accent-primary prose-blockquote:bg-white/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
                            prose-code:text-accent-secondary prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono
                            prose-li:text-text-secondary"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        {/* Footer / Tags */}
                        <div className="mt-20 pt-10 border-t border-white/10">
                            <h4 className="font-display font-bold text-white mb-4">Etiquetas:</h4>
                            <div className="flex flex-wrap gap-2 mb-10">
                                {post.tags.map(tag => (
                                    <span key={tag} className="text-xs font-mono text-accent-secondary bg-accent-secondary/10 px-3 py-1.5 rounded border border-accent-secondary/20 hover:bg-accent-secondary/20 transition-colors cursor-pointer">
                                        #{tag.toUpperCase()}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                                <div>
                                    <p className="text-white font-bold font-display text-lg mb-1">¿Te gustó este artículo?</p>
                                    <p className="text-text-secondary text-sm">Compártelo con tu red.</p>
                                </div>
                                <Button variant="outline" className="gap-2 border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white transition-all font-sans">
                                    <Share2 className="w-4 h-4" /> Compartir en LinkedIn
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </Layout>
    );
}
