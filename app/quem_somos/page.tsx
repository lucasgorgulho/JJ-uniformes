import Image from "next/image"
import { CheckCircle, Award, Users, Leaf } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">

      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/professional-team-wearing-corporate-uniforms-modern.jpg"
            alt="Equipe profissional JJ Uniformes"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/95 via-teal-800/80 to-teal-700/60" />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="max-w-3xl">

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance leading-tight">
              JJ <span className="text-teal-300">Uniformes</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">Quem somos?</p>
            <p className="text-lg text-gray-200 max-w-2xl leading-relaxed">
              Há mais de 15 anos transformando a imagem de empresas com uniformes profissionais de alta qualidade.
            </p>

            {/* Stats Cards */}
            <div className="flex flex-wrap gap-4 mt-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20">
                <p className="text-3xl font-bold text-white">15+</p>
                <p className="text-sm text-gray-300">Anos de experiência</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20">
                <p className="text-3xl font-bold text-white">5000+</p>
                <p className="text-sm text-gray-300">Clientes atendidos</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20">
                <p className="text-3xl font-bold text-white">100k+</p>
                <p className="text-sm text-gray-300">Uniformes entregues</p>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Side */}
            <div className="relative order-2 lg:order-1">
              <div className="relative h-[400px] md:h-[550px] rounded-2xl overflow-hidden">
                <Image
                  src="/professional-working-outdoors.jpg"
                  alt="Profissional trabalhando com confiança"
                  fill
                  className="object-cover"
                />
                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-teal-500/20 rounded-2xl -z-10" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-teal-500/10 rounded-2xl -z-10" />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-8 -right-4 md:right-8 bg-white p-6 rounded-xl shadow-2xl max-w-[200px]">
                <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-1">15</div>
                <div className="text-lg font-semibold text-gray-900">Anos</div>
                <div className="text-sm text-gray-500">de dedicação à excelência</div>
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2">
              <span className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Nossa Missão
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance leading-tight text-gray-900">
                Uniformes que{" "}
                <span className="text-teal-600 relative">
                  conectam
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                    <path d="M2 10C50 2 150 2 198 10" stroke="#14b8a6" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>{" "}
                você ao profissionalismo
              </h2>

              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Nascida em 2009 com a missão de fornecer uniformes profissionais de alta qualidade, a JJ Uniformes
                  revolucionou o mercado brasileiro ao desenvolver produtos que respeitam tanto o profissional quanto o
                  meio ambiente.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Alta Performance</h4>
                    <p className="text-sm text-gray-500">Tecidos respiráveis e confortáveis</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Corte Anatômico</h4>
                    <p className="text-sm text-gray-500">Liberdade de movimento</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sustentabilidade</h4>
                    <p className="text-sm text-gray-500">Compromisso ambiental</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Personalização</h4>
                    <p className="text-sm text-gray-500">Identidade corporativa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] md:h-[600px] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/navy-blue-professional-uniform.jpg"
                alt="Uniforme profissional azul marinho"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-8">
              <div className="space-y-2">
                <p className="text-teal-600 font-semibold uppercase tracking-wider text-sm">LINHA PREMIUM</p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Oot Bovice</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Conforto e estilo que se encontram. Desenvolvido com tecnologia de ponta, este uniforme oferece máxima
                durabilidade e conforto durante toda a jornada de trabalho. Ideal para profissionais que buscam
                elegância e praticidade em suas atividades diárias.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-md hover:bg-gray-900 hover:text-white transition-colors">
                  Download
                </button>
                <button className="px-8 py-3 bg-gray-900 text-white font-semibold rounded-md hover:bg-gray-800 transition-colors">
                  Saiba mais
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Nossos <span className="text-teal-600">Valores</span>
            </h2>
            <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
              Princípios que guiam cada decisão e cada produto que desenvolvemos
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Sustentabilidade */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sustentabilidade</h3>
              <p className="text-gray-600 leading-relaxed">Compromisso com o meio ambiente em cada etapa da produção</p>
            </div>

            {/* Ética */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ética</h3>
              <p className="text-gray-600 leading-relaxed">
                Produtos livres de crueldade animal e ingredientes questionáveis
              </p>
            </div>

            {/* Biodiversidade */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Biodiversidade</h3>
              <p className="text-gray-600 leading-relaxed">
                Valorização da rica flora brasileira e seus ativos naturais
              </p>
            </div>

            {/* Comunidade */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comunidade</h3>
              <p className="text-gray-600 leading-relaxed">Apoio às comunidades locais e agricultura familiar</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Lines Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nossas Linhas de Produtos</h2>
            <p className="text-gray-600 text-lg">Soluções completas para cada necessidade profissional</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Linha Hospitalar */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src="/teal-medical-scrubs-uniform.jpg" alt="Linha Hospitalar" fill className="object-cover" />
                <div className="absolute top-4 left-4">
                  <span className="bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Conforto e higiene
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Linha Hospitalar</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-teal-600 rounded-full"></span>
                    Scrubs cirúrgicos
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-teal-600 rounded-full"></span>
                    Jalecos médicos
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-teal-600 rounded-full"></span>
                    Uniformes de enfermagem
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-teal-600 rounded-full"></span>
                    EPIs certificados
                  </li>
                </ul>
              </div>
            </div>

            {/* Linha Corporativa */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/professional-man-in-elegant-black-business-suit.jpg"
                  alt="Linha Corporativa"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Elegância profissional
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Linha Corporativa</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-teal-600 rounded-full"></span>
                    Camisas sociais
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-teal-600 rounded-full"></span>
                    Blazers executivos
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-teal-600 rounded-full"></span>
                    Calças alfaiataria
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-teal-600 rounded-full"></span>
                    Gravatas e acessórios
                  </li>
                </ul>
              </div>
            </div>

            {/* Linha Industrial */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src="/navy-blue-professional-uniform.jpg" alt="Linha Industrial" fill className="object-cover" />
                <div className="absolute top-4 left-4">
                  <span className="bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Resistência garantida
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Linha Industrial</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-teal-600 rounded-full"></span>
                    Macacões profissionais
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-teal-600 rounded-full"></span>
                    Calças cargo
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-teal-600 rounded-full"></span>
                    Camisas anti-chama
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-teal-600 rounded-full"></span>
                    Coletes refletivos
                  </li>
                </ul>
              </div>
            </div>

            {/* Linha Gastronomia */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src="/professional-uniform-folded.jpg" alt="Linha Gastronomia" fill className="object-cover" />
                <div className="absolute top-4 left-4">
                  <span className="bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Estilo e funcionalidade
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Linha Gastronomia</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-teal-600 rounded-full"></span>
                    Dólmãs de chef
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-teal-600 rounded-full"></span>
                    Aventais profissionais
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-teal-600 rounded-full"></span>
                    Calças de cozinha
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-teal-600 rounded-full"></span>
                    Toucas e chapéus
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Nossa <span className="text-teal-600">Indústria</span>
            </h2>
            <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
              Uma das mais modernas fábricas de uniformes profissionais do Brasil, equipada com tecnologia de ponta para
              garantir produtos de excelência.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Video/Image Section */}
            <div className="relative">
              <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden bg-gray-200">
                <Image
                  src="/modern-factory-industrial-facility-manufacturing.jpg"
                  alt="Fábrica JJ Uniformes"
                  fill
                  className="object-cover"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-teal-600 hover:bg-teal-700 rounded-full flex items-center justify-center shadow-2xl transition-colors group">
                    <svg
                      className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
                {/* Video Label */}
                <div className="absolute bottom-6 left-6 bg-gray-900/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
                  <span className="text-sm font-semibold">Tour pela nossa fábrica - 3:45</span>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Excelência em Cada Detalhe</h3>
                <p className="text-gray-600 leading-relaxed text-lg mb-8">
                  Nossa fábrica de 5.000m² está localizada em São Paulo e conta com laboratórios próprios de P&D, área
                  de produção automatizada e centro de distribuição integrados.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Capacidade de produção:</span> 1 milhão de unidades/mês
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Laboratório próprio</span> com 15 pesquisadores
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Certificação</span> ISO 9001:2015
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Certificação</span> ABNT (Associação Brasileira de Normas Técnicas)
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Certificação</span> BNDES — Fornecedor Afiliado
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Certificação</span> de Aprovação do Ministério do Trabalho (C.A.)
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Tecidos</span> Homologados Santista-TM
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">100% licenciada</span> pela ANVISA
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
