import React, { useState } from 'react';
import { X, CheckCircle, CreditCard, ShieldCheck, Truck, Smartphone, Lock, MessageCircle, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CheckoutModal: React.FC = () => {
  const {
    cart,
    cartSubtotal,
    cartTotal,
    discountPercent,
    couponCode,
    isCheckoutOpen,
    setIsCheckoutOpen,
    clearCart,
    formatPrice,
    setRecentOrder,
    setIsTrackerOpen
  } = useCart();

  const [paymentMethod, setPaymentMethod] = useState<'wallet' | 'card' | 'cod'>('wallet');
  const [formData, setFormData] = useState({
    name: 'Tariq Al-Sabah',
    email: 'client@azami-luxury.com',
    phone: '+971 50 123 4567',
    address: 'Villa 14, Al-Bateen Royal Enclave',
    city: 'Dubai',
    country: 'United Arab Emirates',
    deliveryNotes: 'Please ring private intercom upon arrival'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState<{
    orderId: string;
    itemsCount: number;
    total: number;
  } | null>(null);

  if (!isCheckoutOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const generatedOrderId = `AZM-${Math.floor(1000 + Math.random() * 9000)}`;
      const completedOrder = {
        orderId: generatedOrderId,
        total: cartTotal,
        items: [...cart]
      };
      setRecentOrder(completedOrder);
      setOrderConfirmed({
        orderId: generatedOrderId,
        itemsCount: cart.reduce((acc, i) => acc + i.quantity, 0),
        total: cartTotal
      });
      clearCart();
      setIsSubmitting(false);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#121212] border border-[#D4AF37]/35 rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.95)] overflow-hidden">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between bg-[#161616]">
          <div className="flex items-center gap-3">
            <Lock className="w-5 h-5 text-[#D4AF37]" />
            <div>
              <h2 className="text-base sm:text-lg font-display font-bold text-white uppercase tracking-wider">
                {orderConfirmed ? 'Order Confirmed' : 'Privilege One-Page Checkout'}
              </h2>
              <div className="text-[11px] text-[#D4AF37] font-arabic">
                عطورات اعظمی · الدفع الآمن والشحن الفاخر
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              setIsCheckoutOpen(false);
              setOrderConfirmed(null);
            }}
            className="p-1.5 text-white/70 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {orderConfirmed ? (
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-16 h-16 bg-[#D4AF37]/20 border border-[#D4AF37] rounded-full flex items-center justify-center mx-auto text-[#D4AF37] animate-bounce">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-mono">
                Order Protocol Complete
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                Thank You for Choosing Utoorat-e-Azami
              </h3>
              <p className="font-arabic text-xl text-[#D4AF37]">
                شكراً لاختياركم عطورات اعظمی
              </p>
            </div>

            <div className="p-4 bg-[#181818] border border-[#D4AF37]/30 rounded-xl max-w-md mx-auto space-y-2 text-left text-xs">
              <div className="flex justify-between">
                <span className="text-[#F8F6F2]/60">Order Reference:</span>
                <span className="font-mono font-bold text-[#D4AF37] text-sm">
                  #{orderConfirmed.orderId}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#F8F6F2]/60">Delivery Recipient:</span>
                <span className="font-medium text-white">{formData.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#F8F6F2]/60">Destination:</span>
                <span className="font-medium text-white">{formData.city}, {formData.country}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#F8F6F2]/60">Total Paid:</span>
                <span className="font-mono font-bold text-white">{formatPrice(orderConfirmed.total)}</span>
              </div>
            </div>

            <p className="text-xs text-[#F8F6F2]/70 max-w-md mx-auto leading-relaxed">
              Your bespoke flacons are undergoing final inspection in our climate vault. A dispatched tracker SMS has been routed to <strong>{formData.phone}</strong>.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  setIsCheckoutOpen(false);
                  setOrderConfirmed(null);
                  setIsTrackerOpen(true);
                }}
                className="px-6 py-3 bg-gold-gradient text-[#0A0A0A] font-bold text-xs uppercase tracking-widest rounded-sm shadow-md"
              >
                Track Royal Courier Live
              </button>

              <a
                href={`https://wa.me/971500000000?text=${encodeURIComponent(
                  `Salam Utoorat-e-Azami. I just placed order #${orderConfirmed.orderId}. Please provide white glove delivery updates.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-emerald-950/50 border border-emerald-600/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider rounded-sm flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Notify via WhatsApp</span>
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handlePlaceOrder} className="p-6 sm:p-8 space-y-6 text-left">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Left Column: Shipping & Client Details */}
              <div className="md:col-span-7 space-y-4">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
                  <Truck className="w-4 h-4" />
                  <span>1. White Glove Delivery Details</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-[#F8F6F2]/60 block mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-[#181818] border border-white/15 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-[#F8F6F2]/60 block mb-1">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="text"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-[#181818] border border-white/15 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#F8F6F2]/60 block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-[#181818] border border-white/15 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#F8F6F2]/60 block mb-1">
                    Street Address & Residence Number
                  </label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full bg-[#181818] border border-white/15 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-[#F8F6F2]/60 block mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full bg-[#181818] border border-white/15 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-[#F8F6F2]/60 block mb-1">
                      Country
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full bg-[#181818] border border-white/15 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option value="United Arab Emirates">United Arab Emirates</option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Oman">Oman</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States">United States</option>
                    </select>
                  </div>
                </div>

                {/* Payment Method Selector */}
                <div className="pt-2 space-y-2">
                  <div className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
                    2. Select Payment Method
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {/* Mobile Wallet */}
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('wallet')}
                      className={`p-3 rounded-lg border text-left flex flex-col justify-between transition-colors ${
                        paymentMethod === 'wallet'
                          ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-white'
                          : 'border-white/10 bg-[#161616] text-[#F8F6F2]/70 hover:border-white/20'
                      }`}
                    >
                      <Smartphone className="w-4 h-4 text-[#D4AF37]" />
                      <div className="text-[11px] font-semibold mt-2">Apple / Google Pay</div>
                      <div className="text-[9px] text-white/50">Instant 1-Tap</div>
                    </button>

                    {/* Credit Card / Mada */}
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`p-3 rounded-lg border text-left flex flex-col justify-between transition-colors ${
                        paymentMethod === 'card'
                          ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-white'
                          : 'border-white/10 bg-[#161616] text-[#F8F6F2]/70 hover:border-white/20'
                      }`}
                    >
                      <CreditCard className="w-4 h-4 text-[#D4AF37]" />
                      <div className="text-[11px] font-semibold mt-2">Card / Mada</div>
                      <div className="text-[9px] text-white/50">Visa, MC, Amex</div>
                    </button>

                    {/* Cash on Delivery */}
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('cod')}
                      className={`p-3 rounded-lg border text-left flex flex-col justify-between transition-colors ${
                        paymentMethod === 'cod'
                          ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-white'
                          : 'border-white/10 bg-[#161616] text-[#F8F6F2]/70 hover:border-white/20'
                      }`}
                    >
                      <Truck className="w-4 h-4 text-[#D4AF37]" />
                      <div className="text-[11px] font-semibold mt-2">Cash on Delivery</div>
                      <div className="text-[9px] text-white/50">Gulf Flagships</div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Order Summary */}
              <div className="md:col-span-5 bg-[#161616] p-5 rounded-xl border border-white/10 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold border-b border-white/10 pb-2">
                    Order Summary ({cart.length} flacons)
                  </div>

                  <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                    {cart.map((item) => (
                      <div key={`${item.perfume.id}-${item.selectedVolume}`} className="flex justify-between text-xs">
                        <div className="pr-2">
                          <span className="text-white font-medium">{item.perfume.name}</span>
                          <span className="text-[#F8F6F2]/50 block text-[10px]">
                            {item.selectedVolume} x{item.quantity}
                          </span>
                        </div>
                        <span className="font-mono text-white tabular-nums shrink-0">
                          {formatPrice(item.perfume.price * item.quantity)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-white/10 space-y-1.5 text-xs">
                    <div className="flex justify-between text-[#F8F6F2]/70">
                      <span>Subtotal</span>
                      <span className="font-mono tabular-nums">{formatPrice(cartSubtotal)}</span>
                    </div>

                    {discountPercent > 0 && (
                      <div className="flex justify-between text-emerald-400">
                        <span>VIP Discount ({discountPercent}%)</span>
                        <span className="font-mono tabular-nums">
                          -{formatPrice((cartSubtotal * discountPercent) / 100)}
                        </span>
                      </div>
                    )}

                    <div className="flex justify-between text-[#F8F6F2]/70">
                      <span>Courier Insurance & Transit</span>
                      <span className="text-emerald-400 font-medium">Free</span>
                    </div>

                    <div className="pt-2 border-t border-white/10 flex justify-between text-base font-bold text-white">
                      <span>Total Amount</span>
                      <span className="font-mono text-lg text-[#D4AF37] tabular-nums">
                        {formatPrice(cartTotal)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-gold-gradient text-[#0A0A0A] font-bold text-xs uppercase tracking-[0.2em] rounded shadow-lg hover:opacity-95 transition-all active:scale-95 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Securing Transaction...' : `Complete Order · ${formatPrice(cartTotal)}`}
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-[10px] text-white/50">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Complimentary Returns & Authenticity Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
