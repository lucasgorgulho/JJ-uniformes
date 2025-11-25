"use client"

import type React from "react"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Heart, Package, Palette, Ruler, ChevronDown, Send, Sparkles } from "lucide-react"
import { Button } from "../ui/button"
import { products, type Product } from "@/lib/products-data"

export function QuoteForm() {
  const searchParams = useSearchParams()
  const productSlug = searchParams.get("produto")

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    empresa: "",
    email: "",
    telefone: "",
    tipoUniforme: "",
    quantidade: "",
    personalizacao: "",
    descricao: "",
  })
  const [showProductPreview, setShowProductPreview] = useState(false)

  useEffect(() => {
    if (productSlug) {
      const product = products.find((p) => p.slug === productSlug)
      if (product) {
        setSelectedProduct(product)
        setFormData((prev) => ({ ...prev, tipoUniforme: product.slug }))
      }
    }
  }, [productSlug])

  const handleProductChange = (slug: string) => {
    const product = products.find((p) => p.slug === slug)
    setSelectedProduct(product || null)
    setFormData((prev) => ({ ...prev, tipoUniforme: slug }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Orçamento enviado com sucesso! Entraremos em contato em breve.")
  }

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Características dos Nossos Produtos</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Produtos desenvolvidos com as melhores práticas e tecnologias do mercado para garantir qualidade e
            satisfação em cada peça entregue
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Mobile Product Preview Toggle */}
          {selectedProduct && (
            <div className="lg:hidden mb-4">
              <button
                onClick={() => setShowProductPreview(!showProductPreview)}
                className="w-full flex items-center justify-between bg-white rounded-xl p-4 shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 relative">
                    <Image
                      src={selectedProduct.image || "/placeholder.svg"}
                      alt={selectedProduct.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-gray-500">Produto selecionado</p>
                    <p className="font-medium text-gray-900 text-sm">{selectedProduct.name}</p>
                  </div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform ${showProductPreview ? "rotate-180" : ""}`}
                />
              </button>

              {/* Collapsible Preview */}
              {showProductPreview && (
                <div className="mt-2 bg-white rounded-xl p-4 shadow-sm border border-gray-100 animate-in slide-in-from-top-2">
                  <div className="relative w-full aspect-square max-h-[250px] rounded-xl overflow-hidden bg-gray-100 mb-4">
                    <Image
                      src={selectedProduct.image || "/placeholder.svg"}
                      alt={selectedProduct.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center mb-4">
                    <span className="inline-block text-xs bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full mb-2">
                      {selectedProduct.category}
                    </span>
                    <h3 className="font-bold text-gray-900 text-base">{selectedProduct.name}</h3>
                    <p className="text-gray-500 text-xs mt-1 line-clamp-2">{selectedProduct.description}</p>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-gray-50 rounded-lg p-2 text-center">
                      <Package className="w-4 h-4 text-teal-600 mx-auto mb-1" />
                      <p className="text-[10px] text-gray-600">Qualidade</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-2 text-center">
                      <Palette className="w-4 h-4 text-teal-600 mx-auto mb-1" />
                      <p className="text-[10px] text-gray-600">Cores</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-2 text-center">
                      <Ruler className="w-4 h-4 text-teal-600 mx-auto mb-1" />
                      <p className="text-[10px] text-gray-600">Tamanhos</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Desktop Product Preview - Hidden on mobile */}
              <div className="hidden lg:flex p-6 md:p-8 border-r border-gray-100 flex-col bg-gradient-to-br from-gray-50 to-white">
                {selectedProduct ? (
                  <div className="flex flex-col h-full">
                    <div className="relative w-full aspect-square max-h-[350px] mx-auto mb-6 rounded-xl overflow-hidden bg-white shadow-sm">
                      <button className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors shadow-md">
                        <Heart className="w-5 h-5" />
                      </button>
                      <Image
                        src={selectedProduct.image || "/placeholder.svg"}
                        alt={selectedProduct.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-center mb-6">
                      <span className="inline-block text-xs bg-teal-100 text-teal-700 px-3 py-1 rounded-full mb-3">
                        {selectedProduct.category}
                      </span>
                      <h3 className="font-bold text-gray-900 text-xl mb-2">{selectedProduct.name}</h3>
                      <p className="text-gray-500 text-sm line-clamp-2">{selectedProduct.description}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-3 mt-auto">
                      <div className="bg-white rounded-lg p-3 text-center shadow-sm border border-gray-100">
                        <Package className="w-5 h-5 text-teal-600 mx-auto mb-1" />
                        <p className="text-xs text-gray-600">Alta Qualidade</p>
                      </div>
                      <div className="bg-white rounded-lg p-3 text-center shadow-sm border border-gray-100">
                        <Palette className="w-5 h-5 text-teal-600 mx-auto mb-1" />
                        <p className="text-xs text-gray-600">Várias Cores</p>
                      </div>
                      <div className="bg-white rounded-lg p-3 text-center shadow-sm border border-gray-100">
                        <Ruler className="w-5 h-5 text-teal-600 mx-auto mb-1" />
                        <p className="text-xs text-gray-600">Todos Tamanhos</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-gray-400">
                    <div className="w-full aspect-square max-w-[280px] mb-6 rounded-xl bg-gray-100 flex items-center justify-center border-2 border-dashed border-gray-200">
                      <div className="text-center p-6">
                        <Package className="w-14 h-14 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-500 font-medium">Selecione um produto</p>
                        <p className="text-sm text-gray-400 mt-2">Escolha um uniforme para visualizar</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Form - Full width on mobile */}
              <div className="p-4 sm:p-6 md:p-8">
                <div className="flex items-center gap-2 mb-4 sm:mb-6">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">Informações do Orçamento</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  {/* Contact Data */}
                  <div>
                    <h4 className="text-xs sm:text-sm font-medium text-gray-700 mb-2 sm:mb-3">Dados de Contato</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">Nome Completo *</label>
                        <input
                          type="text"
                          required
                          placeholder="Seu nome completo"
                          className="w-full px-3 py-2.5 sm:py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                          value={formData.nomeCompleto}
                          onChange={(e) => setFormData({ ...formData, nomeCompleto: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">Empresa</label>
                        <input
                          type="text"
                          placeholder="Nome da empresa"
                          className="w-full px-3 py-2.5 sm:py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
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
                          className="w-full px-3 py-2.5 sm:py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
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
                          className="w-full px-3 py-2.5 sm:py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                          value={formData.telefone}
                          onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Order Details */}
                  <div>
                    <h4 className="text-xs sm:text-sm font-medium text-gray-700 mb-2 sm:mb-3">Detalhes do Pedido</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">Tipo de Uniforme *</label>
                        <select
                          required
                          className="w-full px-3 py-2.5 sm:py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white transition-all appearance-none"
                          value={formData.tipoUniforme}
                          onChange={(e) => handleProductChange(e.target.value)}
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                            backgroundPosition: "right 0.5rem center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "1.5em 1.5em",
                            paddingRight: "2.5rem",
                          }}
                        >
                          <option value="">Selecione uma opção</option>
                          {products.map((product) => (
                            <option key={product.id} value={product.slug}>
                              {product.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">Quantidade *</label>
                        <input
                          type="number"
                          required
                          min="1"
                          placeholder="Ex: 50"
                          className="w-full px-3 py-2.5 sm:py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                          value={formData.quantidade}
                          onChange={(e) => setFormData({ ...formData, quantidade: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Customization */}
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Personalização Desejada</label>
                    <input
                      type="text"
                      placeholder="Ex: Bordado com logo, cores específicas..."
                      className="w-full px-3 py-2.5 sm:py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      value={formData.personalizacao}
                      onChange={(e) => setFormData({ ...formData, personalizacao: e.target.value })}
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Descrição / Observações</label>
                    <textarea
                      rows={3}
                      placeholder="Descreva suas necessidades, prazo desejado ou qualquer informação adicional..."
                      className="w-full px-3 py-2.5 sm:py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none transition-all"
                      value={formData.descricao}
                      onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 sm:py-2.5 rounded-xl sm:rounded-lg text-sm sm:text-base font-medium flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                  >
                    <Send className="w-4 h-4" />
                    Enviar Solicitação
                  </Button>

                  <p className="text-center text-xs text-gray-400 mt-3">
                    Seus dados estão seguros. Não compartilhamos informações.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
