import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FiAward} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know </h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me" >
          <div className="about_me-image">
          <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          
          <div className="about_cards">
            <article className="about_card">
              <FiAward className='about_icon'/>
              <h5>Experience</h5>
              <small>1 Year Working</small>
            </article>
            {/* <article className="about_card">
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>200+ clients worldwide</small>
            </article> */}
            <article className="about_card">
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>25+ completed</small>
            </article>
          </div>
          
          <p>
          Hello, my name is William Chen and I am a current master's student in computer science at the New Jersey Institute of Technology. My passion lies in the fields of machine learning and full stack development. I recently completed my Bachelor of Arts in Psychology with a minor in Computer Science from Rutgers University.

I have gained valuable experience in software engineering through my internships at StudyFind and Spencer's Gifts. At StudyFind, I collaborated with a team of developers to create dynamic testing components using JavaScript and React. At Spencer's Gifts, I created an internal login and register system and developed a RESTful API using Spring Boot. I have also honed my web development skills through my work as a web development intern at the Arroyo Seco Saints, where I implemented custom WordPress plugins and revamped outdated HTML and WordPress websites using CSS.

In addition to my professional experience, I have completed several projects related to numerical algorithms and modeling. One project involved creating scripts for cubic splines and least squares modeling using Matlab, while another focused on real estate pricing using C and the Gauss-Jordan Elimination Algorithm.

Outside of my academic and professional pursuits, I am passionate about mentoring and tutoring. I currently serve as a mentor for an 11th-grade student through iMentor and provide academic tutoring services for Pandemic Professors to support students in achieving academic success despite challenges posed by the pandemic.

Overall, I am a driven and dedicated individual with a strong background in computer science and a passion for applying my skills to real-world problems.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          
        </div>
      </div>
    </section>
  )
}

export default About