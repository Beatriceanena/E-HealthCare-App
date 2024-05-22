import React from 'react'
import Pharmacyherosection from '../Components/Pharmacyherosection'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Shoppingcart = () => {
    return (
        <div>
            <Navbar />
            <Pharmacyherosection />

            <div>
                <h3>Shopping Cart</h3>

                <div className='' >
                    <div className='cart-items'>
                        <h4>Product</h4>
                        <h4>Price</h4>
                        <h4>Quantity</h4>
                        <h4>Total</h4>
                    </div>

                    <div className=''>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Shoppingcart