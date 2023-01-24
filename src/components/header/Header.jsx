import React from 'react'
import './header.css'
import CallToAction from './CallToAction'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Kevin Blanco</h1>
        <h5>and I'm a Full-Stack Software Engineer</h5>
        <CallToAction />
      </div>
    </header>
  )
}

export default Header