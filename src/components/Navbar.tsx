import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, ArrowRight, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPromoBanner, setShowPromoBanner] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {showPromoBanner && (
        <aside aria-label="Annonce partenaire" className="bg-[#1A1816] text-[#FAF9F5] text-xs py-2 px-4 border-b border-white/10 z-50 relative">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="flex-1 flex items-center justify-center gap-2 text-center flex-wrap">
              <span className="text-[#C2A374] font-semibold uppercase text-[10px] tracking-wider">Offre Partenaire</span>
              <span className="text-white/40 hidden sm:inline">·</span>
              <span className="text-white/90">Découvrez la boutique en ligne partenaire :</span>
              <a
                href="https://gsnaauva.mychariow.shop/binbotsite"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#C2A374] hover:text-[#E0C9A6] underline underline-offset-2 inline-flex items-center gap-1 transition-colors"
              >
                <span>Accéder à l'offre</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
            <button
              onClick={() => setShowPromoBanner(false)}
              aria-label="Fermer le bandeau partenaire"
              className="text-white/60 hover:text-white p-0.5 rounded transition-colors shrink-0"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </aside>
      )}

      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF9F5]/90 backdrop-blur-md border-b border-[#EAE4DC] shadow-xs'
            : 'bg-[#FAF9F5] border-b border-[#EAE4DC]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 lg:px-12 py-4">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="font-serif-display text-2xl lg:text-3xl font-medium tracking-tight text-[#1A1816] hover:opacity-85 transition-opacity whitespace-nowrap shrink-0"
          >
            Studio Vaneau
          </a>

          {/* Zone 2: 4-5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#57524A]">
            <a
              href="#projets"
              className="hover:text-[#1A1816] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-[#9C6D48]"
            >
              Projets
            </a>
            <a
              href="#simulateur"
              className="hover:text-[#1A1816] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-[#9C6D48]"
            >
              Simulateur
            </a>
            <a
              href="#matieres"
              className="hover:text-[#1A1816] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-[#9C6D48]"
            >
              Studio Matières
            </a>
            <a
              href="#boutique"
              className="hover:text-[#1A1816] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-[#9C6D48]"
            >
              Éditions & Objets
            </a>
            <a
              href="#methode"
              className="hover:text-[#1A1816] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-[#9C6D48]"
            >
              La Méthode
            </a>
          </nav>

          {/* Zone 3: 1 primary action + cart affordance */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={onOpenCart}
              aria-label="Voir le panier"
              className="relative p-2 text-[#464139] hover:text-[#1A1816] hover:bg-[#F0EDE6] rounded-md transition-colors"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.75]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-5 h-5 px-1 text-[11px] font-semibold text-white bg-[#9C6D48] rounded-full tabular-nums">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={onOpenConsultation}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wide text-white bg-[#1A1816] rounded-md hover:bg-[#322E29] active:scale-[0.99] transition-all whitespace-nowrap shrink-0 shadow-xs"
            >
              <span>Prendre rendez-vous</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Ouvrir le menu de navigation"
              className="md:hidden p-2 text-[#464139] hover:text-[#1A1816] rounded-md"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] z-30 bg-[#FAF9F5] border-b border-[#EAE4DC] p-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4 text-base font-medium text-[#464139]">
            <a
              href="#projets"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#EAE4DC]/60 hover:text-[#1A1816]"
            >
              Projets & Réalisations
            </a>
            <a
              href="#simulateur"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#EAE4DC]/60 hover:text-[#1A1816]"
            >
              Simulateur de Devis en Direct
            </a>
            <a
              href="#matieres"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#EAE4DC]/60 hover:text-[#1A1816]"
            >
              Studio Matières & Nuanciers
            </a>
            <a
              href="#boutique"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#EAE4DC]/60 hover:text-[#1A1816]"
            >
              Éditions & Objets Signatures
            </a>
            <a
              href="#methode"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#EAE4DC]/60 hover:text-[#1A1816]"
            >
              Notre Méthode d'Intervention
            </a>
            <a
              href="https://gsnaauva.mychariow.shop/binbotsite"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#EAE4DC]/60 text-[#9C6D48] font-semibold hover:text-[#1A1816] flex items-center justify-between"
            >
              <span>Boutique Partenaire Officielle</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full mt-2 py-3 text-sm font-medium text-center text-white bg-[#1A1816] rounded-md shadow-xs"
            >
              Prendre rendez-vous avec un architecte
            </button>
          </nav>
        </div>
      )}
    </>
  );
};
