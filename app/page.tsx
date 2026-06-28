import Hero from './components/Hero'
import PricingSection from './components/PricingSection'
import PortfolioSection from './components/PortfolioSection'
import TestimonialsSection from './components/TestimonialsSection'
import KeyInHandSection from './components/KeyInHandSection'
import FAQSection from './components/FAQSection'
import CTASection from './components/CTASection'
import WhatsAppButton from './components/WhatsAppButton'
import ParticleBackground from './components/ParticleBackground'

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Partículas solo visibles en secciones seleccionadas */}
      <div className="relative">
        <ParticleBackground />
        <Hero />
      </div>

      <PricingSection />
      <PortfolioSection />
      <TestimonialsSection />
      <KeyInHandSection />
      <FAQSection />
      <CTASection />

      {/* WhatsApp Button - Flotante global */}
      <WhatsAppButton message="¡Hola! Estoy interesado en conocer los planes de landing page de NexorDT." />
    </main>
  )
}
