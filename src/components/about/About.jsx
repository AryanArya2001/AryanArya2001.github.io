import React from 'react'
import'./about.css'
import ME from '../../assessts/ME.jpg'
import ME2 from '../../assessts/ME2.jpg'
import{FaAward}from 'react-icons/fa'
import{BiGitBranch}from 'react-icons/bi'
import{HiCode}from 'react-icons/hi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
        <div className="about__me-image">
        <img src={ME}alt="About Image" />
        </div>
        </div>

      
      <div className="aboutme__content">
      <div className="about__cards">
        <article className="about__card">
          <FaAward className="about__icon"/>
          <h5>Experience</h5>
          <small>Fresher</small>
          <div><small>(Pre-Final Year)</small></div>
        </article>

        <article className="about__card">
          <BiGitBranch className="about__icon"/>
          <h5>Branch</h5>
          <small>Electronics and Communication Enginnering</small>
        </article>
        <article className="about__card">
          <HiCode className="about__icon"/>
          <h5>Language Proficiency</h5>
          <small>C++ , Python</small>
        </article>
        </div>
        
        <div>
          <p>Hi my name is Aryan Arya.Currently i am pre-final year student from the branch of Electronics and Communication Engineering.
          I love to learn New and upcoming technologies and try to upgrade my skills timely.Currently i am learning<strong><mark className='red'>"MERN"</mark></strong> stack by working on
          some self made Projects.Along with that I am a <strong><mark className='red'>"Machine Learning"</mark></strong> enthusiastic and created some fully operating Models for the same.
          </p>
          < a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
        </div>
      </div>
    </section>
  )
}

export default About
