'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Planes', href: '#pricing' },
    { name: 'Portafolio', href: '#portfolio' },
    { name: 'Testimonios', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-primary/95 backdrop-blur-md z-40 border-b border-accent/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="font-bold text-xl text-accent">
            🚀 NexorDT
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-neutral-light hover:text-accent transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Desktop */}
          <button className="hidden md:block bg-accent text-primary px-6 py-2 rounded-full font-bold hover:bg-opacity-90 transition-all text-sm">
            Empezar
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-neutral-light hover:text-accent"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-neutral-light hover:text-accent px-4 py-2 rounded hover:bg-secondary/50 transition-colors text-sm"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="w-full text-left bg-accent text-primary px-4 py-2 rounded font-bold hover:bg-opacity-90 transition-all text-sm mt-4">
              Empezar
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
