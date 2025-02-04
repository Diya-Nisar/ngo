"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/AuthContext"
import AdminDashboard from "@/components/AdminDashboard"
import EmployeeDashboard from "@/components/EmployeeDashboard"

export default function Dashboard() {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push("/login")
    }
  }, [user, router])

  if (!user) {
    return null
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      {user.role === "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </div>
  )
}

