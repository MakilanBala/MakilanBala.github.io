import React, { useRef } from 'react';
import profilePic from '../assets/images/profile.jpg';
import { Link } from 'react-router-dom';
import './Home.css';

import "./Cheat_Game_Project";


import {
  SiPython,
  SiJavascript,
  SiCplusplus,
  SiC,
  SiRust,
  SiOcaml,
  SiSqlite,
  SiRacket,
  SiReact,
  SiExpress,
  SiPandas,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiScipy,
  SiGit,
  SiGithub,
  SiEclipseide,
  SiAndroidstudio,
  SiMongodb,
  SiLinux,
  SiHtml5,
  SiCss3,
} from 'react-icons/si';

const placeholderUrl = 'https://via.placeholder.com/240x160/eeeeee/ffffff?text=%20'

const skillCategories = [
  'Languages',
  'Frameworks & Libraries',
  'Runtimes & Platforms',
  'AI & Machine Learning',
  'Development Tools',
  'Cloud & DevOps',
  'Databases',
  'Other'
]

const skills = [
  // Languages
  { icon: null,       label: "Java",        category: 'Languages' },
  { icon: SiPython,     label: "Python",      category: 'Languages' },
  { icon: SiJavascript, label: "JavaScript",  category: 'Languages' },
  { icon: SiCplusplus,  label: "C++",         category: 'Languages' },
  { icon: SiC,          label: "C",           category: 'Languages' },
  { icon: SiRust,       label: "Rust",        category: 'Languages' },
  { icon: SiOcaml,      label: "Ocaml",       category: 'Languages' },
  { icon: null,     label: "SQL",         category: 'Languages' },
  { icon: SiRacket,     label: "Racket",      category: 'Languages' },
  { icon: null,     label: "Matlab",      category: 'Languages' },

  // Frameworks & Libraries
  { icon: SiReact,      label: "React",             category: 'Frameworks & Libraries' },
  { icon: SiExpress,    label: "Express.js",        category: 'Frameworks & Libraries' },
  { icon: SiPandas,     label: "Pandas",            category: 'Frameworks & Libraries' },

  // Runtimes & Platforms
  { icon: null,  label: "Node.js",           category: 'Runtimes & Platforms' },

  // AI & Machine Learning
  { icon: SiTensorflow, label: "TensorFlow",        category: 'AI & Machine Learning' },
  { icon: SiPytorch,    label: "PyTorch",           category: 'AI & Machine Learning' },
  { icon: SiScikitlearn,label: "scikit-learn",      category: 'AI & Machine Learning' },
  { icon: SiScipy,      label: "scipy",             category: 'AI & Machine Learning' },

  // Development Tools
  { icon: SiGit,               label: "Git",                   category: 'Development Tools' },
  { icon: SiGithub,            label: "GitHub",                category: 'Development Tools' },
  { icon: SiEclipseide,        label: "Eclipse",               category: 'Development Tools' },
  { icon: SiAndroidstudio,     label: "Android Studio",        category: 'Development Tools' },
  { icon: null,  label: "Visual Studio Code",    category: 'Development Tools' },

  // Cloud & DevOps
  { icon: null, label: "AWS",                 category: 'Cloud & DevOps' },

  // Databases
  { icon: SiMongodb,   label: "MongoDB",             category: 'Databases' },

  // Other
  { icon: SiLinux,     label: "Linux",               category: 'Other' },
  { icon: SiHtml5,     label: "HTML",                category: 'Other' },
  { icon: SiCss3,      label: "CSS",                 category: 'Other' },
];

 

const projects = [
  {
    id: 'project-1',
    title: 'Cheat Card Game',
    image: placeholderUrl,
    description: 'A card game implemented in Java.',
    link: '/cheat-game'                  // ← add your route here
  },

];

export default function Home() {
  const carouselRef = useRef(null)
  const CARD_WIDTH = 300;

  
  const scrollLeft  = () =>
    carouselRef.current.scrollBy({ left: -CARD_WIDTH, behavior: 'smooth' })

  const scrollRight = () =>
    carouselRef.current.scrollBy({ left:  CARD_WIDTH, behavior: 'smooth' })

  return (
    <>
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

      <section className="projects-gallery">
        <div className="container">
          <h2>Projects</h2>

          <div className="projects-carousel">
            <button className="arrow left"  onClick={scrollLeft}  aria-label="Scroll left">❮</button>

            <div ref={carouselRef} className="projects-grid">
              {projects.map(({ id, title, image, description, link }) => {
                const content = (
                  <>
                    <img src={image} alt={title} />
                    <div className="project-overlay"><p>{description}</p></div>
                    <div className="project-title">{title}</div>
                  </>
                )

                return link ? (
                  <Link to={link} key={id} className="project-card">
                    {content}
                  </Link>
                ) : (
                  <div key={id} className="project-card">
                    {content}
                  </div>
                )
              })}
            </div>

            <button className="arrow right" onClick={scrollRight} aria-label="Scroll right">❯</button>
          </div>
          
        </div>
      </section>

      <section className="skills-section">
        <div className="container">
          <h2>Skills</h2>

          <div className="skills-grid">
            {skillCategories.map((category) => (
              <div key={category} className="skill-category">
                <h3>{category}</h3>
                <ul>
                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill, index) => {
                      const Icon = skill.icon;              // get the component
                      return (
                        <li key={index}>
                          {Icon && <Icon className="skill-icon" size={24} aria-label={skill.label} />}
                          {skill.label}
                        </li>
                      );
                    })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
    
  );
}
