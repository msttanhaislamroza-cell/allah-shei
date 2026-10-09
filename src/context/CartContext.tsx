import React, { createContext, useContext, useState, useEffect } from 'react';
import { Perfume, CartItem, CurrencyCode } from '../types';
import { CURRENCIES, PERFUMES } from '../data/perfumes';

interface CartContextType {
  cart: CartItem[];
  wishlist: string[]; // perfume IDs
  currency: CurrencyCode;
  isCartOpen: boolean;
  isWishlistOpen: boolean;
  isCheckoutOpen: boolean;
  isTrackerOpen: boolean;
  activeQuickView: Perfume | null;
  couponCode: string;
  discountPercent: number;
  recentOrder: { orderId: string; total: number; items: CartItem[] } | null;
  addToCart: (perfume: Perfume, volume?: string, quantity?: number, engraving?: string) => void;
  removeFromCart: (perfumeId: string, volume: string) => void;
  updateQuantity: (perfumeId: string, volume: string, delta: number) => void;
  clearCart: () => void;
  toggleWishlist: (perfumeId: string) => void;
  isInWishlist: (perfumeId: string) => boolean;
  setCurrency: (currency: CurrencyCode) => void;
  setIsCartOpen: (open: boolean) => void;
  setIsWishlistOpen: (open: boolean) => void;
  setIsCheckoutOpen: (open: boolean) => void;
  setIsTrackerOpen: (open: boolean) => void;
  setActiveQuickView: (perfume: Perfume | null) => void;
  applyCoupon: (code: string) => { success: boolean; message: string };
  formatPrice: (priceInUSD: number) => string;
  cartSubtotal: number;
  cartTotal: number;
  cartCount: number;
  setRecentOrder: (order: { orderId: string; total: number; items: CartItem[] } | null) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('azami_cart');
      return saved ? JSON.parse(saved) : [
        // Seed initial sample luxury cart item
        { perfume: PERFUMES[2], quantity: 1, selectedVolume: PERFUMES[2].volume }
      ];
    } catch {
      return [{ perfume: PERFUMES[2], quantity: 1, selectedVolume: PERFUMES[2].volume }];
    }
  });

  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('azami_wishlist');
      return saved ? JSON.parse(saved) : ['signature-blue', 'zumar'];
    } catch {
      return ['signature-blue', 'zumar'];
    }
  });

  const [currency, setCurrencyState] = useState<CurrencyCode>('USD');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isTrackerOpen, setIsTrackerOpen] = useState(false);
  const [activeQuickView, setActiveQuickView] = useState<Perfume | null>(null);
  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [recentOrder, setRecentOrder] = useState<{ orderId: string; total: number; items: CartItem[] } | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('azami_cart', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('azami_wishlist', JSON.stringify(wishlist));
    } catch {
      // ignore
    }
  }, [wishlist]);

  const addToCart = (perfume: Perfume, volume?: string, quantity: number = 1, engraving?: string) => {
    const vol = volume || perfume.volume;
    setCart((prev) => {
      const existingIdx = prev.findIndex(
        (item) => item.perfume.id === perfume.id && item.selectedVolume === vol
      );
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += quantity;
        if (engraving) updated[existingIdx].engravingText = engraving;
        return updated;
      }
      return [...prev, { perfume, volume: vol, selectedVolume: vol, quantity, engravingText: engraving }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (perfumeId: string, volume: string) => {
    setCart((prev) => prev.filter((item) => !(item.perfume.id === perfumeId && item.selectedVolume === volume)));
  };

  const updateQuantity = (perfumeId: string, volume: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.perfume.id === perfumeId && item.selectedVolume === volume) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (perfumeId: string) => {
    setWishlist((prev) =>
      prev.includes(perfumeId) ? prev.filter((id) => id !== perfumeId) : [...prev, perfumeId]
    );
  };

  const isInWishlist = (perfumeId: string) => wishlist.includes(perfumeId);

  const setCurrency = (c: CurrencyCode) => {
    setCurrencyState(c);
  };

  const applyCoupon = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'AZAMI15') {
      setCouponCode(clean);
      setDiscountPercent(15);
      return { success: true, message: 'VIP Code Applied: 15% Royal Privilege Discount' };
    }
    if (clean === 'ROYAL10') {
      setCouponCode(clean);
      setDiscountPercent(10);
      return { success: true, message: 'VIP Code Applied: 10% First Order Discount' };
    }
    return { success: false, message: 'Invalid or expired luxury privilege code. Try AZAMI15' };
  };

  const formatPrice = (priceInUSD: number): string => {
    const cfg = CURRENCIES[currency];
    const converted = Math.round(priceInUSD * cfg.rate);
    return `${cfg.symbol}${converted.toLocaleString()}`;
  };

  const cartSubtotal = cart.reduce((sum, item) => sum + item.perfume.price * item.quantity, 0);
  const discountAmount = (cartSubtotal * discountPercent) / 100;
  const cartTotal = Math.max(0, cartSubtotal - discountAmount);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        currency,
        isCartOpen,
        isWishlistOpen,
        isCheckoutOpen,
        isTrackerOpen,
        activeQuickView,
        couponCode,
        discountPercent,
        recentOrder,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleWishlist,
        isInWishlist,
        setCurrency,
        setIsCartOpen,
        setIsWishlistOpen,
        setIsCheckoutOpen,
        setIsTrackerOpen,
        setActiveQuickView,
        applyCoupon,
        formatPrice,
        cartSubtotal,
        cartTotal,
        cartCount,
        setRecentOrder
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
