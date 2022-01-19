import React, {useState} from 'react';

const CryptoCoinsUsingFetch = () => {

    //create a state variable to store the array of coins inside so that we can loop through this array and display each coin on the page
    let [listOfCoins, setListOfCoins] = useState([])

    const getCoins = () => {
        console.log("you clicked on the button")
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    //.then means what to do when we eventually get the response back. 
        .then(response => {
            console.log("got info back from api, here is the response", response)
            return response.json()
        })
        .then(response => {
            console.log("response after formatting it to json", response)
            setListOfCoins(response)
        })
    //.catch will run if there are any errors in the api that we are getting information from
        .catch(err => {
            console.log(err)
        })
    }


    //fetch is a function that accepts an api endpoint (some link that gets us data from an api) and it returns a promise. What this means is that the response we get back will arrive to our application in an undetermined amount of time. This is called a promise. A promise is a pattern where the eventual response and how long it will take to receive it is not known.
    

    console.log("this console. log is after the fetch promise, but will it run before the fetch get a response back? let's see!")
    

    return (
        <>
        <h3>Hello from crypto component</h3>
        <p><button onClick = {getCoins} >Click to get crypto coins showing</button></p>
        {
            listOfCoins.map((coinObj, i) => {
                return (
                    <div>
                        <h3>{coinObj.name}</h3>
                        <p>Price: {coinObj.current_price}</p>
                        <img src={coinObj.image} alt="" />

                    </div>
                )
            })
        }
        </>
    )
}

export default CryptoCoinsUsingFetch