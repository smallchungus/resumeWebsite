import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail></MdOutlineEmail>
            <h4>Email</h4>
            <h5>wchen1396@gmail.com</h5>
            <a href="mailto:wchen1396@gmail.com">Send a message</a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS */}
        <form action=""></form>
      </div>
    </section>
  )
}

export default Contact