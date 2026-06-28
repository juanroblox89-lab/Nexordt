'use client'

import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section className="py-20 px-4 bg-primary relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-neutral-light mb-6"
        >
          ¿Listo para Impulsar tu Presencia Digital?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-neutral-light/70 text-lg mb-8 max-w-2xl mx-auto"
        >
          Cada día que esperas es un cliente potencial que no te encuentra. 
          Elige tu plan y comienza hoy mismo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="bg-accent text-primary font-bold px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all hover:scale-105">
            Empezar Ahora
          </button>
          <button className="border-2 border-accent text-accent font-bold px-8 py-4 rounded-lg hover:bg-accent/10 transition-all">
            Agendar Demo
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-neutral-light/50 text-sm mt-8"
        >
          Consulta gratuita • Sin compromisos • Respuesta en &lt;2 horas
        </motion.p>
      </div>
    </section>
  )
}
