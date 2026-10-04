/**
 * Interactive Logic for Tas Rajut Landing Page
 * Inspired by Pinterest 3D Product Presentation
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Product State ---
  const state = {
    selectedColor: 'lilac',
    selectedSize: 'M',
    price: 229000,
    audioEnabled: true
  };

  // Colorways Data
  const colorways = {
    lilac: {
      id: 'lilac',
      name: 'Lilac Dusk (Lavender Cream)',
      badge: 'Bestseller No. 1',
      image: 'assets/images/tas_rajut_lilac.png',
      giantText: 'RAJOET',
      accentColor: '#c084fc',
      bgGradient: 'radial-gradient(ellipse at 50% 40%, #7e22ce 0%, #4c1d95 45%, #2e1065 100%)',
      glow: 'rgba(192, 132, 252, 0.55)',
      desc: 'Perpaduan benang katun lilac pastel yang manis dan lembut dengan aksen cream ivory natural. Cocok untuk hangout santai maupun acara semi-formal.'
    },
    sage: {
      id: 'sage',
      name: 'Sage Meadow (Mint Matcha)',
      badge: 'Natural Organic Series',
      image: 'assets/images/tas_rajut_sage.png',
      giantText: 'ORGANIC',
      accentColor: '#34d399',
      bgGradient: 'radial-gradient(ellipse at 50% 40%, #059669 0%, #064e3b 45%, #022c22 100%)',
      glow: 'rgba(52, 211, 153, 0.55)',
      desc: 'Warna sage green earthy bernuansa alam yang menyejukkan. Memberikan kesan estetik minimalis ala Korean & Scandinavian style.'
    },
    terracotta: {
      id: 'terracotta',
      name: 'Warm Terracotta (Autumn Spice)',
      badge: 'Limited Warm Edition',
      image: 'assets/images/tas_rajut_terracotta.png',
      giantText: 'AUTUMN',
      accentColor: '#fb923c',
      bgGradient: 'radial-gradient(ellipse at 50% 40%, #ea580c 0%, #9a3412 45%, #431407 100%)',
      glow: 'rgba(251, 146, 60, 0.55)',
      desc: 'Hangat, berani, dan berkarakter. Menghadirkan jalinan warna terracotta kaya pigmen dengan rumbai estetik pelengkap penampilan.'
    }
  };

  // Size Specifications Data
  const sizeSpecs = {
    S: {
      name: 'Mini Carry (S)',
      dimensions: '20 cm × 14 cm × 8 cm',
      capacity: 'Handphone, Dompet Mini, Lipstik, Kunci',
      weight: '280 gram',
      price: 189000,
      formattedPrice: 'Rp 189.000',
      sliderPos: '20%'
    },
    M: {
      name: 'Regular Chic (M)',
      dimensions: '25 cm × 18 cm × 10 cm',
      capacity: 'Dompet Panjang, HP, Bedak, Parfum, Sunglasses',
      weight: '360 gram',
      price: 229000,
      formattedPrice: 'Rp 229.000',
      sliderPos: '55%'
    },
    L: {
      name: 'Grand Tote (L)',
      dimensions: '32 cm × 24 cm × 12 cm',
      capacity: 'iPad / Tablet 11", Buku Catatan, Payung Lipat, Pouch Makeup',
      weight: '480 gram',
      price: 269000,
      formattedPrice: 'Rp 269.000',
      sliderPos: '90%'
    }
  };

  // DOM Elements
  const heroWrapper = document.getElementById('heroWrapper');
  const heroProductImg = document.getElementById('heroProductImg');
  const heroGiantText = document.getElementById('heroGiantText');
  const heroRadialGlow = document.getElementById('heroRadialGlow');
  const colorNameDisplay = document.getElementById('colorNameDisplay');
  const colorDescDisplay = document.getElementById('colorDescDisplay');
  const priceDisplay = document.getElementById('priceDisplay');
  const sizeIndicatorBar = document.getElementById('sizeIndicatorBar');
  const sizeLabelDisplay = document.getElementById('sizeLabelDisplay');
  const colorSwatches = document.querySelectorAll('.color-swatch');
  const sizePills = document.querySelectorAll('.size-pill');
  const orderModal = document.getElementById('orderModal');
  const openModalBtns = document.querySelectorAll('.open-order-modal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const whatsappOrderForm = document.getElementById('whatsappOrderForm');
  const particlesContainer = document.getElementById('particlesContainer');

  // --- Sound Effects using Web Audio API ---
  let audioCtx = null;
  function playClickSound(freq = 600, type = 'sine', duration = 0.08) {
    if (!state.audioEnabled) return;
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.5, audioCtx.currentTime + duration);
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      // Audio not supported or blocked
    }
  }

  // --- 3D Parallax Tilt Effect on Mouse Move ---
  const heroContainer = document.getElementById('heroInteractiveArea');
  if (heroContainer && heroProductImg) {
    heroContainer.addEventListener('mousemove', (e) => {
      const rect = heroContainer.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const tiltX = -(y / (rect.height / 2)) * 14;
      const tiltY = (x / (rect.width / 2)) * 16;

      heroProductImg.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.04, 1.04, 1.04) rotate(-5deg)`;
      
      // Giant text subtle parallax
      if (heroGiantText) {
        heroGiantText.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px)`;
      }

      // Radial glow follows mouse subtly
      if (heroRadialGlow) {
        heroRadialGlow.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
      }
    });

    heroContainer.addEventListener('mouseleave', () => {
      heroProductImg.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) rotate(-5deg)';
      if (heroGiantText) heroGiantText.style.transform = 'translate(0, 0)';
      if (heroRadialGlow) heroRadialGlow.style.transform = 'translate(0, 0)';
    });
  }

  // --- Create Floating Dust & Sparkle Particles ---
  function initParticles() {
    if (!particlesContainer) return;
    particlesContainer.innerHTML = '';
    const colors = ['#ffffff', '#f3e8ff', '#fed7aa', '#a7f3d0'];

    for (let i = 0; i < 24; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const size = Math.random() * 6 + 2;
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.background = colors[Math.floor(Math.random() * colors.length)];
      p.style.left = `${Math.random() * 85 + 5}%`;
      p.style.top = `${Math.random() * 80 + 10}%`;
      p.style.opacity = (Math.random() * 0.6 + 0.2).toString();
      p.style.animationDuration = `${Math.random() * 4 + 4}s`;
      p.style.animationDelay = `${Math.random() * 3}s`;
      particlesContainer.appendChild(p);
    }
  }
  initParticles();

  // --- Color Switcher Handler ---
  function switchColor(colorKey) {
    const data = colorways[colorKey];
    if (!data) return;
    state.selectedColor = colorKey;
    playClickSound(750, 'triangle');

    // Update active swatch state
    colorSwatches.forEach((swatch) => {
      if (swatch.dataset.color === colorKey) {
        swatch.classList.add('active');
      } else {
        swatch.classList.remove('active');
      }
    });

    // Animate Product Image Transition
    heroProductImg.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease';
    heroProductImg.style.opacity = '0';
    heroProductImg.style.transform = 'scale(0.85) rotate(-15deg)';

    setTimeout(() => {
      heroProductImg.src = data.image;
      heroProductImg.style.opacity = '1';
      heroProductImg.style.transform = 'scale(1) rotate(-5deg)';
    }, 200);

    // Update Giant Text
    if (heroGiantText) {
      heroGiantText.style.opacity = '0';
      setTimeout(() => {
        heroGiantText.textContent = data.giantText;
        heroGiantText.style.opacity = '1';
      }, 150);
    }

    // Update Background Theme & Glow
    if (heroWrapper) {
      heroWrapper.style.background = data.bgGradient;
    }
    if (heroRadialGlow) {
      heroRadialGlow.style.background = `radial-gradient(circle at 50% 50%, ${data.glow} 0%, rgba(0,0,0,0) 70%)`;
    }

    // Update Text Descriptions
    if (colorNameDisplay) colorNameDisplay.textContent = data.name;
    if (colorDescDisplay) colorDescDisplay.textContent = data.desc;

    // Update Modal input
    const modalColorInput = document.getElementById('modalSelectedColor');
    if (modalColorInput) modalColorInput.value = data.name;
  }

  // --- Size Selector Handler ---
  function switchSize(sizeKey) {
    const data = sizeSpecs[sizeKey];
    if (!data) return;
    state.selectedSize = sizeKey;
    state.price = data.price;
    playClickSound(520, 'sine');

    // Update size pills
    sizePills.forEach((pill) => {
      if (pill.dataset.size === sizeKey) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });

    // Update Slider & Labels
    if (sizeIndicatorBar) {
      sizeIndicatorBar.style.width = data.sliderPos;
    }
    if (sizeLabelDisplay) {
      sizeLabelDisplay.innerHTML = `<span class="font-bold">${data.name}</span> • Dimensi: ${data.dimensions}`;
    }
    if (priceDisplay) {
      priceDisplay.textContent = data.formattedPrice;
    }

    // Update Modal input
    const modalSizeInput = document.getElementById('modalSelectedSize');
    if (modalSizeInput) modalSizeInput.value = `${data.name} (${data.formattedPrice})`;
  }

  // --- Event Listeners for Swatches & Sizes ---
  colorSwatches.forEach((swatch) => {
    swatch.addEventListener('click', () => {
      const color = swatch.dataset.color;
      switchColor(color);
    });
  });

  sizePills.forEach((pill) => {
    pill.addEventListener('click', () => {
      const size = pill.dataset.size;
      switchSize(size);
    });
  });

  // --- WhatsApp Order Modal Controls ---
  openModalBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      playClickSound(880, 'triangle');
      const currentColor = colorways[state.selectedColor];
      const currentSize = sizeSpecs[state.selectedSize];

      const modalColor = document.getElementById('modalSelectedColor');
      const modalSize = document.getElementById('modalSelectedSize');
      const modalPrice = document.getElementById('modalPrice');
      const modalImg = document.getElementById('modalProductImg');

      if (modalColor) modalColor.value = currentColor.name;
      if (modalSize) modalSize.value = currentSize.name;
      if (modalPrice) modalPrice.value = currentSize.formattedPrice;
      if (modalImg) modalImg.src = currentColor.image;

      orderModal.classList.add('active');
    });
  });

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      orderModal.classList.remove('active');
    });
  }

  // Close modal when clicking outer backdrop
  if (orderModal) {
    orderModal.addEventListener('click', (e) => {
      if (e.target === orderModal) {
        orderModal.classList.remove('active');
      }
    });
  }

  // --- Form WhatsApp Submit ---
  if (whatsappOrderForm) {
    whatsappOrderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('custName').value.trim() || 'Pelanggan';
      const city = document.getElementById('custCity').value.trim() || 'Indonesia';
      const note = document.getElementById('custNote').value.trim() || '-';
      const color = colorways[state.selectedColor].name;
      const size = sizeSpecs[state.selectedSize].name;
      const price = sizeSpecs[state.selectedSize].formattedPrice;

      // WhatsApp formatted message
      const message = `Halo Admin Rajutan.co! ✨%0A%0ASaya ingin memesan Tas Rajut Handmade:%0A━━━━━━━━━━━━━━━━━%0A👜 *Produk:* Premium Chunky Crochet Bag%0A🎨 *Pilihan Warna:* ${encodeURIComponent(color)}%0A📏 *Ukuran:* ${encodeURIComponent(size)}%0A💰 *Harga:* ${encodeURIComponent(price)}%0A👤 *Nama Pemesan:* ${encodeURIComponent(name)}%0A📍 *Kota Pengiriman:* ${encodeURIComponent(city)}%0A📝 *Catatan Khusus:* ${encodeURIComponent(note)}%0A━━━━━━━━━━━━━━━━━%0AMohon info ketersediaan slot pengerjaan dan ongkir ya. Terima kasih! 🙏`;

      // Replace with your real WhatsApp number or default business number
      const waNumber = '6281234567890';
      window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${message}`, '_blank');
      orderModal.classList.remove('active');
    });
  }

  // --- Mobile Menu Toggle ---
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // --- Smooth Scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
          if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
          }
        }
      }
    });
  });

  // Initial sound on first user interaction
  document.body.addEventListener('click', () => {
    if (!audioCtx) {
      try {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      } catch (e) {}
    }
  }, { once: true });
});
