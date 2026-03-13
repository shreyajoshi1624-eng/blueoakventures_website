import styles from '../styles/Services.module.css'
import Link from 'next/link'

const Services = () => {
  const services = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      title: "Oak1 Cohorts"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      ),
      title: "Women Entrepreneurs"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="1" x2="12" y2="23"/>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
      title: "AIF Funds Advisory"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
        </svg>
      ),
      title: "Personal Business Development"
    }
  ]

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.sectionHeader}>
            <h2>Our Services</h2>
            <p>Tailored Programs to Elevate Your Startup</p>
          </div>
          <div className={styles.servicesRow}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceItem}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3>{service.title}</h3>
              </div>
            ))}
          </div>
          <div className={styles.ctaWrapper}>
            <Link href="/services" className={styles.exploreBtn}>
              Explore All Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services