import React from 'react'
import { Link } from 'react-router-dom'

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
          <Link to={`/product/${props.id}` } className='link1'>
          <p>View</p>
          </Link>
          </div>
          <div className="in-stock-banner">{props.status}</div>
          <Link to="/Contactus">
          <button id='cart-btn'>Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Product;