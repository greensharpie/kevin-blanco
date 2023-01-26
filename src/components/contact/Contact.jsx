import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            {/* <h5>kevinjblanco@gmail.com</h5> */}
            <a href='mailto:kevinjblanco@gmail.com' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            {/* <h5>Let's Connect</h5> */}
            <a href='https://www.linkedin.com/in/kevinjblanco/' target='_blank'>Let's Connect</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Phone</h4>
            {/* <h5>+123456789</h5> */}
            <a href='' target='_blank'>Ring Me</a>
          </article>
        </div>
        <form action=''>
          <input type='text' name='name' placeholder='Your Name'required/>
          <input type='email' name='email' placeholder='Your E-mail'required/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact