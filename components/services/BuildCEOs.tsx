import Image from 'next/image'
import styles from '../../styles/services/BuildCEOs.module.css'

const BuildCEOs = () => {
  const traditionalPrograms = [
    "Generic mentorship",
    "Demo day focused", 
    "Founder left alone",
    "Idea centric"
  ]

  const oak1Cohorts = [
    "Dedicated execution team",
    "Investment focused",
    "Founder backed daily", 
    "Founder centric"
  ]

  return (
    <section className={styles.buildCEOs}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <div className={styles.sectionHeader}>
              <h2>We Don't Fix Decks. We Build CEOs.</h2>
              <p>See the difference between traditional programs and Oak1's approach</p>
            </div>
            
            <div className={styles.comparisonGrid}>
              <div className={styles.comparisonColumn}>
                <h3>Traditional Programs</h3>
                <div className={styles.programList}>
                  {traditionalPrograms.map((item, index) => (
                    <div key={index} className={styles.programItem}>
                      <div className={styles.iconTraditional}>○</div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className={styles.comparisonColumn}>
                <h3>Oak1 Cohorts</h3>
                <div className={styles.programList}>
                  {oak1Cohorts.map((item, index) => (
                    <div key={index} className={styles.programItem}>
                      <div className={styles.iconOak1}>●</div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.imageContent}>
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=350&h=420&fit=crop&crop=faces"
              alt="Business professionals in strategic meeting"
              width={350}
              height={420}
              className={styles.businessImage}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BuildCEOs