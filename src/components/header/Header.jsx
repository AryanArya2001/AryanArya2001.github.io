import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocial.jsx'
import ME from './../../assessts/ME.jpg'
import ME2 from '../../assessts/ME2.jpg'

const Header = () => {
  return (
   <header>
     <div className="container header__container">
     <h5>Hello I'm</h5>
     <h1>Aryan Arya</h1>
     <h5 className="text-light">Developer/Student</h5>
     <CTA/>
     <HeaderSocial/>
     <div className='me'>
       <img src={ME2} alt="" />
     </div>

     <a href="#contact" className="scroll__down">Scroll down</a>
     </div>
   </header>
  )
}

export default Header
