import styles from '../styles/TestDots.module.css'

const TestDots = () => {
  return (
    <div className={styles.testDots}>
      {Array.from({ length: 10 }, (_, i) => (
        <div 
          key={i} 
          className={styles.dot}
          style={{
            left: `${10 + i * 10}%`,
            animationDelay: `${i * 0.5}s`
          }}
        />
      ))}
    </div>
  )
}

export default TestDots