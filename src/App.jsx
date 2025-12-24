"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Confetti from "./components/Confetti/Confetti"
import PhotoCarousel from "./components/PhotoCarousel/PhotoCarousel"
import Countdown from "./components/Countdown/Countdown"
import "./App.css"

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  const handleOpenGift = () => {
    setShowConfetti(true)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setShowConfetti(false)
  }

  return (
    <main className="christmas-card">
      {showConfetti && <Confetti />}

      <div className="christmas-content">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="christmas-header"
        >
          <h1 className="christmas-title">Feliz Navidad</h1>
          <div className="christmas-divider" />
          <p className="christmas-subtitle">POR MÁS VIAJES Y BUENOS MOMENTOS</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="countdown-wrapper"
        >
          <Countdown />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="carousel-wrapper"
        >
          <PhotoCarousel />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <button className="gift-button" onClick={handleOpenGift}>
            <svg className="gift-icon" viewBox="0 0 64 64" fill="none">
              <rect x="16" y="28" width="32" height="28" fill="#FF4444" rx="2"/>
              <rect x="14" y="24" width="36" height="8" fill="#CC0000" rx="1"/>
              <rect x="30" y="24" width="4" height="32" fill="#FFD700"/>
              <rect x="16" y="36" width="32" height="4" fill="#FFD700"/>
              <path d="M32 24 Q26 18 22 14 Q20 12 22 10 Q24 9 26 11 Q28 13 32 16" fill="#FFD700"/>
              <path d="M32 24 Q38 18 42 14 Q44 12 42 10 Q40 9 38 11 Q36 13 32 16" fill="#FFD700"/>
              <circle cx="32" cy="20" r="4" fill="#FFC700"/>
              <circle cx="24" cy="40" r="1.5" fill="white" opacity="0.4"/>
              <circle cx="40" cy="48" r="1.5" fill="white" opacity="0.4"/>
            </svg>
            ABRIR REGALO
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={handleCloseModal}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>

              <div className="modal-body">
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, -5, 5, -5, 0]
                  }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" }}
                  className="modal-icon-wrapper"
                >
                  <svg className="modal-gift-icon" viewBox="0 0 100 100" fill="none">
                    {/* Sombra */}
                    <ellipse cx="50" cy="92" rx="35" ry="4" fill="#000" opacity="0.15"/>
                    
                    {/* Caja principal */}
                    <rect x="20" y="45" width="60" height="40" fill="#DC143C" rx="3"/>
                    <rect x="20" y="45" width="60" height="40" fill="url(#giftGradient)" rx="3"/>
                    
                    {/* Tapa */}
                    <rect x="18" y="38" width="64" height="12" fill="#B22234" rx="2"/>
                    <rect x="18" y="38" width="64" height="12" fill="url(#lidGradient)" rx="2"/>
                    
                    {/* Cinta vertical */}
                    <rect x="45" y="38" width="10" height="47" fill="#FFD700"/>
                    <rect x="45" y="38" width="10" height="47" fill="url(#ribbonGradient)"/>
                    
                    {/* Cinta horizontal */}
                    <rect x="20" y="60" width="60" height="8" fill="#FFD700"/>
                    <rect x="20" y="60" width="60" height="8" fill="url(#ribbonGradient2)"/>
                    
                    {/* Lazo izquierdo */}
                    <path d="M35 38 Q25 32 20 25 Q16 20 20 15 Q24 12 30 15 Q33 17 35 22 L35 38" 
                          fill="#FFD700" stroke="#FFA500" strokeWidth="1"/>
                    <path d="M35 38 Q25 32 20 25 Q16 20 20 15 Q24 12 30 15 Q33 17 35 22 L35 38" 
                          fill="url(#bowGradient)"/>
                    
                    {/* Lazo derecho */}
                    <path d="M65 38 Q75 32 80 25 Q84 20 80 15 Q76 12 70 15 Q67 17 65 22 L65 38" 
                          fill="#FFD700" stroke="#FFA500" strokeWidth="1"/>
                    <path d="M65 38 Q75 32 80 25 Q84 20 80 15 Q76 12 70 15 Q67 17 65 22 L65 38" 
                          fill="url(#bowGradient)"/>
                    
                    {/* Nudo central */}
                    <circle cx="50" cy="30" r="8" fill="#FFD700"/>
                    <circle cx="50" cy="30" r="8" fill="url(#knotGradient)"/>
                    <circle cx="50" cy="30" r="6" fill="#FFC700"/>
                    
                    {/* Destellos */}
                    <circle cx="28" cy="55" r="2" fill="#FFF" opacity="0.6"/>
                    <circle cx="70" cy="72" r="2.5" fill="#FFF" opacity="0.5"/>
                    <circle cx="38" cy="75" r="1.5" fill="#FFF" opacity="0.7"/>
                    
                    {/* Definiciones de gradientes */}
                    <defs>
                      <linearGradient id="giftGradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#DC143C"/>
                        <stop offset="100%" stopColor="#A01020"/>
                      </linearGradient>
                      <linearGradient id="lidGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#B22234"/>
                        <stop offset="100%" stopColor="#8B1A2A"/>
                      </linearGradient>
                      <linearGradient id="ribbonGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#FFC700"/>
                        <stop offset="50%" stopColor="#FFD700"/>
                        <stop offset="100%" stopColor="#FFA500"/>
                      </linearGradient>
                      <linearGradient id="ribbonGradient2" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#FFA500"/>
                        <stop offset="50%" stopColor="#FFD700"/>
                        <stop offset="100%" stopColor="#FFC700"/>
                      </linearGradient>
                      <radialGradient id="bowGradient">
                        <stop offset="0%" stopColor="#FFD700"/>
                        <stop offset="100%" stopColor="#FFA500"/>
                      </radialGradient>
                      <radialGradient id="knotGradient">
                        <stop offset="0%" stopColor="#FFF4A3"/>
                        <stop offset="70%" stopColor="#FFD700"/>
                        <stop offset="100%" stopColor="#FFA500"/>
                      </radialGradient>
                    </defs>
                  </svg>
                </motion.div>

                <h2 className="modal-title">¡Sorpresa!</h2>

                <p className="modal-message">Un viaje de 3 noches todo pago al destino que más te guste</p>

                <div className="modal-divider" />

                <p className="modal-footer">ESTE REGALO LO PODÉS CANJEAR CUANDO VOS QUIERAS</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

export default App
