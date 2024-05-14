import React from 'react'

const Pharmacyherosection = () => {
  return (
    <div>
    <div className='hero-section'>
    <div>
        <h2>Online Pharmacy</h2>
    </div>

    <div className='searchbar'>
        <div><input type='text' placeholder='Search product....' id='searchbar' /></div>
        <div><button type='submit' id='search-btn'> search</button></div>
    </div>

    <div className='icon'>
        <i class='bx bx-cart-alt'></i>
    </div>
</div>
<hr />
    </div>
  )
}

export default Pharmacyherosection