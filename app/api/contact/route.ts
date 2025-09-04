import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as {
    name?: string
    email?: string
    phone?: string
    message?: string
  } | null

  if (!body?.name || !body?.email || !body?.message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
  }

  // TODO: Connect to MongoDB and persist message
  // For now, we just echo success.
  return NextResponse.json({ ok: true })
}
