import React from "react";
import { useState,useEffect } from "react";
export default function Countval(props){
    const [len,setLen]=useState(null);
    const[wrd,setWrd]=useState(null);
    const[vwl,setVwl]=useState(null);
    useEffect(()=>{
        setTimeout(()=>{
            let sent=props.inp
            setLen(sent.length)
            setWrd(sent.split(' ').length)
            let res=sent.match(/[aeiou]/gi)
            setVwl(res.length)

        })
    })

}