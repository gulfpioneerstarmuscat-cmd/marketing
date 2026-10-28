// src/data/products.ts - Product Categories Data for GPS Muscat

export interface ProductCategory {
  id: string;
  badge: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  tagColor: string;
}

export const productCategories: ProductCategory[] = [
  {
    id: "gate-automation",
    badge: "Gate Motors & Drives",
    title: "Sliding & Swing Gate Automation Motors",
    shortDesc: "Heavy-duty sliding gate motors, underground systems, and swing gate actuators in Muscat.",
    longDesc: "GPS Muscat supplies high-performance sliding and swing gate automation motors engineered for Oman's high-temperature climate. Ranging from 400kg residential villa motors to 2,000kg commercial and industrial gate drives from leading Italian and European manufacturers (Beninca, BFT, CAME, Roger Technology, DEA, and RIB).",
    highlights: [
      "Sliding gate motors (400kg, 600kg, 800kg, 1000kg, 1500kg, 2000kg)",
      "Articulated & telescopic swing gate arm kits for residential villas",
      "Underground concealed swing gate operators",
      "Heavy-duty steel & nylon gear racks (M4 / M6 pitch)",
      "Multi-frequency wireless remotes, control boards, & safety photocells"
    ],
    specs: [
      { label: "Capacity Range", value: "400kg to 2000kg" },
      { label: "Duty Cycle", value: "Residential to Intensive 24/7" },
      { label: "Voltage", value: "230V AC / 24V DC Low Voltage" },
      { label: "Operating Temp", value: "-20°C to +65°C Climate Rated" }
    ],
    tagColor: "cyan"
  },
  {
    id: "boom-barriers",
    badge: "Parking & Access",
    title: "Automatic Vehicle Boom Barriers",
    shortDesc: "High-cycle automatic vehicle barriers with straight, folding, and LED boom arms.",
    longDesc: "Rapid-opening automatic barrier systems for residential compounds, commercial building entrances, industrial logistics hubs, and security checkpoints across Muscat, Oman. Compatible with inductive loop vehicle sensors, RFID UHF long-range readers, and push-button stations from BFT, CAME, and Roger Technology.",
    highlights: [
      "Heavy-duty barrier cabinets with anti-corrosion coating",
      "Aluminum boom arms: 3m, 4m, 5m, and 6m lengths",
      "90-degree folding articulated boom arms for basement parking",
      "Integrated red/green LED arm illumination",
      "Safety pressure-wave rubber edges & auto-reversing sensors"
    ],
    specs: [
      { label: "Boom Length", value: "Up to 6 meters" },
      { label: "Opening Speed", value: "1.5s to 6.0s adjustable" },
      { label: "Arm Profiles", value: "Straight, Foldable, LED strip" },
      { label: "Duty Rating", value: "Continuous High-Cycle (100%)" }
    ],
    tagColor: "sky"
  },
  {
    id: "access-control",
    badge: "RFID & Biometrics",
    title: "Biometric & RFID Access Control Systems",
    shortDesc: "Standalone biometric scanners, RFID card readers, keypads, and GSM controllers.",
    longDesc: "Integrated security controllers and smart entrance hardware for doors, gates, and turnstiles in Muscat. Choose from digital PIN keypads, waterproof standalone card readers, UHF long-range windshield tag readers, and smartphone GSM mobile openers from Hikvision and Smatec.",
    highlights: [
      "Waterproof standalone RFID keypads & metal enclosures (IP68)",
      "Optical & capacitive biometric fingerprint readers",
      "UHF long-range vehicle identification readers (up to 12m)",
      "GSM cellular mobile gate openers with caller-ID whitelist",
      "125kHz EM & 13.56MHz Mifare smart cards and keyfobs"
    ],
    specs: [
      { label: "User Capacity", value: "1,000 to 10,000 users" },
      { label: "Protocols", value: "Wiegand 26/34, RS485, Standalone" },
      { label: "Enclosure", value: "IP68 Weatherproof Zinc-Alloy" },
      { label: "Authentication", value: "Fingerprint, Card, PIN, Phone" }
    ],
    tagColor: "indigo"
  },
  {
    id: "door-locks",
    badge: "Locks & Hardware",
    title: "Electromagnetic Locks & Architectural Hardware",
    shortDesc: "Electromagnetic (EM) locks, electric strike latches, drop bolts, and smart digital locks.",
    longDesc: "Industrial-grade electronic locking hardware for aluminum, wooden, metal, and glass pedestrian gates and doors across Muscat and Oman. Includes fail-safe and fail-secure options with high holding force.",
    highlights: [
      "Magnetic EM locks: 280kg (600lbs) and 500kg (1200lbs) holding force",
      "Electric rim strike locks for villa wicket entry gates",
      "Heavy-duty electric drop bolt locks with timer delays",
      "Smart biometric digital door locks with touch keypad",
      "Z and L mounting brackets for inward and outward opening doors"
    ],
    specs: [
      { label: "Holding Force", value: "280kg (600 lbs) / 500kg (1200 lbs)" },
      { label: "Operating Mode", value: "Fail-Safe (Power Off: Open) / Fail-Secure" },
      { label: "Power Input", value: "12V DC / 24V DC regulated" },
      { label: "Material", value: "High-strength anodized aluminum" }
    ],
    tagColor: "emerald"
  },
  {
    id: "glass-door",
    badge: "Automatic Glass",
    title: "Automatic Sliding Glass Door Operators",
    shortDesc: "Motorized automatic sliding glass door drive operators, microwave radars, and safety beams.",
    longDesc: "Whisper-quiet brushless drive mechanisms for automated frameless or framed glass entrances in commercial showrooms, banks, corporate headquarters, and retail outlets throughout Muscat and Oman.",
    highlights: [
      "Sliding glass door drive units with heavy-duty aluminum tracks",
      "Microwave motion radar opening sensors (adjustable sensitivity)",
      "Infrared safety presence beams preventing door closure on pedestrians",
      "Frameless glass clamp hangers and smooth floor guide rollers",
      "Emergency backup battery packs for power outage egress"
    ],
    specs: [
      { label: "Door Weight", value: "Single leaf 150kg / Bi-parting 2x 120kg" },
      { label: "Clear Opening", value: "700mm to 3000mm width" },
      { label: "Motor Type", value: "Brushless 24V DC with encoder" },
      { label: "Control", value: "Multi-function program selector switch" }
    ],
    tagColor: "amber"
  },
  {
    id: "accessories",
    badge: "Sensors & Power",
    title: "Gate Automation Accessories & Remote Controls",
    shortDesc: "Photocells, flashing safety lamps, inductive loop sensors, power supplies, and remotes.",
    longDesc: "Full inventory of installation, replacement, and auxiliary support accessories for security contractors and technicians in Muscat. Genuine spare parts, multi-frequency remotes, safety photocells, and backup power units from AALE, Smatec, and European manufacturers.",
    highlights: [
      "Infrared safety beam photocells (reflector & through-beam up to 20m)",
      "Inductive loop vehicle detectors for barrier and gate auto-closing",
      "LED flashing warning lamps with integrated 433MHz antennas",
      "Regulated 12V / 24V DC power supply boxes with UPS battery charging",
      "Multi-frequency rolling code and fixed code remote control transmitters"
    ],
    specs: [
      { label: "Photocell Range", value: "10m to 20m detection beam" },
      { label: "Power Output", value: "12V/24V 3A - 5A with battery backup" },
      { label: "Remote Frequency", value: "433.92MHz / 868MHz rolling code" },
      { label: "Warning Signal", value: "High-visibility Amber LED strobe" }
    ],
    tagColor: "rose"
  }
];
