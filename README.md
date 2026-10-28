# GPS Muscat | Gate Automation & Access Control

[![GPS Muscat](https://img.shields.io/badge/Status-Active-brightgreen)](https://www.gpsmuscat.com)
[![Location](https://img.shields.io/badge/Location-Muscat%2C%20Oman-blue)](https://www.gpsmuscat.com)

Official marketing website for **GPS Muscat**, Oman's premier technical supplier of gate automation equipment, sliding & swing gate motors, boom barriers, access control systems, magnetic locks, glass door automation, and security accessories.

---

## 📁 Repository Structure

```text
marketing/
├── public/                # Static assets directly served at root
│   ├── assets/
│   │   ├── brands/        # Official partner brand SVGs
│   │   ├── images/        # High-res equipment imagery (sliding, boom barriers, access)
│   │   ├── logo/          # Company vector branding (dark/light mode SVGs)
│   │   └── promo/         # Default promotional poster assets
│   ├── CNAME              # Custom domain configuration (www.gpsmuscat.com)
│   ├── favicon.ico        # Site favicon
│   └── favicon.svg        # Scalable SVG favicon
├── src/
│   ├── components/        # Astro reusable UI components
│   │   ├── Header.astro              # Minimalist nav with light/dark toggle
│   │   ├── Hero.astro                # Entrance showcase with zero-lag equipment visualizer
│   │   ├── PromotionsCarousel.astro  # 9:16 Story Promotions Carousel (Supabase synced)
│   │   ├── WhyChooseUs.astro         # Authority & Muscat warehouse pillars
│   │   ├── BrandMarquee.astro        # Hardware-accelerated infinite brand ribbon
│   │   ├── ProductCatalog.astro      # 6-category technical equipment catalog
│   │   ├── ApplicationsSection.astro # Tailored project deployment scenarios
│   │   ├── QuoteModal.astro          # Interactive quotation modal dialog
│   │   └── Footer.astro              # Branch contacts (Al Khoudh & Ghala) & working hours
│   ├── data/              # Static typed data sources
│   │   ├── applications.ts
│   │   ├── brands.ts
│   │   ├── products.ts
│   │   └── promotions.ts
│   ├── layouts/
│   │   └── BaseLayout.astro  # Master HTML wrapper with SEO, JSON-LD, & theme synchronization
│   ├── lib/
│   │   └── supabase.ts       # Supabase client & promotions data access layer
│   ├── pages/
│   │   ├── index.astro       # Main marketing landing page
│   │   └── admin.astro       # Staff promotions management portal
│   └── styles/
│       └── global.css        # Tailwind CSS entry & custom design tokens
├── astro.config.mjs       # Astro configuration with Tailwind Vite plugin
├── package.json           # Dependencies and scripts
└── tsconfig.json          # TypeScript configuration
```

---

## ✨ Features & Technology Stack

- **Astro 7 (SSG)**: Blazing fast static site generation with zero client-side JavaScript by default.
- **Tailwind CSS 4**: Modern utility-first styling with automatic system dark/light mode synchronization.
- **Supabase Backend Integration**: Powers live promotions and staff poster uploads.
- **Zero-Lag Visualizer**: Pre-rendered stacked layer cross-fading for instantaneous equipment tab switching.
- **Hardware-Accelerated Marquee**: GPU-composed infinite logo ticker with auto-pause on hover.
- **Interactive Quotation Modal**: Quick quotation request routing directly to branch WhatsApp channels.
- **SEO & Schema.org**: Fully structured OpenGraph tags, canonical URLs, and `LocalBusiness` JSON-LD data.

---

## 🚀 Local Development

To run the project locally:

```bash
# Install dependencies
npm install

# Start local Astro development server
npm run dev

# Build production bundle
npm run build
```

---

## 📞 Branch Contact Information

- **Al Khoudh Branch**:
  - Phone / WhatsApp: [+968 9121 4949](https://wa.me/96891214949)
  - Location: Al Khoudh, Muscat, Oman
- **Ghala Branch**:
  - Phone / WhatsApp: [+968 9744 0010](https://wa.me/96897440010)
  - Location: Ghala Industrial, Muscat, Oman

---

## 📄 License & Copyright

© 2026 **GPS Muscat** (Gulf Pioneer Star). All rights reserved.
