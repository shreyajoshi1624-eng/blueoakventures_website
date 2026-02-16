'use client'

import { useEffect, useRef } from 'react'
import styles from '../styles/BackgroundDots.module.css'

const BackgroundDots = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Dot properties
    const dots: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      opacity: number
      color: string
    }> = []

    const colors = [
      'rgba(44, 90, 160, 0.4)',
      'rgba(100, 181, 246, 0.3)',
      'rgba(44, 90, 160, 0.2)',
      'rgba(100, 181, 246, 0.5)'
    ]

    // Create dots
    const createDots = () => {
      const numDots = Math.floor((canvas.width * canvas.height) / 15000)
      
      for (let i = 0; i < numDots; i++) {
        dots.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)]
        })
      }
    }

    createDots()

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      dots.forEach((dot, index) => {
        // Update position
        dot.x += dot.vx
        dot.y += dot.vy

        // Bounce off edges
        if (dot.x <= 0 || dot.x >= canvas.width) dot.vx *= -1
        if (dot.y <= 0 || dot.y >= canvas.height) dot.vy *= -1

        // Keep dots in bounds
        dot.x = Math.max(0, Math.min(canvas.width, dot.x))
        dot.y = Math.max(0, Math.min(canvas.height, dot.y))

        // Pulse opacity
        dot.opacity += Math.sin(Date.now() * 0.001 + index) * 0.01

        // Draw dot
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2)
        ctx.fillStyle = dot.color.replace(/[\d.]+\)$/g, `${dot.opacity})`)
        ctx.fill()

        // Draw connections to nearby dots
        dots.forEach((otherDot, otherIndex) => {
          if (index !== otherIndex) {
            const dx = dot.x - otherDot.x
            const dy = dot.y - otherDot.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 100) {
              const opacity = (100 - distance) / 100 * 0.1
              ctx.beginPath()
              ctx.moveTo(dot.x, dot.y)
              ctx.lineTo(otherDot.x, otherDot.y)
              ctx.strokeStyle = `rgba(44, 90, 160, ${opacity})`
              ctx.lineWidth = 0.5
              ctx.stroke()
            }
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={styles.backgroundDots}
    />
  )
}

export default BackgroundDots