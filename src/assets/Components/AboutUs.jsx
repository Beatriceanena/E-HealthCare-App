import React from 'react'
import './AboutUs.css'


{/*for using the image in row-reverse too */}
function AboutUs(props) {
const { heading, paragraph, button, image, imageBeforeText } = props;

const flexDirectionStyle = {
    flexDirection: imageBeforeText ? 'row' : 'row-reverse'};

    return (
      <div className='about' style={flexDirectionStyle}>
        <div className='text'>
        <h2>{heading}</h2>
        <p>{paragraph}</p>
        <a href="" style={{borderRadius:5}}>{button}</a>
        </div>
      <div className='image'>
      <img src={image} alt="Doctor" />
      </div>
      
    </div>
  );
}

export default AboutUs
