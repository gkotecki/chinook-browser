import db from "@/lib/db"
import { artistTable } from "@/lib/db/schema"
import { NextResponse } from "next/server"

export async function GET() {
  const artists = db.select().from(artistTable).all()
  return NextResponse.json(artists)
}
