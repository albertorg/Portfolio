import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";

export const HeaderSocials = () => {
    return (
        <div className='header_socials'>
            <a href="https://www.linkedin.com" target="_blank" rel='noreferrer'>
                <BsLinkedin /></a>
            <a href="https://github.com" target="_blank" rel='noreferrer'>
                <FaGithub /></a>
            <a href="https://web.telegram.org" target="_blank" rel='noreferrer'>
                <BsTelegram /></a>
        </div>
    )
}

