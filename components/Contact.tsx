import { useState } from 'react'
import styles from '../styles/Contact.module.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    startupName: '',
    description: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')
    
    try {
      // Google Apps Script Web App URL
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbygFS_5HGMcTyZ-RyV99gEdvLaLluqmRpl7ANaRHbP9K3QH9UbLwB8S8u27YqOn9i4/exec'
      
      const formDataToSend = {
        name: formData.name,
        email: formData.email,
        startupName: formData.startupName,
        description: formData.description,
        timestamp: new Date().toLocaleString()
      }

      console.log('Sending data:', formDataToSend)

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(formDataToSend),
        headers: {
          'Content-Type': 'text/plain',
        },
      })

      console.log('Response status:', response.status)
      const result = await response.text()
      console.log('Response:', result)

      setSubmitMessage('Thank you! Your application has been submitted successfully.')
      setFormData({
        name: '',
        email: '',
        startupName: '',
        description: ''
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitMessage('Failed to send message. Please contact us directly at blueoakconsultation@gmail.com')
    } finally {
      setIsSubmitting(false)
    }
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
                disabled={isSubmitting}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
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
                disabled={isSubmitting}
              />
            </div>
            <textarea
              name="description"
              placeholder="Brief Description"
              rows={4}
              value={formData.description}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
            {submitMessage && (
              <div className={styles.submitMessage}>
                {submitMessage}
              </div>
            )}
            <button type="submit" className={styles.btnPrimary} disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Submit Application'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact