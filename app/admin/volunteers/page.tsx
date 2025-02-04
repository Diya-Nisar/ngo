import type { Metadata } from "next"
import VolunteerList from "@/components/VolunteerList"

export const metadata: Metadata = {
  title: "Admin Dashboard - Volunteers",
  description: "View and manage volunteer applications",
}

export default function AdminVolunteersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 font-playfair">Volunteer Applications</h1>
      <VolunteerList />
    </div>
  )
}

