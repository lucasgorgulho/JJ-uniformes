
import CatalogoDownload from "../componentes/catalogo/catalog-download-section";
import { CatalogHero } from "../componentes/catalogo/catalog-hero";


export default function CatalogoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-1">
        <CatalogHero />
        <CatalogoDownload />
      </main>
    
    </div>
  )
}
