import React from "react";
import axios from "axios"
import { useEffect,useState } from "react";
export default function Apiex2(){
    const[info,setInfo]=useState({})
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then((res)=>{
           ( console.log(res.data))
            setInfo(res.data)
        })
        .catch((err)=>{(console.log(err))})
    },[])
    return(
        <>
        <h3>Api Data</h3>
        <ul>
            <li>Username:{info?.username}</li>
            <li>Email:{info?.email}</li>
            <li>Street:{info?.address?.city}</li>
            <li>lat:{info?.address?.geo?.lat}</li>
            <li>Company:{info?.company?.name}</li>
            <li></li>




        </ul>

        </>
    )
}