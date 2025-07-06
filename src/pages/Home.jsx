
import React from 'react';
import profilePic from '../assets/images/profile.jpg';
import './Home.css';

export default function Home() {
  return (
    <section className="about-section">
      <div className="container about-content">
        <h2 className="about-title">About Me</h2>
        <img
          src={profilePic}
          alt="Makilan B."
          className="about-image"
        />
        <p className="about-text">
        Hi there! I am Makilan Balasubramanian, a computer science student and an aspiring software developer. I am currently studying at the University of Maryland, where I am also minoring in Innovation and Entrepreneurship. I have always had a fascination for computers and how they worked. As I learned more about programming and software development, I began to satisfy an itch to solve problems. In order to further expand my ability to solve problems I am seeking internships and pursuing personal passion projects, some of which you can find here :).
        </p>
      </div>
    </section>
  );
}
