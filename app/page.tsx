"use client";

import Carousel from "./componentes/home/Carousel";
import { ShieldCheck, Shirt, Truck, Sparkles, Clock, Users } from "lucide-react";
import Image from "next/image";

const items = [
  { title: "Linha Fabrica", image: "/banner/fabril.png", bg: "from-blue-200 to-blue-400" },
  { title: "Linha Hospitalar", image: "/banner/hospitalar.svg", bg: "from-green-200 to-green-400" },
  { title: "Linha Escritório", image: "/banner/escritorio.svg", bg: "from-yellow-200 to-yellow-400" },
  { title: "Linha de Segurança", image: "/banner/seguranca.png", bg: "from-red-200 to-red-400" },
];

export default function HomePage() {
  return (
    <main className="bg-gradient-to-b from-[#ffffff] to-[#f7f8fa] min-h-screen">
      {/* 🧷 Banner principal */}
      <section className="text-center py-10 sm:py-16">
        <Carousel items={items} />
      </section>

      {/* 🧵 Nossos Serviços */}
      <section className="py-14 sm:py-20 bg-[#f1f5f4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#004b44] mb-3 sm:mb-4">
            Nossos Serviços
          </h2>
          <p className="text-gray-600 mb-10 sm:mb-12 text-base sm:text-lg max-w-2xl mx-auto">
            Oferecemos soluções completas em uniformes corporativos, com foco em qualidade, agilidade e personalização.
          </p>

          <div className="grid gap-6 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {[
              { icon: Shirt, title: "Confecção Sob Medida", desc: "Uniformes personalizados que refletem a identidade da sua empresa." },
              { icon: Sparkles, title: "Personalização", desc: "Bordados e estampas com alta durabilidade e acabamento profissional." },
              { icon: Truck, title: "Entrega Corporativa", desc: "Logística eficiente e prazos cumpridos em todo o território nacional." },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white w-[90%] sm:w-auto rounded-2xl shadow-lg p-6 sm:p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >
                <item.icon className="mx-auto mb-3 sm:mb-4 text-[#10827d]" size={40} />
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🛡️ Por que escolher a JJ Uniformes */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-[#e9f7f6] to-[#ffffff]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#004b44] mb-3 sm:mb-4">
            Por que escolher a JJ Uniformes
          </h2>
          <p className="text-gray-600 mb-10 sm:mb-12 text-base sm:text-lg max-w-2xl mx-auto">
            Tradição, tecnologia e compromisso com o cliente em cada detalhe.
          </p>

          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ShieldCheck, title: "Qualidade Garantida", desc: "Tecidos resistentes e acabamentos de alto padrão." },
              { icon: Clock, title: "Cumprimento de Prazos", desc: "Entregamos no tempo certo, sem comprometer a qualidade." },
              { icon: Sparkles, title: "Acabamento Impecável", desc: "Uniformes que valorizam a imagem profissional da sua equipe." },
              { icon: Users, title: "Atendimento Personalizado", desc: "Equipe dedicada para entender e atender suas necessidades." },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md p-5 sm:p-6 border border-[#10827d]/10 hover:border-[#10827d]/30 transition-all"
              >
                <item.icon className="mx-auto mb-2 sm:mb-3 text-[#169e9c]" size={36} />
                <h3 className="text-base sm:text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm mt-1 sm:mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 👕 Linhas em Destaque */}
      <section className="py-16 sm:py-24 bg-[#10827d]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12">
            Linhas em Destaque
          </h2>

          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item, i) => (
              <div
                key={i}
                className="relative bg-white/10 rounded-2xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-full h-40 sm:h-56 relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain p-5 sm:p-6 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="py-3 sm:py-4 bg-white/5 backdrop-blur text-center">
                  <h3 className="text-sm sm:text-lg font-semibold tracking-wide">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
