import React from "react";
import './Hero.css';
import profile from '../../assets/profile.jpg';
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () =>{
    return(
        <div id="home" className="hero">
            <img src={profile} alt="" />
            <h1><span>I'm Aditi Verma,</span> Final-year B.Tech student at DIT University.</h1>
            <p>passionate about technology, software development, and solving real-world problems.</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} herf="#contact">Connect With Me</AnchorLink></div>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    )
    
}
export default Hero;
