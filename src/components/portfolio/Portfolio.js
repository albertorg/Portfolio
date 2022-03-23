import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'

export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG1} alt=""/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio_item-cta'>
            <a href="https://github.com" className='btn' target='_blank' rel='noreferrer'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG2} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio_item-cta'>
            <a href="https://github.com" className='btn' target='_blank' rel='noreferrer'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG3} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio_item-cta'>
            <a href="https://github.com" className='btn' target='_blank' rel='noreferrer'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

