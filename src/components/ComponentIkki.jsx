import React from 'react'

const ComponentIkki = ({number,setNumber}) => {
    const increment= () => setNumber()

    return (
        <div>
            ComponentIkki
            <p>{number}</p>
            <button onClick={increment}>decrement</button>
        </div>
    )
}
export default ComponentIkki
