import Image from "next/image"
import { ArrowRight, MessageCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] overflow-hidden">
      <Image
        src="/professional-business-team-wearing-elegant-corpora.jpg"
        alt="JJ Uniformes - Uniformes Profissionais"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-teal-900/95 via-teal-800/80 to-teal-900/60 sm:to-transparent" />

      <div className="relative z-10 h-full min-h-[85vh] sm:min-h-[90vh] flex items-center">
        <div className="container mx-auto px-5 sm:px-6 md:px-12">
          <div className="max-w-2xl">
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-4 sm:mb-6">
              JJ
              <span className="text-teal-300">Uniformes</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/85 leading-relaxed mb-6 sm:mb-8 max-w-lg">
              Vestindo profissionais com excelência há mais de 10 anos. Qualidade, conforto e estilo em cada peça.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href="/produtos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-xl transition-all active:scale-[0.98]"
              >
                Ver Produtos
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://wa.me/5511987654321"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl backdrop-blur-sm border border-white/20 transition-all active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 80L60 70C120 60 240 40 360 30C480 20 600 20 720 25C840 30 960 40 1080 45C1200 50 1320 50 1380 50L1440 50V80H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
