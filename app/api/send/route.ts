import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, company, industry, needs, message, budget } = body;

        const { data, error } = await resend.emails.send({
            from: 'Ai-Studio Web <onboarding@resend.dev>', // Change to 'contacto@aitijuana.studio' once verified as sender
            to: ['contacto@aitijuana.studio'],
            subject: `Nuevo Lead: ${name} - ${company || 'Sin Empresa'}`,
            react: EmailTemplate({
                name,
                email,
                phone,
                company,
                industry,
                needs,
                message,
                budget
            }),
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
