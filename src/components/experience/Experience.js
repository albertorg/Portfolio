import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

export const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience_container'>
        <div className='experience_frontend' id='experience'>
          <h3>Front-End Developmet</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/> 
              <div>
                <h4>HTML</h4>
                <small className='text-ligth'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div>
                <h4>CSS</h4>
                <small className='text-ligth'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-ligth'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div>
                <h4>Angular</h4>
                <small className='text-ligth'>Basic</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div>
                <h4>React</h4>
                <small className='text-ligth'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className='experience_backend'>
          <h3>Back-End Developmet</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div>
                <h4>Node JS</h4>
                <small className='text-ligth'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div>
                <h4>MongoDB</h4>
                <small className='text-ligth'>Basic</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div>
                <h4>Python</h4>
                <small className='text-ligth'>Basic</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-ligth'>Basic</small>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

