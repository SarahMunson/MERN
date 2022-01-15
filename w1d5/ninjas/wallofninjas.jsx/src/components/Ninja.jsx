import React, {useState} from 'react';

const Ninja = (props) =>{
    let [ninjaName, setNinjaName] = useState("");
    let [imageURL, setImageURL] = useState("");
    let [faveColor, setFaveColor] = useState("");
    let [graduated, setGraduated] = useState(false)

    let [listOfNinjas, setListOfNinjas] = useState([]);

    const createNinja = (e) =>{
        e.preventDefault(); //the default behavior of a form is ot reload the page and we are preventing that from happening because we don't want the page to reload
        let ninjaObj = {
            ninjaName,
            imageURL,
            faveColor,
            graduated
        }
        console.log(ninjaObj);
        setListOfNinjas([...listOfNinjas,ninjaObj]);
    }

    const graduateStudent = (idx) =>{
        let [...copyOfListOfNinjas] = listOfNinjas;
        copyOfListOfNinjas[idx].graduated = !copyOfListOfNinjas[idx].graduated

        setListOfNinjas(copyOfListOfNinjas)
    }

    return (
        <div>

        <form onSubmit={createNinja}>
            <div className="form-group">
            <label htmlFor="">Ninja name:</label>
            <input type="text" className="form-control" onChange={(e)=> setNinjaName(e.target.value)} />
            </div>
            <div className="form-group">
            <label htmlFor="">Image URL:</label>
            <input type="text" className="form-control" onChange={(e)=> setImageURL(e.target.value)} />
            </div>
            <div className="form-group">
            <label htmlFor="">Favorite Color:</label>
            <input type="text" className="form-control" onChange={(e)=> setFaveColor(e.target.value)} />
            </div>
            <input type="submit" value="Create Ninja!" />
        </form>
        <hr />
        <h3>Here are our list of Ninjas!</h3>
        {
            listOfNinjas.map((ninja, i)=>{
                return (
                    <div key = {i} style={{border: "1 px solid black", backgroundColor: ninja.faveColor, textDecoration: ninja.graduated? 'line-through': 'none'}}>
                    <h1>{ninja.ninjaName}</h1>
                    <p><img src={ninja.imageURL} alt="" width = "100px"/></p>
                    <p>Favorite color: {ninja.faveColor}</p>
                    <input type="checkbox" onClick={()=>graduateStudent(i)} />Graduate
                    </div>
                )
            })
        }
        </div>
    )
}

export default Ninja;