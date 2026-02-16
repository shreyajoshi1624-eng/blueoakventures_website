import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Navigation.module.css'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
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

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <div className={styles.navLogo}>
          <Link href="/">
            <h2>BlueOak Ventures</h2>
          </Link>
        </div>
        <ul className={styles.navMenu}>
          <li>
            <button onClick={() => scrollToSection('home')} className={styles.navLink}>
              Home
            </button>
          </li>
          <li>
            <Link href="/services" className={styles.navLink}>
              Services
            </Link>
          </li>
          <li>
            <button onClick={() => scrollToSection('contact')} className={styles.navLink}>
              About Us / Contact
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('funding-score')} className={styles.ctaBtn}>
              Apply Now
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation