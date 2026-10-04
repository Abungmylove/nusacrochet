import React, { useState } from 'react';
import { Play, Sparkles } from 'lucide-react';

export default function LifestyleVideoBanner({ onOpenOrder }) {
  const [videoModal, setVideoModal] = useState(false);

  return (
    <section className="relative w-full h-[450px] md:h-[580px] bg-neutral-900 overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <img 
        src={`${import.meta.env.BASE_URL}images/lifestyle_model.jpg`}
        alt="Nusa Crochet & Crafts Lifestyle" 
        className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.75]"
      />

      {/* Subtle vignette gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/60" />

      {/* Center Action Box (Nixon Play Video Style) */}
      <div className="relative z-10 text-center max-w-xl px-6 space-y-4">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 text-[10px] font-bold tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Autumn &bull; Winter 2026 Campaign</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-white font-heading tracking-tight leading-tight uppercase">
          Woven For Life's <br />Everyday Journeys
        </h2>

        <p className="text-xs md:text-sm text-neutral-300 font-normal leading-relaxed max-w-md mx-auto">
          From bustling metropolitan streets to quiet coastal getaways. Built with export quality and made to turn heads.
        </p>

        {/* Play Video Pill Button (Nixon Style) */}
        <div className="pt-2">
          <button 
            onClick={() => setVideoModal(true)}
            className="inline-flex items-center gap-3 px-6 py-3 border-2 border-white/80 bg-black/40 hover:bg-white hover:text-black text-white font-bold text-xs tracking-widest uppercase transition-all backdrop-blur-sm cursor-pointer group"
          >
            <span className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition">
              <Play className="w-3 h-3 fill-current ml-0.5" />
            </span>
            <span>Discover Craftsmanship</span>
          </button>
        </div>

      </div>

      {/* Interactive Video Modal / Craft Story Modal */}
      {videoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-neutral-950 border border-neutral-800 rounded-2xl p-6 text-white text-center space-y-4">
            <h3 className="text-xl font-bold font-heading">The Hands That Weave</h3>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-lg mx-auto">
              Setiap helai benang katun dipintal dan dirajut secara manual oleh komunitas perajin perempuan nusantara. Memadukan tradisi anyaman warisan leluhur dengan standar mutu ekspor dunia.
            </p>
            <div className="aspect-video w-full rounded-xl overflow-hidden bg-neutral-900 flex items-center justify-center border border-neutral-800">
              <img 
                src={`${import.meta.env.BASE_URL}images/social_1.jpg`} 
                alt="Artisan Weaving" 
                className="w-full h-full object-cover" 
              />
            </div>
            <button 
              onClick={() => setVideoModal(false)}
              className="px-6 py-2.5 bg-white text-black font-bold text-xs uppercase tracking-wider rounded-md hover:bg-neutral-200 transition cursor-pointer"
            >
              Close Story
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
