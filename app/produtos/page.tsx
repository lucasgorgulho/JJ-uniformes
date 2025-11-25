

import { ProductsCategories } from "../componentes/produtos/products-categories"
import { ProductsCta } from "../componentes/produtos/products-cta"
import { ProductsGrid } from "../componentes/produtos/products-grid"
import { ProductsHeroBanner } from "../componentes/produtos/products-hero-banner"

export default function ProdutosPage() {
  return (
    <main className="min-h-screen">
      <ProductsHeroBanner/>
      <ProductsCategories />
      <ProductsGrid />
      <ProductsCta/>
    </main>
  )
}
