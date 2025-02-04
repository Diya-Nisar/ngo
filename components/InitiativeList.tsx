"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import InitiativeForm from "./InitiativeForm"

export default function InitiativeList({ initiatives, setInitiatives }) {
  const [isAddingInitiative, setIsAddingInitiative] = useState(false)

  const addInitiative = (initiative) => {
    setInitiatives([...initiatives, { ...initiative, id: Date.now() }])
    setIsAddingInitiative(false)
  }

  const deleteInitiative = (id) => {
    setInitiatives(initiatives.filter((initiative) => initiative.id !== id))
  }

  return (
    <div>
      <Button onClick={() => setIsAddingInitiative(true)}>Add Initiative</Button>
      {isAddingInitiative && <InitiativeForm onSubmit={addInitiative} onCancel={() => setIsAddingInitiative(false)} />}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {initiatives.map((initiative) => (
          <Card key={initiative.id}>
            <CardHeader>
              <CardTitle>{initiative.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{initiative.description}</p>
              <p>Start Date: {initiative.startDate}</p>
              <p>End Date: {initiative.endDate}</p>
              <Button variant="destructive" onClick={() => deleteInitiative(initiative.id)}>
                Delete
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

