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

    // Crear el contenido del email en formato HTML
    const emailHTML = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nueva Solicitud de Evento Corporativo</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f8f9fa;
        }
        .container {
            background-color: #ffffff;
            border-radius: 10px;
            padding: 30px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 3px solid #3b82f6;
        }
        .logo {
            font-size: 24px;
            font-weight: bold;
            color: #1f2937;
            margin-bottom: 10px;
        }
        .subtitle {
            color: #6b7280;
            font-size: 16px;
        }
        .section {
            margin-bottom: 25px;
            padding: 20px;
            background-color: #f8fafc;
            border-radius: 8px;
            border-left: 4px solid #3b82f6;
        }
        .section-title {
            font-size: 18px;
            font-weight: bold;
            color: #1f2937;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
        }
        .section-title::before {
            content: "📋";
            margin-right: 8px;
        }
        .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
        }
        .info-item {
            margin-bottom: 12px;
        }
        .info-label {
            font-weight: 600;
            color: #374151;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .info-value {
            color: #1f2937;
            font-size: 16px;
            margin-top: 4px;
        }
        .description-section {
            background-color: #fef3c7;
            border-left-color: #f59e0b;
        }
        .description-section .section-title::before {
            content: "📝";
        }
        .description-content {
            background-color: #ffffff;
            padding: 15px;
            border-radius: 6px;
            border: 1px solid #e5e7eb;
            white-space: pre-wrap;
            line-height: 1.7;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
            color: #6b7280;
            font-size: 14px;
        }
        .highlight {
            background-color: #dbeafe;
            color: #1e40af;
            padding: 2px 6px;
            border-radius: 4px;
            font-weight: 500;
        }
        @media (max-width: 600px) {
            .info-grid {
                grid-template-columns: 1fr;
            }
            body {
                padding: 10px;
            }
            .container {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">🎉 OCTAVA CLUB</div>
            <div class="subtitle">Nueva Solicitud de Evento Corporativo</div>
        </div>

        <div class="section">
            <div class="section-title">Información de la Empresa</div>
            <div class="info-grid">
                <div class="info-item">
                    <div class="info-label">Empresa</div>
                    <div class="info-value">${companyName}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Contacto</div>
                    <div class="info-value">${contactName}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Email</div>
                    <div class="info-value"><a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></div>
                </div>
                <div class="info-item">
                    <div class="info-label">Teléfono</div>
                    <div class="info-value"><a href="tel:${phone}" style="color: #3b82f6; text-decoration: none;">${phone}</a></div>
                </div>
            </div>
        </div>

        <div class="section">
            <div class="section-title">Detalles del Evento</div>
            <div class="info-grid">
                <div class="info-item">
                    <div class="info-label">Fecha del Evento</div>
                    <div class="info-value highlight">${new Date(eventDate).toLocaleDateString('es-ES', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                    })}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Número de Asistentes</div>
                    <div class="info-value highlight">${attendees}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Tipo de Evento</div>
                    <div class="info-value">${eventType}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Ubicación Preferida</div>
                    <div class="info-value">${location || 'No especificada'}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Rango de Presupuesto</div>
                    <div class="info-value">${budget || 'No especificado'}</div>
                </div>
            </div>
        </div>

        <div class="section description-section">
            <div class="section-title">Descripción del Evento</div>
            <div class="description-content">${description}</div>
        </div>

        <div class="footer">
            <p>📧 Este mensaje fue enviado automáticamente desde el formulario de contacto de <strong>Octava Club</strong></p>
            <p>🕒 Fecha de envío: ${new Date().toLocaleString('es-ES', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric', 
                hour: '2-digit', 
                minute: '2-digit' 
            })}</p>
        </div>
    </div>
</body>
</html>
    `;

    // Contenido en texto plano como fallback
    const emailPlain = `
Nueva solicitud de evento corporativo desde Octava Club

INFORMACIÓN DE LA EMPRESA:
- Empresa: ${companyName}
- Contacto: ${contactName}
- Email: ${email}
- Teléfono: ${phone}

INFORMACIÓN DEL EVENTO:
- Fecha: ${new Date(eventDate).toLocaleDateString('es-ES', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
})}
- Asistentes: ${attendees}
- Tipo de evento: ${eventType}
- Ubicación preferida: ${location || 'No especificada'}
- Presupuesto: ${budget || 'No especificado'}

DESCRIPCIÓN:
${description}

---
Este mensaje fue enviado desde el formulario de contacto de Octava Club.
Fecha: ${new Date().toLocaleString('es-ES')}
    `;

    // Preparar los datos para Maileroo
    const formData = new FormData();
    formData.append('from', 'tech.octava@b9dd6ea1d1673672.maileroo.org');
    formData.append('to', 'tech.octava@gmail.com');
    formData.append('subject', `Nueva solicitud de evento corporativo - ${companyName}`);
    formData.append('html', emailHTML);
    formData.append('plain', emailPlain);

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