// src/data/promotions.ts - Promotions Data Engine for GPS Muscat

export interface Promotion {
  id: string;
  product: string;
  title: string;
  tag: string;
  description: string;
  validTill: string;
  ctaText: string;
  ctaCategory: string;
  image: string; // Image filename or data URL
  active: boolean;
}

export const initialPromotions: Promotion[] = [
  {
    id: "powersupply_promo",
    product: "Access Control Power Supply Unit",
    title: "12V Access Control Power Supply & Battery Backup in Muscat",
    tag: "Promo 01",
    description: "Regulated 12V access control power supply unit featuring battery backup terminal, adjustable unlock delay, and circuit protection for gates and doors in Oman.",
    validTill: "Until Stock Last",
    ctaText: "Inquire Now",
    ctaCategory: "Access Control",
    image: "/assets/promo/img/powersupply_promo.jpeg",
    active: true
  },
  {
    id: "remoteblack_promo",
    product: "Multi-Frequency Gate Remotes",
    title: "Multi-Frequency Remote Transmitters for Gate Motors",
    tag: "Promo 02",
    description: "Heavy-duty 4-button multi-frequency remote controls compatible with standard 433MHz rolling code receivers for gates and barriers in Muscat.",
    validTill: "Until Stock Last",
    ctaText: "Inquire Now",
    ctaCategory: "Gate Automation",
    image: "/assets/promo/img/remoteblack_promo.jpeg",
    active: true
  },
  {
    id: "remoteblue_promo",
    product: "Rolling Code Remote Keyfobs",
    title: "Compact Gate & Barrier Keyfobs (Muscat Stock)",
    tag: "Promo 03",
    description: "Compact dual-channel high-security remote controllers with extended wireless range, robust keychain clip, and long battery life in Oman.",
    validTill: "Until Stock Last",
    ctaText: "Inquire Now",
    ctaCategory: "Gate Automation",
    image: "/assets/promo/img/remoteblue_promo.jpeg",
    active: true
  },
  {
    id: "smartlock_promo",
    product: "Biometric Smart Lock System",
    title: "Smart Digital Door Lock & Biometric Entry in Muscat",
    tag: "Promo 04",
    description: "Premium keyless smart door lock with fingerprint scanner, digital touch keypad, RFID card reader, emergency mechanical key, and smartphone app integration.",
    validTill: "Until Stock Last",
    ctaText: "Inquire Now",
    ctaCategory: "Access Control",
    image: "/assets/promo/img/smartlock_promo.jpeg",
    active: true
  }
];
