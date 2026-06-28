'use client'

import { CheckCircle } from 'lucide-react'
import { PricingPlan } from '@/lib/types'

interface PricingCardProps {
  plan: PricingPlan
  onSelect: (plan: PricingPlan) => void
}

export default function PricingCard({ plan, onSelect }: PricingCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div
      className={`relative rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl transform hover:scale-105 ${
        plan.highlighted
          ? 'bg-gradient-to-br from-accent/10 to-secondary border-2 border-accent shadow-xl'
          : 'bg-secondary border-2 border-primary hover:border-accent'
      }`}
    >
      {/* Badge para plan destacado */}
      {plan.highlighted && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-primary font-bold px-4 py-2 rounded-full text-sm">
          🌟 MÁS POPULAR
        </div>
      )}

      {/* Nombre y precio */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-neutral-light mb-2">
          {plan.name}
        </h3>
        <p className="text-accent font-semibold text-sm mb-4">
          {plan.description}
        </p>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-accent">
            ${(plan.price / 1000).toFixed(0)}k
          </span>
          <span className="text-neutral-light text-sm">COP</span>
        </div>
        <p className="text-neutral-light text-xs mt-2 opacity-75">
          Pago único • Sin suscripción
        </p>
      </div>

      {/* Características */}
      <div className="space-y-3 mb-8">
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <span className="text-neutral-light text-sm">{feature}</span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <button
        onClick={() => onSelect(plan)}
        className={`w-full py-3 rounded-lg font-bold transition-all duration-300 ${
          plan.highlighted
            ? 'bg-accent text-primary hover:bg-opacity-90'
            : 'bg-primary border-2 border-accent text-accent hover:bg-accent hover:text-primary'
        }`}
      >
        {plan.cta}
      </button>

      {/* Footer */}
      <p className="text-center text-neutral-light text-xs mt-4 opacity-60">
        {plan.id === 'base' && 'Entrega en 2-3 días'}
        {plan.id === 'intermediate' && 'Entrega en 5-7 días'}
        {plan.id === 'premium' && '⚡ Llave en mano en 48 horas'}
      </p>
    </div>
  )
}
