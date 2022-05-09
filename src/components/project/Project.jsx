import React from 'react'
import './project.css'
import IMG1 from '../../assessts/pic1.JPG'
import IMG2 from '../../assessts/pic2.png'
import IMG3 from '../../assessts/pic3.png'
import IMG4 from '../../assessts/pic4.png'
const Project = () => {
  return (
 <section id='project'>
   <h5>My Recent Work</h5>
   <h2>Projects:</h2>

    <div className="container project__container">
      <article className='project__item'>
        <div className="project__item-image">
         <img src={IMG1} alt=""/>
        </div>
        <h3>Handwritten Digit Classification Using CNN</h3>
        <a href="https://github.com/AryanArya2001/Handwritten-Digit-Classification-using-CNN." className='btn' target='__blank'>GitHub</a>
      </article>
      <article className='project__item'>
        <div className="project__item-image">
         <img src={IMG2} alt=""/>
        </div>
        <h3>Recognition of Object using Convolutional Neural N/W</h3>
        <a href="https://github.com/AryanArya2001/ImageRecognition" className='btn' target='__blank'>GitHub</a>
      </article>
      <article className='project__item'>
        <div className="project__item-image">
         <img src={IMG3} alt=""/>
        </div>
        <h3>Fake News Classification using Natural Language Processing</h3>
        <a href="https://github.com/AryanArya2001/NewsClassification" className='btn' target='__blank'>GitHub</a>
      </article>
      <article className='project__item'>
        <div className="project__item-image">
         <img src={IMG4} alt=""/>
        </div>
        <h3>Netflix Clone Using React</h3>
        <a href="https://github.com" className='btn' target='__blank'>GitHub</a>
      </article>
    </div>
 </section>
  )
}

export default Project
