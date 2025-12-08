"use client"

import type React from "react"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Package, Palette, X, Plus, Minus, ShoppingBag, Trash2, Send, Sparkles, Check } from "lucide-react"
import type { Product } from "@/lib/products-data"
import { products } from "@/lib/products-data"
import { Button } from "../ui/button"

const colorOptions = [
  { name: "Preto", hex: "#1a1a1a" },
  { name: "Branco", hex: "#ffffff" },
  { name: "Cinza Escuro", hex: "#4a4a4a" },
  { name: "Cinza Claro", hex: "#9ca3af" },
  { name: "Azul Marinho", hex: "#1e3a5f" },
  { name: "Azul Royal", hex: "#2563eb" },
  { name: "Azul Claro", hex: "#60a5fa" },
  { name: "Verde Escuro", hex: "#166534" },
  { name: "Verde", hex: "#22c55e" },
  { name: "Vermelho", hex: "#dc2626" },
  { name: "Bordô", hex: "#7f1d1d" },
  { name: "Laranja", hex: "#f97316" },
  { name: "Amarelo", hex: "#facc15" },
  { name: "Rosa", hex: "#ec4899" },
  { name: "Roxo", hex: "#7c3aed" },
  { name: "Bege", hex: "#d4b896" },
  { name: "Marrom", hex: "#78350f" },
  { name: "Caqui", hex: "#a3a066" },
]

const fabricOptions = [
  { value: "algodao", label: "Algodão 100%" },
  { value: "poliester", label: "Poliéster" },
  { value: "algodao-poliester", label: "Algodão/Poliéster" },
  { value: "microfibra", label: "Microfibra" },
  { value: "oxford", label: "Oxford" },
  { value: "brim", label: "Brim" },
  { value: "piquet", label: "Piquet" },
  { value: "dry-fit", label: "Dry-Fit" },
  { value: "helanca", label: "Helanca" },
  { value: "outro", label: "Outro (especificar)" },
]

const sizeOptions = ["PP", "P", "M", "G", "GG", "XG", "XXG"]

interface CartItem {
  id: string
  product: Product | null
  productName: string
  tecido: string
  cores: string[]
  tamanhos: { [key: string]: number }
  personalizacao: string
}

export function QuoteForm() {
  const searchParams = useSearchParams()
  const productSlug = searchParams.get("produto")

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    empresa: "",
    email: "",
    telefone: "",
    descricao: "",
  })

  const [currentItem, setCurrentItem] = useState<{
    tipoUniforme: string
    tecido: string
    cores: string[]
    tamanhos: { [key: string]: number }
    personalizacao: string
  }>({
    tipoUniforme: "",
    tecido: "",
    cores: [],
    tamanhos: {},
    personalizacao: "",
  })

  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [showColorPalette, setShowColorPalette] = useState(false)
  const [showCart, setShowCart] = useState(false)

  useEffect(() => {
    if (productSlug) {
      const product = products.find((p) => p.slug === productSlug)
      if (product) {
        setSelectedProduct(product)
        setCurrentItem((prev) => ({ ...prev, tipoUniforme: product.slug }))
      }
    }
  }, [productSlug])

  const handleProductChange = (slug: string) => {
    const product = products.find((p) => p.slug === slug)
    setSelectedProduct(product || null)
    setCurrentItem((prev) => ({ ...prev, tipoUniforme: slug }))
  }

  const toggleColor = (hex: string) => {
    setCurrentItem((prev) => ({
      ...prev,
      cores: prev.cores.includes(hex) ? prev.cores.filter((c) => c !== hex) : [...prev.cores, hex],
    }))
  }

  const updateSizeQuantity = (size: string, delta: number) => {
    setCurrentItem((prev) => {
      const current = prev.tamanhos[size] || 0
      const newValue = Math.max(0, current + delta)
      const newTamanhos = { ...prev.tamanhos }
      if (newValue === 0) {
        delete newTamanhos[size]
      } else {
        newTamanhos[size] = newValue
      }
      return { ...prev, tamanhos: newTamanhos }
    })
  }

  const addToCart = () => {
    if (!currentItem.tipoUniforme) {
      alert("Selecione um tipo de uniforme")
      return
    }
    const totalQuantity = Object.values(currentItem.tamanhos).reduce((a, b) => a + b, 0)
    if (totalQuantity === 0) {
      alert("Selecione pelo menos um tamanho e quantidade")
      return
    }

    const newItem: CartItem = {
      id: Date.now().toString(),
      product: selectedProduct,
      productName: selectedProduct?.name || currentItem.tipoUniforme,
      tecido: currentItem.tecido,
      cores: currentItem.cores,
      tamanhos: currentItem.tamanhos,
      personalizacao: currentItem.personalizacao,
    }

    setCartItems((prev) => [...prev, newItem])

    // Reset current item
    setCurrentItem({
      tipoUniforme: "",
      tecido: "",
      cores: [],
      tamanhos: {},
      personalizacao: "",
    })
    setSelectedProduct(null)
    setShowCart(true)
  }

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => {
      return total + Object.values(item.tamanhos).reduce((a, b) => a + b, 0)
    }, 0)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (cartItems.length === 0) {
      alert("Adicione pelo menos um item ao orçamento")
      return
    }
    alert("Orçamento enviado com sucesso! Entraremos em contato em breve.")
  }

  return (
    <section className="py-4 sm:py-6 md:py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            {/* Form Header */}
            <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-teal-50 to-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-teal-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Monte seu Orçamento</h3>
                </div>
                {cartItems.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setShowCart(!showCart)}
                    className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      {cartItems.length} {cartItems.length === 1 ? "item" : "itens"}
                    </span>
                  </button>
                )}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Contact Data */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Dados de Contato</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Nome Completo *</label>
                    <input
                      type="text"
                      required
                      placeholder="Seu nome completo"
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      value={formData.nomeCompleto}
                      onChange={(e) => setFormData({ ...formData, nomeCompleto: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Empresa</label>
                    <input
                      type="text"
                      placeholder="Nome da empresa"
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      value={formData.empresa}
                      onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">E-mail *</label>
                    <input
                      type="email"
                      required
                      placeholder="seu@email.com"
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Telefone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="(11) 98765-4321"
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-100 pt-6">
                <h4 className="text-sm font-medium text-gray-700 mb-4">Adicionar Item ao Orçamento</h4>

                {/* Product Selection with Preview */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Left - Product Selection */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Tipo de Uniforme *</label>
                      <select
                        className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white transition-all appearance-none"
                        value={currentItem.tipoUniforme}
                        onChange={(e) => handleProductChange(e.target.value)}
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                          backgroundPosition: "right 0.5rem center",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "1.5em 1.5em",
                          paddingRight: "2.5rem",
                        }}
                      >
                        <option value="">Selecione um produto</option>
                        {products.map((product) => (
                          <option key={product.id} value={product.slug}>
                            {product.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Tecido</label>
                      <select
                        className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white transition-all appearance-none"
                        value={currentItem.tecido}
                        onChange={(e) => setCurrentItem({ ...currentItem, tecido: e.target.value })}
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                          backgroundPosition: "right 0.5rem center",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "1.5em 1.5em",
                          paddingRight: "2.5rem",
                        }}
                      >
                        <option value="">Selecione o tipo de tecido</option>
                        {fabricOptions.map((fabric) => (
                          <option key={fabric.value} value={fabric.value}>
                            {fabric.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Right - Product Preview */}
                  <div className="flex items-center justify-center">
                    {selectedProduct ? (
                      <div className="relative w-full max-w-[200px] aspect-square rounded-xl overflow-hidden bg-gray-100 shadow-sm">
                        <Image
                          src={selectedProduct.image || "/placeholder.svg"}
                          alt={selectedProduct.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                          <p className="text-white text-sm font-medium">{selectedProduct.name}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full max-w-[200px] aspect-square rounded-xl bg-gray-100 flex items-center justify-center border-2 border-dashed border-gray-200">
                        <div className="text-center p-4">
                          <Package className="w-10 h-10 text-gray-300 mx-auto mb-2" />
                          <p className="text-xs text-gray-400">Selecione um produto</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-xs text-gray-500 mb-3">Tamanhos e Quantidades</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
                    {sizeOptions.map((size) => (
                      <div
                        key={size}
                        className={`flex flex-col items-center p-3 rounded-xl border transition-all ${
                          (currentItem.tamanhos[size] || 0) > 0
                            ? "border-teal-500 bg-teal-50"
                            : "border-gray-200 bg-white"
                        }`}
                      >
                        <span className="text-sm font-semibold text-gray-700 mb-2">{size}</span>
                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            onClick={() => updateSizeQuantity(size, -1)}
                            className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">{currentItem.tamanhos[size] || 0}</span>
                          <button
                            type="button"
                            onClick={() => updateSizeQuantity(size, 1)}
                            className="w-7 h-7 flex items-center justify-center rounded-full bg-teal-100 hover:bg-teal-200 text-teal-600 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  {Object.keys(currentItem.tamanhos).length > 0 && (
                    <p className="text-xs text-gray-500 mt-2">
                      Total: {Object.values(currentItem.tamanhos).reduce((a, b) => a + b, 0)} peças
                    </p>
                  )}
                </div>

                <div className="mt-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs text-gray-500">Cores</h4>
                    <button
                      type="button"
                      onClick={() => setShowColorPalette(!showColorPalette)}
                      className="flex items-center gap-2 text-sm text-teal-600 hover:text-teal-700 font-medium transition-colors"
                    >
                      <Palette className="w-4 h-4" />
                      Personalizar Cor
                    </button>
                  </div>

                  {/* Selected colors display */}
                  {currentItem.cores.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {currentItem.cores.map((color) => {
                        const colorInfo = colorOptions.find((c) => c.hex === color)
                        return (
                          <div
                            key={color}
                            className="flex items-center gap-2 bg-gray-50 rounded-full px-3 py-1.5 border border-gray-200"
                          >
                            <div
                              className={`w-4 h-4 rounded-full ${color === "#ffffff" ? "border border-gray-300" : ""}`}
                              style={{ backgroundColor: color }}
                            />
                            <span className="text-xs text-gray-600">{colorInfo?.name}</span>
                            <button
                              type="button"
                              onClick={() => toggleColor(color)}
                              className="text-gray-400 hover:text-gray-600"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        )
                      })}
                    </div>
                  )}

                  {/* Color palette popup */}
                  {showColorPalette && (
                    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 animate-in fade-in slide-in-from-top-2">
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-sm font-medium text-gray-700">Selecione as cores</p>
                        <button
                          type="button"
                          onClick={() => setShowColorPalette(false)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="grid grid-cols-6 sm:grid-cols-9 gap-2">
                        {colorOptions.map((color) => (
                          <button
                            key={color.hex}
                            type="button"
                            onClick={() => toggleColor(color.hex)}
                            className="group relative"
                            title={color.name}
                          >
                            <div
                              className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg transition-all ${
                                currentItem.cores.includes(color.hex)
                                  ? "ring-2 ring-teal-500 ring-offset-2"
                                  : "hover:scale-110"
                              } ${color.hex === "#ffffff" ? "border border-gray-200" : ""}`}
                              style={{ backgroundColor: color.hex }}
                            >
                              {currentItem.cores.includes(color.hex) && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <Check
                                    className={`w-4 h-4 ${
                                      color.hex === "#ffffff" || color.hex === "#facc15"
                                        ? "text-gray-800"
                                        : "text-white"
                                    }`}
                                  />
                                </div>
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Customization */}
                <div className="mt-6">
                  <label className="block text-xs text-gray-500 mb-1">Personalização (opcional)</label>
                  <input
                    type="text"
                    placeholder="Ex: Bordado com logo, estampa específica..."
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    value={currentItem.personalizacao}
                    onChange={(e) => setCurrentItem({ ...currentItem, personalizacao: e.target.value })}
                  />
                </div>

                {/* Add to Cart Button */}
                <button
                  type="button"
                  onClick={addToCart}
                  className="mt-6 w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-medium transition-all"
                >
                  <Plus className="w-4 h-4" />
                  Adicionar ao Orçamento
                </button>
              </div>

              {showCart && cartItems.length > 0 && (
                <div className="border-t border-gray-100 pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <ShoppingBag className="w-4 h-4 text-teal-600" />
                      Itens Adicionados ({cartItems.length})
                    </h4>
                    <span className="text-sm text-gray-500">Total: {getTotalItems()} peças</span>
                  </div>

                  <div className="space-y-3 max-h-[300px] overflow-y-auto">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-start gap-4 bg-gray-50 rounded-xl p-4 border border-gray-100"
                      >
                        {item.product && (
                          <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0">
                            <Image
                              src={item.product.image || "/placeholder.svg"}
                              alt={item.productName}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <h5 className="font-medium text-gray-900 text-sm">{item.productName}</h5>
                          <div className="mt-1 space-y-0.5">
                            {item.tecido && (
                              <p className="text-xs text-gray-500">
                                Tecido: {fabricOptions.find((f) => f.value === item.tecido)?.label}
                              </p>
                            )}
                            <p className="text-xs text-gray-500">
                              Tamanhos:{" "}
                              {Object.entries(item.tamanhos)
                                .map(([size, qty]) => `${size}(${qty})`)
                                .join(", ")}
                            </p>
                            {item.cores.length > 0 && (
                              <div className="flex items-center gap-1 mt-1">
                                <span className="text-xs text-gray-500">Cores:</span>
                                <div className="flex -space-x-1">
                                  {item.cores.slice(0, 4).map((color) => (
                                    <div
                                      key={color}
                                      className={`w-4 h-4 rounded-full border border-white ${color === "#ffffff" ? "border-gray-300" : ""}`}
                                      style={{ backgroundColor: color }}
                                    />
                                  ))}
                                  {item.cores.length > 4 && (
                                    <div className="w-4 h-4 rounded-full bg-gray-200 border border-white flex items-center justify-center text-[8px] text-gray-600">
                                      +{item.cores.length - 4}
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Description */}
              <div className="border-t border-gray-100 pt-6">
                <label className="block text-xs text-gray-500 mb-1">Observações Gerais</label>
                <textarea
                  rows={3}
                  placeholder="Prazo desejado, informações adicionais..."
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none transition-all"
                  value={formData.descricao}
                  onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={cartItems.length === 0}
                className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-8 py-3 rounded-xl text-base font-medium flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                <Send className="w-4 h-4" />
                Enviar Orçamento ({cartItems.length} {cartItems.length === 1 ? "item" : "itens"})
              </Button>

              <p className="text-center text-xs text-gray-400">
                Seus dados estão seguros. Não compartilhamos informações.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
