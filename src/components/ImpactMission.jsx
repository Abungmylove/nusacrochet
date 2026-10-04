import React from 'react';
import { Users, Globe2, Leaf, Award, Heart } from 'lucide-react';

export default function ImpactMission() {
  return (
    <section id="misi" className="relative z-10 py-20 px-6 md:px-12 lg:px-16 bg-[#170c2c] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Banner with Owner's Statement */}
        <div className="relative rounded-3xl p-8 md:p-12 overflow-hidden glass-card border-purple-400/30 bg-gradient-to-r from-purple-950/80 via-[#261048]/90 to-purple-900/60 shadow-2xl">
          <div className="relative z-10 max-w-3xl space-y-4">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-500/20 text-pink-200 border border-pink-400/30 text-xs font-bold tracking-wider uppercase">
              <Heart className="w-3.5 h-3.5 fill-pink-400 text-pink-400" />
              <span>Social Impact &amp; Women Empowerment</span>
            </div>

            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight font-heading leading-tight">
              "Empowering women with crochets &amp; crafts talents from various areas."
            </h2>

            <p className="text-xs md:text-sm text-white/80 leading-relaxed">
              Di <strong>Nusa Crochet &amp; Crafts</strong>, setiap produk bukan sekadar tas jinjing biasa, melainkan simfoni dedikasi ibu-ibu dan perajin perempuan berbakat dari berbagai pelosok daerah di nusantara. Kami membangun ekosistem kerajinan tangan berkelanjutan dengan upah yang adil, pelatihan keterampilan ekspor, serta kebebasan berkarya dari rumah.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/15">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/30 text-purple-200 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold">120+ Perajin Wanita</h4>
                  <p className="text-[11px] text-white/60">Dari beragam daerah</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/30 text-emerald-200 flex items-center justify-center shrink-0">
                  <Globe2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold">Export Quality</h4>
                  <p className="text-[11px] text-white/60">Standar mutu global</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/30 text-amber-200 flex items-center justify-center shrink-0">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold">Eco Friendly</h4>
                  <p className="text-[11px] text-white/60">100% serat kapas ramah lingkungan</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
