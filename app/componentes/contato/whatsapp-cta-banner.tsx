import { MessageCircle } from "lucide-react"
import Link from "next/link"

export function WhatsAppCtaBanner() {
  const whatsappNumber = "5511999999999"
  const message = encodeURIComponent("Olá! Gostaria de solicitar um orçamento de uniformes.")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`

  return (
    <section className="relative overflow-hidden bg-[#1a1a1a] py-16">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-0 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#25D366]" />
        <div className="absolute bottom-0 right-0 h-48 w-48 translate-x-1/4 translate-y-1/4 rounded-full bg-[#128C7E]" />
      </div>

      <div className="container relative mx-auto px-4 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-balance text-3xl font-bold text-white md:text-4xl">
            Prefere falar <span className="text-[#25D366]">diretamente</span> conosco?
          </h2>
          <p className="mt-4 text-pretty text-lg text-gray-300">
            Entre em contato pelo WhatsApp e tire suas dúvidas em tempo real. Nossa equipe está pronta para ajudar você
            a encontrar o uniforme perfeito.
          </p>
          <Link
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-[#128C7E] hover:scale-105"
          >
            <MessageCircle className="h-6 w-6" />
            Chamar no WhatsApp
          </Link>
        </div>
      </div>
    </section>
  )
}
