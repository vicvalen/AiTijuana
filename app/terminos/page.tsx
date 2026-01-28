import { Layout } from "@/components/layout";

export default function TermsPage() {
    return (
        <Layout>
            <section className="relative pt-32 pb-20 min-h-screen">
                <div className="container-max">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="h1-hero mb-8">Términos y Condiciones</h1>

                        <div className="prose prose-invert prose-lg max-w-none text-text-secondary">
                            <p>Última actualización: 03 de Diciembre de 2025</p>

                            <h2>1. Aceptación de los Términos</h2>
                            <p>
                                Al acceder y utilizar este sitio web, usted acepta estar sujeto a estos Términos y Condiciones de Uso, todas las leyes y regulaciones aplicables, y acepta que es responsable del cumplimiento de cualquier ley local aplicable. Si no está de acuerdo con alguno de estos términos, tiene prohibido usar o acceder a este sitio.
                            </p>

                            <h2>2. Licencia de Uso</h2>
                            <p>
                                Se concede permiso para descargar temporalmente una copia de los materiales (información o software) en el sitio web de Ai-Studio solo para visualización transitoria personal y no comercial. Esta es la concesión de una licencia, no una transferencia de título, y bajo esta licencia usted no puede:
                            </p>
                            <ul>
                                <li>Modificar o copiar los materiales;</li>
                                <li>Usar los materiales para cualquier propósito comercial, o para cualquier exhibición pública (comercial o no comercial);</li>
                                <li>Intentar descompilar o realizar ingeniería inversa de cualquier software contenido en el sitio web de Ai-Studio;</li>
                                <li>Eliminar cualquier derecho de autor u otras notaciones de propiedad de los materiales; o</li>
                                <li>Transferir los materiales a otra persona o "reflejar" los materiales en cualquier otro servidor.</li>
                            </ul>

                            <h2>3. Descargo de Responsabilidad</h2>
                            <p>
                                Los materiales en el sitio web de Ai-Studio se proporcionan "tal cual". Ai-Studio no ofrece garantías, expresas o implícitas, y por la presente renuncia y niega todas las otras garantías, incluyendo, sin limitación, garantías implícitas o condiciones de comerciabilidad, idoneidad para un propósito particular, o no infracción de propiedad intelectual u otra violación de derechos.
                            </p>

                            <h2>4. Limitaciones</h2>
                            <p>
                                En ningún caso Ai-Studio o sus proveedores serán responsables de ningún daño (incluyendo, sin limitación, daños por pérdida de datos o ganancias, o debido a la interrupción del negocio) que surjan del uso o la incapacidad de usar los materiales en el sitio web de Ai-Studio, incluso si Ai-Studio o un representante autorizado de Ai-Studio ha sido notificado oralmente o por escrito de la posibilidad de tal daño.
                            </p>

                            <h2>5. Ley Aplicable</h2>
                            <p>
                                Estos términos y condiciones se rigen e interpretan de acuerdo con las leyes de México y usted se somete irrevocablemente a la jurisdicción exclusiva de los tribunales en ese Estado o ubicación.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
