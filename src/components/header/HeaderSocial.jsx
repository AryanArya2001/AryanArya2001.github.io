import React from 'react'
import{BsLinkedin} from 'react-icons/bs'
import{FaGithub} from 'react-icons/fa'
import{FaInstagram} from 'react-icons/fa'


const HeaderSocial = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/aryan-arya-4393841a5/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/AryanArya2001" target="_blank"><FaGithub/></a>
        <a href="https://instagram.com/Aryannnnn_._" target="_blank"><FaInstagram/></a>
      
    </div>
  )
}

export default HeaderSocial