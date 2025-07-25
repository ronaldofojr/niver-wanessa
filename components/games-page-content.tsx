"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Gamepad2, MessageCircle, RefreshCw } from "lucide-react"

// Memory Game
interface CardItem {
  id: number
  value: string
  isFlipped: boolean
  isMatched: boolean
}

const initialCardValues = ["💿", "💾", "📞", "📟", "📺", "🎮"] // Y2K themed emojis

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

function createCards(): CardItem[] {
  const cards = [...initialCardValues, ...initialCardValues].map((value, index) => ({
    id: index,
    value,
    isFlipped: false,
    isMatched: false,
  }))
  return shuffleArray(cards)
}

// MSN Nickname Generator
const adjectives = ["~*Doce*", "°°Estrela°°", "♥Anjo♥", "•°Princesa°•", "®Rebelde®", "¤¤Sonhadora¤¤", "†Eterna†"]
const nouns = ["Menina", "Gatinha", "Princesa", "Estrela", "Anjo", "Guerreira", "Diva"]
const symbols = ["xX", "Xx", "_", "-", "°", "*", "♥", "♪", "♫", "†"]

function generateMsnNickname(name: string): string {
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)]
  const noun = nouns[Math.floor(Math.random() * nouns.length)]
  const sym1 = symbols[Math.floor(Math.random() * symbols.length)]
  const sym2 = symbols[Math.floor(Math.random() * symbols.length)]
  return `${sym1}${adj} ${name} ${noun}${sym2}`
}

export default function GamesPageContent() {
  // Memory Game State
  const [cards, setCards] = useState<CardItem[]>([])
  const [flippedCards, setFlippedCards] = useState<number[]>([]) // IDs of currently flipped cards
  const [matchedCards, setMatchedCards] = useState<number[]>([]) // IDs of matched cards
  const [moves, setMoves] = useState(0)
  const [gameOver, setGameOver] = useState(false)

  useEffect(() => {
    resetGame()
  }, [])

  const resetGame = () => {
    setCards(createCards())
    setFlippedCards([])
    setMatchedCards([])
    setMoves(0)
    setGameOver(false)
  }

  const handleCardClick = (id: number) => {
    if (gameOver || flippedCards.length === 2 || cards[id].isFlipped || cards[id].isMatched) {
      return
    }

    const newCards = cards.map((card) => (card.id === id ? { ...card, isFlipped: true } : card))
    setCards(newCards)
    setFlippedCards((prev) => [...prev, id])
    setMoves((prev) => prev + 1)
  }

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstId, secondId] = flippedCards
      const firstCard = cards.find((card) => card.id === firstId)
      const secondCard = cards.find((card) => card.id === secondId)

      if (firstCard && secondCard && firstCard.value === secondCard.value) {
        // Match found
        setMatchedCards((prev) => [...prev, firstId, secondId])
        setFlippedCards([])
      } else {
        // No match, flip back after a delay
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.id === firstId || card.id === secondId ? { ...card, isFlipped: false } : card,
            ),
          )
          setFlippedCards([])
        }, 1000)
      }
    }
  }, [flippedCards, cards])

  useEffect(() => {
    if (matchedCards.length === cards.length && cards.length > 0) {
      setGameOver(true)
    }
  }, [matchedCards, cards])

  // MSN Nickname Generator State
  const [userName, setUserName] = useState("")
  const [msnNick, setMsnNick] = useState("")

  const handleGenerateNick = () => {
    if (userName.trim()) {
      setMsnNick(generateMsnNickname(userName.trim()))
    } else {
      setMsnNick("Digite seu nome para gerar um nick!")
    }
  }

  return (
    <main className="w-full max-w-4xl mx-auto p-4 sm:p-6 bg-white rounded-xl shadow-2xl border-4 border-blue-400 relative overflow-hidden my-8 y2k-scanlines">
      <div className="relative z-10 text-center space-y-6">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-lg shadow-lg mb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight drop-shadow-lg font-['Press_Start_2P'] animate-glitch">
            JOGOS & NICKS Y2K!
          </h1>
          <p className="text-xl sm:text-2xl mt-2 font-semibold">Diversão e nostalgia garantidas!</p>
        </div>

        {/* Memory Game Section */}
        <Card className="bg-purple-100 border-purple-400 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-2 text-xl text-purple-800">
              <Gamepad2 className="size-6" /> Jogo da Memória Y2K
            </CardTitle>
            <CardDescription className="text-purple-700">Encontre os pares e teste sua memória!</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-4 gap-2 sm:gap-4 justify-items-center">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className={`w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-lg text-4xl sm:text-5xl font-bold cursor-pointer transition-all duration-300
                    ${card.isFlipped || card.isMatched ? "bg-purple-300" : "bg-purple-500 hover:bg-purple-600"}
                    ${card.isMatched ? "opacity-50" : ""}
                  `}
                  onClick={() => handleCardClick(card.id)}
                >
                  {card.isFlipped || card.isMatched ? card.value : "❓"}
                </div>
              ))}
            </div>
            <p className="text-lg text-purple-800">Movimentos: {moves}</p>
            {gameOver && (
              <div className="text-xl font-bold text-green-700">
                Parabéns! Você encontrou todos os pares em {moves} movimentos!
              </div>
            )}
            <Button onClick={resetGame} className="bg-pink-600 hover:bg-pink-700 text-white">
              <RefreshCw className="mr-2 size-5" /> Reiniciar Jogo
            </Button>
          </CardContent>
        </Card>

        {/* MSN Nickname Generator Section */}
        <Card className="bg-green-100 border-green-400 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-2 text-xl text-green-800">
              <MessageCircle className="size-6" /> Gerador de Nickname MSN
            </CardTitle>
            <CardDescription className="text-green-700">Crie seu nick perfeito para o MSN!</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="username" className="text-lg text-green-800">
                Seu Nome:
              </Label>
              <Input
                type="text"
                id="username"
                placeholder="Ex: Wanessa"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="text-lg p-2 border-green-300 focus:border-green-500"
              />
            </div>
            <Button onClick={handleGenerateNick} className="bg-blue-600 hover:bg-blue-700 text-white w-full">
              Gerar Nick!
            </Button>
            {msnNick && (
              <div className="mt-4 p-3 bg-blue-200 rounded-md border border-blue-400 text-blue-900 text-xl font-bold break-words">
                {msnNick}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
