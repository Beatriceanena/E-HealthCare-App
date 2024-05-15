import React from 'react'



function ScheduleCall() {
  return (
    <div>
      <h1>Would you like to schedule a Call with a Doctor</h1>
      <p>Dont worry, we have got you covered. With our 24hour services available. weare sure to get you in touch with an available Doctor in your time of need</p>
      <div className="Schedule">
        <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Duration</th>
            <th>Location</th>
        </tr>
      </div>
    </div>
  )
}

export default ScheduleCall
