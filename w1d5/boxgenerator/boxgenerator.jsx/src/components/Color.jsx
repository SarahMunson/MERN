import React, { useState } from 'react';

const Color = (props) => {
    let [color, setColor] = useState("")
    let [listOfColors, setListOfColors] = useState([])

    const createColor = (e) => {
        e.preventDefault();
        let colorObj = { color }
        setListOfColors([...listOfColors, colorObj])
    }

    return (
        <div>
            <h1>Box Generator</h1>
            <form action="" onSubmit={createColor}>
                <input type="text" onChange={(e)=> setColor(e.target.value)} />
                <input type="submit" value="Add" />
            </form>
            {
                listOfColors.map((color)=> {
                return (
            <div style= {{backgroundColor: color.color, width: "100px", height: "100px", display:'inline-block', margin:'20px'}}></div>
            )
                })
            }
        </div>
    )
}

export default Color
