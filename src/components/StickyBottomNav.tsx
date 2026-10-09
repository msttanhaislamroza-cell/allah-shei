import React from 'react';
import { ShoppingBag, Heart, Compass, Sparkles, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const StickyBottomNav: React.FC = () => {
  const { cartCount, wishlist, setIsCartOpen, setIsWishlistOpen } = useCart();

  return (
    <nav
      aria-label="Mobile Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0D0D0D]/95 backdrop-blur-xl border-t border-[#D4AF37]/20 px-3 py-2 shadow-[0_-8px_25px_rgba(0,0,0,0.85)] max-h-16"
    >
      <div className="flex items-center justify-around">
        {/* Shop collection */}
        <a
          href="#collection"
          className="flex flex-col items-center justify-center p-1 text-[#F8F6F2]/75 hover:text-[#D4AF37] transition-colors active:scale-95"
        >
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-[10px] tracking-wider uppercase font-medium mt-0.5">Shop</span>
        </a>

        {/* Olfactory Notes */}
        <a
          href="#olfactory-atelier"
          className="flex flex-col items-center justify-center p-1 text-[#F8F6F2]/75 hover:text-[#D4AF37] transition-colors active:scale-95"
        >
          <Compass className="w-4 h-4" />
          <span className="text-[10px] tracking-wider uppercase font-medium mt-0.5">Notes</span>
        </a>

        {/* Wishlist */}
        <button
          type="button"
          onClick={() => setIsWishlistOpen(true)}
          className="relative flex flex-col items-center justify-center p-1 text-[#F8F6F2]/75 hover:text-[#D4AF37] transition-colors active:scale-95"
          aria-label="Open Wishlist"
        >
          <Heart className="w-4 h-4" />
          {wishlist.length > 0 && (
            <span className="absolute 0 top-0.5 right-1.5 w-3.5 h-3.5 bg-[#D4AF37] text-[#0A0A0A] text-[9px] font-bold rounded-full flex items-center justify-center font-mono">
              {wishlist.length}
            </span>
          )}
          <span className="text-[10px] tracking-wider uppercase font-medium mt-0.5">Saved</span>
        </button>

        {/* Cart Bag */}
        <button
          type="button"
          onClick={() => setIsCartOpen(true)}
          className="relative flex flex-col items-center justify-center p-1 text-[#F8F6F2]/75 hover:text-[#D4AF37] transition-colors active:scale-95"
          aria-label="Open Bag"
        >
          <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
          {cartCount > 0 && (
            <span className="absolute 0 top-0.5 right-1.5 w-3.5 h-3.5 bg-[#D4AF37] text-[#0A0A0A] text-[9px] font-bold rounded-full flex items-center justify-center font-mono">
              {cartCount}
            </span>
          )}
          <span className="text-[10px] tracking-wider uppercase font-medium mt-0.5">Bag</span>
        </button>

        {/* WhatsApp concierge */}
        <a
          href={`https://wa.me/971500000000?text=${encodeURIComponent(
            'Salam Utoorat-e-Azami. I would like assistance selecting a bespoke luxury fragrance.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-1 text-emerald-400 hover:text-emerald-300 transition-colors active:scale-95"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="text-[10px] tracking-wider uppercase font-medium mt-0.5">Concierge</span>
        </a>
      </div>
    </nav>
  );
};
