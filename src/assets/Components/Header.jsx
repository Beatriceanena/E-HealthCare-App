import React from 'react'
import {Link} from 'react-router-dom'

import './Header.css'


function Header() {
  return (
    <div>
    <div className="top">
        <h1 style={{color:'#089CAD', marginLeft:'25px'}}>E-Health</h1>
            <div className="account">

            <Link to="/login" style={{color:'black', textDecoration:'none', borderRight:'1px solid black', padding: "5px"}}>Login</Link>

            <Link to="/PatientRegistration" style={{color:'black', textDecoration:'none'}}>Create Account</Link>

            <Link to="/BookAppointment" style={{height:'40px', justifyContent:'center', alignItems:'center', backgroundColor:'#089CAD', width:'120px', textAlign:'center', textDecoration:'none', borderRadius:'5px', color:'white'}}>Book Appointment</Link>
            </div>
            </div>
        <nav>
        
           <ul>
                        <li><Link to="/"  style={{color:'white', textDecoration:'none'}}>Home</Link> </li>
                        <li><Link to="/Finddoctor" style={{color:'white', textDecoration:'none'}}>Find a  Doctor</Link></li>
                        <li><Link to="/Pharmacy" style={{color:'white', textDecoration:'none'}}>Pharmacy</Link></li>
                        <li><Link id='#footer' style={{color:'white', textDecoration:'none'}}>Contact us</Link></li>
                        <li><Link to="/" style={{color:'white', textDecoration:'none'}}>Profiles</Link></li>
                        <li><Link to="/Resources" style={{color:'white', textDecoration:'none'}}>Resources</Link> </li>


              {/*  <li><a href="Home" style={{color:'white', textDecoration:'none'}}>Home</a></li>
                <li><a href="Find a Doctor" style={{color:'white', textDecoration:'none'}}>Find a Doctor</a></li>
                <li><a href="Phamarcy" style={{color:'white', textDecoration:'none'}}>Phamarcy</a></li>
                <li><a href="Recources" style={{color:'white', textDecoration:'none'}}>Recources</a></li>
                <li><a href="Contact us" style={{color:'white', textDecoration:'none'}}>Contact Us</a></li>
  <li><a href="Profiles" style={{color:'white', textDecoration:'none'}}>Profiles</a></li> */}
               
            </ul>
        </nav>
    </div>
  )
}

export default Header
