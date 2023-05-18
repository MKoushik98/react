import { useState,useEffect } from "react";
const Hooksex3=()=>{
    const [count,setCount]=useState(0)
    useEffect(()=>{
        document.title=`You clicked ${count} times`
    },[count])//Dependency array
    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>Click Me!</button>



        </div>
    )
}
export default Hooksex3