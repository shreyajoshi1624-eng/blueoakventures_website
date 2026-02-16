import styles from '../styles/WhyChoose.module.css'

const WhyChoose = () => {
  const values = [
    {
      title: "Proven Expertise",
      description: "Expert experience warrants time-tested investment progress."
    },
    {
      title: "Vast Network",
      description: "Network over broadest borders, from guided expertise."
    },
    {
      title: "Confidential Guidance",
      description: "Experience that prioritizes discretion, diligence, and trust."
    },
    {
      title: "Long-Term Partnership",
      description: "Secured relationships supporting consistent growth and expansion."
    }
  ]

  return (
    <section id="why-choose" className={styles.whyChoose}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>Why Choose BlueOak</h2>
        </div>
        <div className={styles.valueGrid}>
          {values.map((value, index) => (
            <div key={index} className={styles.valueCard}>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChoose