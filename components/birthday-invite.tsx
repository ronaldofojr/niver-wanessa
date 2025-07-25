"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, MapPin, MessageCircle } from "lucide-react"
import { Countdown } from "@/components/countdown"

export default function BirthdayInvite() {
  const baseWhatsappMessage = encodeURIComponent("Confirmo minha presença na festa de aniversário da Wanessa!")
  const wanessaWhatsappLink = `https://wa.me/5521990921127?text=${baseWhatsappMessage}`
  const ronaldoWhatsappLink = `https://wa.me/5521989854317?text=${baseWhatsappMessage}`

  return (
    <main className="w-full max-w-4xl mx-auto p-4 sm:p-6 bg-white rounded-xl shadow-2xl border-4 border-pink-400 relative overflow-hidden my-8 y2k-scanlines">
      {/* Background elements for 2000s vibe */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 text-center space-y-6">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-lg shadow-lg mb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight drop-shadow-lg font-['Press_Start_2P'] animate-glitch">
            WANESSA&apos;S B-DAY BASH!
          </h1>
          <p className="text-xl sm:text-2xl mt-2 font-semibold">24 ANOS - EDIÇÃO ANOS 2000!</p>
        </div>

        {/* Countdown Section */}
        <Card className="bg-red-100 border-red-400 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-2 text-xl text-red-800">
              <CalendarDays className="size-6" /> Contagem Regressiva!
            </CardTitle>
            <CardDescription className="text-red-700">Falta pouco para a festa!</CardDescription>
          </CardHeader>
          <CardContent>
            <Countdown />
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-yellow-100 border-yellow-400 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl text-yellow-800">
                <CalendarDays className="size-6" /> Quando?
              </CardTitle>
              <CardDescription className="text-yellow-700">Marque na sua agenda!</CardDescription>
            </CardHeader>
            <CardContent className="text-lg font-medium text-yellow-900">
              <p>🗓️ 02 de Agosto de 2025</p>
              <p>⏰ A partir das 12h (sem hora pra acabar!)</p>
            </CardContent>
          </Card>

          <Card className="bg-blue-100 border-blue-400 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl text-blue-800">
                <MapPin className="size-6" /> Onde?
              </CardTitle>
              <CardDescription className="text-blue-700">Vem que a festa é aqui!</CardDescription>
            </CardHeader>
            <CardContent className="text-lg font-medium text-blue-900">
              <p>📍 Rua Julio Teixeira de Oliveira - 69</p>
              <p>Bairro Rocha, São Gonçalo</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-pink-700 mb-4">Não perca essa festa épica!</h2>
          <p className="text-lg text-gray-700 mb-6">Sua presença é muito importante para a Wanessa!</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white text-xl sm:text-2xl font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 animate-bounce-slow"
            >
              <a href={wanessaWhatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-3 size-7" /> Confirmar com Wanessa
              </a>
            </Button>
            <Button
              asChild
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-xl sm:text-2xl font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 animate-bounce-slow"
            >
              <a href={ronaldoWhatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-3 size-7" /> Confirmar com Ronaldo
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-10 text-sm text-gray-500">
          <p>&copy; 2025 Festa da Wanessa - Y2K Edition. Feito com muito amor e nostalgia!</p>
        </div>
      </div>
    </main>
  )
}
