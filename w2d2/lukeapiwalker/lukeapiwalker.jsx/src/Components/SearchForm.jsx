import React, {useState, useEffect, useParams} from "react";
import axios from 'axios';
import { useHistory} from "react-router-dom";

const SearchForm = () => {
    let [categories, setCategories] = useState([]);
    //state variable for each input in this form
    let[selectedCategory, setSelectedCat] = useState("");
    let[id, setId] = useState(null)

    const history = useHistory();

    useEffect(()=>{
        axios.get("https://swapi.dev/api/")
        .then(response => {
            console.log(response)
            console.log(Object.keys(response.data)) //this gives an array of the keys from response.data
            setCategories(Object.keys(response.data))
            setSelectedCat(Object.keys(response.data)[0])
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted")
        history.push(`${selectedCategory}/${id}`)
    }
        
    return(
    <div>
    <form onSubmit={handleSubmit} className="d-flex justify-content-between" action="">
        <div className="form-group">
            <label htmlFor="">Search for</label>
            <select onChange={(e) => {setSelectedCat(e.target.value)}} className="form-select" name="" id="">
                {
                    categories.map((cat, i) => {
                        return (
                            <option key = {i} value={cat}>{cat}</option>
                        )
                    })
                }
            </select>
        </div>
        <div className="form-group">
            <label htmlFor="">
                ID
            </label>
            <input onChange={(e) => {setId(e.target.value)}} className="form-control" type="number" />
        </div>
            <input type="submit" value="" className="btn btn-success" value="search" />
    </form>
    </div>
    )
}

export default SearchForm