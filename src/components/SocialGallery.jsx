import React from 'react';
import { PRODUCT_DATA } from '../data/products';

export default function SocialGallery() {
  return (
    <section id="gallery" className="w-full bg-white py-20 px-4 md:px-12 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Header (Nixon Style #5130CHRONO) */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-[10px] font-bold tracking-[0.25em] text-neutral-400 uppercase">
            COMMUNITY &amp; LIFESTYLE
          </span>

          <h2 className="font-heading font-black text-2xl md:text-3xl text-neutral-900 tracking-tight uppercase">
            #NUSACROCHET &bull; GLOBAL WEAVE
          </h2>

          <p className="text-xs text-neutral-500 leading-relaxed font-normal">
            At Nusa, it is through life's everyday adventures around the globe with a world-class team of talented women artisans where inspiration and craftsmanship combine.
          </p>
        </div>

        {/* 4-Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PRODUCT_DATA.socialGallery.map((item) => (
            <div 
              key={item.id} 
              className="relative aspect-square rounded-xl overflow-hidden bg-neutral-100 group border border-neutral-100 shadow-sm"
            >
              <img 
                src={item.image} 
                alt={item.caption} 
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out" 
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
                <div className="self-end">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </div>
                <p className="text-[11px] leading-tight font-medium text-neutral-200">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Follow CTA */}
        <div className="text-center pt-8">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-neutral-900 hover:text-neutral-600 transition"
          >
            <span>Follow @nusacrochet on Instagram</span>
            <span>&rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
}
