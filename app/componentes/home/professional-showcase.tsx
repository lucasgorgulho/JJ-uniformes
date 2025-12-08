import { Award, Users, Clock, Shirt } from "lucide-react"
import Link from "next/link"

export function ProfessionalShowcase() {
  const stats = [
    {
      number: "15+",
      label: "anos de experiência no mercado",
      icon: Clock,
      color: "bg-teal-50 text-teal-600",
    },
    {
      number: "500+",
      label: "empresas atendidas",
      icon: Users,
      color: "bg-blue-50 text-blue-600",
    },
    {
      number: "50.000+",
      label: "uniformes entregues",
      icon: Shirt,
      color: "bg-pink-50 text-pink-600",
    },
    {
      number: "100%",
      label: "satisfação garantida",
      icon: Award,
      color: "bg-amber-50 text-amber-600",
    },
  ]

  return (
    <section className="py-12 md:py-16 px-5 md:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 mb-2 md:mb-3">
            <span className="text-teal-600">Tradição</span> e qualidade em cada peça que produzimos
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm md:text-base">
            Somos referência em uniformes corporativos, combinando tecnologia de ponta com atendimento personalizado.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 mb-8 md:mb-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 md:p-5 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md transition-all"
            >
              <div
                className={`w-10 h-10 md:w-12 md:h-12 rounded-xl ${stat.color} flex items-center justify-center mb-2 md:mb-3`}
              >
                <stat.icon className="w-5 h-5" />
              </div>
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 mb-0.5 md:mb-1">
                {stat.number}
              </span>
              <span className="text-[10px] sm:text-xs md:text-sm text-slate-500">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/quem_somos"
            className="inline-flex items-center justify-center px-5 py-2.5 bg-teal-600 text-white text-sm font-medium rounded-lg hover:bg-teal-700 transition-colors"
          >
            Conheça nossa história
          </Link>
          <Link
            href="/orcamento"
            className="inline-flex items-center justify-center px-5 py-2.5 border border-slate-300 text-slate-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
          >
            Solicitar orçamento
          </Link>
        </div>
      </div>
    </section>
  )
}
