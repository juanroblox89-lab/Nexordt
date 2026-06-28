'use client'

import { motion } from 'framer-motion'
import FAQItem from './FAQItem'
import { faqs } from '@/lib/data'

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="py-20 px-4 bg-secondary"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-light mb-4">
            Preguntas <span className="text-accent">Frecuentes</span>
          </h2>
          <p className="text-neutral-light/70 text-lg">
            Resolvemos tus dudas. Si no encuentras tu respuesta, 
            <span className="text-accent"> contáctanos por WhatsApp</span>.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary rounded-xl overflow-hidden border border-accent/30"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <FAQItem item={faq} />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-neutral-light/70 mb-4">¿Más preguntas?</p>
          <button className="bg-accent text-primary font-bold px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all hover:scale-105">
            Hablar con Asesor
          </button>
        </motion.div>
      </div>
    </section>
  )
}
