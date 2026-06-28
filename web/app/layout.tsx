import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'NexorDT - Landing Pages de Alto Impacto | Escalera de Valor',
  description:
    'Planes de landing pages profesionales desde $200k COP. Plan Base, Intermedio y Premium con Firebase, GSAP y soporte incluido.',
  keywords:
    'landing page, diseño web, Next.js, Firebase, Vercel, precio, plan',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '🚀',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${poppins.variable} bg-primary text-neutral-light antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
