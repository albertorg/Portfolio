import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from "react-icons/fa";

export const HeaderSocials = () => {
    return (
        <div className='header_socials'>
            <a href="https://linkedin.com/in/alberto-rodríguez-garcía-0b2441218" target="_blank" rel='noreferrer'>
                <BsLinkedin /></a>
            <a href="https://github.com/albertorg" target="_blank" rel='noreferrer'>
                <FaGithub /></a>
        </div>
    )
}

