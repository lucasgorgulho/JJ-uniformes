"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Heart, Truck, Package, Shield, ChevronLeft } from "lucide-react"
import { Button } from "../ui/button"
import type { Product } from "@/lib/products-data"

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(0)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Back button */}
      <Link
        href="/produtos"
        className="inline-flex items-center text-gray-600 hover:text-teal-500 mb-8 transition-colors"
      >
        <ChevronLeft className="w-5 h-5 mr-1" />
        Voltar aos Produtos
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div className="flex gap-4">
          {/* Thumbnails */}
          <div className="flex flex-col gap-3">
            {product.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
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
          <div className="flex-1 relative aspect-square rounded-lg overflow-hidden bg-gray-100">
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
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

          {/* Category Badge */}
          <span className="inline-block bg-teal-100 text-teal-700 text-sm px-3 py-1 rounded-full mb-6">
            {product.category}
          </span>

          {/* Color Selection */}
          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-3">
              Cor disponível: <span className="font-medium text-gray-900">{product.colors[selectedColor].name}</span>
            </p>
            <div className="flex gap-2">
              {product.colors.map((color, index) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(index)}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${
                    selectedColor === index ? "border-teal-500 ring-2 ring-teal-200" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-3">Tamanhos disponíveis:</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
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
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs text-gray-500">Material</p>
              <p className="text-sm font-medium text-gray-900 line-clamp-2">{product.materials.split(" ")[0]}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs text-gray-500">Categoria</p>
              <p className="text-sm font-medium text-gray-900">{product.category}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs text-gray-500">Tamanhos</p>
              <p className="text-sm font-medium text-gray-900">{product.sizes.length} opções</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs text-gray-500">Cores</p>
              <p className="text-sm font-medium text-gray-900">{product.colors.length} opções</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-8">
            <Button
              variant="outline"
              className="flex-1 border-gray-300 hover:border-teal-500 hover:text-teal-500 bg-transparent"
              onClick={() => setIsFavorite(!isFavorite)}
            >
              <Heart className={`w-5 h-5 mr-2 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
              {isFavorite ? "Salvo" : "Salvar"}
            </Button>
            <Link href={`/orcamento?produto=${product.slug}`} className="flex-1">
              <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">Solicitar Orçamento</Button>
            </Link>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-3 gap-4 border-t pt-6">
            <div className="flex flex-col items-center text-center">
              <Truck className="w-6 h-6 text-teal-500 mb-2" />
              <p className="text-xs text-gray-600">Entrega</p>
              <p className="text-sm font-medium">Para todo Brasil</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Package className="w-6 h-6 text-teal-500 mb-2" />
              <p className="text-xs text-gray-600">Personalização</p>
              <p className="text-sm font-medium">Bordado/Estampa</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Shield className="w-6 h-6 text-teal-500 mb-2" />
              <p className="text-xs text-gray-600">Garantia</p>
              <p className="text-sm font-medium">Qualidade JJ</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Características</h2>
          <ul className="space-y-3">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Composição e Cuidados</h2>
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Material:</h3>
            <p className="text-gray-600">{product.materials}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">Instruções de Lavagem:</h3>
            <ul className="space-y-2">
              {product.careInstructions.map((instruction, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-600">{instruction}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
