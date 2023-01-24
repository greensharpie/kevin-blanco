import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {BsFolder2Open} from 'react-icons/bs'
import {BiMessageSquareDetail} from 'react-icons/bi'


const Nav = () => {
  return (
    <nav>
      <a href='#'><AiOutlineHome/></a>
      <a href='#about'><AiOutlineUser/></a>
      <a href='#experience'><BiBook/></a>
      <a href='#portfolio'><BsFolder2Open/></a>
      <a href='#contact'><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav