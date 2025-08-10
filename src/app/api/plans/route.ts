import { NextResponse } from 'next/server';
export const runtime = 'nodejs';

function getBackendBaseUrl(): string {
  return (
    process.env.BACKEND_INTERNAL_URL ||
    process.env.NEXT_PUBLIC_BACKEND_URL ||
    'https://capture-ai-backend-development.up.railway.app'
  );
}

export async function GET() {
  const baseUrl = getBackendBaseUrl();
  const url = `${baseUrl}/plans/v1/plans`;

  try {
    const res = await fetch(url, {
      cache: 'no-store',
      headers: { Accept: 'application/json' },
    });

    const data = await res.json().catch(() => ({}));
    return NextResponse.json(data, { status: res.ok ? 200 : res.status });
  } catch (error) {
    return NextResponse.json(
      { success: false, title: '', description: '', content: [], errorException: 'Upstream fetch failed' },
      { status: 502 }
    );
  }
}


