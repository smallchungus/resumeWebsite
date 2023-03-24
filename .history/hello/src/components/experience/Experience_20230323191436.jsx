import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from'react-icons/bs'



const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill />
              <h4>HTML</h4>
              <small className='text-light' >Experienced </small>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill />
              <h4>CSS</h4>
              <small className='text-light' >Intermediate </small>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill />
              <h4>React</h4>
              <small className='text-light' >Intermediate </small>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill />
              <h4>Bootstrap</h4>
              <small className='text-light' >Beginner </small>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill />
              <h4>Javascript</h4>
              <small className='text-light' >Intermediate </small>
            </article>
          </div>
        </div>



        <div className="experience_backend">
          <h3>Backend Development</h3>
          <article className='experience_details'>
              <BsPatchCheckFill />
              <h4>Python</h4>
              <small className='text-light' >Experienced </small>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill />
              <h4>Java</h4>
              <small className='text-light' >Experienced </small>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill />
              <div>
              <h4>MySQL</h4>
              <small className='text-light' >Intermediate </small>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill />
              <div>
                <h4>C++</h4>
                <small className='text-light' >Beginner </small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill />
              <div>
                <h4>C</h4>
                <small className='text-light' >Beginner </small>
              </div>
            </article>
        </div>
      </div>
    </section>
  )
}

export default Experience