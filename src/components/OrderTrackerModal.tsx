import React, { useState } from 'react';
import { X, Search, CheckCircle, Package, Truck, Compass, Clock, MapPin } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const OrderTrackerModal: React.FC = () => {
  const { isTrackerOpen, setIsTrackerOpen, recentOrder } = useCart();
  const [searchQuery, setSearchQuery] = useState(recentOrder ? recentOrder.orderId : 'AZM-8821');
  const [searchedOrder, setSearchedOrder] = useState<string | null>(recentOrder ? recentOrder.orderId : 'AZM-8821');

  if (!isTrackerOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchedOrder(searchQuery.trim().toUpperCase());
    }
  };

  const steps = [
    { title: 'Order Verified & Maceration Cellar Cleared', time: 'Yesterday, 14:30', done: true },
    { title: 'Flacon Inspection & Laser Gold Monogramming', time: 'Yesterday, 18:45', done: true },
    { title: 'Sealed in Velvet Presentation Box & Insured', time: 'Today, 09:15', done: true },
    { title: 'Dispatched via Royal Gulf Express Courier', time: 'Today, 13:20', done: true, current: true },
    { title: 'Out for Private White Glove Hand Delivery', time: 'Estimated: Tomorrow, 11:00', done: false },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#121212] border border-[#D4AF37]/35 rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.95)] overflow-hidden text-left">
        {/* Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#161616]">
          <div className="flex items-center gap-2.5">
            <Compass className="w-5 h-5 text-[#D4AF37]" />
            <div>
              <h2 className="text-base font-display font-bold text-white uppercase tracking-wider">
                Royal Courier Order Tracking
              </h2>
              <div className="text-[11px] text-[#D4AF37] font-arabic">
                تتبع شحنة عطورات اعظمی الفاخرة
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsTrackerOpen(false)}
            className="p-1.5 text-white/70 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close tracking"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-grow">
              <Search className="w-4 h-4 absolute left-3 top-3 text-[#D4AF37]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter Order Reference (e.g., AZM-8821)"
                className="w-full pl-9 pr-3 py-2 bg-[#1A1A1A] border border-white/15 rounded text-xs text-white uppercase placeholder-white/30 focus:outline-none focus:border-[#D4AF37]"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-gold-gradient text-[#0A0A0A] font-bold text-xs uppercase tracking-wider rounded transition-all active:scale-95 shrink-0"
            >
              Track
            </button>
          </form>

          {/* Current Status Box */}
          {searchedOrder && (
            <div className="p-4 rounded-xl bg-[#181818] border border-[#D4AF37]/30 space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-[#F8F6F2]/60">Order Reference:</span>
                <span className="font-mono font-bold text-[#D4AF37]">{searchedOrder}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-[#F8F6F2]/60">Courier Status:</span>
                <span className="text-emerald-400 font-medium flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5" />
                  <span>In Regional Transit (Flight AZ-402)</span>
                </span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-[#F8F6F2]/60">Estimated Delivery:</span>
                <span className="text-white font-medium">Tomorrow afternoon</span>
              </div>
            </div>
          )}

          {/* Timeline Steps */}
          <div className="space-y-4 pl-2">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-4 relative">
                {idx !== steps.length - 1 && (
                  <div
                    className={`absolute left-3.5 top-6 bottom-0 w-0.5 ${
                      step.done ? 'bg-[#D4AF37]' : 'bg-white/10'
                    }`}
                  />
                )}
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 z-10 ${
                    step.current
                      ? 'bg-[#D4AF37] text-[#0A0A0A] animate-pulse ring-4 ring-[#D4AF37]/20'
                      : step.done
                      ? 'bg-[#D4AF37]/20 border border-[#D4AF37] text-[#D4AF37]'
                      : 'bg-white/5 border border-white/10 text-white/30'
                  }`}
                >
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div className="space-y-0.5 pt-0.5">
                  <div
                    className={`text-xs font-semibold ${
                      step.current ? 'text-[#D4AF37]' : step.done ? 'text-white' : 'text-white/40'
                    }`}
                  >
                    {step.title}
                  </div>
                  <div className="text-[10px] text-white/50 font-mono">{step.time}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Concierge assistance */}
          <div className="pt-2 text-center text-xs text-[#F8F6F2]/60 border-t border-white/10">
            For urgent delivery rerouting, WhatsApp Concierge: <strong className="text-[#D4AF37]">+971 50 123 4567</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
