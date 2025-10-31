"use client"

import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#3CB371] text-white">
      {/* 🔹 Linha divisória superior */}
      <div className="w-full h-[2px] bg-white/20"></div>

      {/* Seção principal */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-white/20">
        
        {/* Coluna 1 – Logo e descrição */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img 
            src="/Distribuidora.svg" 
            alt="JJ Uniformes" 
            width={50}
            height={50}
            className="object-contain"
            />
            <h2 className="text-2xl font-extrabold tracking-wide">
            Uniformes
            </h2>
        </div>
          <p className="text-sm text-white/90 leading-relaxed">
            Fábrica de uniformes profissionais com qualidade, conforto e
            personalização para sua empresa. Produzimos com excelência para destacar a sua marca.
          </p>
        </div>

        {/* Coluna 2 – Navegação */}
        <div className="md:mx-auto">
          <h3 className="text-lg font-semibold mb-4 border-l-4 border-white/60 pl-3">Navegação</h3>
          <ul className="space-y-2 text-white/90">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/" className="hover:text-white transition-colors">Sobre</Link></li>
            <li><Link href="/" className="hover:text-white transition-colors">Produtos</Link></li>
            <li><Link href="/" className="hover:text-white transition-colors">Serviços</Link></li>
            <li><Link href="/" className="hover:text-white transition-colors">Contato</Link></li>
          </ul>
        </div>

        {/* Coluna 3 – Contato */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-l-4 border-white/60 pl-3">Contato</h3>
          <ul className="space-y-3 text-white/90">
            <li className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-white/80" />
              Rua Exemplo, 123 – Cidade, UF
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-white/80" />
              (11) 99999-9999
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-white/80" />
              vendas@jjuniformes-sp.com.br
            </li>
          </ul>
        </div>
      </div>

      {/* Linha inferior */}
      <div className="py-4 bg-[#369d65]">
        <p className="text-center text-sm text-white/80">
          © {new Date().getFullYear()} <span className="font-semibold text-white">JJ Uniformes</span> — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
