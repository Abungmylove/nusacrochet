import React from 'react';
import { Sparkle, Check } from 'lucide-react';
import { SIZE_SPECS } from '../data/products';

export default function SizeGuide({ onSelectSize }) {
  return (
    <section id="panduan" className="relative z-10 py-20 px-6 md:px-12 lg:px-16 bg-[#160b29]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Specs Table */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold tracking-widest uppercase text-purple-400">Dimensi &amp; Kapasitas</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-heading">
              Panduan Ukuran Tas Rajut Nusa
            </h2>
            <p className="text-sm text-white/70">
              Setiap ukuran dirancang proporsional agar nyaman dibawa dan muat menampung kebutuhan harianmu:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs md:text-sm">
                <thead>
                  <tr className="border-b border-white/20 text-white/60 uppercase text-[11px] tracking-wider">
                    <th className="py-3 px-4">Tipe Ukuran</th>
                    <th className="py-3 px-4">Dimensi (P × T × L)</th>
                    <th className="py-3 px-4">Kapasitas Muatan</th>
                    <th className="py-3 px-4 text-right">Harga</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {Object.values(SIZE_SPECS).map((s) => (
                    <tr 
                      key={s.key}
                      onClick={() => {
                        onSelectSize(s.key);
                        const el = document.getElementById('hero');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="hover:bg-white/10 transition cursor-pointer group"
                    >
                      <td className="py-4 px-4 font-bold text-purple-300 group-hover:text-white">
                        {s.name}
                      </td>
                      <td className="py-4 px-4 text-white/80">{s.dimensions}</td>
                      <td className="py-4 px-4 text-white/70">{s.capacity}</td>
                      <td className="py-4 px-4 font-bold text-right text-white">{s.formattedPrice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-white/50 italic">*Klik baris di atas untuk mencoba langsung ukuran pada tampilan 3D hero.</p>
          </div>

          {/* Right Care Guide Card */}
          <div className="lg:col-span-5 p-8 rounded-3xl glass-card space-y-5 border-purple-400/20">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-purple-500/20 text-purple-300">
                <Sparkle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Tips Merawat Tas Rajut</h3>
                <p className="text-xs text-white/60">Agar anyaman tetap awet bertahun-tahun</p>
              </div>
            </div>

            <ul className="space-y-3.5 text-xs text-white/80">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Cuci Manual (Handwash):</strong> Rendam dengan air dingin dan sabun cair lembut. Jangan gunakan mesin cuci.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Jangan Diperas Kasar:</strong> Cukup tekan-tekan lembut dengan handuk kering untuk menyerap sisa air.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Keringkan Mendatar (Flat Dry):</strong> Angin-anginkan di tempat teduh tanpa digantung agar bentuk tidak melar.</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
