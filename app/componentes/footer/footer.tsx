import Link from "next/link"
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-5 sm:px-6 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">JJ</span>
              </div>
              <span className="text-lg font-bold">Uniformes</span>
            </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Sua loja especializada em uniformes profissionais. Qualidade e agilidade para sua empresa.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                className="w-10 h-10 bg-gray-800 hover:bg-teal-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                className="w-10 h-10 bg-gray-800 hover:bg-teal-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">Links Rápidos</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: "/produtos", label: "Produtos" },
                { href: "/catalogo", label: "Catálogo" },
                { href: "/orcamento", label: "Orçamento" },
                { href: "/about", label: "Sobre Nós" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-teal-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">Suporte</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: "/faq", label: "Perguntas Frequentes" },
                { href: "/delivery", label: "Entrega" },
                { href: "/exchange-return", label: "Trocas e Devoluções" },
                { href: "/terms", label: "Termos de Uso" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-teal-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://wa.me/5511987654321"
                  className="flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  (11) 98765-4321
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@jjuniformes.com.br"
                  className="flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  contato@jjuniformes.com.br
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>São Paulo, SP</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-5 sm:px-6 py-4">
          <p className="text-gray-500 text-xs sm:text-sm text-center">
            © 2025 JJ Uniformes. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
