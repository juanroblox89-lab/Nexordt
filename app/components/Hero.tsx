'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-br from-primary via-secondary to-primary flex items-center justify-center pt-20 px-4 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block bg-accent/10 border border-accent/50 rounded-full px-4 py-2 mb-6"
        >
          <p className="text-accent text-sm font-semibold">
            🚀 Lanzamiento Oficial - Escalera de Valor Premium
          </p>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-neutral-light mb-6 leading-tight"
        >
          Tu Landing Page <span className="text-accent">de Alto Impacto</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-neutral-light/80 mb-8 max-w-2xl mx-auto"
        >
          Desde tarjeta digital hasta stack premium con Firebase. Elige tu nivel, 
          obtén presencia profesional y captura leads en tiempo real.
        </motion.p>

        {/* USPs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center mb-10 text-neutral-light/80 text-sm md:text-base"
        >
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-accent" />
            Entrega Rápida
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-accent" />
            Diseño Premium
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-accent" />
            SEO Optimizado
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-accent" />
            Soporte Incluido
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="bg-accent text-primary font-bold px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all hover:scale-105 inline-flex items-center gap-2">
            Ver Planes
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="border-2 border-accent text-accent font-bold px-8 py-4 rounded-lg hover:bg-accent/10 transition-all">
            Contactar Asesor
          </button>
        </motion.div>

        {/* Floating Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          <div>
            <p className="text-3xl font-bold text-accent">150+</p>
            <p className="text-neutral-light/60 text-sm">Proyectos Realizados</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-accent">98%</p>
            <p className="text-neutral-light/60 text-sm">Satisfacción</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-accent">48h</p>
            <p className="text-neutral-light/60 text-sm">Entrega Premium</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
