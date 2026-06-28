'use client'

import { Star } from 'lucide-react'
import { Testimonial } from '@/lib/types'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-secondary border border-accent/30 rounded-lg p-6 hover:border-accent transition-all duration-300">
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-neutral-light mb-6 italic">"{testimonial.quote}"</p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-2xl">
          {testimonial.avatar}
        </div>
        <div>
          <p className="font-bold text-neutral-light">{testimonial.name}</p>
          <p className="text-accent text-sm">{testimonial.company}</p>
        </div>
      </div>
    </div>
  )
}
