import React from 'react'
import './Header.css'


function Header() {
  return (
    <div>
    <div className="top">
        <h1 style={{color:'#089CAD', marginLeft:'25px'}}>E-Health</h1>
            <div className="account">
                <a href="login" style={{color:'black', textDecoration:'none', borderRight:'1px solid black', padding: "5px"}}>Login</a>
                <a href="account" style={{color:'black', textDecoration:'none'}}>Create Account</a>
                <button style={{height:'40px', justifyContent:'center', alignItems:'center', backgroundColor:'#089CAD', width:'120px'}}>Book Appointment</button>
            </div>
            </div>
        <nav>
        
           <ul>
                <li><a href="links" style={{color:'white', textDecoration:'none'}}>Home</a></li>
                <li><a href="links" style={{color:'white', textDecoration:'none'}}>Find a Doctor</a></li>
                <li><a href="links" style={{color:'white', textDecoration:'none'}}>Phamarcy</a></li>
                <li><a href="links" style={{color:'white', textDecoration:'none'}}>Recources</a></li>
                <li><a href="links" style={{color:'white', textDecoration:'none'}}>Contact Us</a></li>
                <li><a href="links" style={{color:'white', textDecoration:'none'}}>Profiles</a></li>
               
            </ul>
        </nav>
    </div>
  )
}

export default Header
