import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

// Configuración de Cloudinary
cloudinary.config({ 
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET(request: NextRequest) {
  try {
    // Verificar que las variables de entorno estén configuradas
    if (!process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 
        !process.env.CLOUDINARY_API_KEY || 
        !process.env.CLOUDINARY_API_SECRET) {
      return NextResponse.json(
        { error: 'Configuración de Cloudinary incompleta' },
        { status: 500 }
      );
    }

    // Buscar imágenes en Cloudinary
    const result = await cloudinary.search
      .expression('resource_type:image AND folder:octava-club-gallery') // Filtrar por tipo image y folder específico
      .sort_by('created_at', 'desc')
      .max_results(500) // Cantidad máxima de resultados
      .execute();

    return NextResponse.json({
      resources: result.resources,
      total_count: result.total_count
    });

  } catch (error) {
    console.error('Error fetching Cloudinary images:', error);
    
    return NextResponse.json(
      { 
        error: 'Error al obtener imágenes de Cloudinary',
        details: error instanceof Error ? error.message : 'Error desconocido'
      },
      { status: 500 }
    );
  }
}