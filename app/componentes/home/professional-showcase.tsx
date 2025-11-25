import Image from "next/image"
import { Check } from "lucide-react"

export function ProfessionalShowcase() {
  const features = [
    {
      title: "Linha Executiva Premium",
      points: [
        "Tecidos nobres e corte impecável",
        "Diversos tamanhos e modelagens",
        "Perfeitos para ambientes empresariais",
      ],
    },
    {
      title: "Conforto e Durabilidade",
      points: ["Tecnologia anti-rugas", "Respirabilidade garantida", "Costuras reforçadas"],
    },
    {
      title: "Personalização Completa",
      points: ["Bordados em alta definição", "Cores e acabamentos exclusivos", "Consultoria especializada"],
    },
  ]

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-b sm:bg-gradient-to-r from-slate-50 to-stone-100">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Image Section - Hidden on very small screens, shown above content on medium */}
          <div className="relative h-[300px] sm:h-[400px] lg:h-[550px] bg-white rounded-2xl shadow-xl overflow-hidden order-1 lg:order-1">
            <Image
              src="/professional-man-in-elegant-black-business-suit.jpg"
              alt="Uniforme Profissional Executivo"
              fill
              className="object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-2">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <ul className="space-y-2">
                  {feature.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-2 text-sm sm:text-base text-slate-600">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
