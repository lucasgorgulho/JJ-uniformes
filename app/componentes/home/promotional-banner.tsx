import Link from "next/link"
import { Check, Clock, Users, Award, Shield } from "lucide-react"

export function PromotionalBanner() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Left - Content */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                </span>
                Qualidade Garantida
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 tracking-tight mb-4 leading-tight">
                Uniformes <span className="text-teal-600">Sob Medida</span>
              </h2>

              <p className="text-slate-600 text-sm md:text-base max-w-lg mx-auto md:mx-0 mb-6 leading-relaxed">
                Desenvolvemos uniformes personalizados que refletem a identidade da sua empresa. Do design à entrega,
                cuidamos de cada detalhe.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Link
                  href="/catalogo"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  Ver Catálogo
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/orcamento"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-700 font-medium rounded-lg transition-all"
                >
                  Solicitar Orçamento
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 sm:p-8 shadow-xl">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-6 text-center">Por que nos escolher?</h3>

                <div className="space-y-3 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4">
                  <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/15 transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white">100%</div>
                      <div className="text-xs text-slate-300">Personalizado</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/15 transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white">15+</div>
                      <div className="text-xs text-slate-300">Anos de experiência</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/15 transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white">48h</div>
                      <div className="text-xs text-slate-300">Orçamento rápido</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/15 transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white">+5000</div>
                      <div className="text-xs text-slate-300">Clientes atendidos</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-center gap-2 text-sm text-slate-300">
                    <Shield className="w-4 h-4 text-teal-400" />
                    Satisfação Garantida
                  </div>
                </div>
              </div>

              <div className="absolute -top-3 right-4 sm:-right-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                EXCLUSIVO
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
