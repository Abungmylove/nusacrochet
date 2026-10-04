import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import { COLORWAYS, SIZE_SPECS } from '../data/products';

export default function OrderModal({ isOpen, onClose, selectedColor, selectedSize }) {
  if (!isOpen) return null;

  const currentColor = COLORWAYS[selectedColor] || COLORWAYS.lilac;
  const currentSize = SIZE_SPECS[selectedSize] || SIZE_SPECS.M;

  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const customerName = name.trim() || 'Pelanggan';
    const destination = city.trim() || 'Indonesia';
    const notes = note.trim() || '-';

    const message = `Halo Admin Nusa Crochet & Crafts! ✨%0A%0ASaya ingin memesan Tas Rajut Handmade:%0A━━━━━━━━━━━━━━━━━%0A👜 *Brand:* Nusa Crochet & Crafts%0A✨ *Varian:* ${encodeURIComponent(currentColor.name)}%0A📏 *Ukuran:* ${encodeURIComponent(currentSize.name)}%0A💰 *Harga:* ${encodeURIComponent(currentSize.formattedPrice)}%0A🌱 *Spesifikasi:* Export Quality • Eco Friendly Materials%0A👤 *Nama Pemesan:* ${encodeURIComponent(customerName)}%0A📍 *Alamat/Kota Tujuan:* ${encodeURIComponent(destination)}%0A📝 *Catatan Khusus:* ${encodeURIComponent(notes)}%0A━━━━━━━━━━━━━━━━━%0AMohon konfirmasi ketersediaan slot pengerjaan dan estimasi ongkir ya. Terima kasih! 🙏`;

    const waNumber = '6281234567890';
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${message}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl glass-card p-6 md:p-8 bg-[#1a0e2f]/95 border border-purple-400/30 shadow-2xl">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full glass-pill text-white/70 hover:text-white transition cursor-pointer"
          aria-label="Tutup Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5 mb-6">
          <div className="w-12 h-12 rounded-2xl overflow-hidden bg-purple-950/60 p-1 border border-white/20 shrink-0">
            <img src={currentColor.image} alt={currentColor.name} className="w-full h-full object-contain" />
          </div>
          <div>
            <h3 className="text-lg font-bold font-heading">Pemesanan Nusa Crochet &amp; Crafts</h3>
            <p className="text-xs text-white/60">Export Quality &bull; Eco Friendly &bull; Handmade by Women Artisans</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-white/70 mb-1">Varian Terpilih</label>
              <input 
                type="text" 
                value={currentColor.name} 
                readOnly 
                className="w-full px-3 py-2 rounded-xl bg-white/10 border border-white/20 text-white font-medium focus:outline-none cursor-not-allowed" 
              />
            </div>
            <div>
              <label className="block font-semibold text-white/70 mb-1">Ukuran Terpilih</label>
              <input 
                type="text" 
                value={`${currentSize.name} (${currentSize.formattedPrice})`} 
                readOnly 
                className="w-full px-3 py-2 rounded-xl bg-white/10 border border-white/20 text-white font-medium focus:outline-none cursor-not-allowed" 
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-white/70 mb-1">Total Harga Produk</label>
            <div className="w-full px-3 py-2.5 rounded-xl bg-purple-500/20 border border-purple-400/40 text-purple-200 font-bold text-sm">
              {currentSize.formattedPrice} <span className="text-[10px] text-white/60 font-normal">(Free Dustbag &amp; Tali Selempang)</span>
            </div>
          </div>

          <div>
            <label htmlFor="custName" className="block font-semibold text-white/70 mb-1">Nama Lengkap Pemesan *</label>
            <input 
              type="text" 
              id="custName" 
              required 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Contoh: Amanda Putri" 
              className="w-full px-3 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-purple-400 transition" 
            />
          </div>

          <div>
            <label htmlFor="custCity" className="block font-semibold text-white/70 mb-1">Kota / Kecamatan Tujuan Pengiriman *</label>
            <input 
              type="text" 
              id="custCity" 
              required 
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Contoh: Sukolilo, Surabaya" 
              className="w-full px-3 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-purple-400 transition" 
            />
          </div>

          <div>
            <label htmlFor="custNote" className="block font-semibold text-white/70 mb-1">Catatan Khusus (Opsional)</label>
            <textarea 
              id="custNote" 
              rows={2} 
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Contoh: Request pita kado / pesan ucapan khusus" 
              className="w-full px-3 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-purple-400 transition" 
            />
          </div>

          <button 
            type="submit" 
            className="w-full py-3 mt-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/40 transition cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Kirim Pesanan ke WhatsApp Admin</span>
          </button>

        </form>
      </div>
    </div>
  );
}
