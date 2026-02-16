import Image from 'next/image'
import styles from '../../styles/services/WhatIsOak1.module.css'

const WhatIsOak1 = () => {
  return (
    <section className={styles.whatIsOak1}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2>What is Oak1?</h2>
            <p className={styles.subtitle}>
              <strong>Oak1 is not a course.</strong> <em>It is an execution-backed fundraising partnership.</em>
            </p>
            <p className={styles.description}>
              We evaluate your startup, decide how much capital you can raise, 
              and assign a dedicated team to secure your investment.
            </p>
          </div>
          <div className={styles.imageContent}>
            <Image
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=280&fit=crop&crop=faces"
              alt="Business professionals in meeting discussing strategy"
              width={400}
              height={280}
              className={styles.meetingImage}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatIsOak1