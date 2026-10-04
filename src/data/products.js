const base = import.meta.env.BASE_URL || '/';

export const PRODUCT_DATA = {
  id: 'nusa-signature-chunky',
  name: 'THE SIGNATURE CHUNKY',
  collection: 'ORGANIC COTTON ARTISAN SERIES',
  price: 229000,
  formattedPrice: 'Rp 229.000',
  usdPrice: '$15.00 USD',
  rating: 5.0,
  reviewCount: 148,
  badge: 'EXPORT QUALITY',
  
  description: 'Handcrafted from 100% certified organic cotton chunky yarn with reinforced double-stitch weave. Designed for timeless elegance, maximum durability, and ergonomic comfort for everyday essentials.',
  
  ownerStatement: 'Empowering women with crochets & crafts talents from various areas. Export quality, eco friendly materials.',

  colorways: [
    {
      id: 'lilac',
      name: 'LILAC / CREAM IVORY',
      status: 'IN STOCK — READY TO SHIP',
      colorHex: '#c084fc',
      mainImage: `${base}images/tas_rajut_lilac.png`,
      angles: [
        { label: 'Front Angle', src: `${base}images/tas_rajut_lilac.png` },
        { label: 'Macro Texture', src: `${base}images/macro_yarn_clasp.jpg` },
        { label: 'Lifestyle Carry', src: `${base}images/lifestyle_model.jpg` },
        { label: 'Artisan Hands', src: `${base}images/social_1.jpg` }
      ]
    },
    {
      id: 'sage',
      name: 'SAGE GREEN / MATCHA',
      status: 'IN STOCK — READY TO SHIP',
      colorHex: '#34d399',
      mainImage: `${base}images/tas_rajut_sage.png`,
      angles: [
        { label: 'Front Angle', src: `${base}images/tas_rajut_sage.png` },
        { label: 'Macro Texture', src: `${base}images/macro_yarn_clasp.jpg` },
        { label: 'Lifestyle Carry', src: `${base}images/lifestyle_model.jpg` },
        { label: 'Cafe Styling', src: `${base}images/social_2.jpg` }
      ]
    },
    {
      id: 'terracotta',
      name: 'WARM TERRACOTTA / APRICOT',
      status: 'LIMITED RUN — ONLY 8 LEFT',
      colorHex: '#fb923c',
      mainImage: `${base}images/tas_rajut_terracotta.png`,
      angles: [
        { label: 'Front Angle', src: `${base}images/tas_rajut_terracotta.png` },
        { label: 'Macro Texture', src: `${base}images/macro_yarn_clasp.jpg` },
        { label: 'Lifestyle Carry', src: `${base}images/lifestyle_model.jpg` },
        { label: 'Artisan Hands', src: `${base}images/social_1.jpg` }
      ]
    }
  ],

  sizes: [
    {
      key: 'S',
      label: 'SMALL',
      dimensions: '20 × 14 × 8 CM',
      capacity: 'Cardholder, Smartphone, Lip balm, Keys',
      price: 189000,
      formattedPrice: 'Rp 189.000',
      weight: '280g'
    },
    {
      key: 'M',
      label: 'MEDIUM',
      dimensions: '25 × 18 × 10 CM',
      capacity: 'Long Wallet, Phone, Powder, Perfume, Sunglasses',
      price: 229000,
      formattedPrice: 'Rp 229.000',
      weight: '360g',
      isPopular: true
    },
    {
      key: 'L',
      label: 'LARGE',
      dimensions: '32 × 24 × 12 CM',
      capacity: 'iPad / Tablet 11", Journal, Compact Umbrella, Makeup Pouch',
      price: 269000,
      formattedPrice: 'Rp 269.000',
      weight: '480g'
    }
  ],

  features: [
    {
      title: 'ECO FRIENDLY MATERIALS',
      desc: '100% sustainable organic cotton yarn dyed with gentle, non-toxic vegetal pigments that are biodegradable and hypoallergenic.'
    },
    {
      title: 'EXPORT QUALITY CRAFTSMANSHIP',
      desc: 'Built with dense dual-pass interlocking knots. Undergoes multi-stage quality control to guarantee shape retention and zero sagging under everyday load.'
    },
    {
      title: 'WOMEN ARTISAN EMPOWERMENT',
      desc: 'Direct ethical partnership empowering over 120+ skilled female artisans across Indonesian regencies with living wages and flexible home-based production.'
    },
    {
      title: 'ELECTROPLATED GOLD HARDWARE',
      desc: 'Precision rotary turn-lock clasp and strap clips with anti-corrosion gold plating that withstands humidity and daily friction.'
    }
  ],

  specs: [
    { label: 'Origin', value: 'Handmade in Indonesia (Export Standard)' },
    { label: 'Material', value: '100% Sustainable Cotton Chunky Yarn' },
    { label: 'Hardware', value: 'Corrosion-Resistant Gold Zinc Alloy' },
    { label: 'Closure', value: 'Rotary Turn-Lock Clasp' },
    { label: 'Inclusions', value: 'Signature Satin Dustbag, Detachable Strap' }
  ],

  socialGallery: [
    {
      id: 1,
      image: `${base}images/social_1.jpg`,
      caption: 'Handcrafted with patience and dedication by women artisans.'
    },
    {
      id: 2,
      image: `${base}images/lifestyle_model.jpg`,
      caption: 'Effortless minimalism for modern global streetwear.'
    },
    {
      id: 3,
      image: `${base}images/social_2.jpg`,
      caption: 'Parisian cafe morning essentials with The Signature Chunky.'
    },
    {
      id: 4,
      image: `${base}images/macro_yarn_clasp.jpg`,
      caption: 'Macro precision: organic textures and reflective gold clasp.'
    }
  ]
};
