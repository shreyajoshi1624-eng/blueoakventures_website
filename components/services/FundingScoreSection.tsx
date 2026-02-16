import styles from '../../styles/services/FundingScoreSection.module.css'

const FundingScoreSection = () => {
  const criteria = [
    "Founder Readiness",
    "Business & Market Depth", 
    "Founder Readiness",
    "Business Scalability",
    "Revenue & Market Depth"
  ]

  return (
    <section className={styles.fundingScoreSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>If Investors Met You Today — Would They Fund You?</h2>
          <p className={styles.subtitle}>Get a FREE Funding Score based on:</p>
          
          <div className={styles.criteriaGrid}>
            <div className={styles.criteriaColumn}>
              {criteria.slice(0, 3).map((criterion, index) => (
                <div key={index} className={styles.criteriaItem}>
                  <div className={styles.checkmark}>✓</div>
                  <span>{criterion}</span>
                </div>
              ))}
            </div>
            <div className={styles.criteriaColumn}>
              {criteria.slice(3).map((criterion, index) => (
                <div key={index} className={styles.criteriaItem}>
                  <div className={styles.checkmark}>✓</div>
                  <span>{criterion}</span>
                </div>
              ))}
            </div>
          </div>
          
          <button className={styles.scoreBtn}>Get My Funding Score</button>
        </div>
      </div>
    </section>
  )
}

export default FundingScoreSection