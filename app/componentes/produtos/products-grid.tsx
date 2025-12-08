"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import type { Product } from "@/lib/products-data"

interface ProductsGridProps {
  products: Product[]
}

export function ProductsGrid({ products }: ProductsGridProps) {
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }

  return (
    <section className="py-8 md:py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 md:gap-8 mb-6 md:mb-8">
          <div className="hidden lg:flex items-center">
            <span
              className="text-[10px] md:text-xs font-semibold tracking-widest text-gray-400 uppercase"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              PRODUTOS
            </span>
          </div>
          <div className="flex-1">
            <h2 className="text-base md:text-xl font-semibold text-gray-900 border-b-2 border-teal-500 pb-2 inline-block">
              Novidades
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl md:rounded-2xl p-3 md:p-4 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="relative aspect-square mb-3 md:mb-4 bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-2 right-2 md:top-3 md:right-3 p-1.5 md:p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
                  aria-label={favorites.includes(product.id) ? "Remover dos favoritos" : "Adicionar aos favoritos"}
                >
                  <svg
                    className={`w-4 h-4 md:w-5 md:h-5 transition-colors ${
                      favorites.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-400"
                    }`}
                    fill={favorites.includes(product.id) ? "currentColor" : "none"}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
                <div className="absolute top-2 left-2 md:top-3 md:left-3">
                  <span className="bg-teal-100 text-teal-700 text-[10px] md:text-xs px-2 py-0.5 md:px-2.5 md:py-1 rounded-full font-medium">
                    {product.category}
                  </span>
                </div>
              </div>
              <h3 className="text-xs md:text-sm text-gray-700 mb-2 md:mb-4 line-clamp-2">{product.name}</h3>
              <Link href={`/produtos/${product.slug}`}>
                <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white text-xs md:text-sm h-8 md:h-10">
                  Ver Detalhes
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
