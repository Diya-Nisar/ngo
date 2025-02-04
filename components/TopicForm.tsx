"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function TopicForm({ onSubmit, onCancel }) {
  const [topic, setTopic] = useState({ name: "", description: "" })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(topic)
    setTopic({ name: "", description: "" })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" value={topic.name} onChange={(e) => setTopic({ ...topic, name: e.target.value })} required />
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={topic.description}
          onChange={(e) => setTopic({ ...topic, description: e.target.value })}
          required
        />
      </div>
      <Button type="submit">Add Topic</Button>
      <Button type="button" variant="outline" onClick={onCancel}>
        Cancel
      </Button>
    </form>
  )
}

