import React from 'react'
import { Link } from 'react-router-dom'

const productdetail = (props) => {
  return (
    <div className='product-details'>
    <div className='product-image'>
        <h3>Product Details</h3>
        <img src={props.image} />
    </div>
    <div className='product-description'>
    <div className='detail'>
        <h3>Drug Name:</h3>
        <p id='details'>{props.title}</p>
    </div>

    <div className='detail'>
        <h3>Price:</h3>
        <p id='details'>UGX {props.price}</p>
    </div>

    <div className='detail'>
        <h3>Status:</h3>
        <p id='details'>{props.status}</p>
    </div>

    <hr />
    <h2>Description</h2>
    <p>{props.description}</p>
    <Link to="/Contactus">
    <button id='cart-btn2' >Buy Now</button>
    </Link>
</div>
    </div>
  )
}

export default productdetail