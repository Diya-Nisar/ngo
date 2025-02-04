"use client"

import { useState } from "react"
import Link from "next/link"
import { useAuth } from "@/contexts/AuthContext"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export default function Navbar() {
  const { user, logout } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-primary font-playfair">
            NGO Name
          </Link>

          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="font-montserrat text-gray-700 hover:text-primary">
              Home
            </Link>
            <Link href="#about" className="font-montserrat text-gray-700 hover:text-primary">
              About
            </Link>
            <Link href="#volunteer" className="font-montserrat text-gray-700 hover:text-primary">
              Volunteer
            </Link>

            {user ? (
              <>
                <Link href="/dashboard" className="font-montserrat text-gray-700 hover:text-primary">
                  Dashboard
                </Link>
                <Button onClick={logout} variant="outline" className="font-montserrat">
                  Logout
                </Button>
              </>
            ) : (
              <Link href="/login" className="font-montserrat text-gray-700 hover:text-primary">
                Login
              </Link>
            )}
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-2">
              <Link href="/" className="font-montserrat text-gray-700 hover:text-primary">
                Home
              </Link>
              <Link href="#about" className="font-montserrat text-gray-700 hover:text-primary">
                About
              </Link>
              <Link href="#volunteer" className="font-montserrat text-gray-700 hover:text-primary">
                Volunteer
              </Link>
              {user ? (
                <>
                  <Link href="/dashboard" className="font-montserrat text-gray-700 hover:text-primary">
                    Dashboard
                  </Link>
                  <Button onClick={logout} variant="outline" className="font-montserrat">
                    Logout
                  </Button>
                </>
              ) : (
                <Link href="/login" className="font-montserrat text-gray-700 hover:text-primary">
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

