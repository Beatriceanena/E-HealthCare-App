import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>E-HealthCare</h4>
          <p>Empowering and saving human lives from the non communicable diseases through providing accessible and affordable Healthcare to patients</p>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Phone: +256 758185675</p>
          <p>Phone: +256 786017807</p>
          <p>Email: ehealthcareservices2024.com</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className='bx bxl-facebook-circle' ></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className='bx bxl-twitter' ></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className='bx bxl-instagram'></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 E-healthCare. All rights reserved.</p>
      </div>
    </footer>
  )
}
  export default Footer