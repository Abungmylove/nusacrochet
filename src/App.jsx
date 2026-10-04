import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import ProductShowcase from './components/ProductShowcase';
import LifestyleVideoBanner from './components/LifestyleVideoBanner';
import StoryAndSpecs from './components/StoryAndSpecs';
import HeritageDarkSection from './components/HeritageDarkSection';
import SocialGallery from './components/SocialGallery';
import LuxuryFooter from './components/LuxuryFooter';
import OrderDrawerModal from './components/OrderDrawerModal';

export default function App() {
  const [selectedColor, setSelectedColor] = useState('lilac');
  const [selectedSize, setSelectedSize] = useState('M');
  const [isOrderOpen, setIsOrderOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col justify-between selection:bg-neutral-900 selection:text-white">
      
      {/* 1. Global Announcement Top Strip */}
      <TopBar onOpenOrder={() => setIsOrderOpen(true)} />

      {/* 2. Main Luxury Header */}
      <Header onOpenOrder={() => setIsOrderOpen(true)} />

      {/* 3. Hero Product Detail Showcase (Nixon Style 3-Column) */}
      <ProductShowcase 
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
        onOpenOrder={() => setIsOrderOpen(true)}
      />

      {/* 4. Full-Width Lifestyle Campaign Banner (Play Video overlay) */}
      <LifestyleVideoBanner onOpenOrder={() => setIsOrderOpen(true)} />

      {/* 5. The Story & Signature Features Split Layout (Nixon Macro Style) */}
      <StoryAndSpecs onOpenOrder={() => setIsOrderOpen(true)} />

      {/* 6. Dark Heritage & Women Artisan Collective Section */}
      <HeritageDarkSection onOpenOrder={() => setIsOrderOpen(true)} />

      {/* 7. #NUSACROCHET Community Social Gallery */}
      <SocialGallery />

      {/* 8. Editorial Luxury Footer */}
      <LuxuryFooter />

      {/* 9. WhatsApp Order Drawer / Modal */}
      <OrderDrawerModal 
        isOpen={isOrderOpen}
        onClose={() => setIsOrderOpen(false)}
        selectedColor={selectedColor}
        selectedSize={selectedSize}
      />

    </div>
  );
}
