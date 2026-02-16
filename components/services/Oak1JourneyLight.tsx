import { useState } from 'react'
import styles from '../../styles/services/Oak1JourneyLight.module.css'

const Oak1JourneyLight = () => {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      number: "01",
      title: "Evaluation & Funding Score",
      description: "Evaluate startup idea, market, and traction. Assign Oak1 Fundraising Score & readiness level.",
      icon: "🔍",
      color: "#3b82f6"
    },
    {
      number: "02",
      title: "Capital Range Finalisation",
      description: "Define realistic fundraise amount. Decide optimal round size and valuation logic.",
      icon: "💰",
      color: "#14b8a6"
    },
    {
      number: "03",
      title: "Founder → Fundable CEO",
      description: "Sharpen narrative, metrics, and pitch clarity. Prepare founder for investor conversations.",
      icon: "🎯",
      color: "#22c55e"
    },
    {
      number: "04",
      title: "Investor Readiness",
      description: "Pitch deck, data room, and outreach strategy. Shortlist relevant investors.",
      icon: "📊",
      color: "#f59e0b"
    },
    {
      number: "05",
      title: "Fundraise Execution",
      description: "Active investor discussions. Support through closing and commitment phase.",
      icon: "🚀",
      color: "#8b5cf6"
    }
  ]

  return (
    <section className={styles.roadmap}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Oak1 45 Days Roadmap</h2>
          <p className={styles.subtitle}>A structured path from idea to successful fundraise</p>
        </div>

        <div className={styles.timeline}>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill}
              style={{ width: `${(activeStep + 1) * 20}%` }}
            />
          </div>

          <div className={styles.steps}>
            {steps.map((step, index) => (
              <div
                key={index}
                className={`${styles.stepWrapper} ${index <= activeStep ? styles.active : ''}`}
                onMouseEnter={() => setActiveStep(index)}
              >
                <div className={styles.stepLine} />
                
                <div className={styles.stepCircle} style={{ borderColor: step.color }}>
                  <div className={styles.stepInner} style={{ background: step.color }}>
                    <span className={styles.stepIcon}>{step.icon}</span>
                  </div>
                  <div className={styles.stepNumber}>{step.number}</div>
                </div>

                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle} style={{ color: step.color }}>
                    {step.title}
                  </h3>
                  <p className={styles.stepDesc}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Oak1JourneyLight
