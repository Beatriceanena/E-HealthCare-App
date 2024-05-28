import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Doctordetail = (props) => {
    return (
        <div>
        <Navbar />
            <div className='Doctors-details'>
                <h3>Doctors Details</h3>
                <div className='main-details-container' >
                    <div className="doctor-details-container">

                        <div className='doctor-details-image'>
                            <img src={props.image} />
                        </div>

                        <div className='details-container'>
                            <p> <span className='doctor-info'>Name: </span>{props.name}</p>
                            <p> <span className='doctor-info'>Speciality:</span> {props.speciality}</p>
                            <p><span className='doctor-info'>Availability:</span>Mon-Fri</p>

                            <div className='icons-2'>
                                <div>
                                    <i className='bx bx-phone-call' id='icons-2' ></i>
                                    <span>{props.phonenumber}</span>
                                </div>

                                <div>
                                    <i className='bx bx-envelope' id='icons-2'></i>
                                    <span>{props.email}</span>
                                </div>

                                <div>
                                    <i className='bx bx-map' id='icons-2' ></i>
                                    <span>{props.location}</span>
                                </div>
                                <div className='button'>
                                     <Link to="/Bookappointment">
                                    <button id='cart-btn2' >Book appointment</button>
                                    </Link>

                                    <Link to="/ScheduleCall">
                                    <button id='cart-btn3' >Schedule a Call</button>
                                  </Link>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Doctordetail