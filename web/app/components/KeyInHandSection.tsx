'use client'

import { motion } from 'framer-motion'
import { Zap, Clock, Target } from 'lucide-react'

export default function KeyInHandSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-accent/10 to-secondary border-t border-b border-accent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-light mb-4">
            🔑 <span className="text-accent">Llave en Mano en 48 Horas</span>
          </h2>
          <p className="text-neutral-light/70 max-w-2xl mx-auto text-lg">
            Plan Premium: Desde el briefing hasta el deploy en producción. 
            Garantizado o reembolsamos.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Target, title: 'Hora 0-2', desc: 'Briefing & Planning' },
            { icon: Zap, title: 'Hora 2-18', desc: 'Desarrollo Intenso' },
            { icon: Clock, title: 'Hora 18-24', desc: 'Testing & Polish' },
            { icon: Zap, title: 'Hora 24-48', desc: 'Deploy en Vercel' },
          ].map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-secondary rounded-lg p-6 border border-accent/30 text-center"
            >
              <step.icon className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="font-bold text-neutral-light mb-2">{step.title}</h3>
              <p className="text-neutral-light/60 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Includes */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-secondary rounded-xl p-8 border border-accent/30"
        >
          <h3 className="text-2xl font-bold text-neutral-light mb-6">
            Incluye Todo:
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              '✅ Diseño Profesional Premium',
              '✅ Optimización SEO Completa',
              '✅ Firebase + Formularios',
              '✅ Motor de Partículas GSAP',
              '✅ WhatsApp Flotante Inteligente',
              '✅ Analytics Configurado',
              '✅ 180 días de Soporte',
              '✅ Documentación Completa',
              '✅ Acceso a Dashboard',
              '✅ Deploy en Vercel',
              '✅ SSL Seguro',
              '✅ 99.9% Uptime',
            ].map((item, idx) => (
              <div key={idx} className="text-neutral-light/80">
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-12"
        >
          <button className="bg-accent text-primary font-bold px-10 py-4 rounded-lg hover:bg-opacity-90 transition-all hover:scale-105 text-lg">
            Quiero Plan Premium Ahora
          </button>
        </motion.div>
      </div>
    </section>
  )
}
