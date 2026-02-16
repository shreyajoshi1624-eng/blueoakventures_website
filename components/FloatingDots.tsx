import styles from '../styles/FloatingDots.module.css'

const FloatingDots = () => {
  return (
    <div className={styles.floatingDots}>
      {Array.from({ length: 25 }, (_, i) => (
        <div key={i} className={styles.dot} />
      ))}
    </div>
  )
}

export default FloatingDots