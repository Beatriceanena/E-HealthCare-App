import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import emailjs from 'emailjs-com';

const Bookappointment = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    phoneNumber: '',
    doctorName: '',
    speciality: '',
    email: '',
    date: '',
    time: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.patientName) {
      tempErrors['patientName'] = 'Patient name is required';
      isValid = false;
    }

    if (!formData.phoneNumber) {
      tempErrors['phoneNumber'] = 'Phone number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      tempErrors['phoneNumber'] = 'Phone number is invalid';
      isValid = false;
    }

    if (!formData.doctorName) {
      tempErrors['doctorName'] = 'Doctor name is required';
      isValid = false;
    }

    if (!formData.speciality) {
      tempErrors['speciality'] = 'Speciality is required';
      isValid = false;
    }

    if (!formData.email) {
      tempErrors['email'] = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors['email'] = 'Email address is invalid';
      isValid = false;
    }

    if (!formData.date) {
      tempErrors['date'] = 'Date is required';
      isValid = false;
    }

    if (!formData.time) {
      tempErrors['time'] = 'Time is required';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      emailjs.send(
      'service_cxcwe2c',
       ' __ejs-test-mail-service__',
        formData, 'n8P6-ug-P3GdFfesN')
        
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Appointment booked successfully!');
        }, (error) => {
          console.log('FAILED...', error);
          alert('Failed to book appointment. Please try again.');
        });
    }
  };

  return (
    <div>
      <Navbar />
      <div id='appointment-form'>
        <h2 className='heading2'>Book Your Appointment</h2>
        <form className='appointment-form' onSubmit={handleSubmit}>
          <div className='form-data'>
            <div>
              <label>Patient Name</label>
              <br />
              <input type='text' name='patientName' value={formData.patientName} onChange={handleChange} />
              {errors.patientName && <p className='error'>{errors.patientName}</p>}
            </div>
            <div>
              <label>Phone Number</label>
              <br />
              <input type='text' name='phoneNumber' value={formData.phoneNumber} onChange={handleChange} />
              {errors.phoneNumber && <p className='error'>{errors.phoneNumber}</p>}
            </div>
          </div>

          <div className='form-data'>
            <div>
              <label>Doctor Name</label>
              <br />
              <input type='text' name='doctorName' value={formData.doctorName} onChange={handleChange} />
              {errors.doctorName && <p className='error'>{errors.doctorName}</p>}
            </div>
            <div>
              <label>Speciality</label>
              <br />
              <input type='text' name='speciality' value={formData.speciality} onChange={handleChange} />
              {errors.speciality && <p className='error'>{errors.speciality}</p>}
            </div>
          </div>

          <div className='form-data'>
            <div>
              <label>Email</label>
              <br />
              <input type='email' name='email' value={formData.email} onChange={handleChange} />
              {errors.email && <p className='error'>{errors.email}</p>}
            </div>
            <div>
              <label>Date</label>
              <br />
              <input type='date' name='date' value={formData.date} onChange={handleChange} />
              {errors.date && <p className='error'>{errors.date}</p>}
            </div>
          </div>

          <div className='form-fields'>
            <div>
              <label>Select Time</label>
              <br />
              <select name='time' value={formData.time} onChange={handleChange}>
                <option value=''>Available Slots</option>
                <option value='9:00AM'>9:00AM</option>
                <option value='10:00AM'>10:00AM</option>
                <option value='10:30AM'>10:30AM</option>
                <option value='11:00AM'>11:00AM</option>
                <option value='11:30AM'>11:30AM</option>
              </select>
              {errors.time && <p className='error'>{errors.time}</p>}
            </div>

            <div>
              <label>Message</label>
              <br />
              <input type='text' name='message' value={formData.message} onChange={handleChange} />
            </div>

            <button type='submit' id='appointment-btn'>Book Appointment</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Bookappointment;