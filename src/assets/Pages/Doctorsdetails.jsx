import React from 'react'
import { useState,useEffect } from 'react'
import Doctordetail from '../Components/Doctordetail'


const Doctorsdetails = () => {
//  let [doctors,setDoctors]= useState(null)

//  function fetchData(){
//     let apiUrl='http://localhost:1337/api/doctors?populate=*'
//     fetch(apiUrl)
//       .then((response) =>{
//         return response.json();
//       })
//       .then((dataObject)=> {
//         let doctorData=dataObject.data
//         setDoctors=(doctorData)
//       })
    
//     }

// useEffect(() => {
// fetchData();
//  }, [])
 
  return (
    <div>
     {
    //   doctors !== null ?

    //       (doctors.map((item) => {
    //           return (
                  <Doctordetail
                      // key={item.id}
                      // title={item.attributes.doctorname}
                      // image={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
                      // number={item.attributes.phonenumber}
                      // speciality={props.speciality}
                      // location={props.location}
                      // email={props.email}
                  />
          //     )
          // })) :
          // (
          //     <p>Loading.....</p>
          // )
  }
    </div>
  )
}

export default Doctorsdetails