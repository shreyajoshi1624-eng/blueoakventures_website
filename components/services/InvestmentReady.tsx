import styles from '../../styles/services/InvestmentReady.module.css'

const InvestmentReady = () => {
  const criteria = [
    "Founder credibility",
    "Revenue & scalability", 
    "Market depth",
    "Investor appeal"
  ]

  return (
    <section className={styles.investmentReady}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.visualContent}>
            <div className={styles.targetIcon}>
              <div className={styles.bullseye}>
                <div className={styles.arrow}></div>
              </div>
            </div>
          </div>
          <div className={styles.textContent}>
            <h2>From Idea to Investment-Ready</h2>
            <p className={styles.subtitle}>If investors met you today, would they fund you?</p>
            
            <div className={styles.criteriaList}>
              {criteria.map((criterion, index) => (
                <div key={index} className={styles.criteriaItem}>
                  <div className={styles.checkIcon}>✓</div>
                  <span>{criterion}</span>
                </div>
              ))}
            </div>
            
            <button className={styles.scoreBtn}>Get My Free Funding Score</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InvestmentReady