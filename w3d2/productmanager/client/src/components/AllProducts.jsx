import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllProducts = () => {
    let [allProducts, setAllProducts] = useState([])
    let [deleted, setDeleted] = useState(false)

    useEffect(() => {

        axios.get('http://localhost:8001/api/allproducts')
            .then(res => {
                console.log("response getting all products", res)
                setAllProducts(res.data.results)
            })
            .catch(err => console.log("error getting all products", err))
    }, [deleted])

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8001/api/deleteproduct/${id}`)
        .then(res => {
            console.log("results when deleted", res)
            setDeleted(!deleted)
        })
        .catch(err => console.log("error happened when deleting", err))
    }

    return (
        <div>
            {allProducts.map((product, i) => {
                return (

                    <div key={i}>
                        <Link to={`/productdetails/${product._id}`}>{product.title}</Link>
                        <p>
                            <Link to={`/product/edit/${product._id}`}>Edit</Link> &nbsp;
                            <a onClick={() => deleteProduct(product._id)} className='text'>Delete</a>
                        </p>
                    </div>
                )
            }
            )}
        </div>
    );
};

export default AllProducts