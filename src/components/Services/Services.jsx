import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_data from '../../assets/Services_data.js'
import arrow_icon from '../../assets/arrow_icon.svg'
const Services = () => {
  return (
    <div id="services" className='services'>
        <div className="services-title">
            <h1>My Experience</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="services-container">
            {Services_data.map((service,index)=>{
                return <div key={index} className="services-format">
                    
                    <h2>{service.s_name}</h2>
                    <h3>{service.s_no}</h3>
                    <p>{service.s_desc}</p>
                    <div className="services-readmore">
                        <p>Read More</p>
                        <img src={arrow_icon} alt="" />
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Services