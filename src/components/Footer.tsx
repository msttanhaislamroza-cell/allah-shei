import React, { useState } from 'react';
import { Send, Check, ShieldCheck, Award, MapPin, Phone, Mail, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#070707] border-t border-[#D4AF37]/20 pt-16 pb-24 md:pb-12 text-[#F8F6F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand Lore */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <div>
              <div className="font-arabic text-3xl text-gold-gradient font-bold">
                عطورات اعظمی
              </div>
              <div className="font-display text-sm tracking-[0.2em] text-[#F8F6F2]/80 uppercase mt-0.5">
                Utoorat-e-Azami
              </div>
            </div>
            <p className="text-xs text-[#F8F6F2]/65 leading-relaxed font-light max-w-sm">
              An independent Arabic haute parfumerie dedicated to slow-macerated Extraits, pure royal agarwood, and architectural crystal presentation.
            </p>
            <div className="text-xs text-[#D4AF37] font-arabic pt-1">
              دار العطور الملكية · دبي · الدوحة · لندن
            </div>
          </div>

          {/* Column 2: House Collections */}
          <div className="lg:col-span-2 space-y-3 text-left">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
              Collections
            </h4>
            <ul className="space-y-2 text-xs text-[#F8F6F2]/70">
              <li>
                <a href="#collection" className="hover:text-[#D4AF37] transition-colors">
                  Signature Blue Extrait
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-[#D4AF37] transition-colors">
                  Dkhoon Desert Oud
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-[#D4AF37] transition-colors">
                  Zumar Cognac Flacon
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-[#D4AF37] transition-colors">
                  Afnan 9PM Night Out
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-[#D4AF37] transition-colors">
                  Lumière Pure Parfum
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Flagships & Concierge */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
              Flagships & Salons
            </h4>
            <div className="space-y-2 text-xs text-[#F8F6F2]/70">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>The Dubai Mall, Fashion Avenue Ground Floor, UAE</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Centria Mall, Olaya Street, Riyadh, KSA</span>
              </div>
              <div className="flex items-center gap-2 pt-1 text-[#D4AF37]">
                <Phone className="w-3.5 h-3.5 shrink-0" />
                <span className="font-mono">+971 4 800 29264</span>
              </div>
              <div className="flex items-center gap-2 text-[#F8F6F2]/60">
                <Mail className="w-3.5 h-3.5 shrink-0" />
                <span>concierge@azami-perfumes.com</span>
              </div>
            </div>
          </div>

          {/* Column 4: Private Privilege Club Newsletter */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
              Privilege Guild
            </h4>
            <p className="text-xs text-[#F8F6F2]/65 leading-relaxed">
              Subscribe for private vault access, limited harvest allocations, and a complimentary 15% privilege code.
            </p>

            {subscribed ? (
              <div className="p-3 bg-emerald-950/40 border border-emerald-700/40 rounded-lg text-emerald-300 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Welcome. Use privilege code <strong>AZAMI15</strong> for 15% off.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full bg-[#141414] border border-white/15 rounded px-3 py-2 text-xs text-white placeholder-white/35 focus:outline-none focus:border-[#D4AF37]"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-3 bg-[#D4AF37] hover:bg-[#F3E5AB] text-[#0A0A0A] font-bold text-xs rounded transition-colors"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="text-[10px] text-white/40">
                  Strictly confidential. No marketing frequency abuse.
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Payment Security */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F8F6F2]/50 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} عطورات اعظمی (Utoorat-e-Azami Haute Parfumerie). All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="hover:text-white transition-colors cursor-pointer">Bespoke Inquiries</span>
            <span>·</span>
            <span className="hover:text-white transition-colors cursor-pointer">Private Cellar Policy</span>
            <span>·</span>
            <span className="hover:text-white transition-colors cursor-pointer">Global White Glove Courier</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
