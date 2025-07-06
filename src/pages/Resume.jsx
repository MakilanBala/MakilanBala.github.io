// src/pages/Resume.jsx
import React from 'react'
import './Resume.css'
import resume from '../files/Makilan_Resume.pdf' 

export default function Resume() {
  return (
    <section className="resume-section">
      <h2 className="resume-title">My Resume</h2>
      <object
        data= {resume}
        type="application/pdf"
        className="resume-embed"
      >
        <p>
          Your browser doesn’t support embedded PDFs. You can{' '}
          <a href={resume} download>download the resume here</a>.
        </p>
      </object>
      <a href={resume} download className="btn-primary download-btn">
        Download Resume
      </a>
    </section>
  )
}
