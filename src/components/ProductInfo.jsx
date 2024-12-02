import React from 'react'

const ProductInfo = () => {
    const laptop = {
        name:"msi",
        price:1200,
        isAvailable:"Savdoda"
    }

    return (
        <div>
            ProductInfo
            <ul>
                <li>
                    laptop nomi: {laptop.name}
                </li>
                <li>
                    laptop narxi: {laptop.price}
                </li>
                <li>
                    laptop savdodami: {laptop.isAvailable}
                </li>
            </ul>
        </div>
    )
}
export default ProductInfo
