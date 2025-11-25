import { notFound } from "next/navigation"

import { getProductBySlug, getRelatedProducts, products } from "@/lib/products-data"
import Header from "@/app/componentes/header/header"
import { ProductDetail } from "@/app/componentes/produtos/product-detail"
import { RelatedProducts } from "@/app/componentes/produtos/related-products"
import { Footer } from "@/app/componentes/footer/footer"

interface ProductPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return {
      title: "Produto não encontrado - JJ Uniformes",
    }
  }

  return {
    title: `${product.name} - JJ Uniformes`,
    description: product.description,
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = getRelatedProducts(product.id, product.category)

  return (
    <main className="min-h-screen bg-white">
      <ProductDetail product={product} />
      <RelatedProducts products={relatedProducts} />
    </main>
  )
}
