import React, { useState } from 'react';
import { FileText, Ruler, Shield, HeartHandshake, ChevronRight, Check } from 'lucide-react';
import { PRODUCT_DATA } from '../data/products';

export default function StoryAndSpecs({ onOpenOrder }) {
  const [activeTabModal, setActiveTabModal] = useState(null);

  return (
    <section id="cerita" className="w-full bg-white py-20 px-4 md:px-12 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Story & Technical Features (Nixon Split Layout) */}
          <div className="lg:col-span-6 space-y-8 order-2 lg:order-1">
            
            {/* The Story */}
            <div className="space-y-3">
              <span className="text-[11px] font-bold tracking-[0.2em] text-neutral-400 uppercase block">
                THE STORY
              </span>

              <h2 className="font-heading font-black text-3xl md:text-5xl text-neutral-900 tracking-tight leading-[1.05] uppercase">
                EMPOWERING HANDS, <br />EXPORT QUALITY.
              </h2>

              <p className="text-xs md:text-sm text-neutral-700 leading-relaxed font-normal pt-1">
                Di <strong>Nusa Crochet &amp; Crafts</strong>, kami percaya bahwa kemewahan sejati lahir dari dedikasi tangan-tangan terampil. 
                <span className="block mt-2 font-medium text-neutral-900 italic bg-neutral-100 p-3 rounded-lg border-l-4 border-neutral-900">
                  "{PRODUCT_DATA.ownerStatement}"
                </span>
              </p>

              <p className="text-xs text-neutral-600 leading-relaxed">
                Setiap tas melalui proses perajutan manual dengan standar ekspor internasional. Kami memadukan benang katun organik pilihan ramah lingkungan dengan teknik simpul ganda kokoh agar bentuk tas tetap rapi dan kuat digunakan beraktivitas harian.
              </p>
            </div>

            {/* Features (Nixon Feature List Style) */}
            <div className="space-y-6 pt-4 border-t border-neutral-200">
              <span className="text-[11px] font-bold tracking-[0.2em] text-neutral-400 uppercase block">
                SIGNATURE FEATURES
              </span>

              <div className="space-y-5">
                {PRODUCT_DATA.features.map((feat, i) => (
                  <div key={i} className="space-y-1">
                    <h3 className="text-xs font-black tracking-wider uppercase text-neutral-900 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                      {feat.title}
                    </h3>
                    <p className="text-xs text-neutral-600 pl-3.5 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Spec & Manual Action Links (Nixon Style Document Icons) */}
            <div className="pt-6 border-t border-neutral-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
              
              <button 
                onClick={() => setActiveTabModal('care')}
                className="flex items-center justify-between p-3 rounded-lg border border-neutral-200 hover:border-black hover:bg-neutral-50 transition text-left cursor-pointer group"
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-neutral-500 group-hover:text-black transition" />
                  <span className="text-xs font-bold text-neutral-800 tracking-wider uppercase">Care &amp; Wash Manual</span>
                </div>
                <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-black transition" />
              </button>

              <button 
                onClick={() => setActiveTabModal('specs')}
                className="flex items-center justify-between p-3 rounded-lg border border-neutral-200 hover:border-black hover:bg-neutral-50 transition text-left cursor-pointer group"
              >
                <div className="flex items-center gap-2.5">
                  <Ruler className="w-4 h-4 text-neutral-500 group-hover:text-black transition" />
                  <span className="text-xs font-bold text-neutral-800 tracking-wider uppercase">Full Dimensions Specs</span>
                </div>
                <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-black transition" />
              </button>

              <button 
                onClick={() => setActiveTabModal('eco')}
                className="flex items-center justify-between p-3 rounded-lg border border-neutral-200 hover:border-black hover:bg-neutral-50 transition text-left cursor-pointer group"
              >
                <div className="flex items-center gap-2.5">
                  <Shield className="w-4 h-4 text-neutral-500 group-hover:text-black transition" />
                  <span className="text-xs font-bold text-neutral-800 tracking-wider uppercase">Eco Materials Cert</span>
                </div>
                <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-black transition" />
              </button>

              <button 
                onClick={() => setActiveTabModal('women')}
                className="flex items-center justify-between p-3 rounded-lg border border-neutral-200 hover:border-black hover:bg-neutral-50 transition text-left cursor-pointer group"
              >
                <div className="flex items-center gap-2.5">
                  <HeartHandshake className="w-4 h-4 text-neutral-500 group-hover:text-black transition" />
                  <span className="text-xs font-bold text-neutral-800 tracking-wider uppercase">Women Artisan Impact</span>
                </div>
                <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-black transition" />
              </button>

            </div>

          </div>

          {/* RIGHT COLUMN: Full-Height Macro Crop (Nixon Giant Watch Crown Style) */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-[520px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-neutral-100 group">
              <img 
                src={`${import.meta.env.BASE_URL}images/macro_yarn_clasp.jpg`}
                alt="Macro Chunky Crochet Texture &amp; Gold Lock" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              
              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[10px] font-bold tracking-widest uppercase text-amber-300">
                  MACRO DETAIL &bull; EXPORT FINISH
                </span>
                <p className="text-sm font-bold font-heading">
                  Reinforced Handwoven Knots &amp; Electroplated Gold Turn-Lock
                </p>
                <p className="text-xs text-neutral-300">
                  Every stitch inspected for global standard durability.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Interactive Modal for Specs & Manuals */}
      {activeTabModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-white rounded-2xl p-6 md:p-8 space-y-4">
            <h3 className="font-heading font-black text-xl text-neutral-900 uppercase">
              {activeTabModal === 'care' && 'Care & Handwash Instructions'}
              {activeTabModal === 'specs' && 'Full Dimension & Weight Specifications'}
              {activeTabModal === 'eco' && 'Eco-Friendly Material Standards'}
              {activeTabModal === 'women' && 'Women Artisan Empowerment Collective'}
            </h3>

            {activeTabModal === 'care' && (
              <ul className="space-y-3 text-xs text-neutral-700">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Handwash Only:</strong> Rendam dalam air bersuhu sejuk dengan detergen lembut (tanpa pemutih).</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>No Wringing:</strong> Cukup tekan dengan handuk bersih untuk menyerap sisa air tanpa memelintir anyaman.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Flat Dry:</strong> Keringkan mendatar di tempat teduh agar proporsi tas tetap kokoh dan tahan lama.</span>
                </li>
              </ul>
            )}

            {activeTabModal === 'specs' && (
              <div className="space-y-2 text-xs">
                {PRODUCT_DATA.specs.map((sp, idx) => (
                  <div key={idx} className="flex justify-between py-2 border-b border-neutral-100">
                    <span className="font-bold text-neutral-600">{sp.label}</span>
                    <span className="text-neutral-900 font-semibold">{sp.value}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTabModal === 'eco' && (
              <p className="text-xs text-neutral-600 leading-relaxed">
                Kami berkomitmen 100% menggunakan benang daur ulang kapas organik yang ditanam tanpa pestisida kimia serta pewarna nabati biodegradable. Menjaga kelestarian alam dan aman bagi mereka yang memiliki kulit sensitif.
              </p>
            )}

            {activeTabModal === 'women' && (
              <p className="text-xs text-neutral-600 leading-relaxed">
                Melalui program pemberdayaan Nusa, lebih dari 120 perajin perempuan dari berbagai daerah mendapatkan pelatihan peningkatan mutu ekspor, upah yang adil di atas standar, serta fleksibilitas kerja dari rumah demi mendukung kesejahteraan keluarga mereka.
              </p>
            )}

            <button 
              onClick={() => setActiveTabModal(null)}
              className="w-full py-2.5 bg-neutral-900 text-white font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-black transition cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
