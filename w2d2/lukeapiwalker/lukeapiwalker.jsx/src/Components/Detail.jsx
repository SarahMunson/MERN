import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from 'axios';


const Detail = () => {
    const { category, id } = useParams();
    let [info, setInfo] = useState({})

    useEffect(() => {
        axios.get(`https:/swapi.dev/api/${category}/${id}`)
            .then(response => {
                console.log(response.data)
                setInfo(response.data)
            })
            .catch(err =>console.log(err))
    }, [category, id])

    return (
        <div className="App">
        {
            category === "people"?
            <>
            <h1>Category: {category}</h1>
            <h1>Name: {info.name} </h1>
            <p>Height: {info.height} </p>
            <p>Mass: {info.mass} </p>
            </>
            : category === "planets"?
            <>
            <h1>Name: {info.name}</h1>
            <p>Climate: {info.climate} </p>
            <p>Terrain: {info.terrain}</p>
            </>
            : category === "starships"?
            <>
            <h1>Name: {info.name}</h1>
            <p>Model: {info.model}</p>
            <p>Manufacturer: {info.manufacturer}</p>
            </>
            : <img src = "http://i0.wp.com/www.coffeewithkenobi.com/wp-content/uploads/2014/04/ObiWanKenobi-2.jpg"/>
        }
        </div>
    );
};

export default Detail;