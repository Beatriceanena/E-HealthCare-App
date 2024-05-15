import React from 'react'
import Doctor from '../Components/Doctor'


const Finddoctor = () => {
    return (
        <div>
            <div className='hero-section'>
                <div>
                    <h2>Find a Doctor</h2>
                </div>
                <div className='searchbar'>
                    <div>
                        <input type='text' placeholder='Search by name.....' id='searchbar' />
                    </div>

                </div>

                <div className='searchbar'>
                    <div><input type='text' placeholder='Search by name.....' id='searchbar' /></div>
                    <div><button type='submit' id='search-btn'> search</button></div>
                </div>

            </div>
            <div className='doctors-section'>
                <Doctor />
                <Doctor />
                <Doctor />
                <Doctor />
                <Doctor />
                <Doctor />
             
            </div>

            <div className='about-doctors'>
                <div className='lists'>
                    <h3>Our Professional Doctors</h3>
                    <p>Our skilled and professional medical personnel, provide healthCare 24/7, administer medication at the clinic or at the comfort of your homes,provide virtual healthcare and healthcare management plans on a monthly basis.</p>
                    <button id='appointment-btn2'> Book Appointment</button>
                    </div>
                <div className='about-doctors-image'>
                    <img src='https://thumbs.dreamstime.com/b/m%C3%A9dico-covid-e-press%C3%A3o-arterial-com-doente-negro-para-exame-ou-de-sa%C3%BAde-card%C3%ADaco-hipertens%C3%A3o-m%C3%A9dica-profissional-273767866.jpg' />
                </div>
            </div>
         
        </div>
    )
}


export default Finddoctor