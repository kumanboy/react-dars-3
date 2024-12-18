import React from 'react'
import ComponentIkki from "./ComponentIkki.jsx";

const ComponentBir = ({number,setNumber}) => {


    return (
        <>
            <p>{number}</p>
            <button onClick={setNumber}>increment</button>
        </>
    )
}
export default ComponentBir
