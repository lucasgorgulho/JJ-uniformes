"use client"

import type React from "react"
import { useState, useEffect, useCallback, useRef } from "react"

interface CarouselItem {
  title: string
  image: string
}

interface CarouselProps {
  items: CarouselItem[]
  interval?: number
}

export default function Carousel({ items, interval = 5000 }: CarouselProps) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const startX = useRef<number | null>(null)
  const threshold = 50

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % items.length)
  }, [items.length])

  const prev = useCallback(() => {
    setIndex((prev) => (prev - 1 + items.length) % items.length)
  }, [items.length])

  useEffect(() => {
    if (paused) return
    const timer = setTimeout(next, interval)
    return () => clearTimeout(timer)
  }, [index, paused, next, interval])

  const handleInteraction = (action: () => void) => {
    setPaused(true)
    action()
    setTimeout(() => setPaused(false), interval + 1000)
  }

  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    startX.current = "touches" in e ? e.touches[0].clientX : e.clientX
  }

  const handleTouchEnd = (e: React.TouchEvent | React.MouseEvent) => {
    if (startX.current === null) return
    const endX = "changedTouches" in e ? e.changedTouches[0].clientX : e.clientX
    const diff = endX - startX.current

    if (Math.abs(diff) > threshold) {
      if (diff > 0) handleInteraction(prev)
      else handleInteraction(next)
    }
    startX.current = null
  }

  const getOffset = () => (isMobile ? 90 : 260)
  const cardWidth = isMobile ? 140 : 280
  const cardHeight = isMobile ? 200 : 360

  return (
    <div
      className="relative w-full max-w-5xl mx-auto select-none touch-pan-y"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleTouchStart}
      onMouseUp={handleTouchEnd}
    >
      <div className="relative h-[260px] md:h-[420px] flex items-center justify-center">
        {/* Botão anterior */}
        <button
          aria-label="Anterior"
          className="absolute left-0 md:left-2 z-20 p-2 md:p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all"
          onClick={() => handleInteraction(prev)}
        >
          <svg className="h-4 w-4 md:h-5 md:w-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Cards Container */}
        <div
          className="relative w-full h-full flex items-center justify-center overflow-hidden px-8 md:px-12"
          style={{ perspective: "1000px" }}
        >
          {items.map((item, i) => {
            const position = (i - index + items.length) % items.length
            const isCenter = position === 0
            const isLeft = position === items.length - 1
            const isRight = position === 1
            const isVisible = isCenter || isLeft || isRight

            if (!isVisible) return null

            const offset = getOffset()
            const translateX = isCenter ? 0 : isRight ? offset : -offset
            const scale = isCenter ? 1 : 0.75
            const zIndex = isCenter ? 50 : 10
            const rotateY = isCenter ? 0 : isRight ? -12 : 12

            return (
              <div
                key={i}
                className="absolute flex flex-col items-center justify-between rounded-xl overflow-hidden transition-all duration-500 ease-out"
                style={{
                  width: cardWidth,
                  height: cardHeight,
                  backgroundColor: "#0f766e",
                  opacity: isCenter ? 1 : 0.5,
                  zIndex,
                  transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                  boxShadow: isCenter ? "0 16px 40px rgba(0, 0, 0, 0.25)" : "0 8px 16px rgba(0, 0, 0, 0.15)",
                  border: "2px dashed rgba(255,255,255,0.25)",
                }}
              >
                <div className="relative flex flex-col items-center justify-center w-full h-full ">
                  <div
                    className="absolute inset-2 border border-dashed rounded-lg pointer-events-none"
                    style={{ borderColor: "rgba(255,255,255,0.3)" }}
                  />

                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={`Uniforme - ${item.title}`}
                    className={`object-contain transition-all duration-500 z-10 max-h-[55%] ${
                      isCenter ? "drop-shadow-lg scale-105" : "opacity-60 blur-[1px] scale-90"
                    }`}
                    loading="lazy"
                  />

                  {isCenter && (
                    <h2
                      className="absolute bottom-4 text-xs md:text-sm font-semibold tracking-wider text-white z-10 drop-shadow-md uppercase text-center px-2"
                      style={{ letterSpacing: "0.08em" }}
                    >
                      {item.title}
                    </h2>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Botão próximo */}
        <button
          aria-label="Próximo"
          className="absolute right-0 md:right-2 z-20 p-2 md:p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all"
          onClick={() => handleInteraction(next)}
        >
          <svg className="h-4 w-4 md:h-5 md:w-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Indicadores */}
      <div className="flex justify-center gap-2 mt-4">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setPaused(true)
              setIndex(i)
              setTimeout(() => setPaused(false), interval + 1000)
            }}
            className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${
              i === index ? "bg-teal-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Ir para slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
