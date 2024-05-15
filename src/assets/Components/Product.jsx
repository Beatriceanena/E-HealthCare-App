import React from 'react'

const Product = () => {
  return (
    <div className='product-items'>
      <div className='cart-item'>
        <div className='cart-image'>
          <img src='https://s3.envato.com/files/91718211/Previews/Preview2.jpg' />
        </div>
        <div className='item-details'>
          <h3>Metrohebrophyn</h3>
          <div className='view'>
          <p>UGX 200000</p> 
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