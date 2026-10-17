import React, { useState, useRef, useCallback } from 'react';
import { SlidersHorizontal, CheckCircle2, Ruler, Compass } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(52); // percentage
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-[#F5F2EB] border-y border-[#EAE4DC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#8C7B6C] font-semibold mb-2">
              Métamorphose Spatiale
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#1A1816] font-normal [text-wrap:balance]">
              La révélation du lieu : Avant / Après
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#615B50] max-w-md">
            Faites glisser le curseur pour observer la réhabilitation complète d’une pièce de réception
            haussmannienne de 65 m² à Paris 7e.
          </p>
        </div>

        {/* Interactive Slider Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Visual Slider */}
          <div className="lg:col-span-8">
            <div
              ref={containerRef}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative aspect-[16/10] w-full rounded-lg overflow-hidden select-none cursor-ew-resize border border-[#DDD6CB] shadow-sm bg-neutral-200"
            >
              {/* "After" Image (Full background) */}
              <img
                src="/src/assets/images/hero_haussmann_living_1792234702721.jpg"
                alt="Intérieur rénové contemporain"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-black/65 backdrop-blur-xs text-white text-xs tracking-wider uppercase rounded-xs">
                Après Rénovation
              </div>

              {/* "Before" Layer clipped by sliderPos */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden z-10"
                style={{ width: `${sliderPos}%` }}
              >
                {/* Styled desaturated vintage contrast state representing before renovation */}
                <div className="relative w-full h-full">
                  <img
                    src="/src/assets/images/hero_haussmann_living_1792234702721.jpg"
                    alt="Intérieur avant travaux"
                    style={{
                      width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%',
                      maxWidth: 'none',
                      filter: 'grayscale(90%) contrast(140%) brightness(0.65) sepia(25%)',
                    }}
                    className="h-full object-cover"
                  />
                  {/* Subtle retro grit overlay */}
                  <div className="absolute inset-0 bg-yellow-950/20 mix-blend-multiply" />
                </div>
                <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-black/65 backdrop-blur-xs text-white text-xs tracking-wider uppercase rounded-xs">
                  Avant Travaux
                </div>
              </div>

              {/* Slider Divider Bar and Handle */}
              <div
                className="absolute inset-y-0 z-30 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] cursor-ew-resize"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 bg-white text-[#1A1816] rounded-full shadow-lg border border-[#DDD6CB] flex items-center justify-center">
                  <SlidersHorizontal className="w-4 h-4 rotate-90" />
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mt-3 text-xs text-[#7A7367]">
              <span>◄ Glissez pour révéler l'état initial</span>
              <span className="font-mono tabular-nums">{Math.round(sliderPos)}% révélé</span>
              <span>Glissez pour admirer le projet final ►</span>
            </div>
          </div>

          {/* Right Column: Architectural Highlights */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6 bg-white p-6 sm:p-8 rounded-lg border border-[#E4DDD0]">
            <div>
              <div className="text-xs uppercase tracking-wider text-[#9C6D48] font-semibold mb-1">
                Fiche d'intervention
              </div>
              <h3 className="font-serif-display text-2xl text-[#1A1816] font-normal">
                Salon Haussmannien & Galerie
              </h3>
              <div className="text-xs text-[#7A7367] mt-1">
                Paris 7e · 65 m² de surface traitée · Durée : 14 semaines
              </div>
            </div>

            <div className="space-y-4 text-sm text-[#464139]">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#9C6D48] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#1A1816]">Décloisonnement :</strong> Suppression d'une cloison porteuse et pose d'un IPN invisible pour créer une perspective de 12 mètres.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#9C6D48] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#1A1816]">Restauration d'art :</strong> Remise en état des stucs d'époque par un maître staffeur et ponçage doux du parquet de Hongrie.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#9C6D48] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#1A1816]">Scénographie lumineuse :</strong> Éclairage blanc chaud 2700K indirect dissimulé dans les corniches et luminaires d'auteur.
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#EAE4DC] flex items-center justify-between text-xs text-[#7A7367]">
              <div className="flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-[#9C6D48]" />
                <span>Orientation Sud-Ouest</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Ruler className="w-4 h-4 text-[#9C6D48]" />
                <span>HSP 3,60 m</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
