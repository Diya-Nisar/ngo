import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function POST(req: Request) {
  const { name, description } = await req.json()

  try {
    const topic = await prisma.topic.create({
      data: { name, description },
    })
    return NextResponse.json(topic)
  } catch (error) {
    return NextResponse.json({ error: "Error creating topic" }, { status: 500 })
  }
}

