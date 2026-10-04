import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';

export default function Header({ onOpenOrder }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-neutral-200 transition-all">
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-4 flex items-center justify-between">
        
        {/* Brand Logo (Clean Luxury Editorial Style) */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex flex-col group">
            <span className="font-heading font-black text-2xl md:text-3xl tracking-tight text-neutral-900 leading-none">
              NUSA
            </span>
            <span className="text-[9px] font-bold tracking-[0.25em] text-neutral-500 uppercase mt-0.5 group-hover:text-black transition">
              Crochet &amp; Crafts
            </span>
          </a>
        </div>

        {/* Center Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[12px] font-bold tracking-widest uppercase text-neutral-800">
          <a href="#showcase" className="hover:text-black border-b-2 border-transparent hover:border-black py-1 transition">
            New
          </a>
          <a href="#cerita" className="hover:text-black border-b-2 border-transparent hover:border-black py-1 transition">
            Collections
          </a>
          <a href="#showcase" className="hover:text-black border-b-2 border-black py-1 transition text-black">
            Bags
          </a>
          <a href="#cerita" className="hover:text-black border-b-2 border-transparent hover:border-black py-1 transition">
            The Story
          </a>
          <a href="#artisan" className="hover:text-black border-b-2 border-transparent hover:border-black py-1 transition">
            Artisans
          </a>
          <a href="#gallery" className="hover:text-black border-b-2 border-transparent hover:border-black py-1 transition">
            Community
          </a>
        </nav>

        {/* Right Search & Cart */}
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <input 
              type="text" 
              placeholder="Search crafts..." 
              className="pl-8 pr-3 py-1.5 text-xs bg-neutral-100 rounded-full border border-neutral-200 focus:outline-none focus:border-neutral-400 w-36 focus:w-48 transition-all"
            />
            <Search className="w-3.5 h-3.5 text-neutral-400 absolute left-2.5 top-2.5" />
          </div>

          <button 
            onClick={onOpenOrder}
            className="flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white rounded-md text-xs font-bold uppercase tracking-wider hover:bg-black transition cursor-pointer shadow-sm"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Order Now</span>
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-neutral-800 hover:text-black cursor-pointer"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-neutral-200 px-6 py-4 flex flex-col gap-3 text-xs font-bold tracking-widest uppercase">
          <a href="#showcase" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-neutral-100">Bags &amp; Products</a>
          <a href="#cerita" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-neutral-100">The Story &amp; Specs</a>
          <a href="#artisan" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-neutral-100">Artisan Empowerment</a>
          <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-neutral-100">Community Gallery</a>
          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenOrder(); }}
            className="w-full py-2.5 mt-2 bg-black text-white text-center font-bold uppercase tracking-wider"
          >
            Order via WhatsApp
          </button>
        </div>
      )}
    </header>
  );
}
