import { useState } from 'react'
import styles from '../styles/Contact.module.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    startupName: '',
    description: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.contactContent}>
          <h2>Get in Touch</h2>
          <p>Ready to take the next step? Submit your application and let's explore the possibilities.</p>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formRow}>
              <input
                type="text"
                name="startupName"
                placeholder="Startup Name"
                value={formData.startupName}
                onChange={handleChange}
                required
              />
            </div>
            <textarea
              name="description"
              placeholder="Brief Description"
              rows={4}
              value={formData.description}
              onChange={handleChange}
              required
            />
            <button type="submit" className={styles.btnPrimary}>
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact