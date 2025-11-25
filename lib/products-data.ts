export interface Product {
  id: number
  name: string
  slug: string
  image: string
  images: string[]
  category: string
  description: string
  features: string[]
  materials: string
  sizes: string[]
  colors: { name: string; hex: string }[]
  careInstructions: string[]
}

export const products: Product[] = [
  {
    id: 1,
    name: "Scrub Médico Teal Premium",
    slug: "scrub-medico-teal-premium",
    image: "/teal-medical-scrubs-uniform.jpg",
    images: ["/teal-medical-scrubs-uniform.jpg", "/medical-scrubs-hanging.jpg"],
    category: "Saúde",
    description:
      "Nosso Scrub Médico Teal Premium é a escolha ideal para profissionais da saúde que buscam conforto e praticidade no dia a dia. Confeccionado com tecido de alta qualidade, oferece liberdade de movimento e durabilidade para longas jornadas de trabalho.",
    features: [
      "Tecido com tecnologia antimicrobiana",
      "Bolsos frontais espaçosos",
      "Costura reforçada",
      "Ajuste confortável",
      "Secagem rápida",
    ],
    materials: "65% Poliéster, 35% Algodão com tratamento antimicrobiano",
    sizes: ["PP", "P", "M", "G", "GG", "XGG"],
    colors: [
      { name: "Teal", hex: "#14b8a6" },
      { name: "Azul Marinho", hex: "#1e3a5f" },
      { name: "Verde Cirúrgico", hex: "#2d6a4f" },
      { name: "Branco", hex: "#ffffff" },
    ],
    careInstructions: [
      "Lavar à máquina com água fria",
      "Não usar alvejante",
      "Secar em temperatura baixa",
      "Passar em temperatura média",
    ],
  },
  {
    id: 2,
    name: "Blazer Corporativo Bege",
    slug: "blazer-corporativo-bege",
    image: "/beige-professional-uniform-jacket.jpg",
    images: ["/beige-professional-uniform-jacket.jpg"],
    category: "Corporativo",
    description:
      "O Blazer Corporativo Bege é sinônimo de elegância e profissionalismo. Perfeito para ambientes corporativos, eventos e reuniões importantes. Seu corte moderno e tecido de alta qualidade garantem um visual impecável.",
    features: [
      "Corte alfaiataria moderno",
      "Forro interno acetinado",
      "Botões personalizáveis com logo",
      "Bolsos internos e externos",
      "Acabamento premium",
    ],
    materials: "80% Lã, 20% Poliéster com forro 100% Acetato",
    sizes: ["PP", "P", "M", "G", "GG"],
    colors: [
      { name: "Bege", hex: "#d4a574" },
      { name: "Preto", hex: "#1a1a1a" },
      { name: "Azul Marinho", hex: "#1e3a5f" },
      { name: "Cinza", hex: "#6b7280" },
    ],
    careInstructions: ["Lavagem a seco recomendada", "Guardar em cabide acolchoado", "Passar com pano úmido"],
  },
  {
    id: 3,
    name: "Polo Branca Clássica",
    slug: "polo-branca-classica",
    image: "/white-casual-polo-uniform.jpg",
    images: ["/white-casual-polo-uniform.jpg"],
    category: "Polos",
    description:
      "A Polo Branca Clássica é a peça versátil que toda empresa precisa. Ideal para uniformes do dia a dia, combina conforto com uma aparência profissional. Perfeita para personalização com bordados ou estampas.",
    features: [
      "Gola e punhos em ribana",
      "Abertura com 3 botões",
      "Área ideal para bordado",
      "Tecido respirável",
      "Corte regular fit",
    ],
    materials: "100% Algodão Piquet 180g",
    sizes: ["PP", "P", "M", "G", "GG", "XGG"],
    colors: [
      { name: "Branco", hex: "#ffffff" },
      { name: "Preto", hex: "#1a1a1a" },
      { name: "Teal", hex: "#14b8a6" },
      { name: "Vermelho", hex: "#dc2626" },
    ],
    careInstructions: [
      "Lavar à máquina com água fria",
      "Não usar alvejante",
      "Secar à sombra",
      "Passar em temperatura média",
    ],
  },
  {
    id: 4,
    name: "Terno Executivo Preto",
    slug: "terno-executivo-preto",
    image: "/professional-man-in-elegant-black-business-suit.jpg",
    images: ["/professional-man-in-elegant-black-business-suit.jpg"],
    category: "Elegante",
    description:
      "O Terno Executivo Preto representa o máximo em sofisticação corporativa. Desenvolvido para executivos e profissionais que precisam transmitir autoridade e elegância em todas as ocasiões.",
    features: [
      "Corte slim fit moderno",
      "Tecido com elastano para conforto",
      "Lapela clássica",
      "Calça com ajuste de cintura",
      "Acabamento de alta costura",
    ],
    materials: "70% Lã, 28% Poliéster, 2% Elastano",
    sizes: ["44", "46", "48", "50", "52", "54"],
    colors: [
      { name: "Preto", hex: "#1a1a1a" },
      { name: "Azul Marinho", hex: "#1e3a5f" },
      { name: "Cinza Chumbo", hex: "#374151" },
    ],
    careInstructions: ["Lavagem a seco obrigatória", "Guardar em porta-terno", "Passar com vapor"],
  },
  {
    id: 5,
    name: "Uniforme Navy Profissional",
    slug: "uniforme-navy-profissional",
    image: "/navy-blue-professional-uniform.jpg",
    images: ["/navy-blue-professional-uniform.jpg"],
    category: "Corporativo",
    description:
      "O Uniforme Navy Profissional é a escolha perfeita para empresas que buscam padronização com estilo. Seu tom azul marinho transmite seriedade e confiança, ideal para equipes de atendimento e recepção.",
    features: [
      "Design moderno e funcional",
      "Tecido anti-amassado",
      "Fácil manutenção",
      "Bolsos discretos",
      "Ajuste ergonômico",
    ],
    materials: "67% Poliéster, 33% Viscose",
    sizes: ["PP", "P", "M", "G", "GG", "XGG"],
    colors: [
      { name: "Azul Marinho", hex: "#1e3a5f" },
      { name: "Preto", hex: "#1a1a1a" },
      { name: "Cinza", hex: "#6b7280" },
    ],
    careInstructions: ["Lavar à máquina", "Não usar alvejante", "Secar em temperatura baixa", "Pouco ferro necessário"],
  },
  {
    id: 6,
    name: "Colete Bordô Elegante",
    slug: "colete-bordo-elegante",
    image: "/person-in-burgundy-vest-uniform.jpg",
    images: ["/person-in-burgundy-vest-uniform.jpg"],
    category: "Elegante",
    description:
      "O Colete Bordô Elegante adiciona um toque de sofisticação ao uniforme da sua equipe. Perfeito para restaurantes, hotéis e eventos, combina tradição com modernidade.",
    features: [
      "Corte ajustado",
      "Fecho frontal com botões",
      "Forro interno confortável",
      "Ajuste traseiro",
      "Acabamento refinado",
    ],
    materials: "75% Poliéster, 25% Viscose com forro",
    sizes: ["PP", "P", "M", "G", "GG"],
    colors: [
      { name: "Bordô", hex: "#722f37" },
      { name: "Preto", hex: "#1a1a1a" },
      { name: "Azul Marinho", hex: "#1e3a5f" },
    ],
    careInstructions: ["Lavagem a seco recomendada", "Guardar em cabide", "Passar em temperatura baixa"],
  },
  {
    id: 7,
    name: "Scrub Hospitalar Completo",
    slug: "scrub-hospitalar-completo",
    image: "/medical-scrubs-hanging.jpg",
    images: ["/medical-scrubs-hanging.jpg", "/teal-medical-scrubs-uniform.jpg"],
    category: "Saúde",
    description:
      "O Scrub Hospitalar Completo oferece o conjunto perfeito para profissionais da saúde. Inclui blusa e calça com design funcional, ideal para hospitais, clínicas e consultórios.",
    features: [
      "Conjunto completo (blusa + calça)",
      "Múltiplos bolsos funcionais",
      "Cintura elástica na calça",
      "Tecido leve e resistente",
      "Fácil higienização",
    ],
    materials: "65% Poliéster, 35% Algodão",
    sizes: ["PP", "P", "M", "G", "GG", "XGG"],
    colors: [
      { name: "Verde Cirúrgico", hex: "#2d6a4f" },
      { name: "Azul Hospitalar", hex: "#3b82f6" },
      { name: "Branco", hex: "#ffffff" },
      { name: "Rosa", hex: "#ec4899" },
    ],
    careInstructions: [
      "Lavar à máquina em água quente",
      "Pode usar alvejante sem cloro",
      "Secar em temperatura alta",
      "Passar se necessário",
    ],
  },
  {
    id: 8,
    name: "Uniforme Outdoor Resistente",
    slug: "uniforme-outdoor-resistente",
    image: "/professional-working-outdoors.jpg",
    images: ["/professional-working-outdoors.jpg"],
    category: "Industrial",
    description:
      "O Uniforme Outdoor Resistente foi desenvolvido para profissionais que trabalham em ambientes externos. Oferece proteção, durabilidade e conforto em todas as condições climáticas.",
    features: [
      "Tecido resistente à água",
      "Proteção UV",
      "Costuras reforçadas",
      "Bolsos cargo funcionais",
      "Ajustes para ventilação",
    ],
    materials: "100% Poliéster Ripstop com tratamento DWR",
    sizes: ["P", "M", "G", "GG", "XGG"],
    colors: [
      { name: "Caqui", hex: "#c2b280" },
      { name: "Verde Oliva", hex: "#556b2f" },
      { name: "Cinza", hex: "#6b7280" },
    ],
    careInstructions: ["Lavar à máquina com água fria", "Não usar amaciante", "Secar ao ar livre", "Não passar"],
  },
  {
    id: 9,
    name: "Conjunto Profissional Dobrado",
    slug: "conjunto-profissional-dobrado",
    image: "/professional-uniform-folded.jpg",
    images: ["/professional-uniform-folded.jpg"],
    category: "Corporativo",
    description:
      "O Conjunto Profissional é a opção versátil para empresas de diversos segmentos. Fácil de combinar e manter, oferece praticidade sem abrir mão da apresentação profissional.",
    features: [
      "Design clássico atemporal",
      "Tecido de fácil manutenção",
      "Resistente a manchas",
      "Confortável para uso prolongado",
      "Ideal para personalização",
    ],
    materials: "60% Poliéster, 40% Algodão",
    sizes: ["PP", "P", "M", "G", "GG", "XGG"],
    colors: [
      { name: "Branco", hex: "#ffffff" },
      { name: "Preto", hex: "#1a1a1a" },
      { name: "Azul", hex: "#2563eb" },
      { name: "Cinza", hex: "#6b7280" },
    ],
    careInstructions: [
      "Lavar à máquina",
      "Usar alvejante sem cloro se necessário",
      "Secar em temperatura média",
      "Passar em temperatura média",
    ],
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function getRelatedProducts(currentId: number, category: string, limit = 4): Product[] {
  return products.filter((product) => product.id !== currentId && product.category === category).slice(0, limit)
}
