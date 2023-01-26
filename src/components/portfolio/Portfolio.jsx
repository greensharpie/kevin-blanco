import React from 'react'
import './portfolio.css'

const data = [
  {
    id: 1,
    image: 'IMG1',
    title: 'First Project Title',
    github: 'link to github',
    demo: 'link to live demo'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
                  <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title}/>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn'target='_blank'>GitHub</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio