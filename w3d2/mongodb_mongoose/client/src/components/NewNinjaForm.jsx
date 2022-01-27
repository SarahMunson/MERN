import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const NewNinjaForm = (props) => {
    //matching model key names
    let [firstName, setFirstName] = useState("")
    let [lastName, setLastName] = useState("")
    let [numBelts, setNumBelts] = useState(0)
    let [isVeteran, setIsVeteran] = useState(false)

    let [formErrors, setFormErrors] = useState({})

    const history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault();
        //want to package info from the form into one object
        let formInfoObj = { firstName, lastName, numBelts, isVeteran }

        axios.post("http://localhost:8001/api/ninjas", formInfoObj)
            .then(res => {
                console.log("response after posting", res)
                if (res.data.error) {
                    setFormErrors(res.data.error.errors)
                }
                else {
                    props.setNewNinjaAdded(!props.newNinjaAdded)
                }
            })
            .catch(err => console.log("error in submitting post request", err))
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className='form-group'>
                    {/* check the backend to see what inputs the form may need */}
                    <label htmlFor="">First Name:</label>
                    <input onChange={(e) => { setFirstName(e.target.value) }} type="text" name="" id="" className="form-control" />
                    <p className="text-danger">{formErrors.firstName?.message}</p>
                </div>
                <div className='form-group'>
                    {/* check the backend to see what inputs the form may need */}
                    <label htmlFor="">Last Name:</label>
                    <input onChange={(e) => { setLastName(e.target.value) }} type="text" name="" id="" className="form-control" />
                    <p className="text-danger">{formErrors.lastName?.message}</p>
                </div>
                <div className='form-group'>
                    {/* check the backend to see what inputs the form may need */}
                    <label htmlFor="">Number Of Belts:</label>
                    <input onChange={(e) => { setNumBelts(e.target.value) }} type="number" name="" id="" className="form-control" />
                    <p className="text-danger">{formErrors.numBelts?.message}</p>
                </div>
                <div className='form-group'>
                    <label htmlFor="">Is Ninja A Veteran?</label>
                    <input onChange={(e) => { setIsVeteran(e.target.checked) }} type="checkbox" name="" id="" />
                </div>
                <input type="submit" value="Create Ninja!" className="btn btn-success mt-3" />
            </form>
        </div>
    );
};

export default NewNinjaForm;