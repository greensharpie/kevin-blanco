import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/IMG1.png'
import IMG2 from '../../assets/IMG2.png'
import IMG3 from '../../assets/IMG3.png'
import IMG4 from '../../assets/IMG4.png'
import IMG5 from '../../assets/IMG5.png'
import IMG6 from '../../assets/IMG6.png'
import { DiHtml5, DiCss3, DiJavascript, DiReact } from 'react-icons/di';
import {
  SiPostgresql,
  SiMongodb,
  SiExpress,
} from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Tetris Replica',
    stack: <> <DiHtml5 /> <DiJavascript /> <DiCss3 /> </>,
    github: 'https://github.com/greensharpie/Tetris',
    demo: 'https://main.d28pdf8t2f2caq.amplifyapp.com/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Door Drop',
    stack: <><SiPostgresql /> <SiExpress /> <DiReact /> <FaNodeJs /> <DiCss3 /> </>,
    github: 'https://github.com/greensharpie/Door_Drop_Frontend',
    demo: 'https://main.djedseh58i37e.amplifyapp.com/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'ReVinyl',
    stack: <><SiPostgresql /> <SiExpress /> <DiReact /> <FaNodeJs /> <DiCss3 /> </>,
    github: 'https://github.com/mashbash2150/ReVinyl-Frontend',
    demo: 'https://revinyl-frontend.herokuapp.com/'
  },
  // {
  //   id: 4,
  //   image: IMG4,
  //   title: 'Bookshelf',
  //   stack: <><SiMongodb/> <SiExpress/> <DiReact/> <FaNodeJs/> <DiCss3/> </>,
  //   github: 'https://github.com/greensharpie/BookShelf',
  //   demo: 'https://bookshelf-crud.herokuapp.com/'
  // },
  {
    id: 4,
    image: IMG5,
    title: 'War - The Card Game',
    stack: <> <DiHtml5 /> <DiJavascript /> <DiCss3 /> </>,
    github: 'https://github.com/greensharpie/kevins-war-cardgame',
    demo: 'https://war-the-cardgame.surge.sh/'
  },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: 'Coasterpedia',
  //   stack: <><SiMongodb/> <SiExpress/> <DiReact/> <FaNodeJs/> <DiCss3/> </>,
  //   github: 'https://github.com/julialima08/Coasterpedia',
  //   demo: 'https://coasterpedia-app.herokuapp.com/'
  // },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, stack, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img className="portfolio__image" src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='stack'>{stack}</div>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel='noopener noreferrer'>GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Live</a>
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