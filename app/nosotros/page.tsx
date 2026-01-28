import { Layout } from "@/components/layout";
import { AITeamSection } from "@/components/ai-team-section";
import { CheckCircle2, Users, Target, Zap } from "lucide-react";

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-background-primary z-0" />
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent-primary blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent-secondary blur-[120px]" />
        </div>

        <div className="container-max relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="h1-hero mb-6 animate-fade-in-heading">
              Transformando el Futuro con{" "}
              <span className="text-gradient-highlight">Inteligencia Artificial</span>
            </h1>
            <p className="body-primary text-xl animate-fade-in-subheading">
              Somos una agencia pionera en Tijuana, dedicada a potenciar negocios mediante soluciones de IA innovadoras y estrategias digitales de vanguardia.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background-secondary/50">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="h2-section">Nuestra Historia</h2>
              <p className="body-primary">
                Nacimos con una visión clara: democratizar el acceso a la inteligencia artificial para las empresas locales. Lo que comenzó como un pequeño equipo de entusiastas de la tecnología, hoy es una agencia líder que transforma la manera en que los negocios operan y crecen.
              </p>
              <p className="body-primary">
                Creemos que la tecnología no debe ser una barrera, sino un puente hacia nuevas oportunidades. Por eso, combinamos creatividad humana con potencia computacional para crear soluciones que realmente importan.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden border border-border-primary bg-background-card">
               {/* Placeholder for an image or graphic */}
               <div className="absolute inset-0 flex items-center justify-center text-text-secondary opacity-20">
                  <Users size={120} />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="h2-section mb-4">Nuestros Valores</h2>
            <p className="body-primary max-w-2xl mx-auto">
              Los pilares que guían cada línea de código y cada estrategia que diseñamos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8 text-accent-primary" />,
                title: "Innovación Constante",
                description: "Nunca nos conformamos. Siempre buscamos la siguiente gran tecnología para impulsar a nuestros clientes."
              },
              {
                icon: <CheckCircle2 className="w-8 h-8 text-semantic-success" />,
                title: "Excelencia y Calidad",
                description: "Cada proyecto es una obra maestra. Nos obsesiona el detalle y el rendimiento impecable."
              },
              {
                icon: <Zap className="w-8 h-8 text-semantic-warning" />,
                title: "Velocidad y Eficiencia",
                description: "Entendemos que el tiempo es dinero. Nuestras soluciones de IA aceleran tus procesos."
              }
            ].map((value, index) => (
              <div key={index} className="card-base hover:border-border-highlight transition-colors duration-300">
                <div className="mb-4 p-3 bg-background-secondary rounded-lg w-fit">
                  {value.icon}
                </div>
                <h3 className="h3-card-title mb-3">{value.title}</h3>
                <p className="body-secondary">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <AITeamSection />
    </Layout>
  );
}
