import React, { useState } from 'react';
import { ArrowRight, Menu, X, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenOrder }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative z-30 w-full px-6 md:px-12 lg:px-16 pt-6 pb-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo (Pinterest [planet] style) */}
        <a href="#" className="flex items-center gap-2 group cursor-pointer">
          <div className="border border-white/80 rounded-xl px-3 py-1 font-bold tracking-tight text-base md:text-lg flex items-center group-hover:border-white transition-all glass-pill shadow-lg">
            <span className="text-white/60">[</span>
            <span className="text-white font-black tracking-wider lowercase mx-1.5 font-heading">
              nusa <span className="font-light text-purple-200">crochet &amp; crafts</span>
            </span>
            <span className="text-white/60">]</span>
          </div>
        </a>

        {/* Middle Pill Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-full glass-pill text-xs font-semibold tracking-wide shadow-xl">
          <a href="#hero" className="px-5 py-2 rounded-full hover:bg-white/20 transition-all text-white/90 hover:text-white">
            Beranda
          </a>
          <a href="#misi" className="px-5 py-2 rounded-full hover:bg-white/20 transition-all text-white/90 hover:text-white flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-300" />
            <span>Pemberdayaan Wanita</span>
          </a>
          <a href="#keunggulan" className="px-5 py-2 rounded-full hover:bg-white/20 transition-all text-white/90 hover:text-white">
            Export Quality
          </a>
          <a href="#panduan" className="px-5 py-2 rounded-full hover:bg-white/20 transition-all text-white/90 hover:text-white">
            Panduan Ukuran
          </a>
        </nav>

        {/* Right Navigation CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="#katalog" className="text-xs font-semibold text-white/80 hover:text-white transition">
            Katalog
          </a>
          <button 
            onClick={onOpenOrder}
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-white text-purple-950 font-bold text-xs tracking-wider uppercase hover:bg-purple-100 hover:shadow-lg hover:shadow-white/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-md"
          >
            <span>Pesan Sekarang</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-full glass-pill text-white focus:outline-none cursor-pointer"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden mt-4 p-5 rounded-2xl glass-card flex flex-col gap-3 text-sm shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <a href="#hero" onClick={() => setMobileOpen(false)} className="py-2 text-white/90 hover:text-white">Beranda</a>
          <a href="#misi" onClick={() => setMobileOpen(false)} className="py-2 text-white/90 hover:text-white">Pemberdayaan Wanita</a>
          <a href="#keunggulan" onClick={() => setMobileOpen(false)} className="py-2 text-white/90 hover:text-white">Export Quality &amp; Eco Materials</a>
          <a href="#katalog" onClick={() => setMobileOpen(false)} className="py-2 text-white/90 hover:text-white">Katalog Tas</a>
          <a href="#panduan" onClick={() => setMobileOpen(false)} className="py-2 text-white/90 hover:text-white">Panduan Ukuran</a>
          <button 
            onClick={() => { setMobileOpen(false); onOpenOrder(); }}
            className="w-full py-2.5 mt-2 rounded-xl bg-white text-purple-950 font-bold text-xs uppercase flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Pesan Sekarang</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}
