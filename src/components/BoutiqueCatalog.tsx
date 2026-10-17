import React, { useState } from 'react';
import { PRODUCTS_DATA } from '../data/productsData';
import { DecorProduct } from '../types';
import { Plus, Check, Eye, ArrowUpRight } from 'lucide-react';

interface BoutiqueCatalogProps {
  onAddToCart: (product: DecorProduct) => void;
  onOpenProductModal?: (product: DecorProduct) => void;
}

export const BoutiqueCatalog: React.FC<BoutiqueCatalogProps> = ({ onAddToCart }) => {
  const [addedId, setAddedId] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<DecorProduct | null>(null);

  const handleAdd = (product: DecorProduct) => {
    onAddToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  return (
    <section id="boutique" className="py-16 lg:py-24 bg-[#FAF9F5] border-t border-[#EAE4DC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#8C7B6C] font-semibold mb-2">
              Éditions Limitées & Mobilier d'Auteur
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#1A1816] font-normal [text-wrap:balance]">
              La Sélection Signatures
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#5A544A] max-w-md">
            Des pièces de collection dessinées par le studio et façonnées en séries courtes par nos
            artisans d'art. Commandez également notre coffret d’échantillons tactiles.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS_DATA.map((product) => {
            const isJustAdded = addedId === product.id;
            return (
              <div
                key={product.id}
                className="group flex flex-col bg-white rounded-lg border border-[#E5DFD5] overflow-hidden hover:border-[#1A1816] transition-all duration-300 shadow-xs"
              >
                {/* Product Image: 65-75% visual weight */}
                <div className="relative aspect-[4/3] bg-[#F2EFE9] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle Stock Tag */}
                  <div className="absolute top-3 left-3 text-[11px] font-medium tracking-wide uppercase px-2 py-0.5 bg-white/90 backdrop-blur-xs text-[#24211D]">
                    {product.inStock ? 'En stock' : 'Sur commande (3 sem.)'}
                  </div>

                  {/* Detail preview button */}
                  <button
                    onClick={() => setSelectedProduct(product)}
                    aria-label={`Détails de ${product.name}`}
                    className="absolute bottom-3 right-3 p-2 bg-white/90 backdrop-blur-xs rounded-full text-[#1A1816] opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow-sm"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Information Block */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-[#8C7B6C] font-semibold">
                      {product.category}
                    </div>

                    <h3 className="font-serif-display text-xl text-[#1A1816] font-medium mt-1">
                      {product.name}
                    </h3>

                    <div className="text-xs text-[#6B6457] mt-1 line-clamp-1">
                      {product.materials}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#F0ECE4] flex items-center justify-between">
                    <div className="font-serif-display text-xl text-[#1A1816] font-medium tabular-nums">
                      {product.price.toLocaleString('fr-FR')} €
                    </div>

                    <button
                      type="button"
                      onClick={() => handleAdd(product)}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all ${
                        isJustAdded
                          ? 'bg-emerald-800 text-white'
                          : 'bg-[#1A1816] text-white hover:bg-[#322E29]'
                      }`}
                    >
                      {isJustAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Ajouté</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Ajouter au panier</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Curated Partner Showcase Grid (Boutique, Enchères & Amazon) */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1: Boutique Déco */}
          <div className="p-6 sm:p-7 rounded-lg bg-[#F5F2EB] border border-[#E2DDD3] flex flex-col justify-between hover:border-[#1A1816] transition-all">
            <div className="space-y-2">
              <div className="text-[11px] uppercase tracking-widest text-[#9C6D48] font-semibold flex items-center gap-1.5">
                <span>Partenaire Déco</span>
                <span aria-hidden="true">·</span>
                <span>Boutique Officielle</span>
              </div>
              <h3 className="font-serif-display text-2xl text-[#1A1816] font-medium">
                Boutique Déco & Objets
              </h3>
              <p className="text-xs sm:text-sm text-[#5A544A] leading-relaxed">
                Retrouvez une sélection complémentaire d’objets, solutions déco et offres exclusives
                proposées par notre partenaire référencé.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#EAE4DC]">
              <a
                href="https://gsnaauva.mychariow.shop/binbotsite"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-white bg-[#1A1816] rounded-md hover:bg-[#322E29] transition-all whitespace-nowrap shadow-xs active:scale-[0.99]"
              >
                <span>Visiter la boutique partenaire</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C2A374]" />
              </a>
            </div>
          </div>

          {/* Card 2: Enchères d'Art */}
          <div className="p-6 sm:p-7 rounded-lg bg-[#F5F2EB] border border-[#E2DDD3] flex flex-col justify-between hover:border-[#1A1816] transition-all">
            <div className="space-y-2">
              <div className="text-[11px] uppercase tracking-widest text-[#9C6D48] font-semibold flex items-center gap-1.5">
                <span>Curation d'Art & Mobilier</span>
                <span aria-hidden="true">·</span>
                <span>Enchères Rares</span>
              </div>
              <h3 className="font-serif-display text-2xl text-[#1A1816] font-medium">
                Ventes aux Enchères d'Art
              </h3>
              <p className="text-xs sm:text-sm text-[#5A544A] leading-relaxed">
                Accédez à la plateforme d’enchères exclusive Auctionr pour acquérir des œuvres d’art,
                antiquités architecturales et mobilier de collection.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#EAE4DC]">
              <a
                href="https://auctionr.org/4/8eab967732fcec4002e96aa2e3b2a689"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-white bg-[#1A1816] rounded-md hover:bg-[#322E29] transition-all whitespace-nowrap shadow-xs active:scale-[0.99]"
              >
                <span>Accéder aux enchères</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C2A374]" />
              </a>
            </div>
          </div>

          {/* Card 3: Amazon Déco */}
          <div className="p-6 sm:p-7 rounded-lg bg-[#F5F2EB] border border-[#E2DDD3] flex flex-col justify-between hover:border-[#1A1816] transition-all">
            <div className="space-y-2">
              <div className="text-[11px] uppercase tracking-widest text-[#9C6D48] font-semibold flex items-center gap-1.5">
                <span>Partenaire Amazon</span>
                <span aria-hidden="true">·</span>
                <span>Sélection Vérifiée</span>
              </div>
              <h3 className="font-serif-display text-2xl text-[#1A1816] font-medium">
                Essentiels Déco Amazon
              </h3>
              <p className="text-xs sm:text-sm text-[#5A544A] leading-relaxed">
                Découvrez notre sélection recommandée de luminaires d'appoint, accessoires textiles,
                arts de la table et mobilier tendance disponibles sur Amazon.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#EAE4DC] flex flex-col sm:flex-row gap-2.5">
              <a
                href="https://amzn.to/4yw5oyj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 flex-1 px-3 py-2.5 text-xs font-semibold text-white bg-[#1A1816] rounded-md hover:bg-[#322E29] transition-all whitespace-nowrap shadow-xs active:scale-[0.99]"
              >
                <span>Sélection Déco</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C2A374]" />
              </a>
              <a
                href="https://amzn.to/4zEyrR3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 flex-1 px-3 py-2.5 text-xs font-semibold text-[#1A1816] bg-[#C2A374] rounded-md hover:bg-[#D4B98E] transition-all whitespace-nowrap shadow-xs active:scale-[0.99]"
              >
                <span>Offre Spéciale</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#1A1816]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="relative w-full max-w-xl bg-white rounded-lg p-6 sm:p-8 shadow-2xl border border-[#EAE4DC]">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#8C7B6C] font-semibold">
                  {selectedProduct.category} · {selectedProduct.designer}
                </span>
                <h3 className="font-serif-display text-2xl sm:text-3xl font-normal text-[#1A1816] mt-1">
                  {selectedProduct.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="text-[#6B6457] hover:text-[#1A1816] p-1"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 rounded-md overflow-hidden aspect-[16/9] bg-[#F2EFE9]">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-4 space-y-3 text-xs sm:text-sm text-[#464139]">
              <p className="leading-relaxed">{selectedProduct.description}</p>
              <div className="p-3 bg-[#FAF9F5] rounded-md border border-[#EAE4DC] space-y-1 text-xs">
                <div>
                  <strong className="text-[#1A1816]">Dimensions :</strong> {selectedProduct.dimensions}
                </div>
                <div>
                  <strong className="text-[#1A1816]">Finitions :</strong> {selectedProduct.materials}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#EAE4DC] flex items-center justify-between">
              <span className="font-serif-display text-2xl text-[#1A1816] tabular-nums font-medium">
                {selectedProduct.price.toLocaleString('fr-FR')} €
              </span>
              <button
                onClick={() => {
                  handleAdd(selectedProduct);
                  setSelectedProduct(null);
                }}
                className="px-5 py-2.5 bg-[#1A1816] text-white text-xs font-semibold rounded-md hover:bg-[#322E29]"
              >
                Ajouter à ma commande
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
