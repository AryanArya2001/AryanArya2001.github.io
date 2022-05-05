import React from 'react'
import './nav.css'
import{AiOutlineHome}from 'react-icons/ai'
import{FiUser}from 'react-icons/fi'
import{RiBookLine}from 'react-icons/ri'
import{AiTwotoneExperiment}from 'react-icons/ai'
import{BiMessageSquareDots}from 'react-icons/bi'
import{useState} from 'react'

const Nav = () => {
  const[activeNav, setActiveNav] = useState("#")
  return (
<nav>
  <a href="#" onClick={() => setActiveNav('#')}className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
  <a href="#about" onClick={() => setActiveNav('#about')}className={activeNav === '#about' ? 'active' : ''}><FiUser/></a>
  <a href="#experience" onClick={() => setActiveNav('#experience')}className={activeNav === '#experience' ? 'active' : ''}><RiBookLine/></a>
  <a href="#project" onClick={() => setActiveNav('#project')}className={activeNav === '#project' ? 'active' : ''}><AiTwotoneExperiment/></a>
  <a href="#contact" onClick={() => setActiveNav('#contact')}className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDots/></a>
</nav>
  )
}

export default Nav
