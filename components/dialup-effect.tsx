"use client"

import { useEffect, useState, useRef } from "react"

export function DialupEffect() {
  const [showOverlay, setShowOverlay] = useState(true)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      audioRef.current = new Audio("/dialup.mp3")
      audioRef.current.volume = 0.5 // Adjust volume if needed

      const playAudioAndHideOverlay = () => {
        if (audioRef.current) {
          audioRef.current.play().catch((e) => console.error("Error playing audio:", e))
        }
        setTimeout(() => {
          setShowOverlay(false)
          if (audioRef.current) {
            audioRef.current.pause()
            audioRef.current.currentTime = 0
          }
        }, 5000) // Play for 5 seconds, then hide overlay and stop audio
      }

      // Auto-play might be blocked by browsers, so add a user interaction prompt
      const handleUserInteraction = () => {
        playAudioAndHideOverlay()
        window.removeEventListener("click", handleUserInteraction)
        window.removeEventListener("keydown", handleUserInteraction)
      }

      window.addEventListener("click", handleUserInteraction)
      window.addEventListener("keydown", handleUserInteraction)

      return () => {
        window.removeEventListener("click", handleUserInteraction)
        window.removeEventListener("keydown", handleUserInteraction)
        if (audioRef.current) {
          audioRef.current.pause()
          audioRef.current.currentTime = 0
        }
      }
    }
  }, [])

  if (!showOverlay) return null

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[100] text-white font-['Press_Start_2P'] text-center p-4">
      <div className="text-4xl sm:text-6xl mb-8 animate-pulse">
        <span className="text-green-400">CONECTANDO...</span>
      </div>
      <p className="text-lg sm:text-xl mb-4">Clique ou pressione qualquer tecla para iniciar a conexão Y2K!</p>
      <div className="text-sm text-gray-400">
        <p>Aguarde o som nostálgico da internet discada...</p>
      </div>
    </div>
  )
}
