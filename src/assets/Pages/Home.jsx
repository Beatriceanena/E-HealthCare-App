import React from 'react'
import Navbar from '../Components/Navbar'
import Cards from '../Components/Cards'
import Specialities from '../Components/Specialities'
import Service from '../Components/Service'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'

const Home=() => {
  return (
    <div className='home'>
      <Navbar />

      <div className='hero-section' >
        <div className='hero-details'>
          <h1>E-HealthCare</h1>
          <p>Empowering and saving human lives
            from the non communicable diseases
            through providing accessible and
            affordable Healthcare to patients</p>

          <div className='button'>
          <Link to="/Findadoctor">
          <button id='cart-btn2' >Find a doctor</button>
        </Link>
        <Link to="/ScheduleCall">
        <button id='cart-btn3' >Schedule a Call</button>
      </Link>
          </div>
          
        </div>
        <div className='hero-image'>
          <img src='https://t3.ftcdn.net/jpg/00/55/72/00/360_F_55720049_iwblEv63hK8UFdOnjN0lxdfgloetKBcs.jpg' />
        </div>
      </div>

      <div className='cards'>
        <Cards
          icon="bx bx-headphone"
          title="Online Consultancy"
        />

        <Cards
          icon="bx bx-calendar-check"
          title="Make Appointment"
        />

        <Cards
          icon="bx bxs-capsule"
          title="Online Pharmacy"
        />

        <Cards
          icon=" bx bxs-face-mask "
          title="Find a Doctor"
        />
      </div>

      <div className='about-us'>
        <div className='hero-section' id='hero-section' >
          <div className='hero-image'>
            <img src='https://t4.ftcdn.net/jpg/05/87/65/83/360_F_587658387_Xbw7bVBWgFUbdyhQfZzNDWmhPK55NVnc.jpg' />
          </div>
          <div className='hero-details'>

            <h2>About Us</h2>
            <p> At E-HealthCare, we believe in leveraging cutting-edge technology to provide accessible, convenient, and personalized healthcare solutions tailored to your unique needs. Whether you're seeking medical advice, monitoring and managing a chronic condition, our platform offers a wide range of services, including telemedicine consultations, health tracking tools, virtual consultation and much more. </p>
            <div className='button'>
              <Link to="/ScheduleCall">
              <button id='cart-btn2' >Contact Us</button>
            </Link>
            </div>
          </div>
        </div>

        <div>
          <h2 className='heading2'>Our Specialities</h2>
          <div className='specialities-card'>
            <Specialities
              image="https://assets.telegraphindia.com/telegraph/2022/Jul/1658785489_5e5b81e5-e60f-42d9-8f3f-d2e5f1a691e1.gif"
              title="Diabetes"
            />

            <Specialities
              image="https://www.yashodahealthcare.com/blogs/wp-content/uploads/2022/02/Heart-Disease.jpg"
              title="Cardiovascular Diseases"
            />

            <Specialities
              image="https://upload.wikimedia.org/wikipedia/commons/c/c6/Blood_pressure_monitoring.jpg"
              title="Blood Pressure"
            />
          </div>
        </div>

        <div>
        <h2 className='heading2'>Our Services</h2>
        <div className='services-container'>
        <Service 
        icon="bx bx-user"
        title="Remote Doctor Consultations" 
        />

        <Service
        icon=" bx bx-test-tube" 
        title="Health Screening "
        />

        <Service
        icon="bx bx-bowl-rice"
        title="Paediatric and Nutrition Consultations" 
        />

        <Service 
        icon="bx bx-notepad"
        title="Monthly Healthcare Plan" 
        />

        <Service
        icon="bx bxs-capsule"
        title="Medication and Lab delivery "
        />

        <Service
        icon="bx bxs-ambulance"
        title="Ambulance Services" 
      
        />
        </div>
        </div>
      </div>
  
      <Footer />
    </div>
  )
}

export default Home