"use client"

import { useState, useEffect } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Volunteer {
  id: string
  name: string
  email: string
  phone: string | null
  interests: string | null
  createdAt: string
}

export default function VolunteerList() {
  const [volunteers, setVolunteers] = useState<Volunteer[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchVolunteers = async () => {
      try {
        const response = await fetch("/api/volunteers")
        if (!response.ok) {
          throw new Error("Failed to fetch volunteers")
        }
        const data = await response.json()
        setVolunteers(data)
      } catch (err) {
        setError("Error fetching volunteers. Please try again.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchVolunteers()
  }, [])

  if (isLoading) return <div>Loading...</div>
  if (error) return <div className="text-red-500">{error}</div>

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="font-montserrat">Name</TableHead>
          <TableHead className="font-montserrat">Email</TableHead>
          <TableHead className="font-montserrat">Phone</TableHead>
          <TableHead className="font-montserrat">Interests</TableHead>
          <TableHead className="font-montserrat">Date Applied</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {volunteers.map((volunteer) => (
          <TableRow key={volunteer.id}>
            <TableCell className="font-roboto">{volunteer.name}</TableCell>
            <TableCell className="font-roboto">{volunteer.email}</TableCell>
            <TableCell className="font-roboto">{volunteer.phone || "N/A"}</TableCell>
            <TableCell className="font-roboto">{volunteer.interests || "N/A"}</TableCell>
            <TableCell className="font-roboto">{new Date(volunteer.createdAt).toLocaleDateString()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

