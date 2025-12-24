"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import "./Confetti.css"

const colors = ["#e63946", "#f4a261", "#2a9d8f", "#e9c46a", "#ffffff", "#d62828", "#003049"]

function Confetti() {
  const [pieces, setPieces] = useState([])

  useEffect(() => {
    const newPieces = []

    for (let i = 0; i < 100; i++) {
      newPieces.push({
        id: i,
        x: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        width: Math.random() * 8 + 6,
        height: Math.random() * 12 + 8,
        velocityX: (Math.random() - 0.5) * 150,
        velocityY: Math.random() * 600 + 500,
        delay: Math.random() * 0.3,
      })
    }

    setPieces(newPieces)
  }, [])

  return (
    <div className="confetti-container">
      {pieces.map((piece) => (
        <motion.div
          key={piece.id}
          className="confetti-piece"
          style={{
            left: `${piece.x}%`,
            width: piece.width,
            height: piece.height,
            backgroundColor: piece.color,
          }}
          initial={{
            x: 0,
            y: 0,
            rotate: 0,
            opacity: 1,
          }}
          animate={{
            x: piece.velocityX,
            y: piece.velocityY,
            rotate: piece.rotation + 720,
            opacity: [1, 1, 0.8, 0],
          }}
          transition={{
            duration: 1.8,
            delay: piece.delay,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  )
}

export default Confetti
