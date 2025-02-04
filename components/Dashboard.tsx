"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import EmployeeList from "./EmployeeList"
import TopicList from "./TopicList"
import InitiativeList from "./InitiativeList"
import AssignmentForm from "./AssignmentForm"

export default function Dashboard() {
  const [employees, setEmployees] = useState([])
  const [topics, setTopics] = useState([])
  const [initiatives, setInitiatives] = useState([])

  return (
    <Tabs defaultValue="employees">
      <TabsList>
        <TabsTrigger value="employees">Employees</TabsTrigger>
        <TabsTrigger value="topics">Topics</TabsTrigger>
        <TabsTrigger value="initiatives">Initiatives</TabsTrigger>
        <TabsTrigger value="assignments">Assignments</TabsTrigger>
      </TabsList>
      <TabsContent value="employees">
        <EmployeeList employees={employees} setEmployees={setEmployees} />
      </TabsContent>
      <TabsContent value="topics">
        <TopicList topics={topics} setTopics={setTopics} />
      </TabsContent>
      <TabsContent value="initiatives">
        <InitiativeList initiatives={initiatives} setInitiatives={setInitiatives} />
      </TabsContent>
      <TabsContent value="assignments">
        <AssignmentForm employees={employees} topics={topics} initiatives={initiatives} />
      </TabsContent>
    </Tabs>
  )
}

