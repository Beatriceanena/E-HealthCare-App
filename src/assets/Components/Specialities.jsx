import React from 'react'

const Specialities = (props) => {
  return (
    <div className='specialities'>
    <div className='image'>
    <img src={props.image}/>
    </div>
    <h4 id='speciality-title'>{props.title}</h4>
    </div>
  )
}

export default Specialities