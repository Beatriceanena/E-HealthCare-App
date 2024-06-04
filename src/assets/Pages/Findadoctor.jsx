import React from 'react'
import { useState, useEffect } from 'react'
import Doctor from '../Components/Doctor'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'

function Findadoctor() {
    const [medicalpersonels, setMedicalPersonels] = useState(null);
    const [searchItem, setSearchItem] = useState('');

    const fetchData = () => {
        const apiUrl = "http://localhost:1337/api/medicalpersonels?populate=*";
        fetch(apiUrl)
            .then(response => response.json())
            .then(dataObject => {
                const medicalpersonelsData = dataObject.data;
                setMedicalPersonels(medicalpersonelsData);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSearch = (event) => {
        setSearchItem(event.target.value);
    };

    const filteredMedicalpersonels = medicalpersonels?.filter(medicalpersonel =>
        medicalpersonel.attributes.speciality.toLowerCase().includes(searchItem.toLowerCase())
    ) || [];

    return (
        <div>
            <Navbar />
            <div className='hero-section'>
                <div>
                    <h2 id='heading3'>Find a Doctor</h2>
                </div>

                <div className='searchbar'>
                    <div><input type='text' placeholder='Search by profession....' id='searchbar' 
                    value={searchItem} 
                    onChange={handleSearch}  /></div>
      
                </div>

            </div>
            <div className='doctors-section'>
               
                 { filteredMedicalpersonels.length > 0 ? (
                       filteredMedicalpersonels.map(item => (
                            <Doctor
                                key={item.id}
                                id={item.id}
                                name={item.attributes.doctorname}
                                image={`http://localhost:1337${item.attributes.image.data[0].attributes.url}`}
                                speciality={item.attributes.speciality}
                            />
                        ))) :
                        (
                            <p>{medicalpersonels === null ? 'Loading.....' : 'No doctors found.'}</p>
                        )
                }
            </div>

            <div className='about-doctors'>
                <div className='lists'>
                    <h3> <span> <img src=''/></span>Our Professional Doctors</h3>
                    <ol id='List-items'>
                        <li>Provide HealthCare 24/7</li>
                        <li>Provide virtual HealthCare</li>
                        <li>Refer patients with critical medical conditions</li>
                        <li>Provide monthly healthcare management plans</li>
                        <li>Administer medication at clinic and at the comfort of your home</li>
                    </ol>

                    <Link to="/Bookappointment">
                    <button id='cart-btn2' >Book appointment</button>
                    </Link>
                </div>
                <div className='about-doctors-image'>
                    <img src='https://thumbs.dreamstime.com/b/m%C3%A9dico-covid-e-press%C3%A3o-arterial-com-doente-negro-para-exame-ou-de-sa%C3%BAde-card%C3%ADaco-hipertens%C3%A3o-m%C3%A9dica-profissional-273767866.jpg' />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Findadoctor