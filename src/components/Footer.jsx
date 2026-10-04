import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#0d0519] py-12 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Purpose */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="border border-white/80 rounded-xl px-3 py-1 font-bold tracking-tight text-base inline-flex items-center glass-pill">
            <span className="text-white/60">[</span>
            <span className="text-white font-black tracking-wider lowercase mx-1.5 font-heading">
              nusa <span className="font-light text-purple-200">crochet &amp; crafts</span>
            </span>
            <span className="text-white/60">]</span>
          </div>
          <p className="text-xs text-white/60 text-center md:text-left max-w-sm">
            Export quality &bull; Eco friendly materials &bull; Empowering women with crochets &amp; crafts talents from various areas.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex items-center gap-6 text-xs text-white/70">
          <a href="#hero" className="hover:text-white transition">Beranda</a>
          <a href="#misi" className="hover:text-white transition">Pemberdayaan</a>
          <a href="#keunggulan" className="hover:text-white transition">Export Quality</a>
          <a href="#katalog" className="hover:text-white transition">Katalog</a>
          <a href="#panduan" className="hover:text-white transition">Ukuran</a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-white/40 text-center md:text-right">
          &copy; {new Date().getFullYear()} Nusa Crochet &amp; Crafts.<br />
          Built with React.js, Vite &amp; Tailwind CSS.
        </div>

      </div>
    </footer>
  );
}
