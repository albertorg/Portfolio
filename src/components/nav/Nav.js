import React, { useState } from 'react'
import { Navigation } from './Navigation'
import { MobileNavigation } from "./MobileNavigation";
import './nav.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiFillCloseCircle } from 'react-icons/ai'


export const Nav = () => {
  const [open, setOpen] = useState(false)

  const hamburgerIcon = <button type="button" className='collapse' onClick={() => setOpen(!open)}>
                          <GiHamburgerMenu className='collapse_icon' />
                        </button>

  const closeIcon = <button type="button" className='collapse' onClick={() => setOpen(!open)}>
                      <AiFillCloseCircle className='collapse_icon' />
                    </button>

  const closeMobileMenu = () => setOpen( false )                  

  return (
    <nav className='navbar'>
      <div className='container nav_container'>
        <div className='logo_container'> 
          <a href="#header" className='logo'>Alberto Rodríguez</a>
          {open ? closeIcon : hamburgerIcon}
        </div>

        <div className='menu_container'>
          <Navigation />
          {open && <MobileNavigation isMobile={ true } closeMobileMenu={ closeMobileMenu }/>}
        </div>
        

      </div>
    </nav>
  )
}

