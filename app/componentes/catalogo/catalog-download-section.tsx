import { Download, FileText, BookOpen } from "lucide-react"
import { Button } from "../ui/button"

export function CatalogDownloadSection() {
  return (
    <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-br from-green-50 to-teal-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 text-balance">
              Baixe Nosso Catálogo Completo
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-2">
              Conheça nossa linha completa de uniformes profissionais. Encontre o modelo perfeito para sua empresa.
            </p>
          </div>

          <div className="flex overflow-x-auto pb-4 sm:pb-0 sm:grid sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide snap-x snap-mandatory">
            <div className="flex-shrink-0 w-[140px] sm:w-auto snap-center text-center bg-white sm:bg-transparent rounded-xl p-4 sm:p-0 shadow-sm sm:shadow-none">
              <div className="flex justify-center mb-2 sm:mb-4">
                <div className="p-3 sm:p-4 rounded-full bg-white shadow-sm text-teal-600">
                  <BookOpen className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
              </div>
              <div className="text-lg sm:text-xl font-bold text-gray-900 mb-0.5 sm:mb-1">+200</div>
              <div className="text-xs sm:text-sm text-gray-600">Modelos disponíveis</div>
            </div>
            <div className="flex-shrink-0 w-[140px] sm:w-auto snap-center text-center bg-white sm:bg-transparent rounded-xl p-4 sm:p-0 shadow-sm sm:shadow-none">
              <div className="flex justify-center mb-2 sm:mb-4">
                <div className="p-3 sm:p-4 rounded-full bg-white shadow-sm text-teal-600">
                  <FileText className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
              </div>
              <div className="text-lg sm:text-xl font-bold text-gray-900 mb-0.5 sm:mb-1">50+</div>
              <div className="text-xs sm:text-sm text-gray-600">Páginas de conteúdo</div>
            </div>
            <div className="flex-shrink-0 w-[140px] sm:w-auto snap-center text-center bg-white sm:bg-transparent rounded-xl p-4 sm:p-0 shadow-sm sm:shadow-none">
              <div className="flex justify-center mb-2 sm:mb-4">
                <div className="p-3 sm:p-4 rounded-full bg-white shadow-sm text-teal-600">
                  <Download className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
              </div>
              <div className="text-lg sm:text-xl font-bold text-gray-900 mb-0.5 sm:mb-1">PDF</div>
              <div className="text-xs sm:text-sm text-gray-600">Formato digital</div>
            </div>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 md:p-12 text-center">
            <div className="mb-4 sm:mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-teal-100 rounded-full mb-3 sm:mb-4">
                <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-teal-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1.5 sm:mb-2">Catálogo JJ Uniformes 2025</h3>
              <p className="text-sm sm:text-base text-gray-600 px-2">
                Todos os nossos produtos em um só lugar. Descubra as melhores opções de uniformes para o seu negócio.
              </p>
            </div>
            <a
              href="/catalogo-jj-uniformes.pdf"
              download="Catalogo-JJ-Uniformes-2025.pdf"
              className="block sm:inline-block"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-xl"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Baixar Catálogo em PDF
              </Button>
            </a>
            <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">Arquivo PDF - Download gratuito</p>
          </div>

        </div>
      </div>
    </section>
  )
}
