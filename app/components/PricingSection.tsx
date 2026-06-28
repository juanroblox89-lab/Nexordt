'use client'

import { useState } from 'react'
import PricingCard from './PricingCard'
import { pricingPlans } from '@/lib/data'
import { PricingPlan } from '@/lib/types'
import { motion } from 'framer-motion'

export default function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null)

  const handleSelectPlan = (plan: PricingPlan) => {
    setSelectedPlan(plan)
    // Simulación de acción (en producción sería enviar a Firebase o API)
    const message = `¡Hola! Me interesa el ${plan.name}`
    window.open(
      `https://wa.me/573002831004?text=${encodeURIComponent(message)}`,
      '_blank'
    )
  }

  return (
    <section
      id="pricing"
      className="py-20 px-4 bg-primary relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-light mb-4">
            Planes de Precios <span className="text-accent">Flexible</span>
          </h2>
          <p className="text-neutral-light/70 max-w-2xl mx-auto text-lg">
            Elige el plan que mejor se adapte a tus necesidades. Todos incluyen 
            soporte y actualizaciones. Sin contratos de largo plazo.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <PricingCard plan={plan} onSelect={handleSelectPlan} />
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-secondary rounded-xl overflow-hidden border border-accent/30"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-accent/10 border-b border-accent/30">
                  <th className="px-6 py-4 text-left font-bold text-neutral-light">
                    Característica
                  </th>
                  <th className="px-6 py-4 text-center font-bold text-neutral-light">
                    Plan Base
                  </th>
                  <th className="px-6 py-4 text-center font-bold text-accent">
                    Plan Intermedio
                  </th>
                  <th className="px-6 py-4 text-center font-bold text-neutral-light">
                    Plan Premium
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: 'Stack Tecnológico',
                    base: 'HTML + CSS',
                    intermediate: 'Next.js + Tailwind',
                    premium: 'Vercel + Firebase',
                  },
                  {
                    feature: 'Secciones',
                    base: '1 (One-Page)',
                    intermediate: '4-5 secciones',
                    premium: '7+ secciones',
                  },
                  {
                    feature: 'Formulario/Lead Capture',
                    base: '❌',
                    intermediate: 'Básico',
                    premium: '✅ Con Firebase',
                  },
                  {
                    feature: 'Animaciones',
                    base: 'Ninguna',
                    intermediate: 'Suaves',
                    premium: 'Motor de partículas',
                  },
                  {
                    feature: 'SEO Local',
                    base: 'Básico',
                    intermediate: 'Avanzado',
                    premium: 'Completo + Analytics',
                  },
                  {
                    feature: 'Soporte (días)',
                    base: '30',
                    intermediate: '90',
                    premium: '180',
                  },
                  {
                    feature: 'Tiempo de entrega',
                    base: '2-3 días',
                    intermediate: '5-7 días',
                    premium: '48 horas',
                  },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-accent/20 ${
                      idx % 2 === 0 ? 'bg-transparent' : 'bg-accent/5'
                    }`}
                  >
                    <td className="px-6 py-4 font-semibold text-neutral-light">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-center text-neutral-light/70">
                      {row.base}
                    </td>
                    <td className="px-6 py-4 text-center text-accent font-semibold">
                      {row.intermediate}
                    </td>
                    <td className="px-6 py-4 text-center text-neutral-light/70">
                      {row.premium}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
