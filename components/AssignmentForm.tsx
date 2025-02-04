"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import prisma from "@/lib/prisma"

export default function AssignmentForm({ employees, topics, initiatives }) {
  const [assignment, setAssignment] = useState({ employeeId: "", topicId: "", initiativeId: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await prisma.assignment.create({
        data: {
          userId: assignment.employeeId,
          topicId: assignment.topicId,
          initiativeId: assignment.initiativeId,
        },
      })
      alert("Assignment created successfully")
      setAssignment({ employeeId: "", topicId: "", initiativeId: "" })
    } catch (error) {
      console.error("Error creating assignment:", error)
      alert("Error creating assignment")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="employee">Employee</Label>
        <Select
          value={assignment.employeeId}
          onValueChange={(value) => setAssignment({ ...assignment, employeeId: value })}
        >
          <SelectTrigger id="employee">
            <SelectValue placeholder="Select an employee" />
          </SelectTrigger>
          <SelectContent>
            {employees.map((employee) => (
              <SelectItem key={employee.id} value={employee.id}>
                {employee.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="topic">Topic</Label>
        <Select value={assignment.topicId} onValueChange={(value) => setAssignment({ ...assignment, topicId: value })}>
          <SelectTrigger id="topic">
            <SelectValue placeholder="Select a topic" />
          </SelectTrigger>
          <SelectContent>
            {topics.map((topic) => (
              <SelectItem key={topic.id} value={topic.id}>
                {topic.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="initiative">Initiative</Label>
        <Select
          value={assignment.initiativeId}
          onValueChange={(value) => setAssignment({ ...assignment, initiativeId: value })}
        >
          <SelectTrigger id="initiative">
            <SelectValue placeholder="Select an initiative" />
          </SelectTrigger>
          <SelectContent>
            {initiatives.map((initiative) => (
              <SelectItem key={initiative.id} value={initiative.id}>
                {initiative.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button type="submit">Assign</Button>
    </form>
  )
}

