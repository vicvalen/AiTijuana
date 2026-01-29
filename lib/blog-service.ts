export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string; // HTML content from TipTap
    category: string;
    date: string;
    readTime: string;
    image: string;
    tags: string[];
}

// Mock Database
const posts: BlogPost[] = [
    {
        id: "1",
        slug: "futuro-marketing-digital-ia",
        title: "El Futuro del Marketing Digital con IA",
        excerpt: "Descubre cómo la inteligencia artificial está revolucionando la forma en que las marcas conectan con sus audiencias.",
        content: `
            <p>La inteligencia artificial (IA) no es solo una tendencia pasajera; es una fuerza transformadora que está redefiniendo el marketing digital.</p>
            <h2>Personalización a Gran Escala</h2>
            <p>Imagina poder hablar con cada uno de tus miles de clientes como si fueran el único. La IA permite analizar datos de comportamiento en tiempo real para ofrecer recomendaciones de productos, contenido y ofertas hiper-personalizadas.</p>
            <h2>Automatización Creativa</h2>
            <p>Herramientas generativas están ayudando a crear copys, imágenes y videos en segundos, permitiendo a los equipos creativos enfocarse en la estrategia y no solo en la producción.</p>
            <h2>Conclusión</h2>
            <p>Adoptar estas tecnologías hoy no es una opción, es una necesidad para mantenerse competitivo.</p>
        `,
        category: "Tendencias",
        date: "Oct 12, 2023",
        readTime: "5 min",
        image: "/images/blog/ai-marketing.jpg",
        tags: ["IA", "Marketing", "Futuro"],
    },
    {
        id: "2",
        slug: "agentes-inteligentes-soporte",
        title: "Agentes Inteligentes: Más allá del Soporte",
        excerpt: "Los Agentes ya no son solo para responder preguntas frecuentes. Aprende cómo pueden cerrar ventas automáticamente.",
        content: `
            <p>Los chatbots tradicionales eran frustrantes. Los Agentes de IA modernos son conversacionales, empáticos y resolutivos.</p>
            <h2>De Soporte a Ventas</h2>
            <p>Un agente bien entrenado puede detectar la intención de compra y guiar al usuario a través del embudo de ventas, recomendando productos y resolviendo objeciones al instante.</p>
            <h2>Disponibilidad 24/7</h2>
            <p>Tu negocio nunca cierra. Los agentes atienden a clientes nocturnos o de otras zonas horarias con la misma calidad que un humano.</p>
        `,
        category: "Automatización",
        date: "Oct 15, 2023",
        readTime: "4 min",
        image: "/images/blog/chatbots.jpg",
        tags: ["Chatbots", "Ventas", "Automatización"],
    },
    {
        id: "3",
        slug: "optimizacion-seo-era-ia",
        title: "Optimización SEO en la Era de la IA",
        excerpt: "Estrategias clave para mantener tu posicionamiento en buscadores frente a los nuevos algoritmos de IA.",
        content: `
            <p>Google está integrando IA en sus resultados (SGE). ¿Qué significa esto para tu SEO?</p>
            <h2>Calidad sobre Cantidad</h2>
            <p>El contenido generado por IA inunda la web. Para destacar, necesitas aportar valor real, experiencia y autoridad (E-E-A-T).</p>
            <h2>Búsquedas Conversacionales</h2>
            <p>Las personas buscan como hablan. Optimiza para preguntas largas y lenguaje natural.</p>
        `,
        category: "SEO",
        date: "Oct 20, 2023",
        readTime: "6 min",
        image: "/images/blog/seo-ai.jpg",
        tags: ["SEO", "Google", "Estrategia"],
    },
];

export const blogService = {
    getPosts: async (): Promise<BlogPost[]> => {
        // Simulate API delay
        // await new Promise(resolve => setTimeout(resolve, 100));
        return posts;
    },

    getPostBySlug: async (slug: string): Promise<BlogPost | undefined> => {
        // await new Promise(resolve => setTimeout(resolve, 100));
        return posts.find(post => post.slug === slug);
    }
};
