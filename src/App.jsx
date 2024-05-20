import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import "./App.css";
import DoctorRegistration from './assets/Pages/DoctorRegistration';
import PatientRegistration from './assets/Pages/PatientRegistration';
import Login from './assets/Pages/Login';
import Home from './assets/Pages/Home';
import Bookappointment from './assets/Pages/Bookappointment';
import Pharmacy from './assets/Pages/Pharmacy'
import Productdetails from './assets/Pages/Productdetails';
import Finddoctor from './assets/Pages/Finddoctor';
import Shoppingcart from './assets/Pages/Shoppingcart';
import Doctorsdetails from './assets/Pages/Doctorsdetails';
import ScheduleCall from './assets/Pages/ScheduleCall';



const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={ <Home /> }/>
    <Route path='/Login' element={ <Login /> }/>
    <Route path='/PatientRegistration' element={ <PatientRegistration /> }/>
    <Route path='/DoctorRegistration' element={ <DoctorRegistration /> }/>
    <Route path='/Bookappointment' element={ <Bookappointment/> }/> 
    <Route path='/Pharmacy' element={ <Pharmacy/>}/> 
    <Route path='/Productdetails' element={<Productdetails/>} />
    <Route path='/Finddoctor' element={<Finddoctor/>} />
    <Route path='/Shoppingcart' element={<Shoppingcart/>} />
    <Route path='/Doctorsdetails' element={<Doctorsdetails/>} />
    <Route path='/ScheduleCall' element={<ScheduleCall/>} />
    
  
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App