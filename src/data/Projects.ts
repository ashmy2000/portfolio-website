import p1 from "@/assets/SkinSense.jpg";
import p2 from "@/assets/SanBrew.jpg";
import p3 from "@/assets/BookSpire.jpg";
import p4 from "@/assets/Fashion2Day.jpg";
import p5 from "@/assets/TeaLover.jpg";
import p6 from "@/assets/GymFit.jpg";

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
    id: "Fashion2Day",
    title: "Fashion2Day",
    description:
      "AI fashion assistant that helps users discover and visualise outfit ideas by generating personalised clothing recommendations for any style, occasion, or gender.",
    category: "websites",
    year: "2026",
    client: "In Development",
    image: p4,
  },
  {
    id: "GymFit",
    title: "GymFit",
    description:
      "Fitness coaching platform where trainers can sell workout programs, upload training videos, manage memberships, and connect directly with clients for personalised coaching.",
    category: "other",
    year: "2026",
    client: "In Development",
    image: p6,
  },
  {
    id: "TeaLover",
    title: "TeaLover",
    description:
      "Premium tea discovery platform showcasing authentic handcrafted teas, brewing guides, flavour profiles, and online ordering.",
    category: "android",
    year: "2026",
    client: "In Development",
    image: p5,
  },
  {
    id: "book-spire",
    title: "BookSpire",
    description:
      "Social reading platform that helps users track books, monitor reading progress, share notes, connect with readers, and engage directly with authors.",
    category: "ios",
    year: "2026",
    client: "In Development",
    image: p3,
  },
  {
    id: "san-brew",
    title: "SanBrew",
    description:
      "Business management platform for inventory tracking, stock control, sales monitoring, and automated invoice generation for customers.",
    category: "websites",
    year: "2026",
    client: "In Development",
    image: p2,
  },
  {
    id: "skin-sense",
    title: "SkinSense",
    description:
      "AI skincare assistant that evaluates products against a user’s skin type, provides compatibility scores, and suggests better alternatives.",
    category: "websites",
    year: "2026",
    client: "In Development",
    image: p1,
  },
];
