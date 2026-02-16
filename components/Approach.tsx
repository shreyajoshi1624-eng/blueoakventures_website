import styles from '../styles/Approach.module.css'

const Approach = () => {
  const approaches = [
    {
      title: "Execution-Focused",
      description: "Consistent strategies to safeguard, refine and reorient priorities."
    },
    {
      title: "Founder-Centric",
      description: "Expertise-driven mentoring from ideation to fundraising."
    },
    {
      title: "Capital-Driven",
      description: "Address investment services, strategic alignment, and structured funding."
    },
    {
      title: "Outcome-Oriented",
      description: "Strategized after-build ready, rebalanced capital outcomes."
    }
  ]

  return (
    <section id="approach" className={styles.approach}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>Our Approach</h2>
        </div>
        <div className={styles.approachGrid}>
          {approaches.map((approach, index) => (
            <div key={index} className={styles.approachCard}>
              <h3>{approach.title}</h3>
              <p>{approach.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Approach