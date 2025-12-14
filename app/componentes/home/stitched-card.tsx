import { cn } from "@/lib/utils"

interface StitchedCardProps {
  imageSrc: string
  title: string
  color?: "teal" | "indigo" | "emerald" | "slate"
  className?: string
}

const colorVariants = {
  teal: "bg-teal-700 border-teal-300",
  indigo: "bg-indigo-700 border-indigo-300",
  emerald: "bg-emerald-700 border-emerald-300",
  slate: "bg-slate-700 border-slate-300",
}

export function StitchedCard({ imageSrc, title, color = "teal", className }: StitchedCardProps) {
  return (
    <div
      className={cn(
        "relative p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl",
        colorVariants[color],
        className,
      )}
      style={{
        boxShadow: "0 10px 40px rgba(0, 0, 0, 0.15)",
      }}
    >
      {/* Efeito de costura externa */}
      <div
        className="absolute inset-2 rounded-xl pointer-events-none"
        style={{
          border: "2px dashed rgba(255, 255, 255, 0.4)",
          borderRadius: "12px",
        }}
      />

      {/* Pontos de costura nos cantos */}
      <div className="absolute top-3 left-3 w-1.5 h-1.5 bg-white/60 rounded-full" />
      <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-white/60 rounded-full" />
      <div className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-white/60 rounded-full" />
      <div className="absolute bottom-3 right-3 w-1.5 h-1.5 bg-white/60 rounded-full" />

      {/* Container da imagem */}
      <div className="relative bg-white rounded-lg overflow-hidden mb-6 shadow-lg">
        <img src={imageSrc || "/placeholder.svg"} alt={title} className="w-full h-auto object-cover aspect-[3/4]" />
      </div>

      {/* Título */}
      <h3 className="text-white font-bold text-center text-lg tracking-wider">{title}</h3>

      {/* Linha decorativa */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-white/30 rounded-full" />
    </div>
  )
}
