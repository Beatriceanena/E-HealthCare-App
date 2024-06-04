import React, { useEffect, useState } from 'react';
import Product from '../Components/Product';
import Pharmacyherosection from '../Components/Pharmacyherosection';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';

const Pharmacy = () => {
    const [products, setProducts] = useState(null);
    const [searchItem, setSearchItem] = useState('');

    const fetchData = () => {
        const apiUrl = "http://localhost:1337/api/products?populate=*";
        fetch(apiUrl)
            .then(response => response.json())
            .then(dataObject => {
                const productsData = dataObject.data;
                setProducts(productsData);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
                setProducts([]); 
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSearch = (event) => {
        setSearchItem(event.target.value);
    };

    const filteredProducts = products?.filter(product =>
        product.attributes.productname.toLowerCase().includes(searchItem.toLowerCase())
    ) || [];

    return (
        <div>
        <Navbar />
            <Pharmacyherosection searchItem={searchItem} handleSearch={handleSearch} />
            <div className='cart-container'>
                <div className='categories'>
                    <div className='category'>
                        <h2> Categories</h2>
                        <p>Online Lab</p>
                        <p>Pharmacy</p>
                    </div>
                </div>
                <div className='image-banner'>
                    <img src="https://uc.healthnetcalifornia.com/content/dam/centene/healthnet/images/groups/uc-tfc-hn-formulary-jul23-banner.png" alt="Banner" />
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
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map(item => (
                                <Product
                                    key={item.id}
                                    id={item.id}
                                    title={item.attributes.productname}
                                    image={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
                                    price={item.attributes.price}
                                    status={item.attributes.status}
                                />
                            ))
                        ) : (
                            <p>{products === null ? 'Loading.....' : 'No products found.'}</p>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Pharmacy;