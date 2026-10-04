import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImpactMission from './components/ImpactMission';
import Features from './components/Features';
import Catalog from './components/Catalog';
import SizeGuide from './components/SizeGuide';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';
import { COLORWAYS } from './data/products';

export default function App() {
  const [selectedColor, setSelectedColor] = useState('lilac');
  const [selectedSize, setSelectedSize] = useState('M');
  const [isOrderOpen, setIsOrderOpen] = useState(false);

  const currentColor = COLORWAYS[selectedColor] || COLORWAYS.lilac;

  return (
    <div className="min-h-screen bg-[#140b24] text-white flex flex-col justify-between selection:bg-purple-400 selection:text-black">
      
      {/* Dynamic Hero Section with background transition */}
      <div 
        className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden transition-all duration-700 ease-out"
        style={{
          background: currentColor.bgGradient
        }}
      >
        <Navbar onOpenOrder={() => setIsOrderOpen(true)} />
        
        <Hero 
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          onOpenOrder={() => setIsOrderOpen(true)}
        />

        {/* Scroll indicator */}
        <div className="relative z-10 w-full text-center pb-4 pt-2">
          <a 
            href="#misi" 
            className="inline-flex flex-col items-center text-white/60 hover:text-white transition gap-1 animate-bounce text-[10px] uppercase tracking-widest font-semibold"
            aria-label="Scroll ke Bawah"
          >
            <span>Scroll Ke Bawah</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Main Content Sections */}
      <ImpactMission />
      <Features />
      <Catalog 
        onSelectColor={(colorKey) => setSelectedColor(colorKey)} 
        onOpenOrder={() => setIsOrderOpen(true)} 
      />
      <SizeGuide 
        onSelectSize={(sizeKey) => setSelectedSize(sizeKey)} 
      />
      <Footer />

      {/* WhatsApp Checkout Modal */}
      <OrderModal 
        isOpen={isOrderOpen}
        onClose={() => setIsOrderOpen(false)}
        selectedColor={selectedColor}
        selectedSize={selectedSize}
      />
    </div>
  );
}
