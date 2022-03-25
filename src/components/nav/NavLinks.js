import React from 'react'
import { motion } from "framer-motion";

export const NavLinks = (props) => {

    const { isMobile, closeMobileMenu } = props

    const animateFrom = { opacity: 0, y: -40 }
    const animateTo = { opacity: 1, y: 0 }

    return (
        <>
            <ul>
                <motion.li
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay: 0.05}}
                    onClick={() => isMobile && closeMobileMenu()}>
                    <a href="#about">About</a>
                </motion.li>
                <motion.li
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{ delay: 0.10 }}
                    onClick={() => isMobile && closeMobileMenu()}>
                    <a href="#experience">Skills</a>
                </motion.li>
                <motion.li
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{ delay: 0.20 }}
                    onClick={() => isMobile && closeMobileMenu()}>
                    <a href="#portfolio">Portfolio</a>
                </motion.li>
                <motion.li
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{ delay: 0.30 }}
                    onClick={() => isMobile && closeMobileMenu()}>
                    <a href="#contact">Contact</a>
                </motion.li>
            </ul>
        </>
    )
}

