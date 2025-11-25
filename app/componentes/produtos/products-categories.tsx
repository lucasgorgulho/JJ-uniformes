import { Stethoscope, Building2, Factory, Shirt, Sparkles, Users } from "lucide-react"

const categories = [
  { name: "Saúde", icon: Stethoscope },
  { name: "Corporativo", icon: Building2 },
  { name: "Industrial", icon: Factory },
  { name: "Polos", icon: Shirt },
  { name: "Elegante", icon: Sparkles },
  { name: "Equipes", icon: Users },
]

export function ProductsCategories() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900 text-center mb-10">Navegue por Categoria</h2>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {categories.map((category) => (
            <button key={category.name} className="flex flex-col items-center gap-3 group">
              <div className="w-16 h-16 rounded-full border-2 border-gray-200 flex items-center justify-center group-hover:border-teal-500 group-hover:bg-teal-50 transition-all">
                <category.icon className="w-7 h-7 text-gray-600 group-hover:text-teal-600 transition-colors" />
              </div>
              <span className="text-sm text-gray-700 group-hover:text-teal-600 transition-colors">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
