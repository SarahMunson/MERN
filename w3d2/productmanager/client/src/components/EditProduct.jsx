import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const EditProduct = () => {

    const { id } = useParams();

    let [productInfo, setProductInfo] = useState({
        title: "",
        price: "",
        description: ""
    })

    useEffect(() => {
        axios.get(`http://localhost:8001/api/oneproduct/${id}`)
            .then(res => {
                console.log("response from one product call", res)
                setProductInfo(res.data.results)
            })
            .catch(err => console.log("error when requesting one product info", err))
    }, [])

    const history = useHistory();

    const changeHandler = (e) => {
        console.log("change in form detected")
        setProductInfo({
            ...productInfo,
            [e.target.name]: e.target.value
        })
    }

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8001/api/updateproduct/${id}`, productInfo)
            .then(res => {
                console.log("response from updating product", res)
                history.push('/')
            })
            .catch(err => console.log("there was an error updating the product", err))
    }

    return (
        <div>
            <h4>Edit Product Below</h4>
            <form onSubmit={updateProduct}>
                <div className="form-group">
                    <label>Product:</label>
                    <input type="text" name='title' value={productInfo.title} onChange={changeHandler} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Price:</label>
                    <input type="text" name='price' value={productInfo.price} onChange={changeHandler} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <input type="text" name='description' value={productInfo.description} onChange={changeHandler} className="form-control" />
                </div>
                <input type="submit" value="Update Product" className='btn btn-success mt-3' />
            </form>
        </div>
    );
};

export default EditProduct