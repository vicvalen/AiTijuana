import { Layout } from "@/components/layout";

export default function PrivacyPage() {
    return (
        <Layout>
            <section className="relative pt-32 pb-20 min-h-screen">
                <div className="container-max">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="h1-hero mb-8">Política de Privacidad</h1>

                        <div className="prose prose-invert prose-lg max-w-none text-text-secondary">
                            <p>Última actualización: 03 de Diciembre de 2025</p>

                            <h2>1. Introducción</h2>
                            <p>
                                En Ai-Studio ("nosotros", "nuestro"), respetamos su privacidad y nos comprometemos a proteger sus datos personales. Esta política de privacidad le informará sobre cómo cuidamos sus datos personales cuando visita nuestro sitio web y le informará sobre sus derechos de privacidad y cómo la ley lo protege.
                            </p>

                            <h2>2. Los datos que recopilamos sobre usted</h2>
                            <p>
                                Podemos recopilar, usar, almacenar y transferir diferentes tipos de datos personales sobre usted, que hemos agrupado de la siguiente manera:
                            </p>
                            <ul>
                                <li><strong>Datos de Identidad:</strong> incluye nombre, apellido, nombre de usuario o identificador similar.</li>
                                <li><strong>Datos de Contacto:</strong> incluye dirección de correo electrónico y números de teléfono.</li>
                                <li><strong>Datos Técnicos:</strong> incluye dirección de protocolo de internet (IP), sus datos de inicio de sesión, tipo y versión del navegador, configuración de zona horaria y ubicación, tipos y versiones de complementos del navegador, sistema operativo y plataforma, y otra tecnología en los dispositivos que utiliza para acceder a este sitio web.</li>
                            </ul>

                            <h2>3. Cómo usamos sus datos personales</h2>
                            <p>
                                Solo usaremos sus datos personales cuando la ley nos lo permita. Más comúnmente, usaremos sus datos personales en las siguientes circunstancias:
                            </p>
                            <ul>
                                <li>Donde necesitemos realizar el contrato que estamos a punto de celebrar o hemos celebrado con usted.</li>
                                <li>Donde sea necesario para nuestros intereses legítimos (o los de un tercero) y sus intereses y derechos fundamentales no anulen esos intereses.</li>
                                <li>Donde necesitemos cumplir con una obligación legal.</li>
                            </ul>

                            <h2>4. Seguridad de los datos</h2>
                            <p>
                                Hemos implementado medidas de seguridad adecuadas para evitar que sus datos personales se pierdan accidentalmente, se usen o se acceda a ellos de manera no autorizada, se alteren o se divulguen.
                            </p>

                            <h2>5. Sus derechos legales</h2>
                            <p>
                                Bajo ciertas circunstancias, tiene derechos bajo las leyes de protección de datos en relación con sus datos personales, incluyendo el derecho a solicitar acceso, corrección, borrado, restricción, transferencia, u objeción al procesamiento.
                            </p>

                            <h2>6. Contacto</h2>
                            <p>
                                Si tiene alguna pregunta sobre esta política de privacidad o nuestras prácticas de privacidad, contáctenos en: contacto@ai-studiomarketing.com
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
