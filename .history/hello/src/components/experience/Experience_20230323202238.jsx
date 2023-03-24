import React from 'react'
import './experience.css'
import {BsPatchCheck, BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>What Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill />
              <h4>HTML</html>
              <small> Experienced </small>

            </article>
          </div>
          </div> 
          <div className="experience_backend">


          </div>
      </div>
    </section>
  )
}

export default Experience