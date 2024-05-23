import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Bookappointment = () => {
  return (
    <div>
    <Navbar />
    <div id='appointment-form'>
      <h2 className='heading2'>Book Your Appointment</h2>
      <form className='appointment-form'>
        <div className='form-data'>
          <div>
            <label>Patient Name</label>
            <br />
            <input type='name' />
          </div>
          <div>
            <label>Phonenumber</label>
            <br />
            <input type='phonenumber' />
          </div>
        </div>

        <div className='form-data'>
          <div>
            <label>Doctor Name</label>
            <br />
            <input type='name' />
          </div>
          <div>
          <label>Speciality</label>
          <br />
          <input type='text'  />
        </div>
         
        </div>

        <div className='form-data'>
          <div>
            <label>Email</label>
            <br />
            <input type='email' />
          </div>
          <div>
            <label>Date</label>
            <br />
            <input type='date' />
          </div>
        </div>

        <div className='form-fields'>
          <div>
            <label>Select Time</label>
            <br />
            <select type="usertype" id="time">
            <option value="text">Available Slots</option>
              <option value="time">9:00Am</option>
              <option value="time">10:00AM</option>
              <option value="time">10:30AM</option>
              <option value="time">11:00AM</option>
              <option value="time">11:30AM</option>
            </select>
          </div>

          <div>
            <label>Message</label>
            <br />
            <input type='text' id='message' />
          </div>

          <button id='appointment-btn'> Book Appointment</button>
        </div>

      </form>

    </div>
    <Footer />
    </div>
  )
}

export default Bookappointment