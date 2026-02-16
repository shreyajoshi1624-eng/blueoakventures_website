import styles from '../styles/StaticDots.module.css'

const StaticDots = () => {
  return (
    <div className={styles.staticDots}>
      {Array.from({ length: 20 }, (_, i) => (
        <div 
          key={i} 
          className={styles.dot}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}
    </div>
  )
}

export default StaticDots