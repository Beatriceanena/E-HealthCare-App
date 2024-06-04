import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useAuthContext } from '../../User-authentication/AuthContext';
import { removeToken } from '../../User-authentication/Helpers';

const Navbar = () => {

  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    navigate("/PatientRegistration", { replace: true });
  };
  return (
    <div>
      <div className='navigation'>
        <div className='logo-section'>
          <span> <img src='https://i.pinimg.com/564x/86/19/81/86198143cce114f2124813edf43e0603.jpg' id='logo-image' /></span>
          <h2>E-HealthCare</h2>
        </div>
        <div className='login-container'>
        <Link to="/Login"  className='link1'>
        <p>Login</p>
      </Link>
          <p>|</p>
          <Link to="/PatientRegistration"  className='link1'>
          <p>Create Account</p>
        </Link>
          <Link to="/bookappointment">
          <button id="bookappointment">Book Appointment</button>
        </Link>
        </div>
      </div>

      <div className='nav-bar'>
      <ul>
      <Link to="/" className='link'> <li>Home</li></Link>
      <Link to="/Findadoctor" className='link'> <li>Find a Doctor</li></Link>
      <Link to="/Pharmacy" className='link'>  <li>Phamarcy</li></Link>
      <Link to="/Resources" className='link'> <li>Resources</li></Link>
      <Link to="/Contactus" className='link'><li>Contact Us</li></Link>
      <Link to="/Profile" className='link'><li>Profile</li></Link>
      </ul>
      </div>
    </div>

  )
}

export default Navbar