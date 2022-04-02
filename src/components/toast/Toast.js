import React from 'react'
import './toast.css'
import { AiFillCheckCircle } from 'react-icons/ai'
// import { AiFillCloseCircle } from 'react-icons/ai'
import { GrFormClose } from 'react-icons/gr'

export const Toast = () => {
    return (
        <div className='toast'>
            <div className='toast_content'>
                <span className='check_icon'><AiFillCheckCircle /></span>

                <div className='message'>
                    <span className='text text_1'>Success</span>
                    <span className='text text_2'>Your message has been sent</span>
                </div>
            </div>

            {/* <GrFormClose /> */}

            <div className='progress'></div>

        </div>
    )
}
