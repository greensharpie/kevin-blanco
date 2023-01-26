import React from 'react'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portofolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src='' alt='portfolio1'/>
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="" className='btn'target='_blank'>GitHub</a>
          <a href="" className='btn btn-primary' target='_blank'>Live</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src='' alt='portfolio1'/>
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="" className='btn'target='_blank'>GitHub</a>
          <a href="" className='btn btn-primary' target='_blank'>Live</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src='' alt='portfolio1'/>
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="" className='btn'target='_blank'>GitHub</a>
          <a href="" className='btn btn-primary' target='_blank'>Live</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src='' alt='portfolio1'/>
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="" className='btn'target='_blank'>GitHub</a>
          <a href="" className='btn btn-primary' target='_blank'>Live</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src='' alt='portfolio1'/>
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="" className='btn'target='_blank'>GitHub</a>
          <a href="" className='btn btn-primary' target='_blank'>Live</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src='' alt='portfolio1'/>
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="" className='btn'target='_blank'>GitHub</a>
          <a href="" className='btn btn-primary' target='_blank'>Live</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio