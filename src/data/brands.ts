// src/data/brands.ts - Partner Brands Data for GPS Muscat

export interface Brand {
  id: string;
  name: string;
  logo: string;
  origin: string;
  specialty: string;
  badge: string;
}

export const partnerBrands: Brand[] = [
  {
    id: "beninca",
    name: "Beninca",
    logo: "/assets/brands/Beninca.svg",
    origin: "Made In Italy",
    specialty: "Sliding & Swing Gate Motors, Underground Systems & Electronics in Muscat",
    badge: "Made In Italy"
  },
  {
    id: "bft",
    name: "BFT",
    logo: "/assets/brands/BFT.svg",
    origin: "Made In Italy",
    specialty: "High-Cycle Boom Barriers, Gate Motors & Access Control in Oman",
    badge: "Made In Italy"
  },
  {
    id: "came",
    name: "CAME",
    logo: "/assets/brands/CAME.svg",
    origin: "Made In Italy",
    specialty: "Automatic Barriers, Turnstiles & Sliding Entrance Operators in Muscat",
    badge: "Made In Italy"
  },
  {
    id: "dea",
    name: "DEA System",
    logo: "/assets/brands/DEA.svg",
    origin: "Made In Italy",
    specialty: "Heavy Industrial Gate Drives & Electronic Control Modules in Oman",
    badge: "Made In Italy"
  },
  {
    id: "roger",
    name: "Roger Technology",
    logo: "/assets/brands/ROGER.svg",
    origin: "Made In Italy",
    specialty: "Brushless Motor Automation & Super-Intensive Duty Barriers in Muscat",
    badge: "Made In Italy"
  },
  {
    id: "somfy",
    name: "Somfy",
    logo: "/assets/brands/Somfy.svg",
    origin: "Made In France",
    specialty: "Smart Connected Gate Motors & Villa Automation Solutions in Oman",
    badge: "Made In France"
  },
  {
    id: "smatec",
    name: "Smatec",
    logo: "/assets/brands/smatec.svg",
    origin: "Our Brand",
    specialty: "Smart Access Control Systems, Keypads & Biometrics in Muscat",
    badge: "Our Brand"
  },
  {
    id: "hikvision",
    name: "Hikvision",
    logo: "/assets/brands/HIKVISION.svg",
    origin: "Made In China",
    specialty: "Biometric Face Terminals, Fingerprint Readers & RFID in Oman",
    badge: "Made In China"
  },
  {
    id: "rib",
    name: "RIB",
    logo: "/assets/brands/RIB.svg",
    origin: "Made In Italy",
    specialty: "Extra Heavy-Duty Industrial Sliding Gate Automation in Muscat",
    badge: "Made In Italy"
  },
  {
    id: "aale",
    name: "AALE",
    logo: "/assets/brands/9.svg",
    origin: "Our Brand",
    specialty: "Custom Electronic Gate Automation Accessories & Hardware in Oman",
    badge: "Our Brand"
  }
];
