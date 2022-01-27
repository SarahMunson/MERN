import React, { useState } from 'react';

const ProductForm = () => {
    let [product, setProduct] = useState({})

    return (
        <div>
            <form>

                <div className="form-group">
                    <h4><label htmlFor="">Title:</label></h4>
                    <input type="text" name="" id="" className="form-control" />
                </div>
                <div className="form-group">
                    <h4><label htmlFor="">Price:</label></h4>
                    <input type="text" name="" id="" className="form-control" />
                </div>
                <div className="form-group">
                    <h4><label htmlFor="">Description:</label></h4>
                    <input type="text" name="" id="" className="form-control" />
                </div>
                <input type="submit" value="Submit" className='btn btn-success mt-3' />
            </form>
        </div>
    );
};

export default ProductForm