import React from 'react'
import Header from '../Components/Header'
import AboutUs from '../Components/AboutUs'



function Home() {
  return (
    <div>
    <Header/>
    <AboutUs
      heading= "E-Health"
      paragraph= "Empowering and saving human lives from the non-communicable diseases through providing accessible and affordable Healthcare to patients."
      image= "./Images/Nurse.jpg" />
    </div>
  )
}

export default Home
