import React from 'react';
import { Feather, ShieldCheck, Sparkles, HeartHandshake } from 'lucide-react';

export default function Features() {
  const items = [
    {
      icon: <Feather className="w-6 h-6" />,
      title: "Eco-Friendly Materials",
      badge: "Sustainable Cotton",
      desc: "Dipintal dari 100% serat katun alami tanpa pestisida berbahaya, menghasilkan benang chunky yang empuk, tahan cuci, dan aman untuk kulit sensitif.",
      colorClass: "bg-emerald-500/20 text-emerald-300"
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Export Quality Standard",
      badge: "Quality Controlled",
      desc: "Melewati kontrol kualitas ketat untuk standar pasar ekspor internasional. Kerapatan simpul konsisten sehingga tas tidak melar saat membawa barang berat.",
      colorClass: "bg-purple-500/20 text-purple-300"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Hardware Gold Mewah",
      badge: "Anti-Rust Plating",
      desc: "Kunci putar dan pengait rantai selempang dilapisi electroplating gold mewah tahan karat yang menambah sentuhan modern dan eksklusif.",
      colorClass: "bg-amber-500/20 text-amber-300"
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      title: "Women Artisan Talents",
      badge: "Fair Trade Ecosystem",
      desc: "Menyalurkan talenta perajin wanita dari berbagai daerah nusantara, mengubah keterampilan merajut tradisional menjadi karya bernilai tinggi.",
      colorClass: "bg-pink-500/20 text-pink-300"
    }
  ];

  return (
    <section id="keunggulan" className="relative z-10 py-20 px-6 md:px-12 lg:px-16 bg-[#130824]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold tracking-widest uppercase text-purple-400">Pilar Utama Nusa</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-heading">
            Standar Kualitas &amp; Dedikasi Perajin
          </h2>
          <p className="text-xs md:text-sm text-white/70 leading-relaxed">
            Menghubungkan keanggunan kerajinan tangan lokal nusantara dengan ekspektasi kualitas global.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, idx) => (
            <div key={idx} className="p-6 rounded-2xl glass-card hover:bg-white/[0.12] transition-all group flex flex-col justify-between">
              <div>
                <div className={`w-12 h-12 rounded-xl ${it.colorClass} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  {it.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-white/50 block mb-1">{it.badge}</span>
                <h3 className="text-lg font-bold mb-2 text-white">{it.title}</h3>
                <p className="text-xs text-white/70 leading-relaxed">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
