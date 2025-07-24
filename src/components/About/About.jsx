import React from 'react'
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg'
import img from '../../assets/img.jpg';
const About = () => {
  return (
    <div id="about" className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I'm a final-year B.Tech student at DIT University, specializing in Computer Science Engineering, specialization in Artificial Intelligence, Machine Learning, and Robotics.</p>
                    <p>I also enjoy crafting the frontend of web applications—bringing ideas to life with clean, responsive, and user-friendly designs.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML && CSS</p><hr style={{width: "60%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width: "30%"}}/></div>
                    <div className="about-skill"><p>MySql</p><hr style={{width: "40%"}}/></div>
                    <div className="about-skill"><p>ReactJS</p><hr style={{width: "30%"}}/></div>
                    <div className="about-skill"><p>Java</p><hr style={{width: "80%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>5+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>100+</h1>
                <p>LEETCODE QUESTIONS SOLVED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>2+</h1>
                <p>INTERNSHIPS EXPERIENCE</p>
            </div>
        </div>
    </div>
  )
}

export default About