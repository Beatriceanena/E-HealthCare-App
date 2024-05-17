import React from 'react'

const Product = (props) => {
  return (
    <div className='product-items'>
      <div className='cart-item'>
        <div className='cart-image'>
          <img src={props.image}/>
        </div>
        <div className='item-details'>
          <h3>{props.title}</h3>
          <div className='view'>
          <p>UGX {props.price}</p> 
          <p>View</p>
          </div>
          <div class="in-stock-banner">In Stock</div>
          <button id='cart-btn'>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Product