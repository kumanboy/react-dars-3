import {useState,useEffect} from "react";

export const App = () => {
    const [data,setData] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos")
            const data = await response.json()
            if (data && data.length) setData(data)
        }
        getData()
    }, []);

    return(
        <div>
            <ul>
                {data.map((todo)=>(
                    <ul  key={todo.id}>
                        <li>{todo.title}</li>
                    </ul>

                ))}
            </ul>
        </div>
    )
}

