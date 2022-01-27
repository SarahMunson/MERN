import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const EditNinja = () => {
    //get the route param info containing the id of the object we want to edit
    const { id } = useParams();

    let [ninjaInfo, setNinjaInfo] = useState({
        firstName: "",
        lastName: "",
        numBelts: 0,
        isVeteran: false
    })

    useEffect(() => {
        axios.get(`http://localhost:8001/api/ninjas/${id}`)
            .then(res => {
                console.log("response for one ninja", res)
                setNinjaInfo(res.data.result)
            })
            .catch(err => console.log(err))
    }, [])

    //initialize useHistory so we can redirect after the update of the form
    const history = useHistory();

    const changeHandler = (e) => {
        console.log("change in form detected!")
        if(e.target.type === "checkbox"){
            setNinjaInfo({
                ...ninjaInfo,
                [e.target.name]: e.target.checked
            })
        }
        else{
            setNinjaInfo({
                ...ninjaInfo,
                [e.target.name]: e.target.value
            })
        }
    }

    const updateNinjaSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8001/api/ninjas/${id}`, ninjaInfo)
            .then(res => {
                console.log("res after put request", res)
                history.push("/")
            })
            .catch(err => console.log(err))
    }

    return(
        <div>
            <h4>Edit Ninja Below</h4>
            <form onSubmit={updateNinjaSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="">First Name</label>
                    <input type="text" name="firstName" className="form-control" value={ninjaInfo.firstName} onChange={changeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Last Name</label>
                    <input type="text" name="lastName" className="form-control" value={ninjaInfo.lastName} onChange={changeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Number of Belts</label>
                    <input type="text" name="numBelts" className="form-control" value={ninjaInfo.numBelts} onChange={changeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Is Ninja a Veteran?</label>
                    <input type="text" name="isVeteran" className="form-control" value={ninjaInfo.firstName} onChange={changeHandler} />
                </div>
                <input type="submit" value="update ninja!" className="btn btn-success mt-3" />
            </form>
        </div>
    );
};

export default EditNinja;