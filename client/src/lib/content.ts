/**
 * CENTRALIZED CONTENT CONFIGURATION
 * All copy, URLs, and CTA links are managed here
 * All external links and CTAs point to https://alwgen.com
 */

export const SITE_CONFIG = {
  name: "Wonosobo Art Gallery",
  description: "Premium contemporary art gallery based in Wonosobo, Indonesia",
  ctaUrl: "https://alwgen.com",
  socialLinks: {
    instagram: "https://alwgen.com",
    facebook: "https://alwgen.com",
    twitter: "https://alwgen.com",
    linkedin: "https://alwgen.com",
  },
};

export const NAV_CONTENT = {
  leftLabel: "Wonosobo Gallery",
  links: [
    { label: "Portfolio", href: "/portfolio" },
    { label: "Shop", href: "/shop" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],
  cartLabel: "Cart — 0",
};

export const EDITORIAL_CONTENT = {
  text: "Nestled in the misty highlands of Central Java, Wonosobo Art Gallery showcases contemporary and traditional Indonesian art. Our curated collection celebrates the region's rich cultural heritage and emerging artistic voices.",
  imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663675158559/kuFQvrmcSseVhGQc.png",
};

export const HERO_CONTENT = {
  title: "Wonosobo",
  subtitle: "Contemporary Art",
  year: "Est. 2020",
  description: "Wonosobo, Indonesia · Contemporary & Traditional · Curated Collections",
  imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663675158559/IloKZrXndHQzfFFc.png",
};

export const FEATURES_CONTENT = [
  {
    number: "01",
    title: "Authentic Curation",
    description: "Each piece is carefully selected to represent the finest contemporary and traditional Indonesian art, with emphasis on local Wonosobo artists.",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663675158559/FpaNHomllGfgxKwM.png",
  },
  {
    number: "02",
    title: "Artisan Craftsmanship",
    description: "We work directly with local artisans and craftspeople, ensuring fair trade practices and supporting the community.",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663675158559/qAEtGEJuaqUdsMUp.png",
  },
  {
    number: "03",
    title: "Cultural Heritage",
    description: "Our gallery preserves and celebrates the rich artistic traditions of Wonosobo while embracing contemporary innovation.",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663675158559/kuFQvrmcSseVhGQc.png",
  },
];

export const MASTERPIECES_CONTENT = {
  title: "Discover our curated collection of masterpieces from emerging and established artists",
  imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663675158559/FpaNHomllGfgxKwM.png",
  label: "Featured Collection",
};

export const ARTWORKS_CONTENT = {
  title: "All Artworks",
  searchPlaceholder: "Search artworks...",
  filters: ["All", "Paintings", "Sculptures", "Textiles", "Mixed Media"],
  sortOptions: ["Default", "Price: Low to High", "Price: High to Low", "Newest"],
  artworks: [
    {
      id: 1,
      name: "Mountain Mist Series",
      price: "from $600",
      imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663675158559/FpaNHomllGfgxKwM.png",
      category: "Paintings",
      featured: true,
    },
    {
      id: 2,
      name: "Volcanic Stone Sculpture",
      price: "from $800",
      imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663675158559/qAEtGEJuaqUdsMUp.png",
      category: "Sculptures",
    },
    {
      id: 3,
      name: "Heritage Textile",
      price: "from $950",
      imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663675158559/kuFQvrmcSseVhGQc.png",
      category: "Textiles",
    },
    {
      id: 4,
      name: "Contemporary Landscape",
      price: "from $480",
      imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663675158559/IloKZrXndHQzfFFc.png",
      category: "Paintings",
      featured: true,
    },
    {
      id: 5,
      name: "Abstract Expression",
      price: "from $660",
      imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663675158559/FpaNHomllGfgxKwM.png",
      category: "Mixed Media",
    },
    {
      id: 6,
      name: "Stone & Wood Harmony",
      price: "from $530",
      imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663675158559/qAEtGEJuaqUdsMUp.png",
      category: "Sculptures",
    },
  ],
};

export const GALLERY_CTA_CONTENT = {
  title: "Visit Our Physical Gallery",
  description: "Experience the art in person at our gallery in Wonosobo. Open by appointment.",
  imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663675158559/kuFQvrmcSseVhGQc.png",
  ctaText: "Schedule Visit",
  ctaUrl: SITE_CONFIG.ctaUrl,
};

export const FAQ_CONTENT = [
  {
    question: "How can I purchase artwork?",
    answer: "You can browse our collection online and place orders through our shop. We also welcome inquiries for custom commissions and direct purchases.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship internationally. Shipping costs and delivery times vary by location. Contact us for specific details.",
  },
  {
    question: "Can I visit the gallery in person?",
    answer: "Absolutely! We welcome visitors by appointment. Please contact us to schedule your visit.",
  },
  {
    question: "Do you work with artists and collectors?",
    answer: "Yes, we collaborate with artists and collectors. We're always interested in featuring new talent and building relationships with art enthusiasts.",
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for most items. Custom pieces and artworks are non-returnable unless damaged.",
  },
];

export const FOOTER_CONTENT = {
  city: "Wonosobo",
  address: "Central Java, Indonesia\nHighland Art District\nOpen by Appointment",
  socials: [
    { label: "IG", url: SITE_CONFIG.socialLinks.instagram },
    { label: "FB", url: SITE_CONFIG.socialLinks.facebook },
    { label: "TW", url: SITE_CONFIG.socialLinks.twitter },
  ],
  brand: "© 2024 Wonosobo Art Gallery. All rights reserved.",
};

export const PORTFOLIO_PAGE = {
  title: "Our Portfolio",
  description: "Explore our complete collection of contemporary and traditional art",
  sections: [
    {
      title: "Contemporary Paintings",
      description: "Modern interpretations of landscape and abstract themes",
    },
    {
      title: "Traditional Textiles",
      description: "Hand-woven pieces celebrating Indonesian heritage",
    },
    {
      title: "Sculptural Works",
      description: "Stone and wood sculptures by local artisans",
    },
  ],
};

export const SHOP_PAGE = {
  title: "Shop",
  description: "Discover and purchase original artworks and curated pieces",
  categories: ["All", "Paintings", "Sculptures", "Textiles", "Prints", "Accessories"],
};

export const GALLERY_PAGE = {
  title: "Gallery",
  description: "Visit our physical gallery in Wonosobo or explore virtually",
  hours: "Open by Appointment",
  address: "Wonosobo, Central Java, Indonesia",
};

export const CONTACT_PAGE = {
  title: "Get in Touch",
  description: "We'd love to hear from you",
  email: "info@alwgen.com",
  phone: "+62 (0) XXX-XXXX",
  address: "Wonosobo, Central Java, Indonesia",
  ctaUrl: SITE_CONFIG.ctaUrl,
};
