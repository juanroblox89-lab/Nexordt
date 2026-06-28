'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FAQ } from '@/lib/types'

interface FAQItemProps {
  item: FAQ
}

export default function FAQItem({ item }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-accent/30 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 px-6 flex items-center justify-between hover:bg-secondary/50 transition-colors"
      >
        <h3 className="text-neutral-light font-semibold text-left">
          {item.question}
        </h3>
        <ChevronDown
          className={`w-5 h-5 text-accent transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="px-6 py-4 bg-secondary/30 border-t border-accent/20">
          <p className="text-neutral-light/80 text-sm leading-relaxed">
            {item.answer}
          </p>
        </div>
      )}
    </div>
  )
}
