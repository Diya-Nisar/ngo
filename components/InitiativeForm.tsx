"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function InitiativeForm({ onSubmit, onCancel }) {
  const [initiative, setInitiative] = useState({ name: "", description: "", startDate: "", endDate: "" })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(initiative)
    setInitiative({ name: "", description: "", startDate: "", endDate: "" })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={initiative.name}
          onChange={(e) => setInitiative({ ...initiative, name: e.target.value })}
          required
        />
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={initiative.description}
          onChange={(e) => setInitiative({ ...initiative, description: e.target.value })}
          required
        />
      </div>
      <div>
        <Label htmlFor="startDate">Start Date</Label>
        <Input
          id="startDate"
          type="date"
          value={initiative.startDate}
          onChange={(e) => setInitiative({ ...initiative, startDate: e.target.value })}
          required
        />
      </div>
      <div>
        <Label htmlFor="endDate">End Date</Label>
        <Input
          id="endDate"
          type="date"
          value={initiative.endDate}
          onChange={(e) => setInitiative({ ...initiative, endDate: e.target.value })}
          required
        />
      </div>
      <Button type="submit">Add Initiative</Button>
      <Button type="button" variant="outline" onClick={onCancel}>
        Cancel
      </Button>
    </form>
  )
}

