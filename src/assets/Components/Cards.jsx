import React from 'react'

const Cards = (props) => {
  return (
    <div className='header-card'>
    <div className='card-details'>
    <div>
    <i className={props.icon}></i>
    </div>
    <h4>{props.title}</h4>

    </div>
    
    </div>
  )
}

export default Cards