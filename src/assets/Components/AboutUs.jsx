import React from 'react'
import './AboutUs.css'



function AboutUs(props) {
  return (
    <div className='about'>
      <h2>{props.heading}</h2>
      <p>{props.paragraph}</p>
      <image>
      <img src={props.image} alt="nurse" />
      </image>
    </div>
  )
}

export default AboutUs
