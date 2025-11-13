"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselItem {
  title: string;
  image: string;
}

interface CarouselProps {
  items: CarouselItem[];
  interval?: number;
}

export default function Carousel({ items, interval = 5000 }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const startX = useRef<number | null>(null);
  const threshold = 60;

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prev = useCallback(() => {
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  // autoplay
  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(next, interval);
    return () => clearTimeout(timer);
  }, [index, paused, next, interval]);

  const handleInteraction = (action: () => void) => {
    setPaused(true);
    action();
    setTimeout(() => setPaused(false), interval + 1000);
  };

  // swipe
  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    startX.current = "touches" in e ? e.touches[0].clientX : e.clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent | React.MouseEvent) => {
    if (startX.current === null) return;
    const endX = "changedTouches" in e ? e.changedTouches[0].clientX : e.clientX;
    const diff = endX - startX.current;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) handleInteraction(prev);
      else handleInteraction(next);
    }
    startX.current = null;
  };

  return (
    <div
      className="relative w-full max-w-6xl h-[480px] flex items-center justify-center mx-auto select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleTouchStart}
      onMouseUp={handleTouchEnd}
    >
      {/* Botão anterior */}
      <button
        aria-label="Anterior"
        className="absolute left-3 z-20 p-2 bg-white/60 hover:bg-white rounded-full shadow-lg backdrop-blur transition"
        onClick={() => handleInteraction(prev)}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* Cards */}
      <div className="relative w-full h-full flex items-center justify-center perspective-[1200px] overflow-hidden">
        {items.map((item, i) => {
          const position = (i - index + items.length) % items.length;

          const isCenter = position === 0;
          const isLeft = position === items.length - 1;
          const isRight = position === 1;

          const zIndex = isCenter ? 50 : 10;
          const scale = isCenter ? 1 : 0.7;
          const opacity = isCenter ? 1 : 0.5;
          const translateX = isCenter
            ? 0
            : isRight
            ? 280
            : isLeft
            ? -280
            : 0;
          const rotateY = isCenter
            ? 0
            : isRight
            ? -25
            : isLeft
            ? 25
            : 0;

          return (
            <motion.div
              key={i}
              className={`absolute w-[280px] sm:w-[300px] md:w-[340px] h-[400px] flex flex-col items-center justify-between transition-all duration-700 overflow-hidden rounded-[18px]`}
              style={{
                backgroundColor: "#10827d",
                opacity,
                zIndex,
                transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                boxShadow: isCenter
                  ? "0 20px 40px rgba(0, 0, 0, 0.25)"
                  : "0 10px 20px rgba(0, 0, 0, 0.15)",
                border: "4px dashed rgba(255,255,255,0.3)",
                backgroundImage:
                  "linear-gradient(145deg, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.1) 100%)",
                backdropFilter: "blur(3px)",
              }}
              animate={{
                transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                opacity,
                zIndex,
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <div className="relative flex flex-col items-center justify-center w-full h-full">
                {/* borda decorativa */}
                <div
                  className="absolute inset-0 border-[3px] rounded-[16px] pointer-events-none"
                  style={{
                    borderStyle: "dotted",
                    borderColor: "rgba(255,255,255,0.4)",
                  }}
                ></div>

                {/* imagem */}
                <img
                  src={item.image}
                  alt={`Uniforme - ${item.title}`}
                  className={`object-contain transition-all duration-500 z-10 ${
                    isCenter
                      ? "drop-shadow-[0_8px_25px_rgba(0,0,0,0.4)] scale-110"
                      : "opacity-70 blur-[1px] scale-95"
                  }`}
                  loading="lazy"
                  style={{ height: isCenter ? "65%" : "55%" }}
                />

                {/* título estilizado */}
                <AnimatePresence>
                  {isCenter && (
                    <motion.h2
                      key="title"
                      className="absolute bottom-4 text-lg md:text-xl font-semibold tracking-[0.08em] text-white z-10 drop-shadow-lg uppercase"
                      style={{
                        letterSpacing: "0.15em",
                        fontFamily: `'Poppins', sans-serif`,
                        textShadow:
                          "0px 1px 3px rgba(0,0,0,0.6), 0px 0px 8px rgba(255,255,255,0.2)",
                      }}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.4 }}
                    >
                      {item.title}
                    </motion.h2>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Botão próximo */}
      <button
        aria-label="Próximo"
        className="absolute right-3 z-20 p-2 bg-white/60 hover:bg-white rounded-full shadow-lg backdrop-blur transition"
        onClick={() => handleInteraction(next)}
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-3 flex space-x-2">
        {items.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
