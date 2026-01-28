import * as React from 'react';

interface EmailTemplateProps {
    name: string;
    email: string;
    phone: string;
    company?: string;
    industry: string;
    needs: Record<string, boolean>;
    message: string;
    budget: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name,
    email,
    phone,
    company,
    industry,
    needs,
    message,
    budget,
}) => {
    // Convert needs object to readable list
    const selectedNeeds = Object.entries(needs)
        .filter(([_, value]) => value)
        .map(([key]) => key)
        .join(', ');

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
            <h1 style={{ color: '#0056b3' }}>Nuevo Lead desde Ai-Studio</h1>
            <hr />
            <h3>Información del Contacto</h3>
            <p><strong>Nombre:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Teléfono:</strong> {phone}</p>
            <p><strong>Empresa:</strong> {company || 'N/A'}</p>

            <h3>Detalles del Proyecto</h3>
            <p><strong>Industria:</strong> {industry}</p>
            <p><strong>Presupuesto:</strong> {budget}</p>
            <p><strong>Necesidades:</strong> {selectedNeeds || 'Ninguna específica seleccionada'}</p>

            <h3>Mensaje</h3>
            <p style={{ backgroundColor: '#f9f9f9', padding: '10px', borderRadius: '5px' }}>
                {message}
            </p>
        </div>
    );
};
