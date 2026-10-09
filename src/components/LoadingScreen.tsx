import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

export const LoadingScreen: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFading(true);
    }, 1100);

    const timer2 = setTimeout(() => {
      setVisible(false);
    }, 1600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#0A0A0A] flex flex-col items-center justify-center transition-opacity duration-500 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative text-center space-y-4">
        {/* Glowing aura */}
        <div className="absolute -inset-10 bg-[#D4AF37]/15 rounded-full blur-2xl animate-pulse" />

        {/* Animated Arabic Calligraphy Logo */}
        <div className="relative font-arabic text-4xl sm:text-5xl lg:text-6xl font-bold text-gold-gradient tracking-wider animate-float">
          عطورات اعظمی
        </div>

        <div className="relative font-display text-xs sm:text-sm uppercase tracking-[0.35em] text-[#F8F6F2]/80">
          Utoorat-e-Azami
        </div>

        <div className="relative flex items-center justify-center gap-2 text-[10px] text-[#D4AF37] uppercase tracking-[0.25em] font-mono pt-2">
          <Sparkles className="w-3 h-3 animate-spin" />
          <span>Haute Parfumerie</span>
          <Sparkles className="w-3 h-3 animate-spin" />
        </div>
      </div>
    </div>
  );
};
