import axios from "axios";
import React from "react";
import { useState,useEffect } from "react";
export default function Apiex4(){
    const [info,setInfo]=useState([])
    useEffect(()=>{
        setTimeout(()=>{

        
        axios.get('http://jsonplaceholder.typicode.com/users')    
        .then((res)=>{
            // console.log(res.data)
            setInfo(res.data)

        })
        .catch((err)=>{console.log(err)

        })
    })
},5000)

return(
    <>
    <table>
        
            <tr>
                <td>Username</td>
                <td>Email</td>
                <td>Street</td>
                <td>Lat</td>
                <td>Name</td>
            </tr>
        
        {
            info.map((val)=>{
                return(
                    <tr>
                        <td>{val?.username}</td>
                        <td>{val?.email}</td>
                        <td>{val?.address?.street}</td>
                        <td>{val?.address?.geo?.lat}</td>
                        <td>{val?.company?.name}</td>
                       




                    </tr>
                )

            })
        }



    </table>
    
    
    
    </>
)
}