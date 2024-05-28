import React from 'react'
import { Link } from 'react-router-dom'

const Doctor = (props) => {
  return (

    <div className='Finddoctor'>
      <Link to={`/medicalpersonel/${props.id}`} className='link1'>
        <div className='doctor-section'>
          <div className='doc-image'>
            <img src={props.image} />
          </div>

          <div className='doctor-details'>
            <h4>Dr. {props.name}</h4>
            <p>{props.speciality}</p>
          </div>
        </div>
      </Link>

    </div>
  )
}

export default Doctor