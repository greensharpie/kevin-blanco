import React from 'react'
import './header.css'
import CallToAction from './CallToAction'
import HeaderSocials from './HeaderSocials'
import PFP from '../../assets/PFP1.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Kevin Blanco</h1>
        <h5>and I'm a Software Engineer</h5>
        <CallToAction />
        <HeaderSocials />
        <div className='me'>
          <img src={PFP} alt='me' className='pfp' />
        </div>

        <a href='#portfolio' className='scroll__down'>Portfolio</a>
      </div>
    </header>
  )
}

export default Header