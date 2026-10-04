import React from 'react';
import { Globe, Heart, ShoppingBag } from 'lucide-react';

export default function TopBar({ onOpenOrder }) {
  return (
    <div className="w-full bg-[#111111] text-white text-[11px] font-medium tracking-wider uppercase py-2 px-4 md:px-12 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        
        {/* Left: Currency / Region */}
        <div className="flex items-center gap-2 text-neutral-400">
          <Globe className="w-3.5 h-3.5" />
          <span>IDR (Rp) &bull; EXPORT DESTINATION WORLDWIDE</span>
        </div>

        {/* Center: Brand Promise */}
        <div className="hidden lg:block text-neutral-300 font-semibold tracking-widest text-[10px]">
          FREE SHIPPING ON ORDERS OVER RP 500K &bull; 100% ECO FRIENDLY MATERIALS
        </div>

        {/* Right: Quick Links */}
        <div className="flex items-center gap-5 text-neutral-300">
          <a href="#cerita" className="hover:text-white transition">Our Story</a>
          <button 
            onClick={onOpenOrder}
            className="flex items-center gap-1.5 hover:text-white transition cursor-pointer"
          >
            <Heart className="w-3.5 h-3.5 text-neutral-400" />
            <span>Wishlist</span>
          </button>
          <button 
            onClick={onOpenOrder}
            className="flex items-center gap-1.5 hover:text-white transition cursor-pointer font-bold text-white"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Bag (1)</span>
          </button>
        </div>

      </div>
    </div>
  );
}
