import React from 'react'
import './about.css'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>A Little About Me</h2>

      <div className="container about__container">
        <div className='about__me'>
        <div className="about__me-image">
          <img src='' alt='about image'/>
        </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <h5>Experience</h5>
            </article> 
          </div>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reprehenderit deserunt quam id quis ipsa, esse dolor facilis voluptatum, aliquam sit aut, animi consequatur molestiae? Maxime nulla distinctio natus architecto.</p>
          <a href='#contact' className='btn btn-primary'>Let's Chat!</a>
        </div>
      </div>
    </section>
  )
}

export default About