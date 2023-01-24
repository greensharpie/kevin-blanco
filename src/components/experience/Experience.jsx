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
              <DiHtml5 className='experience__details-icon'/>
              <div>
              <h4>HTML</h4>
              </div>
            </article>
            <article className='experience__details'>
              <DiReact className='experience__details-icon'/>
              <div>
              <h4>React.js</h4>
              </div>
            </article>
            <article className='experience__details'>
              <DiJavascript className='experience__details-icon'/>
              <div>
              <h4>JavaScript</h4>
              </div>
            </article>
            <article className='experience__details'>
              <RiVuejsFill className='experience__details-icon'/>
              <div>
              <h4>Vue.js</h4>
              </div>
            </article>
            <article className='experience__details'>
              <DiCss3 className='experience__details-icon'/>
              <div>
              <h4>CSS</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiTailwindcss className='experience__details-icon'/>
              <div>
              <h4>TailwindCSS</h4>
              </div>
            </article>
            <article className='experience__details'>
              <DiBootstrap className='experience__details-icon'/>
              <div>
              <h4>Bootstrap</h4>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <FaNodeJs className='experience__details-icon'/>
              <div>
              <h4>Node.js</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiExpress className='experience__details-icon'/>
              <div>
              <h4>Express.js</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiPostgresql className='experience__details-icon'/>
              <div>
              <h4>PostgreSQL</h4>
              </div>
            </article>
            <article className='experience__details'>
              <SiMongodb className='experience__details-icon'/>
              <div>
              <h4>MongoDB</h4>
              </div>
            </article>
            <article className='experience__details'>
              <MdOutlineLibraryBooks className='experience__details-icon'/>
              <div>
              <h4>Mongoose</h4> 
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience


