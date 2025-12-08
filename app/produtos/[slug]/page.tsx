
import { ProductDetail } from "@/app/componentes/produtos/product-detail"
import { ProductsCta } from "@/app/componentes/produtos/products-cta"
import { products } from "@/lib/products-data"
import { notFound } from "next/navigation"

interface Props {
  params: Promise<{ slug: string }>
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      <ProductDetail product={product} />
      <ProductsCta />
    </main>
  )
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}
