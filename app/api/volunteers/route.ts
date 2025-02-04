import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function POST(req: Request) {
  try {
    const { name, email, phone, interests } = await req.json()
    const volunteer = await prisma.volunteer.create({
      data: {
        name,
        email,
        phone,
        interests,
      },
    })
    return NextResponse.json(volunteer, { status: 201 })
  } catch (error) {
    console.error("Error creating volunteer:", error)
    return NextResponse.json({ error: "Error creating volunteer" }, { status: 500 })
  }
}

export async function GET() {
  try {
    const volunteers = await prisma.volunteer.findMany({
      orderBy: { createdAt: "desc" },
    })
    return NextResponse.json(volunteers)
  } catch (error) {
    console.error("Error fetching volunteers:", error)
    return NextResponse.json({ error: "Error fetching volunteers" }, { status: 500 })
  }
}

