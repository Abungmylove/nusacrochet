import React from 'react';
import { ChevronRight } from 'lucide-react';
import { COLORWAYS } from '../data/products';

export default function Catalog({ onSelectColor, onOpenOrder }) {
  const products = [
    {
      key: 'lilac',
      title: 'Lilac Dusk Chic Bag',
      subtitle: 'Paduan warna lavender pastel & ivory klasik untuk gaya feminin manis.',
      badge: 'Best Seller',
      colorBadge: 'bg-purple-500/30 text-purple-200 border-purple-400/30',
      btnColor: 'bg-purple-600 hover:bg-purple-500',
      data: COLORWAYS.lilac
    },
    {
      key: 'sage',
      title: 'Sage Meadow Eco Tote',
      subtitle: 'Nuansa hijau sage menyejukkan dari benang katun ramah lingkungan.',
      badge: 'Organic Look',
      colorBadge: 'bg-emerald-500/30 text-emerald-200 border-emerald-400/30',
      btnColor: 'bg-emerald-600 hover:bg-emerald-500',
      data: COLORWAYS.sage
    },
    {
      key: 'terracotta',
      title: 'Warm Terracotta Shoulder',
      subtitle: 'Earthy tone oranye bata hangat lengkap dengan ornamen rumbai tassel etnik.',
      badge: 'Artisan Heritage',
      colorBadge: 'bg-orange-500/30 text-orange-200 border-orange-400/30',
      btnColor: 'bg-orange-600 hover:bg-orange-500',
      data: COLORWAYS.terracotta
    }
  ];

  return (
    <section id="katalog" className="relative z-10 py-20 px-6 md:px-12 lg:px-16 bg-[#110720]">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-purple-400">Koleksi Signature 2026</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-heading mt-1">
              Katalog Varian Ekspor
            </h2>
          </div>
          <p className="text-xs md:text-sm text-white/60 max-w-md mt-3 md:mt-0">
            Pilihan warna elegan yang dirajut manual oleh tangan-tangan terampil perajin perempuan nusantara.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p) => (
            <div 
              key={p.key} 
              className="rounded-3xl glass-card overflow-hidden group hover:border-purple-400/50 transition-all flex flex-col justify-between"
            >
              <div className="relative bg-gradient-to-b from-white/5 to-transparent p-8 flex items-center justify-center overflow-hidden h-72">
                <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold border uppercase ${p.colorBadge}`}>
                  {p.badge}
                </span>
                <img 
                  src={p.data.image} 
                  alt={p.title} 
                  className="w-56 h-56 object-contain group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 select-none"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{p.title}</h3>
                <p className="text-xs text-white/70 mt-1">{p.subtitle}</p>
                
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
                  <div>
                    <span className="text-[10px] text-white/50 block">Mulai dari</span>
                    <span className="text-lg font-bold text-white">Rp 189.000</span>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => {
                        onSelectColor(p.key);
                        const el = document.getElementById('hero');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-3 py-2 rounded-xl glass-pill text-white hover:bg-white/20 text-xs font-semibold transition cursor-pointer"
                    >
                      Lihat 3D
                    </button>
                    <button 
                      onClick={() => {
                        onSelectColor(p.key);
                        onOpenOrder();
                      }}
                      className={`px-3.5 py-2 rounded-xl ${p.btnColor} text-white font-bold text-xs flex items-center gap-1 transition cursor-pointer shadow-md`}
                    >
                      <span>Pesan</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
