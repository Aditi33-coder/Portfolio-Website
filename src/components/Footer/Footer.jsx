import React from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <h2 >Aditi's Portfolio</h2>
                <p>I'm a final-year B.Tech student at DIT University, specializing in Computer Science Engineering, specialization in Artificial Intelligence, Machine Learning, and Robotics.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter Your Email' />
                </div>
                <div className="footer-submit">Submit</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">
                © 2025 Aditi Verma, All Rights Reserved
            </p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with Me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer