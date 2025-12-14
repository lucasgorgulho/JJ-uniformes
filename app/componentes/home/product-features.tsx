export function ProductFeatures() {
  const highlights = ["Tecidos de alta qualidade", "Personalização completa", "Entrega rápida"]

  return (
    <section className="  bg-white">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4 text-balance">
          Características dos Nossos Produtos
        </h2>
        <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-5 md:mb-6">
          Produtos desenvolvidos com as melhores práticas e tecnologias do mercado para garantir qualidade e satisfação
          em cada peça entregue
        </p>
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-2.5 md:gap-4">
          {highlights.map((item, index) => (
            <span
              key={index}
              className="inline-flex items-center justify-center gap-2 bg-teal-50 text-teal-700 px-4 py-2.5 rounded-full text-sm font-medium"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
