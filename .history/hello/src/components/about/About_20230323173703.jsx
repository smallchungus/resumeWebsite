import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FiAward} from 'react-icons/fi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know </h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about me" >
          <div className="about_me-image">
          <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article classNane="about_card">
              <FiAward className='about_icon'/>
              <h5>Experience</h5>
              <small>1 Year Working</small>
            </article>

            <article classNane="about_card">
              <FiAward className='about_icon'/>
              <h5>Clients</h5>
              <small>200+ clients worldwide</small>
            </article>

            <article classNane="about_card">
              <FiAward className='about_icon'/>
              <h5>Projects</h5>
              <small>80+ completed</small>
            </article>
          </div>
        </div>

      </div>

    </section>
  )
}

export default About