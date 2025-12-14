"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { StitchedCard } from "./stitched-card"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselItem {
  imageSrc: string
  title: string
  color: "teal" 
}

const items: CarouselItem[] = [
  { imageSrc: "/carrousel/segurança.png", title: "LINHA SEGURANÇA", color: "teal" },
  { imageSrc: "/carrousel/fabrica.png", title: "LINHA FABRICA", color: "teal" },
  { imageSrc: "/carrousel/hospitalar.png", title: "LINHA HOSPITALAR", color: "teal" },
  { imageSrc: "/carrousel/escritorio.png", title: "LINHA EXECUTIVA", color: "teal" },
]

export function StitchedCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      goToNext()
    }

    if (touchStart - touchEnd < -75) {
      goToPrevious()
    }
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1))
  }

  const getCardPosition = (index: number) => {
    const diff = index - currentIndex

    if (diff === 0) return "center"
    if (diff === 1 || diff === -(items.length - 1)) return "right"
    if (diff === -1 || diff === items.length - 1) return "left"
    return "hidden"
  }

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <div className="relative w-full max-w-7xl mx-auto px-2 sm:px-4 py-8 sm:py-16">
      <div
        className="relative h-[500px] sm:h-[600px] flex items-center justify-center overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {items.map((item, index) => {
          const position = getCardPosition(index)

          return (
            <div
              key={index}
              className={`absolute transition-all duration-700 ease-out
                ${
                  position === "center"
                    ? "z-30 scale-100 opacity-100 translate-x-0"
                    : position === "left"
                      ? "z-20 scale-[0.65] sm:scale-75 opacity-30 sm:opacity-40 -translate-x-[250px] sm:-translate-x-[400px] blur-[2px] sm:blur-sm"
                      : position === "right"
                        ? "z-20 scale-[0.65] sm:scale-75 opacity-30 sm:opacity-40 translate-x-[250px] sm:translate-x-[400px] blur-[2px] sm:blur-sm"
                        : "z-10 scale-50 opacity-0 pointer-events-none"
                }`}
            >
              <StitchedCard
                imageSrc={item.imageSrc}
                title={item.title}
                color={item.color}
                className="w-[280px] sm:w-[340px]"
              />
            </div>
          )
        })}
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 z-40 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full p-2 sm:p-4 shadow-lg sm:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 z-40 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full p-2 sm:p-4 shadow-lg sm:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Próximo"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700" />
      </button>

      <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? "w-10 sm:w-12 h-2.5 sm:h-3 bg-slate-700"
                : "w-2.5 sm:w-3 h-2.5 sm:h-3 bg-slate-300 hover:bg-slate-400"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="flex sm:hidden justify-center mt-4">
        <p className="text-xs text-slate-500 animate-pulse">Deslize para navegar</p>
      </div>
    </div>
  )
}
