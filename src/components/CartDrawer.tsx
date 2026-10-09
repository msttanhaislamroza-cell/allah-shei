import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Tag, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartSubtotal,
    cartTotal,
    discountPercent,
    couponCode,
    applyCoupon,
    formatPrice,
    setIsCheckoutOpen
  } = useCart();

  const [inputCoupon, setInputCoupon] = useState('');
  const [couponFeedback, setCouponFeedback] = useState<{ success: boolean; message: string } | null>(null);

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCoupon) return;
    const res = applyCoupon(inputCoupon);
    setCouponFeedback(res);
  };

  const handleProceedCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  // WhatsApp bulk order format
  const whatsappCartMessage = encodeURIComponent(
    `Salam Utoorat-e-Azami Concierge. I would like to place an order from my bag:\n` +
      cart
        .map(
          (item, i) =>
            `${i + 1}. ${item.perfume.name} (${item.selectedVolume}) x${item.quantity} - $${
              item.perfume.price * item.quantity
            }${item.engravingText ? ` [Engraving: "${item.engravingText}"]` : ''}`
        )
        .join('\n') +
      `\nTotal: $${cartTotal}${couponCode ? ` (VIP code: ${couponCode})` : ''}\nPlease confirm my delivery details.`
  );
  const whatsappUrl = `https://wa.me/971500000000?text=${whatsappCartMessage}`;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#121212] border-l border-[#D4AF37]/25 shadow-2xl flex flex-col justify-between">
          {/* Drawer Header */}
          <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#161616]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#D4AF37]" />
              <h2 className="text-base font-display font-bold text-white uppercase tracking-wider">
                Shopping Bag ({cart.length})
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 text-white/70 hover:text-white rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="p-5 overflow-y-auto flex-grow space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <ShoppingBag className="w-12 h-12 text-[#D4AF37]/30 mx-auto" />
                <p className="text-sm text-[#F8F6F2]/60">Your luxury fragrance bag is currently empty.</p>
                <button
                  type="button"
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 bg-gold-gradient text-[#0A0A0A] font-bold text-xs uppercase tracking-widest rounded-sm"
                >
                  Explore Masterpieces
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={`${item.perfume.id}-${item.selectedVolume}`}
                    className="p-3.5 rounded-lg bg-[#181818] border border-white/5 flex gap-3 relative group"
                  >
                    {/* Item Image */}
                    <img
                      src={item.perfume.image}
                      alt={item.perfume.name}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.src.includes('/images/')) {
                          target.src = `/images/${item.perfume.id.replace('-', '_')}.jpg`;
                        }
                      }}
                      className="w-16 h-20 object-cover rounded bg-black shrink-0 border border-[#D4AF37]/20"
                    />

                    {/* Item Info */}
                    <div className="flex-grow space-y-1 text-left">
                      <div className="flex justify-between items-start pr-6">
                        <h4 className="font-display font-semibold text-white text-xs sm:text-sm">
                          {item.perfume.name}
                        </h4>
                      </div>
                      <div className="text-[11px] text-[#D4AF37] font-arabic">
                        {item.perfume.nameAr}
                      </div>
                      <div className="text-[11px] text-[#F8F6F2]/50">
                        {item.selectedVolume} · {item.perfume.concentration}
                      </div>

                      {item.engravingText && (
                        <div className="text-[10px] text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-0.5 rounded border border-[#D4AF37]/20 w-fit">
                          Engraved: "{item.engravingText}"
                        </div>
                      )}

                      {/* Quantity Stepper & Price */}
                      <div className="pt-2 flex items-center justify-between">
                        <div className="flex items-center border border-white/15 rounded bg-black/40 px-2 py-0.5 gap-2.5">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.perfume.id, item.selectedVolume, -1)}
                            className="text-xs text-white/60 hover:text-white px-1"
                          >
                            -
                          </button>
                          <span className="font-mono text-xs font-semibold text-white">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.perfume.id, item.selectedVolume, 1)}
                            className="text-xs text-white/60 hover:text-white px-1"
                          >
                            +
                          </button>
                        </div>

                        <div className="font-mono font-bold text-white text-sm tabular-nums">
                          {formatPrice(item.perfume.price * item.quantity)}
                        </div>
                      </div>
                    </div>

                    {/* Remove button */}
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.perfume.id, item.selectedVolume)}
                      className="absolute top-3 right-3 text-white/40 hover:text-rose-400 p-1 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Drawer Footer / Checkout Summary */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-white/10 bg-[#161616] space-y-4">
              {/* VIP Coupon Form */}
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <div className="relative flex-grow">
                  <Tag className="w-3.5 h-3.5 absolute left-3 top-3 text-[#D4AF37]" />
                  <input
                    type="text"
                    placeholder="VIP Code (e.g., AZAMI15)"
                    value={inputCoupon}
                    onChange={(e) => setInputCoupon(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-[#0E0E0E] border border-white/15 rounded text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <button
                  type="submit"
                  className="px-3.5 py-2 bg-white/10 hover:bg-[#D4AF37] hover:text-[#0A0A0A] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors shrink-0"
                >
                  Apply
                </button>
              </form>

              {couponFeedback && (
                <div
                  className={`text-[11px] ${
                    couponFeedback.success ? 'text-emerald-400' : 'text-rose-400'
                  }`}
                >
                  {couponFeedback.message}
                </div>
              )}

              {/* Subtotal & Totals */}
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-[#F8F6F2]/70">
                  <span>Subtotal</span>
                  <span className="font-mono tabular-nums">{formatPrice(cartSubtotal)}</span>
                </div>
                {discountPercent > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>VIP Privilege ({discountPercent}%)</span>
                    <span className="font-mono tabular-nums">
                      -{formatPrice((cartSubtotal * discountPercent) / 100)}
                    </span>
                  </div>
                )}
                <div className="flex justify-between text-[#F8F6F2]/70">
                  <span>Insured Courier Delivery</span>
                  <span className="text-emerald-400 font-medium">Complimentary</span>
                </div>
                <div className="pt-2 border-t border-white/10 flex justify-between text-sm font-semibold text-white">
                  <span>Grand Total</span>
                  <span className="font-mono text-base text-[#D4AF37] tabular-nums">
                    {formatPrice(cartTotal)}
                  </span>
                </div>
              </div>

              {/* Proceed to Checkout Button */}
              <button
                type="button"
                onClick={handleProceedCheckout}
                className="w-full py-3.5 bg-gold-gradient text-[#0A0A0A] font-bold text-xs uppercase tracking-[0.2em] rounded shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:opacity-95 transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* WhatsApp Quick Order button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-600/40 rounded text-emerald-300 text-xs font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Instant Checkout via WhatsApp</span>
              </a>

              <div className="flex items-center justify-center gap-2 text-[10px] text-[#F8F6F2]/50">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Encrypted 256-Bit SSL · Official Utoorat-e-Azami House</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
