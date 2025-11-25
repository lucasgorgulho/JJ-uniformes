import Image from "next/image"
import { FileText, Clock, CheckCircle, Shield } from "lucide-react"

export function QuoteHero() {
  return (
    <section className="relative min-h-[380px] sm:min-h-[420px] md:min-h-[500px] overflow-hidden">
      <Image
        src="/business-meeting-handshake-professional-office-mod.jpg"
        alt="Solicite seu Orçamento"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 via-teal-900/90 to-teal-800/80" />

      <div className="relative z-10 h-full min-h-[380px] sm:min-h-[420px] md:min-h-[500px] flex items-center">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-3 sm:mb-4">
              Solicite seu
              <br />
              <span className="text-teal-400">Orçamento</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-5 sm:mb-8 max-w-xl">
              Preencha o formulário abaixo e receba uma proposta personalizada para as necessidades da sua empresa.
            </p>

            <div className="flex gap-2 sm:gap-4 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
              <div className="flex-shrink-0 flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-white/20">
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-400" />
                <span className="text-white text-xs sm:text-sm whitespace-nowrap">Resposta em 24h</span>
              </div>
              <div className="flex-shrink-0 flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-white/20">
                <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-400" />
                <span className="text-white text-xs sm:text-sm whitespace-nowrap">Sem compromisso</span>
              </div>
              <div className="flex-shrink-0 flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-white/20">
                <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-400" />
                <span className="text-white text-xs sm:text-sm whitespace-nowrap">100% Seguro</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
