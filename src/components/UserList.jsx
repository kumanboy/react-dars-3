import React from 'react'

const UserList = () => {
    const products = [
        { id: 1, nomi: "Telefon", narxi: "$699" },
        { id: 2, nomi: "Noutbuk", narxi: "$1200" },
        { id: 3, nomi: "Naushniklar", narxi: "$199" }
    ]

    return (
        <div>
            UserList
            {products.map(product => (
                <ol key={product.id}>
                    <li>Nomi: {product.nomi}</li>
                    <li>Narxi: {product.narxi}</li>
                </ol>
            ))}
        </div>
    )
}
export default UserList
