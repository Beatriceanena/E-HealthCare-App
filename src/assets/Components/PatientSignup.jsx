import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom";


const PatientSignup = () => {

  //setup state for isSubmitted, 
  let [isSubmitted, setIsSubmitted] = useState(false)

  // set state for name, email and profile
  let [username, setUsername] = useState('')
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [confirmpassword, setConfirmpassword] = useState('')
  let[errors,setErrors]=useState('')

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
    if (!password) {
        errors.password = 'Password is required';
    } else if (password.length < 8) {
        errors.password = 'Password must be at least 8 characters long';
    }
    if (!confirmpassword) {
      errors.confirmpassword = 'confirmpassword is required';
  } else if (password!==confirmpassword) {
      errors.confirmpassword = 'Password does not much';
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
    <div className='form-container' id='formcontainer'>
      <div className='image'>
        <img src='https://diversitymd.com/wp-content/uploads/2023/12/GettyImages-1627751133.jpg' />
      </div>

      <div className='signup-form'>

        <div className='form-items'>
          <h2>E-HEALTHCARE</h2>
          <h3>SignUp</h3>
          <p>Welcome, Create an Account</p>
        </div>

        <form className='form' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name'>UserName</label>
            <br />
            <input id='name' type='text' value={username} onChange={function (event) {
              handleChange(event, setUsername);
            }}/>
            {errors.username && <span className='error'>{errors.username}</span>}
          </div>

          <div>
            <label htmlFor='email'>Email</label>
            <br />
            <input id='email' type='email' value={email} onChange={function (event) {
              handleChange(event, setEmail)
            }}/>
            {errors.email && <span className='error'>{errors.email}</span>}
          </div>

          <div>
            <label htmlFor='password'>Password</label>
            <br />
            <input id='password' type='password' value={password} onChange={function (event) {
              handleChange(event, setPassword)
            }}/>
            {errors.password && <span className='error'>{errors.password}</span>}
          </div>

          <div>
            <label htmlFor='confirmpassword'>Confirm Password</label>
            <br />
            <input id='confirmpassword' type='password' value={confirmpassword} onChange={function (event) {
              handleChange(event, setConfirmpassword)
            }}/>
            {errors.confirmpassword && <span className='error'>{errors.confirmpassword}</span>}
          </div>

          <p className='forgot-password'>Forgot Password?</p>
          <br />
          <button onSubmit={handleSubmit} id='button1'>SignUp</button>

          <div className='item'>
            <h4>Already have an Account?</h4>
            <Link to='/Login'>
            <h3>Login</h3>
            </Link>
            
          </div>
        </form>
      </div>
    </div>
  )
}

export default PatientSignup
