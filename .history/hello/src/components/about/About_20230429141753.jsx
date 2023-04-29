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
            </article>  */}
            <article className="about_card">
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>25+ completed</small>
            </article>
          </div>
          
          <p>Hello, my name is William Chen and I am a current master's student in computer science at the New Jersey Institute of Technology. My passion lies in the fields of machine learning and full stack development. I recently completed my Bachelor of Arts in Psychology with a minor in Computer Science from Rutgers University.
          </p>
          <p>I'm currently pursuing a Master's degree in Computer Science and I'm passionate about machine learning and full stack development. I have a strong background in computer science, having completed my Bachelor's degree in Psychology with a Minor in Computer Science from Rutgers University. During my undergraduate studies, I gained experience in web development, working as a Web Development Intern at Arroyo Seco Saints, a non-profit organization. I also honed my skills in software engineering, working as a Software Engineer Intern at Spencer's Gifts, where I developed an internal login and register system using Apache POI and a SQL server.

      </div>
    </section>
  )
}

export default About