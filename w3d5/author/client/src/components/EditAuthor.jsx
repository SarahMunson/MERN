import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom'

const EditAuthor = () => {
    const { id } = useParams()

    let [authorInfo, setAuthorInfo] = useState({
        authorName: ""
    })

    let [formErrors, setFormErrors] = useState({})

    // we're going to need a get request to autofill a form with information about the author

    useEffect(() => {
        axios.get(`http://localhost:8000/api/findone/${id}`)
            .then(res => {
                console.log("response from one author", res)
                setAuthorInfo(res.data.results)
            })
            .catch(err => console.log("error when getting one author", err))
    }, [])

    const changeHandler = (e) => {
        console.log("a change occured on the form")
        setAuthorInfo({
            ...authorInfo,
            [e.target.name]: e.target.value
        })
    }

    const history = useHistory()

    const onSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/updateauthor/${id}`, authorInfo)
            .then(res => {
                console.log("response after updating an author", res)
                if(res.data.error){
                    setFormErrors(res.data.error.errors)
                }
                else{
                    history.push('/')
                }
            })
            .catch(err => console.log("error in updating author", err))
    }

    return (
        <div className='container'>
            <a href='/'>Home</a>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label style={{ color: 'purple' }} className='fw-bold'>Edit this author:</label>
                    <input type="text" name="authorName" className='form-control' value={authorInfo.authorName} onChange={changeHandler} />
                    <p className='text-danger'>{formErrors.authorName?.message}</p>
            
                    <a href='/' className='btn btn-info mt-3'>Cancel</a>
                    <input type="submit" value="Submit" className="btn btn-info mt-3 mx-3" />
                </div>
            </form>
        </div>
    );
};

export default EditAuthor;