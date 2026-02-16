import styles from '../styles/HowItWorks.module.css'

const HowItWorks = () => {
  return (
    <section id="how-it-works" className={styles.howItWorksCompact}>
      <div className={styles.container}>
        <div className={styles.stepsRow}>
          <div className={styles.stepItem}>
            <div className={styles.stepNumber}>1.</div>
            <div className={styles.stepInfo}>
              <h4>Submit Your Idea</h4>
              <p>Share your startup concept with us for evaluation.</p>
            </div>
          </div>
          
          <div className={styles.stepDivider}>|</div>
          
          <div className={styles.stepItem}>
            <div className={styles.stepNumber}>2.</div>
            <div className={styles.stepInfo}>
              <h4>Get Your Score</h4>
              <p>Receive a custom-fit funding score based on our assessment.</p>
            </div>
          </div>
          
          <div className={styles.stepDivider}>|</div>
          
          <div className={styles.stepItem}>
            <div className={styles.stepNumber}>3.</div>
            <div className={styles.stepInfo}>
              <h4>Prepare for Investment</h4>
              <p>Work with our dedicated team over 45 days to become investor-ready.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks