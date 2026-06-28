'use client'

import { MessageCircle } from 'lucide-react'
import { useState } from 'react'

interface WhatsAppButtonProps {
  message: string
  phoneNumber?: string
}

export default function WhatsAppButton({
  message,
  phoneNumber = '+573002831004',
}: WhatsAppButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappURL = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodedMessage}`
    window.open(whatsappURL, '_blank')
  }

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 animate-bounce"
      >
        <MessageCircle className="w-6 h-6" />
        {isHovered && <span className="text-sm">Contáctanos</span>}
      </button>
    </div>
  )
}
