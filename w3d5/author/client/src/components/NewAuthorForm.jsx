import React, { useState } from 'react';
import axios from 'axios'
import { useHistory, Link } from 'react-router-dom'

const NewAuthor = () => {
    let [authorName, setAuthorName] = useState({});

    const history = useHistory()

    const onSubmit = (e) => {
        e.preventDefault()
        let formInfoObj = { authorName }
        axios.post('http://localhost:8000/api/createnew', formInfoObj)
            .then(res => {
                console.log("response after creating an author", res)
                history.push('/')
            })
            .catch(err => console.log("error in creating author", err))
    }


    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className='form-group container'>
                <label style= {{color:'purple'}} className='fw-bold'>Author Name:</label>
                <input type="text" className='form-control' onChange={(e) => setAuthorName(e.target.value)} />
                <Link to='/' className='btn btn-info mt-3'>Cancel</Link>
                <input type="submit" value="Submit" className="btn btn-info mt-3 mx-3" />
                </div>
            </form>
        </div>
    );
};

export default NewAuthor;