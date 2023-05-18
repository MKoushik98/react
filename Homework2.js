import React from "react";
import { useState,useRef } from "react";
export default function Homework2(){
    const list=[
        {
            id:1,
            name:"Koushik",
            price:"2222"
        },
        {
            id:2,
            name:"Kushal",
            price:"2244"
        }
    ]
    const[lists,setLists]=useState(list)




    return(
        <>
        <input type="text" name="name" placeholder="name your task"></input>
        <table>
            {
                list.map((current)=>(
                    <tr>
                        <td>{current.name}</td>
                        <td>{current.price}</td>
                        <td>
                            <button style={{color:"White",backgroundColor:"blue"}}>Edit</button>
                            <button style={{color:"white",backgroundColor:"red"}}>Delete</button>
                        </td>
                    </tr>
                ))
            }
        </table>
        
        
        </>
    )
}