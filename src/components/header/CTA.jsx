import React from 'react'
import resume from '../../assessts/resume.pdf'

const CTA = () => {
  return (
    <div c className='cta'>
        <a href={resume} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      
    </div>
  )
}

export default CTA 
