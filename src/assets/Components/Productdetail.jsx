import React from 'react'

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
        <p>{props.title}</p>
    </div>

    <div className='detail'>
        <h3>Price:</h3>
        <p>UGX {props.price}</p>
    </div>

    <div className='detail'>
        <h3>Status:</h3>
        <p>{props.status}</p>
    </div>

    <hr />
    <h2>Description</h2>
    <p>{props.description}</p>
    <button id='cart-btn2' >Add to Cart</button>
</div>
    </div>
  )
}

export default productdetail