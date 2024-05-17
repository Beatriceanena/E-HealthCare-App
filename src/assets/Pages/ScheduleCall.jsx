import React from 'react'



function ScheduleCall() {
  return (
    <div>
      <h1>Would you like to schedule a Call with a Doctor</h1>
      <p>Dont worry, we have got you covered. With our 24hour services available. weare sure to get you in touch with an available Doctor in your time of need</p>
      <div className="Schedule">
      <select type="usertype" id="time">
            <option value="text">Available Slots</option>
              <option value="time">9:00Am</option>
              <option value="time">10:00AM</option>
              <option value="time">10:30AM</option>
              <option value="time">11:00AM</option>
              <option value="time">11:30AM</option>
            </select>
            <select name="Location" id="Calltype">
            <option value="text">Location</option>
            <option value="zoom">Zoom</option>
            <option value="Google Meet">Google Meet</option>
            </select>
          
            <button>Schedule Call</button>
      </div>
    </div>
  )
}

export default ScheduleCall
