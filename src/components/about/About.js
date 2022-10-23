import React from 'react'
import './about.css'
import ME from "../../assets/me-about.jpg";
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

export const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container '>
        <div className='about_me'>
          <div className='about_me-image'>
            {/* <img src={ ME } alt=" Alberto Rodriguez"/> */}
          </div>  
        </div>

        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>+2 Years Working</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon' />
              <h5>Clients</h5>
              <small>+10 Worlwide</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>+4 Complete</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac maximus 
            ipsum. Sed a vulputate mauris. Etiam quis posuere tellus. Nam vitae 
            vulputate justo, ac tristique est. Nam vulputate leo.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

