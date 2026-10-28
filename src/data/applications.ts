// src/data/applications.ts - Application Scenarios for GPS Muscat

export interface ApplicationScenario {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  idealFor: string[];
  recommendedGear: string[];
  tag: string;
}

export const applicationScenarios: ApplicationScenario[] = [
  {
    id: "residential-villas",
    title: "Residential Villas & Compounds",
    subtitle: "Convenience, Family Safety & Smartphone Access",
    description: "Sliding and swing gate motors, long-range wireless remotes, anti-crush photocells, and smart video/app entry for private villas and residential developments in Muscat.",
    idealFor: [
      "Private villas & luxury residences",
      "Gated residential communities",
      "Perimeter pedestrian wicket gates",
      "Private garage automation"
    ],
    recommendedGear: [
      "600kg - 1000kg Sliding Motors",
      "Articulated Swing Gate Arms",
      "Waterproof Keypads & Remotes",
      "Safety Infrared Photocells"
    ],
    tag: "Residential"
  },
  {
    id: "commercial-properties",
    title: "Commercial & Office Properties",
    subtitle: "High-Traffic Parking & Multi-Tenant Access",
    description: "High-cycle boom barriers, employee RFID card access control, magnetic locks, push-to-exit buttons, and visitor management systems for commercial centers, clinics, and office complexes.",
    idealFor: [
      "Commercial office buildings",
      "Shopping plazas & retail parking",
      "Hospitals, clinics & educational campuses",
      "Bank branches & financial institutions"
    ],
    recommendedGear: [
      "Rapid Boom Barriers (3m - 4m)",
      "Standalone RFID Card Readers",
      "280kg / 500kg Magnetic EM Locks",
      "Motorized Sliding Glass Operators"
    ],
    tag: "Commercial"
  },
  {
    id: "industrial-sites",
    title: "Industrial & Logistics Sites",
    subtitle: "Heavy-Tonnage Gates & Perimeter Security",
    description: "Extra heavy-duty sliding motors for cantilevered or steel industrial gates, 6-meter boom barriers for trucks, inductive vehicle loops, and rugged weatherproof power supplies.",
    idealFor: [
      "industrial warehouses",
      "Logistics hubs & freight yards",
      "Factory perimeters & utility sub-stations",
      "Vehicle fleet depots & container terminals"
    ],
    recommendedGear: [
      "1500kg - 2500kg Heavy Industrial Motors",
      "6-Meter Aluminum Boom Arm Barriers",
      "Inductive Ground Loop Vehicle Detectors",
      "High-Power Regulated 24V Enclosures"
    ],
    tag: "Industrial"
  }
];
