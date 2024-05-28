import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Doctordetail from '../Components/Doctordetail'
import Footer from '../Components/Footer';

const Doctorsdetails = () => {
  const { id } = useParams();
  const [medicalpersonel, setMedicalPersonel] = useState(null);

  const fetchData = () => {
    const apiUrl = `http://localhost:1337/api/medicalpersonels/${id}?populate=*`;
    fetch(apiUrl)
      .then(response => response.json())
      .then(dataObject => {
        const medicalpersonelData = dataObject.data;
        setMedicalPersonel(medicalpersonelData);
      })
      .catch(error => {
        console.error('Error fetching doctors:', error);
      });
  };

  useEffect(() => {
    fetchData();
}, [id]);

  return (
    <div>

        {
          medicalpersonel ? (
              <Doctordetail
                key={medicalpersonel.id}
                name={medicalpersonel.attributes.doctorname}
                image={`http://localhost:1337${medicalpersonel.attributes.image.data[0].attributes.url}`}
                speciality={medicalpersonel.attributes.speciality}
                phonenumber={medicalpersonel.attributes.telephonenumber}
                email={medicalpersonel.attributes.email}
                location={medicalpersonel.attributes.location}
              />
                  )
              :
              (
                  <p>Doctor not available.....</p>
              )
      }

      <Footer />
    </div>
  )
}

export default Doctorsdetails