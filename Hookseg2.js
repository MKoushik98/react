
import React,{useState,useEffect} from "react";
export default function Hookseg2(){
    const[name,setName]=useState({firstname:"Koushik",surname:"Mohonta",})
    const[title,setTitle]=useState('Biology')
    useEffect(()=>{
        const timer=setInterval(()=>{
            setName({firstname:"Sourav",surname:"Kundu"})
            setTitle('Test React Js')
        },5000)
        return()=>clearInterval(timer)
    },[])
    const{firstname,surname}=name
    return(
        <div>
            <h1>title:{title}</h1>
            <h1>Name:{firstname}</h1>
            <h1>Surname:{surname}</h1>
        </div>
    )
}
