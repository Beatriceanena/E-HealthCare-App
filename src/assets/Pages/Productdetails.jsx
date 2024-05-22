import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Pharmacyherosection from '../Components/Pharmacyherosection'
import Productdetail from '../Components/Productdetail';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


const Productdetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const fetchData = () => {
        const apiUrl = `https://e-healthcare-strapi-backend-1.onrender.com/api/products/${id}?populate=*`;
        fetch(apiUrl)
            .then(response => response.json())
            .then(dataObject => {
                const productData = dataObject.data;
                setProduct(productData);
            })                                          
            .catch(error => {
                console.error('Error fetching product:', error);
            });
            
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    return (
        <div>
            <Navbar />
            <Pharmacyherosection />
          <div>

                {
                    product ? (
                        <Productdetail
                          key={product.id}
                          title={product.attributes.productname}
                          image={`https://e-healthcare-strapi-backend-1.onrender.com${product.attributes.image.data.attributes.url}`}
                          price={product.attributes.price}
                          description={product.attributes.description}
                          status={product.attributes.status}
                        />
                            )
                        :
                        (
                            <p>Product not available.....</p>
    
                        )
                }
            </div>
            <Footer />
         </div>
        
    )
}


export default Productdetails