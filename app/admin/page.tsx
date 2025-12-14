"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/app/componentes/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/componentes/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/app/componentes/ui/dialog"
import { Input } from "@/app/componentes/ui/input"
import { Label } from "@/app/componentes/ui/label"
import { Textarea } from "@/app/componentes/ui/textarea"
import { isAuthenticated, logout } from "@/lib/auth"
import { getProducts, addProduct, updateProduct, deleteProduct } from "@/lib/product-storage"
import type { Product } from "@/lib/products-data"
import { Plus, Pencil, Trash2, LogOut, Package, Upload, X } from "lucide-react"

export default function AdminPage() {
  const router = useRouter()
  const [products, setProducts] = useState<Product[]>([])
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [imagePreview, setImagePreview] = useState<string>("")
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (!isAuthenticated()) {
      router.push("/admin/login")
    } else {
      loadProducts()
    }
  }, [router])

  const loadProducts = async () => {
    setIsLoading(true)
    try {
      const loadedProducts = await getProducts()
      console.log("[Admin] Loading products:", loadedProducts.length)
      setProducts(loadedProducts)
    } catch (error) {
      console.error("Error loading products:", error)
      alert("Erro ao carregar produtos")
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = () => {
    logout()
    router.push("/admin/login")
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImageFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = () => {
    setImageFile(null)
    setImagePreview("")
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSaving(true)
    
    const formData = new FormData(e.currentTarget)

    // Usa a imagem em base64 se foi feito upload, senão usa a URL
    const imageUrl = imagePreview || formData.get("image")?.toString() || ""

    const colors =
      formData
        .get("colors")
        ?.toString()
        .split(",")
        .map((c) => {
          const [name, hex] = c.trim().split(":")
          return { name: name?.trim() || "", hex: hex?.trim() || "#000000" }
        })
        .filter((c) => c.name) || []

    const productData = {
      name: formData.get("name")?.toString() || "",
      slug: formData.get("slug")?.toString() || "",
      category: formData.get("category")?.toString() || "",
      image: imageUrl,
      images: [imageUrl],
      colors,
      sizes:
        formData
          .get("sizes")
          ?.toString()
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean) || [],
      materials: formData.get("materials")?.toString() || "",
      description: formData.get("description")?.toString() || "",
      features:
        formData
          .get("features")
          ?.toString()
          .split(",")
          .map((f) => f.trim())
          .filter(Boolean) || [],
      careInstructions:
        formData
          .get("careInstructions")
          ?.toString()
          .split(",")
          .map((c) => c.trim())
          .filter(Boolean) || [],
    }

    let success = false;
    
    if (editingProduct) {
      success = await updateProduct(editingProduct.id, productData)
    } else {
      const result = await addProduct(productData)
      success = result !== null
    }

    if (success) {
      setIsDialogOpen(false)
      setEditingProduct(null)
      setImagePreview("")
      setImageFile(null)
      await loadProducts()
    } else {
      alert("Erro ao salvar o produto. Tente novamente.")
    }
    
    setIsSaving(false)
  }

  const handleEdit = (product: Product) => {
    setEditingProduct(product)
    setImagePreview(product.image)
    setIsDialogOpen(true)
  }

  const handleDelete = async (id: number) => {
    if (confirm("Tem certeza que deseja deletar este produto?")) {
      const success = await deleteProduct(id)
      if (success) {
        await loadProducts()
      } else {
        alert("Erro ao deletar o produto. Tente novamente.")
      }
    }
  }

  const handleAddNew = () => {
    setEditingProduct(null)
    setImagePreview("")
    setImageFile(null)
    setIsDialogOpen(true)
  }

  if (!mounted || !isAuthenticated()) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="bg-[#10827d] shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
              <Package className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Painel Administrativo</h1>
              <p className="text-xs text-white/80">Gerenciamento de Produtos</p>
            </div>
          </div>
          <Button 
            variant="outline" 
            onClick={handleLogout}
            className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sair
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Card */}
        <div className="mb-8 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Produtos</h2>
              <p className="text-gray-500">
                Total de <span className="font-semibold text-teal-600">{products.length}</span> produtos cadastrados
              </p>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button 
                  onClick={handleAddNew}
                  className="bg-teal-600 hover:bg-teal-700 text-white shadow-md"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Adicionar Produto
                </Button>
              </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{editingProduct ? "Editar Produto" : "Novo Produto"}</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome do Produto</Label>
                    <Input id="name" name="name" defaultValue={editingProduct?.name} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="slug">Slug</Label>
                    <Input id="slug" name="slug" defaultValue={editingProduct?.slug} required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Categoria</Label>
                  <Input id="category" name="category" defaultValue={editingProduct?.category} required />
                </div>

                <div className="space-y-2">
                  <Label>Imagem do Produto</Label>
                  {imagePreview ? (
                    <div className="space-y-2">
                      <div className="relative w-full aspect-square rounded-lg border-2 border-border overflow-hidden bg-white">
                        <Image
                          src={imagePreview}
                          alt="Preview"
                          fill
                          className="object-contain p-4"
                          unoptimized
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className="flex-1"
                          onClick={() => {
                            removeImage()
                            document.getElementById('imageUpload')?.click()
                          }}
                        >
                          <Upload className="w-4 h-4 mr-2" />
                          Trocar Imagem
                        </Button>
                        <Button
                          type="button"
                          variant="destructive"
                          size="sm"
                          onClick={removeImage}
                        >
                          <X className="w-4 h-4 mr-2" />
                          Remover
                        </Button>
                      </div>
                      <input
                        id="imageUpload"
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="flex items-center justify-center w-full">
                        <label
                          htmlFor="imageUpload"
                          className="flex flex-col items-center justify-center w-full aspect-square border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted transition-colors"
                        >
                          <div className="flex flex-col items-center justify-center">
                            <Upload className="w-12 h-12 mb-3 text-muted-foreground" />
                            <p className="mb-2 text-sm text-muted-foreground text-center px-4">
                              <span className="font-semibold">Clique para fazer upload</span><br />ou arraste a imagem aqui
                            </p>
                            <p className="text-xs text-muted-foreground">PNG, JPG ou WEBP</p>
                          </div>
                          <input
                            id="imageUpload"
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={handleImageChange}
                          />
                        </label>
                      </div>
                      <div className="text-center text-sm text-muted-foreground">ou</div>
                      <Input
                        id="image"
                        name="image"
                        placeholder="Cole a URL da imagem"
                        defaultValue={editingProduct?.image}
                        onChange={(e) => e.target.value && setImagePreview(e.target.value)}
                      />
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="colors">Cores (Nome:Hex, separadas por vírgula)</Label>
                  <Input
                    id="colors"
                    name="colors"
                    placeholder="Branco:#FFFFFF, Azul:#0000FF"
                    defaultValue={editingProduct?.colors.map((c) => `${c.name}:${c.hex}`).join(", ")}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sizes">Tamanhos (separados por vírgula)</Label>
                  <Input
                    id="sizes"
                    name="sizes"
                    placeholder="PP, P, M, G, GG"
                    defaultValue={editingProduct?.sizes.join(", ")}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="materials">Materiais</Label>
                  <Input id="materials" name="materials" defaultValue={editingProduct?.materials} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Descrição</Label>
                  <Textarea
                    id="description"
                    name="description"
                    defaultValue={editingProduct?.description}
                    rows={3}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="features">Características (separadas por vírgula)</Label>
                  <Textarea
                    id="features"
                    name="features"
                    placeholder="Tecido premium, Conforto, Durabilidade"
                    defaultValue={editingProduct?.features.join(", ")}
                    rows={2}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="careInstructions">Instruções de Cuidado (separadas por vírgula)</Label>
                  <Textarea
                    id="careInstructions"
                    name="careInstructions"
                    placeholder="Lavar à máquina, Não usar alvejante"
                    defaultValue={editingProduct?.careInstructions.join(", ")}
                    rows={2}
                  />
                </div>

                <div className="flex justify-end gap-2">
                  <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)} disabled={isSaving}>
                    Cancelar
                  </Button>
                  <Button type="submit" disabled={isSaving}>
                    {isSaving ? "Salvando..." : editingProduct ? "Salvar" : "Adicionar"}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
          </div>
        </div>

        {/* Products Grid */}
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-teal-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-500">Carregando produtos...</p>
            </div>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl border-2 border-dashed border-gray-200">
            <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Nenhum produto cadastrado</h3>
            <p className="text-gray-500 mb-6">Comece adicionando seu primeiro produto</p>
            <Button onClick={handleAddNew} className="bg-teal-600 hover:bg-teal-700">
              <Plus className="w-4 h-4 mr-2" />
              Adicionar Produto
            </Button>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative w-full aspect-square bg-gradient-to-br from-gray-50 to-white border-b">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                  unoptimized
                />
                <div className="absolute top-3 right-3">
                  <span className="text-xs bg-teal-600 text-white px-2.5 py-1 rounded-lg font-semibold shadow-lg">
                    #{product.id}
                  </span>
                </div>
              </div>
              <CardHeader className="pb-3 bg-white">
                <CardTitle className="text-lg font-bold text-gray-900">{product.name}</CardTitle>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-50 text-teal-700 border border-teal-200">
                    {product.category}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 bg-white">
                <div className="space-y-1.5">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Tamanhos</p>
                  <div className="flex gap-1 flex-wrap">
                    {product.sizes.map((size, i) => (
                      <span key={i} className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded border border-gray-200">
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-1.5">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Cores</p>
                  <div className="flex gap-2 flex-wrap">
                    {product.colors.map((color, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-lg border-2 border-gray-300 shadow-sm hover:scale-110 transition-transform cursor-pointer"
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 pt-3 border-t">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleEdit(product)} 
                    className="flex-1 border-gray-300 hover:bg-gray-50 hover:border-gray-400"
                  >
                    <Pencil className="w-4 h-4 mr-2" />
                    Editar
                  </Button>
                  <Button 
                    variant="destructive" 
                    size="sm" 
                    onClick={() => handleDelete(product.id)} 
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white shadow-sm"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Deletar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t bg-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-gray-500">
            JJ Uniformes - Painel Administrativo © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  )
}
