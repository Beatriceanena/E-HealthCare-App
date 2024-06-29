import React, { useState,useContext,useEffect } from 'react';
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import { useAuthContext } from '../../User-authentication/AuthContext';
import { useNavigate } from 'react-router-dom';

function ScheduleCall() {
  const {user}= useAuthContext()
  const navigate=useNavigate()
  
  useEffect(() => {
    if (!user) {
      navigate('/Login');
    }
  }, [user, navigate]);
  
  return (
    <div>
      <Navbar />

      <div className='hero-section' id='hero-section' >
        <div className='hero-image' id='resource-image1'>
          <img src="\src\assets\Images\doctor.jpeg" alt="Doctor" />
        </div>
        <div className='hero-details'>
          <h2 id='schedulecall'>Would you like to schedule a call with your doctor?</h2>
          <p>Dont worry, we have got you covered. With our 24hour services available. we are sure to get you in touch with an available Doctor in your time of need.</p>
          <div className='button'>
          <Link to="https://workspace.google.com/products/meet/">
            <button id='cart-btn2' >
         
            Google meet
          </button>
          </Link>
          <Link to="https://zoom.us/signin#/login">
            <button id='cart-btn3' >Zoom Call</button>
          </Link>
        </div>
        </div>
      </div>         
      <Footer />
    </div>
  )
}

export default ScheduleCall
