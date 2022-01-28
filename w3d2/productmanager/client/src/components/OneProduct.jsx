import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams} from 'react-router';

const OneProduct = () => {
    const {id} = useParams()
    const [productDetails, setProductDetails] = useState({})

    useEffect(()=> {
        axios.get(`http://localhost:8001/api/oneproduct/${id}`)
        .then(res => {
            console.log("this is the response for product", res)
            setProductDetails(res.data.results)
        })
        .catch(err => console.log("could not get product details", err))
    }, [])

    return(
        <div>
            <p>{productDetails.title}</p>
            <p>Price: ${productDetails.price}</p>
            <p>Description: {productDetails.description}</p>
        </div>
    );
};

export default OneProduct