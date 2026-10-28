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
    title: "Residential Villas & Gated Communities",
    subtitle: "Gate Automation, Safety Sensors & Smartphone Control",
    description: "Sliding and swing gate motors, long-range wireless remotes, anti-crush safety photocells, and smart video/app entry for private villas in Seeb, Al Khuwair, Qurum, Madinat Al Sultan Qaboos, and Al Mouj Muscat.",
    idealFor: [
      "Private luxury villas in Al Mouj & Qurum",
      "Gated residential communities in Seeb & Bawshar",
      "Perimeter pedestrian wicket gates with EM locks",
      "Smart garage & sliding gate automation"
    ],
    recommendedGear: [
      "400kg - 1000kg Sliding Gate Motors",
      "Articulated & Telescopic Swing Arms",
      "Waterproof IP68 Keypads & Remotes",
      "Safety Infrared Anti-Crush Photocells"
    ],
    tag: "Residential"
  },
  {
    id: "commercial-properties",
    title: "Commercial & Office Properties",
    subtitle: "High-Traffic Parking Barriers & Multi-Tenant Access",
    description: "Continuous-duty automatic boom barriers, employee RFID card readers, biometric facial recognition terminals, and electromagnetic door locks for commercial centers, clinics, and office towers in Al Khuwair, Bawshar, and Muscat.",
    idealFor: [
      "Commercial office buildings & corporate plazas",
      "Shopping centers & retail customer parking",
      "Hospitals, medical centers & university campuses",
      "Bank headquarters & secure financial facilities"
    ],
    recommendedGear: [
      "High-Speed Boom Barriers (3m - 6m)",
      "Standalone & Networked RFID Card Readers",
      "280kg / 500kg Magnetic EM Locks",
      "Automatic Sliding Glass Door Operators"
    ],
    tag: "Commercial"
  },
  {
    id: "industrial-sites",
    title: "Industrial & Logistics Sites",
    subtitle: "Heavy-Tonnage Gates & Perimeter Security",
    description: "Extra heavy-duty sliding gate motors up to 2,000kg for cantilevered or steel industrial gates, 6-meter truck boom barriers, inductive ground loops, and rugged weatherproof power supplies in Ghala Industrial and Rusayl.",
    idealFor: [
      "Industrial warehouses in Ghala & Rusayl",
      "Logistics hubs, freight yards & cargo terminals",
      "Factory perimeters & utility sub-stations",
      "Commercial fleet depots & container yards"
    ],
    recommendedGear: [
      "1500kg - 2000kg Industrial Gate Motors",
      "6-Meter Heavy-Duty Aluminum Boom Barriers",
      "Inductive Ground Loop Vehicle Detectors",
      "Regulated 24V Enclosures with Battery Backup"
    ],
    tag: "Industrial"
  }
];
