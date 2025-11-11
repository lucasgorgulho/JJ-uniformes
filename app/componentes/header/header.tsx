"use client";

import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="bg-[#10827d] shadow relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-26">
          
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/Distribuidora.svg"
              alt="JJ Uniformes"
              width={110}
              height={110}
              className="object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-white-700 hover:text-gray-900">Home</Link>
            <Link href="/" className="text-white-700 hover:text-gray-900">Quem Somos</Link>
            <Link href="/" className="text-white-700 hover:text-gray-900">Produtos</Link>
            <Link href="/" className="text-white-700 hover:text-gray-900">Serviços</Link>
            <Link href="/" className="text-white-700 hover:text-gray-900">Contato</Link>
          </nav>

          {/* Botão Mobile */}
          <MobileMenu />
        </div>
      </div>

      <div className="w-full h-[2px] bg-white/20"></div>
    </header>
  );
}
