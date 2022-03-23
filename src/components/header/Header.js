import React from 'react'
import './header.css'
import { CTA } from "./CTA";
import { HeaderSocials } from "./HeaderSocials";
import ME from '../../assets/me.png'

export const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h1>Alberto Rodríguez</h1>
        <h5 className='text-ligth'>Front-End Developer</h5>
        <CTA /> 
        <HeaderSocials />
        
        <div className='me'>
          <img src={ ME } alt="alberto rodriguez"/>
        </div>

      </div> 
    </header>
  )
}

