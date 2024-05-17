import React from 'react'

const Doctordetail = (props) => {
    return (
        <div>
            <div className='Doctors-details'>
                <h3>Doctors Details</h3>
                <div className='main-details-container' >
                    <div className="doctor-details-container">

                        <div className='doctor-details-image'>
                            <img src={props.image} />
                        </div>

                        <div className='details-container'>
                            <h3>{props.name}</h3>
                            <h4>{props.speciality}</h4>
                            <p>Availability: Mon-Fri</p>

                            <div className='icons-2'>
                                <div>
                                    <i class='bx bx-phone-call' id='icons-2' ></i>
                                    <span>{props.phonenumber}</span>
                                </div>

                                <div>
                                    <i class='bx bx-envelope' id='icons-2'></i>
                                    <span>{props.email}</span>
                                </div>

                                <div>
                                    <i class='bx bx-map' id='icons-2' ></i>
                                    <span>{props.location}</span>
                                </div>
                                <div className='button'>
                                    <button id='cart-btn2' >Book appointment</button>
                                    <button id='cart-btn3' >Schedule a Call</button>
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