import React, { useState } from 'react';
import { STYLES_DATA } from '../data/stylesData';
import { Copy, Check, Sparkles, Lightbulb, Compass, Layers } from 'lucide-react';

export const StyleStudio: React.FC = () => {
  const [selectedStyleId, setSelectedStyleId] = useState<string>('haussmannien-moderne');
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const currentStyle = STYLES_DATA[selectedStyleId] || STYLES_DATA['haussmannien-moderne'];

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2500);
  };

  return (
    <section id="matieres" className="py-16 lg:py-24 bg-[#F7F4EE] border-t border-[#EAE4DC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#8C7B6C] font-semibold mb-2">
              Matériauthèque & Inspirations
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#1A1816] font-normal [text-wrap:balance]">
              Le Studio des Matières & Palettes
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#5A544A] max-w-md">
            Explorez nos 4 directions esthétiques signatures, leurs nuanciers précis et l’harmonie des
            textures tactiles recommandées pour votre intérieur.
          </p>
        </div>

        {/* Style Selector Tabs (Segmented control) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {Object.values(STYLES_DATA).map((style) => (
            <button
              key={style.id}
              onClick={() => setSelectedStyleId(style.id)}
              className={`px-4 py-2.5 text-xs sm:text-sm font-medium rounded-md whitespace-nowrap transition-all ${
                selectedStyleId === style.id
                  ? 'bg-[#1A1816] text-white shadow-xs'
                  : 'bg-white text-[#554F46] border border-[#DDD6CB] hover:bg-[#EFECE5]'
              }`}
            >
              {style.name}
            </button>
          ))}
        </div>

        {/* Dynamic Style Card */}
        <div className="bg-white rounded-lg border border-[#E2DDD3] p-6 sm:p-10 shadow-xs">
          {/* Style Title & Atmosphere */}
          <div className="border-b border-[#EAE4DC] pb-6 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#9C6D48] font-semibold">
                  Espace d'application privilégié : {currentStyle.roomName}
                </span>
                <h3 className="font-serif-display text-2xl sm:text-3xl font-normal text-[#1A1816] mt-1">
                  {currentStyle.name}
                </h3>
              </div>
              <div className="px-3.5 py-1.5 bg-[#FAF9F5] border border-[#EAE4DC] text-xs text-[#57524A] rounded-md max-w-sm">
                <span className="font-semibold text-[#1A1816]">Atmosphère :</span> {currentStyle.atmosphere}
              </div>
            </div>
            <p className="mt-4 text-sm sm:text-base text-[#57524A] leading-relaxed max-w-4xl">
              {currentStyle.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left 6 cols: Color Swatches with Copy */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#9C6D48]" />
                  <h4 className="text-xs uppercase tracking-wider text-[#70685D] font-semibold">
                    Nuancier Chromatique & Émulsions
                  </h4>
                </div>
                <span className="text-[11px] text-[#8C7B6C]">Cliquez pour copier le code hex</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentStyle.colors.map((color) => {
                  const isCopied = copiedHex === color.hex;
                  return (
                    <button
                      key={color.hex}
                      type="button"
                      onClick={() => copyToClipboard(color.hex)}
                      className="group flex items-center gap-3 p-2.5 rounded-md border border-[#EAE4DC] hover:border-[#1A1816] bg-[#FAF9F5] hover:bg-white text-left transition-all"
                    >
                      <div
                        className="w-10 h-10 rounded-md shrink-0 border border-black/10 shadow-xs flex items-center justify-center transition-transform group-hover:scale-105"
                        style={{ backgroundColor: color.hex }}
                      >
                        {isCopied && <Check className="w-4 h-4 text-emerald-800 drop-shadow-xs" />}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-semibold text-[#1A1816] truncate">{color.name}</div>
                        <div className="text-[11px] font-mono text-[#7A7367] flex items-center gap-1.5">
                          <span>{color.hex}</span>
                          {isCopied ? (
                            <span className="text-emerald-700 text-[10px] font-sans font-medium">Copié !</span>
                          ) : (
                            <Copy className="w-3 h-3 text-[#A89E90] group-hover:text-[#1A1816] transition-colors" />
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Lighting tip callout */}
              <div className="p-4 rounded-md bg-[#FAF7F0] border border-[#E8DFCF] flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-[#9C6D48] shrink-0 mt-0.5" />
                <div className="text-xs text-[#57524A] leading-relaxed">
                  <strong className="text-[#1A1816] block mb-1">Prescription Lumineuse d'Architecte :</strong>
                  {currentStyle.lightingTip}
                </div>
              </div>
            </div>

            {/* Right 6 cols: Tactile Materials & Sourcing */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#9C6D48]" />
                <h4 className="text-xs uppercase tracking-wider text-[#70685D] font-semibold">
                  Matériaux & Étoffes Recommandés
                </h4>
              </div>

              <div className="space-y-3">
                {currentStyle.materials.map((mat, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-md border border-[#EAE4DC] bg-[#FAF9F5] flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-[#1A1816]">{mat.name}</span>
                      <span className="text-[#8C7B6C] italic">{mat.texture}</span>
                    </div>
                    <div className="text-xs text-[#6B6457] mt-1.5 leading-normal">
                      {mat.description}
                    </div>
                  </div>
                ))}
              </div>

              {/* Sample items pill-less list */}
              <div className="pt-2">
                <span className="text-xs uppercase tracking-wider text-[#70685D] font-semibold block mb-2">
                  Mobilier iconique associé
                </span>
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#57524A]">
                  {currentStyle.sampleItems.map((item, idx) => (
                    <React.Fragment key={idx}>
                      <span className="font-medium text-[#1A1816]">{item}</span>
                      {idx < currentStyle.sampleItems.length - 1 && <span className="text-[#BDB3A6]">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
