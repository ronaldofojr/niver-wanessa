import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { DialupEffect } from "@/components/dialup-effect"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aniversário da Wanessa - Anos 2000!",
  description: "Festa de 24 anos da Wanessa com tema anos 2000!",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500`}>
        <DialupEffect /> {/* Add the dial-up effect here */}
        <Navbar />
        <div className="pt-16">
          {" "}
          {/* Add padding-top to account for fixed navbar */}
          {children}
        </div>
      </body>
    </html>
  )
}
