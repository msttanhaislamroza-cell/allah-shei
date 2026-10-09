import React from 'react';
import { Award, Compass, Sparkles, Droplets, ShieldCheck } from 'lucide-react';
import { HERO_IMAGE } from '../data/perfumes';

export const AboutBrand: React.FC = () => {
  return (
    <section id="house-heritage" className="py-24 bg-[#0A0A0A] relative overflow-hidden border-t border-white/5">
      {/* Ambient background aura */}
      <div className="absolute -bottom-10 left-1/3 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Composition with Gold Accents */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#D4AF37]/20 to-transparent rounded-2xl blur-lg" />
              <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl bg-[#111]">
                <img
                  src={HERO_IMAGE}
                  alt="House of Utoorat-e-Azami Signature Flacon"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('/images/')) {
                      target.src = '/images/utoorat_e_azami_signature_blue.jpeg';
                    }
                  }}
                  className="w-full h-auto object-cover transform hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating Monogram Inset */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 glass-card p-4 sm:p-5 rounded-xl border border-[#D4AF37]/40 shadow-2xl max-w-[240px] text-center">
                <div className="font-arabic text-2xl text-gold-gradient font-bold">
                  عطورات اعظمی
                </div>
                <div className="text-[11px] uppercase tracking-widest text-[#F8F6F2]/70 font-mono mt-1">
                  Artisanal Heritage · Est. 2012
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Storytelling */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
              <Compass className="w-3.5 h-3.5" />
              <span>House Philosophy</span>
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#F8F6F2] leading-tight">
                Timeless Arabic Perfumery, <br />
                <span className="text-gold-gradient">Modern Sophistication</span>
              </h2>
              <div className="font-arabic text-2xl text-[#D4AF37] font-semibold">
                أصالة الشرق تلتقي بحرفية العصر
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#F8F6F2]/80 leading-relaxed font-light">
              Founded on the belief that a truly distinguished perfume does not merely announce arrival, it lingers as an unforgettable monument in memory. <strong className="text-white font-medium">عطورات اعظمی (Utoorat-e-Azami)</strong> unites centuries of Arab Arabian alchemical mastery with the meticulous precision of Grasse extraction.
            </p>

            {/* Three Pillars (Clean editorial formatting, no pills) */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-white/[0.02] border border-white/5 hover:border-[#D4AF37]/30 transition-colors">
                <div className="p-2 rounded bg-[#D4AF37]/10 text-[#D4AF37] shrink-0 mt-0.5">
                  <Droplets className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white font-display">
                    180-Day French Oak Maceration
                  </h3>
                  <p className="text-xs text-[#F8F6F2]/65 leading-relaxed mt-0.5">
                    Our oils rest in temperature-regulated dark cellars for half a year to develop unparalleled depth, harmonic sillage, and silky skin intimacy.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-white/[0.02] border border-white/5 hover:border-[#D4AF37]/30 transition-colors">
                <div className="p-2 rounded bg-[#D4AF37]/10 text-[#D4AF37] shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white font-display">
                    Ethically Harvested Royal Agarwood
                  </h3>
                  <p className="text-xs text-[#F8F6F2]/65 leading-relaxed mt-0.5">
                    Distilled from naturally resinous wild Aquilaria trees in Cambodia and Assam, guaranteeing authentic regal projection with zero synthetic surrogates.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-white/[0.02] border border-white/5 hover:border-[#D4AF37]/30 transition-colors">
                <div className="p-2 rounded bg-[#D4AF37]/10 text-[#D4AF37] shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white font-display">
                    Crystal Flacons & Bespoke Craft
                  </h3>
                  <p className="text-xs text-[#F8F6F2]/65 leading-relaxed mt-0.5">
                    Every flacon is precision-beveled with genuine diamond-cut facets or architectural fluted ribbing, weighted to exude authority in hand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
