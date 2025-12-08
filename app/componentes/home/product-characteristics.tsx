const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
    title: "Tecidos Sustentáveis",
    description: "Materiais ecológicos",
    color: "bg-teal-50 text-teal-600",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Qualidade Certificada",
    description: "Testes rigorosos",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    title: "Conforto Garantido",
    description: "Ergonomia avançada",
    color: "bg-pink-50 text-pink-600",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
    title: "Design Moderno",
    description: "Estilo contemporâneo",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
    title: "Tecido Respirável",
    description: "Ventilação ideal",
    color: "bg-cyan-50 text-cyan-600",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    title: "Alta Durabilidade",
    description: "Resistência máxima",
    color: "bg-orange-50 text-orange-600",
  },
]

export function ProductCharacteristics() {
  return (
    <section className="py-12 md:py-16 px-5 md:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 mb-2 md:mb-3">
            <span className="text-teal-600">Diferenciais</span> dos Nossos Produtos
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm md:text-base">
            Produtos desenvolvidos com os mais altos padrões de qualidade.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 md:p-5 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md transition-all"
            >
              <div
                className={`w-10 h-10 md:w-12 md:h-12 rounded-xl ${feature.color} flex items-center justify-center mb-2 md:mb-3`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xs sm:text-sm md:text-base font-semibold text-slate-800 mb-0.5 md:mb-1">
                {feature.title}
              </h3>
              <p className="text-[10px] sm:text-xs md:text-sm text-slate-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
