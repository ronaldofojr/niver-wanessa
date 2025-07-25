"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shirt } from "lucide-react"

export default function DressCodeContent() {
  const dressCodeItems = [
    {
      title: "Cintura Baixa",
      description: "Calças e saias que desafiavam a gravidade!",
    },
    {
      title: "Tops Curtos & Alcinha",
      description: "Mostrando a barriga e os ombros com estilo.",
    },
    {
      title: "Bandanas & Acessórios de Cabelo",
      description: "Coloridos e cheios de personalidade.",
    },
    {
      title: "Muito Brilho!",
      description: "Paetês, glitter e tecidos metálicos para arrasar.",
    },
    {
      title: "Jeans Customizado",
      description: "Rasgos, patches e bordados para um look único.",
    },
    {
      title: "Tênis Plataforma",
      description: "Para quem queria um pouco mais de altura e atitude.",
    },
    {
      title: "Óculos de Sol Pequenos",
      description: "Acessório indispensável para um visual descolado.",
    },
    {
      title: "Cabelos com Mechas Coloridas",
      description: "Pontas coloridas ou mechas marcadas para um toque ousado.",
    },
    {
      title: "Piercings e Tatuagens Temporárias",
      description: "Especialmente os tribais ou de borboleta.",
    },
    {
      title: "Roupas Esportivas Largas",
      description: "Agasalhos e calças largas, estilo hip-hop da época.",
    },
  ]

  return (
    <main className="w-full max-w-4xl mx-auto p-4 sm:p-6 bg-white rounded-xl shadow-2xl border-4 border-teal-400 relative overflow-hidden my-8 y2k-scanlines">
      <div className="relative z-10 text-center space-y-6">
        <div className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white p-6 rounded-lg shadow-lg mb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight drop-shadow-lg font-['Press_Start_2P'] animate-glitch">
            DRESS CODE Y2K!
          </h1>
          <p className="text-xl sm:text-2xl mt-2 font-semibold">Entre no clima da década!</p>
        </div>

        <Card className="bg-yellow-100 border-yellow-400 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-2 text-xl text-yellow-800">
              <Shirt className="size-6" /> Sugestões de Estilo
            </CardTitle>
            <CardDescription className="text-yellow-700">Inspire-se e arrase!</CardDescription>
          </CardHeader>
          <CardContent className="text-lg font-medium text-yellow-900 text-left">
            <p className="mb-4">
              Que tal reviver a moda dos anos 2000? Use sua criatividade e venha com seu melhor look Y2K!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {dressCodeItems.map((item, index) => (
                <div key={index} className="flex flex-col items-start text-left">
                  <h3 className="font-bold text-xl text-yellow-800 mb-1">{item.title}</h3>
                  <p className="text-base text-yellow-700">{item.description}</p>
                </div>
              ))}
            </div>
            <p className="text-sm italic mt-6 text-center">
              Lembre-se: o importante é se divertir e celebrar a Wanessa!
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
