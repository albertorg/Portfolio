import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from "react-icons/fa";

export const HeaderSocials = () => {
    return (
        <div className='header_socials'>
            <a href="https://www.linkedin.com" target="_blank" rel='noreferrer'>
                <BsLinkedin /></a>
            <a href="https://github.com" target="_blank" rel='noreferrer'>
                <FaGithub /></a>
        </div>
    )
}

