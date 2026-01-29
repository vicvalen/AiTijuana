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

// Generate Static Params for SSG/ISR (Optional but recommended)
export async function generateStaticParams() {
    const posts = await blogService.getPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: Props) {
    const post = await blogService.getPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <Layout>
            <article className="min-h-screen pt-32 pb-20 relative">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-background-primary z-0" />
                <div className="absolute top-0 left-0 w-full h-[50vh] overflow-hidden z-0 opacity-20 pointer-events-none">
                    <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent-primary blur-[120px]" />
                </div>

                <div className="container-max relative z-10 px-4 sm:px-6">
                    {/* Back Button */}
                    <Link href="/blog">
                        <Button variant="ghost" className="mb-8 text-text-secondary hover:text-text-primary hover:bg-white/5 pl-0">
                            <ArrowLeft className="mr-2 w-4 h-4" /> Volver al Blog
                        </Button>
                    </Link>

                    {/* Header */}
                    <header className="mb-12 max-w-4xl">
                        <div className="flex flex-wrap gap-4 mb-6">
                            <Badge className="bg-accent-secondary text-white hover:bg-accent-secondary/90 px-3 py-1 text-sm">
                                {post.category}
                            </Badge>
                            <div className="flex items-center gap-4 text-sm text-text-secondary">
                                <div className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    {post.date}
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    {post.readTime}
                                </div>
                            </div>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
                            {post.title}
                        </h1>

                        <p className="text-xl text-text-secondary leading-relaxed max-w-2xl">
                            {post.excerpt}
                        </p>
                    </header>

                    {/* Featured Image */}
                    <div className="mb-16 rounded-3xl overflow-hidden aspect-video relative bg-background-secondary border border-border-primary/50 shadow-2xl">
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-background-secondary to-background-card text-text-secondary">
                            {/* Placeholder fallback if image load fails or is just a path string */}
                            <span className="text-6xl font-bold opacity-10">Ai</span>
                        </div>
                        {/* <Image 
                            src={post.image} 
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        /> */}
                    </div>

                    {/* Content */}
                    <div className="max-w-3xl mx-auto">
                        <div
                            className="prose prose-invert prose-lg max-w-none 
                            prose-headings:text-text-primary prose-headings:font-bold
                            prose-p:text-text-secondary prose-p:leading-relaxed
                            prose-strong:text-text-primary
                            prose-a:text-accent-primary prose-a:no-underline hover:prose-a:underline
                            prose-li:text-text-secondary"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        {/* Footer / Share */}
                        <div className="mt-16 pt-8 border-t border-border-primary flex flex-wrap justify-between items-center gap-4">
                            <div className="flex gap-2">
                                {post.tags.map(tag => (
                                    <span key={tag} className="text-sm text-text-secondary bg-background-card px-3 py-1 rounded-full border border-border-primary">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                            <Button variant="outline" className="gap-2 border-border-primary text-text-primary hover:bg-background-secondary">
                                <Share2 className="w-4 h-4" /> Compartir
                            </Button>
                        </div>
                    </div>
                </div>
            </article>
        </Layout>
    );
}
