"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function EmployeeForm({ onSubmit, onCancel }) {
  const [employee, setEmployee] = useState({ name: "", email: "", position: "" })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(employee)
    setEmployee({ name: "", email: "", position: "" })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={employee.name}
          onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
          required
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={employee.email}
          onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
          required
        />
      </div>
      <div>
        <Label htmlFor="position">Position</Label>
        <Input
          id="position"
          value={employee.position}
          onChange={(e) => setEmployee({ ...employee, position: e.target.value })}
          required
        />
      </div>
      <Button type="submit">Add Employee</Button>
      <Button type="button" variant="outline" onClick={onCancel}>
        Cancel
      </Button>
    </form>
  )
}

