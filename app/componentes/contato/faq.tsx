"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Qual o prazo de entrega?",
      answer: "O prazo varia de acordo com a quantidade e personalização, geralmente entre 15 a 20 dias úteis.",
    },
    {
      question: "Há pedido mínimo?",
      answer: "Para alguns modelos sim. Consulte nossa equipe de vendas para mais informações.",
    },
    {
      question: "Fazem personalização?",
      answer: "Sim! Oferecemos bordados, silk, patches e outros tipos de personalização.",
    },
    {
      question: "Atendem todo o Brasil?",
      answer: "Sim, realizamos entrega para todo território nacional através de transportadoras parceiras.",
    },
    {
      question: "Como funciona o orçamento?",
      answer: "Você pode solicitar um orçamento pelo formulário, WhatsApp ou telefone. Retornamos em até 24h úteis.",
    },
  ]

  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-3 py-1.5 rounded-full text-xs font-medium mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Tire suas dúvidas
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Perguntas Frequentes</h2>
          <p className="text-gray-600 text-sm">Respostas rápidas para as dúvidas mais comuns</p>
        </div>

        <div className="max-w-2xl mx-auto space-y-2 sm:space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={cn(
                "bg-gray-50 rounded-xl overflow-hidden transition-all duration-200",
                openIndex === index && "bg-teal-50 ring-1 ring-teal-200",
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-3.5 sm:p-4 text-left"
              >
                <span
                  className={cn("font-semibold text-sm pr-4", openIndex === index ? "text-teal-700" : "text-gray-900")}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 flex-shrink-0 transition-transform duration-200",
                    openIndex === index ? "rotate-180 text-teal-600" : "text-gray-400",
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-200",
                  openIndex === index ? "max-h-32" : "max-h-0",
                )}
              >
                <p className="px-3.5 sm:px-4 pb-3.5 sm:pb-4 text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
