import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from '../../User-authentication/AuthContext';
import { API } from '../../User-authentication/Constant';
import { setToken } from '../../User-authentication/Helpers';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState('')
  const navigate = useNavigate();
  const { setUser } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");


  function handleChange(event, stateUpdater) {
    let inputValue = event.target.value;
    stateUpdater(inputValue)
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

  const onFinish = async () => {
    setIsLoading(true);
    try {
      const value = {
        identifier: email,
        password: password,
      };
      const response = await fetch(`${API}/auth/local`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });

      const data = await response.json();
      if (data?.error) {
        throw data?.error;
      } else {
        setToken(data.jwt);
        setUser(data.user);

        toast.success(` ${ 'Welcome back' + data.user.username}!`);

        navigate("/", { replace: true });
      }
    } catch (error) {
      console.error(error);
      setError(error?.message ?? "Something went wrong!");
      toast.error("Failed to create account");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateValues();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      onFinish();
    }
  };


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
            <input id='email' type='email'  value={email} onChange={function (event) {
              handleChange(event, setEmail)
            }} />
            {errors.email && <span className='error'>{errors.email}</span>}
          </div>


          <div>
            <label htmlFor='password'>Password</label>
            <br />
            <input id='password' type='password'  value={password} onChange={function (event) {
              handleChange(event, setPassword)
            }} />
            {errors.password && <span className='error'>{errors.password}</span>}
          </div>
          
     
          <p className='forgot-password'>Forgot Password</p>
          <br />

          <button  id='button1'> {isLoading ? 'Loading...' : 'Login'}
          </button>
          <ToastContainer />

          <div id='button'>
            <div>
              <img src='https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png' id="google-icon" />
            </div>
            <div className='button-text'>
              Login with Google
            </div>
          </div>

          <div className='item'>
          <h4>Do not have an Account?</h4>
          <Link to='/PatientRegistration' className='link'>
          <h3>Signup</h3>
          </Link>
          
        </div>
        </form>
      </div>
    </div>
  )
}

export default Login