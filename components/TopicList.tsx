"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import TopicForm from "./TopicForm"

export default function TopicList({ topics, setTopics }) {
  const [isAddingTopic, setIsAddingTopic] = useState(false)

  const addTopic = (topic) => {
    setTopics([...topics, { ...topic, id: Date.now() }])
    setIsAddingTopic(false)
  }

  const deleteTopic = (id) => {
    setTopics(topics.filter((topic) => topic.id !== id))
  }

  return (
    <div>
      <Button onClick={() => setIsAddingTopic(true)}>Add Topic</Button>
      {isAddingTopic && <TopicForm onSubmit={addTopic} onCancel={() => setIsAddingTopic(false)} />}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {topics.map((topic) => (
          <Card key={topic.id}>
            <CardHeader>
              <CardTitle>{topic.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{topic.description}</p>
              <Button variant="destructive" onClick={() => deleteTopic(topic.id)}>
                Delete
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

