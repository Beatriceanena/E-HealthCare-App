import React, { useState,useContext } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import emailjs from 'emailjs-com';
import { useAuthContext } from '../../User-authentication/AuthContext';
import { useNavigate } from 'react-router-dom';

const Bookappointment = () => {
  const {user}= useAuthContext()
  const navigate=useNavigate()
  if (!user){
    navigate('/Login')
  }

  const [formData, setFormData] = useState({
    patientName: '',
    phoneNumber: '',
    doctorName: '',
    speciality: '',
    email: '',
    date: '',
    time: '',
    appointmentType: '',
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
    
    if (!formData.appointmentType) {
      tempErrors['appointmentType'] = 'Appointment type is required';
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
      emailjs.send("service_38kx3fm","template_itynwi9",formData, "n8P6-ug-P3GdFfesN"
        )
        
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
          
          <div className='form-data'>
            <div>
              <label>Doctor Name</label>
              <br />
              <select name='doctorName' value={formData.doctorName} onChange={handleChange} className='select-options'>
              <option value=''>Choose a doctor</option>
              <option value='Dr. Lucy Mirembe'> Dr. Lucy Mirembe</option>
              <option value='Dr. Nkajja Alfred'>Dr. Nkajja Alfred</option>
              <option value='Dr.Benjamin Okiza'>Dr. Benjamin Okiza</option>
              <option value='Dr. Catherine Kansime'>Dr. Catherine Kansime</option>
              <option value='Dr. Mukisa Emmanuel'>Dr. Mukisa Emmanuel</option>
              <option value='Dr. Ayebare Brandon '>Dr. Ayebare Brandon</option>
              <option value='Dr. Gad Obua'>Dr. Gad Obua</option>
              <option value='Dr. Sarah Blessing'>Dr. Sarah Blessing</option>
            </select>
              {errors.doctorName && <p className='error'>{errors.doctorName}</p>}
            </div>

            <div>
              <label>Speciality</label>
              <br />
              <select name='speciality' value={formData.speciality} onChange={handleChange} className='select-options'>
              <option value=''>Speciality</option>
              <option value='Cardiologist'> Cardiologist</option>
              <option value='Physician'>Physician</option>
              <option value='Nurse'>Nurse</option>
              <option value='Pharmacist'>Pharmacist</option>
              <option value='Dr. Mukisa Emmanuel'>Dr. Mukisa Emmanuel</option>
              <option value='Dr. Ayebare Brandon '>Dr. Ayebare Brandon</option>
              <option value='Dr. Gad Obua'>Dr. Gad Obua</option>
              <option value='Dr. Sarah Blessing'>Dr. Sarah Blessing</option>
            </select>
              {errors.speciality && <p className='error'>{errors.speciality}</p>}
            </div>
          </div>

          <div className='form-data'>
          <div>
          <label>Select Time</label>
          <br />
          <select name='time' value={formData.time} onChange={handleChange} className='select-options'>
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
              <label>Appointment Type</label>
              <br />
              <select name='appointmentType' value={formData.appointmentType} onChange={handleChange} className='select-options'>
                <option value=''>Appointment Type</option>
                <option value='Physical apointment at clinic'>Physical appointment at clinic</option>
                <option value='Home appointment'>Home appointment</option>
                <option value='Medication Refills home delivery'>Medication Refills home delivery</option>
              </select>
              {errors.appointmentType && <p className='error'>{errors.appointmentType}</p>}
            </div>
          </div>

            <div className='form-fields'>
            <div>
              <label>Message</label>
              <br />
              <input type='text' id='message1' name='message' value={formData.message} onChange={handleChange} />
            </div>
            <button type='submit' id='button1'>Send Message</button>

          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Bookappointment;