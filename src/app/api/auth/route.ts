import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const apiKey = process.env.FOURVENUES_API_KEY;
    const baseUrl = process.env.FOURVENUES_BASE_URL;
    
    if (!apiKey || !baseUrl) {
      return NextResponse.json(
        { error: 'API configuration not found' },
        { status: 500 }
      );
    }

    const response = await fetch(`${baseUrl}/auth`, {
      method: 'GET',
      headers: {
        'X-Api-Key': apiKey,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    
    if (!data.success) {
      throw new Error('API returned success: false');
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error authenticating:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Error desconocido' },
      { status: 500 }
    );
  }
} 