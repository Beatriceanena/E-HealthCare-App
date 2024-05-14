import React from 'react'
import './AboutUs.css'



function AboutUs(props) {
  return (
    <div className='about'>

        <div className='text'>
        <h2>{props.heading}</h2>
        <p>{props.paragraph}</p>
        <a href="">{props.button}</a>
        </div>
      <image >
      <img src={props.image} alt="Doctor" />
      </image>
      
    </div>
  )
}

export default AboutUs
