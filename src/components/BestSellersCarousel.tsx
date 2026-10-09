import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Flame, Sparkles } from 'lucide-react';
import { PERFUMES } from '../data/perfumes';
import { ProductCard } from './ProductCard';

export const BestSellersCarousel: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const bestSellers = PERFUMES.filter((p) => p.isBestSeller);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const offset = direction === 'left' ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section id="best-sellers" className="py-20 bg-[#0E0E0E] relative overflow-hidden border-t border-white/5">
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Left/Right Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
              <Flame className="w-3.5 h-3.5 fill-[#D4AF37]" />
              <span>Sought-After Fragrances</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#F8F6F2]">
              House Best Sellers
            </h2>
            <div className="font-arabic text-xl text-[#D4AF37] font-semibold">
              الأكثر طلباً وتألقاً في دور العطور
            </div>
          </div>

          {/* Desktop Arrow Controls */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-[#181818] border border-white/10 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] transition-all active:scale-95 shadow-md"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-[#181818] border border-white/10 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] transition-all active:scale-95 shadow-md"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Swipeable Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {bestSellers.map((perfume) => (
            <div
              key={perfume.id}
              className="min-w-[280px] sm:min-w-[320px] max-w-[340px] flex-shrink-0 snap-start"
            >
              <ProductCard perfume={perfume} />
            </div>
          ))}
        </div>

        {/* Mobile Swipe Cue */}
        <div className="sm:hidden text-center pt-2 text-[11px] text-[#F8F6F2]/40 flex items-center justify-center gap-1">
          <Sparkles className="w-3 h-3 text-[#D4AF37]" />
          <span>Swipe horizontally to view all house icons</span>
        </div>
      </div>
    </section>
  );
};
