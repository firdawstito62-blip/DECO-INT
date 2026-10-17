import React from 'react';
import { Compass, PenTool, Hammer, Key } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Immersion & Diagnostic Spatial',
      icon: Compass,
      description:
        'Relevé laser tridimensionnel méticuleux de vos volumes existants. Nous analysons l’orientation solaire, les contraintes porteuses et vos rituels quotidiens pour dégager le plein potentiel du lieu.',
      deliverable: 'Plan de l’existant côtés & Cahier d’intentions'
    },
    {
      number: '02',
      title: 'Conception Créative & Modélisation 3D',
      icon: PenTool,
      description:
        'Définition des circulations fluides, des perspectives visuelles et des harmonies de teintes. Modélisation photoréaliste et élévations d’ébénisterie permettant de ressentir l’atmosphère avant le premier coup de pioche.',
      deliverable: 'Rendus 3D 8K & Matériauthèque sur mesure'
    },
    {
      number: '03',
      title: 'Sourcing & Sélection des Maîtres Artisans',
      icon: Hammer,
      description:
        'Mise en concurrence rigoureuse de notre réseau d’artisans d’art qualifiés (menuisiers, marbriers, ferronniers, staffeurs). Négociation transparente des devis sans marge cachée.',
      deliverable: 'Dossier de Consultation des Entreprises (DCE)'
    },
    {
      number: '04',
      title: 'Maîtrise d’Œuvre & Livraison Clé en Main',
      icon: Key,
      description:
        'Réunions de chantier hebdomadaires, contrôles rigoureux des tolérances millimétriques et coordination tous corps d’état. Nous réceptionnons le mobilier et orchestrons le stylisme final.',
      deliverable: 'Procès-verbal de réception & Garanties décennales'
    }
  ];

  return (
    <section id="methode" className="py-16 lg:py-24 bg-[#F5F2EB] border-t border-[#EAE4DC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs uppercase tracking-widest text-[#8C7B6C] font-semibold mb-2">
            Rigueur & Sérénité
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#1A1816] font-normal [text-wrap:balance]">
            Notre méthode en 4 chapitres
          </h2>
          <p className="mt-4 text-base text-[#5A544A] leading-relaxed">
            De la première esquisse à l'installation des derniers voilages, nous assurons une
            conduite de projet sans imprévu, où la rigueur technique sert la poésie de l'espace.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white p-7 rounded-lg border border-[#E2DDD3] flex flex-col justify-between hover:border-[#1A1816] transition-all shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif-display text-3xl font-light text-[#9C6D48] tabular-nums">
                      {step.number}.
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#FAF9F5] border border-[#EAE4DC] flex items-center justify-center text-[#1A1816]">
                      <Icon className="w-4 h-4 text-[#9C6D48]" />
                    </div>
                  </div>

                  <h3 className="font-serif-display text-xl text-[#1A1816] font-medium leading-snug">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-[#57524A] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F0ECE4] text-[11px] text-[#8C7B6C]">
                  <span className="font-semibold text-[#1A1816] block mb-0.5">Livrable clé :</span>
                  {step.deliverable}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
