import { CheckCircle2 } from "lucide-react"

export function ProductFeatures() {
  const highlights = ["Tecidos de alta qualidade", "Personalização completa", "Entrega rápida"]

  return (
    <section className="py-10 sm:py-16 bg-white">
      <div className="container mx-auto px-5 sm:px-6 text-center max-w-3xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 text-balance">
          Características dos Nossos Produtos
        </h2>
        <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-6">
          Produtos desenvolvidos com as melhores práticas e tecnologias do mercado para garantir qualidade e satisfação
          em cada peça entregue
        </p>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {highlights.map((item, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1.5 bg-teal-50 text-teal-700 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium"
            >
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
