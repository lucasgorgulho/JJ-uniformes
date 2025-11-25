import Image from "next/image"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function ContactHero() {
  return (
    <section className="relative min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/professional-customer-service-team-wearing-headsets.jpg"
          alt="Equipe de atendimento JJ Uniformes"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 via-gray-900/90 to-gray-900/80" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="max-w-2xl mx-auto lg:mx-0">
          {/* Left Content */}
          <div className="text-white text-center lg:text-left">
            <span className="inline-block bg-teal-500/20 text-teal-400 px-3 py-1.5 rounded-full text-xs font-semibold mb-3 backdrop-blur-sm border border-teal-500/30">
              Estamos aqui para ajudar
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 text-balance leading-tight">
              Fale <span className="text-teal-400">Conosco</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-300 mb-5 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Entre em contato com nossa equipe especializada.
            </p>

            <div className="grid grid-cols-2 gap-2 sm:gap-3 max-w-md mx-auto lg:mx-0">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl p-2.5 sm:p-3 border border-white/10">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-gray-400">Telefone</p>
                  <p className="text-white font-medium text-xs truncate">(11) 9999-9999</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl p-2.5 sm:p-3 border border-white/10">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-gray-400">E-mail</p>
                  <p className="text-white font-medium text-xs truncate">contato@jj.com</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl p-2.5 sm:p-3 border border-white/10">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-gray-400">Endereço</p>
                  <p className="text-white font-medium text-xs truncate">São Paulo, SP</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl p-2.5 sm:p-3 border border-white/10">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-gray-400">Horário</p>
                  <p className="text-white font-medium text-xs truncate">Seg-Sex: 8h-18h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[30px] sm:h-[40px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60L60 52.5C120 45 240 30 360 22.5C480 15 600 15 720 18.75C840 22.5 960 30 1080 33.75C1200 37.5 1320 37.5 1380 37.5L1440 37.5V60H0Z"
            fill="#f9fafb"
          />
        </svg>
      </div>
    </section>
  )
}
