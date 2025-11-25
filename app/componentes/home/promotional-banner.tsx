import { Button } from "../ui/button"
import Image from "next/image"

export function PromotionalBanner() {
  return (
    <section className="relative py-20 px-4 bg-slate-800 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64">
          <Image src="/professional-uniform-folded.jpg" alt="Uniform" width={300} height={300} className="object-contain" />
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64">
          <Image
            src="/medical-scrubs-hanging.jpg"
            alt="Medical Scrubs"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Promoção de <span className="text-teal-400">Inverno</span>
        </h2>
        <p className="text-slate-300 text-lg mb-8">
          Aproveite os melhores preços em uniformes profissionais. Estoque limitado!
        </p>
        <Button
          size="lg"
          variant="outline"
          className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-800 transition-all px-8 py-6 text-lg"
        >
          Comprar Agora
        </Button>
      </div>
    </section>
  )
}
