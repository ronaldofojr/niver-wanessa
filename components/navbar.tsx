"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Início" },
    { href: "/curiosities", label: "Curiosidades" },
    { href: "/top10", label: "Top 10" },
    { href: "/games", label: "Jogos & Nicks" },
    { href: "/dress-code", label: "Dress Code" },
    { href: "/how-to-get-there", label: "Como Chegar" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-700 to-pink-700 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold font-['Press_Start_2P']">
          Y2K Party!
        </Link>
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} passHref>
              <Button variant="link" className="text-white text-lg hover:text-yellow-300 transition-colors">
                {link.label}
              </Button>
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-purple-800 mt-4 rounded-md shadow-lg">
          <div className="flex flex-col items-center py-4 space-y-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} passHref>
                <Button
                  variant="link"
                  className="text-white text-lg hover:text-yellow-300 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
