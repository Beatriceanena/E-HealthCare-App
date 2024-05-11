import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import "./App.css";

import DoctorRegistration from './assets/Pages/DoctorRegistration';
import PatientRegistration from './assets/Pages/PatientRegistration';
import Login from './assets/Pages/Login';
import Home from './assets/Pages/Home';

const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/Login' element={ <Login /> }/>
    <Route path='/PatientRegistration' element={ <PatientRegistration /> }/>
    <Route path='/DoctorRegistration' element={ <DoctorRegistration /> }/>
    
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App