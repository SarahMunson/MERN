import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const OneNinja = () => {
    const { id } = useParams();
    const [ninjaDetails, setNinjaDetails] = useState({});
    const history = useHistory()

    useEffect(() => {

        axios.get(`http://localhost:8001/api/ninjas/${id}`)
            .then(res => {
                console.log("response when making request for one single ninja", res)
                setNinjaDetails(res.data.result)
            })
            .catch(err => console.log(err))
    }, [])

    const deleteNinja = () => {
        console.log("deleting!")
        axios.delete(`http://localhost:8001/api/ninjas/${id}`)
            .then(res => {
                console.log("response when deleting", res)
                history.push("/")
            })
            .catch(err => console.log("error", err))
    }

    return (
        <div>
            <p>Name: {ninjaDetails.firstName}  {ninjaDetails.lastName}</p>
            <p>Number of Belts: {ninjaDetails.numBelts}</p>
            <p>Veteran status: {ninjaDetails.isVeteran ? "Is a Veteran" : "Not a Veteran"}</p>
            <button onClick={deleteNinja} className="btn btn-danger">Delete</button>
        </div>
    );
};

export default OneNinja;