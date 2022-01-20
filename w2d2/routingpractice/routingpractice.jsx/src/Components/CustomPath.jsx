import React from "react";
import { useParams } from "react-router-dom";


const CustomPath = () => {
    const { id, bgColor, textColor } = useParams();
        

    return (
    <div style={{ backgroundColor: ` ${bgColor} `, color: `${textColor}` }}>
        <h1>
            {
            isNaN(id)?
            {id}:
            <p>Number: {id}</p>
            }
        </h1>

    </div>
    )
}

export default CustomPath