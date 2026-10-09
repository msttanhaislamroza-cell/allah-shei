import React, { useState } from 'react';
import { PERFUMES } from '../data/perfumes';
import { PerfumeCard } from './ProductCard';
import { PerfumeCollection } from '../types';
import { Sparkles, SlidersHorizontal } from 'lucide-react';

const COLLECTIONS: { id: PerfumeCollection; name: string; nameAr: string }[] = [
  { id: 'All', name: 'All Masterpieces', nameAr: 'كافة الروائع' },
  { id: 'Signature Collection', name: 'Signature Collection', nameAr: 'المجموعة الملكية' },
  { id: 'Oud Collection', name: 'Oud Collection', nameAr: 'مجموعة العود' },
  { id: 'Evening Collection', name: 'Evening Collection', nameAr: 'مجموعة السهرة' },
  { id: 'Fresh Collection', name: 'Fresh Collection', nameAr: 'المجموعة المنعشة' },
];

export const FeaturedPerfumes: React.FC = () => {
  const [selectedCollection, setSelectedCollection] = useState<PerfumeCollection>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  const filtered = PERFUMES.filter((p) => {
    if (selectedCollection === 'All') return true;
    return p.collection === selectedCollection;
  }).sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
  });

  return (
    <section id="collection" className="py-20 bg-[#0A0A0A] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Haute Parfumerie</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#F8F6F2]">
            The Fragrance Collection
          </h2>
          <div className="font-arabic text-2xl text-[#D4AF37] font-semibold">
            مجموعة عطورات اعظمی الفاخرة
          </div>
          <p className="text-sm text-[#F8F6F2]/70 font-light">
            Indulge in artisanal Extraits de Parfum, handcrafted with precious oud oils, Bulgarian rose, rare ambergris, and crystal citrus.
          </p>
        </div>

        {/* Collection Filter Buttons / Segmented Controls & Sorting */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-4 border-b border-white/10">
          {/* Functional Button Tabs for Filtering (allowed per frontend-design skill) */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto p-1 bg-[#141414] rounded-lg border border-white/10 hide-scrollbar">
            {COLLECTIONS.map((c) => {
              const active = selectedCollection === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setSelectedCollection(c.id)}
                  className={`px-3.5 py-2 text-xs uppercase tracking-wider font-medium rounded-md transition-all whitespace-nowrap active:scale-95 ${
                    active
                      ? 'bg-[#D4AF37] text-[#0A0A0A] font-bold shadow-md'
                      : 'text-[#F8F6F2]/75 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{c.name}</span>
                </button>
              );
            })}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 self-end sm:self-center">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#D4AF37]" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#141414] text-xs text-[#F8F6F2]/80 border border-white/10 rounded px-2.5 py-1.5 focus:outline-none focus:border-[#D4AF37]"
            >
              <option value="featured">Featured Curations</option>
              <option value="rating">Highest Rated</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* 3-Column / 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((perfume) => (
            <PerfumeCard key={perfume.id} perfume={perfume} />
          ))}
        </div>
      </div>
    </section>
  );
};
