"use client"

import type React from "react"

import Image from "next/image"
import { Search } from "lucide-react"
import { useState } from "react"

interface ProductsHeroBannerProps {
  onSearch?: (term: string) => void
}

export function ProductsHeroBanner({ onSearch }: ProductsHeroBannerProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch?.(searchTerm)
  }

  return (
    <section className="relative min-h-[200px] sm:min-h-[280px] md:min-h-[350px] overflow-hidden">
      <Image
        src="/fashion-showroom-with-professional-uniforms-on-dis.jpg"
        alt="JJ Uniformes - Nossos Produtos"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 via-gray-900/85 to-gray-900/70" />

      <div className="relative z-10 h-full min-h-[200px] sm:min-h-[280px] md:min-h-[350px] flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-xl">
            <span className="inline-block text-teal-400 text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-2">
              Catálogo Completo
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-2 sm:mb-3">
              Nossos <span className="text-teal-400">Produtos</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed mb-4 sm:mb-5 max-w-md">
              Qualidade premium para cada setor. Encontre o uniforme perfeito.
            </p>

            <form onSubmit={handleSearch} className="relative max-w-md">
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-10 sm:h-11 md:h-12 pl-10 sm:pl-11 pr-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all text-sm"
              />
              <Search className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-white/60" />
            </form>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[30px] sm:h-[40px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60L60 52.5C120 45 240 30 360 22.5C480 15 600 15 720 18.75C840 22.5 960 30 1080 33.75C1200 37.5 1320 37.5 1380 37.5L1440 37.5V60H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
