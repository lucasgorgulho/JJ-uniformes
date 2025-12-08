"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Product } from "@/lib/products-data"


interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(0)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
      <Link
        href="/produtos"
        className="inline-flex items-center text-gray-600 hover:text-teal-500 mb-6 md:mb-8 transition-colors text-sm"
      >
        <svg className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Voltar aos Produtos
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
        {/* Image Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-4">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-2 md:gap-3 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
            {product.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-colors flex-shrink-0 ${
                  selectedImage === index ? "border-teal-500" : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <Image
                  src={img || "/placeholder.svg"}
                  alt={`${product.name} - Imagem ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 relative aspect-square rounded-xl md:rounded-2xl overflow-hidden bg-gray-100">
            <Image
              src={product.images[selectedImage] || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">{product.name}</h1>

          <span className="inline-block bg-teal-100 text-teal-700 text-xs md:text-sm px-3 py-1 rounded-full mb-4 md:mb-6">
            {product.category}
          </span>

          {/* Color Selection */}
          <div className="mb-4 md:mb-6">
            <p className="text-xs md:text-sm text-gray-600 mb-2 md:mb-3">
              Cor disponível: <span className="font-medium text-gray-900">{product.colors[selectedColor].name}</span>
            </p>
            <div className="flex gap-2">
              {product.colors.map((color, index) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(index)}
                  className={`w-7 h-7 md:w-8 md:h-8 rounded-full border-2 transition-all ${
                    selectedColor === index ? "border-teal-500 ring-2 ring-teal-200" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-4 md:mb-6">
            <p className="text-xs md:text-sm text-gray-600 mb-2 md:mb-3">Tamanhos disponíveis:</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 md:px-4 py-1.5 md:py-2 rounded-lg border text-xs md:text-sm font-medium transition-colors ${
                    selectedSize === size
                      ? "bg-teal-500 text-white border-teal-500"
                      : "bg-white text-gray-700 border-gray-300 hover:border-teal-500"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Specifications */}
          <div className="grid grid-cols-2 gap-2 md:gap-3 mb-4 md:mb-6">
            <div className="bg-gray-50 rounded-lg p-2.5 md:p-3">
              <p className="text-[10px] md:text-xs text-gray-500">Material</p>
              <p className="text-xs md:text-sm font-medium text-gray-900 line-clamp-1">
                {product.materials.split(" ")[0]}
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-2.5 md:p-3">
              <p className="text-[10px] md:text-xs text-gray-500">Categoria</p>
              <p className="text-xs md:text-sm font-medium text-gray-900">{product.category}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-2.5 md:p-3">
              <p className="text-[10px] md:text-xs text-gray-500">Tamanhos</p>
              <p className="text-xs md:text-sm font-medium text-gray-900">{product.sizes.length} opções</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-2.5 md:p-3">
              <p className="text-[10px] md:text-xs text-gray-500">Cores</p>
              <p className="text-xs md:text-sm font-medium text-gray-900">{product.colors.length} opções</p>
            </div>
          </div>

          <p className="text-xs md:text-sm text-gray-600 mb-4 md:mb-6 leading-relaxed">{product.description}</p>

          {/* Action Buttons */}
          <div className="flex gap-3 md:gap-4 mb-6 md:mb-8">
            <Button
              variant="outline"
              className="flex-1 border-gray-300 hover:border-teal-500 hover:text-teal-500 bg-transparent text-xs md:text-sm h-10 md:h-11"
              onClick={() => setIsFavorite(!isFavorite)}
            >
              <svg
                className={`w-4 h-4 md:w-5 md:h-5 mr-2 ${isFavorite ? "fill-red-500 text-red-500" : ""}`}
                fill={isFavorite ? "currentColor" : "none"}
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
              {isFavorite ? "Salvo" : "Salvar"}
            </Button>
            <Link href={`/orcamento?produto=${product.slug}`} className="flex-1">
              <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white text-xs md:text-sm h-10 md:h-11">
                Solicitar Orçamento
              </Button>
            </Link>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-3 gap-3 md:gap-4 border-t pt-4 md:pt-6">
            <div className="flex flex-col items-center text-center">
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-teal-500 mb-1.5 md:mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                />
              </svg>
              <p className="text-[10px] md:text-xs text-gray-600">Entrega</p>
              <p className="text-[10px] md:text-sm font-medium">Todo Brasil</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-teal-500 mb-1.5 md:mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              </svg>
              <p className="text-[10px] md:text-xs text-gray-600">Personalização</p>
              <p className="text-[10px] md:text-sm font-medium">Bordado</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-teal-500 mb-1.5 md:mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <p className="text-[10px] md:text-xs text-gray-600">Garantia</p>
              <p className="text-[10px] md:text-sm font-medium">Qualidade JJ</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div>
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Características</h2>
          <ul className="space-y-2 md:space-y-3">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 md:gap-3">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-teal-500 rounded-full mt-1.5 md:mt-2 flex-shrink-0" />
                <span className="text-xs md:text-sm text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Composição e Cuidados</h2>
          <div className="mb-4 md:mb-6">
            <h3 className="text-xs md:text-sm font-medium text-gray-700 mb-1.5 md:mb-2">Material:</h3>
            <p className="text-xs md:text-sm text-gray-600">{product.materials}</p>
          </div>
          <div>
            <h3 className="text-xs md:text-sm font-medium text-gray-700 mb-1.5 md:mb-2">Instruções de Lavagem:</h3>
            <ul className="space-y-1.5 md:space-y-2">
              {product.careInstructions.map((instruction, index) => (
                <li key={index} className="flex items-start gap-2 md:gap-3">
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 rounded-full mt-1.5 md:mt-2 flex-shrink-0" />
                  <span className="text-xs md:text-sm text-gray-600">{instruction}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
