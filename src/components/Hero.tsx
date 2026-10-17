import React from 'react';
import { ArrowUpRight, Calculator, Sparkles } from 'lucide-react';

interface HeroProps {
  onScrollToEstimator: () => void;
  onScrollToProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToEstimator, onScrollToProjects }) => {
  return (
    <section className="relative pt-6 pb-16 lg:pt-10 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main 2-column split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Editorial Proposition */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Quiet unboxed kicker */}
            <div className="text-xs uppercase tracking-widest text-[#8C7B6C] font-semibold mb-3">
              Studio d'Architecture d'Intérieur & Scénographie Résidentielle
            </div>

            {/* Display Headline with balanced wrap */}
            <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-[3.6rem] leading-[1.12] font-normal text-[#1A1816] tracking-tight [text-wrap:balance]">
              L'art d'habiter l'espace entre lumière, matière et épure contemporaine.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#5A544A] leading-relaxed max-w-xl [text-wrap:pretty]">
              De la rénovation d’appartements haussmanniens à la conception de villas
              contemporaines, nous orchestrons chaque détail : volumes sculpturaux,
              menuiseries sur mesure et dialogue subtil des matières nobles.
            </p>

            {/* Primary Action Zone */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onScrollToEstimator}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-medium tracking-wide text-white bg-[#1A1816] rounded-md hover:bg-[#322E29] transition-all shadow-xs active:scale-[0.99] whitespace-nowrap"
              >
                <Calculator className="w-4 h-4 text-[#C2A374]" />
                <span>Simuler mon devis en direct</span>
              </button>

              <button
                onClick={onScrollToProjects}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-[#2C2824] bg-white border border-[#DDD6CB] rounded-md hover:bg-[#F5F2EB] hover:border-[#C4B8A6] transition-all whitespace-nowrap"
              >
                <span>Découvrir les réalisations</span>
                <ArrowUpRight className="w-4 h-4 text-[#8C7B6C]" />
              </button>
            </div>

            {/* Trust markers */}
            <div className="mt-10 pt-6 border-t border-[#EAE4DC] flex items-center gap-6 text-xs text-[#70685D]">
              <div>
                <span className="font-semibold text-[#1A1816]">Ateliers :</span> Paris 7e · Bordeaux · Genève
              </div>
              <span className="text-[#C4B8A6]">|</span>
              <div>
                <span className="font-semibold text-[#1A1816]">Garantie :</span> Assurances décennales & Maîtrise d'œuvre
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-lg overflow-hidden bg-[#EFECE5] shadow-lg border border-[#E5DFD5] aspect-[16/10] lg:aspect-[4/3] group">
              <img
                src="/src/assets/images/hero_haussmann_living_1792234702721.jpg"
                alt="Rénovation salon haussmannien moderne par Studio Vaneau à Paris"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
              {/* Subtle architectural overlay caption */}
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/75 via-black/35 to-transparent text-white">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#DDD6CB] font-light">Projet Récent</p>
                    <p className="font-serif-display text-lg text-white font-medium">Appartement Vaneau, Paris 7e</p>
                  </div>
                  <span className="text-xs font-mono text-[#EAE4DC] tabular-nums">145 m² · 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-column KPI strip below the hero split */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 bg-[#F3EFE7]/80 rounded-lg border border-[#E4DDD0]">
          <div>
            <div className="font-serif-display text-3xl sm:text-4xl font-normal text-[#1A1816] tabular-nums">
              140+
            </div>
            <div className="text-xs sm:text-sm text-[#665F54] mt-1">
              Projets livrés sur mesure
            </div>
          </div>
          <div>
            <div className="font-serif-display text-3xl sm:text-4xl font-normal text-[#1A1816] tabular-nums">
              100%
            </div>
            <div className="text-xs sm:text-sm text-[#665F54] mt-1">
              Transparence budgétaire
            </div>
          </div>
          <div>
            <div className="font-serif-display text-3xl sm:text-4xl font-normal text-[#1A1816] tabular-nums">
              12
            </div>
            <div className="text-xs sm:text-sm text-[#665F54] mt-1">
              Distinctions & parutions presse
            </div>
          </div>
          <div>
            <div className="font-serif-display text-3xl sm:text-4xl font-normal text-[#1A1816] tabular-nums">
              45+
            </div>
            <div className="text-xs sm:text-sm text-[#665F54] mt-1">
              Artisans d'art partenaires
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
