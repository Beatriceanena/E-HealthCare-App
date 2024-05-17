import React from 'react';

const Pharmacyherosection = ({ searchItem, handleSearch }) => {
    return (
        <div>
            <div className='hero-section'>
                <div>
                    <h2>Online Pharmacy</h2>
                </div>
                <div className='searchbar'>
                    <div>
                        <input
                            type='text'
                            placeholder='Search product....'
                            id='searchbar'
                            value={searchItem}
                            onChange={handleSearch}
                        />
                    </div>
                    <div>
                        <button type='submit' id='search-btn'>Search</button>
                    </div>
                </div>
                <div className='icon'>
                    <i className='bx bx-cart-alt'></i>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Pharmacyherosection;