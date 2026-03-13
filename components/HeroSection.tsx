import Image from 'next/image'
import styles from '../styles/HeroSection.module.css'

const HeroSection = () => {
  const businessPeople = [
    {
      id: 1,
      src: "/Hp_banner5.jpg",
      alt: "Indian Business Professional",
      className: styles.cardOrange,
      badge: "₹25Cr Raised"
    },
    {
      id: 2,
      src: "/Hp_banner2.jpg",
      alt: "Indian Business Professional",
      className: styles.cardYellow,
      badge: "₹15Cr Raised"
    },
    {
      id: 3,
      src: "/Hp_banner9.jpg",
      alt: "Indian Business Professional",
      className: styles.cardGreen,
      badge: "₹40Cr Raised"
    },
    {
      id: 4,
      src: "/Hp_banner6.jpg",
      alt: "Indian Business Professional",
      className: styles.cardGreenBottom,
      badge: "₹35Cr Raised"
    },
    {
      id: 5,
      src: "/Hp_banner7.jpg",
      alt: "Indian Business Professional",
      className: styles.cardBlue,
      badge: "₹30Cr Raised"
    },
    {
      id: 6,
      src: "/Hp_banner1.jpg",
      alt: "Indian Business Professional",
      className: styles.cardMint,
      badge: "₹50Cr Raised"
    }
  ]

  const avatarImages = [
    "/Hp_banner1.jpg",
    "/Hp_banner2.jpg",
    "/Hp_banner6.jpg"
  ]

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <a 
            href="https://wa.me/917744841015" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.heroBadge}
          >
            <div className={styles.playButton}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
              </svg>
            </div>
            <span>Apply Now</span>
          </a>
          
          <h1 className={styles.heroTitle}>
            Elevate Your Startup With <span className={styles.highlight}>Bold Funding</span>
          </h1>
          
          <div className={styles.heroAvatars}>
            <div className={styles.avatarGroup}>
              {avatarImages.map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt="Success Story"
                  width={40}
                  height={40}
                  className={styles.avatar}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className={styles.heroVisualGrid}>
          {businessPeople.map((person) => (
            <div key={person.id} className={`${styles.imageCard} ${person.className}`}>
              <Image
                src={person.src}
                alt={person.alt}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection