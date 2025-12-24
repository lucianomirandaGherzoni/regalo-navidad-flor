"use client"

import { motion } from "framer-motion"
import "./PhotoCarousel.css"

const photos = [
  "/images/foto-01.jpeg",
  "/images/foto-02.jpeg",
  "/images/foto-03.jpeg",
  "/images/foto-04.jpeg",
  "/images/foto-05.jpeg",
  "/images/foto-01.jpeg",
  "/images/foto-02.jpeg",
  "/images/foto-03.jpeg",
  "/images/foto-04.jpeg",
  "/images/foto-05.jpeg",
]

function PhotoCarousel() {
  const duplicatedPhotos = [...photos, ...photos]

  return (
    <div className="carousel">
      <div className="carousel-fade-left" />
      <div className="carousel-fade-right" />

      <motion.div
        className="carousel-track"
        animate={{ x: [0, -1400] }}
        transition={{
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: 45,
            ease: "linear",
          },
        }}
      >
        {duplicatedPhotos.map((photo, index) => (
          <div key={index} className="carousel-item">
            <img src={photo || "/placeholder.svg"} alt={`Christmas memory ${index + 1}`} className="carousel-image" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default PhotoCarousel
