import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {useRef} from 'react'
import emailjs from 'emailjs-com'


const Contact = () => 
{
  const form = useRef();

  const sendEmail = (e) => 
  {
    e.preventDefault();

  emailjs.sendForm('service_ygormyc', 'template_jckmqdi', form.current, 'NgJDTMBuRfI8X34An')

  e.target.reset;
  .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
 };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>wchen1396@gmail.com</h5>
            <a href="mailto:wchen1396@gmail.com">Send a message</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>wchen1396@gmail.com</h5>
            <a href="https://www.facebook.com/smalltaiwaneseboyo/">Send a message</a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact