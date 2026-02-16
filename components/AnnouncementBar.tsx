import styles from '../styles/AnnouncementBar.module.css'

const AnnouncementBar = () => {
  return (
    <div className={styles.announcementBar}>
      <div className={styles.scrollContainer}>
        <div className={styles.scrollContent}>
          <span className={styles.text}>Know your funding score for <span className={styles.highlight}>FREE</span></span>
          <span className={styles.separator}>//</span>
          <span className={styles.text}>Get Investment Ready Today</span>
          <span className={styles.separator}>//</span>
          <span className={styles.text}>Know your funding score for <span className={styles.highlight}>FREE</span></span>
          <span className={styles.separator}>//</span>
          <span className={styles.text}>Join 500+ Successful Founders</span>
          <span className={styles.separator}>//</span>
        </div>
        <div className={styles.scrollContent} aria-hidden="true">
          <span className={styles.text}>Know your funding score for <span className={styles.highlight}>FREE</span></span>
          <span className={styles.separator}>//</span>
          <span className={styles.text}>Get Investment Ready Today</span>
          <span className={styles.separator}>//</span>
          <span className={styles.text}>Know your funding score for <span className={styles.highlight}>FREE</span></span>
          <span className={styles.separator}>//</span>
          <span className={styles.text}>Join 500+ Successful Founders</span>
          <span className={styles.separator}>//</span>
        </div>
      </div>
    </div>
  )
}

export default AnnouncementBar
