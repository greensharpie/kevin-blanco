import React from 'react'
import './header.css'
import CallToAction from './CallToAction'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Kevin Blanco</h1>
        <h5>and I'm a Software Developer</h5>
        <CallToAction />
        <HeaderSocials />
        <div className='me'>
          <img src='' alt='me' />
        </div>

        <a href='#portfolio' className='scroll__down'>Portfolio</a>
      </div>
    </header>
  )
}

export default Header