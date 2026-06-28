'use client'

import { motion } from 'framer-motion'
import PortfolioCard from './PortfolioCard'
import { portfolioItems } from '@/lib/data'

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="py-20 px-4 bg-secondary"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-light mb-4">
            Nuestro <span className="text-accent">Portafolio</span>
          </h2>
          <p className="text-neutral-light/70 max-w-2xl mx-auto text-lg">
            Proyectos reales de diferentes industrias. Todos ellos generaron 
            resultados tangibles para nuestros clientes.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <PortfolioCard item={item} />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-neutral-light/70 mb-4">
            ¿Tu proyecto será el siguiente? 👀
          </p>
          <button className="bg-accent text-primary font-bold px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all hover:scale-105">
            Ver Más Proyectos
          </button>
        </motion.div>
      </div>
    </section>
  )
}
