import React from "react";
import axios from "axios";
import { useState } from "react";
export default function Apiex1(){
    const [info,setInfo]=useState({})
    const apicall=()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then((res)=>{
            console.log("res"+res.data)
            setInfo(res.data)
        })
        .catch(
            (err)=>{
                console.log(err)
            }
        )
        .finally(()=>{
            alert("Api call is over")}
        
        )
    }
    return(
        <>
        <h3>Api Testting</h3>
        <input type="button" value="APICALL" onClick={apicall}></input>
        <ul>
            <li>User Id:{info.userId}</li>
            <li> Id:{info.Id}</li>
            <li>Title:{info.title}</li>
            <li>Body:{info.body}</li>


        </ul>
        
        </>
    )
}
