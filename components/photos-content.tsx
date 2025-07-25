"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Camera } from "lucide-react"

export default function PhotosContent() {
  const driveLink = "https://drive.google.com/drive/folders/1YP-RLF5ewREs6BrTMqz1fbYymuB8L31t?usp=sharing"

  return (
    <main className="w-full max-w-4xl mx-auto p-4 sm:p-6 bg-white rounded-xl shadow-2xl border-4 border-pink-400 relative overflow-hidden my-8 y2k-scanlines">
      <div className="relative z-10 text-center space-y-6">
        <div className="bg-gradient-to-r from-pink-600 to-red-600 text-white p-6 rounded-lg shadow-lg mb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight drop-shadow-lg font-['Press_Start_2P'] animate-glitch">
            FOTOS DA FESTA!
          </h1>
          <p className="text-xl sm:text-2xl mt-2 font-semibold">Compartilhe seus melhores cliques </p>
        </div>

        <Card className="bg-yellow-100 border-yellow-400 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-2 text-xl text-yellow-800">
              <Camera className="size-6" /> Sua Galeria da Festa!
            </CardTitle>
            <CardDescription className="text-yellow-700">
              Ajude a eternizar os momentos mais épicos da festa da Wanessa!
            </CardDescription>
          </CardHeader>
          <CardContent className="text-lg font-medium text-yellow-900 space-y-4">
            <p>
              Tire muitas fotos e vídeos durante a festa e compartilhe-os diretamente na nossa pasta do Google Drive.
              Assim, todos poderão ver e guardar as lembranças desse dia inesquecível!
            </p>
            <p className="font-bold text-xl">É fácil e rápido!</p>
            <Button
              asChild
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white text-xl sm:text-2xl font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <a href={driveLink} target="_blank" rel="noopener noreferrer">
                <Camera className="mr-3 size-7" /> ACESSAR PASTA DO DRIVE
              </a>
            </Button>
            <p className="text-sm italic text-gray-600 mt-4">
              (Você precisará estar logado em uma conta Google para fazer upload)
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
