import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
    let [title, setProductTitle] = useState("")
    let [price, setProductPrice] = useState(null)
    let [description, setProductDescription] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        let formInfoObj = { title, price, description }
        axios.post('http://localhost:8001/api/createproduct', formInfoObj)
            .then(res => {
                console.log("response after submitting the form", res)
            })
            .catch(err => console.log("Error submitting form", err))
    }

    return (
        <div>
            <form onSubmit={submitHandler}>

                <div className="form-group">
                    <h4><label htmlFor="">Title:</label></h4>
                    <input type="text" onChange={(e) => setProductTitle(e.target.value)} className="form-control" />
                </div>
                <div className="form-group">
                    <h4><label htmlFor="">Price:</label></h4>
                    <input type="text" onChange={(e) => setProductPrice(e.target.value)} className="form-control" />
                </div>
                <div className="form-group">
                    <h4><label htmlFor="">Description:</label></h4>
                    <input type="text" onChange={(e) => setProductDescription(e.target.value)} className="form-control" />
                </div>
                <input type="submit" value="Submit" className='btn btn-success mt-3' />
            </form>
        </div>
    );
};

export default ProductForm