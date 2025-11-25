import { Leaf, ShieldCheck, Heart, Sparkles, Droplets, Sun } from "lucide-react"

export function ProductCharacteristics() {
  const features = [
    {
      icon: Leaf,
      title: "Tecidos Sustentáveis",
      description: "Tecidos ecológicos e processos sustentáveis.",
      color: "bg-teal-50 text-teal-600",
    },
    {
      icon: ShieldCheck,
      title: "Qualidade Certificada",
      description: "Rigorosos testes de qualidade e durabilidade.",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: Heart,
      title: "Conforto Garantido",
      description: "Ergonomia para longas jornadas de trabalho.",
      color: "bg-pink-50 text-pink-600",
    },
    {
      icon: Sparkles,
      title: "Design Moderno",
      description: "Contemporâneo e elegante para sua equipe.",
      color: "bg-amber-50 text-amber-600",
    },
    {
      icon: Droplets,
      title: "Tecido Respirável",
      description: "Ventilação adequada e absorção de umidade.",
      color: "bg-cyan-50 text-cyan-600",
    },
    {
      icon: Sun,
      title: "Alta Durabilidade",
      description: "Resistência a lavagens e uso intensivo.",
      color: "bg-orange-50 text-orange-600",
    },
  ]

  return (
    <section className="py-12 sm:py-16 px-5 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-3 sm:mb-4">
            <span className="text-teal-600">Diferenciais</span> dos Nossos Produtos
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Produtos desenvolvidos com os mais altos padrões de qualidade para sua equipe profissional.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all"
            >
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl ${feature.color} flex items-center justify-center mb-3 sm:mb-4`}
              >
                <feature.icon className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-slate-800 mb-1 sm:mb-2">{feature.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed hidden sm:block">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
