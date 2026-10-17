import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Plus, Minus, Trash2, ArrowRight, ShieldCheck, CheckCircle2, ShoppingBag } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'form' | 'success'>('cart');
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [orderRef, setOrderRef] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRef = `SV-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderRef(generatedRef);
    setCheckoutStep('success');
    onClearCart();
  };

  const handleReset = () => {
    setCheckoutStep('cart');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-[#FAF9F5] h-full shadow-2xl flex flex-col justify-between border-l border-[#EAE4DC]">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#EAE4DC] bg-white">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#9C6D48]" />
            <h3 className="font-serif-display text-xl font-normal text-[#1A1816]">
              {checkoutStep === 'success' ? 'Confirmation de commande' : 'Votre Panier Déco'}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Fermer le panier"
            className="p-1.5 text-[#554F46] hover:text-[#1A1816] rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto p-5 flex-1 space-y-4">
          {checkoutStep === 'cart' && (
            <>
              {items.length === 0 ? (
                <div className="py-16 text-center space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full bg-[#EFECE5] flex items-center justify-center text-[#8C7B6C]">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                  <p className="font-serif-display text-xl text-[#1A1816]">Votre sélection est vide</p>
                  <p className="text-xs text-[#7A7367] max-w-xs mx-auto">
                    Découvrez nos luminaires en grès, notre mobilier en travertin ou commandez le coffret d’échantillons.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex gap-3 p-3 bg-white rounded-lg border border-[#EAE4DC]"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded-md bg-[#F5F2EB] shrink-0"
                      />
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-1">
                            <h4 className="text-xs font-semibold text-[#1A1816] truncate">
                              {item.product.name}
                            </h4>
                            <button
                              onClick={() => onRemoveItem(item.product.id)}
                              className="text-[#9C8F80] hover:text-red-700 p-0.5"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <div className="text-[11px] text-[#7A7367]">{item.product.category}</div>
                        </div>

                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center border border-[#DDD6CB] rounded-md bg-[#FAF9F5]">
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                              className="px-2 py-0.5 text-xs text-[#464139] hover:bg-[#EFECE5]"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2 text-xs font-mono tabular-nums">{item.quantity}</span>
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                              className="px-2 py-0.5 text-xs text-[#464139] hover:bg-[#EFECE5]"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <span className="font-serif-display text-sm font-medium text-[#1A1816] tabular-nums">
                            {(item.product.price * item.quantity).toLocaleString('fr-FR')} €
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {checkoutStep === 'form' && (
            <form id="checkout-form" onSubmit={handleSubmitOrder} className="space-y-4">
              <div className="text-xs text-[#70685D] mb-2">
                Complétez vos coordonnées pour finaliser la réservation ou l'envoi de vos pièces.
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#1A1816] mb-1">
                  Nom et Prénom *
                </label>
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Éléonore de Rochechouart"
                  className="w-full px-3 py-2 text-xs rounded-md border border-[#DDD6CB] bg-white focus:outline-hidden focus:border-[#1A1816]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1A1816] mb-1">
                  Adresse Email *
                </label>
                <input
                  type="email"
                  required
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  placeholder="contact@exemple.fr"
                  className="w-full px-3 py-2 text-xs rounded-md border border-[#DDD6CB] bg-white focus:outline-hidden focus:border-[#1A1816]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1A1816] mb-1">
                  Numéro de Téléphone *
                </label>
                <input
                  type="tel"
                  required
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="06 12 34 56 78"
                  className="w-full px-3 py-2 text-xs rounded-md border border-[#DDD6CB] bg-white focus:outline-hidden focus:border-[#1A1816]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1A1816] mb-1">
                  Adresse de Livraison complète *
                </label>
                <textarea
                  required
                  rows={3}
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  placeholder="14 Rue du Bac, 75007 Paris, Code d'accès, Bâtiment B..."
                  className="w-full px-3 py-2 text-xs rounded-md border border-[#DDD6CB] bg-white focus:outline-hidden focus:border-[#1A1816]"
                />
              </div>

              <div className="p-3 bg-[#F5F2EB] rounded-md text-xs text-[#57524A] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#9C6D48] shrink-0" />
                <span>Paiement sécurisé ou facture d'acompte 30% lors de la confirmation artisanale.</span>
              </div>
            </form>
          )}

          {checkoutStep === 'success' && (
            <div className="py-8 text-center space-y-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="font-serif-display text-2xl text-[#1A1816]">
                Commande #{orderRef} confirmée
              </h4>
              <p className="text-xs text-[#57524A] leading-relaxed max-w-xs mx-auto">
                Merci {customerName || 'cher client'}. Notre responsable logistique d'art vous contacte sous 24h
                à l’adresse <strong className="text-[#1A1816]">{customerEmail}</strong> pour planifier la livraison gant blanc.
              </p>
              <div className="p-4 bg-white border border-[#EAE4DC] rounded-lg text-left text-xs space-y-1.5">
                <div className="text-[#8C7B6C] uppercase font-semibold text-[10px]">Récapitulatif</div>
                <div><strong className="text-[#1A1816]">Destinataire :</strong> {customerName}</div>
                <div><strong className="text-[#1A1816]">Téléphone :</strong> {customerPhone}</div>
                <div><strong className="text-[#1A1816]">Adresse :</strong> {customerAddress}</div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-5 border-t border-[#EAE4DC] bg-white space-y-3">
          {checkoutStep === 'cart' && items.length > 0 && (
            <>
              <div className="flex justify-between items-center text-sm">
                <span className="text-[#6B6457]">Sous-total articles :</span>
                <span className="font-serif-display text-xl font-medium text-[#1A1816] tabular-nums">
                  {subtotal.toLocaleString('fr-FR')} € TTC
                </span>
              </div>
              <p className="text-[11px] text-[#8C7B6C]">
                Livraison soignée sur mesure en France, Suisse et Belgique.
              </p>
              <button
                onClick={() => setCheckoutStep('form')}
                className="w-full py-3 bg-[#1A1816] text-white text-xs font-semibold rounded-md hover:bg-[#322E29] flex items-center justify-center gap-2 transition-all"
              >
                <span>Passer à la validation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </>
          )}

          {checkoutStep === 'form' && (
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setCheckoutStep('cart')}
                className="w-1/3 py-2.5 text-xs text-[#57524A] border border-[#DDD6CB] rounded-md hover:bg-[#F5F2EB]"
              >
                Retour
              </button>
              <button
                type="submit"
                form="checkout-form"
                className="w-2/3 py-2.5 bg-[#1A1816] text-white text-xs font-semibold rounded-md hover:bg-[#322E29]"
              >
                Confirmer ({subtotal.toLocaleString('fr-FR')} €)
              </button>
            </div>
          )}

          {checkoutStep === 'success' && (
            <button
              onClick={handleReset}
              className="w-full py-2.5 bg-[#1A1816] text-white text-xs font-semibold rounded-md hover:bg-[#322E29]"
            >
              Fermer et poursuivre la visite
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
