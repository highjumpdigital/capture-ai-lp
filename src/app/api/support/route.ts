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
  const url = `${baseUrl}/support/v1/public/create`;

  try {
    const body = await request.json();
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(body),
    });

    const data = await res.json().catch(() => ({}));
    return NextResponse.json(data, { status: res.ok ? 200 : res.status });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Upstream support creation failed' },
      { status: 502 }
    );
  }
}


