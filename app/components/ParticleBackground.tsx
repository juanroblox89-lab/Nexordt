'use client'

import { useEffect, useRef } from 'react'

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const resizeTimeout = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

    let animationRunning = true

    const setCanvasSize = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      const dpr = window.devicePixelRatio || 1

      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    setCanvasSize()

    // Ajustar cantidad según ancho (menos en móviles)
    const particleCount = window.innerWidth < 768 ? 18 : Math.min(60, Math.floor(window.innerWidth / 30))
    // Use the Particle class as the array element type so methods are recognized by TS
    const particles: Particle[] = []

    const canvasWidth = () => canvas.width / (window.devicePixelRatio || 1)
    const canvasHeight = () => canvas.height / (window.devicePixelRatio || 1)

    class Particle {
      x = Math.random() * canvasWidth()
      y = Math.random() * canvasHeight()
      size = Math.random() * 2 + 0.5
      speedX = (Math.random() - 0.5) * 0.5
      speedY = (Math.random() - 0.5) * 0.5
      color = `rgba(0, 212, 255, ${Math.random() * 0.5 + 0.15})`

      update() {
        this.x += this.speedX
        this.y += this.speedY

        const w = canvasWidth()
        const h = canvasHeight()

        if (this.x > w) this.x = 0
        if (this.x < 0) this.x = w
        if (this.y > h) this.y = 0
        if (this.y < 0) this.y = h
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    const drawConnections = () => {
      const maxDist = 120
      const maxDistSq = maxDist * maxDist

      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x
          const dy = particles[a].y - particles[b].y
          const distSq = dx * dx + dy * dy

          if (distSq < maxDistSq) {
            const alpha = 0.2 * (1 - distSq / maxDistSq)
            ctx.strokeStyle = `rgba(0, 212, 255, ${alpha})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particles[a].x, particles[a].y)
            ctx.lineTo(particles[b].x, particles[b].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      if (!animationRunning) return
      // limpiar el canvas por completo para evitar artefactos
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.update()
        p.draw()
      })

      drawConnections()
      rafRef.current = requestAnimationFrame(animate)
    }

    // Iniciar animación
    rafRef.current = requestAnimationFrame(animate)

    const handleResize = () => {
      if (resizeTimeout.current) {
        window.clearTimeout(resizeTimeout.current)
      }
      resizeTimeout.current = window.setTimeout(() => {
        setCanvasSize()
        // Reposicionar partículas al nuevo tamaño para evitar fuera de rango
        for (const p of particles) {
          p.x = Math.random() * canvasWidth()
          p.y = Math.random() * canvasHeight()
        }
      }, 150)
    }

    const handleVisibility = () => {
      if (document.hidden) {
        animationRunning = false
        if (rafRef.current) cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      } else {
        if (!animationRunning) {
          animationRunning = true
          rafRef.current = requestAnimationFrame(animate)
        }
      }
    }

    window.addEventListener('resize', handleResize)
    document.addEventListener('visibilitychange', handleVisibility)

    return () => {
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('visibilitychange', handleVisibility)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      if (resizeTimeout.current) window.clearTimeout(resizeTimeout.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
}
