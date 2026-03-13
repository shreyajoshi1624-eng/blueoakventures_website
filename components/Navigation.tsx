import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Navigation.module.css'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    // Close mobile menu
    setIsMobileMenuOpen(false)
    
    // If we're not on the home page, navigate to home first
    if (router.pathname !== '/') {
      router.push(`/#${sectionId}`)
      return
    }
    
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <div className={styles.navLogo}>
          <Link href="/" onClick={handleLinkClick}>
            <h2>BlueOak Ventures</h2>
          </Link>
        </div>
        
        {/* Hamburger Menu Button */}
        <button 
          className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`${styles.navMenu} ${isMobileMenuOpen ? styles.active : ''}`}>
          <li>
            <button onClick={() => scrollToSection('home')} className={styles.navLink}>
              Home
            </button>
          </li>
          <li>
            <Link href="/services" className={styles.navLink} onClick={handleLinkClick}>
              Services
            </Link>
          </li>
          <li>
            <button onClick={() => scrollToSection('contact')} className={styles.navLink}>
              About Us / Contact
            </button>
          </li>
          <li>
            <a 
              href="https://wa.me/917744841015" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.ctaBtn}
              onClick={handleLinkClick}
            >
              Apply Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation