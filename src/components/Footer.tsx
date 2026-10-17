import React, { useState } from 'react';
import { ArrowRight, Check, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#181614] text-[#FAF9F5] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Brand & Editorial Manifesto (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <span className="font-serif-display text-2xl lg:text-3xl font-medium tracking-tight text-white block">
              Studio Vaneau
            </span>
            <p className="text-xs sm:text-sm text-[#A89E90] leading-relaxed max-w-sm">
              Architecture d’intérieur, scénographie résidentielle et mobilier d’édition.
              Nous sculptons les volumes et magnifions les matières pour concevoir des intérieurs
              durables et poétiques.
            </p>
            <div className="pt-2 text-xs text-[#8C7B6C] space-y-1">
              <div>Ordre Français des Architectes d'Intérieur (CFAI n° 1482)</div>
              <div>Garantie décennale SMA BTP & Responsabilité Civile Professionnelle</div>
            </div>
          </div>

          {/* Navigation links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs uppercase tracking-widest text-[#C2A374] font-semibold">
              Navigation
            </div>
            <ul className="space-y-2 text-xs text-[#A89E90]">
              <li><a href="#projets" className="hover:text-white transition-colors">Réalisations</a></li>
              <li><a href="#simulateur" className="hover:text-white transition-colors">Simulateur de Devis</a></li>
              <li><a href="#matieres" className="hover:text-white transition-colors">Studio Matières</a></li>
              <li><a href="#boutique" className="hover:text-white transition-colors">Pièces Signatures</a></li>
              <li><a href="#methode" className="hover:text-white transition-colors">Notre Méthode</a></li>
              <li className="pt-1">
                <a
                  href="https://gsnaauva.mychariow.shop/binbotsite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C2A374] hover:text-[#E0C9A6] transition-colors inline-flex items-center gap-1 font-medium"
                >
                  <span>Boutique Partenaire Déco</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://auctionr.org/4/8eab967732fcec4002e96aa2e3b2a689"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C2A374] hover:text-[#E0C9A6] transition-colors inline-flex items-center gap-1 font-medium"
                >
                  <span>Enchères d'Art (Auctionr)</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://amzn.to/4yw5oyj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C2A374] hover:text-[#E0C9A6] transition-colors inline-flex items-center gap-1 font-medium"
                >
                  <span>Sélection Déco Amazon</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://amzn.to/4zEyrR3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C2A374] hover:text-[#E0C9A6] transition-colors inline-flex items-center gap-1 font-medium"
                >
                  <span>Offre Flash Amazon Déco</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Addresses & Contacts (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs uppercase tracking-widest text-[#C2A374] font-semibold">
              Ateliers
            </div>
            <div className="text-xs text-[#A89E90] space-y-2.5">
              <div>
                <strong className="text-white block font-medium">Paris 7e</strong>
                42, Rue Vaneau<br />
                75007 Paris
              </div>
              <div>
                <strong className="text-white block font-medium">Bordeaux</strong>
                18, Rue Notre-Dame<br />
                33000 Bordeaux
              </div>
              <div>
                <strong className="text-white block font-medium">Genève</strong>
                6, Rue du Rhône<br />
                1204 Genève
              </div>
            </div>
          </div>

          {/* Newsletter (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs uppercase tracking-widest text-[#C2A374] font-semibold">
              Les Carnets d'Atelier
            </div>
            <p className="text-xs text-[#A89E90] leading-relaxed">
              Une publication mensuelle sur les tendances d'architecture d'intérieur, les visites privées et nos nouvelles éditions.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre-email@domaine.com"
                  className="w-full px-3 py-2 text-xs bg-white/5 border border-white/15 rounded-md text-white placeholder-white/40 focus:outline-hidden focus:border-[#C2A374]"
                />
                <button
                  type="submit"
                  aria-label="S'inscrire à la lettre"
                  className="absolute right-1 top-1 bottom-1 px-2.5 bg-[#C2A374] text-[#1A1816] rounded-xs hover:bg-[#D4B98E] transition-colors flex items-center justify-center"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                  <Check className="w-3.5 h-3.5" />
                  <span>Merci pour votre inscription à la lettre d'atelier.</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Quiet Bottom Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#70685D]">
          <div>
            © {new Date().getFullYear()} Studio Vaneau SAS. Tous droits réservés.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">Honoraires & Barèmes</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
