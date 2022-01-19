import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Pokemon = () => {
    let [listOfPokemon, setListOfPokemon] = useState([]);

    const poke = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807').then(response => {
            console.log(response);
            setListOfPokemon(response.data.results)
        })

            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
        <h1>List of Pokemon!</h1>
            <button onClick={() => poke()} className="btn btn-warning">Fetch Pokemon</button>
            {
                listOfPokemon.map((pokemon, i) => {
                    return (

                        <div key={i} style={{ border: "1px solid black" }}>

                            <p>{pokemon.name}</p>

                        </div>
                    )
                })
            }
        </>
    )
}

export default Pokemon;