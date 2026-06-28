// Datos de los planes de precios
import { PricingPlan } from './types'

export const pricingPlans: PricingPlan[] = [
  {
    id: 'base',
    name: 'Plan Base',
    price: 200000,
    description: 'Tarjeta Digital Ultra-Básica',
    highlighted: false,
    cta: 'Empezar Ahora',
    whatsappMessage: '¡Hola! Me interesa el Plan Base de $200.000 COP. ¿Cuáles son los primeros pasos?',
    features: [
      'One-Page estática',
      'Logo y contactos',
      'Botón WhatsApp',
      'Email y ubicación',
      'Horario de atención',
      'Minimalista y profesional',
      'Sin animaciones complejas',
      'Perfecto para bio de Instagram'
    ]
  },
  {
    id: 'intermediate',
    name: 'Plan Intermedio',
    price: 400000,
    description: 'Landing Page Estándar Profesional',
    highlighted: true,
    cta: 'Seleccionar Plan',
    whatsappMessage: '¡Hola! Me interesa el Plan Intermedio de $400.000 COP. Quiero saber más sobre SEO local y el WhatsApp flotante.',
    features: [
      'Landing page con secciones',
      'Hero atractivo',
      'Sección de servicios',
      'Portafolio pequeño',
      'CTA optimizado',
      'SEO local básico',
      'Mobile-first responsive',
      'WhatsApp flotante personalizado'
    ]
  },
  {
    id: 'premium',
    name: 'Plan Premium',
    price: 600000,
    description: 'Artillería Completa - Llave en Mano',
    highlighted: false,
    cta: 'Contratar Ahora',
    whatsappMessage: '¡Hola! Interesado en el Plan Premium de $600.000 COP con Firebase, formulario y motor de partículas.',
    features: [
      'Stack completo: Vercel + Firebase',
      'Motor de partículas GSAP',
      'Formulario moderno avanzado',
      'Captura de leads en DB realtime',
      'Sección de testimonios',
      'FAQ interactivo',
      'Tabla comparativa de planes',
      'Backend CRM-ready',
      '¡Llave en mano en 48 horas!',
      'Integración lista para bots y automatización'
    ]
  }
]

export const faqs = [
  {
    id: '1',
    question: '¿Cuánto tiempo toma desarrollar mi landing page?',
    answer: 'El Plan Base se entrega en 2-3 días. El Plan Intermedio en 5-7 días. El Plan Premium se completa en máximo 48 horas desde la confirmación de requisitos.'
  },
  {
    id: '2',
    question: '¿Incluye dominio?',
    answer: 'El dominio se gestiona por separado. Te recomendamos NameCheap o GoDaddy. Si lo prefieres, podemos manejarlo por $15 USD/año adicionales.'
  },
  {
    id: '3',
    question: '¿Puedo cambiar de plan después?',
    answer: 'Sí. Puedes actualizar en cualquier momento. Te cobraremos la diferencia proporcional si lo haces dentro de los primeros 30 días.'
  },
  {
    id: '4',
    question: '¿Qué soporte incluye cada plan?',
    answer: 'Plan Base: Email durante 30 días. Plan Intermedio: WhatsApp + Email x 90 días. Plan Premium: Soporte prioritario x 180 días.'
  },
  {
    id: '5',
    question: '¿Es responsive en móviles?',
    answer: 'Todos nuestros planes son 100% mobile-first. Se adaptan perfectamente a cualquier dispositivo: teléfono, tablet o desktop.'
  },
  {
    id: '6',
    question: '¿Incluye SEO?',
    answer: 'Plan Base: Meta básicos. Plan Intermedio: SEO local mejorado. Plan Premium: Optimización completa + Firebase Analytics.'
  },
  {
    id: '7',
    question: '¿Puedo editar contenido después?',
    answer: 'Sí. Te proporcionamos acceso a un panel. Plan Base requiere contactar. Plan Intermedio y Premium tienen panel self-service.'
  },
  {
    id: '8',
    question: '¿Qué pasa si quiero agregar más funcionalidades?',
    answer: 'Podemos agregarlas. Consulta nuestras tarifas de desarrollo adicional. Formularios, integraciones, animaciones custom, etc.'
  },
  {
    id: '9',
    question: '¿Puedo cancelar en cualquier momento?',
    answer: 'Por supuesto. Si cancelas dentro de 7 días, reembolsamos el 100%. Después de 7 días, lo publicado es tuyo.'
  },
  {
    id: '10',
    question: '¿En qué hosting se aloja?',
    answer: 'Plan Base: Hosting compartido estándar. Plan Intermedio: Vercel (recomendado). Plan Premium: Vercel + Firebase (infraestructura global).'
  }
]

export const testimonials = [
  {
    id: '1',
    name: 'Carlos Rodríguez',
    company: 'Restaurante El Sabor',
    avatar: '👨‍💼',
    quote: 'Con la landing page de NexorDT, mis ventas por WhatsApp aumentaron un 300%. Increíble el ROI en menos de un mes.',
    rating: 5
  },
  {
    id: '2',
    name: 'María González',
    company: 'Studio de Diseño MG',
    avatar: '👩‍💼',
    quote: 'El Plan Premium con Firebase fue exactamente lo que necesitaba. Captura de leads automática y reportes en tiempo real.',
    rating: 5
  },
  {
    id: '3',
    name: 'Jorge López',
    company: 'Consultoría Digital JP',
    avatar: '👨‍💻',
    quote: 'Profesionales desde el inicio. La landing page transmite confianza. Ya cerré 5 clientes gracias a esto.',
    rating: 5
  },
  {
    id: '4',
    name: 'Ana Martínez',
    company: 'Fitness Studio AM',
    avatar: '👩‍🏫',
    quote: 'El motor de partículas en Premium es espectacular. Mis clientes quedan impresionados. Recomendado 100%.',
    rating: 5
  },
  {
    id: '5',
    name: 'Pedro Sánchez',
    company: 'Abogados & Asociados',
    avatar: '👨‍⚖️',
    quote: 'SEO local mejoró mis consultas orgánicas. El Plan Intermedio es perfecto para servicios profesionales.',
    rating: 5
  },
  {
    id: '6',
    name: 'Lucía Fernández',
    company: 'E-Commerce Trends',
    avatar: '👩‍💻',
    quote: 'La integración con Firebase simplifica todo. Métricas, leads, conversiones... todo en un dashboard.',
    rating: 5
  }
]

export const portfolioItems = [
  {
    id: '1',
    title: 'Tienda Online Premium',
    description: 'E-commerce con catálogo dinámico y carrito inteligente',
    image: '🛍️',
    category: 'E-Commerce'
  },
  {
    id: '2',
    title: 'Agencia Creativa',
    description: 'Portfolio visual con galería de proyectos y motion graphics',
    image: '🎨',
    category: 'Diseño'
  },
  {
    id: '3',
    title: 'Clínica Dental',
    description: 'Landing médica con booking system integrado',
    image: '🏥',
    category: 'Salud'
  },
  {
    id: '4',
    title: 'Academia Online',
    description: 'Plataforma educativa con cursos y certificaciones',
    image: '📚',
    category: 'Educación'
  },
  {
    id: '5',
    title: 'Restaurante Gourmet',
    description: 'Menú digital interactivo con reservas online',
    image: '🍽️',
    category: 'Gastronómico'
  },
  {
    id: '6',
    title: 'Consultoría Empresarial',
    description: 'Sitio B2B con CRM integrado y generador de leads',
    image: '💼',
    category: 'Negocios'
  },
  {
    id: '7',
    title: 'Studio Fotográfico',
    description: 'Galería de fotos con galería responsive y testimonios',
    image: '📷',
    category: 'Fotografía'
  },
  {
    id: '8',
    title: 'SaaS Analytics',
    description: 'Dashboard con datos en tiempo real y visualizaciones',
    image: '📊',
    category: 'Tecnología'
  }
]
