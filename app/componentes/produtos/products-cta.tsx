import Link from "next/link"
import { MessageCircle, Phone } from "lucide-react"

export function ProductsCta() {
  return (
    <section className="py-6 md:py-8 bg-gradient-to-r from-teal-600 to-teal-500">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Texto */}
          <div className="text-center md:text-left">
            <h3 className="text-lg md:text-xl font-bold text-white mb-1">Não encontrou o que procura?</h3>
            <p className="text-sm text-white/80">Fale conosco e criamos o uniforme ideal para você.</p>
          </div>

          {/* Botões */}
          <div className="flex gap-3">
            <Link
              href="https://wa.me/5511999999999"
              target="_blank"
              className="flex items-center gap-2 px-5 py-3 bg-white text-teal-600 rounded-full font-semibold text-sm hover:bg-gray-100 active:scale-95 transition-all shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">WhatsApp</span>
              <span className="sm:hidden">Chamar</span>
            </Link>
            <Link
              href="/orcamento"
              className="flex items-center gap-2 px-5 py-3 bg-teal-700 text-white rounded-full font-semibold text-sm hover:bg-teal-800 active:scale-95 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Orçamento</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
