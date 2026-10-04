import React, { useState } from 'react';
import { ShoppingBag, Heart, Check, Share2, Star } from 'lucide-react';
import { PRODUCT_DATA } from '../data/products';

export default function ProductShowcase({ 
  selectedColor, 
  setSelectedColor, 
  selectedSize, 
  setSelectedSize, 
  onOpenOrder 
}) {
  const [activeAngleIndex, setActiveAngleIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const currentColorway = PRODUCT_DATA.colorways.find(c => c.id === selectedColor) || PRODUCT_DATA.colorways[0];
  const currentSizeObj = PRODUCT_DATA.sizes.find(s => s.key === selectedSize) || PRODUCT_DATA.sizes[1];

  const currentDisplayImage = currentColorway.angles[activeAngleIndex]?.src || currentColorway.mainImage;

  return (
    <section id="showcase" className="w-full bg-[#fbfbfb] border-b border-neutral-200 pt-5 pb-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Breadcrumbs */}
        <div className="text-[11px] font-bold tracking-widest text-neutral-400 uppercase mb-8 flex items-center gap-2">
          <a href="#" className="hover:text-black transition">Home</a>
          <span>/</span>
          <a href="#" className="hover:text-black transition">Bags</a>
          <span>/</span>
          <span className="text-neutral-900">{PRODUCT_DATA.name}</span>
        </div>

        {/* 3-Column Product Detail Layout (Nixon Template Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* COLUMN 1: Vertical Thumbnail Strip (Desktop) */}
          <div className="lg:col-span-1 flex lg:flex-col gap-3 order-2 lg:order-1 justify-center lg:justify-start">
            {currentColorway.angles.map((angle, idx) => (
              <button
                key={idx}
                onClick={() => setActiveAngleIndex(idx)}
                className={`relative w-16 h-16 rounded-md overflow-hidden border-2 transition-all p-1 bg-white cursor-pointer ${activeAngleIndex === idx ? 'border-neutral-900 ring-1 ring-neutral-900' : 'border-neutral-200 hover:border-neutral-400'}`}
                title={angle.label}
              >
                <img 
                  src={angle.src} 
                  alt={angle.label} 
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* COLUMN 2: Large Hero Product Image Showcase */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-center justify-center bg-white rounded-2xl p-6 lg:p-12 border border-neutral-100 shadow-sm min-h-[460px] relative overflow-hidden group">
            
            {/* Zoom / Full Preview */}
            <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
              <img 
                src={currentDisplayImage} 
                alt={`${PRODUCT_DATA.name} - ${currentColorway.name}`} 
                className="w-full h-full object-contain filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.12)] transition-transform duration-500 ease-out group-hover:scale-105 select-none"
              />
            </div>

            {/* Angle Indicator Tag */}
            <div className="mt-4 text-[10px] font-bold tracking-widest uppercase text-neutral-400">
              Angle: <span className="text-neutral-900">{currentColorway.angles[activeAngleIndex]?.label || 'Front View'}</span>
            </div>
          </div>

          {/* COLUMN 3: Product Details, Color Swatches, Size & Purchase */}
          <div className="lg:col-span-5 order-3 space-y-6 lg:pl-4">
            
            {/* Badges & Title */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 bg-red-600 text-white font-black text-[10px] tracking-wider uppercase rounded-sm">
                  {PRODUCT_DATA.badge}
                </span>
                <span className="text-[11px] font-bold tracking-widest text-neutral-500 uppercase">
                  {PRODUCT_DATA.collection}
                </span>
              </div>

              <h1 className="font-heading font-black text-3xl md:text-4xl text-neutral-900 tracking-tight leading-none uppercase">
                {PRODUCT_DATA.name}
              </h1>

              {/* Price & Rating */}
              <div className="flex items-baseline justify-between mt-3 pb-4 border-b border-neutral-200">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl md:text-3xl font-black text-neutral-900 font-heading">
                    {currentSizeObj.formattedPrice}
                  </span>
                  <span className="text-xs text-neutral-400 font-medium">
                    (Est. {PRODUCT_DATA.usdPrice})
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="font-semibold text-neutral-600">({PRODUCT_DATA.reviewCount} Reviews)</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs text-neutral-600 leading-relaxed">
              {PRODUCT_DATA.description}
            </p>

            {/* Colorway Selection Grid (Nixon Watch Style) */}
            <div className="space-y-2.5 pt-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold tracking-wider uppercase text-neutral-700">Pilihan Warna:</span>
                <span className="text-[11px] font-semibold text-neutral-500">{currentColorway.name}</span>
              </div>

              {/* Swatch Grid */}
              <div className="grid grid-cols-3 gap-3">
                {PRODUCT_DATA.colorways.map((cw) => (
                  <button
                    key={cw.id}
                    onClick={() => {
                      setSelectedColor(cw.id);
                      setActiveAngleIndex(0);
                    }}
                    className={`flex items-center gap-2 p-2 rounded-lg border-2 text-left transition-all cursor-pointer bg-white ${selectedColor === cw.id ? 'border-neutral-900 bg-neutral-50 ring-1 ring-neutral-900 shadow-sm' : 'border-neutral-200 hover:border-neutral-400'}`}
                  >
                    <div 
                      className="w-6 h-6 rounded-full shrink-0 border border-black/10 shadow-inner"
                      style={{ backgroundColor: cw.colorHex }}
                    />
                    <div className="overflow-hidden">
                      <p className="text-[11px] font-bold text-neutral-900 truncate leading-tight">{cw.id.toUpperCase()}</p>
                      <p className="text-[9px] text-neutral-500 truncate leading-tight">Ready Stock</p>
                    </div>
                  </button>
                ))}
              </div>

              {/* In-Stock Indicator */}
              <div className="flex items-center gap-2 text-[11px] text-emerald-700 font-semibold pt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{currentColorway.status}</span>
              </div>
            </div>

            {/* Size Selector */}
            <div className="space-y-2.5 pt-2 border-t border-neutral-100">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold tracking-wider uppercase text-neutral-700">Pilihan Ukuran:</span>
                <span className="text-[11px] font-semibold text-neutral-500">{currentSizeObj.dimensions} &bull; {currentSizeObj.weight}</span>
              </div>

              <div className="grid grid-cols-3 gap-2.5">
                {PRODUCT_DATA.sizes.map((sz) => (
                  <button
                    key={sz.key}
                    onClick={() => setSelectedSize(sz.key)}
                    className={`py-2.5 px-3 rounded-lg border-2 text-center transition-all cursor-pointer ${selectedSize === sz.key ? 'border-neutral-900 bg-neutral-900 text-white font-bold shadow-sm' : 'border-neutral-200 bg-white text-neutral-800 hover:border-neutral-400 font-semibold'}`}
                  >
                    <div className="text-xs font-bold leading-tight">{sz.label}</div>
                    <div className={`text-[10px] ${selectedSize === sz.key ? 'text-neutral-300' : 'text-neutral-500'}`}>{sz.formattedPrice}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart / Order CTA (Bold Nixon Box Style) */}
            <div className="pt-3 flex gap-3">
              <button
                onClick={onOpenOrder}
                className="flex-1 py-4 px-6 bg-neutral-900 hover:bg-black text-white font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2.5 rounded-lg transition-all shadow-md active:scale-[0.99] cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Cart &bull; Order via WhatsApp</span>
              </button>

              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`w-14 h-14 rounded-lg border-2 flex items-center justify-center transition-all cursor-pointer ${isWishlisted ? 'border-red-500 bg-red-50 text-red-500' : 'border-neutral-200 hover:border-neutral-400 text-neutral-700'}`}
                aria-label="Wishlist"
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-500' : ''}`} />
              </button>
            </div>

            {/* Value Proposition Highlights */}
            <div className="pt-4 border-t border-neutral-200 space-y-2 text-xs text-neutral-600">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>100% Eco Friendly Materials:</strong> Serat katun organik berkelanjutan.</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>Export Quality Standard:</strong> Anyaman double-knot tahan beban harian.</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>Empowering Women Artisans:</strong> Dikerjakan langsung perajin perempuan nusantara.</span>
              </div>
            </div>

            {/* Share links */}
            <div className="pt-2 flex items-center gap-3 text-neutral-400 text-xs">
              <span className="font-semibold text-neutral-600">Share:</span>
              <a href="https://wa.me/?text=Check%20out%20Nusa%20Crochet%20Bag" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">WhatsApp</a>
              <span>&bull;</span>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">Instagram</a>
              <span>&bull;</span>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">Pinterest</a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
