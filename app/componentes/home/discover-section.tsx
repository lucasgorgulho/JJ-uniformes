import Image from "next/image"

const collections = [
  {
    title: "Linha Executiva",
    image: "/professional-man-in-elegant-black-business-suit.jpg",
    cta: "Descubra",
    href: "/executiva",
  },
  {
    title: "Linha Hospitalar",
    image: "/teal-medical-scrubs-uniform.jpg",
    cta: "Descubra",
    href: "/hospitalar",
  },
  {
    title: "Linha Industrial",
    image: "/professional-working-outdoors.jpg",
    cta: "Descubra",
    href: "/industrial",
  },
  {
    title: "Personalização",
    image: "/professional-uniform-catalog-cover-design-elegant.jpg",
    cta: "Descubra",
    href: "/personalizacao",
  },
]

export function DiscoverSection() {
  return (
    <section className="py-12 md:py-20 bg-slate-900">
      <div className="container mx-auto px-5 md:px-6">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-slate-400 text-sm md:text-base uppercase tracking-[0.2em] mb-2">Descubra</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            JJ<span className="text-teal-400">Uniformes</span>
          </h2>
        </div>

        {/* Grid - 2x2 mobile, 4 cols desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto">
          {collections.map((item, index) => (
            <a key={index} href={item.href} className="group relative block overflow-hidden rounded-lg md:rounded-xl">
              {/* Image container */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                <h3 className="text-white font-semibold text-xs sm:text-sm md:text-base uppercase tracking-wide mb-0.5 md:mb-1">
                  {item.title}
                </h3>
                <span className="text-teal-400 text-[10px] sm:text-xs md:text-sm font-medium uppercase tracking-wider group-hover:underline">
                  {item.cta}
                </span>
                <div className="w-6 md:w-8 h-0.5 bg-teal-400 mt-1 md:mt-2 transition-all group-hover:w-10 md:group-hover:w-12" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
