"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/contexts/AuthContext"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Assignment = {
  id: string
  topic: string
  initiative: string
}

export default function EmployeeDashboard() {
  const { user } = useAuth()
  const [assignments, setAssignments] = useState<Assignment[]>([])

  useEffect(() => {
    // In a real app, you'd fetch the employee's assignments from an API
    setAssignments([
      { id: "1", topic: "Climate Change", initiative: "Tree Planting Campaign" },
      { id: "2", topic: "Education", initiative: "After-School Tutoring Program" },
    ])
  }, [])

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Welcome, {user?.name}</h2>
      <div>
        <h3 className="text-xl font-semibold mb-4">Your Assignments</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {assignments.map((assignment) => (
            <Card key={assignment.id}>
              <CardHeader>
                <CardTitle>{assignment.topic}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Initiative: {assignment.initiative}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

