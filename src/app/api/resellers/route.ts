import { NextResponse } from 'next/server';
export const runtime = 'nodejs';

function getBackendBaseUrl(): string {
  return (
    process.env.BACKEND_INTERNAL_URL ||
    process.env.NEXT_PUBLIC_BACKEND_URL ||
    'https://capture-ai-backend-development.up.railway.app'
  );
}

export async function POST(request: Request) {
  const baseUrl = getBackendBaseUrl();
  const url = `${baseUrl}/emails/v1/reseller-registration`;

  try {
    const body = await request.json();
    
    console.log('Proxying reseller registration to:', url);
    console.log('Request body:', body);

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(body),
    });

    const data = await res.json().catch(() => ({}));
    return NextResponse.json(data, { status: res.ok ? 200 : res.status });
  } catch (error) {
    console.error('Reseller registration proxy error:', error);
    return NextResponse.json(
      { success: false, message: 'Upstream reseller registration failed' },
      { status: 502 }
    );
  }
}
