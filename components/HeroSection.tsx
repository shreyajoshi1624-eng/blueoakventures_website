import Image from 'next/image'
import styles from '../styles/HeroSection.module.css'

const HeroSection = () => {
  const businessPeople = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=faces",
      alt: "Indian Business Professional",
      className: styles.cardOrange,
      badge: "₹25Cr Raised"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=faces",
      alt: "Indian Business Professional",
      className: styles.cardYellow,
      badge: "₹15Cr Raised"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=350&h=600&fit=crop&crop=faces",
      alt: "Indian Business Professional",
      className: styles.cardGreen,
      badge: "₹40Cr Raised"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=350&h=450&fit=crop&crop=faces",
      alt: "Indian Business Professional",
      className: styles.cardBlue,
      badge: "₹30Cr Raised"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&crop=faces",
      alt: "Indian Business Professional",
      className: styles.cardMint,
      badge: "₹50Cr Raised"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=faces",
      alt: "Indian Business Professional",
      className: styles.cardTeal,
      badge: "₹20Cr Raised"
    }
  ]

  const avatarImages = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=40&h=40&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=faces"
  ]

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <div className={styles.playButton}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
              </svg>
            </div>
            <span>Watch Success Stories</span>
          </div>
          
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
              <div className={styles.cardOverlay}>
                <div className={styles.successBadge}>{person.badge}</div>
              </div>
            </div>
          ))}
          
          <div className={styles.centerCta}>
            <div className={styles.ctaCircle}>
              <span>Know Your Funding Score</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection