"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PartyPopper, Lightbulb } from "lucide-react"

export default function CuriositiesContent() {
  const curiosities = [
    "MSN Messenger: Onde a gente passava horas escolhendo o 'status' e o 'nick' perfeito!",
    "Orkut: A rede social que nos apresentou as comunidades, depoimentos e 'quem visitou seu perfil'.",
    "Flogão/Fotolog: Onde postávamos nossas fotos com bordas e efeitos antes do Instagram existir.",
    "Discmans e CDs: A trilha sonora da nossa vida cabia em um estojo de CD.",
    "Celulares 'tijolão' e flip: A emoção de ter um celular com tela colorida e polifônico!",
    "Moda Y2K: Calças de cintura baixa, bandanas, tops curtos e muito brilho!",
    "Videoclipes na MTV: A gente esperava o dia todo pra ver o clipe da nossa banda favorita.",
    "Jogos de PS2 e GameCube: Horas de diversão com Tony Hawk, GTA e Mario Kart.",
    "A febre dos Tamagotchis e Furbys: Nossos primeiros 'pets' digitais!",
    "Músicas pop chiclete: Britney, *NSYNC, Backstreet Boys dominando as paradas.",
    "Filmes adolescentes icônicos: 'Meninas Malvadas', 'American Pie', 'Legalmente Loira'.",
    "A internet discada: O som inconfundível da conexão e a paciência para carregar uma imagem.",
    "Os primeiros MP3 players: Liberdade para levar suas músicas para qualquer lugar!",
    "Programas de TV como 'Malhação' e 'Sandy & Junior': Nossas novelas e séries favoritas.",
    "A ascensão dos blogs e fotologs, onde todo mundo era 'influencer'!",
    "O boom dos DVDs e a locadora de vídeo como ponto de encontro.",
    "A popularização dos jogos online em lan houses.",
    "O surgimento dos primeiros smartphones (BlackBerry, Palm Treo).",
    "A moda dos 'piercings' e tatuagens tribais.",
    "O fenômeno 'Harry Potter' e 'Senhor dos Anéis' nos cinemas.",
  ]

  const youKnowFacts = [
    "Você sabia que o primeiro iPod foi lançado em 2001?",
    "Você sabia que o filme 'Shrek' (2001) foi o primeiro a ganhar o Oscar de Melhor Animação?",
    "Você sabia que o Google lançou o Gmail em 2004, revolucionando o e-mail?",
    "Você sabia que o termo 'blog' se popularizou nos anos 2000?",
    "Você sabia que o Nokia 3310, um dos celulares mais resistentes, foi lançado em 2000?",
  ]

  return (
    <main className="w-full max-w-4xl mx-auto p-4 sm:p-6 bg-white rounded-xl shadow-2xl border-4 border-purple-400 relative overflow-hidden my-8 y2k-scanlines">
      <div className="relative z-10 text-center space-y-6">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-lg shadow-lg mb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight drop-shadow-lg font-['Press_Start_2P'] animate-glitch">
            CURIOSIDADES Y2K!
          </h1>
          <p className="text-xl sm:text-2xl mt-2 font-semibold">Uma viagem no tempo!</p>
        </div>

        <Card className="bg-yellow-100 border-yellow-400 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl text-yellow-800">
              <Lightbulb className="size-6" /> Você Sabia?
            </CardTitle>
            <CardDescription className="text-yellow-700">Fatos que vão te surpreender!</CardDescription>
          </CardHeader>
          <CardContent className="text-lg font-medium text-yellow-900 text-left">
            <ul className="list-disc list-inside space-y-2">
              {youKnowFacts.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-purple-100 border-purple-400 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl text-purple-800">
              <PartyPopper className="size-6" /> Mais Curiosidades Anos 2000
            </CardTitle>
            <CardDescription className="text-purple-700">Relembre esses momentos!</CardDescription>
          </CardHeader>
          <CardContent className="text-lg font-medium text-purple-900 text-left">
            <ul className="list-disc list-inside space-y-2">
              {curiosities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
