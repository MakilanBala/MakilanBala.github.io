import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

// ← Replace these with your actual IDs from EmailJS dashboard
const SERVICE_ID  = 'service_ykizfat'
const TEMPLATE_ID = 'template_b90u87c'
const PUBLIC_KEY   = 'an2OdEuJZD_acfNU9'

export default function Contact() {
  const formRef = useRef()
  const [status, setStatus] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()
    setStatus('Sending…')

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        () => {
          setStatus('Message sent! 🎉')
          formRef.current.reset()
        },
        (err) => {
          console.error(err)
          setStatus('Failed to send. Please try again.')
        }
      )
  }

  return (
    <section className="contact-section">
      <h2 className="contact-title">Contact Me</h2>

      <form ref={formRef} onSubmit={sendEmail} className="contact-form">
        <label>
          Name
          <input type="text" name="user_name" required />
        </label>

        <label>
          Email
          <input type="email" name="user_email" required />
        </label>

        <label>
          Message
          <textarea name="message" rows="5" required />
        </label>

        <button type="submit" className="btn-primary">Send Message</button>
      </form>

      {status && <p className="contact-status">{status}</p>}
    </section>
  )
}
