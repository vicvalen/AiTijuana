
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, company, industry, needs, message, budget } = body;

        const { data, error } = await resend.emails.send({
            from: 'Ai-Studio Web <contacto@aitijuana.studio>',
            to: ['contacto@aitijuana.studio'],
            subject: `Nuevo Lead: ${name} - ${company || 'Sin Empresa'}`,
            html: `
                <div style="font-family: Arial, sans-serif; color: #333;">
                    <h1 style="color: #0056b3;">Nuevo Lead desde Ai-Studio</h1>
                    <hr />
                    <h3>Información del Contacto</h3>
                    <p><strong>Nombre:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Teléfono:</strong> ${phone}</p>
                    <p><strong>Empresa:</strong> ${company || 'N/A'}</p>
                    
                    <h3>Detalles del Proyecto</h3>
                    <p><strong>Industria:</strong> ${industry}</p>
                    <p><strong>Presupuesto:</strong> ${budget}</p>
                    <p><strong>Fuente:</strong> ${body.source || 'No especificada'}</p>
                    <p><strong>Necesidades:</strong> ${needs ? Object.entries(needs).filter(([_, v]) => v).map(([k]) => k).join(', ') : 'Ninguna'}</p>
                    
                    <h3>Mensaje</h3>
                    <div style="background-color: #f9f9f9; padding: 10px; border-radius: 5px;">
                        ${message}
                    </div>
                </div>
            `,
        });

        if (error) {
            console.error("Resend API Error:", error);
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        console.error("Internal Server Error:", error);
        return Response.json({ error }, { status: 500 });
    }
}
