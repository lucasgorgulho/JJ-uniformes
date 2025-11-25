"use client";

import Carousel from "./componentes/home/Carousel";
import { ShieldCheck, Shirt, Truck, Sparkles, Clock, Users } from "lucide-react";
import Image from "next/image";
import { HeroSection } from "./componentes/home/hero-section";
import { ImpactSection } from "./componentes/home/impact-section";
import { ProductCharacteristics } from "./componentes/home/product-characteristics";
import { ProfessionalShowcase } from "./componentes/home/professional-showcase";
import { ProductFeatures } from "./componentes/home/product-features";

const items = [
  { title: "Linha Fabrica", image: "/banner/fabril.png", bg: "from-blue-200 to-blue-400" },
  { title: "Linha Hospitalar", image: "/banner/hospitalar.svg", bg: "from-green-200 to-green-400" },
  { title: "Linha Escritório", image: "/banner/escritorio.svg", bg: "from-yellow-200 to-yellow-400" },
  { title: "Linha de Segurança", image: "/banner/seguranca.png", bg: "from-red-200 to-red-400" },
];

export default function HomePage() {
  return (
    <main className="bg-gradient-to-b from-[#ffffff] to-[#f7f8fa] min-h-screen">
      {/* 🧷 Banner principal */}
      
      <HeroSection />
     
      <ProductFeatures />
      <section>
        <Carousel items={items} />
      </section>
      
      <ProfessionalShowcase />
      <ImpactSection />
      <ProductCharacteristics />
      
      
    </main>
  );
}
