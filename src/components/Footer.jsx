import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <a
          href="https://github.com/makilanbala"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="footer-icon" />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/makilan-bala/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="footer-icon" />
          LinkedIn
        </a>

        <a href="mailto:makilanbala@gmail.com">
          <FaEnvelope className="footer-icon" />
          Email
        </a>

        <a href="tel:+13014310762">
          <FaPhone className="footer-icon" />
          Phone
        </a>
      </div>
    </footer>
  )
}
