import React, { useState, useMemo } from 'react';
import { Calculator, ArrowRight, Download, Check, Sparkles, Clock, ShieldCheck, Home } from 'lucide-react';

interface EstimatorProps {
  onTransferToConsultation: (details: {
    roomType: string;
    surface: number;
    budget: number;
    scope: string;
  }) => void;
}

export const Estimator: React.FC<EstimatorProps> = ({ onTransferToConsultation }) => {
  const [roomType, setRoomType] = useState<'salon' | 'suite' | 'cuisine' | 'complet' | 'bureau'>('salon');
  const [surface, setSurface] = useState<number>(55);
  const [style, setStyle] = useState<'haussmann' | 'japandi' | 'mediterraneen' | 'minimalisme'>('haussmann');
  const [scope, setScope] = useState<'conseil' | 'mobilier' | 'cle_en_main'>('cle_en_main');

  // Add-ons
  const [customWoodwork, setCustomWoodwork] = useState<boolean>(true);
  const [artCuration, setArtCuration] = useState<boolean>(false);
  const [architecturalLighting, setArchitecturalLighting] = useState<boolean>(true);
  const [highEndAppliances, setHighEndAppliances] = useState<boolean>(false);

  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);

  // Dynamic calculations based on industry standards for high-end interior architecture in France
  const calculation = useMemo(() => {
    // Base cost per m² based on scope
    let baseRateM2 = 0;
    let designRateM2 = 0;
    let durationMin = 4;
    let durationMax = 8;

    if (scope === 'conseil') {
      designRateM2 = 65; // ~65€/m² for concept & 3D
      baseRateM2 = 120; // light styling
      durationMin = 2;
      durationMax = 4;
    } else if (scope === 'mobilier') {
      designRateM2 = 110;
      baseRateM2 = 550; // Furniture, lighting, rugs
      durationMin = 4;
      durationMax = 8;
    } else {
      // cle_en_main
      designRateM2 = 190; // Architectural studies, site supervision, permit
      baseRateM2 = 1450; // Full masonry, electricity, plumbing, painting, flooring
      durationMin = Math.round(surface * 0.12) + 6;
      durationMax = durationMin + 6;
    }

    // Room multiplier
    const roomMultiplier: Record<string, number> = {
      salon: 1.0,
      suite: 1.15,
      cuisine: 1.45,
      complet: 1.25,
      bureau: 0.95
    };

    const multiplier = roomMultiplier[roomType] || 1.0;

    let designFees = Math.round(surface * designRateM2 * multiplier);
    let renovationFees = scope === 'cle_en_main' ? Math.round(surface * baseRateM2 * multiplier * 0.65) : 0;
    let furnishingFees = Math.round(
      surface * (scope === 'conseil' ? 180 : scope === 'mobilier' ? 620 : 540) * multiplier
    );

    // Add-on adjustments
    if (customWoodwork) {
      furnishingFees += 4500;
    }
    if (artCuration) {
      furnishingFees += 3200;
    }
    if (architecturalLighting) {
      renovationFees += 2200;
    }
    if (highEndAppliances && (roomType === 'cuisine' || roomType === 'complet')) {
      furnishingFees += 6500;
    }

    const totalEstimated = designFees + renovationFees + furnishingFees;

    return {
      designFees,
      renovationFees,
      furnishingFees,
      totalEstimated,
      durationMin,
      durationMax
    };
  }, [roomType, surface, scope, customWoodwork, artCuration, architecturalLighting, highEndAppliances]);

  const handleDownloadSummary = () => {
    // Generate text summary download
    const roomNames = {
      salon: 'Salon & Pièce de Réception',
      suite: 'Suite Parentale & Dressing',
      cuisine: 'Cuisine Architecturale & Dîner',
      complet: 'Rénovation Complète Appartement/Maison',
      bureau: 'Bureau & Bibliothèque'
    };
    const scopeNames = {
      conseil: "Conseil & Planches d'Ambiance 2D/3D",
      mobilier: "Mobilier, Luminaires & Shopping List",
      cle_en_main: "Rénovation Intégrale Clé en Main & Chantier"
    };

    const summaryText = `=====================================================
STUDIO VANEAU — ESTIMATION PRÉVISIONNELLE D'INTÉRIEUR
Date : ${new Date().toLocaleDateString('fr-FR')}
=====================================================

ESPACE : ${roomNames[roomType]}
SURFACE : ${surface} m²
FORMULE RETENUE : ${scopeNames[scope]}

DÉTAIL BUDGÉTAIRE PRÉVISIONNEL :
- Honoraires d'Architecture & Conception : ${calculation.designFees.toLocaleString('fr-FR')} € HT
- Travaux, Maçonnerie & Second-Œuvre   : ${calculation.renovationFees.toLocaleString('fr-FR')} € HT
- Mobilier, Agencements & Décoration    : ${calculation.furnishingFees.toLocaleString('fr-FR')} € HT
-----------------------------------------------------
ESTIMATION TOTALE : environ ${calculation.totalEstimated.toLocaleString('fr-FR')} € HT
DÉLAI ESTIMÉ : ${calculation.durationMin} à ${calculation.durationMax} semaines

OPTIONS INCLUSES :
- Menuiserie sur mesure : ${customWoodwork ? 'Oui' : 'Non'}
- Curation d'œuvres d'art : ${artCuration ? 'Oui' : 'Non'}
- Éclairage architectural scénarisé : ${architecturalLighting ? 'Oui' : 'Non'}
- Électroménager haut de gamme : ${highEndAppliances ? 'Oui' : 'Non'}

Pour planifier un premier rendez-vous avec un architecte :
Studio Vaneau — 42 Rue Vaneau, 75007 Paris
Téléphone : +33 1 44 28 90 10 | contact@studio-vaneau.fr
=====================================================`;

    const blob = new Blob([summaryText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Estimation_Studio_Vaneau_${roomType}_${surface}m2.txt`;
    link.click();
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <section id="simulateur" className="py-16 lg:py-24 bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest text-[#8C7B6C] font-semibold mb-2">
            Simulateur Budgétaire en Direct
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#1A1816] font-normal [text-wrap:balance]">
            Estimez votre projet avec une clarté absolue.
          </h2>
          <p className="mt-4 text-base text-[#5A544A] leading-relaxed">
            Calibrez la surface, le niveau d'intervention et les prestations souhaitées
            pour obtenir une projection détaillée des honoraires, des travaux et des agencements.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Form (7 cols) */}
          <div className="lg:col-span-7 space-y-8 bg-white p-6 sm:p-8 rounded-lg border border-[#E4DDD0] shadow-xs">
            {/* 1. Room Type */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#70685D] font-semibold mb-3">
                01. Type d'espace à transformer
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'salon', label: 'Salon & Réception' },
                  { id: 'suite', label: 'Suite Parentale' },
                  { id: 'cuisine', label: 'Cuisine de Chef' },
                  { id: 'bureau', label: 'Bureau & Bibliothèque' },
                  { id: 'complet', label: 'Appartement Entier' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setRoomType(item.id as any)}
                    className={`px-3 py-2.5 text-xs sm:text-sm font-medium rounded-md border text-left transition-all whitespace-nowrap ${
                      roomType === item.id
                        ? 'border-[#1A1816] bg-[#1A1816] text-white'
                        : 'border-[#DDD6CB] bg-[#FAF9F5] text-[#3D3831] hover:border-[#9C6D48]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Surface slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs uppercase tracking-wider text-[#70685D] font-semibold">
                  02. Surface estimée
                </label>
                <span className="font-serif-display text-2xl text-[#1A1816] font-medium tabular-nums">
                  {surface} m²
                </span>
              </div>
              <input
                type="range"
                min={15}
                max={250}
                step={5}
                value={surface}
                onChange={(e) => setSurface(Number(e.target.value))}
                className="w-full h-2 bg-[#EAE4DC] rounded-lg appearance-none cursor-pointer accent-[#1A1816]"
              />
              <div className="flex justify-between text-[11px] text-[#8C7B6C] mt-1 tabular-nums font-mono">
                <span>15 m² (Chambre)</span>
                <span>65 m² (Appartement 2P)</span>
                <span>140 m² (Haussmannien)</span>
                <span>250 m² (Maison/Villa)</span>
              </div>
            </div>

            {/* 3. Scope of Work */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#70685D] font-semibold mb-3">
                03. Périmètre de la mission
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    id: 'conseil',
                    title: 'Conseil & 3D',
                    desc: 'Planches tendances, plans 2D/3D et shopping list'
                  },
                  {
                    id: 'mobilier',
                    title: 'Mobilier & Stylisme',
                    desc: 'Sourcing, commande, livraison et mise en scène'
                  },
                  {
                    id: 'cle_en_main',
                    title: 'Clé en main',
                    desc: 'Conception, travaux, suivi de chantier et aménagement'
                  }
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setScope(s.id as any)}
                    className={`p-3.5 rounded-md border text-left transition-all ${
                      scope === s.id
                        ? 'border-[#9C6D48] bg-[#F9F7F3] shadow-xs'
                        : 'border-[#E2DDD3] bg-white hover:border-[#C4B8A6]'
                    }`}
                  >
                    <div className="text-sm font-semibold text-[#1A1816]">{s.title}</div>
                    <div className="text-xs text-[#6B6457] mt-1 leading-snug">{s.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Fine-tuning Options */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#70685D] font-semibold mb-3">
                04. Personnalisations & Ouvrages d'Art
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className="flex items-center gap-3 p-3 rounded-md border border-[#EAE4DC] hover:bg-[#FAF9F5] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={customWoodwork}
                    onChange={(e) => setCustomWoodwork(e.target.checked)}
                    className="w-4 h-4 rounded text-[#1A1816] focus:ring-0 cursor-pointer"
                  />
                  <div className="text-xs">
                    <span className="font-semibold text-[#1A1816] block">Menuiserie sur mesure</span>
                    <span className="text-[#6B6457]">Bibliothèques, dressings intégrés</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-md border border-[#EAE4DC] hover:bg-[#FAF9F5] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={architecturalLighting}
                    onChange={(e) => setArchitecturalLighting(e.target.checked)}
                    className="w-4 h-4 rounded text-[#1A1816] focus:ring-0 cursor-pointer"
                  />
                  <div className="text-xs">
                    <span className="font-semibold text-[#1A1816] block">Éclairage scénarisé</span>
                    <span className="text-[#6B6457]">Gorges lumineuses & variateurs</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-md border border-[#EAE4DC] hover:bg-[#FAF9F5] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={artCuration}
                    onChange={(e) => setArtCuration(e.target.checked)}
                    className="w-4 h-4 rounded text-[#1A1816] focus:ring-0 cursor-pointer"
                  />
                  <div className="text-xs">
                    <span className="font-semibold text-[#1A1816] block">Curation artistique</span>
                    <span className="text-[#6B6457]">Sourcing tableaux & sculptures</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-md border border-[#EAE4DC] hover:bg-[#FAF9F5] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={highEndAppliances}
                    onChange={(e) => setHighEndAppliances(e.target.checked)}
                    className="w-4 h-4 rounded text-[#1A1816] focus:ring-0 cursor-pointer"
                  />
                  <div className="text-xs">
                    <span className="font-semibold text-[#1A1816] block">Électroménager d'exception</span>
                    <span className="text-[#6B6457]">Marques premium (Gaggenau, Miele)</span>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Results Summary Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#1A1816] text-[#FAF9F5] p-6 sm:p-8 rounded-lg shadow-xl sticky top-24">
            <div className="flex items-center justify-between pb-4 border-b border-white/15">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#C2A374]">Synthèse Prévisionnelle</span>
                <h3 className="font-serif-display text-2xl font-normal text-white mt-0.5">Budget & Délais</h3>
              </div>
              <div className="text-right">
                <span className="text-xs text-white/60">Taux de précision</span>
                <span className="block text-xs font-semibold text-emerald-400">± 8% constaté</span>
              </div>
            </div>

            {/* Total Highlight */}
            <div className="py-6 border-b border-white/10">
              <span className="text-xs text-white/60 uppercase tracking-wider">Montant global estimé</span>
              <div className="font-serif-display text-4xl sm:text-5xl font-normal text-white mt-1 tabular-nums">
                ~ {calculation.totalEstimated.toLocaleString('fr-FR')} <span className="text-2xl font-sans">€ HT</span>
              </div>
              <p className="text-xs text-white/60 mt-1">
                Soit environ {Math.round(calculation.totalEstimated / surface).toLocaleString('fr-FR')} € / m² pour cette configuration.
              </p>
            </div>

            {/* Line items breakdown */}
            <div className="py-5 space-y-3.5 text-xs sm:text-sm border-b border-white/10 font-sans">
              <div className="flex justify-between items-center">
                <span className="text-white/80">Études d'architecture & plans 3D</span>
                <span className="font-mono text-white tabular-nums font-medium">
                  {calculation.designFees.toLocaleString('fr-FR')} €
                </span>
              </div>

              {scope === 'cle_en_main' && (
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Travaux & second-œuvre (artisans)</span>
                  <span className="font-mono text-white tabular-nums font-medium">
                    {calculation.renovationFees.toLocaleString('fr-FR')} €
                  </span>
                </div>
              )}

              <div className="flex justify-between items-center">
                <span className="text-white/80">Mobilier, luminaires & matières</span>
                <span className="font-mono text-white tabular-nums font-medium">
                  {calculation.furnishingFees.toLocaleString('fr-FR')} €
                </span>
              </div>

              <div className="flex justify-between items-center pt-2 text-[#C2A374]">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  Délai moyen de livraison
                </span>
                <span className="font-medium tabular-nums font-mono">
                  {calculation.durationMin} à {calculation.durationMax} semaines
                </span>
              </div>
            </div>

            {/* Guarantee note */}
            <div className="py-4 text-[11px] text-white/65 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C2A374] shrink-0 mt-0.5" />
              <span>
                Devis contractuel ferme établi après notre visite sur place. Aucun dépassement sans ordre écrit.
              </span>
            </div>

            {/* Action buttons */}
            <div className="mt-4 space-y-3">
              <button
                onClick={() =>
                  onTransferToConsultation({
                    roomType,
                    surface,
                    budget: calculation.totalEstimated,
                    scope
                  })
                }
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-[#C2A374] text-[#1A1816] font-semibold text-xs sm:text-sm rounded-md hover:bg-[#D4B98E] transition-all shadow-md active:scale-[0.99] whitespace-nowrap"
              >
                <span>Planifier un rendez-vous avec ce devis</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleDownloadSummary}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-white/10 text-white hover:bg-white/15 text-xs font-medium rounded-md transition-colors"
              >
                {downloadSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Fiche récapitulative téléchargée !</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Télécharger la fiche d'estimation (.txt)</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
