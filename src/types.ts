export interface Project {
  id: string;
  title: string;
  category: "Commercial" | "Residential" | "Educational" | "Healthcare" | "Urban Development" | "Hospitality";
  location: string;
  completionYear: number;
  image: string;
  description: string;
  details: string[];
  stats: { label: string; value: string }[];
  coordinates: { x: number; y: number }; // Map percentages mapping Southern African regions
  region: string;
}

export interface Service {
  id: string;
  title: string;
  icon: string; // Lucide icon name
  description: string;
  details: string[];
  features: string[];
}

export interface Insight {
  id: string;
  title: string;
  category: "Architecture" | "Urban Planning" | "Sustainability" | "Interior Design" | "Industry Trends";
  summary: string;
  content: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  readTime: string;
  date: string;
  image: string;
}

export interface Testimonial {
  id: string;
  client: string;
  role: string;
  company: string;
  avatar: string;
  comment: string;
  metric: {
    label: string;
    value: string;
  };
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  image: string;
  bio: string;
  experience: string;
}
