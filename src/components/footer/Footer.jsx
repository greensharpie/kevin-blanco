import React from 'react'
import './footer.css'
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href='#'className='footer__logo'>Kevin Blanco</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Experience</a></li>
        <li><a href='#'>Portfolio</a></li>
        <li><a href='#'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.linkedin.com/in/kevinjblanco/'><BsLinkedin/></a>
        <a href='https://github.com/greensharpie'><BsGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Kevin Blanco 2022.</small>
        <div>
          <small>
            Design inspired by Egator's{' '}
            <a
              href='https://egattor.com/rp2447/'
              target='_blank'
              rel='noopener noreferrer'
              className='credit'
            >
              {' '}
              React Portfolio
            </a>
          </small>
        </div>
      </div>
    </footer>
  )
}

export default Footer