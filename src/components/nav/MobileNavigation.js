import React from 'react'
import { NavLinks } from "./NavLinks";

export const MobileNavigation = (props) => {

    const { isMobile, closeMobileMenu } = props   
    
  return (
    <div className='mobilNavigation'>
        <NavLinks isMobile={ isMobile } closeMobileMenu={ closeMobileMenu }/>
    </div>
  )
}

