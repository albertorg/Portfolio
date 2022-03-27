import React from 'react'
import './header.css'
import { CTA } from "./CTA";
import { HeaderSocials } from "./HeaderSocials";
import ME from '../../assets/me.png'

export const Header = () => {
  return (
    <header>
      <div id='header' className='container header_container'>
        <h5>Hello I'm</h5>
        <h1>Front-End Developer</h1>
        <CTA /> 
        <HeaderSocials />
        
        <div className='me'>
          <img src={ ME } alt="alberto rodriguez"/>
        </div>
      </div> 
    </header>
  )
}

