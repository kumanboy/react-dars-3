import ComponentBir from "./components/ComponentBir.jsx";
import ComponentIkki from "./components/ComponentIkki.jsx";
import {useState} from "react";

export const App = () => {
    const [number, setNumber] = useState(0);
    const [decrement, setDecrement] = useState(0);
    return (
        <section>
            <ComponentBir number={number} setNumber={()=>setNumber(number+1)} className={"title"}/>
            <ComponentIkki number={decrement} setNumber={()=>setDecrement((decrement-1))} className={"title"}/>
        </section>
    )
}