"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import EmployeeList from "./EmployeeList"
import TopicList from "./TopicList"
import InitiativeList from "./InitiativeList"
import AssignmentForm from "./AssignmentForm"
import prisma from "@/lib/prisma"

export default function AdminDashboard() {
  const [employees, setEmployees] = useState([])
  const [topics, setTopics] = useState([])
  const [initiatives, setInitiatives] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const fetchedEmployees = await prisma.user.findMany({
        where: { role: "employee" },
        select: { id: true, name: true, email: true },
      })
      setEmployees(fetchedEmployees)

      const fetchedTopics = await prisma.topic.findMany()
      setTopics(fetchedTopics)

      const fetchedInitiatives = await prisma.initiative.findMany()
      setInitiatives(fetchedInitiatives)
    }

    fetchData()
  }, [])

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold font-playfair">Admin Dashboard</h1>
        <Button asChild>
          <Link href="/admin/volunteers" className="font-montserrat">
            View Volunteers
          </Link>
        </Button>
      </div>
      <Tabs defaultValue="employees">
        <TabsList>
          <TabsTrigger value="employees" className="font-montserrat">
            Employees
          </TabsTrigger>
          <TabsTrigger value="topics" className="font-montserrat">
            Topics
          </TabsTrigger>
          <TabsTrigger value="initiatives" className="font-montserrat">
            Initiatives
          </TabsTrigger>
          <TabsTrigger value="assignments" className="font-montserrat">
            Assignments
          </TabsTrigger>
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
    </div>
  )
}

