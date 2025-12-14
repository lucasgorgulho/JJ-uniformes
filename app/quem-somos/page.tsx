import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function SobrePage() {
  return (
    <main className="min-h-screen">
      <section className="relative min-h-[280px] sm:min-h-[350px] md:min-h-[450px] overflow-hidden">
        <Image
          src="/quem-somos/hero.jpg"
          alt="Equipe JJ Uniformes"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/75 to-gray-900/60" />

        <div className="relative z-10 h-full min-h-[280px] sm:min-h-[350px] md:min-h-[450px] flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <span className="inline-block text-teal-400 text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-2 md:mb-3">
                Quem Somos
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-3 md:mb-4">
                JJ <span className="text-teal-400">Uniformes</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-white/85 leading-relaxed max-w-lg">
                Há mais de 15 anos transformando a imagem de empresas com uniformes profissionais de alta qualidade.
              </p>

              {/* Stats inline */}
              <div className="flex flex-wrap gap-4 md:gap-6 mt-6 md:mt-8">
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-white">15+</p>
                  <p className="text-[10px] md:text-xs text-white/70">Anos</p>
                </div>
                <div className="w-px h-10 bg-white/20 hidden sm:block" />
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-white">5000+</p>
                  <p className="text-[10px] md:text-xs text-white/70">Clientes</p>
                </div>
                <div className="w-px h-10 bg-white/20 hidden sm:block" />
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-white">100k+</p>
                  <p className="text-[10px] md:text-xs text-white/70">Uniformes</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full h-[30px] sm:h-[40px]" preserveAspectRatio="none">
            <path
              d="M0 60L60 52C120 44 240 28 360 22C480 16 600 20 720 24C840 28 960 32 1080 34C1200 36 1320 36 1380 36L1440 36V60H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative h-[300px] md:h-[450px] rounded-2xl md:rounded-3xl overflow-hidden">
                <Image
                  src="/fashion-showroom-with-professional-uniforms-on-dis.jpg"
                  alt="Profissional trabalhando"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 right-4 md:-bottom-6 md:right-8 bg-white p-4 md:p-5 rounded-xl md:rounded-2xl shadow-xl">
                <div className="text-3xl md:text-4xl font-bold text-teal-600">15</div>
                <div className="text-base md:text-lg font-semibold text-gray-900">Anos</div>
                <div className="text-xs md:text-sm text-gray-500">de dedicação</div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="inline-block bg-teal-100 text-teal-700 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6">
                Nossa Missão
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 leading-tight text-gray-900">
                Uniformes que <span className="text-teal-600">conectam</span> você ao profissionalismo
              </h2>

              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6 md:mb-8">
                Nascida em 2009 com a missão de fornecer uniformes profissionais de alta qualidade, a JJ Uniformes
                revolucionou o mercado brasileiro ao desenvolver produtos que respeitam tanto o profissional quanto o
                meio ambiente.
              </p>

              {/* Features Grid with better responsiveness */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-white p-3 sm:p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-2 sm:mb-3">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-0.5 sm:mb-1">Alta Performance</h4>
                  <p className="text-xs sm:text-sm text-gray-500 leading-snug">Tecidos respiráveis</p>
                </div>
                <div className="bg-white p-3 sm:p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-2 sm:mb-3">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-0.5 sm:mb-1">Corte Anatômico</h4>
                  <p className="text-xs sm:text-sm text-gray-500 leading-snug">Liberdade de movimento</p>
                </div>
                <div className="bg-white p-3 sm:p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-2 sm:mb-3">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-0.5 sm:mb-1">Sustentabilidade</h4>
                  <p className="text-xs sm:text-sm text-gray-500 leading-snug">Compromisso ambiental</p>
                </div>
                <div className="bg-white p-3 sm:p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-2 sm:mb-3">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-0.5 sm:mb-1">Personalização</h4>
                  <p className="text-xs sm:text-sm text-gray-500 leading-snug">Identidade corporativa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section with responsive cards */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
              Nossos <span className="text-teal-600">Valores</span>
            </h2>
            <p className="text-sm md:text-base text-gray-600 mt-2 md:mt-3 max-w-2xl mx-auto">
              Princípios que guiam cada decisão e cada produto que desenvolvemos
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Sustentabilidade",
                desc: "Compromisso com o meio ambiente",
                icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
              },
              {
                title: "Ética",
                desc: "Produtos livres de crueldade",
                icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
              },
              {
                title: "Qualidade",
                desc: "Excelência em cada peça",
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                title: "Comunidade",
                desc: "Apoio às comunidades locais",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="bg-white p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all flex flex-col"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                  <svg
                    className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-teal-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                  </svg>
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-1 sm:mb-1.5">
                  {value.title}
                </h3>
                <p className="text-[11px] sm:text-xs md:text-sm text-gray-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Redesigned product lines section */}
      <section className="py-12 md:py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Nossas Linhas de <span className="text-teal-400">Produtos</span>
            </h2>
            <p className="text-sm text-slate-400 max-w-xl mx-auto">
              Soluções completas para cada necessidade profissional
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center max-w-5xl mx-auto">
            {/* Image */}
            <div className="relative">
              <div className="relative h-[280px] md:h-[380px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/professional-man-in-elegant-black-business-suit.jpg"
                  alt="Profissional usando uniforme executivo"
                  fill
                  className="object-cover object-top"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 bg-teal-600 text-white px-3 py-2 rounded-lg shadow-lg">
                <p className="text-lg md:text-xl font-bold leading-none">100%</p>
                <p className="text-xs opacity-90">Nacional</p>
              </div>
            </div>

            {/* Cards */}
            <div className="space-y-3">
              {[
                {
                  title: "Linha Executiva Premium",
                  items: [
                    "Tecidos nobres e corte impecável",
                    "Diversos tamanhos disponíveis",
                    "Ambientes empresariais",
                  ],
                },
                {
                  title: "Conforto e Durabilidade",
                  items: ["Tecnologia anti-rugas", "Respirabilidade garantida", "Costuras reforçadas"],
                },
                {
                  title: "Personalização Completa",
                  items: ["Bordados em alta definição", "Cores exclusivas", "Consultoria especializada"],
                },
              ].map((card, i) => (
                <div key={i} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                  <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2">{card.title}</h3>
                  <ul className="space-y-1.5">
                    {card.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
                        <svg
                          className="w-3.5 h-3.5 text-teal-600 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center mt-8 md:mt-10">
            <Link
              href="/catalogo"
              className="bg-teal-600 hover:bg-teal-500 text-white px-5 py-2.5 rounded-md font-medium text-sm transition-colors inline-flex items-center justify-center gap-2"
            >
              Conheça nossos produtos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industry Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
              Nossa <span className="text-teal-600">Indústria</span>
            </h2>
            <p className="text-sm md:text-base text-gray-600 mt-2 md:mt-3 max-w-2xl mx-auto">
              Uma das mais modernas fábricas de uniformes profissionais do Brasil
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative h-[250px] md:h-[400px] rounded-2xl md:rounded-3xl overflow-hidden bg-gray-200">
              <Image
                src="/modern-factory-industrial-facility-manufacturing.jpg"
                alt="Fábrica JJ Uniformes"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-14 h-14 md:w-20 md:h-20 bg-teal-600 hover:bg-teal-700 rounded-full flex items-center justify-center shadow-2xl transition-colors">
                  <svg className="w-5 h-5 md:w-8 md:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                Excelência em Cada Detalhe
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6 md:mb-8">
                Nossa fábrica de 5.000m² está localizada em São Paulo e conta com laboratórios próprios de P&D, área de
                produção automatizada e centro de distribuição integrados.
              </p>

              <div className="space-y-3 md:space-y-4">
                {[
                  "Capacidade: 1 milhão de unidades/mês",
                  "Laboratório próprio com 15 pesquisadores",
                  "Certificação ISO 9001:2015",
                  "100% licenciada pela ANVISA",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 md:gap-3">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-teal-600 rounded-full"></div>
                    </div>
                    <p className="text-sm md:text-base text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
