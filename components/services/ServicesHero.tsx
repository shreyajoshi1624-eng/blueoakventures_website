import Image from 'next/image'
import styles from '../../styles/services/ServicesHero.module.css'

const ServicesHero = () => {
  return (
    <section className={styles.servicesHero}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <div className={styles.textContent}>
            <h1 className={styles.heroTitle}>Oak1 Cohorts</h1>
            <h2 className={styles.heroSubtitle}>Turning Founders Into CEOs Investors Bet On</h2>
            <p className={styles.heroDescription}>
              45-day intensive fundraising & leadership program<br />
              to raise ₹50 Lakhs to ₹250 Crores.
            </p>
            <div className={styles.heroButtons}>
              <button className={styles.btnSecondary}>Know Your Funding Score</button>
              <button className={styles.btnPrimary}>Apply Now</button>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/oak1imagehero.jpg"
              alt="Business meeting with professionals discussing funding"
              width={450}
              height={300}
              className={styles.meetingImage}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesHero