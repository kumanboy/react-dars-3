import {useState,useEffect} from "react";

const FetchDataEffect = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()
            setPosts(data)
        }
        fetchData()
    },[])
    const changeTitle = () =>{
        setPosts(
            posts.map(post => (post.id === 2 ? {...post,title:"Hello React"}: post))
        )
    }
    const deleteTitle = () =>{
        setPosts(
            posts.filter(post => post.id !== 2)
        )
    }
    return (
        <div>
            <h1>
                First Post Title:
            </h1>
            {posts.length > 0 ? <h2>{posts.map((post)=>(
                <h1 key={post.id}>
                    {post.title}
                </h1>
            ))}</h2>:<p>Loading...</p>}
            <button onClick={changeTitle}>change title</button>
            <button onClick={deleteTitle}>Delete</button>
        </div>
    )
}
export default FetchDataEffect
