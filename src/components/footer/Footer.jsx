import React from 'react'
import './footer.css'
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href='#'className='footer__logo'>Kevin Blanco</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.linkedin.com/in/kevinjblanco/' target='_blank' rel='noopener noreferrer'><BsLinkedin/></a>
        <a href='https://github.com/greensharpie' target='_blank' rel='noopener noreferrer'><BsGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Kevin Blanco 2023.</small>{' '}
        <small><a href='https://github.com/greensharpie/kevin-blanco' target='_blank'>Portfolio Repo</a></small>
        <div>
          <small>
            Design inspired by Egator's Portfolio
          </small>
        </div>
      </div>
    </footer>
  )
}

export default Footer