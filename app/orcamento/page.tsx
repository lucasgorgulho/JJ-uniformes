import { Suspense } from "react"
import { QuoteHero } from "../componentes/orcamento/quote-hero"
import { QuoteForm } from "../componentes/orcamento/quote-form"
import { WhatsAppCtaBanner } from "../componentes/orcamento/whatsapp-cta-banner"


export default function OrcamentoPage() {
  return (
    <main className="min-h-screen bg-white">
      <QuoteHero />
      <Suspense fallback={<div className="py-16 text-center">Carregando...</div>}>
        <QuoteForm />
      </Suspense>
      <WhatsAppCtaBanner />
    </main>
  )
}
