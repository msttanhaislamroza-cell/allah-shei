import React, { useState } from 'react';
import { FRAGRANCE_NOTES_LIBRARY, PERFUMES } from '../data/perfumes';
import { Sparkles, Compass, Feather, Flame, Droplets } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const FragranceNotesSection: React.FC = () => {
  const { setActiveQuickView } = useCart();
  const [activeTab, setActiveTab] = useState<number>(0);
  const currentCategory = FRAGRANCE_NOTES_LIBRARY[activeTab];

  return (
    <section id="olfactory-atelier" className="py-24 bg-[#0A0A0A] relative overflow-hidden border-t border-white/5">
      {/* Background ambient accents */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
            <Compass className="w-3.5 h-3.5" />
            <span>The Olfactory Atelier</span>
            <Compass className="w-3.5 h-3.5" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#F8F6F2]">
            The Architecture of Notes
          </h2>
          <div className="font-arabic text-2xl text-[#D4AF37] font-semibold">
            هندسة العطور والهرم العطري
          </div>
          <p className="text-sm text-[#F8F6F2]/70 font-light leading-relaxed">
            Every creation at Utoorat-e-Azami is orchestrated across three temporal dimensions. Each accord is carefully balanced to reveal hidden depths from the moment of mist to the morning after.
          </p>
        </div>

        {/* 3 Step Interactive Tab Bar */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 max-w-2xl mx-auto mb-12">
          {FRAGRANCE_NOTES_LIBRARY.map((stage, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={stage.category}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`flex-1 p-4 rounded-xl text-left border transition-all duration-300 active:scale-95 ${
                  isActive
                    ? 'bg-[#181818] border-[#D4AF37] shadow-[0_4px_25px_rgba(212,175,55,0.2)]'
                    : 'bg-[#101010] border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] uppercase font-mono tracking-widest ${isActive ? 'text-[#D4AF37]' : 'text-white/40'}`}>
                    0{idx + 1} · {stage.timing}
                  </span>
                  {idx === 0 && <Feather className={`w-3.5 h-3.5 ${isActive ? 'text-[#D4AF37]' : 'text-white/30'}`} />}
                  {idx === 1 && <Droplets className={`w-3.5 h-3.5 ${isActive ? 'text-[#D4AF37]' : 'text-white/30'}`} />}
                  {idx === 2 && <Flame className={`w-3.5 h-3.5 ${isActive ? 'text-[#D4AF37]' : 'text-white/30'}`} />}
                </div>
                <div className="font-display font-semibold text-base text-white">
                  {stage.category}
                </div>
                <div className="font-arabic text-xs text-[#D4AF37]/80">
                  {stage.titleAr}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Showcase */}
        <div className="glass-card rounded-2xl p-6 sm:p-10 border border-[#D4AF37]/25 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-block text-[10px] font-mono uppercase tracking-widest text-[#0A0A0A] bg-gradient-to-r from-[#F3E5AB] to-[#D4AF37] px-3 py-1 rounded font-semibold">
                {currentCategory.timing}
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                {currentCategory.title}
              </h3>
              <p className="text-sm text-[#F8F6F2]/75 leading-relaxed font-light">
                {currentCategory.description}
              </p>
              
              <div className="pt-2">
                <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-medium mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" />
                  <span>Featured in Azami Masterpieces:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {PERFUMES.map((perf) => (
                    <button
                      key={perf.id}
                      type="button"
                      onClick={() => setActiveQuickView(perf)}
                      className="px-3 py-1.5 text-xs bg-white/5 hover:bg-[#D4AF37]/20 border border-white/10 hover:border-[#D4AF37]/40 rounded-sm text-white/90 transition-colors"
                    >
                      {perf.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Note Cards Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentCategory.notes.map((note, nIdx) => (
                <div
                  key={nIdx}
                  className="p-4 rounded-xl bg-[#0D0D0D]/90 border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-300 space-y-2 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display font-semibold text-white group-hover:text-[#D4AF37] transition-colors text-sm">
                      {note.name}
                    </span>
                    <span className="font-arabic text-xs text-[#D4AF37]">
                      {note.nameAr}
                    </span>
                  </div>
                  <p className="text-xs text-[#F8F6F2]/65 leading-normal">
                    {note.aroma}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
