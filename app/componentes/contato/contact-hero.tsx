import Image from "next/image"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function ContactHero() {
  return (
    <section className="relative min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/contato/contact-hero.jpg"
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
