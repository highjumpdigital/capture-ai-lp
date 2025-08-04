import { NextResponse } from 'next/server'

export async function GET() {
  const robotsTxt = `User-agent: *`

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}