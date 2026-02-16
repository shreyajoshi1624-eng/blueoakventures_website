import Image from 'next/image'
import styles from '../../styles/services/OtherServices.module.css'

const OtherServices = () => {
  const services = [
    {
      title: "Women Entrepreneurs",
      description: "Specialized support for women-led startups with dedicated mentorship and funding guidance",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop&crop=faces"
    },
    {
      title: "AIF Funds Advisory", 
      description: "Expert guidance on Alternative Investment Funds and regulatory compliance",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=300&fit=crop&crop=faces"
    },
    {
      title: "Personal Business Development",
      description: "Individual coaching for business growth and leadership development",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=faces"
    }
  ]

  return (
    <section className={styles.otherServices}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>Other Services</h2>
          <p>Additional programs to support your entrepreneurial journey</p>
        </div>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceImage}>
                <Image
                  src={service.image}
                  alt={`${service.title} - Professional business consultation`}
                  width={400}
                  height={300}
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button className={styles.learnMoreBtn}>Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OtherServices