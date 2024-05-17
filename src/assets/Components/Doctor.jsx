import React from 'react'

const doctor = (props) => {
  return (
    <div className='Finddoctor'>
      <div className='doctor-section'>
        <div className='doc-image'>
          <img src={props.image} />
        </div>

        <div className='doctor-details'>
        <h3>{props.doctorname}</h3>
        <p>{props.speciality}</p>
      </div>
     
      </div>
     
    </div>
  )
}

export default doctor