'use client'

import { motion } from 'framer-motion'
import TestimonialCard from './TestimonialCard'
import { testimonials } from '@/lib/data'

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-20 px-4 bg-primary"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
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
            Lo que Dicen Nuestros <span className="text-accent">Clientes</span>
          </h2>
          <p className="text-neutral-light/70 max-w-2xl mx-auto text-lg">
            Testimonios reales de empresas que transformaron su presencia digital 
            con NexorDT y aumentaron sus conversiones.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-accent/30"
        >
          <div className="text-center">
            <p className="text-4xl font-bold text-accent mb-2">4.9★</p>
            <p className="text-neutral-light/70">Calificación Promedio</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-accent mb-2">150+</p>
            <p className="text-neutral-light/70">Clientes Satisfechos</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-accent mb-2">$50M+</p>
            <p className="text-neutral-light/70">Generados por Clientes</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
