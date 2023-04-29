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
          {
          <div className="about_cards">
            <article className="about_card">
              <FiAward className='about_icon'/>
              <h5>Experience</h5>
              <small>1 Year Working</small>
            </article>
            <article className="about_card">
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>200+ clients worldwide</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>80+ completed</small>
            </article>
          </div>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia nisl sit amet placerat gravida. Phasellus nibh neque, placerat in faucibus
          id, eleifend id dui. Nunc ultrices condimentum elit eu faucibus. Curabitur sed libero magna. Pellentesque magna dui, egestas sed turpis
          sit amet, pretium dictum orci. Suspendisse vestibulum lacinia elit quis tempus. Integer at enim velit. Aenean scelerisque mollis nulla eu finibus. Aenean eu purus lacinia, ultricies dolor ac, finibus elit. 
          Cras quis molestie ante. In tristique arcu libero, et egestas lorem eleifend ut. Maecenas eget sem scelerisque, aliquam nisl quis, consectetur urna. Sed at eros ac arcu iaculis blandit eget nec dui. Nullam porta, 
          ipsum vitae pharetra vestibulum, nunc mi lacinia eros, pellentesque varius tortor nulla ut dui. Sed blandit leo pretium egestas vulputate. Pellentesque porta bibendum ante et consectetur.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          
        </div>
      </div>
    </section>
  )
}

export default About