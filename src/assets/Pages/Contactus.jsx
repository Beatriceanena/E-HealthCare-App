import React from 'react'
import Navbar from '../Components/Navbar'
import Pharmacyherosection from '../Components/Pharmacyherosection'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import emailjs from 'emailjs-com';

const Contactus = () => {
  //setup state for isSubmitted, 
  let [isSubmitted, setIsSubmitted] = useState(false)
  // set state for name, email and profile
  let [username, setUsername] = useState('')
  let [email, setEmail] = useState('')
  let [message, setMessage] = useState('')
  let [errors, setErrors] = useState('')

  function handleChange(event, stateUpdater) {
    let inputValue = event.target.value;
    stateUpdater(inputValue)
  }

  function validateValues() {
    const errors = {};
    if (!username.trim()) {
      errors.username = 'Username is required';
    }
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    if (!message) {
      errors.message = 'Message is required';
    } 

    return errors;
  }

  function sendEmail() {
    const templateParams = {
      username,
      email,
      message,
      to_email: 'ehealthcareservices2024@gmail.com', 
    };

    emailjs.send('service_1e0hvxh', 'template_cffx5iv', templateParams, 'n8P6-ug-P3GdFfesN')
      .then(response => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
      })
      .catch(error => {
        console.log('FAILED...', error);
        alert('Failed to send message. Please try again.');
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validateValues();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
           sendEmail(); 
    }
  }
  return (
    <div>
      <Navbar />

      <div>
        <div className='hero-section'>
          <div>
            <h2 id='heading4'>Contact Us</h2>
          </div>
        </div>
      </div>
      <h2 className='heading2'>Get In Touch with Us</h2>
      <div className='form-container'>
        <div className='image'>
          <img src='https://media.istockphoto.com/id/1400053534/photo/young-patient-in-a-consult-with-his-doctor-african-american-doctor-showing-a-patient-their.jpg?s=612x612&w=0&k=20&c=rOkv0N_1p-_q7Hz3TDLfzx11CIjHQpGIai93OH_tztw=' />
        </div>

        <div className='signup-form' id='contact-form'>
          <form className='form' onSubmit={handleSubmit}>
            <div>
              <label htmlFor='name'>Name</label>
              <br />
              <input id='name' className='input' name="username"   type='text' value={username} onChange={function (event) {
                handleChange(event, setUsername);
              }} />
              {errors.username && <span className='error'>{errors.username}</span>}
            </div>

            <div>
              <label htmlFor='email'>Email</label>
              <br />
              <input id='email' type='email' name="email" value={email} onChange={function (event) {
                handleChange(event, setEmail)
              }} />
              {errors.email && <span className='error'>{errors.email}</span>}
            </div>

            <div>
              <label htmlFor='message'>Message</label>
              <br />
              <input id='message1' type='message'  name="message" value={message} onChange={function (event) {
                handleChange(event, setMessage)
              }} />
              {errors.message && <span className='error'>{errors.message}</span>}
            </div>

            <br />
            <button type='submit' id='button1'>Send Message</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contactus