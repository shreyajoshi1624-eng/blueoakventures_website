import styles from '../../styles/services/WhyOak1Different.module.css'

const WhyOak1Different = () => {
  const differentiators = [
    {
      icon: "🎯",
      title: "Execution-Backed",
      description: "We execute alongside you, not just advise"
    },
    {
      icon: "💼",
      title: "Investment-Focused",
      description: "Every activity designed to secure funding"
    },
    {
      icon: "👤",
      title: "Founder-Centric",
      description: "Built around your schedule and needs"
    },
    {
      icon: "📈",
      title: "Proven Results",
      description: "₹50L to ₹296Cr raised by our founders"
    }
  ]

  return (
    <section className={styles.whyOak1Different}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Why Oak1 is Different</h2>
          <p className={styles.subtitle}>We're not another accelerator. We're your fundraising execution partner.</p>
        </div>
        
        <div className={styles.grid}>
          {differentiators.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{item.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className={styles.ctaSection}>
          <button className={styles.primaryBtn}>Start Your Journey</button>
          <button className={styles.secondaryBtn}>Know Your Funding Score</button>
        </div>
      </div>
    </section>
  )
}

export default WhyOak1Different
