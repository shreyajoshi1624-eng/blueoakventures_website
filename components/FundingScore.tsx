import styles from '../styles/FundingScore.module.css'

const FundingScore = () => {
  return (
    <section id="funding-score" className={styles.fundingScore}>
      <div className={styles.container}>
        <div className={styles.compactBox}>
          <h2 className={styles.mainHeading}>
            If Investors Met You Today—Would They Fund You?
          </h2>
          
          <p className={styles.subHeading}>Get a FREE Funding Score based on:</p>
          
          <div className={styles.content}>
            <div className={styles.leftColumn}>
              <ul className={styles.criteriaList}>
                <li>Founder Readiness</li>
                <li>Business & Market Depth</li>
              </ul>
            </div>
            
            <div className={styles.rightColumn}>
              <ul className={styles.criteriaList}>
                <li>Business Scalability</li>
                <li>Revenue & Market Depth</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FundingScore