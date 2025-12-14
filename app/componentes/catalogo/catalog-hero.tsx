import Image from "next/image"
import { BookOpen, Download } from "lucide-react"

export function CatalogHero() {
  return (
    <section className="relative min-h-[400px] sm:min-h-[450px] md:min-h-[550px] overflow-hidden pt-20 sm:pt-0">
      <Image
        src="/catalogo/catalog-hero.jpg"
        alt="Catálogo JJ Uniformes"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-br from-gray-900/95 via-gray-900/85 to-teal-900/75" />

      <div className="relative z-10 h-full min-h-[400px] sm:min-h-[450px] md:min-h-[550px] flex items-center">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 justify-center md:justify-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-500 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <span className="text-teal-400 font-medium uppercase tracking-wider text-xs sm:text-sm">
                  Edição 2024
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-3 sm:mb-4 leading-tight">
                Nosso
                <br />
                <span className="text-teal-400">Catálogo</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto md:mx-0">
                Explore nossa coleção completa de uniformes profissionais. Mais de 200 modelos para todas as áreas de
                atuação.
              </p>
            </div>

            <div className="hidden sm:flex justify-center mt-6 md:mt-0">
              <div className="relative">
                <div className="w-48 h-60 sm:w-56 sm:h-72 md:w-64 md:h-80 bg-white rounded-2xl shadow-2xl transform rotate-3 overflow-hidden">
                  <Image
                    src="/professional-uniform-catalog-cover-design-elegant.jpg"
                    alt="Capa do Catálogo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 sm:-bottom-4 -left-3 sm:-left-4 w-48 h-60 sm:w-56 sm:h-72 md:w-64 md:h-80 bg-teal-500 rounded-2xl -z-10 transform -rotate-6" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="white" xmlns="http://www.w3.org/2000/svg" className="w-full h-12 sm:h-auto">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
