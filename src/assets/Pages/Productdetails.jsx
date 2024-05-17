import React from 'react'
import Pharmacyherosection from '../Components/Pharmacyherosection'


const Productdetails = () => {
    return (
        <div>
            <Pharmacyherosection />

            <div className='product-details'>
                <div className='product-image'>
                    <h3>Product Details</h3>
                    <img src='https://www.mycare.lk/image/cache/catalog/products/004457-550x550.png' />
                </div>


                <div className='product-description'>
                    <div className='detail'>
                        <h3>Drug Name:</h3>
                        <p>Paracetamol</p>
                    </div>

                    <div className='detail'>
                        <h3>Price:</h3>
                        <p>UGX 20000</p>
                    </div>

                    <div className='detail'>
                        <h3>Status:</h3>
                        <p>Instock</p>
                    </div>

                    <hr />
                    <h2>Description</h2>
                    <p>For babies 0 to 6 months, The AVENT soother is orthodontic, dishwasher safe, odorless and taste free. This pacifier is made of durable silicone which is taste and odor free, so your baby is more likely to accept it. It is strong and resists becoming sticky, discolored or misshapen and it is easy to sterilize</p>
                    <button id='cart-btn2' >Add to Cart</button>
                </div>
            </div>
        </div>


    )
}


export default Productdetails