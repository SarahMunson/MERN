import React, {useState} from 'react';

const Pokemon = () => {

    let [listOfPokemon, setListOfPokemon] = useState([])

    const buttonSelect = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=200tps:")
        .then(response => {
            return response.json()
        })
        .then(response => {
            console.log(response)
            setListOfPokemon(response)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return(
        <>
        <h1>Pokemon</h1>
        <button onClick={buttonSelect}>Click here to see list of Pokemon</button>
        {
            listOfPokemon.map((pokemonObj, i) => {
                return (
                    <div>
                        <p>{pokemonObj.results[0]}</p>
                    </div>
                )
            })
        }
        </>
    )
}

export default Pokemon