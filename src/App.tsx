import React from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BestSellersCarousel } from './components/BestSellersCarousel';
import { FeaturedPerfumes } from './components/FeaturedPerfumes';
import { FragranceNotesSection } from './components/FragranceNotesSection';
import { AboutBrand } from './components/AboutBrand';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { QuickViewModal } from './components/QuickViewModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { OrderTrackerModal } from './components/OrderTrackerModal';
import { StickyBottomNav } from './components/StickyBottomNav';
import { LoadingScreen } from './components/LoadingScreen';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-[#0A0A0A] text-[#F8F6F2] relative selection:bg-[#D4AF37]/30 selection:text-[#F8F6F2]">
        {/* Luxury Intro Screen */}
        <LoadingScreen />

        {/* Global Top Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>
          {/* Full Screen Cinematic Hero Banner */}
          <Hero />

          {/* Best Sellers Interactive Horizontal Swiper */}
          <BestSellersCarousel />

          {/* Featured Perfumes & Filterable Collections */}
          <FeaturedPerfumes />

          {/* Fragrance Notes Atelier Pyramid */}
          <FragranceNotesSection />

          {/* About Brand Storytelling */}
          <AboutBrand />

          {/* Customer Reviews & Testimonials */}
          <ReviewsSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Modals and Drawers */}
        <QuickViewModal />
        <CartDrawer />
        <WishlistDrawer />
        <CheckoutModal />
        <OrderTrackerModal />

        {/* Mobile-Only Sticky Bottom Navigation */}
        <StickyBottomNav />
      </div>
    </CartProvider>
  );
}
