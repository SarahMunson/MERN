import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

const AllAuthors = () => {
    let [allAuthors, setAllAuthors] = useState([])
    let [deleted, setDeleted] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/getall')
            .then(res => {
                console.log("getting all authors from the database", res)
                setAllAuthors(res.data.results)
            })
            .catch(err => console.log("error when getting all authors", err))
    }, [deleted])

    const deleteAuthor = (authorId) => {
        console.log("deleting author")
        axios.delete(`http://localhost:8000/api/deleteauthor/${authorId}`)
            .then(res => {
                console.log("result after deleting author", res)
                setDeleted(!deleted)
            })
            .catch(err => console.log("error when deleting author", err))
    }

    return (
        <div className='container'>
            <p style={{ color: 'purple' }} className='fw-bold'>We have quotes by:</p>
            <table className='table table-primary table-striped container'>
                <thead>
                    <tr>
                        <th scope='col'>Author</th>
                        <th scope='col'>Actions available</th>
                    </tr>
                </thead>
                <tbody>
                    {allAuthors.map((authorObj, i) => {
                        
                        return (
                            <tr key={i}>
                                <td>{authorObj.authorName}</td>
                                <td>
                                    <Link to={`/edit/${authorObj._id}`} className='btn'>Edit</Link>
                                    <button className='btn' onClick={() => deleteAuthor(authorObj._id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default AllAuthors;