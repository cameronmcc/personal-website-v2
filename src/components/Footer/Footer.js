import React from 'react'
import './style.css'
import ContactForm from '../Contact/Contact'

const Footer = () => {
    return (
        <>
        <div className='footer-container'>
            <div classNa me='footer-contact'>
                <div className='footer-heading-1'>
                    Thanks for visiting! Feel free to reach out- I would love to connect!
                </div>
                <div className='footer-subtext'>
                    Contact
                </div>
                <ContactForm />
            </div>
        </div>
            
        </>
    )
}

export default Footer
