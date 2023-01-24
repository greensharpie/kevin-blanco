import React from 'react'
import './experience.css'
import { DiHtml5, DiCss3, DiJavascript, DiReact, DiBootstrap } from 'react-icons/di';
import { RiVuejsFill } from 'react-icons/ri';
import {
  SiPostgresql,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
} from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { MdOutlineLibraryBooks } from 'react-icons/md';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills</h5>
      <h2>My Experience</h2>  
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <DiHtml5/>
              <h4>HTML</h4>
            </article>
            <article className='experience__details'>
              <DiReact/>
              <h4>React.js</h4>
            </article>
            <article className='experience__details'>
              <DiJavascript/>
              <h4>JavaScript</h4>
            </article>
            <article className='experience__details'>
              <RiVuejsFill/>
              <h4>Vue.js</h4>
            </article>
            <article className='experience__details'>
              <DiCss3/>
              <h4>CSS</h4>
            </article>
            <article className='experience__details'>
              <SiTailwindcss/>
              <h4>TailwindCSS</h4>
            </article>
            <article className='experience__details'>
              <DiBootstrap/>
              <h4>Bootstrap</h4>
            </article>
          </div>
        </div>

        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <FaNodeJs/>
              <h4>Node.js</h4>
            </article>
            <article className='experience__details'>
              <SiExpress/>
              <h4>Express.j s</h4>
            </article>
            <article className='experience__details'>
              <SiPostgresql/>
              <h4>PostgreSQL</h4>
            </article>
            <article className='experience__details'>
              <SiMongodb/>
              <h4>MongoDB</h4>
            </article>
            <article className='experience__details'>
              <MdOutlineLibraryBooks/>
              <h4>Mongoose</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience


