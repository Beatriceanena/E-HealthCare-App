import React from 'react'
import { Navigate } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import DoctorRegistration from './assets/Pages/DoctorRegistration';
import PatientRegistration from './assets/Pages/PatientRegistration';
import Login from './assets/Pages/Login';
import Bookappointment from './assets/Pages/Bookappointment';
import Pharmacy from './assets/Pages/Pharmacy'
import Productdetails from './assets/Pages/Productdetails';
import Shoppingcart from './assets/Pages/Shoppingcart';
import Doctorsdetails from './assets/Pages/Doctorsdetails';
import ScheduleCall from './assets/Pages/ScheduleCall';
import Home from './assets/Pages/Home';
import Resources from './assets/Pages/Resources'
import Contactus from './assets/Pages/Contactus'
import Profile from './assets/Pages/Profile'
import Findadoctor from './assets/Pages/Findadoctor';
import { getToken } from './User-authentication/Helpers';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/PatientRegistration' element={<PatientRegistration />} />
          <Route path='/DoctorRegistration' element={<DoctorRegistration />} />
          <Route path='/Bookappointment' element={<Bookappointment />} />
          <Route path='/Pharmacy' element={<Pharmacy />} />
          <Route path='/product/:id' element={<Productdetails />} />
          <Route path='/Shoppingcart' element={<Shoppingcart />} />
          <Route path='/medicalpersonel/:id' element={<Doctorsdetails />} />
          <Route path='/ScheduleCall' element={<ScheduleCall />} />
          <Route path='/Resources' element={<Resources />} />
          <Route path='/Contactus' element={<Contactus />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/Findadoctor' element={<Findadoctor />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App


// <Route
// path="/Bookappointment"
// element={getToken() ? <Bookappointment /> : <Navigate to="/PatientRegistration" />}
// />
// <Route
// path="/ScheduleCall"
// element={getToken() ? <ScheduleCall /> : <Navigate to="/PatientRegistration" />}
// />

