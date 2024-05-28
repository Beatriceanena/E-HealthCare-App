import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from '../../User-authentication/AuthContext';
import { API } from '../../User-authentication/Constant';
import { setToken } from '../../User-authentication/Helpers';
import 'react-toastify/dist/ReactToastify.css';

const PatientSignup = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [errors, setErrors] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {setUser } = useAuthContext();
 
  const handleChange = (event, stateUpdater) => {
    const inputValue = event.target.value;
    stateUpdater(inputValue);
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


    const onFinish = async (values) => {
      setIsLoading(true);
      try {
        const response = await fetch(`${API}/auth/local/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
  
        const data = await response.json();
        if (data?.error) {
          throw data?.error;
        } else {
          setToken(data.jwt);
  
          setUser(data.user);
  
          toast.success(`Welcome to E-Healthcare, ${data.user.username}!`);
  
          navigate("/Login", { replace: true });
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
        const values = { username, email, password, confirmpassword };
        onFinish(values);
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

        <form className='form'  onSubmit={handleSubmit}>
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
          
            <button type='submit' id='button1'>{isLoading ? 'Signing Up...' : 'SignUp'}
            </button>
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