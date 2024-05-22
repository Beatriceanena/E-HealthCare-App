import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Resourceimage from '../Components/Resourceimage'
import Footer from '../Components/Footer'

const Resources = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className='hero-section'>
          <div>
            <h2 id='heading4'>Resources</h2>
          </div>
        </div>
      </div>

      <div>
        <div className='hero-section' id='hero-section' >
          <div className='hero-details'>
            <h3>Welcome to E-HealthCare
              Your Path to a Diabetes Free Life</h3>
            <p> Welcome to Diabetes Free Life! We understand living with diabetes isn’t easy, but we’re here to change that. Our goal is to empower you with comprehensive guidance and a personalized path to not just manage, but potentially reverse your diabetes condition. Together, we can make a diabetes-free life a reality! </p>
            <div className='button'>
            </div>
          </div>

          <div className='hero-image' id='hero-image'>
            <Resourceimage
              image="https://www.drnitingupte.com/wp-content/uploads/2017/04/healthy-fruits.png"
            />
            <Resourceimage
              image="https://img.livestrong.com/375/clsd/getty/70472b9652ce43c1aea090beb57a7e28.jpg"
            />
            <Resourceimage
              image=" https://media.istockphoto.com/id/1347465763/photo/young-calm-fit-healthy-african-black-woman-at-home-doing-yoga-learning-online-class.jpg?s=612x612&w=0&k=20&c=EseZ-4XZ9pLDhpLmWFVf8eanNceiH3vyHf--XS8ida4="
            />
            <Resourceimage
              image="https://www.100daysofrealfood.com/wp-content/uploads/2023/09/shutterstock_1156056913.jpg"
            />
          </div>
        </div>
      </div>

      <div>

        <div className='hero-section' id='hero-section' >
          <div className='hero-image' id='resource-image1'>
            <img src='https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/06/healthy-eating-food-kitchen-1296x728-header.jpg?w=1155&h=1528' />
          </div>
          <div className='hero-details'>
            <h3>Changes you can make to manage High blood pressure</h3>
            <ol>
              <li>Eat a well balanced diet</li>
              <li>Enjoy a regular physical exercise</li>
              <li>Work with health professionals</li>
              <li>Take medications regularly</li>
              <li>Manage stress</li>
              <li>Limit Alcohol</li>
            </ol>
            <div className='button'>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div className='hero-section' id='hero-section' >
            <div className='hero-details'>
              <h3>How to reduce your risk of Heart Disease</h3>
              <ol>
                <li>Eat heart-healthy foods:
                  A healthy meal plan includes fruits,
                  vegetables, whole grains and fish.
                  If you’re at high risk for heart disease,
                  you may need to watch your salt intake</li>

                <li>Exercise five days a week:
                  30 minutes of moderate-intensity activity five days a week.</li>
                <li>Know your numbers: Understanding your blood pressure, cholesterol and
                  blood sugar levels will help you keep them in a healthy range.
                  Limit alcohol consumption: For men, the limit is two drinks per day. For
                  women, the limit is one per day.</li>
                <li>Take your prescription medications: Your doctor may prescribe medications
                  to control conditions contributing to heart disease like diabetes and high
                  blood pressure. Make sure to take them as directed.</li>

              </ol>
              <div className='button'>
              </div>
            </div>

            <div className='hero-image' id='resource-image1'>
              <img src='https://media.istockphoto.com/id/1586911323/photo/close-up-of-african-woman-hands-holding-red-heart-in-solidarity.jpg?b=1&s=612x612&w=0&k=20&c=M1BBsgQzPVadTWthdKefg0Yqdac_oxafWST5FQ4cpHA=' />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Resources
