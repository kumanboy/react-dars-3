import React from 'react'

const Salomlashish = () => {
    const title = "Salom"
    const name = "John"
    const date = new Date()
    return (
        <div>
            <h1>
                {title} {name}
            </h1>
            <p>
                bugungi sana: {date.getDate()}
            </p>
        </div>
    )
}
export default Salomlashish
