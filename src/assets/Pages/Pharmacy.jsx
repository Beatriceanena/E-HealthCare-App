import React from 'react'
import Product from '../Components/Product'
import Pharmacyherosection from '../Components/Pharmacyherosection'

const Pharmacy = () => {
    return (
        <div>
         <Pharmacyherosection/>
            <div className='cart-container'>
                <div className='categories'>
                    <div className='category'>
                        <h2> Categories</h2>
                        <p>Online Lab</p>
                        <p>Pharmacy</p>
                    </div>

                </div>

                <div className='image-banner'>
                    <img src="https://uc.healthnetcalifornia.com/content/dam/centene/healthnet/images/groups/uc-tfc-hn-formulary-jul23-banner.png" />
                </div>
            </div>

            <div className='cart-container'>
                <div className='categories'>
                    <div className='category'>
                        <h2> Reviews</h2>
                    </div>

                </div>
                <div className='product-section'>
                    <div className='product-cart'>
                        <Product />
                    </div>
                    <div className='product-cart'>
                        
                    </div>

                </div>


            </div>


        </div>
    )
}

export default Pharmacy