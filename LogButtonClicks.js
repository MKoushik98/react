
import {useref,useState} from "react"
export default function LogButtonClicks(){
    const countRef=useref()
    const[hit,setHit]=useState(0)
    const handle=()=>{
        countRef.current++;
        console.log(`Clicked ${countRef.current} times`)
        setHit(countRef.current)
    }
    console.log("I rendered")
    return(
        <>
        <button onClick={handle}>Hit Me</button>
        <h3>Page hits occurs{hit} times</h3>
        
        
        </>
    )
}
