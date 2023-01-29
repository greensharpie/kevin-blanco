import React from 'react'
import './about.css'
import PFP2 from '../../assets/PFP2.png'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>A Little About Me</h2>

      <div className="container about__container">
        <div className='about__me'>
        <div className="about__me-image">
          <img src={PFP2} alt='about'/>
        </div>
        </div>

        <div className='about__content'>
          {/* <div className='about__cards'>
            <article className='about__card'>
              <h5>Experience</h5>
            </article> 
          </div> */}
          <p> I discovered my passion for helping people through my work as an Athletic Trainer in the healthcare industry. I loved being able to make a positive impact on people's lives, but I knew I wanted to do more. That's when I decided to make a change and transition into the world of coding.</p>
          <p>I spent months learning new skills and working on projects independently and with teams. I became proficient in languages like JavaScript, and React. I was able to apply the problem-solving skills that I gained as a healthcare professional from working in traditional settings and also from working for a global company like Boeing. Now, I am excited to take on a new challenge in the tech industry and I am eager to collaborate with like-minded individuals on projects.</p>
          <p>When I'm not coding, you can usually find me outside hiking/backpacking, trying a new restaurant, or going on walks with my dog and wife. I would love to hear from you, and I invite you to take a look at my portfolio to see how I could make a positive impact on your project. </p>
          <a href='#contact' className='btn btn-primary'>Let's Chat!</a>
        </div>
      </div>
    </section>
  )
}

export default About