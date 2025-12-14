
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ProductCharacteristics } from "./componentes/home/product-characteristics"
import { ProfessionalShowcase } from "./componentes/home/professional-showcase"
import { PromotionalBanner } from "./componentes/home/promotional-banner"
import { DiscoverSection } from "./componentes/home/discover-section"
import { ImpactSection } from "./componentes/home/impact-section"
import { HeroSection } from "./componentes/home/hero-section"
import { ProductFeatures } from "./componentes/home/product-features"
import Carousel from "./componentes/home/Carousel"
import { StitchedCarousel } from "./componentes/home/stitched-carousel"


const carouselItems = [
  { title: "Linha Executiva", image: "/professional-man-in-elegant-black-business-suit.jpg" },
  { title: "Linha Hospitalar", image: "/teal-medical-scrubs-uniform.jpg" },
  { title: "Linha Industrial", image: "/professional-working-outdoors.jpg" },
  { title: "Linha Segurança", image: "/navy-blue-professional-uniform.jpg" },
  { title: "Linha Corporativa", image: "/beige-professional-uniform-jacket.jpg" },
]

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProductFeatures />

      {/* Carousel Section */}
      <section className=" bg-gradient-to-b from-white to-gray-50">
        <div>
          
          <StitchedCarousel/>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
            <Link
              href="/produtos"
              className="w-full sm:w-auto bg-teal-600 hover:bg-teal-500 text-white px-5 py-2.5 rounded-md font-medium text-sm transition-colors inline-flex items-center justify-center gap-2"
            >
              Conheça nossos produtos
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/quem_somos"
              className="w-full sm:w-auto text-slate-600 hover:text-teal-600 px-5 py-2.5 rounded-md font-medium text-sm transition-colors inline-flex items-center justify-center gap-2"
            >
              Quem somos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <ProductCharacteristics />
      <DiscoverSection />
      <ProfessionalShowcase />
      <PromotionalBanner />
      
      <ImpactSection />
    </main>
  )
}
