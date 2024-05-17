import React from 'react'
import { useEffect, useState } from 'react';
import Product from '../Components/Product'
import Pharmacyherosection from '../Components/Pharmacyherosection'

const Pharmacy = () => {
    let [products, setProducts] = useState(null)

    function fetchData() {
        let apiUrl = "http://localhost:1337/api/products?populate=*"
        fetch(apiUrl)
            .then((response) => {
                return response.json();
            })
            .then((dataObject) => {
                let productsData = dataObject.data
                setProducts(productsData)
            })
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            <Pharmacyherosection />
            <div className='cart-container'>
                <div className='categories'>
                    <div className='category'>
                        <h2> Categories</h2>
                        <p>Online Lab</p>
                        <p>Pharmacy</p>
                    </div>
                </div>
                <div className='image-banner'>
                    <img src="https://uc.healthnetcalifornia.com/content/dam/centene/healthnet/images/groups/uc-tfc-hn-formulary-jul23-banner.png" />
                </div>
            </div>

            <div className='cart-container'>
                <div className='categories'>
                    <div className='category'>
                        <h2> Reviews</h2>
                    </div>
                </div>
                <div className='product-section'>
                    <div className='product-cart'>
                        {
                            products !== null ?

                                (products.map((item) => {
                                    return (
                                        <Product
                                            key={item.id}
                                            title={item.attributes.productname}
                                            image={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
                                            price={item.attributes.price}
                                        />
                                    )
                                })) :
                                (
                                    <p>Loading.....</p>
                                )
                        }

                    </div>
                    <div className='product-cart'>

                    </div>

                </div>


            </div>


        </div>
    )
}

export default Pharmacy