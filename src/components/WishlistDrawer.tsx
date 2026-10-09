import React from 'react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PERFUMES } from '../data/perfumes';

export const WishlistDrawer: React.FC = () => {
  const { wishlist, isWishlistOpen, setIsWishlistOpen, toggleWishlist, addToCart, formatPrice } = useCart();

  if (!isWishlistOpen) return null;

  const wishlistedPerfumes = PERFUMES.filter((p) => wishlist.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#121212] border-l border-[#D4AF37]/25 shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#161616]">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
              <h2 className="text-base font-display font-bold text-white uppercase tracking-wider">
                My Fragrance Wishlist ({wishlistedPerfumes.length})
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setIsWishlistOpen(false)}
              className="p-1.5 text-white/70 hover:text-white rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close wishlist"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List */}
          <div className="p-5 overflow-y-auto flex-grow space-y-4">
            {wishlistedPerfumes.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <Heart className="w-12 h-12 text-[#D4AF37]/30 mx-auto" />
                <p className="text-sm text-[#F8F6F2]/60">Your wishlist is currently empty.</p>
                <button
                  type="button"
                  onClick={() => setIsWishlistOpen(false)}
                  className="px-6 py-2.5 bg-gold-gradient text-[#0A0A0A] font-bold text-xs uppercase tracking-widest rounded-sm"
                >
                  Discover Fragrances
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {wishlistedPerfumes.map((perfume) => (
                  <div
                    key={perfume.id}
                    className="p-3.5 rounded-lg bg-[#181818] border border-white/5 flex gap-3 relative group"
                  >
                    <img
                      src={perfume.image}
                      alt={perfume.name}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.src.includes('/images/')) {
                          target.src = `/images/${perfume.id.replace('-', '_')}.jpg`;
                        }
                      }}
                      className="w-16 h-20 object-cover rounded bg-black shrink-0 border border-[#D4AF37]/20"
                    />

                    <div className="flex-grow space-y-1 text-left">
                      <div className="pr-6">
                        <h4 className="font-display font-semibold text-white text-xs sm:text-sm">
                          {perfume.name}
                        </h4>
                        <div className="text-[11px] text-[#D4AF37] font-arabic">
                          {perfume.nameAr}
                        </div>
                      </div>

                      <div className="text-xs text-[#F8F6F2]/50">
                        {perfume.volume} · {perfume.concentration}
                      </div>

                      <div className="pt-2 flex items-center justify-between">
                        <span className="font-mono font-bold text-white text-sm tabular-nums">
                          {formatPrice(perfume.price)}
                        </span>

                        <button
                          type="button"
                          onClick={() => {
                            addToCart(perfume);
                            toggleWishlist(perfume.id);
                          }}
                          className="px-3 py-1.5 bg-[#D4AF37] hover:bg-[#F3E5AB] text-[#0A0A0A] text-[11px] font-semibold uppercase tracking-wider rounded-sm flex items-center gap-1 transition-colors active:scale-95"
                        >
                          <ShoppingBag className="w-3 h-3" />
                          <span>Move to Bag</span>
                        </button>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => toggleWishlist(perfume.id)}
                      className="absolute top-3 right-3 text-white/40 hover:text-rose-400 p-1 transition-colors"
                      aria-label="Remove from wishlist"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/10 bg-[#161616] text-center text-xs text-[#F8F6F2]/50">
            Complimentary shipping applied to all orders above $150
          </div>
        </div>
      </div>
    </div>
  );
};
