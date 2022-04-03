import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { Toast } from '../toast/Toast'
 
export const Contact = () => {
  const [ active, setActive ] = useState( false )
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v0ahci4', 'template_322bfow', form.current, 'H3UNAH8mXssGNZvtw')
      .then((result) => {
        console.log(result.text);
        setActive( true )
        setTimeout( () => {
          setActive( false )
        }, 1800)
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset()  
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>ticoc911@gmail.com</h5>
            <a href="mailto:ticoc911@gmai.com" target='_blank' rel='noreferrer'>Send a message</a>
          </article>

          <article className='contact_option'>
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Alberto Rodriguez</h5>
            <a href="https://m.me/alberto.rodriguezgarcia.3760" target='_blank' rel='noreferrer'>Send a message</a>
          </article>

          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+48517665964</h5>
            <a href="https://api.whatsapp.com/send?phone+48517665964" target='_blank' rel='noreferrer'>Send a message</a>
          </article>
        </div>

        <Toast active={active}/>

        <form ref={form} onSubmit={ sendEmail }>
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

