import { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/FundedCompaniesWheel.module.css'

interface Company {
  id: number
  name: string
  initials: string
  color: string
  amount: string
  sector: string
}

const FundedCompaniesWheel = () => {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null)

  // Sample data with realistic Indian startup names
  const companies: Company[] = [
    { id: 1, name: 'TechVista Solutions', initials: 'TV', color: '#3b82f6', amount: '₹8.5 Cr', sector: 'SaaS' },
    { id: 2, name: 'HealthFirst India', initials: 'HF', color: '#10b981', amount: '₹12 Cr', sector: 'HealthTech' },
    { id: 3, name: 'EduLearn Pro', initials: 'EP', color: '#f59e0b', amount: '₹6.2 Cr', sector: 'EdTech' },
    { id: 4, name: 'FinSecure Pay', initials: 'FP', color: '#8b5cf6', amount: '₹15 Cr', sector: 'FinTech' },
    { id: 5, name: 'GreenEnergy Co', initials: 'GE', color: '#059669', amount: '₹20 Cr', sector: 'CleanTech' },
    { id: 6, name: 'FoodHub Express', initials: 'FH', color: '#ef4444', amount: '₹9.8 Cr', sector: 'Food Delivery' },
    { id: 7, name: 'LogiTrack Systems', initials: 'LS', color: '#06b6d4', amount: '₹11 Cr', sector: 'Logistics' },
    { id: 8, name: 'AgriTech Innovations', initials: 'AI', color: '#84cc16', amount: '₹7.5 Cr', sector: 'AgriTech' },
    { id: 9, name: 'RetailPro Solutions', initials: 'RP', color: '#ec4899', amount: '₹13.2 Cr', sector: 'Retail Tech' },
    { id: 10, name: 'CloudNine Services', initials: 'CN', color: '#6366f1', amount: '₹10 Cr', sector: 'Cloud Services' },
    { id: 11, name: 'MobiDrive Tech', initials: 'MD', color: '#f97316', amount: '₹14.5 Cr', sector: 'Mobility' },
    { id: 12, name: 'SecureNet Systems', initials: 'SN', color: '#14b8a6', amount: '₹16 Cr', sector: 'Cybersecurity' },
  ]

  const handleCompanyClick = (company: Company) => {
    setSelectedCompany(company)
  }

  const closePopup = () => {
    setSelectedCompany(null)
  }

  return (
    <section className={styles.wheelSection}>
      {/* Decorative Geometric Shapes */}
      <div className={styles.decorativeShapes}>
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
        <div className={styles.shape3}></div>
        <div className={styles.shape4}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.splitLayout}>
          {/* Left Side - Spinning Wheel */}
          <div className={styles.leftSide}>
            <div className={styles.wheelContainer}>
              {/* Orbit Circle */}
              <div className={styles.orbitCircle}></div>

              {/* Center Logo */}
              <div className={styles.centerLogo}>
                <Image
                  src="/BlueOakLogo3.png"
                  alt="BlueOak Ventures"
                  width={120}
                  height={120}
                  className={styles.blueOakLogo}
                />
              </div>

              {/* Connecting Lines */}
              <svg className={styles.connectionLines} viewBox="0 0 450 450">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(44, 90, 160, 0.5)" />
                    <stop offset="100%" stopColor="rgba(44, 90, 160, 0.5)" />
                  </linearGradient>
                </defs>
                <g className={styles.linesGroup}>
                  {companies.map((company, index) => {
                    const angle = (360 / companies.length) * index;
                    const radian = (angle * Math.PI) / 180;
                    const x = 225 + 190 * Math.cos(radian);
                    const y = 225 + 190 * Math.sin(radian);
                    return (
                      <g key={company.id}>
                        <line
                          x1="225"
                          y1="225"
                          x2={x}
                          y2={y}
                          className={styles.connectionLine}
                          stroke="rgba(44, 90, 160, 0.5)"
                          strokeWidth="2"
                          strokeDasharray="8,4"
                        />
                        {/* Animated Dot */}
                        <circle
                          className={styles.animatedDot}
                          r="4"
                          fill="#2c5aa0"
                          style={{
                            '--delay': `${index * 0.5}s`,
                          } as React.CSSProperties}
                        >
                          <animateMotion
                            dur="3s"
                            repeatCount="indefinite"
                            begin={`${index * 0.5}s`}
                          >
                            <mpath href={`#path${index}`} />
                          </animateMotion>
                        </circle>
                        {/* Hidden path for animation */}
                        <path
                          id={`path${index}`}
                          d={`M 225 225 L ${x} ${y}`}
                          fill="none"
                          stroke="none"
                        />
                      </g>
                    );
                  })}
                </g>
              </svg>

              {/* Revolving Companies */}
              <div className={styles.orbit}>
                {companies.map((company, index) => (
                  <div
                    key={company.id}
                    className={styles.companyLogo}
                    style={{
                      '--index': index,
                      '--total': companies.length,
                    } as React.CSSProperties}
                    onClick={() => handleCompanyClick(company)}
                  >
                    <div className={styles.logoWrapper} style={{ backgroundColor: company.color }}>
                      <span className={styles.companyInitials}>{company.initials}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className={styles.rightSide}>
            <h2 className={styles.sectionTitle}>Startups That Recently Got Funded in India</h2>
            <p className={styles.sectionSubtitle}>Click on any logo to see their success story</p>
            
            {/* Company Details Display */}
            {selectedCompany ? (
              <div className={styles.companyDetails}>
                <div className={styles.detailsHeader}>
                  <div className={styles.detailsLogoCircle} style={{ backgroundColor: selectedCompany.color }}>
                    <span className={styles.detailsInitials}>{selectedCompany.initials}</span>
                  </div>
                  <h3 className={styles.detailsTitle}>{selectedCompany.name}</h3>
                </div>
                <div className={styles.detailsBody}>
                  <div className={styles.infoRow}>
                    <span className={styles.infoLabel}>💰 Amount Raised:</span>
                    <span className={styles.infoValue}>{selectedCompany.amount}</span>
                  </div>
                  <div className={styles.infoRow}>
                    <span className={styles.infoLabel}>🏢 Sector:</span>
                    <span className={styles.infoValue}>{selectedCompany.sector}</span>
                  </div>
                  <div className={styles.successBadge}>
                    ✓ Successfully Funded with BlueOak Ventures
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles.placeholderMessage}>
                <div className={styles.placeholderIcon}>👈</div>
                <p>Click on any company logo to view their funding details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FundedCompaniesWheel
