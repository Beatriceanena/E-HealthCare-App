import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Services.css'


function Services(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(props.link); // Navigate to the link specified in props
  };

  const customStyle = {
    height: props.height || '150px',  
  };

  return (
    <div className='services' onClick={handleClick} style={customStyle}>
    <h4>{props.title}</h4>
  </div>
  )
}

export default Services
