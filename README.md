# GPS Muscat | Gate Automation & Access Control

[![GPS Muscat](https://img.shields.io/badge/Status-Active-brightgreen)](https://www.gpsmuscat.com)
[![Location](https://img.shields.io/badge/Location-Muscat%2C%20Oman-blue)](https://www.gpsmuscat.com)

Official marketing website for **GPS Muscat**, Oman's premier technical supplier of gate automation equipment, sliding & swing gate motors, boom barriers, access control systems, magnetic locks, glass door automation, and security accessories.

---

## 📁 Repository Structure

```text
marketing/
├── CNAME                  # Custom domain configuration (www.gpsmuscat.com)
├── README.md              # Project technical documentation & guide
├── .gitignore             # Git ignore specification
├── index.html             # Main semantic HTML5 document
├── assets/
│   ├── logo/              # Brand logo images & icons
│   │   ├── GPSMUSCAT_Logo_black_blue_on_white_500x60.png
│   │   └── GPSMUSCAT_black.png
│   └── promo/             # Live Data Promotions Directory
│       ├── manifest.json  # Array of active promo IDs (max 10)
│       ├── img/           # 9:16 Instagram Story posters (.jpg, .png, .svg)
│       │   ├── promo_beninca600kg.jpg
│       │   ├── promo_boombarrier.jpg
│       │   └── promo_access_control.jpg
│       └── txt/           # JSON metadata files for promos
│           ├── promo_beninca600kg.json
│           ├── promo_boombarrier.json
│           └── promo_access_control.json
├── styles/                # Modular CSS Architecture
│   ├── style.css          # Master stylesheet entry point
│   ├── tokens.css         # Design tokens, variables, color palette, shadows
│   ├── base.css           # Resets, layout containers, typography defaults
│   ├── components.css     # Buttons, cards, 9:16 story frame, quote modal
│   └── sections.css       # Hero, promo carousel, category grids, footer, media queries
└── js/                    # Modular JavaScript (ES Modules)
    ├── script.js          # Main initialization entry script
    └── modules/           # Single-responsibility feature modules
        ├── navigation.js  # Mobile drawer menu & ScrollSpy nav indicator
        ├── carousel.js    # Live data promo carousel (manifest & JSON loader)
        ├── whatsapp.js    # Smart device-aware WhatsApp URL formatter
        ├── backToTop.js   # Smooth back-to-top button with footer displacement
        └── quoteModal.js  # Interactive quotation request modal dialog
```

---

## 🏷️ How to Add or Delete Promotions

The website features a **file-driven dynamic promotions engine**. To manage promotions:

### To Add a New Promotion:

1. Place the 9:16 story poster image in `assets/promo/img/` (e.g. `promo_myoffer.jpg`).
2. Create a matching JSON file in `assets/promo/txt/promo_myoffer.json`:
   ```json
   {
     "id": "promo_myoffer",
     "product": "Product Name",
     "title": "Promotion Title",
     "tag": "Promotion 04",
     "description": "Details of the offer...",
     "validTill": "30 Sep 2026",
     "ctaText": "Request Details",
     "ctaCategory": "Gate Automation",
     "image": "promo_myoffer.jpg"
   }
   ```
3. Add `"promo_myoffer"` to `assets/promo/manifest.json`.

### To Delete a Promotion:

1. Remove its key from `assets/promo/manifest.json`.
2. (Optional) Delete the corresponding files in `img/` and `txt/`.

> **Note**: If `validTill` is omitted or empty in JSON, the validity date badge is automatically hidden. The carousel automatically scales from 1 up to 10 max slides and hides arrow controls if only 1 promotion exists.

---

## ✨ Features & Technology Stack

- **Vanilla HTML5 & CSS3**: Pure, high-performance static web application built without heavy external framework overhead.
- **Dynamic File-Driven Promotions Engine**: Asynchronously loads 9:16 story images and JSON data directly from `assets/promo/`.
- **Modular CSS System**: Architected into `tokens.css`, `base.css`, `components.css`, and `sections.css` for clean maintainability.
- **ES6 JavaScript Modules**: Decoupled modules for navigation, carousel, quote modal, and WhatsApp link routing.
- **Interactive Sales Quote Modal**: Quick request form enabling users to submit inquiry details directly.
- **ScrollSpy Navigation**: Auto-highlights active header navigation links based on current scroll position.
- **SEO & Schema.org**: Fully optimized meta descriptions, OpenGraph tags, and JSON-LD structured business data.

---

## 🚀 Local Development

To run and preview the website locally:

1. Clone or open the repository folder in VS Code.
2. Launch a local web server (e.g. VS Code **Live Server**, `npx serve`, or `python -m http.server`).
3. Open `http://localhost:8080` in your browser.

---

## 📞 Branch Contact Information

- **Al Khoud Branch**:
  - Phone / WhatsApp: [+968 9121 4949](https://wa.me/96891214949)
  - Location: Al Khoud, Muscat, Oman
- **Ghala Branch**:
  - Phone / WhatsApp: [+968 9744 0010](https://wa.me/96897440010) / [+968 9755 1199](https://wa.me/96897551199)
  - Location: Ghala, Muscat, Oman

---

## 📄 License & Copyright

© 2026 **GPS Muscat**. All rights reserved.
