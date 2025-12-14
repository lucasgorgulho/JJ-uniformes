
import Image from "next/image"

import { BookOpen, FileText, Download } from "lucide-react"
import { Button } from "../ui/button"

export default function CatalogoDownload() {
  return (    
    <main >
      <section>
        
       
        <div className="absolute bottom-0 left-0 right-0">
      
        </div>
      </section>

      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-8 max-w-3xl mx-auto">
            <div className="text-center p-3 sm:p-4 md:p-6 bg-gray-50 rounded-xl sm:rounded-2xl">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-teal-600" />
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">+200</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-gray-600">Modelos</div>
            </div>
            <div className="text-center p-3 sm:p-4 md:p-6 bg-gray-50 rounded-xl sm:rounded-2xl">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-teal-600" />
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">50+</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-gray-600">Páginas</div>
            </div>
            <div className="text-center p-3 sm:p-4 md:p-6 bg-gray-50 rounded-xl sm:rounded-2xl">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <Download className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-teal-600" />
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">PDF</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-gray-600">Digital</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 sm:py-8 md:py-12 bg-gradient-to-br from-teal-50 to-gray-50">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 md:p-12 text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <FileText className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-teal-600" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                Catálogo JJ Uniformes 2025
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-md mx-auto">
                Todos os nossos produtos em um só lugar. Descubra as melhores opções de uniformes para o seu negócio.
              </p>
              <a href="/Apresentacao_JJ-Uniformes_2025.pdf" download="Catalogo-JJ-Uniformes-2025.pdf">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl"
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Baixar Catálogo em PDF
                </Button>
              </a>
              <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">Download gratuito</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
