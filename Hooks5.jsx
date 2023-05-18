import { useState } from "react";
export default function Hooks5()
{
    const[data,setData]=useState({nm:'sourav',ag:36,loc:'kolkata'});
    const valchng=(e)=>{
        setData({...data,[e.target.name]:[e.target.value]})
    }
    return(
        <>
        <ul>
            <li>{data.nm}</li>
            <input type="text" name="nm" onChange={valchng}></input>
            <li>{data.ag}</li>
            <input type="number" name="ag" onChange={valchng}></input>
            <li>{data.loc}</li>
            <input type="text" name="loc" onChange={valchng}></input>

        </ul>
        <br></br>
        
        
        
        </>
    )
}