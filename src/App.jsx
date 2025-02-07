import {useId, useState} from "react";

export default function App(){
    const stableId = useState(useId())[0]; // Faqat bir marta ID yaratish
    const stablId = useState(useId())[0]; // Faqat bir marta ID yaratish

    return <div>
        <p>My stable ID: {stableId}</p>;
        <p>My stable ID: {stablId}</p>;
    </div>
}