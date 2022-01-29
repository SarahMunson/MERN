import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams} from 'react-router';
import { useHistory } from 'react-router-dom';

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

    const history = useHistory()

    const deleteProduct = () => {
        axios.delete(`http://localhost:8001/api/deleteproduct/${id}`)
        .then(res => {
            console.log("response after deleting", res)
            history.push('/')
        })
        .catch(err => console.log("whoops, couldn't delete", err))
    }

    return(
        <div>
            <p>{productDetails.title}</p>
            <p>Price: ${productDetails.price}</p>
            <p>Description: {productDetails.description}</p>
            <a className='text' onClick={deleteProduct}>Delete</a>
        </div>
    );
};

export default OneProduct