export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  features: string[];
  metrics: { label: string; value: string }[];
  accentColor: string;
  architectureBlueprint: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  iconName: string;
  tagline: string;
  description: string;
  keyMetrics: { label: string; value: string }[];
  compliance: string[];
  caseHighlight: string;
  recommendedSolutions: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  logoText: string;
  challenge: string;
  solution: string;
  results: {
    throughputImprovement: string;
    costReduction: string;
    deploymentSpeed: string;
  };
  beforeAfter: {
    beforeLabel: string;
    beforeValue: string;
    afterLabel: string;
    afterValue: string;
  };
  featured: boolean;
  imageBg: string;
}

export interface GlobalOffice {
  id: string;
  city: string;
  country: string;
  region: 'Americas' | 'EMEA' | 'APAC' | 'LATAM';
  coordinates: { lat: number; lng: number };
  timezone: string;
  address: string;
  phone: string;
  staffCount: number;
  latencyMs: number;
  isHQ?: boolean;
}

export interface LeadershipMember {
  id: string;
  name: string;
  role: string;
  division: string;
  bio: string;
  quote: string;
  linkedin: string;
  avatarUrl: string;
  achievements: string[];
}

export interface ArticleItem {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  author: string;
  type: 'Whitepaper' | 'Research' | 'Announcement' | 'Industry Insights';
  downloadable?: boolean;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Executive' | 'Hybrid' | 'Remote';
  experience: string;
  description: string;
  requirements: string[];
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  company: string;
  logo: string;
  quote: string;
  rating: number;
  avatar: string;
  impactMetric: string;
  videoUrl?: string;
}

export interface MilestoneItem {
  year: string;
  title: string;
  description: string;
  metric: string;
  category: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  source?: string;
}
