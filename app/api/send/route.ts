import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    const { data, error } = await resend.emails.send({
      from: 'OccPartes Web <onboarding@resend.dev>', // Update this to your verified domain later
      to: ['occpartesvolvo@gmail.com'], // Reverted to verified email
      subject: `Nueva solicitud de cotización: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #1E4B8E; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Nueva Solicitud de Cotización</h1>
            <p style="color: #F7A600; margin: 5px 0 0; font-weight: bold;">OCC Partes Web</p>
          </div>
          
          <div style="padding: 24px; background-color: #ffffff;">
            <p style="margin-top: 0; color: #4A5568; font-size: 16px;">Has recibido un nuevo mensaje desde el formulario de contacto:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr style="background-color: #F7F9FC;">
                <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold; width: 30%; color: #2D3748;">Nombre</td>
                <td style="padding: 12px; border: 1px solid #e2e8f0; color: #4A5568;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold; color: #2D3748;">Email</td>
                <td style="padding: 12px; border: 1px solid #e2e8f0; color: #4A5568;"><a href="mailto:${email}" style="color: #1E4B8E; text-decoration: none;">${email}</a></td>
              </tr>
              <tr style="background-color: #F7F9FC;">
                <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold; color: #2D3748;">Teléfono</td>
                <td style="padding: 12px; border: 1px solid #e2e8f0; color: #4A5568;">${phone || 'No especificado'}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold; color: #2D3748;">Empresa</td>
                <td style="padding: 12px; border: 1px solid #e2e8f0; color: #4A5568;">${company || 'No especificada'}</td>
              </tr>
            </table>

            <div style="margin-top: 24px;">
              <h3 style="color: #1E4B8E; border-bottom: 2px solid #F7A600; padding-bottom: 8px; display: inline-block; margin-bottom: 12px;">Mensaje</h3>
              <div style="background-color: #F7F9FC; padding: 16px; border-radius: 4px; border-left: 4px solid #F7A600; color: #2D3748; line-height: 1.6;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>
          
          <div style="background-color: #F7F9FC; padding: 16px; text-align: center; border-top: 1px solid #e0e0e0; font-size: 12px; color: #718096;">
            <p style="margin: 0;">Este correo fue enviado automáticamente desde el sitio web de OCC Partes.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
