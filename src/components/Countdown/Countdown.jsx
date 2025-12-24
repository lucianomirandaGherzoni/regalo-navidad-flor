"use client"

import { useState, useEffect } from "react"
import "./Countdown.css"

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const currentYear = now.getFullYear()
      let christmas = new Date(currentYear, 11, 25)

      if (now > christmas) {
        christmas = new Date(currentYear + 1, 11, 25)
      }

      const difference = christmas.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  const timeUnits = [
    { value: timeLeft.days, label: "días" },
    { value: timeLeft.hours, label: "hrs" },
    { value: timeLeft.minutes, label: "min" },
    { value: timeLeft.seconds, label: "seg" },
  ]

  return (
    <div className="countdown">
      <div className="countdown-units">
        {timeUnits.map((unit, index) => (
          <div key={index} className="countdown-unit">
            <div className="countdown-value">{String(unit.value).padStart(2, "0")}</div>
            <div className="countdown-unit-label">{unit.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Countdown
