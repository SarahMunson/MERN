import React from "react";
import { useParams } from "react-router-dom";

const Id = () => {
    const { id } = useParams();

    return (
        <div className="app">
        { isNaN(id)?
            <p>welcome, {id}</p>:
            <p>the number is {id}</p>
        }
        </div>
    )
}

export default Id;