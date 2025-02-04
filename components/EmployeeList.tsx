"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function EmployeeList({ employees }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {employees.map((employee) => (
        <Card key={employee.id}>
          <CardHeader>
            <CardTitle>{employee.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Email: {employee.email}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

