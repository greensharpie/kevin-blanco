import React from 'react'
import './portfolio.css'

const data = [
  {
    id: 1,
    image: 'IMG1',
    title: 'Tetris Replica',
    github: 'https://github.com/greensharpie/Tetris',
    demo: 'https://main.d28pdf8t2f2caq.amplifyapp.com/'
  },
  {
    id: 2,
    image: 'IMG2',
    title: 'Door Drop',
    github: 'https://github.com/greensharpie/Door_Drop_Frontend',
    demo: 'https://main.djedseh58i37e.amplifyapp.com/'
  },
  {
    id: 3,
    image: 'IMG3',
    title: 'ReVinyl',
    github: 'https://github.com/mashbash2150/ReVinyl-Frontend',
    demo: 'https://revinyl-frontend.herokuapp.com/'
  },
  {
    id: 4,
    image: 'IMG4',
    title: 'Bookshelf',
    github: 'https://github.com/greensharpie/BookShelf',
    demo: 'https://bookshelf-crud.herokuapp.com/'
  },
  {
    id: 5,
    image: 'IMG5',
    title: 'War - The Card Game',
    github: 'https://github.com/greensharpie/kevins-war-cardgame',
    demo: 'https://war-the-cardgame.surge.sh/'
  },
  {
    id: 6,
    image: 'IMG1',
    title: 'Coasterpedia',
    github: 'https://github.com/julialima08/Coasterpedia',
    demo: 'https://coasterpedia-app.herokuapp.com/'
  },
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