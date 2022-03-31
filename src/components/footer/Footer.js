import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'

export const Footer = () => {
  return (
    <footer>
      <p className='footer_logo'>Menu</p>

      <ul className='permalinks'>
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href="https://www.facebook.com/alberto.rodriguezgarcia.3760"><FaFacebookF /></a>
        <a href="https://www.instagram.com/ticoc911"><AiFillInstagram /></a>
        <a href="https://twitter.com/ticoc911"><BsTwitter /></a>
      </div>

      <div className='footer_copy'>
        <small>&copy; 2022 Alberto Rodríguez. All rights reserved.</small>
      </div>
    </footer>
  )
}

