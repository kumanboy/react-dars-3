import React, {useContext} from 'react'
import {Data, Data1} from "../App.jsx";


const ComponentC = () => {
    const userName = useContext(Data);
    const userAge = useContext(Data1)
    return (
        <h1>My name is {userName} and i am {userAge} years old</h1>
         // <Data.Consumer>
         //     {(name)=>{
         //         return (
         //             <Data1.Consumer>
         //                 {
         //                     (age)=>
         //                         (
         //                             <h1>My name is {name} and i am {age} years old</h1>
         //                         )
         //
         //                 }
         //             </Data1.Consumer>
         //         )
         //     }}
         // </Data.Consumer>
    )
}
export default ComponentC



// import {Data} from "../App"
//
// const ComponentC = () => {
//     return (
//         <Data.Consumer>
//             {(name)=>{
//                 return (
//                     <h1>
//                         {name}
//                     </h1>
//                 )
//             }}
//         </Data.Consumer>
//     )
// }
// export default ComponentC