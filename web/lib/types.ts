// Tipos para la aplicación

export interface PricingPlan {
  id: 'base' | 'intermediate' | 'premium'
  name: string
  price: number
  description: string
  features: string[]
  cta: string
  highlighted?: boolean
  whatsappMessage: string
}

export interface Portfolio {
  id: string
  title: string
  description: string
  image: string
  category: string
  link?: string
}

export interface Testimonial {
  id: string
  name: string
  company: string
  avatar: string
  quote: string
  rating: number
}

export interface FAQ {
  id: string
  question: string
  answer: string
}

export interface LeadForm {
  name: string
  email: string
  company: string
  message: string
  selectedPlan: 'base' | 'intermediate' | 'premium'
}
