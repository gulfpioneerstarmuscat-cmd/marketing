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
    origin: "Italy",
    specialty: "Sliding & Swing Gate Motors, Underground Systems & Electronics",
    badge: "Made in Italy"
  },
  {
    id: "bft",
    name: "BFT",
    logo: "/assets/brands/BFT.svg",
    origin: "Italy",
    specialty: "High-Cycle Boom Barriers, Gate Motors & Access Control",
    badge: "Automation Pioneer"
  },
  {
    id: "came",
    name: "CAME",
    logo: "/assets/brands/CAME.svg",
    origin: "Italy",
    specialty: "Automatic Barriers, Turnstiles & Sliding Entrance Operators",
    badge: "European Leader"
  },
  {
    id: "dea",
    name: "DEA System",
    logo: "/assets/brands/DEA.svg",
    origin: "Italy",
    specialty: "Heavy Industrial Gate Drives & Electronic Control Modules",
    badge: "Heavy Duty"
  },
  {
    id: "roger",
    name: "Roger Technology",
    logo: "/assets/brands/ROGER.svg",
    origin: "Italy",
    specialty: "Brushless Motor Automation & Super-Intensive Duty Barriers",
    badge: "Brushless Tech"
  },
  {
    id: "somfy",
    name: "Somfy",
    logo: "/assets/brands/Somfy.svg",
    origin: "France",
    specialty: "Smart Connected Gate Motors & Villa Automation Solutions",
    badge: "Smart Home"
  },
  {
    id: "hikvision",
    name: "Hikvision",
    logo: "/assets/brands/HIKVISION.svg",
    origin: "International",
    specialty: "Biometric Access Control, Face Terminals & RFID Controllers",
    badge: "Security Standard"
  },
  {
    id: "rib",
    name: "RIB",
    logo: "/assets/brands/RIB.svg",
    origin: "Italy",
    specialty: "Extra Heavy-Duty Industrial Sliding Gate Automation",
    badge: "Industrial Grade"
  },
  {
    id: "9-automation",
    name: "Automation Solutions",
    logo: "/assets/brands/9.svg",
    origin: "International",
    specialty: "Entrance Accessories, Transmitters, Relays & Hardware",
    badge: "Component Supply"
  }
];
