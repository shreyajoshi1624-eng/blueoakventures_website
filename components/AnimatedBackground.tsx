import styles from '../styles/AnimatedBackground.module.css'

const AnimatedBackground = () => {
  return (
    <div className={styles.animatedBackground}>
      {/* Gradient Waves */}
      <div className={styles.gradientWave1}></div>
      <div className={styles.gradientWave2}></div>
      <div className={styles.gradientWave3}></div>
      
      {/* Floating Geometric Shapes */}
      <div className={styles.geometricShapes}>
        {Array.from({ length: 8 }, (_, i) => (
          <div key={i} className={`${styles.shape} ${styles[`shape${i + 1}`]}`} />
        ))}
      </div>
      
      {/* Animated Grid Lines */}
      <div className={styles.gridLines}>
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className={`${styles.gridLine} ${styles[`line${i + 1}`]}`} />
        ))}
      </div>
    </div>
  )
}

export default AnimatedBackground