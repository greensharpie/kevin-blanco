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
            <img src={PFP2} alt='about' />
          </div>
        </div>

        <div className='about__content'>
          <p> I discovered my passion for problem-solving and helping people through my work as an Athletic Trainer in the healthcare industry. While I loved making a direct impact on people's lives, I knew I wanted to do more—so I transitioned into the world of software engineering.</p>
          <p>Over the past two years as a Software Engineer at Ally Financial, I've worked on web and mobile projects, collaborated across agile teams, and developed scalable, accessible solutions. My background in healthcare and experience working for a global company like Boeing have shaped my ability to adapt, think critically, and tackle complex challenges. I thrive in collaborative environments where I can leverage my skills in JavaScript, TypeScript, React.js, and React Native to build high-quality software.</p>
          <p>When I'm not coding, you can usually find me hiking, backpacking, trying a new restaurant, or going on walks with my dog and wife. I'd love to connect—feel free to check out my portfolio and see how I can contribute to your next project. </p>
          <a href='#contact' className='btn btn-primary'>Let's Chat!</a>
        </div>
      </div>
    </section>
  )
}

export default About