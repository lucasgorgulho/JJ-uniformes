import { Leaf, Droplet, Sun, Award } from "lucide-react"

const stats = [
  {
    icon: Leaf,
    value: "1000+",
    label: "Árvores plantadas",
    color: "text-green-500",
  },
  {
    icon: Droplet,
    value: "98%",
    label: "Ingredientes naturais",
    color: "text-blue-500",
  },
  {
    icon: Sun,
    value: "100%",
    label: "Energia renovável",
    color: "text-yellow-500",
  },
  {
    icon: Award,
    value: "15+",
    label: "Prêmios recebidos",
    color: "text-purple-500",
  },
]

export function ImpactSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-teal-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Nosso Impacto Positivo</h2>
            <p className="text-gray-600">Resultados concretos do nosso compromisso com a sustentabilidade</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className={`p-3 rounded-full bg-white shadow-sm ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
