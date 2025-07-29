import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
      try {
      const body = await request.json();
      const apiKey = process.env.MAILERO_API_KEY;
      
      // Verificar que la API key esté configurada
      if (!apiKey) {
        console.error('MAILERO_API_KEY no está configurada en las variables de entorno');
        return NextResponse.json(
          { error: 'Error de configuración del servidor' },
          { status: 500 }
        );
      }
    const {
      companyName,
      contactName,
      email,
      phone,
      eventDate,
      attendees,
      eventType,
      location,
      description,
      budget
    } = body;

    // Validar campos requeridos
    if (!companyName || !contactName || !email || !phone || !eventDate || !attendees || !eventType || !description) {
      return NextResponse.json(
        { error: 'Todos los campos obligatorios deben estar completos' },
        { status: 400 }
      );
    }

    // Crear el contenido del email
    const emailContent = `
Nueva solicitud de evento corporativo desde Octava Club

INFORMACIÓN DE LA EMPRESA:
- Empresa: ${companyName}
- Contacto: ${contactName}
- Email: ${email}
- Teléfono: ${phone}

INFORMACIÓN DEL EVENTO:
- Fecha: ${eventDate}
- Asistentes: ${attendees}
- Tipo de evento: ${eventType}
- Ubicación preferida: ${location || 'No especificada'}
- Presupuesto: ${budget || 'No especificado'}

DESCRIPCIÓN:
${description}

---
Este mensaje fue enviado desde el formulario de contacto de Octava Club.
    `;

    // Preparar los datos para Maileroo
    const formData = new FormData();
    formData.append('from', 'tech.octava@b9dd6ea1d1673672.maileroo.org');
    formData.append('to', 'tech.octava@gmail.com');
    formData.append('subject', `Nueva solicitud de evento corporativo - ${companyName}`);
    formData.append('plain', emailContent);

    // Enviar email usando Maileroo
    const response = await fetch('https://smtp.maileroo.com/send', {
      method: 'POST',
      headers: {
        'X-API-Key': apiKey,
      },
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error de Maileroo:', errorText);
      throw new Error(`Error al enviar email: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    console.log('Email enviado exitosamente:', result);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Formulario enviado exitosamente' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error en el endpoint de contacto:', error);
    return NextResponse.json(
      { 
        error: 'Error interno del servidor al enviar el formulario' 
      },
      { status: 500 }
    );
  }
} 