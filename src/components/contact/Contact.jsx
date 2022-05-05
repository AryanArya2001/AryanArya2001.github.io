import React from 'react'
import'./contact.css'
import{FiMail}from 'react-icons/fi'
import{BsWhatsapp}from 'react-icons/bs'
import{BsLinkedin}from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vmojiny', 'template_8i2sot9', form.current, 'QlQIIiuNKGNsAsACL')

    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
   <section id='contact'>
     <h5>Get In Touch</h5>
     <h2>Contact Me</h2>
     
     <div className="contact__container">
       <div className="contact__options">
        <article className="contact__option">
         <FiMail className='contact__option-icon'/>
        <h4>Email</h4>
        <h5>aryanarya2750@gmail.com</h5>
        <a href="mailto:aryanarya2750@gmail.com" target="_blank">Send a message</a>
      </article>
      <article className="contact__option">
         <BsLinkedin className='contact__option-icon'/>
        <h4>Linkedin</h4>
        <h5>Aryan Arya</h5>
        <a href="https://www.linkedin.com/in/aryan-arya-4393841a5/" target="_blank">Connect with Aryan</a>
      </article>
      <article className="contact__option">
         <BsWhatsapp className='contact__option-icon'/>
        <h4>WhatsApp</h4>
        <h5>+91 9871441762</h5>
        <a href="https://api.whatsapp.com/send?phone=+919871441762" target="_blank">Send a message</a>
      </article>
       </div>
       <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required/>
        <input type="email" name='email' placeholder='Your Email' required/>
        <textarea name='message' rows="7" placeholder='Your Message' required></textarea> 
        <button type='submit' className='btn btn-primary'>Send Message</button>
       </form>
     </div>
</section>
  )
}

export default Contact
