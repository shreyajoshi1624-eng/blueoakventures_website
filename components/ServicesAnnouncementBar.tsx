import styles from '../styles/ServicesAnnouncementBar.module.css'

const ServicesAnnouncementBar = () => {
  return (
    <div className={styles.announcementBar}>
      <div className={styles.scrollContainer}>
        <div className={styles.scrollContent}>
          <span className={styles.text}>45-Day Intensive Program to Raise ₹50L-₹250Cr</span>
          <span className={styles.separator}>//</span>
          <span className={styles.text}>Turn Your Idea into <span className={styles.highlight}>Investment-Ready</span> Venture</span>
          <span className={styles.separator}>//</span>
          <span className={styles.text}>Dedicated Team • Proven Results • Founder-First Approach</span>
          <span className={styles.separator}>//</span>
          <span className={styles.text}>Join Oak1 Cohorts <span className={styles.highlight}>TODAY</span></span>
          <span className={styles.separator}>//</span>
        </div>
        <div className={styles.scrollContent} aria-hidden="true">
          <span className={styles.text}>45-Day Intensive Program to Raise ₹50L-₹250Cr</span>
          <span className={styles.separator}>//</span>
          <span className={styles.text}>Turn Your Idea into <span className={styles.highlight}>Investment-Ready</span> Venture</span>
          <span className={styles.separator}>//</span>
          <span className={styles.text}>Dedicated Team • Proven Results • Founder-First Approach</span>
          <span className={styles.separator}>//</span>
          <span className={styles.text}>Join Oak1 Cohorts <span className={styles.highlight}>TODAY</span></span>
          <span className={styles.separator}>//</span>
        </div>
      </div>
    </div>
  )
}

export default ServicesAnnouncementBar
