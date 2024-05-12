import React from 'react'
import './Footer.css'
function Footer(props) {
  return (
    <div className='footer'>
        <div className="contact">
          <h5>Contact Info</h5>
          <a href="e-mail" type='e-mail' style={{color:'white'}}>ehealthcare@gmail.com</a>
          <a href="number" style={{color:'white'}}>+256 758903837</a>
          <a href="number" style={{color:'white'}}>+256 771629949</a>
        </div>
        <p> Copyright 2024 KanzuCode</p>
    </div>
  )
}

export default Footer
