import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerBottom}>
          <p>&copy; 2024 BlueOak Ventures | <a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer