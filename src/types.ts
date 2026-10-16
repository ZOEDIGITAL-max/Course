export interface ModuleItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  deliverable: string;
  topics: string[];
  toolsCovered: string[];
  keyTakeaway: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  rating: number;
  highlight: string;
  videoDuration?: string;
  videoThumbnail?: string;
  badge: string;
}

export interface DayChallenge {
  day: number;
  week: number;
  title: string;
  objective: string;
  contentType: string;
  promptExample: string;
  platformFocus: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'general' | 'tools' | 'payment' | 'curriculum';
}

export interface RegistrationFormData {
  fullName: string;
  email: string;
  whatsappNumber: string;
  currentRole: string;
  primaryGoal: string;
  paymentMethod: 'card' | 'bank_transfer' | 'whatsapp';
}
