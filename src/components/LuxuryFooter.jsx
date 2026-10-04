import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

export default function LuxuryFooter() {
  return (
    <footer className="w-full bg-[#0d0d0d] text-white pt-16 pb-12 px-4 md:px-12 border-t border-neutral-800 text-xs">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-3">
            <span className="font-heading font-black text-2xl tracking-tight text-white block">
              NUSA
            </span>
            <span className="text-[10px] font-bold tracking-[0.25em] text-neutral-400 uppercase block">
              CROCHET &amp; CRAFTS
            </span>
            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm font-normal">
              Export quality &bull; Eco friendly materials &bull; Empowering women with crochets &amp; crafts talents from various areas.
            </p>
            <div className="pt-2 text-[11px] text-neutral-500">
              Handmade ethically with pride across Indonesian artisan communities.
            </div>
          </div>

          {/* Quick Links 1 */}
          <div className="space-y-3">
            <h4 className="font-bold tracking-widest uppercase text-neutral-300 text-[11px]">Bags &amp; Crafts</h4>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#showcase" className="hover:text-white transition">The Signature Chunky</a></li>
              <li><a href="#showcase" className="hover:text-white transition">Mini Carry Series</a></li>
              <li><a href="#showcase" className="hover:text-white transition">Grand Tote Edition</a></li>
              <li><a href="#cerita" className="hover:text-white transition">Custom Colorways</a></li>
            </ul>
          </div>

          {/* Quick Links 2 */}
          <div className="space-y-3">
            <h4 className="font-bold tracking-widest uppercase text-neutral-300 text-[11px]">Craftsmanship</h4>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#cerita" className="hover:text-white transition">Export Standards</a></li>
              <li><a href="#cerita" className="hover:text-white transition">Eco Cotton Materials</a></li>
              <li><a href="#artisan" className="hover:text-white transition">Artisan Collective</a></li>
              <li><a href="#gallery" className="hover:text-white transition">Care &amp; Wash Guide</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-3">
            <h4 className="font-bold tracking-widest uppercase text-neutral-300 text-[11px]">Newsletter</h4>
            <p className="text-neutral-400 text-xs leading-relaxed">
              Dapatkan info rilisan edisi terbatas dan cerita perajin daerah kami.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-1.5">
              <input 
                type="email" 
                placeholder="Enter email address" 
                className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white"
              />
              <button 
                type="submit" 
                className="p-2 bg-white text-black rounded hover:bg-neutral-200 transition cursor-pointer"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} Nusa Crochet &amp; Crafts. All Rights Reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-neutral-300 transition">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-300 transition">Terms of Service</a>
            <a href="#" className="hover:text-neutral-300 transition">Worldwide Shipping</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
