"use client";

import { LuAward, LuBuilding2, LuCheck, LuShield, LuUsers, LuFactory } from "react-icons/lu";

import { FaHandshake, FaMedal, FaLightbulb } from "react-icons/fa6";
import Image from "next/image";

export default function QuemSomos() {
  return (
    <main className="w-full bg-white text-black pb-24 pt-10">
      {/* SECTION 1 — HERO + TEXTO PRINCIPAL */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* TEXTO LADO ESQUERDO */}
        <div className="flex flex-col gap-5">
          <span className="bg-[#10827d]/15 text-[#10827d] px-5 py-1 rounded-full w-max text-sm font-semibold tracking-wide flex items-center gap-2">
            <LuFactory className="text-[#10827d]" size={18} />
            SOBRE NÓS
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Para a JJ Uniformes, a excelência começa com{" "}
            <span className="text-[#10827d]">qualidade</span> e{" "}
            <span className="text-[#10827d]">compromisso</span> desde o primeiro passo.
          </h1>

          {/* Mini indicadores */}
          <div className="grid grid-cols-3 gap-4 pt-6 text-center">
            {[
              { icon: <LuAward size={28} />, value: "15+", label: "Anos de Experiência" },
              { icon: <LuCheck size={28} />, value: "100%", label: "Qualidade Garantida" },
              { icon: <LuUsers size={28} />, value: "Excelência", label: "No Atendimento" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center bg-[#10827d]/5 rounded-xl py-4 hover:bg-[#10827d]/10 transition-all"
              >
                <div className="text-[#10827d] mb-2">{item.icon}</div>
                <span className="text-2xl sm:text-3xl font-bold text-[#10827d]">{item.value}</span>
                <p className="text-xs sm:text-sm opacity-70">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* TEXTO LADO DIREITO */}
        <div className="flex flex-col gap-6 text-base sm:text-lg leading-relaxed text-gray-800">
          <p>
            A JJ Uniformes™ atua há mais de 15 anos no mercado de uniformes profissionais,
            atendendo instituições públicas e empresas privadas dos setores industrial,
            comercial e de prestação de serviços.
          </p>

          <p>
            Com forte presença em todo o Brasil, oferecemos soluções completas em uniformes
            personalizados, consultoria especializada e suporte pós-venda, garantindo alta
            qualidade e um atendimento que acompanha cada etapa do processo.
          </p>

          <div className="bg-[#10827d]/10 border-l-4 border-[#10827d] p-5 sm:p-6 rounded-xl flex items-start gap-3">
            <LuShield className="text-[#10827d] mt-1" size={24} />
            <p>
              Nossa produção segue padrões rígidos de qualidade, utilizando matéria-prima
              selecionada, processos normatizados e logística eficiente para garantir
              segurança, agilidade e resultados superiores.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — MISSÃO, VISÃO, VALORES */}
      <section className="max-w-7xl mx-auto px-4 mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Missão",
            icon: <FaHandshake className="text-white" size={24} />,
            text: "Proporcionar eficiência aos nossos clientes por meio de matéria-prima de qualidade, processos normatizados e atendimento de excelência.",
          },
          {
            title: "Visão",
            icon: <FaLightbulb className="text-white" size={24} />,
            text: "Consolidar-se como referência nacional no fornecimento de uniformes profissionais, com inovação e capacitação contínua de nossa equipe.",
          },
          {
            title: "Valores",
            icon: <FaMedal className="text-white" size={24} />,
            text: (
              <ul className="list-disc list-inside text-sm leading-relaxed space-y-1">
                <li>Ética e Transparência</li>
                <li>Respeito e Cordialidade</li>
                <li>Agilidade e Compromisso</li>
                <li>Simplicidade e Acessibilidade</li>
                <li>Valorização do Capital Humano</li>
              </ul>
            ),
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-[#10827d] text-white p-7 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#0b5d59]/30 relative overflow-hidden"
          >
            {/* Ícone no canto */}
            <div className="absolute top-5 right-5 opacity-20">
              {item.icon}
            </div>

            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white/20 p-2 rounded-lg">{item.icon}</div>
              <h2 className="text-xl sm:text-2xl font-semibold tracking-wide">{item.title}</h2>
            </div>

            <div className="text-sm sm:text-base leading-relaxed opacity-90">{item.text}</div>
          </div>
        ))}
      </section>

      {/* SECTION 3 — CERTIFICAÇÕES */}
      <section className="max-w-6xl mx-auto px-4 mt-20 text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#004b44] mb-6 flex items-center gap-2 justify-center sm:justify-start">
          <LuBuilding2 className="text-[#10827d]" size={26} />
          Certificações e Normas
        </h2>

        <ul className="bg-[#10827d]/10 border-l-4 border-[#10827d] text-gray-800 p-6 sm:p-8 rounded-2xl leading-relaxed grid gap-3 text-sm sm:text-base">
          <li>✔️ ISO 9001 / ISO 14001</li>
          <li>✔️ ABNT (Associação Brasileira de Normas Técnicas)</li>
          <li>✔️ Certificação BNDES — Fornecedor Afiliado</li>
          <li>✔️ Certificado de Aprovação do Ministério do Trabalho (C.A.)</li>
          <li>✔️ Tecidos Homologados Santista-TM</li>
        </ul>
      </section>

      {/* SECTION 4 — ESTRUTURA */}
      <section className="max-w-7xl mx-auto px-4 mt-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#004b44] mb-6 text-center sm:text-left">
          Nossa Estrutura
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mb-6 text-center sm:text-left">
          * Espaço modular para imagens, cards ou ícones da empresa.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[LuFactory, LuUsers, LuAward].map((Icon, i) => (
            <div
              key={i}
              className="h-40 sm:h-48 bg-[#10827d]/15 rounded-2xl border border-[#10827d]/10 shadow-sm hover:shadow-lg transition-all flex flex-col items-center justify-center gap-3"
            >
              <Icon className="text-[#10827d]" size={40} />
              <span className="font-medium text-[#004b44] text-sm sm:text-base">
                Estrutura {i + 1}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
