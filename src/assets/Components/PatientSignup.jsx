import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const PatientSignup = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (event, stateUpdater) => {
    const inputValue = event.target.value;
    stateUpdater(inputValue);
  };

  const createPatient = () => {
    const apiUrl = 'http://localhost:1337/api/patients';
    const requestObject = {
      method: 'POST',
      body: JSON.stringify({
        data: {
          username: username,
          email: email,
          password: password,
          confirmpassword: confirmpassword,
        },
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    fetch(apiUrl, requestObject)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((data) => {
        setEmail('');
        setUsername('');
        setPassword('');
        setConfirmpassword('');
        toast.success("Patient account is successfully created");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to create account");
      });
  };

  const validateValues = () => {
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
      errors.confirmpassword = 'Confirm password is required';
    } else if (password !== confirmpassword) {
      errors.confirmpassword = 'Passwords do not match';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateValues();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      createPatient();
      setIsSubmitted(true);
    }
  };

  return (
    <div className='form-container' id='formcontainer'>
      <div className='image'>
        <img src='https://diversitymd.com/wp-content/uploads/2023/12/GettyImages-1627751133.jpg' alt='Signup' />
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
            <input
              id='name'
              type='text'
              value={username}
              onChange={(event) => handleChange(event, setUsername)}
            />
            {errors.username && <span className='error'>{errors.username}</span>}
          </div>

          <div>
            <label htmlFor='email'>Email</label>
            <br />
            <input
              id='email'
              type='email'
              value={email}
              onChange={(event) => handleChange(event, setEmail)}
            />
            {errors.email && <span className='error'>{errors.email}</span>}
          </div>

          <div>
            <label htmlFor='password'>Password</label>
            <br />
            <input
              id='password'
              type='password'
              value={password}
              onChange={(event) => handleChange(event, setPassword)}
            />
            {errors.password && <span className='error'>{errors.password}</span>}
          </div>

          <div>
            <label htmlFor='confirmpassword'>Confirm Password</label>
            <br />
            <input
              id='confirmpassword'
              type='password'
              value={confirmpassword}
              onChange={(event) => handleChange(event, setConfirmpassword)}
            />
            {errors.confirmpassword && <span className='error'>{errors.confirmpassword}</span>}
          </div>

          <p className='forgot-password'>Forgot Password?</p>
          <br />
          <div>
          
            <button type='submit' id='button1'>SignUp</button>
            <ToastContainer />
          </div>

          <div className='item'>
            <h4>Already have an Account?</h4>
            <Link to='/Login' className='link'>
              <h3>Login</h3>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PatientSignup;