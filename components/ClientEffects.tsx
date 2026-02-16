'use client'

import { useEffect } from 'react'

const ClientEffects = () => {
  useEffect(() => {
    // Custom cursor effect
    const cursor = document.createElement('div')
    const cursorFollower = document.createElement('div')
    
    cursor.className = 'cursor'
    cursorFollower.className = 'cursor-follower'
    
    document.body.appendChild(cursor)
    document.body.appendChild(cursorFollower)
    
    let mouseX = 0
    let mouseY = 0
    let followerX = 0
    let followerY = 0
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      
      cursor.style.left = mouseX + 'px'
      cursor.style.top = mouseY + 'px'
    }
    
    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.1
      followerY += (mouseY - followerY) * 0.1
      
      cursorFollower.style.left = followerX + 'px'
      cursorFollower.style.top = followerY + 'px'
      
      requestAnimationFrame(animateFollower)
    }
    
    document.addEventListener('mousemove', handleMouseMove)
    animateFollower()
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.body.removeChild(cursor)
      document.body.removeChild(cursorFollower)
    }
  }, [])
  
  return null
}

export default ClientEffects