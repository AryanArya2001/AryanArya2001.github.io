import React from 'react'
import'./experience.css'
import{GoVerified}from 'react-icons/go'

const Experience = () => {
  return (
 <section id='experience'>
    <h5>What Skills I have</h5>
   <h2>Tech Stacks I Use/Know</h2>

   <div className="container experience__container">
     <div className='experience__techstack'>
      <h3>Tech Stacks:</h3>
      <div className="experience__content">
        <article className='experience__details'>
         <GoVerified/>
         <h4>C++</h4>
        </article>
        <article className='experience__details'>
         <GoVerified/>
         <h4>MongoDB</h4>
        </article>
        <article className='experience__details'>
         <GoVerified/>
         <h4>Python</h4>
        </article>
        <article className='experience__details'>
         <GoVerified/>
         <h4>Express.JS</h4>
        </article>
        <article className='experience__details'>
         <GoVerified/>
         <h4>MySQL</h4>
        </article>
        <article className='experience__details'>
         <GoVerified/>
         <h4>React</h4>
        </article>
        <article className='experience__details'>
         <GoVerified/>
         <h4>HTML/CSS/Javascript</h4>
        </article>
        <article className='experience__details'>
         <GoVerified/>
         <h4>Node.JS</h4>
        </article>
        <article className='experience__details'>
         <GoVerified/>
         <h4>Machine Learning</h4>
        </article>
        <article className='experience__details'>
         <GoVerified/>
         <h4>Version Control System(Git)</h4>
        </article>
      </div>
     </div>
   </div>
 </section>
  )
}

export default Experience
