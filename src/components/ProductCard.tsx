import React, { useState } from 'react';
import { Heart, ShoppingBag, Eye, Star, Sparkles } from 'lucide-react';
import { Perfume } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  perfume: Perfume;
}

export const ProductCard: React.FC<ProductCardProps> = ({ perfume }) => {
  const { addToCart, toggleWishlist, isInWishlist, formatPrice, setActiveQuickView } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [justAdded, setJustAdded] = useState(false);
  const wishlisted = isInWishlist(perfume.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(perfume);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(perfume.id);
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col justify-between glass-card rounded-xl overflow-hidden border border-[#D4AF37]/15 hover:border-[#D4AF37]/50 transition-all duration-300 hover:shadow-[0_10px_35px_rgba(212,175,55,0.15)] bg-[#121212]/90"
    >
      {/* Card Header & Badges */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#0A0A0A] cursor-pointer" onClick={() => setActiveQuickView(perfume)}>
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
          className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Ambient Dark Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/20 opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Subtle Top Metadata Bar */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          {perfume.badge ? (
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#0A0A0A] bg-gradient-to-r from-[#F3E5AB] to-[#D4AF37] px-2.5 py-0.5 rounded font-semibold shadow-sm">
              {perfume.badge}
            </span>
          ) : (
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#F8F6F2]/70 bg-black/60 backdrop-blur px-2 py-0.5 rounded border border-white/10">
              {perfume.concentration}
            </span>
          )}

          {/* Wishlist Button */}
          <button
            type="button"
            onClick={handleToggleWishlist}
            className={`p-2 rounded-full backdrop-blur-md transition-all duration-200 active:scale-90 ${
              wishlisted
                ? 'bg-[#D4AF37] text-[#0A0A0A]'
                : 'bg-black/60 text-[#F8F6F2]/80 hover:text-[#D4AF37] hover:bg-black/90'
            }`}
            aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <Heart className={`w-4 h-4 ${wishlisted ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Quick View Hover Pill overlay */}
        <div
          className={`absolute inset-x-0 bottom-3 flex justify-center px-4 transition-all duration-300 transform ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
          }`}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveQuickView(perfume);
            }}
            className="w-full py-2.5 bg-black/85 hover:bg-black text-[#F8F6F2] hover:text-[#D4AF37] text-xs uppercase tracking-widest font-semibold rounded-sm border border-[#D4AF37]/40 flex items-center justify-center gap-1.5 shadow-lg backdrop-blur-md transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View & Notes</span>
          </button>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between space-y-3">
        {/* Collection & Rating */}
        <div className="flex items-center justify-between text-xs text-[#F8F6F2]/60">
          <span className="text-[11px] uppercase tracking-wider text-[#D4AF37]">
            {perfume.collection}
          </span>
          <div className="flex items-center gap-1 font-mono text-[11px] text-[#F8F6F2]/80">
            <Star className="w-3 h-3 fill-[#D4AF37] text-[#D4AF37]" />
            <span className="font-semibold text-white">{perfume.rating.toFixed(1)}</span>
            <span>({perfume.reviewCount})</span>
          </div>
        </div>

        {/* Product Titles */}
        <div>
          <h3
            onClick={() => setActiveQuickView(perfume)}
            className="text-base sm:text-lg font-display font-semibold text-[#F8F6F2] group-hover:text-[#D4AF37] transition-colors cursor-pointer leading-snug"
          >
            {perfume.name}
          </h3>
          <div className="font-arabic text-sm text-[#D4AF37]/90 font-medium pt-0.5">
            {perfume.nameAr}
          </div>
        </div>

        {/* Description snippet */}
        <p className="text-xs text-[#F8F6F2]/70 line-clamp-2 leading-relaxed">
          {perfume.description}
        </p>

        {/* Fragrance Key Notes Summary */}
        <div className="py-2 border-y border-white/5 space-y-1.5">
          <div className="text-[10px] uppercase tracking-wider text-[#D4AF37]/80 flex items-center gap-1">
            <Sparkles className="w-2.5 h-2.5" />
            <span>Key Accords:</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {perfume.accords.slice(0, 3).map((accord, idx) => (
              <span
                key={idx}
                className="text-[11px] text-[#F8F6F2]/80 bg-white/5 border border-white/10 px-2 py-0.5 rounded-sm"
              >
                {accord}
              </span>
            ))}
          </div>
        </div>

        {/* Price & Add to Cart button */}
        <div className="pt-1 flex items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="text-xs text-[#F8F6F2]/50">{perfume.volume}</div>
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-lg font-bold text-white tabular-nums">
                {formatPrice(perfume.price)}
              </span>
              {perfume.originalPrice && (
                <span className="font-mono text-xs text-[#F8F6F2]/40 line-through tabular-nums">
                  {formatPrice(perfume.originalPrice)}
                </span>
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={handleAddToCart}
            className={`px-4 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all duration-200 flex items-center gap-1.5 active:scale-95 whitespace-nowrap ${
              justAdded
                ? 'bg-emerald-600 text-white'
                : 'bg-gold-gradient hover:opacity-95 text-[#0A0A0A]'
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>{justAdded ? 'Added' : 'Add to Bag'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export { ProductCard as PerfumeCard };
