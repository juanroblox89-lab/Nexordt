'use client'

import { Portfolio } from '@/lib/types'

interface PortfolioCardProps {
  item: Portfolio
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-secondary border border-accent/30 hover:border-accent transition-all duration-300 h-64">
      {/* Background with emoji */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-secondary flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-300">
        {item.image}
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
        <p className="text-accent text-sm font-semibold mb-1">{item.category}</p>
        <h3 className="text-neutral-light font-bold mb-2">{item.title}</h3>
        <p className="text-neutral-light text-sm mb-4">{item.description}</p>
        {item.link && (
          <a
            href={item.link}
            className="text-accent font-semibold text-sm hover:underline"
          >
            Ver proyecto →
          </a>
        )}
      </div>
    </div>
  )
}
