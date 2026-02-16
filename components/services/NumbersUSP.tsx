import styles from '../../styles/services/NumbersUSP.module.css'

const NumbersUSP = () => {
  const numbers = [
    {
      number: "45",
      unit: "Days",
      description: "From idea to investment-ready pitch deck and strategy"
    },
    {
      number: "₹50L-₹250Cr",
      unit: "",
      description: "Funding range our founders successfully raise"
    },
    {
      number: "95%",
      unit: "Success Rate",
      description: "Of founders who complete our program raise funds"
    },
    {
      number: "24/7",
      unit: "Support",
      description: "Dedicated team working exclusively on your success"
    }
  ]

  return (
    <section className={styles.numbersUSP}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>Why Oak1 Cohorts Works</h2>
          <p>The numbers speak for themselves</p>
        </div>
        <div className={styles.numbersGrid}>
          {numbers.map((item, index) => (
            <div key={index} className={styles.numberCard}>
              <div className={styles.numberValue}>
                {item.number}
                {item.unit && <span className={styles.unit}>{item.unit}</span>}
              </div>
              <p className={styles.numberDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NumbersUSP