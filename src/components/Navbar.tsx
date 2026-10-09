import React, { useState, useEffect } from 'react';
import { ShoppingBag, Heart, Globe, Menu, X, Compass } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CURRENCIES } from '../data/perfumes';
import { CurrencyCode } from '../types';

export const Navbar: React.FC = () => {
  const { cartCount, wishlist, setIsCartOpen, setIsWishlistOpen, setIsTrackerOpen, currency, setCurrency } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#D4AF37]/15 py-3.5 shadow-2xl'
            : 'bg-gradient-to-b from-[#0A0A0A]/95 via-[#0A0A0A]/70 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark in display face */}
          <a
            href="#"
            className="flex items-center gap-2 group transition-transform duration-300 active:scale-95"
            aria-label="Utoorat-e-Azami Luxury Perfumes"
          >
            <span className="font-arabic text-2xl sm:text-3xl text-gold-gradient font-bold tracking-wide">
              عطورات اعظمی
            </span>
            <span className="hidden sm:inline-block text-[#D4AF37]/40 text-xs">|</span>
            <span className="font-display hidden sm:inline-block text-xs uppercase tracking-[0.25em] text-[#F8F6F2]/90 group-hover:text-[#D4AF37] transition-colors">
              Utoorat-e-Azami
            </span>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-xs uppercase tracking-[0.18em] font-medium text-[#F8F6F2]/80">
            <a
              href="#collection"
              className="hover:text-[#D4AF37] transition-colors hover:underline underline-offset-8 decoration-[#D4AF37]/50 whitespace-nowrap"
            >
              Collection
            </a>
            <a
              href="#best-sellers"
              className="hover:text-[#D4AF37] transition-colors hover:underline underline-offset-8 decoration-[#D4AF37]/50 whitespace-nowrap"
            >
              Best Sellers
            </a>
            <a
              href="#olfactory-atelier"
              className="hover:text-[#D4AF37] transition-colors hover:underline underline-offset-8 decoration-[#D4AF37]/50 whitespace-nowrap"
            >
              Notes Atelier
            </a>
            <a
              href="#house-heritage"
              className="hover:text-[#D4AF37] transition-colors hover:underline underline-offset-8 decoration-[#D4AF37]/50 whitespace-nowrap"
            >
              House Heritage
            </a>
            <a
              href="#reviews"
              className="hover:text-[#D4AF37] transition-colors hover:underline underline-offset-8 decoration-[#D4AF37]/50 whitespace-nowrap"
            >
              Client Reviews
            </a>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Currency selector */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                className="flex items-center gap-1 px-2.5 py-1.5 text-xs text-[#F8F6F2]/75 hover:text-[#D4AF37] border border-white/10 hover:border-[#D4AF37]/40 rounded-sm transition-colors whitespace-nowrap"
                aria-label="Select currency"
              >
                <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="font-mono text-xs">{currency}</span>
              </button>
              {currencyDropdownOpen && (
                <div className="absolute right-0 mt-2 w-28 bg-[#141414] border border-[#D4AF37]/25 rounded shadow-xl py-1 z-50">
                  {(Object.keys(CURRENCIES) as CurrencyCode[]).map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => {
                        setCurrency(c);
                        setCurrencyDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs flex justify-between items-center transition-colors ${
                        currency === c ? 'text-[#D4AF37] bg-white/5 font-semibold' : 'text-[#F8F6F2]/80 hover:bg-white/5'
                      }`}
                    >
                      <span>{c}</span>
                      <span className="text-[#D4AF37]/70 font-mono">{CURRENCIES[c].symbol}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Track Order link button */}
            <button
              type="button"
              onClick={() => setIsTrackerOpen(true)}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#F8F6F2]/80 hover:text-[#D4AF37] border border-white/10 hover:border-[#D4AF37]/30 rounded-sm transition-colors whitespace-nowrap"
              title="Track Royal Courier Order"
            >
              <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="hidden xl:inline">Track Order</span>
            </button>

            {/* Wishlist button */}
            <button
              type="button"
              onClick={() => setIsWishlistOpen(true)}
              className="relative p-2 text-[#F8F6F2]/80 hover:text-[#D4AF37] transition-colors"
              aria-label={`Wishlist with ${wishlist.length} items`}
            >
              <Heart className="w-5 h-5 transition-transform hover:scale-110 active:scale-95" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#D4AF37] text-[#0A0A0A] font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-mono">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Cart button */}
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2 px-3 py-2 bg-[#1A1A1A] hover:bg-[#252525] border border-[#D4AF37]/30 hover:border-[#D4AF37] text-[#F8F6F2] text-xs uppercase tracking-wider rounded-sm transition-all duration-200 active:scale-95 shadow-sm"
              aria-label={`Shopping bag with ${cartCount} items`}
            >
              <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
              <span className="hidden sm:inline font-medium">Bag</span>
              <span className="bg-[#D4AF37] text-[#0A0A0A] font-bold text-[11px] px-1.5 py-0.2 rounded font-mono">
                {cartCount}
              </span>
            </button>

            {/* Mobile menu hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#F8F6F2]/80 hover:text-[#D4AF37] transition-colors"
              aria-label="Open navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-[#0A0A0A]/95 backdrop-blur-xl flex flex-col justify-between p-6 pt-24 animate-in fade-in duration-200">
          <div className="flex flex-col space-y-6 text-center">
            <div className="font-arabic text-3xl text-gold-gradient font-bold mb-2">
              عطورات اعظمی
            </div>
            <a
              href="#collection"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg uppercase tracking-[0.2em] text-[#F8F6F2] hover:text-[#D4AF37] transition-colors"
            >
              Collection
            </a>
            <a
              href="#best-sellers"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg uppercase tracking-[0.2em] text-[#F8F6F2] hover:text-[#D4AF37] transition-colors"
            >
              Best Sellers
            </a>
            <a
              href="#olfactory-atelier"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg uppercase tracking-[0.2em] text-[#F8F6F2] hover:text-[#D4AF37] transition-colors"
            >
              Notes Atelier
            </a>
            <a
              href="#house-heritage"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg uppercase tracking-[0.2em] text-[#F8F6F2] hover:text-[#D4AF37] transition-colors"
            >
              House Heritage
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg uppercase tracking-[0.2em] text-[#F8F6F2] hover:text-[#D4AF37] transition-colors"
            >
              Client Reviews
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setIsTrackerOpen(true);
              }}
              className="text-sm uppercase tracking-widest text-[#D4AF37] flex items-center justify-center gap-2 py-2 border border-[#D4AF37]/30 rounded"
            >
              <Compass className="w-4 h-4" />
              Track Royal Courier Order
            </button>
          </div>

          <div className="border-t border-white/10 pt-6 text-center text-xs text-[#F8F6F2]/50 space-y-2">
            <p>Direct Concierge: +971 4 800 29264</p>
            <p className="font-arabic">عطورات اعظمی · دبي · الدوحة · الرياض · لندن</p>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 px-6 py-2 text-xs uppercase tracking-widest bg-white/10 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
