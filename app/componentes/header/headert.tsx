"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const navLinks = [
    { href: "/", label: "Início" },
    { href: "/produtos", label: "Produtos" },
    { href: "/catalogo", label: "Catálogo" },
    { href: "/quem_somos", label: "Quem Somos" },
    { href: "/contato", label: "Contato" },
    { href: "/orcamento", label: "Orçamento" },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <header className="bg-[#10827d] shadow relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1">
        <div className="flex justify-between items-center h-18 md:h-20">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
            aria-label="Menu"
          >
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 select-none absolute left-1/2 -translate-x-1/2 md:relative md:left-0 md:translate-x-0"
          >
            <Image
              src="/Distribuidora.svg"
              alt="JJ Uniformes"
              width={70}
              height={70}
              className="object-contain w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] transition-all duration-300"
              priority
            />
            <div className="leading-tight font-extrabold tracking-wide">
              <span
                className="block"
                style={{
                  color: "#ffffffff",
                  fontSize: "clamp(0.75rem, 2vw, 1.125rem)",
                  lineHeight: "1.2",
                }}
              >
                UNIFORMES
              </span>
              <span
                className="block"
                style={{
                  color: "#ffffffff",
                  fontSize: "clamp(0.75rem, 2vw, 1.125rem)",
                  lineHeight: "1.2",
                }}
              >
                PROFISSIONAIS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-2 py-2 text-lg font-medium transition-colors ${
                  isActive(link.href) ? "text-white font-semibold" : "text-white/75 hover:text-white"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-white rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          <div className="w-10 md:hidden" />
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`relative px-4 py-3 text-sm transition-colors ${
                  isActive(link.href) ? "text-white font-semibold" : "text-white/70 hover:text-white"
                }`}
              >
                <span className="flex items-center gap-3">
                  {isActive(link.href) && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-white rounded-r-full" />
                  )}
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
