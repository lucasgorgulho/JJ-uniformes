"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"
import { Button } from "../ui/button"
import { useState } from "react"
import { products } from "@/lib/products-data"

export function ProductsGrid() {
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-8 mb-8">
          <div className="hidden lg:flex items-center">
            <span
              className="text-xs font-semibold tracking-widest text-gray-400 uppercase"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              PRODUTOS
            </span>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-900 border-b-2 border-teal-500 pb-2 inline-block">
              Novidades
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow group">
              <div className="relative aspect-square mb-4 bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
                  aria-label={favorites.includes(product.id) ? "Remover dos favoritos" : "Adicionar aos favoritos"}
                >
                  <Heart
                    className={`w-5 h-5 transition-colors ${
                      favorites.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-400"
                    }`}
                  />
                </button>
              </div>
              <h3 className="text-sm text-gray-700 mb-4 line-clamp-2">{product.name}</h3>
              <Link href={`/produtos/${product.slug}`}>
                <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">Ver Detalhes</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
