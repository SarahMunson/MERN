import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllProducts = () => {
    let [allProducts, setAllProducts] = useState([])

    useEffect(() => {

        axios.get('http://localhost:8001/api/allproducts')
            .then(res => {
                console.log("response getting all products", res)
                setAllProducts(res.data.results)
            })
            .catch(err => console.log("error getting all products", err))
    }, [])


    return (
        <div>
            {allProducts.map((product, i) => {
                return (

                    <div key={i}>
                        <Link to={`/productdetails/${product._id}`}>{product.title}</Link>
                    </div>
                )
            }
            )}
        </div>
    );
};

export default AllProducts