import React from 'react'
import Header from '../Components/Header'
import AboutUs from '../Components/AboutUs'
import Footer from '../Components/Footer'
import Services from '../Components/Services'

function Home() {
  return (
    <div>
    
    <Header/>
    <AboutUs
      heading= "E-Health Care"
      paragraph= "Empowering and saving human lives from the non-communicable diseases through providing accessible and affordable Healthcare to patients."
      image= "\src\assets\Images\Nurse.jpg" 
      button = "Make appointment"
      />

      <div className="OurServices">
      <Services
      title = "Online consultancy" />
      <Services
      title ="Online Lab" />
      <Services
      title='Find a Doctor'/>
      <Services
      title= 'Online Phamarcy'/>
      </div>
   

    <AboutUs
      heading= "About Us"
      paragraph= "Welcome to E-Health, your comprehensive digital health platform designed to revolutionize the way you manage your well-being. At E-Health, we believe in leveraging cutting-edge technology to provide accessible, convenient, and personalized healthcare solutions tailored to your unique needs. Whether you're seeking medical advice, monitoring and managing a chronic condition, our platform offers a wide range of services, including telemedicine consultations, health tracking tools, virtual consultation and much more. With a team of experienced healthcare professionals and innovative digital tools at your fingertips, take control of your health journey with E-Health today." 
      
      image = '\src\assets\Images\consult.jpg'
      button = "Read More"
      />

      <h3>Our Specialities</h3>
      <Services/>
      <Services/>
      <Services/>

      <Footer/>
    </div>
  )
}

export default Home
