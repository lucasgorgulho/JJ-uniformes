"use client"

const categories = [
  {
    name: "Saúde",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    name: "Corporativo",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    name: "Industrial",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
  },
  {
    name: "Segurança",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
]

interface ProductsCategoriesProps {
  selectedCategory: string
  onSelectCategory: (category: string) => void
}

export function ProductsCategories({ selectedCategory, onSelectCategory }: ProductsCategoriesProps) {
  return (
    <section className="py-8 md:py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-lg md:text-2xl font-semibold text-gray-900 text-center mb-6 md:mb-10">
          Navegue por Categoria
        </h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <button onClick={() => onSelectCategory("Todos")} className="flex flex-col items-center gap-2 md:gap-3 group">
            <div
              className={`w-14 h-14 md:w-16 md:h-16 rounded-full border-2 flex items-center justify-center transition-all ${
                selectedCategory === "Todos"
                  ? "border-teal-500 bg-teal-50"
                  : "border-gray-200 group-hover:border-teal-500 group-hover:bg-teal-50"
              }`}
            >
              <svg
                className={`w-6 h-6 md:w-7 md:h-7 transition-colors ${
                  selectedCategory === "Todos" ? "text-teal-600" : "text-gray-600 group-hover:text-teal-600"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </div>
            <span
              className={`text-xs md:text-sm transition-colors ${
                selectedCategory === "Todos" ? "text-teal-600 font-medium" : "text-gray-700 group-hover:text-teal-600"
              }`}
            >
              Todos
            </span>
          </button>
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => onSelectCategory(category.name)}
              className="flex flex-col items-center gap-2 md:gap-3 group"
            >
              <div
                className={`w-14 h-14 md:w-16 md:h-16 rounded-full border-2 flex items-center justify-center transition-all ${
                  selectedCategory === category.name
                    ? "border-teal-500 bg-teal-50"
                    : "border-gray-200 group-hover:border-teal-500 group-hover:bg-teal-50"
                }`}
              >
                <svg
                  className={`w-6 h-6 md:w-7 md:h-7 transition-colors ${
                    selectedCategory === category.name ? "text-teal-600" : "text-gray-600 group-hover:text-teal-600"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={category.icon} />
                </svg>
              </div>
              <span
                className={`text-xs md:text-sm transition-colors ${
                  selectedCategory === category.name
                    ? "text-teal-600 font-medium"
                    : "text-gray-700 group-hover:text-teal-600"
                }`}
              >
                {category.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
