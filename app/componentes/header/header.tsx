"use client";

import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="bg-[#10827d] shadow relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* 🔰 Logo + Título Responsivo */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 select-none"
          >
            <Image
              src="/Distribuidora.svg"
              alt="JJ Uniformes"
              width={110}
              height={110}
              className="object-contain w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] md:w-[110px] md:h-[110px] transition-all duration-300"
              priority
            />
            <div className="leading-tight font-extrabold tracking-wide">
              <span
                className="block"
                style={{
                  color: "#004b44",
                  fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
                  lineHeight: "1.2",
                }}
              >
                UNIFORMES
              </span>
              <span
                className="block"
                style={{
                  color: "#169e9c",
                  fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
                  lineHeight: "1.2",
                }}
              >
                PROFISSIONAIS
              </span>
            </div>
          </Link>

          {/* 🖥️ Menu Desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-white font-medium hover:text-gray-100 transition">
              Home
            </Link>
            <Link href="/quem_somos" className="text-white font-medium hover:text-gray-100 transition">
              Quem Somos
            </Link>
            <Link href="/produtos" className="text-white font-medium hover:text-gray-100 transition">
              Produtos
            </Link>
            <Link href="/orcamento" className="text-white font-medium hover:text-gray-100 transition">
              Orçamento
            </Link>
            <Link href="/contato" className="text-white font-medium hover:text-gray-100 transition">
              Contato
            </Link>
            <Link href="/catalogo" className="text-white font-medium hover:text-gray-100 transition">
              Catalogo
            </Link>
          </nav>

          {/* 📱 Menu Mobile */}
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>

      {/* Linha decorativa inferior */}
      <div className="w-full h-[2px] bg-white/20"></div>
    </header>
  );
}
