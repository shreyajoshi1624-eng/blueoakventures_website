import styles from '../styles/Services.module.css'

const Services = () => {
  const services = [
    {
      icon: "🌳",
      title: "Oak1 Cohorts",
      subtitle: "Accelerate Your Startup",
      description: "45 days to refine, build, and connect you to investors."
    },
    {
      icon: "👩‍💼",
      title: "Women Entrepreneurs",
      subtitle: "Empowering Women Leaders",
      description: "Tailored support for women-led ventures."
    },
    {
      icon: "💰",
      title: "AIF Funds Advisory",
      subtitle: "Strategic Investment Solutions",
      description: "Expertise in Alternative Investment Funds."
    },
    {
      icon: "📈",
      title: "Personal Business Development",
      subtitle: "Strategies for individual entrepreneurs",
      description: "Bespoke advisory services for personal growth and fundable business plans."
    }
  ]

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>Our Services</h2>
          <p>Tailored Programs to Elevate Your Startup</p>
        </div>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <h4>{service.subtitle}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services