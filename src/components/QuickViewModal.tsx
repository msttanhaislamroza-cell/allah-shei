import React, { useState } from 'react';
import { X, Star, Heart, ShoppingBag, MessageCircle, ShieldCheck, Sparkles, Clock, Wind, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const QuickViewModal: React.FC = () => {
  const { activeQuickView, setActiveQuickView, addToCart, isInWishlist, toggleWishlist, formatPrice } = useCart();
  const [selectedVolume, setSelectedVolume] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [engraving, setEngraving] = useState<string>('');
  const [showEngravingInput, setShowEngravingInput] = useState<boolean>(false);
  const [addedSuccess, setAddedSuccess] = useState<boolean>(false);

  if (!activeQuickView) return null;

  const currentVolume = selectedVolume || activeQuickView.volume;
  const wishlisted = isInWishlist(activeQuickView.id);

  const handleAdd = () => {
    addToCart(activeQuickView, currentVolume, quantity, engraving.trim() || undefined);
    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
      setActiveQuickView(null);
    }, 900);
  };

  // WhatsApp order link
  const whatsappText = encodeURIComponent(
    `Hello Utoorat-e-Azami Concierge. I wish to order:\n- Perfume: ${activeQuickView.name} (${activeQuickView.nameAr})\n- Volume: ${currentVolume}\n- Quantity: ${quantity}${
      engraving ? `\n- Gold Engraving: "${engraving}"` : ''
    }\nPlease confirm availability and courier delivery.`
  );
  const whatsappUrl = `https://wa.me/971500000000?text=${whatsappText}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#121212] border border-[#D4AF37]/30 rounded-xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.9)] max-h-[92vh] flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setActiveQuickView(null)}
          className="absolute top-4 right-4 z-20 p-2 text-[#F8F6F2]/70 hover:text-white bg-black/60 hover:bg-black/90 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Image with Luxury Frame */}
        <div className="relative md:w-1/2 bg-[#0A0A0A] p-6 flex items-center justify-center overflow-hidden">
          <div className="relative w-full max-w-sm aspect-[3/4] rounded-lg overflow-hidden border border-[#D4AF37]/20 shadow-2xl">
            <img
              src={activeQuickView.image}
              alt={activeQuickView.name}
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.includes('/images/')) {
                  target.src = `/images/${activeQuickView.id.replace('-', '_')}.jpg`;
                }
              }}
              className="w-full h-full object-cover object-center"
            />
            {/* Ambient Reflection */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded border border-[#D4AF37]/30 text-[11px] text-[#D4AF37] font-mono">
              {activeQuickView.concentration}
            </div>
          </div>
        </div>

        {/* Right Column: Detailed Perfume Atelier */}
        <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto max-h-[85vh] space-y-5 text-left">
          {/* Collection & Rating */}
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-medium">
              {activeQuickView.collection}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-[#F8F6F2]/80 font-mono">
              <Star className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
              <span className="font-semibold text-white">{activeQuickView.rating.toFixed(2)}</span>
              <span>({activeQuickView.reviewCount} connoisseurs)</span>
            </div>
          </div>

          {/* Titles */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F8F6F2]">
              {activeQuickView.name}
            </h2>
            <div className="font-arabic text-lg text-[#D4AF37] font-semibold mt-1">
              {activeQuickView.nameAr}
            </div>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-2xl font-bold text-white tabular-nums">
              {formatPrice(activeQuickView.price)}
            </span>
            {activeQuickView.originalPrice && (
              <span className="font-mono text-sm text-[#F8F6F2]/40 line-through tabular-nums">
                {formatPrice(activeQuickView.originalPrice)}
              </span>
            )}
            <span className="text-[11px] text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded">
              Complimentary White Glove Delivery
            </span>
          </div>

          {/* Narrative Description */}
          <p className="text-xs sm:text-sm text-[#F8F6F2]/80 leading-relaxed font-light">
            {activeQuickView.description}
          </p>

          {/* Olfactory Notes Pyramid */}
          <div className="p-4 bg-[#0A0A0A]/70 rounded-lg border border-[#D4AF37]/20 space-y-3">
            <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Olfactory Architecture & Pyramid</span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <span className="text-[#F8F6F2]/50 font-mono uppercase text-[10px] w-24 shrink-0">
                  Top Notes:
                </span>
                <span className="text-[#F8F6F2] font-medium">
                  {activeQuickView.notes.top.join(' · ')}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <span className="text-[#F8F6F2]/50 font-mono uppercase text-[10px] w-24 shrink-0">
                  Heart Notes:
                </span>
                <span className="text-[#F8F6F2] font-medium">
                  {activeQuickView.notes.heart.join(' · ')}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <span className="text-[#F8F6F2]/50 font-mono uppercase text-[10px] w-24 shrink-0">
                  Base Notes:
                </span>
                <span className="text-[#D4AF37] font-medium">
                  {activeQuickView.notes.base.join(' · ')}
                </span>
              </div>
            </div>

            {/* Performance metrics */}
            <div className="pt-2 border-t border-white/5 grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-1.5 text-[#F8F6F2]/80">
                <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Longevity: <strong className="text-white font-mono">{activeQuickView.longevity}</strong></span>
              </div>
              <div className="flex items-center gap-1.5 text-[#F8F6F2]/80">
                <Wind className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Sillage: <strong className="text-white">{activeQuickView.sillage}</strong></span>
              </div>
            </div>
          </div>

          {/* Volume Selection */}
          <div className="space-y-1.5">
            <label className="text-xs uppercase tracking-wider text-[#F8F6F2]/60">Select Flacon Size</label>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setSelectedVolume('100ml / 3.4 fl oz')}
                className={`px-3 py-1.5 text-xs rounded border transition-colors ${
                  currentVolume.includes('100ml')
                    ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-white font-semibold'
                    : 'border-white/10 text-[#F8F6F2]/70 hover:border-white/30'
                }`}
              >
                100ml / 3.4 fl oz (Standard)
              </button>
              <button
                type="button"
                onClick={() => setSelectedVolume('50ml / 1.7 fl oz')}
                className={`px-3 py-1.5 text-xs rounded border transition-colors ${
                  currentVolume.includes('50ml')
                    ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-white font-semibold'
                    : 'border-white/10 text-[#F8F6F2]/70 hover:border-white/30'
                }`}
              >
                50ml / 1.7 fl oz (Travel Gem)
              </button>
            </div>
          </div>

          {/* Complimentary Gold Laser Engraving Toggle */}
          <div className="border border-[#D4AF37]/25 p-3 rounded-lg bg-[#0A0A0A]/50">
            <div className="flex items-center justify-between">
              <div className="text-xs text-[#F8F6F2]">
                <span className="font-semibold text-[#D4AF37]">Complimentary Bottle Laser Engraving</span>
                <p className="text-[11px] text-[#F8F6F2]/60">Custom monogram or name on the flacon neck collar</p>
              </div>
              <button
                type="button"
                onClick={() => setShowEngravingInput(!showEngravingInput)}
                className="text-xs text-[#D4AF37] underline underline-offset-4"
              >
                {showEngravingInput ? 'Cancel' : '+ Add Text'}
              </button>
            </div>
            {showEngravingInput && (
              <div className="mt-2.5">
                <input
                  type="text"
                  maxLength={16}
                  value={engraving}
                  onChange={(e) => setEngraving(e.target.value)}
                  placeholder="e.g., TARIQ 2026 or طارق"
                  className="w-full bg-[#181818] border border-[#D4AF37]/40 rounded px-3 py-1.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37]"
                />
                <div className="text-[10px] text-[#F8F6F2]/40 mt-1 flex justify-between">
                  <span>Up to 16 characters in English or Arabic</span>
                  <span>{engraving.length}/16</span>
                </div>
              </div>
            )}
          </div>

          {/* Action Row */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            {/* Quantity */}
            <div className="flex items-center border border-white/15 rounded bg-[#181818] px-3 py-2 justify-between sm:w-28 shrink-0">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="text-lg text-white/70 hover:text-white px-1"
              >
                -
              </button>
              <span className="font-mono text-sm font-semibold">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="text-lg text-white/70 hover:text-white px-1"
              >
                +
              </button>
            </div>

            {/* Add to Bag */}
            <button
              type="button"
              onClick={handleAdd}
              disabled={addedSuccess}
              className={`flex-grow py-3 px-6 rounded text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition-all active:scale-95 ${
                addedSuccess
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gold-gradient text-[#0A0A0A] hover:opacity-95 shadow-[0_4px_20px_rgba(212,175,55,0.3)]'
              }`}
            >
              {addedSuccess ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added to Bag</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bag · {formatPrice(activeQuickView.price * quantity)}</span>
                </>
              )}
            </button>

            {/* Wishlist Toggle */}
            <button
              type="button"
              onClick={() => toggleWishlist(activeQuickView.id)}
              className={`p-3 rounded border transition-colors shrink-0 ${
                wishlisted
                  ? 'border-[#D4AF37] bg-[#D4AF37]/15 text-[#D4AF37]'
                  : 'border-white/15 text-white/70 hover:text-white hover:border-white/30'
              }`}
              aria-label="Wishlist toggle"
            >
              <Heart className={`w-5 h-5 ${wishlisted ? 'fill-[#D4AF37]' : ''}`} />
            </button>
          </div>

          {/* WhatsApp Direct Order CTA */}
          <div className="pt-1">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-600/40 rounded text-emerald-300 text-xs font-medium flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Order via WhatsApp Private Concierge</span>
            </a>
          </div>

          {/* Trust points */}
          <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-[#F8F6F2]/50">
            <div className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>100% Authentic House Batch</span>
            </div>
            <span>Dispatches within 24h</span>
          </div>
        </div>
      </div>
    </div>
  );
};
