import styles from '../../styles/services/ServicesStats.module.css'

const ServicesStats = () => {
  const stats = [
    {
      number: "45",
      label: "Days"
    },
    {
      number: "Dedicated",
      label: "Team"
    },
    {
      number: "₹50L-₹250Cr",
      label: ""
    },
    {
      number: "Founder-First",
      label: ""
    }
  ]

  return (
    <section className={styles.servicesStats}>
      <div className={styles.container}>
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <div className={styles.statNumber}>{stat.number}</div>
              {stat.label && <div className={styles.statLabel}>{stat.label}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesStats