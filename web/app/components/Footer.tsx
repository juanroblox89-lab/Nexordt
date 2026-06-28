'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-accent/30 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-accent font-bold text-lg mb-4">🚀 NexorDT</h3>
            <p className="text-neutral-light/70 text-sm mb-4">
              Transformando negocios a través de landing pages de alto impacto.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-accent hover:text-neutral-light transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-accent hover:text-neutral-light transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-accent hover:text-neutral-light transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-neutral-light font-bold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              {['Inicio', 'Planes', 'Portafolio', 'Blog', 'Contacto'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-neutral-light/70 hover:text-accent transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-neutral-light font-bold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              {['Landing Pages', 'E-Commerce', 'SEO Local', 'Consultoría'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-neutral-light/70 hover:text-accent transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-neutral-light font-bold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-neutral-light/70">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:hola@nexordt.com">hola@nexordt.com</a>
              </li>
              <li className="flex items-center gap-2 text-neutral-light/70">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:+573002831004">+57 300 283 1004</a>
              </li>
              <li className="flex items-center gap-2 text-neutral-light/70">
                <MapPin className="w-4 h-4 text-accent" />
                Medellín, Colombia
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-accent/30 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-neutral-light/60">
          <p>&copy; 2024 NexorDT. Todos los derechos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition-colors">Privacidad</a>
            <a href="#" className="hover:text-accent transition-colors">Términos</a>
            <a href="#" className="hover:text-accent transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
