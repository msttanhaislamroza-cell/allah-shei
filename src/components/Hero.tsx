import React, { useState } from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Truck, Award, CheckCircle2 } from 'lucide-react';
import { HERO_IMAGE, PERFUMES } from '../data/perfumes';
import { useCart } from '../context/CartContext';

export const Hero: React.FC = () => {
  const { setActiveQuickView } = useCart();
  const [selectedHeroIndex, setSelectedHeroIndex] = useState(0);

  const heroShowcaseItems = [
    {
      id: 'signature-blue',
      name: PERFUMES[2].name,
      nameAr: PERFUMES[2].nameAr,
      subtitle: PERFUMES[2].subName,
      image: PERFUMES[2].image,
      aspect: 'aspect-[3/4]',
      badge: 'House Signature',
      perfumeRef: PERFUMES[2]
    },
    {
      id: 'dkhoon-desert',
      name: PERFUMES[0].name,
      nameAr: PERFUMES[0].nameAr,
      subtitle: PERFUMES[0].subName,
      image: PERFUMES[0].image,
      aspect: 'aspect-[3/4]',
      badge: 'Oud Legend',
      perfumeRef: PERFUMES[0]
    },
    {
      id: 'zumar',
      name: PERFUMES[1].name,
      nameAr: PERFUMES[1].nameAr,
      subtitle: PERFUMES[1].subName,
      image: PERFUMES[1].image,
      aspect: 'aspect-[3/4]',
      badge: 'Extrait Royal',
      perfumeRef: PERFUMES[1]
    },
    {
      id: 'afnan-9pm',
      name: PERFUMES[3].name,
      nameAr: PERFUMES[3].nameAr,
      subtitle: PERFUMES[3].subName,
      image: PERFUMES[3].image,
      aspect: 'aspect-[3/4]',
      badge: 'Night Icon',
      perfumeRef: PERFUMES[3]
    },
    {
      id: 'lumiere-parfum',
      name: PERFUMES[4].name,
      nameAr: PERFUMES[4].nameAr,
      subtitle: PERFUMES[4].subName,
      image: PERFUMES[4].image,
      aspect: 'aspect-[3/4]',
      badge: 'Artisanal Flacon',
      perfumeRef: PERFUMES[4]
    }
  ];

  const currentHero = heroShowcaseItems[selectedHeroIndex];

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 bg-[#0A0A0A]">
      {/* Ambient Perfume Photographic Backdrop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <img
          src={HERO_IMAGE}
          alt="Luxury Perfume Atmosphere"
          referrerPolicy="no-referrer"
          onError={(e) => {
            const target = e.currentTarget;
            if (!target.src.includes('/images/')) {
              target.src = '/images/utoorat_e_azami_signature_blue.jpeg';
            }
          }}
          className="w-full h-full object-cover filter blur-[28px] scale-110 transform transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0A0A0A]/70 to-[#0A0A0A]" />
      </div>

      {/* Background Ambient Glow & Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[140px] animate-pulse-glow" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#B89726]/5 rounded-full blur-[100px]" />
        
        {/* Subtle decorative gold stardust particles */}
        <div className="absolute top-20 left-[15%] w-1.5 h-1.5 bg-[#D4AF37] rounded-full blur-[0.5px] opacity-60 animate-bounce duration-1000" />
        <div className="absolute top-1/3 right-[20%] w-2 h-2 bg-[#F3E5AB] rounded-full blur-[0.5px] opacity-40 animate-pulse" />
        <div className="absolute bottom-1/3 left-[25%] w-1 h-1 bg-[#D4AF37] rounded-full opacity-70 animate-ping duration-1000" />
        <div className="absolute top-1/2 right-[12%] w-1.5 h-1.5 bg-[#D4AF37] rounded-full opacity-50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Brand Copy & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Arabic Calligraphy Kicker (clean text, no pills) */}
            <div className="flex items-center justify-center lg:justify-start gap-3 text-xs tracking-[0.25em] text-[#D4AF37]">
              <span className="font-arabic text-lg sm:text-xl font-bold tracking-wide">
                بِسْمِ طِيبِ الأَصَالَةِ وَالفَخَامَة
              </span>
              <span className="text-[#D4AF37]/40">·</span>
              <span className="uppercase text-[11px] font-medium tracking-[0.25em] text-[#F8F6F2]/70">
                Haute Parfumerie
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-[#F8F6F2] leading-[1.15] tracking-tight">
                Discover the Art of <span className="text-gold-gradient block sm:inline">Fragrance</span>
              </h1>
              <div className="font-arabic text-3xl sm:text-4xl lg:text-5xl text-[#D4AF37] font-bold tracking-wide pt-1">
                عطورات اعظمی
              </div>
            </div>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#F8F6F2]/75 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Curated luxury fragrances crafted for unforgettable presence. Timeless Arabic perfumery tradition harmonized with contemporary French maceration.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#collection"
                className="w-full sm:w-auto px-8 py-3.5 bg-gold-gradient hover:opacity-95 text-[#0A0A0A] font-bold text-xs uppercase tracking-[0.2em] rounded-sm transition-all duration-300 transform active:scale-95 shadow-[0_4px_25px_rgba(212,175,55,0.28)] flex items-center justify-center gap-2 group"
              >
                <span>Shop Collection</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#best-sellers"
                className="w-full sm:w-auto px-8 py-3.5 bg-transparent hover:bg-white/5 border border-[#D4AF37]/50 hover:border-[#D4AF37] text-[#F8F6F2] font-semibold text-xs uppercase tracking-[0.2em] rounded-sm transition-all duration-300 transform active:scale-95 flex items-center justify-center"
              >
                <span>Explore Best Sellers</span>
              </a>
            </div>

            {/* Trust markers (quantitative & attributable, no pills) */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-3 text-left">
              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 text-[#D4AF37]">
                  <Award className="w-4 h-4 shrink-0" />
                  <span className="font-mono text-sm sm:text-base font-bold text-[#F8F6F2] tabular-nums">
                    35%
                  </span>
                </div>
                <div className="text-[11px] text-[#F8F6F2]/60 uppercase tracking-wider">
                  Extrait Oil Concentration
                </div>
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 text-[#D4AF37]">
                  <Truck className="w-4 h-4 shrink-0" />
                  <span className="font-mono text-sm sm:text-base font-bold text-[#F8F6F2] tabular-nums">
                    24h
                  </span>
                </div>
                <div className="text-[11px] text-[#F8F6F2]/60 uppercase tracking-wider">
                  Gulf & Express Courier
                </div>
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 text-[#D4AF37]">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span className="font-mono text-sm sm:text-base font-bold text-[#F8F6F2] tabular-nums">
                    100%
                  </span>
                </div>
                <div className="text-[11px] text-[#F8F6F2]/60 uppercase tracking-wider">
                  Aged Pure Botanicals
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Perfume Bottle Showcase with Floating Animation & Reflection */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            {/* Ambient circular frame behind bottle */}
            <div className="relative w-full max-w-[360px] sm:max-w-[420px]">
              <div className="absolute -inset-2 bg-gradient-to-t from-[#D4AF37]/25 to-transparent rounded-2xl blur-xl opacity-60" />
              
              <div className="relative glass-card rounded-2xl p-4 sm:p-5 border border-[#D4AF37]/35 shadow-[0_20px_50px_rgba(0,0,0,0.85)] overflow-hidden group">
                {/* Floating animated perfume bottle container */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-[#0D0D0D]">
                  <img
                    key={currentHero.image}
                    src={currentHero.image}
                    alt={currentHero.name}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes('/images/')) {
                        target.src = '/images/utoorat_e_azami_signature_blue.jpeg';
                      }
                    }}
                    className="w-full h-full object-cover object-center transform transition-all duration-700 group-hover:scale-105"
                  />

                  {/* Corner Badge */}
                  <div className="absolute top-3 right-3 bg-[#0A0A0A]/90 backdrop-blur-md border border-[#D4AF37]/50 px-3 py-1 rounded text-[10px] uppercase font-mono tracking-widest text-[#D4AF37] flex items-center gap-1 shadow-lg z-10">
                    <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                    <span>{currentHero.badge}</span>
                  </div>
                </div>

                {/* Flacon Switcher Thumbnails */}
                <div className="pt-3 pb-2 flex items-center justify-center gap-2 border-b border-white/10">
                  {heroShowcaseItems.map((item, idx) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSelectedHeroIndex(idx)}
                      className={`relative w-12 h-14 rounded-md overflow-hidden border transition-all duration-200 ${
                        selectedHeroIndex === idx
                          ? 'border-[#D4AF37] ring-1 ring-[#D4AF37] scale-105'
                          : 'border-white/15 opacity-60 hover:opacity-100 hover:border-white/40'
                      }`}
                      title={item.name}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>

                {/* Card Bottom Meta */}
                <div className="pt-3 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-medium">
                      {currentHero.subtitle}
                    </div>
                    <h2 className="text-base sm:text-lg font-display font-semibold text-[#F8F6F2]">
                      {currentHero.name}
                    </h2>
                    <div className="text-xs text-[#F8F6F2]/60 font-arabic">
                      {currentHero.nameAr}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveQuickView(currentHero.perfumeRef)}
                    className="px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-[#0A0A0A] bg-[#D4AF37] hover:bg-[#F3E5AB] rounded-sm transition-colors active:scale-95 shadow"
                  >
                    Quick View
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
