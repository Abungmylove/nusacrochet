import React, { useRef, useState, useEffect } from 'react';
import { ArrowUpRight, CheckCircle2, Sparkles, HeartHandshake } from 'lucide-react';
import { COLORWAYS, SIZE_SPECS } from '../data/products';

export default function Hero({ selectedColor, setSelectedColor, selectedSize, setSelectedSize, onOpenOrder }) {
  const currentColor = COLORWAYS[selectedColor] || COLORWAYS.lilac;
  const currentSize = SIZE_SPECS[selectedSize] || SIZE_SPECS.M;

  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const interactiveRef = useRef(null);

  // Generate lightweight floating particles once
  useEffect(() => {
    const pts = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 85 + 5}%`,
      top: `${Math.random() * 80 + 10}%`,
      size: `${Math.random() * 5 + 2}px`,
      delay: `${Math.random() * 3}s`,
      duration: `${Math.random() * 4 + 4}s`,
      bg: ['#ffffff', '#f5d0fe', '#a7f3d0', '#fed7aa'][i % 4]
    }));
    setParticles(pts);
  }, []);

  // 3D Parallax Tilt Handler
  const handleMouseMove = (e) => {
    if (!interactiveRef.current) return;
    const rect = interactiveRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Smooth tilt angles
    const tiltX = -(y / (rect.height / 2)) * 14;
    const tiltY = (x / (rect.width / 2)) * 16;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <main 
      id="hero" 
      className="relative z-10 w-full flex-1 flex flex-col justify-center items-center px-6 md:px-12 lg:px-16 py-8"
    >
      <div 
        ref={interactiveRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center min-h-[580px] lg:min-h-[640px]"
      >
        
        {/* ====================================================
             CENTER BACKGROUND: Giant Bold Typography & Glow
             ==================================================== */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
          {/* Ambient Glow */}
          <div 
            className="hero-radial-glow absolute w-[360px] md:w-[580px] h-[360px] md:h-[580px] rounded-full pointer-events-none"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${currentColor.glow} 0%, rgba(0,0,0,0) 70%)`
            }}
          />

          {/* Giant Typography (Pinterest "RIDE" style) */}
          <span 
            className="hero-giant-text select-none text-center font-heading transition-all duration-500 text-white/80 tracking-tighter"
            style={{
              fontSize: 'clamp(4.5rem, 15vw, 13rem)',
              transform: `translate(${tilt.y * 0.4}px, ${-tilt.x * 0.4}px)`
            }}
          >
            {currentColor.giantText}
          </span>

          {/* Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {particles.map((p) => (
              <div 
                key={p.id}
                className="particle"
                style={{
                  left: p.left,
                  top: p.top,
                  width: p.size,
                  height: p.size,
                  background: p.bg,
                  animationDelay: p.delay,
                  animationDuration: p.duration
                }}
              />
            ))}
          </div>
        </div>

        {/* ====================================================
             LEFT COLUMN: Headline, Mission & Social Links
             ==================================================== */}
        <div className="lg:col-span-4 z-20 flex flex-col justify-between py-6 order-2 lg:order-1 text-center lg:text-left">
          <div className="space-y-4">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-[11px] font-bold tracking-widest uppercase text-purple-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Export Quality • Eco Friendly</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.08] uppercase font-sans">
              Crafted With <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-purple-300">
                Passion &amp; Soul
              </span>
            </h1>

            {/* Subtext with Owner's words */}
            <p className="text-xs md:text-sm text-white/85 leading-relaxed max-w-sm mx-auto lg:mx-0 font-normal">
              {currentColor.desc}
            </p>

            <div className="p-3 rounded-2xl glass-card border-white/10 max-w-sm mx-auto lg:mx-0 text-left">
              <p className="text-[11px] text-purple-200 italic font-medium leading-relaxed flex items-start gap-2">
                <HeartHandshake className="w-4 h-4 text-pink-300 shrink-0 mt-0.5" />
                <span>"Empowering women with crochets &amp; crafts talents from various areas."</span>
              </p>
            </div>

            {/* Trust Badges */}
            <div className="pt-1 flex items-center justify-center lg:justify-start gap-4 text-xs text-white/80">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="font-medium">Export Standard</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span className="font-medium">Eco Cotton</span>
              </div>
            </div>
          </div>

          {/* Bottom Left: Social Media Icons */}
          <div className="pt-8 lg:pt-14 flex items-center justify-center lg:justify-start gap-3.5">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-9 h-9 rounded-full glass-pill flex items-center justify-center text-white/80 hover:text-white hover:scale-110 transition-all cursor-pointer"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a 
              href="https://tiktok.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-9 h-9 rounded-full glass-pill flex items-center justify-center text-white/80 hover:text-white hover:scale-110 transition-all cursor-pointer"
              aria-label="TikTok"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
            </a>
            <a 
              href="https://wa.me/6281234567890" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-9 h-9 rounded-full glass-pill flex items-center justify-center text-white/80 hover:text-white hover:scale-110 transition-all cursor-pointer"
              aria-label="WhatsApp"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </a>
            <a 
              href="https://pinterest.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-9 h-9 rounded-full glass-pill flex items-center justify-center text-white/80 hover:text-white hover:scale-110 transition-all cursor-pointer"
              aria-label="Website"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </a>
          </div>
        </div>

        {/* ====================================================
             CENTER COLUMN: Floating Hero Product Image with 3D Tilt
             ==================================================== */}
        <div className="lg:col-span-5 z-20 flex flex-col items-center justify-center relative order-1 lg:order-2 my-6 lg:my-0">
          <div className="relative w-full max-w-[340px] md:max-w-[420px] lg:max-w-[470px] aspect-square flex items-center justify-center">
            
            {/* Dynamic Product Image */}
            <img 
              src={currentColor.image} 
              alt={currentColor.name} 
              key={currentColor.id}
              className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.5)] cursor-grab active:cursor-grabbing transition-transform duration-200 ease-out animate-floating select-none"
              draggable="false"
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.02, 1.02, 1.02) rotate(-5deg)`
              }}
            />
          </div>

          {/* Bottom Center: Slider / Size indicator (Pinterest style) */}
          <div className="w-full max-w-[300px] mt-2 flex flex-col items-center gap-1.5 z-20">
            <span className="text-[11px] font-semibold text-white/80 tracking-wide text-center">
              <span className="font-bold text-white">{currentSize.name}</span> • Dimensi: {currentSize.dimensions}
            </span>
            <div className="w-full h-1 bg-white/20 rounded-full relative overflow-hidden">
              <div 
                className="h-full bg-white rounded-full transition-all duration-300 ease-out" 
                style={{ width: currentSize.sliderPos }}
              />
            </div>
            <span className="text-[10px] text-white/50 tracking-wider uppercase font-medium">Pilih Ukuran di Kanan</span>
          </div>
        </div>

        {/* ====================================================
             RIGHT COLUMN: Color Picker, Size & CTA
             ==================================================== */}
        <div className="lg:col-span-3 z-20 flex flex-col justify-between py-6 order-3 text-center lg:text-right">
          <div className="space-y-6">
            
            {/* Color Selector */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-white/70 mb-3">Pilihan Warna Benang</p>
              <div className="flex items-center justify-center lg:justify-end gap-3.5">
                
                {/* Lilac */}
                <button 
                  onClick={() => setSelectedColor('lilac')}
                  className={`color-swatch relative w-8 h-8 rounded-full bg-[#c084fc] border-2 border-white/60 focus:outline-none cursor-pointer ${selectedColor === 'lilac' ? 'active ring-2 ring-white ring-offset-2 ring-offset-purple-900' : ''}`}
                  title="Lilac Dusk"
                  aria-label="Pilih Warna Lilac Dusk"
                />

                {/* Sage Green */}
                <button 
                  onClick={() => setSelectedColor('sage')}
                  className={`color-swatch relative w-8 h-8 rounded-full bg-[#34d399] border-2 border-white/60 focus:outline-none cursor-pointer ${selectedColor === 'sage' ? 'active ring-2 ring-white ring-offset-2 ring-offset-emerald-900' : ''}`}
                  title="Sage Meadow"
                  aria-label="Pilih Warna Sage Meadow"
                />

                {/* Terracotta */}
                <button 
                  onClick={() => setSelectedColor('terracotta')}
                  className={`color-swatch relative w-8 h-8 rounded-full bg-[#fb923c] border-2 border-white/60 focus:outline-none cursor-pointer ${selectedColor === 'terracotta' ? 'active ring-2 ring-white ring-offset-2 ring-offset-orange-900' : ''}`}
                  title="Warm Terracotta"
                  aria-label="Pilih Warna Warm Terracotta"
                />
              </div>
              <p className="text-xs font-semibold text-white/95 mt-2">{currentColor.name}</p>
            </div>

            {/* Size Selector */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-white/70 mb-3">Pilihan Ukuran</p>
              <div className="flex items-center justify-center lg:justify-end gap-2.5">
                {Object.keys(SIZE_SPECS).map((szKey) => (
                  <button 
                    key={szKey}
                    onClick={() => setSelectedSize(szKey)}
                    className={`size-pill w-10 h-10 rounded-full border border-white/40 glass-pill text-xs font-bold flex items-center justify-center hover:border-white transition-all cursor-pointer ${selectedSize === szKey ? 'active' : ''}`}
                  >
                    {szKey}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Display */}
            <div className="p-3.5 rounded-2xl glass-card max-w-[240px] mx-auto lg:ml-auto lg:mr-0 text-center lg:text-right">
              <span className="text-[10px] uppercase tracking-wider text-white/60 font-semibold block">Harga Spesial</span>
              <div className="text-2xl font-black text-white tracking-tight mt-0.5 font-heading">
                {currentSize.formattedPrice}
              </div>
              <span className="text-[10px] text-emerald-300 font-medium">Termasuk Dustbag &amp; Tali Selempang</span>
            </div>

          </div>

          {/* Bottom Right: "See all products" CTA (Pinterest style) */}
          <div className="pt-8 lg:pt-14 flex flex-col items-center lg:items-end gap-3">
            <a 
              href="#katalog" 
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-purple-950 font-bold text-xs tracking-wider uppercase hover:bg-purple-100 hover:shadow-xl hover:shadow-white/20 transition-all transform hover:-translate-y-0.5 cursor-pointer shadow-lg"
            >
              <span>Lihat Semua Produk</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
            <button 
              onClick={onOpenOrder}
              className="text-xs font-semibold text-white/80 hover:text-white underline underline-offset-4 decoration-white/40 hover:decoration-white transition cursor-pointer"
            >
              Atau Custom Desain via WhatsApp
            </button>
          </div>

        </div>

      </div>
    </main>
  );
}
