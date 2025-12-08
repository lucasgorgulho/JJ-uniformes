"use client"

import { useState } from "react"

import { products } from "@/lib/products-data"
import { ProductsHeroBanner } from "../componentes/produtos/products-hero-banner"
import { ProductsCategories } from "../componentes/produtos/products-categories"
import { ProductsGrid } from "../componentes/produtos/products-grid"
import { ProductsCta } from "../componentes/produtos/products-cta"

export default function ProdutosPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "Todos" || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <main className="min-h-screen bg-white">
      <ProductsHeroBanner onSearch={setSearchTerm} />
      <ProductsCategories selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      <ProductsGrid products={filteredProducts} />
      <ProductsCta />
    </main>
  )
}
