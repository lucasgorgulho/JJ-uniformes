import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] md:min-h-screen overflow-hidden">
      <Image
        src="/hero/hero-bg.jpg"
        alt="JJ Uniformes - Uniformes Profissionais"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900/95 via-gray-900/80 to-gray-900/60" />

      <div className="relative z-10 min-h-[70vh] sm:min-h-[80vh] md:min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-5 md:px-12">
          <div className="max-w-2xl text-center sm:text-left mx-auto sm:mx-0">
            <span className="inline-block text-teal-300 text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-3 sm:mb-4 md:mb-6">
              Desde 2009 vestindo profissionais
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-5 sm:mb-6 md:mb-10 leading-[1.1]">
              Uniformes que
              <br />
              <span className="text-teal-400">transformam</span>
            </h1>

            <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:gap-6 md:gap-10">
              <div>
                <p className="text-xl sm:text-3xl md:text-4xl font-bold text-white">15+</p>
                <p className="text-[10px] sm:text-xs md:text-sm text-white/60">Anos</p>
              </div>
              <div className="w-px h-12 bg-white/20 hidden sm:block" />
              <div>
                <p className="text-xl sm:text-3xl md:text-4xl font-bold text-white">5000+</p>
                <p className="text-[10px] sm:text-xs md:text-sm text-white/60">Clientes</p>
              </div>
              <div className="w-px h-12 bg-white/20 hidden sm:block" />
              <div>
                <p className="text-xl sm:text-3xl md:text-4xl font-bold text-white">100k+</p>
                <p className="text-[10px] sm:text-xs md:text-sm text-white/60">Entregas</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[40px] sm:h-[50px] md:h-[80px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80L60 68C120 56 240 32 360 24C480 16 600 24 720 32C840 40 960 48 1080 50C1200 52 1320 48 1380 46L1440 44V80H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
