import React from 'react'
import Pharmacyherosection from '../Components/Pharmacyherosection'

const Shoppingcart = () => {
    return (
        <div>
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
        </div>
    )
}

export default Shoppingcart