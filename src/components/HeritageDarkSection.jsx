import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeritageDarkSection({ onOpenOrder }) {
  return (
    <section id="artisan" className="w-full bg-[#0a0a0a] text-white py-16 px-4 md:px-12 border-b border-neutral-800 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Editorial Text */}
        <div className="max-w-xl space-y-4">
          <span className="text-[10px] font-bold tracking-[0.25em] text-neutral-400 uppercase">
            THE ARTISAN COLLECTIVE
          </span>

          <h2 className="font-heading font-black text-3xl md:text-4xl tracking-tight leading-tight uppercase">
            AUTHENTIC SLOW FASHION, <br />HONORING THE WEAVER.
          </h2>

          <p className="text-xs md:text-sm text-neutral-400 leading-relaxed font-normal">
            Bukan produk massal buatan pabrik cepat saji. Setiap jengkal rajutan membutuhkan waktu hingga 14 jam kerja tangan penuh cinta dari perajin wanita berbakat di pelosok nusantara.
          </p>

          <div className="pt-2">
            <button 
              onClick={onOpenOrder}
              className="inline-flex items-center gap-2.5 px-6 py-3 border-2 border-white text-white font-bold text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all cursor-pointer group"
            >
              <span>Explore Custom Commissions</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Circular Artisan Spotlight (Nixon Planetary Style) */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-neutral-800 shadow-2xl p-2 bg-neutral-900 group">
            <img 
              src={`${import.meta.env.BASE_URL}images/social_1.jpg`} 
              alt="Artisan Hands Knitting" 
              className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-700 ease-out" 
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-0 right-0 text-center text-[10px] font-bold tracking-widest uppercase text-amber-300 pointer-events-none">
              100% Handcrafted In Indonesia
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
