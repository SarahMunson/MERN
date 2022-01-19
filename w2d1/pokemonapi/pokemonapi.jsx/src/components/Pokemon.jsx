import React, {useState} from 'react';

const Pokemon = () => {

    let [listOfPokemon, setListOfPokemon] = useState([])

    const buttonSelect = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(response => {
            return response.json()
        })
        .then(response => {
            console.log(response)
            setListOfPokemon(response.results)
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
                        <p>{pokemonObj.name}</p>
                    </div>
                )
            })
        }
        </>
    )
}

export default Pokemon