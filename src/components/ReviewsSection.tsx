import React, { useState } from 'react';
import { Star, ShieldCheck, MessageSquare, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { CUSTOMER_REVIEWS } from '../data/perfumes';

export const ReviewsSection: React.FC = () => {
  const [filterRating, setFilterRating] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const reviews = CUSTOMER_REVIEWS.filter(
    (r) => filterRating === null || r.rating === filterRating
  );

  const prevReview = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const featuredReview = reviews[activeIndex] || reviews[0];

  return (
    <section id="reviews" className="py-24 bg-[#0D0D0D] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
            <Quote className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Words from the Connoisseurs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#F8F6F2]">
            Client Testimonials & Praise
          </h2>
          <div className="font-arabic text-2xl text-[#D4AF37] font-semibold">
            آراء النخبة وعشاق العطور الراقية
          </div>
          <p className="text-sm text-[#F8F6F2]/70 font-light">
            Read verified experiences from fragrance collectors and royalty across Dubai, Riyadh, London, and Paris.
          </p>
        </div>

        {/* Highlighted Testimonial Feature Card */}
        {featuredReview && (
          <div className="glass-card max-w-4xl mx-auto rounded-2xl p-6 sm:p-10 border border-[#D4AF37]/30 shadow-2xl relative mb-12">
            <Quote className="absolute top-6 right-6 w-12 h-12 text-[#D4AF37]/15 pointer-events-none" />

            <div className="space-y-4 text-left">
              {/* Stars & Verified */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < featuredReview.rating
                          ? 'fill-[#D4AF37] text-[#D4AF37]'
                          : 'text-white/20'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/50 border border-emerald-800/40 px-2.5 py-0.5 rounded">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Purchase</span>
                </div>
              </div>

              {/* Title & Comment */}
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                "{featuredReview.title}"
              </h3>
              <p className="text-sm sm:text-base text-[#F8F6F2]/80 leading-relaxed font-light italic">
                "{featuredReview.comment}"
              </p>

              {/* Author & Location */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="font-semibold text-white text-sm">
                    {featuredReview.author}
                  </div>
                  <div className="text-xs text-[#D4AF37] font-mono">
                    {featuredReview.location} · {featuredReview.perfumeName}
                  </div>
                </div>

                {/* Next/Prev Navigation */}
                <div className="flex items-center gap-2 self-end sm:self-center">
                  <button
                    type="button"
                    onClick={prevReview}
                    className="p-2 rounded bg-black/40 hover:bg-black border border-white/10 text-white hover:text-[#D4AF37] transition-colors"
                    aria-label="Previous review"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-mono text-white/50 px-2">
                    {activeIndex + 1} / {reviews.length}
                  </span>
                  <button
                    type="button"
                    onClick={nextReview}
                    className="p-2 rounded bg-black/40 hover:bg-black border border-white/10 text-white hover:text-[#D4AF37] transition-colors"
                    aria-label="Next review"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3-Column Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((rev) => (
            <div
              key={rev.id}
              className="p-5 rounded-xl bg-[#141414] border border-white/10 hover:border-[#D4AF37]/40 transition-colors flex flex-col justify-between space-y-4 text-left"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>
                  <span className="text-[10px] text-white/40 font-mono">{rev.date}</span>
                </div>
                <h4 className="font-display font-semibold text-white text-sm line-clamp-1">
                  {rev.title}
                </h4>
                <p className="text-xs text-[#F8F6F2]/70 leading-relaxed line-clamp-3">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                <div>
                  <div className="text-white font-medium">{rev.author}</div>
                  <div className="text-[#D4AF37] text-[11px]">{rev.location}</div>
                </div>
                <div className="text-[10px] text-white/50 italic font-arabic">
                  {rev.authorAr}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
