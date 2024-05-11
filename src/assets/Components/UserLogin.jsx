import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";


const Login = () => {
  let [isSubmitted, setIsSubmitted] = useState(false)
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [userType, setUserType] = useState('')
  let [errors, setErrors] = useState('')


  function handleChange(event, stateUpdater) {
    let inputValue = event.target.value;
    stateUpdater(inputValue)
  }

  function handleUserTypeChange(event) {
    setUserType(event.target.value)
  }

  function validateValues() {
    const errors = {};
    if (!email.trim()) {
      errors.email = 'Email is required'
    }
    else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }

    if (!password) {
      errors.password = 'password is required'
    } else if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters long'
    }
    return errors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validateValues();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
    }

  }
  return (
    <div className='form-container' id='login-form'>
      <div className='image'>
        <img src='https://diversitymd.com/wp-content/uploads/2023/12/GettyImages-1627751133.jpg' />
      </div>

      <div className='login-form'>

        <div className='form-items'>
          <h2>E-HEALTHCARE</h2>
          <h3>Login</h3>
          <p>Log into your Account</p>
        </div>

        <form className='form' id='form' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='email'>Email</label>
            <br />
            <input id='email' type='email' value={email} onChange={function (event) {
              handleChange(event, setEmail)
            }} />
            {errors.email && <span className='error'>{errors.email}</span>}
          </div>


          <div>
            <label htmlFor='password'>Password</label>
            <br />
            <input id='password' type='password' value={password} onChange={function (event) {
              handleChange(event, setPassword)
            }} />
            {errors.password && <span className='error'>{errors.password}</span>}
          </div>

          <div>
            <label htmlFor='usertype'>UserType</label>
            <br />
            <select type="usertype" id="usertype" value={userType} onChange={handleUserTypeChange}>
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>

          <p className='forgot-password'>Forgot Password</p>
          <br />

          <button onSubmit={handleSubmit}>Login</button>

          <div id='button'>
            <div>
              <img src='https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png' id="google-icon" />
            </div>
            <div className='button-text'>
              Login in with Google
            </div>
          </div>

          <h4 id='heading'>Do not have an Account?</h4>

          <div className='items'>

            <Link to='/DoctorRegistration'>
              <h3>DoctorSignUp</h3>
            </Link>

            <Link to='/PatientRegistration'>
              <h3>Patient SignUp</h3>
            </Link>

          </div>
        </form>
      </div>
    </div>
  )
}

export default Login