"use client"

import { useState, useEffect } from "react"
import type { JSX } from "react/jsx-runtime"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const calculateTimeLeft = (targetDate: string): TimeLeft => {
  const difference = +new Date(targetDate) - +new Date()
  let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }

  return timeLeft
}

export function Countdown() {
  const targetDate = "2025-08-02T12:00:00" // Data e hora da festa
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(targetDate))

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate))
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const timerComponents: JSX.Element[] = []

  Object.keys(timeLeft).forEach((interval) => {
    const value = timeLeft[interval as keyof TimeLeft]
    if (value >= 0) {
      timerComponents.push(
        <span key={interval} className="flex flex-col items-center">
          <span className="text-4xl sm:text-5xl font-bold text-pink-700 font-['Press_Start_2P']">
            {String(value).padStart(2, "0")}
          </span>
          <span className="text-sm sm:text-base text-gray-600 mt-1">{interval.toUpperCase()}</span>
        </span>,
      )
    }
  })

  return (
    <div className="flex justify-center items-center gap-4 sm:gap-6 p-4 bg-yellow-200 rounded-lg shadow-inner border-2 border-yellow-500">
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span className="text-2xl font-bold text-green-700">A festa começou! 🎉</span>
      )}
    </div>
  )
}
