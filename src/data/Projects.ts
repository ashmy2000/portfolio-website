import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

export type ProjectCategory = "websites" | "ios" | "android" | "designs" | "other";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  year: string;
  client: string;
  image: string;
}

export const CATEGORY_LABELS: Record<ProjectCategory | "all", string> = {
  all: "All",
  websites: "Websites",
  ios: "iOS Apps",
  android: "Android Apps",
  designs: "Designs",
  other: "Other",
};

export const projects: Project[] = [
  {
    id: "aether-analytics",
    title: "Aether Analytics",
    description: "Real-time infrastructure telemetry dashboard with edge-native data pipelines.",
    category: "websites",
    year: "2025",
    client: "Aether Labs",
    image: p1,
  },
  {
    id: "vault-mobile",
    title: "Vault Mobile",
    description: "High-fidelity iOS banking experience built around tactile motion.",
    category: "ios",
    year: "2025",
    client: "Vault Capital",
    image: p2,
  },
  {
    id: "north-android",
    title: "North",
    description: "Android-first journaling app focused on quiet, focused writing.",
    category: "android",
    year: "2024",
    client: "North Studio",
    image: p3,
  },
  {
    id: "verge-identity",
    title: "Verge Identity",
    description: "Editorial brand system and motion identity for a publishing house.",
    category: "designs",
    year: "2024",
    client: "Verge Press",
    image: p4,
  },
  {
    id: "stellar-commerce",
    title: "Stellar Commerce",
    description: "Headless storefront and CMS for a global e-commerce brand.",
    category: "websites",
    year: "2024",
    client: "Stellar Goods",
    image: p5,
  },
  {
    id: "monolith-install",
    title: "Monolith",
    description: "Interactive installation pairing sensor data with generative geometry.",
    category: "other",
    year: "2023",
    client: "MOCA Residency",
    image: p6,
  },
];
