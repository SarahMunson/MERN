import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Link
} from 'react-router-dom';

const AllNinjas = (props) => {
    let [allNinjas, setAllNinjas] = useState([])
    let [deleted, setDeleted] = useState(false)

    useEffect(() => {

        axios.get("http://localhost:8001/api/ninjas")
            .then(res => {
                console.log("response when getting all ninjas -->", res)
                //response.data.results we want to save into state (this represents the array of objects)
                setAllNinjas(res.data.results)
            })
            .catch(err => console.log("error", err))
    }, [deleted, props.newNinjaAdded])

    const deleteNinja = (ninjaId) => {
        axios.delete(`http://localhost:8001/api/ninjas/${ninjaId}`)
            .then(res => {
                console.log("res when deleting", res)
                setDeleted(!deleted)
            })
            .catch(err => console.log("Houston, we have a problem!", err))
    }

    return (
        <div>
            {/* //this component needs to show all the ninjas and where are all the ninjas?
//all ninjas in routes */}
            {allNinjas.map((ninjaObj, i) => {
                return (
                    <div key={i} style={{ border: "1px solid black" }}>
                        <h4>{ninjaObj.firstName}  {ninjaObj.lastName}</h4>
                        <p>Number of Belts: {ninjaObj.numBelts}</p>
                        <p>
                            <Link className='btn btn-info' to={`/ninjas/${ninjaObj._id}`}>Details</Link> &nbsp;
                            <Link className='btn btn-warning' to={`/ninjas/edit/${ninjaObj._id}`}>Edit</Link>  &nbsp;
                            <button onClick={() => deleteNinja(ninjaObj._id)} className='btn btn-danger'>Delete</button>
                        </p>
                    </div>
                )
            })}
        </div>
    );
};

export default AllNinjas

