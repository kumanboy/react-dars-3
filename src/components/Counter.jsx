import React from 'react'
import {useCounter} from "../useCounter.js";

const Counter = () => {
    const {count,increment , decrement ,reset}=useCounter(0)
    return (
        <div>
            <p>{count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}
export default Counter
