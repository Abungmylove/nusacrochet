import React, { useState } from 'react';
import { X, Send, Check } from 'lucide-react';
import { PRODUCT_DATA } from '../data/products';

export default function OrderDrawerModal({ isOpen, onClose, selectedColor, selectedSize }) {
  if (!isOpen) return null;

  const currentColorway = PRODUCT_DATA.colorways.find(c => c.id === selectedColor) || PRODUCT_DATA.colorways[0];
  const currentSizeObj = PRODUCT_DATA.sizes.find(s => s.key === selectedSize) || PRODUCT_DATA.sizes[1];

  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const customerName = name.trim() || 'Pelanggan';
    const destination = city.trim() || 'Indonesia';
    const notes = note.trim() || '-';

    const message = `Halo Admin Nusa Crochet & Crafts! ✨%0A%0ASaya ingin memesan koleksi tas handmade:%0A━━━━━━━━━━━━━━━━━%0A👜 *Produk:* ${encodeURIComponent(PRODUCT_DATA.name)}%0A🎨 *Pilihan Warna:* ${encodeURIComponent(currentColorway.name)}%0A📏 *Ukuran:* ${encodeURIComponent(currentSizeObj.label)} (${encodeURIComponent(currentSizeObj.dimensions)})%0A💰 *Harga:* ${encodeURIComponent(currentSizeObj.formattedPrice)}%0A🌱 *Standar:* Export Quality • Eco Friendly Materials%0A👤 *Nama Pemesan:* ${encodeURIComponent(customerName)}%0A📍 *Kota Pengiriman:* ${encodeURIComponent(destination)}%0A📝 *Catatan Khusus:* ${encodeURIComponent(notes)}%0A━━━━━━━━━━━━━━━━━%0AMohon konfirmasi ketersediaan slot pengerjaan dan estimasi ongkir ya. Terima kasih! 🙏`;

    const waNumber = '6281234567890';
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${message}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl p-6 md:p-8 shadow-2xl border border-neutral-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full hover:bg-neutral-100 text-neutral-500 hover:text-neutral-900 transition cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-4 mb-6 pb-4 border-b border-neutral-100">
          <div className="w-16 h-16 rounded-xl overflow-hidden bg-neutral-50 p-2 border border-neutral-200 shrink-0 flex items-center justify-center">
            <img 
              src={currentColorway.mainImage} 
              alt={currentColorway.name} 
              className="w-full h-full object-contain" 
            />
          </div>
          <div>
            <div className="text-[10px] font-bold tracking-widest uppercase text-red-600">Export Quality Order</div>
            <h3 className="font-heading font-black text-xl text-neutral-900 uppercase">
              {PRODUCT_DATA.name}
            </h3>
            <p className="text-xs text-neutral-500">
              {currentColorway.name} &bull; {currentSizeObj.label} ({currentSizeObj.formattedPrice})
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          
          <div className="p-3 bg-neutral-50 rounded-xl space-y-1.5 border border-neutral-200">
            <div className="flex justify-between font-bold text-neutral-900">
              <span>Total Pesanan:</span>
              <span className="text-base text-neutral-900 font-heading">{currentSizeObj.formattedPrice}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-emerald-700">
              <Check className="w-3.5 h-3.5" />
              <span>Termasuk Signature Satin Dustbag &amp; Tali Selempang</span>
            </div>
          </div>

          <div>
            <label htmlFor="orderName" className="block font-bold text-neutral-800 uppercase tracking-wider text-[10px] mb-1">
              Nama Lengkap Pemesan *
            </label>
            <input 
              type="text" 
              id="orderName" 
              required 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Contoh: Amanda Putri" 
              className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:border-neutral-900 text-neutral-900 text-xs transition" 
            />
          </div>

          <div>
            <label htmlFor="orderCity" className="block font-bold text-neutral-800 uppercase tracking-wider text-[10px] mb-1">
              Kota / Kecamatan Tujuan Pengiriman *
            </label>
            <input 
              type="text" 
              id="orderCity" 
              required 
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Contoh: Lowokwaru, Malang" 
              className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:border-neutral-900 text-neutral-900 text-xs transition" 
            />
          </div>

          <div>
            <label htmlFor="orderNote" className="block font-bold text-neutral-800 uppercase tracking-wider text-[10px] mb-1">
              Catatan Khusus (Opsional)
            </label>
            <textarea 
              id="orderNote" 
              rows={2} 
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Contoh: Request bungkus pita kado / pesan kartu ucapan" 
              className="w-full px-3.5 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:border-neutral-900 text-neutral-900 text-xs transition" 
            />
          </div>

          <button 
            type="submit" 
            className="w-full py-3.5 mt-2 bg-neutral-900 hover:bg-black text-white font-bold text-xs uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 transition cursor-pointer shadow-md"
          >
            <Send className="w-4 h-4" />
            <span>Kirim Pesanan ke WhatsApp Admin</span>
          </button>

          <p className="text-[10px] text-neutral-500 text-center">
            Pesanan langsung terhubung ke layanan pelanggan resmi Nusa Crochet &amp; Crafts.
          </p>

        </form>
      </div>
    </div>
  );
}
